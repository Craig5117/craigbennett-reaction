const express = require('express');
const routes = require("./routes");
const app = express();
const port = process.env.PORT || 5000;

// middleware for post requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(port, () => console.log(`Listening on port ${port}`))