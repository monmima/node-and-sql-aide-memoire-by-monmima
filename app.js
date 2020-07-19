// https://www.youtube.com/watch?v=EN6Dx22cPRI

const express = require("express");
const path = require('path');
const bodyParser = require('body-parser'); // needed to read the content from the form
const mysql = require("mysql");

// using express and the body-parser module
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// create connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",

    // once the app is create you can uncommented the next line
    // (one of them if there are two lines below)
    // database: "node_and_sql_aide_memoire_db"
    database: "node_and_sql_aide_memoire_db"
});

// connect
db.connect((err) => {
    if (err) {
        throw err;
    }

    console.log("MySql connected...");
});

/**
 * EJS
 * concatenate the current working directory
 * and a folder called views
 */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/**
 * serving static files from the "public" folder
 * this includes: image, HTML and JS files, etc.
 */
app.use(express.static(path.resolve(__dirname, 'public')));

// insert post-form
app.post("/add-post-form", (req, res) => {
    let post = {title: req.body.title, body: req.body.body}
    let sql = "INSERT INTO posts_tb SET ? ";
    let query = db.query(sql, post, (err, myRes) => {
        if (err) {
            throw err;
        } else {
            console.log(myRes);
            res.status(200).send("Post added...");
        }
    });
});

// insert post 1
app.get("/add-post-1", (req, res) => {
    let post = {title: "Titulus est", body: "Argumentum baculinum non semper decorum est..."}
    let sql = "INSERT INTO posts_tb SET ? ";
    let query = db.query(sql, post, (err, myRes) => {
        if (err) {
            throw err;
        } else {
            console.log(myRes);
            res.status(200).send("Post added...");
        }
    });
});

// insert post 2
app.get("/add-post-2", (req, res) => {
    let post = {title: "Titulus alter est", body: "Vicus gallicus parvus est."}
    let sql = "INSERT INTO posts_tb SET ? ";
    let query = db.query(sql, post, (err, myRes) => {
        if (err) {
            throw err;
        } else {
            console.log(myRes);
            res.status(200).send("Post added...");
        }
    });
});

// read/select posts
app.get("/get-posts", (req, res) => {

    let sql = "SELECT * FROM posts_tb";
    let query = db.query(sql, (err, myRes) => {
        if (err) {
            res.status(200).send("Are you sure you have created a table?");
            throw err;

        } else {
            console.log(myRes);
            // res.status(200).send(myRes);

            res.status(200).json(myRes);

            // res.status(200).send((myRes));
        }
    });
});

// select single post
app.get("/get-post/:id", (req, res) => {
    let sql = `SELECT * FROM posts_tb WHERE id = ${req.params.id}` ;
    let query = db.query(sql, (err, myRes) => {
        if (err) {
            throw err;
        } else {
            res.status(200).json(myRes);
        }
    });
});

// update post
app.get("/update-posts", (req, res) => {
    let newTitle = "Updated Title";
    let sql = `UPDATE posts_tb SET title = "${newTitle}"`;
    let query = db.query(sql, (err, myRes) => {
        if (err) {
            throw err;
        } else {
            console.log(myRes);
            res.status(200).send("All posts updated...");
        }
    });
});

// delete posts
app.get("/delete-posts", (req, res) => {
    let newTitle = "Updated Title";
    let sql = `DELETE FROM posts_tb`;
    let query = db.query(sql, (err, myRes) => {
        if (err) {
            throw err;
        } else {
            console.log(myRes);
            res.status(200).send("All posts deleted...");
        }
    });
});


/**
 * EJS template 1
 * https://www.w3schools.com/nodejs/shownodejs_cmd.asp?filename=demo_mongodb_query
 */
app.get('/ejs-1', (req, res) => {
    res.status(200).render("ejs-1");
});

/**
 * EJS template 2
 * https://www.w3schools.com/nodejs/shownodejs_cmd.asp?filename=demo_mongodb_query
 */
app.get('/ejs-2', (req, res) => {
    res.status(200).render("ejs-2", {
        node : {
            dirname: __dirname,
            filename: __filename
        }
    });
});

/**
 * EJS template 3
 * https://www.w3schools.com/nodejs/shownodejs_cmd.asp?filename=demo_mongodb_query
 */
app.get('/ejs-3', (req, res) => {
    let sql = "SELECT * FROM posts_tb";

    db.query(sql, (err, myRes) => {
        if (err) {
            throw err;
        } else {
            console.log(myRes);

            res.status(200).render("ejs-3", { post : myRes });

        }
    });
});

/**
 * handling 404 errors
 * source: https://expressjs.com/en/starter/faq.html
 */
app.use(function (req, res, next) {
    res.status(404).send("404 - Sorry can't find that!")
});

app.listen("3000", () => {
    console.log("Server started on port 3000");
});