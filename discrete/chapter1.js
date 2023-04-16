function calculateTicketPrice(age, price, isVeterans = false) {
    if (age < 11) {
        console.log("free!!");
        return;
    }
    if (age >= 19) {
        if (isVeterans) console.log(price * 0.75);
        else {
            console.log(price);
        }
    } else {
        console.log(price * 0.75);
    }
}

calculateTicketPrice(20, 100);

calculateTicketPrice(15, 200);

calculateTicketPrice(25, 500, true);
