const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
const routers = require("./router")
require('dotenv').config()
app.use(cors())
const port = process.env.PORT
// ✅ Middleware to parse JSON
app.use(express.json());

// ✅ Middleware to parse URL-encoded data (optional but useful)
app.use(express.urlencoded({ extended: true }));
app.use('/api', routers)

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
})

    .then(() => {
        console.log('Connected to MongoDB');
    }).catch((error) => {
        console.error('Error connecting to MongoDB', error);
    });
app.listen(port, () => {
    console.log(`server is running on port ${port}`);

})
