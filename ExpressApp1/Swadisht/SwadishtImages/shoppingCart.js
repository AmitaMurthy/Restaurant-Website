var cart = [];

var app = angular.module('myMenu', ['ngResource']);



app.controller('cartCtr', function ($scope) {
    $scope.cart = cart;

    $scope.clearCart = function () {
        cart.length = 0;
    }

    $scope.removeFromCart = function (x) {
        var id = -1;
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].name == x) {
                id = i;
                break;
            }
            else {
                id = -1;
            }
        }
        if (id >= 0) {
            cart.splice(id, 1);
        }

    }
});
   


app.controller('starterCtr', function ($scope, $resource) {
    var request = $resource("/starters");
    request.query(function (starter) {
        $scope.starter = starter;

        $scope.addItemToCart = function (x, y) {
            var flag = 0;
            for (var i = 0; i < cart.length; i++)
            {
                if (cart[i].name == y)
                {
                    cart[i].qnt = cart[i].qnt + 1;
                    flag = 1;
                    break;
                }
            }

            if (flag == 0)
            { cart.push($scope.starter[x]);}
                
          
        }

        $scope.removeItemFromCart = function (x) {
            
                var id = -1;
                for (var i = 0; i < cart.length; i++) {
                    if (cart[i].name == x) {
                        id = i;
                        break;
                    }
                    else {
                        id = -1;
                    }
                }

                if (cart[id].qnt ==1) {
                    if (id >= 0) {
                        cart.splice(id, 1);
                    }
                }
                else
                {
                    cart[id].qnt = cart[id].qnt - 1;
                }
           
        }

    });
});






app.controller('soupCtr', function ($scope, $resource) {
    var request = $resource("/soups");
    request.query(function (soups) {
        $scope.soups = soups;

        $scope.addItemToCart = function (x, y) {
            var flag = 0;
            for (var i = 0; i < cart.length; i++) {
                if (cart[i].name == y) {
                    cart[i].qnt = cart[i].qnt + 1;
                    flag = 1;
                    break;
                }
            }

            if (flag == 0)
            { cart.push($scope.soups[x]); }
            
        }
        $scope.removeItemFromCart = function (x) {

            var id = -1;
            for (var i = 0; i < cart.length; i++) {
                if (cart[i].name == x) {
                    id = i;
                    break;
                }
                else {
                    id = -1;
                }
            }

            if (cart[id].qnt == 1) {
                if (id >= 0) {
                    cart.splice(id, 1);
                }
            }
            else {
                cart[id].qnt = cart[id].qnt - 1;
            }

        }
    });
});

app.controller('mainCourseCtr', function ($scope, $resource) {
    var request = $resource("/mainCourse");
    request.query(function (mainCourse) {
        $scope.mainCourse = mainCourse;

        $scope.addItemToCart = function (x, y) {
            var flag = 0;
            for (var i = 0; i < cart.length; i++) {
                if (cart[i].name == y) {
                    cart[i].qnt = cart[i].qnt + 1;
                    flag = 1;
                    break;
                }
            }

            if (flag == 0)
            { cart.push($scope.mainCourse[x]); }
        }
        $scope.removeItemFromCart = function (x) {

            var id = -1;
            for (var i = 0; i < cart.length; i++) {
                if (cart[i].name == x) {
                    id = i;
                    break;
                }
                else {
                    id = -1;
                }
            }

            if (cart[id].qnt == 1) {
                if (id >= 0) {
                    cart.splice(id, 1);
                }
            }
            else {
                cart[id].qnt = cart[id].qnt - 1;
            }

        }
    });
});

app.controller('riceCtr', function ($scope, $resource) {
    var request = $resource("/Rice");
    request.query(function (Rice) {
        $scope.Rice = Rice;

        $scope.addItemToCart = function (x, y) {
            var flag = 0;
            for (var i = 0; i < cart.length; i++) {
                if (cart[i].name == y) {
                    cart[i].qnt = cart[i].qnt + 1;
                    flag = 1;
                    break;
                }
            }

            if (flag == 0)
            { cart.push($scope.Rice[x]); }
        }
        $scope.removeItemFromCart = function (x) {

            var id = -1;
            for (var i = 0; i < cart.length; i++) {
                if (cart[i].name == x) {
                    id = i;
                    break;
                }
                else {
                    id = -1;
                }
            }

            if (cart[id].qnt == 1) {
                if (id >= 0) {
                    cart.splice(id, 1);
                }
            }
            else {
                cart[id].qnt = cart[id].qnt - 1;
            }

        }
    });
});

app.controller('breadCtr', function ($scope, $resource) {
    var request = $resource("/Breads");
    request.query(function (Breads) {
        $scope.Breads = Breads;

        $scope.addItemToCart = function (x, y) {
            var flag = 0;
            for (var i = 0; i < cart.length; i++) {
                if (cart[i].name == y) {
                    cart[i].qnt = cart[i].qnt + 1;
                    flag = 1;
                    break;
                }
            }

            if (flag == 0)
            { cart.push($scope.Breads[x]); }
        }
       
            $scope.removeItemFromCart = function (x) {

                var id = -1;
                for (var i = 0; i < cart.length; i++) {
                    if (cart[i].name == x) {
                        id = i;
                        break;
                    }
                    else {
                        id = -1;
                    }
                }

                if (cart[id].qnt == 1) {
                    if (id >= 0) {
                        cart.splice(id, 1);
                    }
                }
                else {
                    cart[id].qnt = cart[id].qnt - 1;
                }

                    }
    });
});

app.controller('beverageCtr', function ($scope, $resource) {
    var request = $resource("/Beverages");
    request.query(function (Beverages) {
        $scope.Beverages = Beverages;

        $scope.addItemToCart = function (x, y) {
            var flag = 0;
            for (var i = 0; i < cart.length; i++) {
                if (cart[i].name == y) {
                    cart[i].qnt = cart[i].qnt + 1;
                    flag = 1;
                    break;
                }
            }

            if (flag == 0)
            { cart.push($scope.Beverages[x]); }
        }
  
        $scope.removeItemFromCart = function (x) {

            var id = -1;
            for (var i = 0; i < cart.length; i++) {
                if (cart[i].name == x) {
                    id = i;
                    break;
                }
                else {
                    id = -1;
                }
            }

            if (cart[id].qnt == 1) {
                if (id >= 0) {
                    cart.splice(id, 1);
                }
            }
            else {
                cart[id].qnt = cart[id].qnt - 1;
            }
        }
            
    });
});

app.controller('dessertCtr', function ($scope, $resource) {
    var request = $resource("/Desserts");
    request.query(function (Desserts) {
        $scope.Desserts = Desserts;

        $scope.addItemToCart = function (x, y) {
            var flag = 0;
            for (var i = 0; i < cart.length; i++) {
                if (cart[i].name == y) {
                    cart[i].qnt = cart[i].qnt + 1;
                    flag = 1;
                    break;
                }
            }

            if (flag == 0)
            { cart.push($scope.Desserts[x]);}
            
        }
      
            $scope.removeItemFromCart = function (x) {

                var id = -1;
                for (var i = 0; i < cart.length; i++) {
                    if (cart[i].name == x) {
                        id = i;
                        break;
                    }
                    else {
                        id = -1;
                    }
                }

                if (cart[id].qnt == 1) {
                    if (id >= 0) {
                        cart.splice(id, 1);
                    }
                }
                else {
                    cart[id].qnt = cart[id].qnt - 1;
                }

            }

    });
});



var priceTotal = 0;
app.controller('priceCtr', function ($scope) {
    $scope.totalPrice = function () {
        for (var i = 0; i < cart.length; i++) {
            priceTotal = priceTotal + (cart[i].qnt * cart[i].price);
        }
    }
    $scope.priceTotal = priceTotal;
});



