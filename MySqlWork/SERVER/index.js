const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();
const cookieparser = require("cookie-parser")

require('dotenv').config();

const userroute = require("./routers/user.route");

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  
    allowedHeaders: ['Content-Type'], 
    credentials: true,  
  }));


// Middleware
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cookieparser());



app.use("/user", userroute);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

