require('dotenv').config()
const express = require('express')

const app = express()
const port = 3000

const loginPageContent = `
<!DOCTYPE html>
<html>
<head>
  <title>Login Page</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #121212;
      color: #e1e1e1;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    h1 {
      color: #bb86fc;
      margin-bottom: 20px;
    }
    p {
      font-size: 18px;
      color: #b0b0b0;
    }
    div {
      text-align: center;
      background-color: #1e1e1e;
      padding: 40px;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
  </style>
</head>
<body>
  <div>
    <h1>Login Page</h1>
    <p>Welcome again</p>
  </div>
</body>
</html>
`;

app.use(express.static('public'));
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
    res.send(loginPageContent)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})