const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());


app.use('/admin-api', (req, res, next) => {
  next();
});

app.get('/admin-api/health', (req, res) => {
  res.json({ data: { status: true } });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/admin-api`);
});
