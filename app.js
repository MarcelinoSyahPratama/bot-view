const express = require('express');
const bodyParser = require('body-parser')
const routes = require('./routes');
const app = express();

routes(app);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.listen(3000, () => {
    console.log(`Server started on port`);
});