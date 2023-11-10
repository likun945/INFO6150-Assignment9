const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const customResponseMiddleware = require('./middlewares/response');
const dbService = require('./services/dbService'); // 路径根据你的实际结构调整

app.use(customResponseMiddleware);

dbService.connectToDatabase();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', routes);

app.listen(3000, function () {
    console.log('Server listening on port 3000');
});