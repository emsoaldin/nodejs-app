const express = require('express');
const cors = require('cors');
const sync = require('./modules/sync');
const app = express();

const corsOptions = {
  origin: 'http://localhost:8081',
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Index route
app.get('/', (req, res) => {
  res.json({ message: 'From Vogosca with love :)' });
});

// Require router
require('./modules/router/auth')(app);
require('./modules/router/users')(app);

// Initialize server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

sync();
