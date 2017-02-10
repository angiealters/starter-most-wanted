"use strict";

/*
  Build all of your functions for the application below.
	Some functions have been stubbed out.
*/

function filterByName(firstName, lastName, people){
	var results = people.filter(function(person){
		return firstName === person.firstName && lastName === person.lastName
	});
	return results;	
}
// return an array containing the people matching the name
function getDescendants(person, people, descendants=[]){
	var results = people.filter(function(el){
		return person.id === el.parents[0] || person.id === el.parents[1]
	});
	if (!results){
		return descendants;
	}
	for (var i = 0; i< results.length; i++){
		descendants.push(results[i]);
		descendants = getDescendants(results[i], people, descendants)
	}
	return descendants;
}


function getFamily(person, people){

	// return an array containing the family members (objects)
}

/*

function filterByAge(dob, people){
	var personAge = people.map(function(getAge){
		return dob === getAge.dob
	});
	return personAge;
}

function getAge(dateString){
	var today = new Date();
	var birthDate = new Date(dateString);
	var age = today.getFullYear() - birthDate.getFullYear();
	var month = today.getMonth() - birthDate.getMonth();
	if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())){
		age--;
	}
	return age;
}



function filterByHeight(height, people){
	var results = people.filter(function(heightInches){
		return height === heightInches.height
	});
	return results;
}
*/