fizzBuzz = function (number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return "FizzBuzz";
    } else if (number % 3 === 0) {
        return "Fizz";
    } else if (number % 5 === 0) {
        return "Buzz";
    } else if (typeof (number) !== "number") {
        return "ERROR!";

    } else {
        return number;
    }
};


/*whatCanIDrink = function(age) {
	if (age < 0) {
		return "Sorry. I can’t tell what drink because that age is incorrect!";
	}
	else if (age < 14) {
		return "Drink Toddy";
	}
	else if (age < 18 && age >=14) {
		return "Drink Coke";
	}
	else if (age < 21 && age >=18) {
		return "Drink Beer";
	}
	else if (age < 130) {
		return "Drink Whisky";
	}
	else {
		return "Sorry. I can’t tell what drink because that age is incorrect!"
	}
};*/

/*Calculator = function () {
    this.value = 0;

}
 Calculator.prototype.add = function(number) {
    if (typeof(number) == "number") {
        this.value += number;
    } else {
        alert("Error");
    }
}*/