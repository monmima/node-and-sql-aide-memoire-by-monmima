# node-and-sql-aide-memoire-by-monmima

## Node.js + SQL

This is an aide-mémoire (i. e., mnemonic device) for myself, but maybe you'll find it useful too!

## Node.js

This project was influenced by Brad Traversy's tutorial on MySQL and Node.js. He named his tutorial [Using MySQL With Node.js](https://www.youtube.com/watch?v=EN6Dx22cPRI).

Also, [Mosh Hamedani's Node.js tutorial on YouTube](https://www.youtube.com/watch?v=TlB_eWDSMt4) made it possible for me to create the .ejs-1 page, which documents Node.js.

Finally, I was influenced by my own [Node and MongoDB CRUD aide-mémoire](https://github.com/monmima/node-and-mongodb-crud-aide-memoire-by-monmima).


## SQL

For more information on SQL, here are some great resources:

1. Brad Traversy has created a MySQL cheatsheet, which is [available on Github Gist](https://gist.github.com/bradtraversy/c831baaad44343cc945e76c2e30927b3).
2. Mosh Hamedami has created a [3-hour course](https://www.youtube.com/watch?v=7S_tz1z_5bA) on YouTube with an index indicating where each topic is located in it.
3. W3School has a great [SQL tutorial](https://www.w3schools.com/sql/). I have a soft spot for the [exercices](https://www.w3schools.com/sql/sql_exercises.asp), which really helped me crystallize my understanding of SQL syntax by dint of repetition.

**As you can see by looking at the project folder, I placed the SQL database at the root level, but obviously it won't run just like that.** It needs to be imported to phpmyadmin locally (or remotely, but that will require a bit more tweaking on your part).

## EJS: You don't want to learn it for now? No problem!

There are a few pages of the site/app using EJS.

If you don't want to learn EJS from the get-go or if you don't want to be overwhelmed as a newcomer to MySQL and Node.js, just don't take into account this part of the code. It is **NOT** used all over the place in the project.

Once you feel comfortable with Node.js and MySQL, then you'll be ready for EJS. EJS is a templating tool that enables you to insert data from your database into .ejs files, which are then rendered into HTML. The simplest form of EJS would be a regular old HTML page, but with an .ejs extension (but of course, that would be pointless).

## Installing and running MySQL on Linux Mint

**Obviously, you can use Microsoft, Linux or the Macintosh operating system** to run this project, but I'm keeping these steps below just in case I get stuck again.

1. download XAMPP for Linux from https://www.apachefriends.org/download.html
2. Run the .run file as a root user
3. the folder containing the .run file can be found at /opt/lampp/
4. go to localhost/dashboard/
5. or go to localhost/phpmyadmin

Apparently, the path can be a bit different from one Linux distro to the other.