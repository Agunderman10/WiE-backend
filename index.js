require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var auth = require('./routes/authentication');
var events = require('./routes/events');
var resources = require('./routes/resources');
var study_group_sessions = require('./routes/studyGroupSessions');
var discussions = require('./routes/discussions');
var faq = require('./routes/faq');

app.use('/', auth);
app.use('/events', events);
app.use('/resources', resources);
app.use('/study-group-sessions', study_group_sessions);
app.use('/discussions', discussions);
app.use('/faq', faq);

app.get("/api", (req, res) => {
  console.log('endpoint hit')
  res.json({ name: "Andrew" });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
