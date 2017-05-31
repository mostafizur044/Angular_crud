var app = angular.module("myApp",['ui.router']);
app.controller("myController",['$scope','$timeout',function($scope,$timeout){

	$scope.users=[

		{username:"imran",fullname:"Md.Mostafizur Rahman",email:"imran@gmail.com"},
		{username:"kawsar",fullname:"Kawsar Ahmed",email:"kawsar@mail.com"},
		{username:"mostafiz",fullname:"Md.Mostafizur Rahman",email:"mostafiz00@mail.com"}

	];

	$scope.message="";
	$scope.bool= "true";
	$scope.newuser={};

	$scope.addToList= function(){
		//console.log($scope.newuser);
		$scope.users.push($scope.newuser);
		$scope.message="New user added successfully !!!!!!!";
		$scope.myObj = {
    		"color" : "white",
    		"background-color" : "green",
    		"font-size" : "20px",
    		"text-align": "center"
  		}
  		
		$scope.newuser={};
		$scope.bool= "";

	};

	
	$scope.clickedUser={};	
	$scope.editInfo= function(user){
	//	console.log(user);
		$scope.clickedUser=user;

	};
	

	$scope.updateData= function(){

		$scope.message="User info successfully updated !!!!!!!";
		$scope.myObj = {
    		"color" : "white",
    		"background-color" : "lightblue",
    		"font-size" : "20px",
    		"text-align": "center"
  		}
  		
	};

	$scope.deleteUser= function(user){
		$scope.clickedUser=user;
		$scope.name = $scope.clickedUser.fullname;

	};

	$scope.removeItem= function(){
		$scope.users.splice($scope.users.indexOf($scope.clickedUser),1);
		$scope.message="User successfully removed !!!!!!!";
		$scope.myObj = {
    		"color" : "white",
    		"background-color" : "coral",
    		"font-size" : "20px",
    		"text-align": "center"
  		}
  		
	};

	$scope.clearmessage= function(){
		 //$timeout(function() {

			$scope.message="";

		//}, 3000);

	};

	 $scope.clearuser= function(){
	 	$scope.newuser={};
	 };


}]);