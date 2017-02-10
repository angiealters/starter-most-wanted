"use strict";

/*
  Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
	var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
	switch(searchType){
		case 'yes':
      // TODO: search by name
			var person = searchByName(people);
			displayPerson(person);
			mainMenu(person,people);
			break;
		case 'no':
      // TODO: search by traits
			searchByTrait();
			break;
		default:
			alert("Invalid entry. Please enter 'yes' or 'no'");
			app(people); // restart app
	}
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

	var displayOption = prompt("Found " + person[0].firstName + " " + person[0].lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

	switch(displayOption){
		case "info":
			// TODO: get person's info
			break;
		case "family":
			// TODO: get person's family
			break;
		case "descendants":
			var descendants = getDescendants(person, people);
			for(var i = 0; i < descendants.length; i++){
				alert(descendants[i].firstName +" "+ descendants[i].lastName);
			}
			break;
		case "restart":
			app(people); // restart
			break;
		case "quit":
			return; // stop execution
		default:
			return mainMenu(person, people); // ask again
	}
}

function searchByName(people){
  var firstName = promptFor("What is the person's first name?", chars);
  var lastName = promptFor("What is the person's last name?", chars);
  var person = filterByName(firstName, lastName, people);
  
  return person;
  // TODO: find the person using the name they entered

}
function searchByAge(){
	
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

// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  var personInfo = "First Name: " + person[0].firstName + "\n";
  personInfo += "Last Name: " + person[0].lastName + "\n";
  personInfo += "Age: " + person[0].dob + "\n";
  personInfo += "Height: " + person[0].height + "\n";
  personInfo += "Weight: " + person[0].weight + "\n";
  personInfo += "Occupation: " + person[0].occupation + "\n";
  personInfo += "Eye Color: " + person[0].eyeColor + "\n";
  // TODO: finish getting the rest of the information to display
  alert(personInfo);
}

// function that prompts and validates user input
function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}
function selectTrait(input){
	return input.toLowerCase() == "age" || input.toLowerCase() == "height" || input.toLowerCase() == "weight" || input.toLowerCase() == "occupation" || input.toLowerCase() == "eye color";
}
// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}