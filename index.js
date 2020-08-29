require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

var empowherment_sessions = require('./routes/empowhermentSessions');
var wellness_sessions = require('./routes/wellnessSessions');
var professional_development_sessions = require('./routes/professionalDevelopmentSessions');
var study_group_sessions = require('./routes/studyGroupSessions');
var tutoring_sessions = require('./routes/tutoringSessions');

app.use('/empowherment-sessions', empowherment_sessions);
app.use('/wellness-sessions', wellness_sessions);
app.use('/professional-development-sessions', professional_development_sessions);
app.use('/study-group-sessions', study_group_sessions);
app.use('/tutoring-sessions', tutoring_sessions);

app.get("/api", (req, res) => {
  console.log('endpoint hit')
  res.json({ name: "Andrew" });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
