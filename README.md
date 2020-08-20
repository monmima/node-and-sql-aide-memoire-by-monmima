# node-and-sql-aide-memoire-by-monmima

## Node.js + SQL

This is an aide-mémoire (i. e., reference) for myself, but maybe you'll find it useful too!

## Node.js

This project was influenced by Brad Traversy's tutorial on MySQL and Node.js. He named his tutorial [Using MySQL With Node.js](https://www.youtube.com/watch?v=EN6Dx22cPRI).

Also, [Mosh Hamedani's Node.js tutorial on YouTube](https://www.youtube.com/watch?v=TlB_eWDSMt4) made it possible for me to create the .ejs-1 page, which documents Node.js.

Finally, I was influenced by my own [Node and MongoDB CRUD aide-mémoire](https://github.com/monmima/node-and-mongodb-crud-aide-memoire-by-monmima).


## SQL

For more information on SQL, here are some great resources:

1. Brad Traversy has created a MySQL cheatsheet, which is [available on Github Gist](https://gist.github.com/bradtraversy/c831baaad44343cc945e76c2e30927b3).
2. Mosh Hamedami has created a [3-hour course](https://www.youtube.com/watch?v=7S_tz1z_5bA) on YouTube with an index indicating where each topic is located in it.
3. W3School has a great [SQL tutorial](https://www.w3schools.com/sql/). I have a soft spot for the [exercices](https://www.w3schools.com/sql/sql_exercises.asp), which really helped me crystallize my understanding of SQL syntax by dint of repetition.

### Database location

**As you can see by looking at the project folder, I placed the SQL database at the root level, but obviously it won't run just like that.** It needs to be imported to phpmyadmin locally (or remotely, but that will require a bit more tweaking on your part).

### Full text indexes

In case you want to have a search field that only returns complete words, you need to use what's called full text indexes. The New Boston has an [excellent tutorial on this topic](https://www.youtube.com/watch?v=d--v0NhjIfc).

- To create the index, use: ALTER TABLE my_table_tb ADD FULLTEXT(table_column)
- To search the index, use: SELECT * my_table_tb WHERE MATCH(table_column) AGAINST('%my-query%')

### Importing CSV data to phpMyAdmin

1. Click on the database in the left-hand panel (***not the table, but really the database***)
2. Browse and select your CSV file
3. Columns separated with: \t
4. Columns enclosed with: (nothing at all)
5. Columns escaped with: (nothing at all)
6. Tick the box "The first line of the file contains the table column names"

If you run into a bug, try to upload a smaller sample of your database. If you still get a bug, it's likely caused by a size limit on the importation. To solve this problem, try this (**under Linux Mint**):

1. Copy this file on on the desktop: /opt/lampp/etc/my.cnf
2. Change the value of "max_allowed_packet" to "500M" (**this is unlikely to work directly in the folder, this is why the file was copied elsewhere**)
3. Copy the file back where it was, destroying the previous version in the process

Additionnally the following steps might help:

4. Go the this folder: /opt/lampp/etc/php.ini
5. Change the value of "post_max_size" to "100M"
6. There might be one more modification to carry out in the same folder. I had to try so many things here that I can't quite remember, but I can garantee it shoudn't be so hard to find. Worst case: just copy your error message in your favorite search engine and look for something to change in the php.ini file.

Another possible bug is **Invalid column count in CSV input on line 1.** If you run into this bug, you need to use the **Column names:** field.

## EJS: You don't want to learn it for now? No problem!

There are a few pages of the site/app using EJS.

If you don't want to learn EJS from the get-go or if you don't want to be overwhelmed as a newcomer to MySQL and Node.js, just don't take into account this part of the code. It is **NOT** used all over the place in the project.

Once you feel comfortable with Node.js and MySQL, then you'll be ready for EJS. EJS is a templating tool that enables you to insert data from your database into .ejs files, which are then rendered into HTML. The simplest form of EJS would be a regular old HTML page, but with an .ejs extension (but of course, that would be pointless).

If you do want to learn EJS, it's pretty straightforward. A good place to start is this aide-mémoire and another is [WalkthroughCode's EJS tutorial](https://github.com/monmima/node-ejs-tutorial-by-walkthroughcode).

## Linux Mint

### Installing and running MySQL on Linux Mint

**Obviously, you can use Microsoft, Linux or the Macintosh operating system** to run this project, but I'm keeping these steps below just in case I get stuck again.

1. download XAMPP for Linux from https://www.apachefriends.org/download.html
2. Run the .run file as a root user
3. the folder containing the .run file can be found at /opt/lampp/
4. go to localhost/dashboard/
5. or go to localhost/phpmyadmin
6. create a database and then import the database content into it if needs be ***(you cannot create a database directly from a file you want to import)***

Apparently, the path can be a bit different from one Linux distro to the other.