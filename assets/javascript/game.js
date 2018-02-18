$(document).ready(function () {
    console.log("HELLO");

    //make a variable to hold user choice and a variable to hold randomly generated choice from the other characters

    var enemyChoice = "";
    var snailUser = {};

    //make an object for each character with a name, an image, a value of health points, a value of attack points
    var snail1 = { name: "Peto", health: 100, attack: 10, image: "http://lorempixel.com/output/abstract-q-c-200-200-10.jpg" };

    var snail2 = { name: "Greren", health: 120, attack: 6, image: "http://lorempixel.com/output/abstract-q-c-200-200-2.jpg" };

    var snail3 = { name: "Cymbicryth", health: 110, attack: 8, image: "http://lorempixel.com/output/abstract-q-c-200-200-4.jpg" };

    var snail4 = { name: "Kelri", health: 105, attack: 9, image: "http://lorempixel.com/output/abstract-q-c-200-200-7.jpg" };

    var snailArray = [snail1, snail2, snail3, snail4];

    //make an event listener for when user clicks on character
    $(".snailProfile").on("click", function () {
        switch (this.value) {

            case 'snail1': snailUser = snail1;
                break;

            case 'snail2': snailUser = snail2;
                break;

            case 'snail3': snailUser = snail3;
                break;

            case 'snail4': snailUser = snail4;
        }
        //Check if characters are choosen, if so, then display play field.
        console.log(snailUser.name)
        $("#userChoiceName").text(snailUser.name);
        $("#userChoiceHealth").text(snailUser.health);
        $("#userChoicePic").attr("src", snailUser.image);

        generateEnemySnail();
 
        //trigger the computer to randomly choose a character from those remaining
        function generateEnemySnail() {
            var randomNum = Math.floor(Math.random() * 3);
            enemyChoice = snailArray[randomNum];
            console.log(enemyChoice);
            if (enemyChoice === snailUser) {
                generateEnemySnail();
            }
            else {
            $("#enemyName").text(enemyChoice.name);
            $("#enemyHealth").text(enemyChoice.health);
            $("#enemyPic").attr("src", enemyChoice.image);
            }

        }
   });

   $("#attack").on("click", function () {
       console.log("Hello");
   });

    //make a varible to display health bar from user choice and a varibale to display health bar from computer choice

    //randomly generate attack each time attack button is pressed (15-25)
    //Make an event listener for when the attack button is pressed

    //make a function to substract user choice attack value from computer choice health value
    //display that shit

    //make function to subtract computer choice attack value from user choice health value
    //display that shit

    //check to see if either character's health value = 0 or below. If so, trigger win/lose..

    //add to scoreboard, then reset hide play field with you win/ you lose screen until character is chosen again
});