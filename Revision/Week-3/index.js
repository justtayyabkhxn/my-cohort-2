const bodyParser = require("body-parser");
const express = require("express");
const z = require("zod");
const port = 3000;
const app = express();
app.use(bodyParser.json());

const usernameSchema = z.string().email();
const passwordSchema = z.string().max(8);

app.get('/a', (req, res) => {
    const userObj = req.body;
    const username = userObj.username;
    const password = userObj.password;
    const usernameResponse = usernameSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);
    if (usernameResponse.success && passwordResponse.success) {

        console.log(userObj);
        res.json({
            nam: userObj,
            mess: "Hello dost"
        });
    }
    else
        res.json({
            msg: "Invalid user details"
        })
})

app.listen(port);