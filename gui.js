"use strict";

function app(people){
	var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
	switch(searchType){
		case 'yes':
			var person = searchByName(people);
			mainMenu(person,people);
			break;
		case 'no':
			searchByTrait();
			break;
		default:
			alert("Invalid entry. Please enter 'yes' or 'no'");
			app(people);
	}
}
function mainMenu(person, people){
  if(!person){
    alert("Could not find that individual.");
    return app(people);
  }

	var displayOption = prompt("Found " + person[0].firstName + " " + person[0].lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

	switch(displayOption){
		case "info":
			displayPerson(person);
			break;
		case "family":
			displayFamilyInfo(person,people);
			break;
		case "descendants":
			alert(getDescendants(person[0], data));

			break;
		case "restart":
			app(people);
			break;
		case "quit":
			return;
		default:
			return mainMenu(person, people); 
	}
}

function searchByName(people){
  var firstName = promptFor("What is the person's first name?", chars);
  var lastName = promptFor("What is the person's last name?", chars);
  var person = filterByName(firstName, lastName, people);
  
  return person;
}

function searchByTrait(traits){
	var traitType = promptFor("Search for traits by entering one of the following options: 'age', 'height', 'weight', 'occupation', 'eye color'", selectTrait).toLowerCase();

	
	switch (traitType){
		case 'age':
			promptFor("Please enter person's age", chars);
			break;
		case 'height':
			promptFor("Please enter person's height in inches", chars);
			break;
		case 'weight':
			promptFor("Please enter person's weight", chars);
			break;
		case 'occupation':
			promptFor("Please enter person's occupation", chars);
			break;
		case 'eye color':
			promptFor("Please enter person's eye color", chars);
			break;
		default: 
			return searchByTrait(traits);
			break;
	}
	displayPeople();
}

function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  var personInfo = "First Name: " + person[0].firstName + "\n";
  personInfo += "Last Name: " + person[0].lastName + "\n";
  personInfo += "Age: " + person[0].dob + "\n";
  personInfo += "Height: " + person[0].height + "\n";
  personInfo += "Weight: " + person[0].weight + "\n";
  personInfo += "Occupation: " + person[0].occupation + "\n";
  personInfo += "Eye Color: " + person[0].eyeColor + "\n";
  alert(personInfo);
}

function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}
function selectTrait(input){
	return input.toLowerCase() == "age" || input.toLowerCase() == "height" || input.toLowerCase() == "weight" || input.toLowerCase() == "occupation" || input.toLowerCase() == "eye color";
}
function chars(input){
  return true;
}