function whosPaying(names) {
    var randomIndex = Math.floor(Math.random() * names.length);
    var selectedName = names[randomIndex];
    return selectedName + " is going to buy lunch today!";
}

var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];


console.log(whosPaying(names));