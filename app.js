const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const homeRouter = require('./routes/home');
const aboutRouter = require('./routes/about');
const contentRouter = require('./routes/content');


app.use('/', homeRouter);
app.use('/about', aboutRouter);
app.use('/content', contentRouter);


// Start Server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
