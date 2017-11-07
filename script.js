function calculateGrade(grade) {
	if (grade >= 90) {return "A"; }
	else if (grade > 80) {return "B"; }
	else if (grade > 70) {return "C"; }
	else if (grade > 60) {return "D"; }
	else if (grade === 0) {return "quit"; }
	else {return "F"; }
}

// This part runs the calculateGrade function and shows the result
var finalGrade;
var parsedInt;
var inputGrade;
var counter = 0;
var loopLimit = 10;

while (counter++ < loopLimit) {
    inputGrade = prompt("Enter a numeric grade 1 - 100 or 0 to stop:");
    parsedInt = parseInt(inputGrade);
    if (parsedInt === 0) {alert("Zero found. Stopping now!"); break; }
    if (isNaN(parsedInt) || parsedInt < 1 || parsedInt > 100) {
	alert("Sorry, " + inputGrade + "/" + parsedInt + " is not valid.\n"
	    + "Please enter a number 1 through 100 (like 87).\n"
	    + "Thank you! :)"); continue;
	}
    finalGrade = calculateGrade(parsedInt);
    alert("inputGrade \t= " + inputGrade + "\nparsedInt \t= " + parsedInt
    	+ "\nfinalGrade \t= " + finalGrade);
    if (counter === loopLimit) {alert("Loop Limit of " + loopLimit
	+ " reached. Bye!");
    }
}
