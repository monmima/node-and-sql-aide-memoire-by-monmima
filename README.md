# node-and-sql-aide-memoire-by-monmima

This is an aide-mémoire (i. e., mnemonic device) for myself, but maybe you'll find it useful too!

## Node.js + SQL

This project was influenced by Brad Traversy's tutorial on MySQL and Node.js. It's called [Using MySQL With Node.js](https://www.youtube.com/watch?v=EN6Dx22cPRI).

By the way, Brad Traversy has also created a MySQL cheatsheet, which he [made available on Github Gist](https://gist.github.com/bradtraversy/c831baaad44343cc945e76c2e30927b3).

Also, [Mosh Hamedani's tutorial on YouTube](https://www.youtube.com/watch?v=TlB_eWDSMt4) made it possible for me to create the .ejs-1 page, which documents Node.js.

Finally, I was influenced by my own [Node and MongoDB CRUD aide-mémoire](https://github.com/monmima/node-and-mongodb-crud-aide-memoire-by-monmima).

## EJS: You don't want to learn it for now? No problem!

There are a few pages of the site/app using EJS.

If you don't want to learn EJS from the get-go or if you don't want to be overwhelmed as a newcomer to MySQL and Node.js, just don't take into account this part of the code. It is **NOT** used all over the place in the project.

Once you feel comfortable with Node.js and MySQL, then you'll be ready for EJS. EJS is a templating tool that enables you to insert data from your database into .ejs files, which are then rendered into HTML. The simplest form of EJS would be a regular old HTML page, but with an .ejs extension (but of course, that would be pointless).

## Installing and running MySQL on Linux Mint

**Obviously, you can use Microsoft, Linux or the Macintosh operating system** to run this project, but I'm keeping these steps below just in case I get stuck again.

Apparently, the path can be a bit different from one Linux distro to the other.

1. download XAMPP for Linux from https://www.apachefriends.org/download.html
2. Run the .run file as a root user
3. the folder containing the .run file can be found at /opt/lampp/
4. go to localhost/dashboard/
5. or go to localhost/phpmyadmin
