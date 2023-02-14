# The Tech Blog

## Table of Contents

1. [Description](#desc)
2. [Installation](#install)
3. [Usage](#usage)
4. [Demo](#demo)
5. [License](#license)

<a name="desc"></a>
## Description 

An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.

<a name="install"></a> 
## Installation

1. Clone this repo and update database credentials by entering your MySQL password located .env.EXAMPLE.
2. Rename the file to ".env".
3. Upload SQL script to your database, which is located in db > schema.sql.
4. Seed the database by entering `npm run seed` into your terminal.
5. Install this application's dependencies by entering `npm i` into your terminal.
6. Invoke app by entering `npm run dev` into your terminal.

<a name="usage"></a> 
## Usage

* Upon opening the application, if there are no posts in the database, the user is encouraged to either login or sign up for an account.
* Once an account has been created, the user will be redirected to the home page and pointed to creating their first post from the dashboard.
* While logged in, clicking on a post title from the home page will allow users to leave a comment.
* While logged in, clicking on a post title from the dashboard will allow the user to edit the post or delete it.
* When logged out, clicking on a post title from the home page will allow users to view all comments attached to the post.

![Sign up thumbnail](./screenshots/Sign-Up-The-Tech-Blog.png)
![Home page thumbnail](./screenshots/Home-The-Tech-Blog.png)
![Dashboard thumbnail](./screenshots/Dashboard-The-Tech-Blog.png)
![Create new post thumbnail](./screenshots/Create-New-Post-The-Tech-Blog.png)

<a name="demo"></a> 
## Demo

Here's a [video](https://youtu.be/UQWiPuTmdt8) of The Tech Blog in use.

[![Video thumbnail](./screenshots/Login-The-Tech-Blog.png)](https://youtu.be/UQWiPuTmdt8)

<a name="license"></a> 
## License

All code is released under the [GNU General Public License](https://www.gnu.org/licenses/gpl-3.0.en.html).