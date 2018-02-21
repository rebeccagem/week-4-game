$(document).ready(function () {
    console.log("HELLO");

    //make a variable to hold user choice and a variable to hold randomly generated choice from the other characters

    var enemyChoice = {};
    var snailUser = {};

    //make an object for each character with a name, an image, a value of health points, a value of attack points
    var snail1 = {};

    var snail2 = {};

    var snail3 = {};

    var snail4 = {};

    var snailArray = []; 
    makeSnails();




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
        $("#attack").removeClass("hide");
        $("#battleGround").removeClass("hide");

    });

    
    //trigger the computer to randomly choose a character from those remaining
    function generateEnemySnail() {
        var randomNum = Math.floor(Math.random() * 3);
        enemyChoice = snailArray[randomNum];
        console.log(enemyChoice);
        //make sure you have a different snail than the user
        if (enemyChoice.name === snailUser.name) {
            generateEnemySnail();
        }
        else {
            $("#enemyName").text(enemyChoice.name);
            $("#enemyHealth").text(enemyChoice.health);
            $("#enemyPic").attr("src", enemyChoice.enemyImage);
        }

    }

    //Make an event listener for when the attack button is pressed
    $("#attack").on("click", function () {
        enemyChoice.health = enemyChoice.health - snailUser.attack;
        console.log("Attack on Enemy: " + enemyChoice.health);
        updateHealth();
        snailUser.health = snailUser.health - enemyChoice.attack;
        console.log("Attack on User: " + snailUser.health);
        updateHealth();
        checkWin();
    });


    function updateHealth() {
        $("#enemyHealth").text(enemyChoice.health);
        $("#userChoiceHealth").text(snailUser.health);

    }

    //check to see if either character's health value = 0 or below. If so, trigger win/lose..
    function checkWin() {
        if (enemyChoice.health < 1) {
            setTimeout(function () {
                alert("You Win!");
                gameOver();
            }, 200);
            // window.setTimeout(gameOver, 400);

        }
        else if (snailUser.health < 1) {
            setTimeout(function () {
                alert("You Lose!");
                gameOver();
            }, 200);
            // window.setTimeout(gameOver, 400);
        }
        else {
        }
    }

    function gameOver() {
        makeSnails();
        updateHealth();
        console.log(snail1.health);
        console.log(snail3.health);
    }


    function makeSnails() {
        snail1 = { name: "Peto", health: 100, attack: 10, image: "./assets/images/Peto-Left.png", enemyImage: "./assets/images/Peto-Right.png" };

        snail2 = { name: "Greren", health: 120, attack: 6, image: "./assets/images/Grerern-Left.png", enemyImage: "./assets/images/Grerern-Right.png"};

        snail3 = { name: "Cymbicryth", health: 110, attack: 8, image: "./assets/images/Cymb-Left.png", enemyImage: "./assets/images/Cymb-Right.png" };

        snail4 = { name: "Kelri", health: 105, attack: 9, image: "./assets/images/Kelri-Left.png", enemyImage: "./assets/images/Kelri-Right.png" };

        snailArray = [snail1, snail2, snail3, snail4];

    }
    //make a varible to display health bar from user choice and a varibale to display health bar from computer choice

    //randomly generate attack each time attack button is pressed (15-25)

    //make a function to substract user choice attack value from computer choice health value
    //display that shit

    //make function to subtract computer choice attack value from user choice health value
    //display that shit

    //add to scoreboard, then reset hide play field with you win/ you lose screen until character is chosen again
});