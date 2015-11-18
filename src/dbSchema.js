
////////////////////////////////////////////////////////
//   Build some ORM models to talk to our database!   //
//   see 'import Sequelize' and 'import db' at top.   //
////////////////////////////////////////////////////////

import Sequelize from 'sequelize'; // add Sequelize library for tools
import db from './dbConfig.js'; // connect to database



var User = db.define('User', {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
});










// Demo  DB call to query or build or get stuff

db.sync().then(function() {
  return User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20)
  }).then(function(jane) {
       console.log(jane.get({
         plain: true
       }))
     });
});

