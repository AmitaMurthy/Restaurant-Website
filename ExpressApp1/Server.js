console.log('server is starting');
var express = require("express");
var router = express.Router();
var session = require("express-session");

var app = express();
var bodyParser = require("body-parser");
var fs = require("fs");
var data = fs.readFileSync('./Swadisht/User.json', 'utf8').trim();
var users = JSON.parse(data);
const path = require('path');
var Dta = fs.readFileSync('./Swadisht/Food.json', 'utf8').trim();
var foods = JSON.parse(Dta);

app.set("trust proxy", 1);
app.use(session(
    {
        key: "app.session",
        secret: "my secret",
        resave: true,
        saveUninitialized: true
    }
));


app.use(express.static('Swadisht'));


var server=app.listen(3000, listening);

function listening()
{
    console.log("server is listening.....");

}


var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.post('/register', urlencodedParser, function (req, res) {
    var userr = {

        "customer_Name": req.body.customer_Name,
        "customer_Mobile": req.body.customer_Mobile,
        "customer_Apt": req.body.customer_Apt,
        "customer_Street": req.body.customer_Street,
        "customer_City": req.body.customer_City,
        "customer_State": req.body.customer_State,
        "customer_Country": req.body.customer_Country,
        "customer_ZIP": req.body.customer_ZIP,
        "customer_email": req.body.customer_email,
        "customer_password": req.body.customer_password,
        "confirm_password": req.body.confirm_password
    }

   
    var flag = 0;
    for (var i = 0; i < users.length; i++) {
        if ((users[i].customer_Name == req.body.customer_Name) && (users[i].customer_email == req.body.customer_email)) {
            flag = 1;
            
            res.send('User already present');
            break;
        }

        else {
            
            continue;
        }

    }

    if (flag == 0 ) {
        users.push(userr);
        fs.writeFileSync('./Swadisht/User.json', JSON.stringify(users, null, 2), 'utf8');
        var session = req.session;
        session.loginAs = req.body.customer_email;

        //res.sendFile('/Swadisht/CreditCard.html');

        res.sendFile(path.join(__dirname, "Swadisht","index.html"));
        

    }
        
})


app.post('/login', urlencodedParser, function (req, res) {

    var flag = 0;
    for (var i = 0; i < users.length; i++) {
        if ((users[i].customer_email == req.body.userid) && (users[i].customer_password == req.body.password)) {
            flag = 1;
            var session = req.session;
            session.loginAs = req.body.userid;
            
            res.sendFile(path.join(__dirname, "Swadisht", "index.html"));
            break;
        }

        else {

            continue;
        }

    }

    if (flag == 0) {
        
        var reply = "Username/Password incorrect OR Not a registered user";

        res.send(reply);

    }


})

app.get("/username", function (req, res) {
    res.end(req.session.loginAs ? req.session.loginAs : "Not Logged on");
   
});

app.get("/logout", function (req, res) {
    delete req.session.loginAs;
    res.sendFile(path.join(__dirname, "Swadisht", "LoggedOut.html"));
});


app.post('/end', urlencodedParser, function (req, res) {

    //res.sendFile('C:/Users/amitamurthy1/documents/visual studio 2017/Projects/ExpressApp1/ExpressApp1/Swadisht/ThankU4Order.html');
    res.sendFile(path.join(__dirname, "Swadisht", "ThankU4Order.html"));
})





app.post('/addfood', urlencodedParser, function (req, res) {
  
    if (req.body.foodTypeName == 'Starters') {
        var food = {
            "id": Number(foods[0].starters.length),
            "name": req.body.food_name,
            "price": Number(req.body.food_price),
            "qnt": 1
        }
    foods[0].starters.push(food);
    }
    if (req.body.foodTypeName == 'Soups') {
        var food = {
            "id": Number(foods[0].soups.length),
            "name": req.body.food_name,
            "price": Number(req.body.food_price),
            "qnt": 1
        }
        foods[0].soups.push(food);
}
    if (req.body.foodTypeName == 'Main Course') {
        var food = {
            "id": Number(foods[0].mainCourse.length),
            "name": req.body.food_name,
            "price": Number(req.body.food_price),
            "qnt": 1
        }
        foods[0].mainCourse.push(food);
}
    if (req.body.foodTypeName == 'Rice') {
        var food = {
            "id": Number(foods[0].Rice.length),
            "name": req.body.food_name,
            "price": Number(req.body.food_price),
            "qnt": 1
        }
        foods[0].Rice.push(food);
}
    if (req.body.foodTypeName == 'Breads') {
        var food = {
            "id": Number(foods[0].Breads.length),
            "name": req.body.food_name,
            "price": Number(req.body.food_price),
            "qnt": 1
        }
        foods[0].Breads.push(food);
}
    if (req.body.foodTypeName == 'Beverages') {
        var food = {
            "id": Number(foods[0].Beverages.length),
            "name": req.body.food_name,
            "price": Number(req.body.food_price),
            "qnt": 1
        }
        foods[0].Beverages.push(food);
}
    if (req.body.foodTypeName == 'Desserts') {
        var food = {
            "id": Number(foods[0].Desserts.length),
            "name": req.body.food_name,
            "price": Number(req.body.food_price),
            "qnt": 1
        }
        foods[0].Desserts.push(food);
}
    

    fs.writeFileSync(path.join(__dirname, "Swadisht", "Food.json"), JSON.stringify(foods, null, 2), 'utf8');

    //res.sendFile('C:/Users/amitamurthy1/documents/visual studio 2017/Projects/ExpressApp1/ExpressApp1/Swadisht/adminAddFoodType.html');
    res.sendFile(path.join(__dirname, "Swadisht", "adminAddFoodType.html"));
})

app.post('/checkout', urlencodedParser, function (req, res) {

    if (req.session.loginAs == undefined)
    {
       
        res.sendFile(path.join(__dirname, "Swadisht", "Login_Main_Page.html"));
    }
    else
    {
        console.log('no');
        res.sendFile(path.join(__dirname, "Swadisht", "CreditCard.html"));
    }

})


app.post('/removefood', urlencodedParser, function (req, res) {

    if (req.body.foodTypeName == 'Starters') {
        for (var i = 0; i < foods[0].starters.length; i++) {


            if (foods[0].starters[i].id == req.body.food_id) {
                foods[0].starters.splice(i, 1);
            }
        }
    }

    if (req.body.foodTypeName == 'Soups') {
        for (var i = 0; i < foods[0].soups.length; i++) {


            if (foods[0].soups[i].id == req.body.food_id) {
                foods[0].soups.splice(i, 1);
            }
        }
    }

    if (req.body.foodTypeName == 'Main Course') {
        for (var i = 0; i < foods[0].mainCourse.length; i++) {


            if (foods[0].mainCourse[i].id == req.body.food_id) {
                foods[0].mainCourse.splice(i, 1);
            }
        }
    }

    if (req.body.foodTypeName == 'Rice') {
        for (var i = 0; i < foods[0].Rice.length; i++) {


            if (foods[0].Rice[i].id == req.body.food_id) {
                foods[0].Rice.splice(i, 1);
            }
        }
    }

    if (req.body.foodTypeName == 'Breads') {
        for (var i = 0; i < foods[0].Breads.length; i++) {


            if (foods[0].Breads[i].id == req.body.food_id) {
                foods[0].Breads.splice(i, 1);
            }
        }
    }
    if (req.body.foodTypeName == 'Beverages') {
        for (var i = 0; i < foods[0].Beverages.length; i++) {


            if (foods[0].Beverages[i].id == req.body.food_id) {
                foods[0].Beverages.splice(i, 1);
            }
        }
    }
                            if (req.body.foodTypeName == 'Desserts') {
                                for (var i = 0; i < foods[0].Desserts.length; i++) {


                                    if (foods[0].Desserts[i].id == req.body.food_id) {
                                        foods[0].Desserts.splice(i, 1);
                                    }
                                }

        
        
    }
  
    
     //fs.writeFileSync('C:/Users/amitamurthy1/Documents/Visual Studio 2017/Projects/ExpressApp1/ExpressApp1/Swadisht/Food.json', JSON.stringify(foods, null, 2), 'utf8');
     fs.writeFileSync(path.join(__dirname, "Swadisht", "Food.json"), JSON.stringify(foods, null, 2), 'utf8');
    //res.sendFile('C:/Users/amitamurthy1/documents/visual studio 2017/Projects/ExpressApp1/ExpressApp1/Swadisht/adminAddFoodType.html');
    res.sendFile(path.join(__dirname, "Swadisht", "adminAddFoodType.html"));
})

app.post('/adminLogin', urlencodedParser, function (req, res) {
    var x = {
        adminUserName: "Admin",
        adminPassword:"Password"
    }

    if (x.adminUserName == req.body.adminUserName && x.adminPassword == req.body.adminPassword)
    {
        var session = req.session;
        session.loginAs = req.body.userid;
        //res.sendFile('C:/Users/amitamurthy1/documents/visual studio 2017/Projects/ExpressApp1/ExpressApp1/Swadisht/Admin.html');
        res.sendFile(path.join(__dirname, "Swadisht", "Admin.html"));
    }
    else
    {
        res.send('User Name and Password Incorrect');
    }


})



app.get("/starters", function (req, res) {
    var json = fs.readFileSync('./Swadisht/Food.json', 'utf8').trim();
    var o = JSON.parse(json);
    var b = o[0].starters;
    res.send(b);
});

app.get("/soups", function (req, res) {
    var json = fs.readFileSync('./Swadisht/Food.json', 'utf8').trim();
    var o = JSON.parse(json);
    var b = o[0].soups;
    res.send(b);
});

app.get("/mainCourse", function (req, res) {
    var json = fs.readFileSync('./Swadisht/Food.json', 'utf8').trim();
    var o = JSON.parse(json);
    var b = o[0].mainCourse;
    res.send(b);
});

app.get("/Rice", function (req, res) {
    var json = fs.readFileSync('./Swadisht/Food.json', 'utf8').trim();
    var o = JSON.parse(json);
    var b = o[0].Rice;
    res.send(b);

});

app.get("/Breads", function (req, res) {
    var json = fs.readFileSync('./Swadisht/Food.json', 'utf8').trim();
    var o = JSON.parse(json);
    var b = o[0].Breads;
    res.send(b);
});

app.get("/Beverages", function (req, res) {
    var json = fs.readFileSync('./Swadisht/Food.json', 'utf8').trim();
    var o = JSON.parse(json);
    var b = o[0].Beverages;
    res.send(b);
});

app.get("/Desserts", function (req, res) {
    var json = fs.readFileSync('./Swadisht/Food.json', 'utf8').trim();
    var o = JSON.parse(json);
    var b = o[0].Desserts;
    res.send(b);
});


var reservations = [];
app.post('/reservation', urlencodedParser, function (req, res) {

   
    var reserve = {
        "time": req.body.time,
        "table": req.body.table
    }

   
    for (var i = 0; i < reservations.length; i++)
    {
        if (reservations[i].time == req.body.time && reservations[i].table == req.body.table)
        {
            //res.sendFile('C:/Users/amitamurthy1/documents/visual studio 2017/Projects/ExpressApp1/ExpressApp1/Swadisht/noReservation.html');
            res.sendFile(path.join(__dirname, "Swadisht", "noReservation.html"));
        }
        else
        {
            reservations.push(reserve);
            //res.sendFile('C:/Users/amitamurthy1/documents/visual studio 2017/Projects/ExpressApp1/ExpressApp1/Swadisht/YesReservation.html');
            res.sendFile(path.join(__dirname, "Swadisht", "YesReservation.html"));
        }
    }

    if (reservations.length == 0)
    {
        reservations.push(reserve);
        //res.sendFile('C:/Users/amitamurthy1/documents/visual studio 2017/Projects/ExpressApp1/ExpressApp1/Swadisht/YesReservation.html');
        res.sendFile(path.join(__dirname, "Swadisht", "YesReservation.html"));
    }


})




module.exports = router;


