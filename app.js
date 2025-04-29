const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello from OpenShift! 🚀'));
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`App listening on port ${port}`));
