require('dotenv').config();
var express = require('express');
var cors = require('cors');
var serveStatic = require('serve-static');
var path = require('path');

var app = express();
app.use(cors()); // Enable CORS

app.use(serveStatic(path.join(__dirname, "./dist"))); // Serve static files

var benhvienRoutes = require('./benhvien.js');
var Routes68 = require('./68.js');
var Routesq7 = require('./q7.js');
var Routes915 = require('./915.js');
var RoutesPG = require('./pg.js')
app.use(benhvienRoutes);
app.use(Routes68);
app.use(Routesq7);
app.use(Routes915);
app.use(RoutesPG);

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "./dist/index.html"));
});

app.listen(process.env.PORT, function(){
    console.log("Server is running on http://localhost:" + process.env.PORT);
});
