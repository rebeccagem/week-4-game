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

    var defeatedArray = [];

    var snailUserIndex;

    makeSnails();

    //make an event listener for when user clicks on character
    $(".snailProfile").on("click", function () {
        switch (this.value) {

            case 'snail1': snailUser = snail1;
                snailUserIndex = 0;
                break;

            case 'snail2': snailUser = snail2;
                snailUserIndex = 1;
                break;

            case 'snail3': snailUser = snail3;
                snailUserIndex = 2;
                break;

            case 'snail4': snailUser = snail4;
                snailUserIndex = 3;
        }
        //Check if characters are choosen, if so, then display play field.
        $("#userChoiceName").text(snailUser.name);
        $("#userChoiceHealth").text(snailUser.health);
        $("#userChoicePic").attr("src", snailUser.image);

        generateEnemySnail();
        $("#attack").removeClass("hide");

        $("#battleGround").removeClass("hide");
        $(".chooseSnail").addClass("hide");

    });


    //trigger the computer to randomly choose a character from those remaining
    function generateEnemySnail() {
        var randomNum = Math.floor(Math.random() * 4);
        enemyChoice = snailArray[randomNum];
        //make sure you have a different snail than the user
        if (enemyChoice.name === snailUser.name) {
            generateEnemySnail();
        }
        else {
            for (i = 0; i < defeatedArray.length; i++) {
                if (enemyChoice.name === defeatedArray[i].name) {
                    generateEnemySnail();

                }
            }
            $("#enemyName").text(enemyChoice.name);
            $("#enemyHealth").text(enemyChoice.health);
            $("#enemyPic").attr("src", enemyChoice.enemyImage);
        }

    }

    //Make an event listener for when the attack button is pressed
    $("#attack").on("click", function () {
        giveSnailsAttackValues();
        snailUser.attack += 5;
        enemyChoice.health -= snailUser.attack;
        snailUser.health -= enemyChoice.attack;
        updateHealth();
        //this stuff displays the damage above the attack button
        $("#attackText").removeClass("hide");
        $("#userSnailName").text(snailUser.name);
        $("#userSnailAttackAmount").text(snailUser.attack);
        $("#enemySnailName").text(enemyChoice.name);
        $("#enemySnailAttackAmount").text(enemyChoice.attack);
        checkWin();
    });


    function updateHealth() {
        $("#enemyHealth").text(enemyChoice.health);
        $("#userChoiceHealth").text(snailUser.health);

    }

    //check to see if either character's health value = 0 or below. If so, trigger win/lose..
    function checkWin() {
        if (enemyChoice.health < 1) {
            // 

            defeatedArray.push(enemyChoice);

            if (defeatedArray.length === 1) {
                $("#defeated1").attr("src", enemyChoice.defeatImage);
                roundOver();
            }
            if (defeatedArray.length === 2) {
                $("#defeated2").attr("src", enemyChoice.defeatImage);
                roundOver();
            }
            if (defeatedArray.length === 3) {
                $("#defeated3").attr("src", enemyChoice.defeatImage);
                setTimeout(function () {
                    alert("You killed all your fellow snails! Enjoy the rest of you lonely life... :/");
                }, 200);
                // gameOver();
                window.setTimeout(gameOver, 400);
            }


        }
        if (snailUser.health < 1) {
            $("#attackText").addClass("hide");
            // roundOver();
            // these reset the screen if you choose a loser snail
            gameOver();
            window.setTimeout(gameOver, 400);
        }
        
    }

    function roundOver() {
        // makeSnails();
        snailUser = snailArray[snailUserIndex];
        updateHealth();
        generateEnemySnail();

    }

    function gameOver() {
        makeSnails();
        $("#attack").addClass("hide");
        $(".chooseSnail").removeClass("hide");
        $("#enemyPic").attr("src", "");
        $("#userChoicePic").attr("src", "");
        $("#userChoiceName").empty();
        $("#userChoiceHealth").empty();
        $("#enemyName").empty();
        $("#enemyHealth").empty();
        $("#defeated1").attr("src", "");
        $("#defeated2").attr("src", "");
        $("#defeated3").attr("src", "");
        $("#attackText").addClass("hide");
        defeatedArray.length = 0;
    }

    function makeSnails() {
        snail1 = { name: "Peto", health: 100, attack: 10, image: "./assets/images/Peto-Left.png", enemyImage: "./assets/images/Peto-Right.png", defeatImage: "./assets/images/Peto-Defeated.png" };

        snail2 = { name: "Greren", health: 120, attack: 10, image: "./assets/images/Grerern-Left.png", enemyImage: "./assets/images/Grerern-Right.png", defeatImage: "./assets/images/Greren-Defeated.png" };

        snail3 = { name: "Cymbicryth", health: 110, attack: 10, image: "./assets/images/Cymb-Left.png", enemyImage: "./assets/images/Cymb-Right.png", defeatImage: "./assets/images/Cymb-Defeated.png" };

        snail4 = { name: "Kelri", health: 105, attack: 10, image: "./assets/images/Kelri-Left.png", enemyImage: "./assets/images/Kelri-Right.png", defeatImage: "./assets/images/Kelri-Defeated.png" };

        snailArray = [snail1, snail2, snail3, snail4];

    }

    var attackValue;

    //function to generate random attack value
    function generateAttackValue() {
        attackValue = Math.floor(Math.random() * 8) + 8;
       // enemyChoice = snailArray[randomNum];
    }

    function giveSnailsAttackValues() {
        // generateAttackValue();
        // snailUser.attack = attackValue;
        // console.log(snailUser.attack);
        generateAttackValue();
        enemyChoice.attack = attackValue;
        console.log(enemyChoice.attack);

    }


    //make a varible to display health bar from user choice and a varibale to display health bar from computer choice

    //randomly generate attack each time attack button is pressed (15-25)

    //make a function to substract user choice attack value from computer choice health value
    //display that shit

    //make function to subtract computer choice attack value from user choice health value
    //display that shit

    //add to scoreboard, then reset hide play field with you win/ you lose screen until character is chosen again
});