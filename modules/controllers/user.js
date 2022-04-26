const db = require('../models');
const User = db.user;

exports.publicBoard = (req, res) => {
  res.status(200).send('Public Content.');
};

exports.memberBoard = (req, res) => {
  res.status(200).send('Member Content.');
};

exports.adminBoard = (req, res) => {
  res.status(200).send('Admin Content.');
};

exports.updateRole = (req, res) => {
  console.log(req.params);
  User.findOne({
    where: {
      id: req.params.userId,
    },
  })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: 'User not found!' });
      }

      db.sequelize.query(
        `UPDATE user_roles SET role_id = ${req.body.roleId} WHERE user_id = ${user.id}`
      );

      return res.status(200).send({ message: 'Role updated successfuly!' });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
