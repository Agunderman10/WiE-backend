const express = require("express");

const app = express();

app.get("/api", (req, res) => {
  console.log('endpoint hit')
  res.json({ name: "Andrew" });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
