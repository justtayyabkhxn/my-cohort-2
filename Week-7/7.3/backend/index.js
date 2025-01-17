const express = require("express");

const app = express();
const PORT = 3000;
const cors=require("cors");

app.use(cors());

app.get("/notifs", (req, res) => {
    res.json({
        "network": parseInt(Math.random() * 100),
        "jobs": parseInt(Math.random() * 100),
        "messaging": parseInt(Math.random() * 100),
        "notifications": parseInt(Math.random() * 100)
    });
});

// Added a callback function to confirm server start
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
