exports.getDiscussions = function (req, res) {
  dbh.getConnection((error, connection) => {
    if (error) {
      connection.release();
      console.log(error);
      res.send("error in connection");
    } else {
      const SELECT_LABELS_SQL =
        "SELECT discussion_id, poster_name, message, timestamp FROM discussions LIMIT 10;";

      dbh.query(SELECT_LABELS_SQL, (error, results) => {
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
