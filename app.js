const express = require("express");

const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));



//Route for homepage
app.get("/", (request, response, next) => {
    response.sendFile(__dirname + '/views/home.html');
});


//Route for contact page
app.get("/contact", (request, response, next) => {
    response.sendFile(__dirname + '/views/contact-page.html');
})



app.listen(3001, () => { console.log("server listening on port 3001")});