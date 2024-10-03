
const express = require('express');
const app = express();
const path = require('path');

const userModel = require('./models/user');

const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/read", async (req, res) => {
    let users = await userModel.find();
    // let users = [];

    res.render("read", { users });
    // res.send(users);
});

app.post("/create", async (req, res) => {
    let { name, email, image } = req.body;

    let createdUser = await userModel.create({
        name,     // if both sides having same "name", then just write single variable & it will converts into =>   // name: name,
        email,    // if both sides having same "email", then just write single variable & it will converts into =>  // email: email,
        image    // if both sides having same "image", then just write single variable & it will converts into =>  // image: image
    });

    res.redirect("/read");
});

app.get("/show/:userid", async (req, res) => {
    let user = await userModel.findOne({ _id: req.params.userid })
    res.render("showUser", { user: user });
});


app.post("/update/:userid", async (req, res) => {
    let { newname, newemail, newimage } = req.body;

    let updatedUser = await userModel.findOneAndUpdate({ _id: req.params.userid }, { name: newname, email: newemail, image: newimage })
    res.redirect("/read")
});


app.get("/edit/:userid", async (req, res) => {
    let user = await userModel.findOne({ _id: req.params.userid });
    res.render("edit", { user });
});


app.get("/delete/:id/", async (req, res) => {
    let deletedUser = await userModel.findOneAndDelete({ _id: req.params.id });
    res.redirect("/read");
});


app.listen(PORT, () => {
    console.log(`Running on - ${PORT}`)
});