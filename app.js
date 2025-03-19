const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
const routers = require("./router")
const macAuthMiddleware = require("./middlewares/macAuth")
require('dotenv').config()
app.use(cors({
    origin: "http://localhost:5173"||"https://astonishing-rolypoly-f724a2.netlify.app/", // Change this to your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
const port = process.env.PORT
// ✅ Middleware to parse JSON
app.use(express.json());

// ✅ Middleware to parse URL-encoded data (optional but useful)
app.use(express.urlencoded({ extended: true }));
app.use('/api', routers)

app.get("/api/auth/validate-mac", macAuthMiddleware, (req, res) => {
    res.json({ allowed: true, message: "Access Granted: MAC Address Authorized" });
});

app.get('/', (req, res) => {
    res.send('Hello World')
})
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
