const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
  res.send('🚀 CI + CD using AWS CodeBuild & Elastic Beanstalk!');
});
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
