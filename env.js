const dotenv = require('dotenv');

dotenv.config();

exports.env = { ...process.env };
