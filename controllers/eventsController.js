const dbh = require("../database/index");

exports.getEvents = function (req, res) {
  dbh.getConnection((error, connection) => {
    if (error) {
      connection.release();
      console.log(error);
      res.send("error in connection");
    } else {
      const SELECT_LABELS_SQL = "SELECT label, link, time, date, timeIsAmOrPm, type FROM events LIMIT 30;";

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
  /*
  res.json({
    osu_events: [
      {
        image: "./../../../images/Oval.jpg",
        label: "WiE Empowherment Session",
      },
      {
        image: "./../../../images/Oval.jpg",
        label: "WiE Mental Health Session",
      },
      {
        image: "./../../../images/Oval.jpg",
        label: "WiE Mental Session",
      },
      {
        image: "./../../../images/Oval.jpg",
        label: "WiE Session",
      },
    ],
    doi_events: [
      {
        image: "./../../../images/Oval.jpg",
        label: "WiE Empowherment Session",
      },
      {
        image: "./../../../images/Oval.jpg",
        label: "WiE Mental Health Session",
      },
      {
        image: "./../../../images/Oval.jpg",
        label: "WiE Mental Session",
      },
      {
        image: "./../../../images/Oval.jpg",
        label: "WiE Session",
      },
    ],
    wie_lc_events: [
      {
        image: "./../../../images/Oval.jpg",
        label: "WiE Empowherment Session",
      },
      {
        image: "./../../../images/Oval.jpg",
        label: "WiE Mental Health Session",
      },
      {
        image: "./../../../images/Oval.jpg",
        label: "WiE Mental Session",
      },
      {
        image: "./../../../images/Oval.jpg",
        label: "WiE Session",
      },
    ],
  });*/
};

exports.postEvent = function (req, res) {
  dbh.getConnection((error, connection) => {
    if (error) {
      connection.release();
      console.log(error);
      res.send({ success: 0 });
    } else {
      const label = req.body.name;
      const link = req.body.link;
      const date = req.body.date;
      const time = req.body.time;
      const timeIsAmOrPm = req.body.timeIsAmOrPm;
      const type = req.body.selectedCategory;
      const SELECT_LABELS_SQL =
        "INSERT INTO events(label, link, date, time, timeIsAmOrPm, type) VALUES(\'" +
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
          res.send({ success: 0 });
        } else {
          connection.release();
          console.log("Success!");
          res.send({ success: 1 });
        }
      });
    }
  });
};
