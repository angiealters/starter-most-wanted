"use strict";

function filterByName(firstName, lastName, people){
	var results = people.filter(function(person){
		return firstName === person.firstName && lastName === person.lastName
	});
	return results;	
}
function getDescendants(person, people, descendants=[]){
	var kids = people.filter(function(el){
		return el.parents[0] === person.id || el.parents[1] === person.id;
	});
	descendants.push(...kids);
	if(kids.length > 0){
		for (var i=0; i<kids.length; i++){
			getDescendants(kids[i], people, descendants);
		}
	}
	return descendants;
}
		
function getFamily(person, people, id = []){
	var results = people.filter(function(el){
		return id === person.id 		
	});
	return results;
}
function findParents(person, people){
	var results = getFamily(person, people);
		if (person.parents != person.id){
			return ("No parents found");
		}else if (person.parents === person.id){
			return results;
		}
	return results;
}
function displayFamilyInfo(person, people){
	var familyInfo = findParents(person,people);
	 "Parents: " + person[0].firstName +" "+ person[0].lastName + "\n";
	alert(familyInfo);

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