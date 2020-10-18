const dbh = require("../database/index");

exports.get_study_group_requests = function (req, res) {
  dbh.getConnection((error, connection) => {
    if (error) {
      connection.release();
      console.log(error);
      res.send("error in connection");
    } else {
      const SELECT_LABELS_SQL =
        "SELECT label, link, date, time, timeIsAmOrPm, class FROM requests LIMIT 10;";

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

exports.post_study_group_request = function (req, res) {
  dbh.getConnection((error, connection) => {
    if (error) {
      connection.release();
      console.log(error);
      res.send("error in connection");
    } else {
      const label = req.body.name;
      const link = req.body.link;
      const date = req.body.date;
      const time = req.body.time;
      const timeIsAmOrPm = req.body.timeIsAmOrPm;
      const type = req.body.selectedCategory;
      const SELECT_LABELS_SQL =
        "INSERT INTO requests(label, link, date, time, timeIsAmOrPm, class) VALUES('" +
        label +
        "','" +
        link +
        "','" +
        date +
        "','" +
        time +
        "','" +
        timeIsAmOrPm +
        "','" +
        type +
        "');";

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

exports.post_accept_study_group_request = function (req, res) {
  dbh.getConnection((error, connection) => {
    if (error) {
      connection.release();
      console.log(error);
      res.send("error in connection");
    } else {
      const label = req.body.label;
      const link = req.body.link;
      const date = req.body.date;
      const time = req.body.time;
      const timeIsAmOrPm = req.body.timeIsAmOrPm;
      const type = req.body.className;
      const SELECT_LABELS_SQL =
        "INSERT INTO study_groups(label, link, date, time, timeIsAmOrPm, class) VALUES('" +
        label +
        "','" +
        link +
        "','" +
        date +
        "','" +
        time +
        "','" +
        timeIsAmOrPm +
        "','" +
        type +
        "');";
      const DELETE_ACCEPTED_STUDY_GROUP = "DELETE FROM requests WHERE link=?;";

      dbh.query(SELECT_LABELS_SQL, (error, results) => {
        if (error) {
          connection.release();
          console.log(error);
          res.send("error in query");
        } else {
          //res.send(results);
        }
      });

      dbh.query(DELETE_ACCEPTED_STUDY_GROUP, [link], (error, results) => {
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

exports.delete_declined_study_group = function (req, res) {
  dbh.getConnection((error, connection) => {
    if (error) {
      connection.release();
      console.log(error);
      res.send("error in connection");
    } else {
      const link = req.query.link;
      const DELETE_REQUEST_SQL = "DELETE FROM requests WHERE link=?";

      dbh.query(DELETE_REQUEST_SQL, [link], (error, results) => {
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
