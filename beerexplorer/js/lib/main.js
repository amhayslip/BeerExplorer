var app = angular.module("beerexplorer", []);

// seed beer data
function BeerCtrl($scope) {
    $scope.beers = [
        {name:'120 Minute IPA', tried:false, reviewed:false, review:""},
        {name:'512 IPA', tried:false, reviewed:false, review:""},
        {name:'Founders Breakfast Stout', tried:true, reviewed:false, review:""},
        {name:'Founders Imperial Stout', tried:true, reviewed:false, review:""}
    ];

    $scope.getTotalBeers = function () {
        return $scope.beers.length;
    };

// function for adding new beers to try
    $scope.addBeer = function () {
        $scope.beers.push({name:$scope.formNewBeer, tried:false, reviewed:false, review:""});
        $scope.formNewBeer = '';
    };    


    $scope.triedBeers = 0;

    $scope.getTriedBeers = function () {
        var triedBeers = [];
            for(var i = 0; i < $scope.beers.length; i += 1) {
                if ($scope.beers[i].tried) {
                     triedBeers.push(beers[i]);
                }
                else {
                }
            }
            $scope.triedBeers = triedBeers.length;

        };


// filter for only displaying beers that have NOT been tried
    $scope.notTried = function (b) {
        if(!b.tried) {
            return b
        }
        else {
        }
    };

// filter for beers already consumed
    $scope.tryBeer = function(beer) {
        if (beer.tried) {
            beer.tried = false;
        }
        else {
            beer.tried = true;
        }
    };

// filter for only displaying beers that HAVE been tried
    $scope.tried = function (b) {
        if(b.tried && !b.reviewed) {
            return b
        }
        else {
        }
    };

// filter for displaying reviewed beers
    $scope.reviewed = function (b) {
        if(b.tried && b.reviewed) {
            return b
        }
        else {
        }
    }


    // $scope.clearCompleted = function () {
    //     $scope.beers = _.filter($scope.beers, function(beer){
    //         return !beer.tried;
    //     });
    // };

// function for adding review of specific beer
    $scope.addReview = function (beer) {
        beer.review = $('.rev').val();
        beer.reviewed = true;
        console.log(beer);
    }





}