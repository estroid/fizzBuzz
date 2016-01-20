

for (var num = 1; num <= 100; num++) { // for loop to count from 1 to 100
    if (num % 3 === 0 && num % 5 === 0) { // If a number between 1-100 is divisible by both 3 and 5, print "fizz buzz"
        console.log("fizz buzz");
    }

    else if (num % 3 === 0) { // Else if number between 1-100 is divisible by 3, print "fizz"
        console.log("fizz");
    }

    else if (num % 5 === 0) { // Else if a number between 1-100 is divisible by 5, print "buzz"
        console.log("buzz");
    }
    else { // to print numbers that don't meet the above criteria as well
        console.log(num);
    }
}


