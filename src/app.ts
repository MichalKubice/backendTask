import express from 'express';
import * as bodyParser from 'body-parser';
import * as controller from './controller';
const app = express();

app.set("port",5000);
app.use(bodyParser.json());
app.post('/api/leads', controller.importData);

app.listen(app.get("port"), () => {
    console.log("App running", app.get("port"))
});