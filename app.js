const express = require('express');
const app = express();
const constants=require('./constants/globalconstants');

app.get('/', (req, res) => res.send('Notes App'));

app.listen(constants.PORT, () => console.log(`netvpapp listening on port ${constants.PORT}!`));

module.exports=app;