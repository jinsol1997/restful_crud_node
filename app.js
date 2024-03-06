const express = require('express');
const bodyParser = require('body-parser');
const actorsRouter = require('./routes/actors');

const app = express();

app.use(bodyParser.json());

app.use('/api', actorsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});