angular.module("first-angular-app")
.controller("HomeCtrl",["$scope" ,"$http", function (scope, $http) {
	// console.log(scope);

	scope.firstName = "himanshu";
	scope.obj = "sdfsfd";

	scope.clickme = function(user, temp){
		console.log(user, temp, scope.obj);
		$http.get("https://jsonplaceholder.typicode.com/users").then(function(response){
			console.log("user data= ",response)
			scope.usersData = response.data;
		});

	}

	scope.inputchanged= function(){
		console.log("inputchanged");
	}

	scope.tempDate = new Date().getTime();

	scope.text = "hello world";


}])