/*
  Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  switch(searchType){
    case 'yes':
      // TODO: search by name
	  searchByName();
      break;
    case 'no':
      // TODO: search by traits
	  searchByTrait();
      break;
    default:
	  alert ("Please enter 'yes' or 'no'");
      app(people); // restart app
      break;
  }
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

	var displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

	switch(displayOption){
		case "info":
			// TODO: get person's info
			break;
		case "family":
			// TODO: get person's family
			break;
		case "descendants":
			// TODO: get person's descendants
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
  displayPerson();
  // TODO: find the person using the name they entered

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
  var personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
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