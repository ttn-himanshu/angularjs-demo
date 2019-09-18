angular.module("first-angular-app",["ui.router"])
.run(runapp)
.config(appconfig)
.filter("reverse", reverse)


appconfig.$inject = ["$stateProvider", "$urlRouterProvider","$locationProvider"];
runapp.$inject= ["$rootScope"]

function appconfig(stateProvider, $urlRouterProvider, $locationProvider) {
	stateProvider
	.state("home", {
		url: "/",
		templateUrl: "public/components/home/home.html",
		controller: "HomeCtrl"
	})
	.state("about", {
		url: "/about",
		templateUrl: "public/components/about/about.html",
		controller: "AboutCtrl"
	})
	.state("contact", {
		url: "/contact",
		templateUrl: "public/components/contact/contact.html",
		controller: "ContactCtrl"
	})

	$urlRouterProvider.otherwise("/");
	$locationProvider.html5Mode(true)

}



function runapp($rootScope) {
	$rootScope.user = {
		name:"abc"
	}
}


function reverse() {
	return function(str) {
		var returnStr ="";
		var i = str.length -1;

		for(i; i>=0; i--){
			returnStr+=str[i];
		}

		return "returnStr"
	}
}
