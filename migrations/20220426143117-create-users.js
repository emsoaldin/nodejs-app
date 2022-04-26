'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
        CREATE TABLE users (
          id                 INT unsigned NOT NULL AUTO_INCREMENT,
          first_name         VARCHAR(255) NOT NULL DEFAULT '',
          last_name          VARCHAR(255) NOT NULL DEFAULT '',
          email              VARCHAR(255) NOT NULL DEFAULT '',
          password           VARCHAR(255) NOT NULL DEFAULT '',
          age                INT unsigned,
          address            VARCHAR(255) NOT NULL DEFAULT '',
          phone_number       VARCHAR(255) NOT NULL DEFAULT '',
          certificate        VARCHAR(255) NOT NULL DEFAULT '',
          created_at         TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at         TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
          PRIMARY KEY (id)
        );
      `);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`DROP TABLE users`);
  },
};
