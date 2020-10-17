const dbh = require("../database/index");

exports.get_study_group_requests = function (req, res) {
    res.send('NOT IMPLEMENTED');
}

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
            "INSERT INTO requests(label, link, date, time, timeIsAmOrPm, class) VALUES(\'" +
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