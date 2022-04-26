'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
        CREATE TABLE roles (
          id                 INT unsigned NOT NULL AUTO_INCREMENT,
          name               VARCHAR(30)  NOT NULL DEFAULT '',
          created_at         TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at         TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
          PRIMARY KEY (id)
        );
      `);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`DROP TABLE roles`);
  },
};
