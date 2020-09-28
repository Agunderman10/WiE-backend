const dbh = require("../database/index");

exports.index = function (req, res) {
  dbh.getConnection((error, connection) => {
    if (error) {
      connection.release();
      console.log(error);
      res.send("error in connection");
    } else {
      const SELECT_LABELS_SQL = "SELECT label FROM events;";

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
