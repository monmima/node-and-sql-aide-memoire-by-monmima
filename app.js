// https://www.youtube.com/watch?v=EN6Dx22cPRI

const express = require("express");
const path = require('path');
const mysql = require("mysql");

// create connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",

    // une fois l'appli créée, on peut décommenter la ligne suivante
    database: "nodemysql"
});

// connect
db.connect((err) => {
    if (err) {
        throw err;
    }

    console.log("MySql connected...");
});

const app = express();

/**
 * serving static files from the "public" folder
 * this includes: image, HTML and JS files, etc.
 */
app.use(express.static(path.resolve(__dirname, 'public')));

// /**
//  * handling 404 errors
//  * source: https://expressjs.com/en/starter/faq.html
//  */
// app.use(function (req, res, next) {
//     res.status(200).send("404 - Sorry can't find that!")
// });

// create DB
app.get("/createdb", (req, res) => {
    let sql = "CREATE DATABASE nodemysql";
    db.query(sql, () => {
        if (err) {
            throw err;
        } else {
            console.log(result);
            res.status(200).send("Database created...");
        }
    });
});

// create table
app.get("/create-post-table", (req, res) => {
    let sql = "CREATE TABLE posts (id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY (id))";

    db.query(sql, (err, result) => {
        console.log(result);
        res.status(200).send("Posts table created...");
    });
});

// insert post 1
app.get("/add-post-1", (req, res) => {
    let post = {title: "Post One", body: "This is post number 1."}
    let sql = "INSERT INTO posts SET ? ";
    let query = db.query(sql, post, (err, result) => {
        if (err) {
            throw err;
        } else {
            console.log(result);
            res.status(200).send("Post 1 added...");
        }
    });
});

// insert post 2
app.get("/add-post-2", (req, res) => {
    let post = {title: "Post 2", body: "This is post number 2."}
    let sql = "INSERT INTO posts SET ? ";
    let query = db.query(sql, post, (err, result) => {
        if (err) {
            throw err;
        } else {
            console.log(result);
            res.status(200).send("Post 2 added...");
        }
    });
});

// read/select posts
app.get("/get-posts", (req, res) => {

    let sql = "SELECT * FROM posts";
    let query = db.query(sql, (err, results) => {
        if (err) {
            throw err;
        } else {
            console.log(results);
            // res.status(200).send(results);

            res.status(200).status(200).json(results);

            // res.status(200).send((results));
        }
    });
});

// select single post
app.get("/get-post/:id", (req, res) => {
    let sql = `SELECT * FROM posts WHERE id = ${req.params.id}` ;
    let query = db.query(sql, (err, result) => {
        if (err) {
            throw err;
        } else {
            console.log(result);
            res.status(200).status(200).send("Post fetched...");
        }
    });
});

// update post
app.get("/update-post/:id", (req, res) => {
    let newTitle = "Updated Title";
    let sql = `UPDATE posts SET title = "${newTitle}" WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if (err) {
            throw err;
        } else {
            console.log(result);
            res.status(200).send("Post updated...");
        }
    });
});

// delete post
app.get("/delete-post/:id", (req, res) => {
    let newTitle = "Updated Title";
    let sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if (err) {
            throw err;
        } else {
            console.log(result);
            res.status(200).send("Post deleted...");
        }
    });
});

// delete posts
app.get("/delete-posts", (req, res) => {
    let newTitle = "Updated Title";
    let sql = `DELETE FROM posts`;
    let query = db.query(sql, (err, result) => {
        if (err) {
            throw err;
        } else {
            console.log(result);
            res.status(200).send("Posts deleted...");
        }
    });
});

/**
 * handling 404 errors
 * source: https://expressjs.com/en/starter/faq.html
 */
app.use(function (req, res, next) {
    res.status(404).send("404 - Sorry can't find that!")
})

app.listen("3000", () => {
    console.log("Server started on port 3000");
});