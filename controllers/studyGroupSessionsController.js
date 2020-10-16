const dbh = require("../database/index");

exports.index = function (req, res) {
  dbh.getConnection((error, connection) => {
    if (error) {
      connection.release();
      console.log(error);
      res.send("error in connection");
    } else {
      const SELECT_LABELS_SQL = "SELECT label, link, date, time, timeIsAmOrPm, class FROM study_groups LIMIT 60;";

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

exports.postStudyGroup = function (req, res) {
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
        "INSERT INTO study_groups(label, link, date, time, timeIsAmOrPm, class) VALUES(\'" +
        label +
        "\',\'" +
        link +
        "\',\'" +
        date +
        "\',\'" +
        time +
        "\',\'" +
        timeIsAmOrPm +
        "\',\'" +
        type +
        "\');";

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
}
