var express = require('express');
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
var app = express();

const dbURI = 'mongodb+srv://HariParanth:veradis123@nodetuts.bwv1y.mongodb.net/NodeEx?retryWrites=true&w=majority';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log("Connected to db"))
    .catch((err) => console.log("some error occured"));

var personSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true

    },
    password: {
        type: String,
        required: true
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],
});

var Login = mongoose.model("LoginCredential", personSchema);
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
    extended: true
}));

const port = process.env.PORT || 3000
app.get('/', function (req, res) {
    Login.find((err, docs) => {
        if (!err) {
            res.json(docs);
        } else {
            res.send('error')
        }
    })
});

app.post('/hello', function (req, res) {
    res.send("You just called the post method at '/hello'!\n");
});

app.listen(port);