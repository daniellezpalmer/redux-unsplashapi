# redux-unsplashapi

To run this project you will need your own token from Unsplash's API.

API Access: 

The first thing you'll need to do is to sign up for an account. You can do that at https://unsplash.com/developers, just click the Register as a developer button.

You'll need to specify your first and last name, email address and username/password combination. Once you join you should visit the Terms page and click the Continue button.

On the developer profile page, you don't need to specify a URL, and under the "What are you going to build?" section, you can just say, "School Project".

You'll then be directed to your Applications Page, where you need to click the New Application button. Provide any name you'd like and just leave the Public Access box checked. Once complete, you'll be taken to a page that contains your Application ID.

Adding Token to Project:

In the src folder, create a file called token.js. In that file creat a const called token with your unique application ID.

Make sure you export it. The const token is already exported into actions.js.

