'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`  
        CREATE TABLE user_roles (
         user_id    INT unsigned NOT NULL,
         role_id    INT unsigned NOT NULL,
         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
         updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
         PRIMARY KEY (user_id, role_id),
         INDEX fk_user_roles_role_id_idx (role_id ASC),
         INDEX fk_user_roles_user_id_idx (user_id ASC),
         CONSTRAINT fk_user_roles_user_id
             FOREIGN KEY (user_id)
                 REFERENCES users (id)
                 ON DELETE CASCADE
                 ON UPDATE CASCADE,
         CONSTRAINT fk_user_roles_role_id
             FOREIGN KEY (role_id)
                 REFERENCES roles (id)
                 ON DELETE CASCADE
                 ON UPDATE CASCADE
        );
      `);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`DROP TABLE user_roles`);
  },
};
