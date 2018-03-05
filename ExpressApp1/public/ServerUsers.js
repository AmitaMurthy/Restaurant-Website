var express = require("express");
var app = express();
var fs = require("fs");
var data = fs.readFileSync('Users.json', 'utf8').trim();
var users = JSON.parse(data);



console.log('server is starting');
var server = app.listen(3000, listening);

function listening() {
    console.log("server is listening.....");

}



app.get('/all', sendAll);

function sendAll(req, res)
{
    res.send(users);
}

app.get('/add/:name/:email/:id', sendAdd);

function sendAdd(req, res)
{
    var user = req.params;
    
    var userr = {

        "name" : user.name,
        "email" : user.email,
        "ID": Number(user.id)
    }

    var flag = 0;
    for (var i = 0; i < users.length; i++)

    {
        if (users[i].name == user.name)

        {
            flag = 1;
            res.send('User already present');
            break;
        }

        else
        {
            continue; 
        }
    
       


    }

    if (flag == 1)
    {
        users.push(userr);
        fs.writeFileSync('Users.json', JSON.stringify(users, null, 2), 'utf8');


        var reply = "User added!!...thank you!!"

        res.send(reply);

    }

}







