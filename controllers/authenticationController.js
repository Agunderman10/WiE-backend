const dbh = require("../database/index");

exports.index = function (req, res) {
  dbh.getConnection((error, connection) => {
    if (error) {
      connection.release();
      console.log(error);
      res.send("error in connection");
    } else {
      const SELECT_ALL_POSITIONS_SQL = "SELECT password FROM users;";

      dbh.query(SELECT_ALL_POSITIONS_SQL, (error, results) => {
        if (error) {
          connection.release();
          console.log(error);
          res.send("error in query");
        } else {
          connection.release();
          res.send(results);
        }
      });
    }
  });
};

exports.sign_in_post = function (req, res) {
  res.send({ message: "Test test" });
};
