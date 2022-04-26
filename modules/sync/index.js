const axios = require('axios');
const bcrypt = require('bcryptjs');
const db = require('../models');
const User = db.user;

// sync users from https://tqescmur5j.execute-api.us-west-1.amazonaws.com/sandbox/get-users
module.exports = async () => {
  const res = await axios.get(
    'https://tqescmur5j.execute-api.us-west-1.amazonaws.com/sandbox/get-users'
  );

  const data = res.data;
  // try to see if one of the users from this link already exists in db
  User.findOne({
    where: {
      email: data[0].email,
    },
  })
    .then((user) => {
      if (!user) {
        console.log('Users sync in progress..');
        // if not, save each user to db
        for (i = 0; i < data.length; i++) {
          // Save User to Database
          User.create({
            first_name: data[i].firstName,
            last_name: data[i].lastName,
            email: data[i].email,
            password: bcrypt.hashSync('motiff', 8),
            age: 24,
            address: data[i].address,
            phone_number: '+38761225883',
            certificate: 'synced-from-motiff',
          })
            .then((user) => {
              // set user role to 1 - member
              user.setRoles(1, user.id).then(() => {});
            })
            .catch((err) => {
              console.log(err);
            });
        }
        console.log('Sync for users finished');
        return;
      }
      console.log('Users already synced..');
    })
    .catch((err) => {
      console.log(err);
    });
};
