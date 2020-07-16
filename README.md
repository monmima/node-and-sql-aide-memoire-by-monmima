# node-and-sql-aide-memoire-by-monmima

## Node.js + SQL

This project was influenced by Brad Traversy's tutorial on MySQL and Node.js. It's called (Using MySQL With Node.js)[https://www.youtube.com/watch?v=EN6Dx22cPRI].

It was also influenced by my (Node and MongoDB CRUD aide-mémoire)[https://github.com/monmima/node-and-mongodb-crud-aide-memoire-by-monmima].

It's an aide-mémoire for myself, but maybe you'll find it useful too!

## EJS: You don't want to learn it for now? No problem!

There are a few pages of the site/app using EJS.

If you don't want to learn EJS from the get-go or if you don't want to be overwhelmed as a newcomer to MySQL and Node.js, just don't take into account this part of the code. It is **NOT** used all over the place in the project.

Once you feel comfortable with Node.js and MySQL, then you'll be ready for EJS. EJS is a templating tool that enables you to insert data from your database into .ejs files, which are then rendered into HTML. The simplest form of EJS would be a regular old HTML page, but with an .ejs extension (but of course, that would be pointless).

## MySQL

I have to give credit where credit is due. Most of the content below is from notes I took while watching (Brad Traversy's SQL Crash Course on YouTube)[https://www.youtube.com/watch?v=9ylj9NR0Lcg]. Thanks for making your tutorial!

By the way, Brad Traversy has also created a MongoDB cheatsheet, which he (made available on Github Gist)[https://gist.github.com/bradtraversy/c831baaad44343cc945e76c2e30927b3]. His cheat sheet actually seems more complete than what you have below!

## Installing MySQL on Linux Mint

- download XAMPP for Linux from https://www.apachefriends.org/download.html
- Run the .run file as a root user
- the folder containing the .run file can be found at /opt/lampp/manager-linux-x64.run
- go to localhost/dashboard/
- or go to localhost/phpmyadmin
