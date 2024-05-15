//-----------Exercise 5-----------//

function mark(a) {
    if (a >= 80) {
        console.log("A")
    } else if (a >= 60 && a < 80) {
        console.log("B")
    } else if (a >= 40 && a < 60) {
        console.log("C")
    } else {
        console.log("You are not a good student")
    };
};
mark(30);