var express = require("express");
var app = express();

const { Pool } = require("pg");

const connectionString = process.env.DATABASE_URL || "postgress://familyhistoryuser:elijah@localhost:5437/familyhistory";

const pool = new Pool({connectionString: connectionString});

var port1 = 5000;
app.set("port", (process.env.PORT || port1));

app.get("/getPerson", getPerson);

app.listen(app.get('port'), function() {
    console.log("Now listening for connections on port: " + app.get("port"));
});

function getPerson(request, response) {
    console.log("Getting Person information from SERVER.");
    
    var id = request.query.id;
    console.log("Retrieving person with id: ", id);
    
    getPersonFromDB(id, function(error, result) {
        console.log("Back from the getPersonFromDB function with result: ", result);
        
        if (error || result == null || result.length != 1) {
            response.status(500).json({success:false, data: error});
        } else {
            response.json(result);
        }
    });
    
    // var result = {id: 238, first: "John", last: "Smith", birthdate: "1950-02-05"};
    
    // response.json(result);
};

function getPersonFromDB(id, callback) {
    console.log("getPersonFromDB called from id: ", id);
    
    var sql = "SELECT id, firstN, lastN, birthday FROM person WHERE id = $1::int";
    var params = [id];
    
    pool.query(sql, params, function(err, result) {
        if (err) {
            console.log("An error with the DB: ");
            console.log(err);
            callback(err, null);
        };
        
        console.log("Found DB result: " + JSON.stringify(result.rows));
        
        callback(null, result.rows);
        
    });
};