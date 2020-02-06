$(document).ready(function (propertyName){
    //hide the game
    $('#fullGame').hide();

    //hide the initial cards
    $('#cDown1').hide();
    $('#cDown2').hide();
    $('#cDown3').hide();
    $('#cDown4').hide();
    $('#cDown5').hide();
    $('#cDown6').hide();
    $('#addCard2').hide();
    $('#addCard3').hide();

    //initialize parallel arrays for all players
    //player 1
    var comp1Num = [], comp1Suit = [];
    //player 2
    var comp2Num = [], comp2Suit = [];
    //player 3
    var comp3Num = [], comp3Suit = [];
    //user turn arrays
    var userNum = [], userSuit = [];

    //initialize random card variables
    //random 1
    var rNum1, rSuit1;
    //random 2
    var rNum2, rSuit2;
    //random 3
    var rNum3, rSuit3;

    //create variable to count the random cards and find the counts of repeating cards
    var rCardNumber = 1, count1 = 0, count2 = 0, count21 = 0, count22 = 0, count31 = 0,
        count32 = 0, count41 = 0, count42 = 0, holdHighNum, fourKindcomp1, fourKindcomp2,
        fourKindcomp3, fourKindUser, rCardNumber1 = 0, secondHoldSuit, secondHoldNum;

    var comp14ofKind = false, comp24ofKind = false, comp34ofKind = false, user4ofKind = false;
    //create 2 holder variables for the random numbers
    var holdSuit, holdNum, winNumber = 0, comp1Flush = 0, comp2Flush = 0, comp3Flush = 0,
        userFlush = 0, fullFlush1 = 0, fullFlush2 = 0, fullFlush3 = 0, fullFlush4 = 0,
        pairValue1 = 0, pairValue2 = 0, pairValue3 = 0, pairValue4 = 0, comp12Pair = 0, comp22Pair = 0,
        comp32Pair = 0, user2Pair = 0, secCardVal1, secCardVal2, secCardVal3, secCardVal4, comp1first,
        comp1second, comp2first, comp2second, comp3first, comp3second, userfirst, usersecond, first1Val,
    first2Val, first3Val, first4Val, incUserArray = 0;
    var suits = ['','S','H','D','C'];
    var cards = ['','',2,3,4,5,6,7,8,9,10,'J','Q','K','A'];

    //show game when play button is hit
   $('#play5').on('click',function() {
       $('#play5').hide();
       $('#fullGame').show();
       //slide all the cards
       dealFirst();
   });
   //Deal first card
   function dealFirst(){
       if ( $("#cDown1").is( ":hidden" ) ) {
           $("#cDown1").slideDown( "slow" );
       }
       setInterval(function () {
           dealSecond();
       }, 250);
   }
   //deal second card
  function dealSecond(){
       if ( $("#cDown2").is( ":hidden" ) ) {
           $("#cDown2").slideDown( "slow" );
       }
       setInterval(function () {
           dealThird();
       }, 250);
   }
   //deal third card
   function dealThird(){
       if ( $("#cDown3").is( ":hidden" ) ) {
           $("#cDown3").slideDown( "slow" );
       }
       setInterval(function () {
           dealFourth();
       }, 250);
   }
   //deal fourth card
   function dealFourth(){
       if ( $("#cDown4").is( ":hidden" ) ) {
           $("#cDown4").slideDown( "slow" );
       }
       setInterval(function () {
           dealFifth();
       }, 250);
   }
   //deal fifth card
   function dealFifth(){
       if ( $("#cDown5").is( ":hidden" ) ) {
           $("#cDown5").slideDown( "slow" );
       }
       setInterval(function () {
           dealSixth();
       }, 250);
   }
   //deal sixth card
   function dealSixth(){
       if ( $("#cDown6").is( ":hidden" ) ) {
           $("#cDown6").slideDown( "slow" );
       }

   }
    firstTwo();
   //calculates the first two cards for each player
    function firstTwo(){
        comp1Num.push(Math.floor(Math.random() * 13) + 2);
        comp1Num.push(Math.floor(Math.random() * 13) + 2);

        comp2Num.push(Math.floor(Math.random() * 13) + 2);
        comp2Num.push(Math.floor(Math.random() * 13) + 2);

        comp3Num.push(Math.floor(Math.random() * 13) + 2);
        comp3Num.push(Math.floor(Math.random() * 13) + 2);

        comp1Suit.push(Math.floor(Math.random() * 4) + 1);
        comp1Suit.push(Math.floor(Math.random() * 4) + 1);

        comp2Suit.push(Math.floor(Math.random() * 4) + 1);
        comp2Suit.push(Math.floor(Math.random() * 4) + 1);

        comp3Suit.push(Math.floor(Math.random() * 4) + 1);
        comp3Suit.push(Math.floor(Math.random() * 4) + 1);

        //user initial numbers
        userNum.push(Math.floor(Math.random() * 13) + 2);
        userNum.push(Math.floor(Math.random() * 13) + 2);

        userSuit.push(Math.floor(Math.random() * 4) + 1);
        userSuit.push(Math.floor(Math.random() * 4) + 1);

        //initialize the random card numbers
        rNum1 = Math.floor(Math.random() * 13) + 2;
        rNum2 = Math.floor(Math.random() * 13) + 2;
        rNum3 = Math.floor(Math.random() * 13) + 2;

        rSuit1 = Math.floor(Math.random() * 4) + 1;
        rSuit2 = Math.floor(Math.random() * 4) + 1;
        rSuit3 = Math.floor(Math.random() * 4) + 1;

        //push the numbers and suits into the arrays
        //computer 1
        comp1Num.push(rNum1);
        comp1Num.push(rNum2);
        comp1Num.push(rNum3);

        comp1Suit.push(rSuit1);
        comp1Suit.push(rSuit2);
        comp1Suit.push(rSuit3);

        //computer 2
        comp2Num.push(rNum1);
        comp2Num.push(rNum2);
        comp2Num.push(rNum3);

        comp2Suit.push(rSuit1);
        comp2Suit.push(rSuit2);
        comp2Suit.push(rSuit3);

        //computer 3
        comp3Num.push(rNum1);
        comp3Num.push(rNum2);
        comp3Num.push(rNum3);

        comp3Suit.push(rSuit1);
        comp3Suit.push(rSuit2);
        comp3Suit.push(rSuit3);

        //user numbers
        userNum.push(rNum1);
        userNum.push(rNum2);
        userNum.push(rNum3);

        userSuit.push(rSuit1);
        userSuit.push(rSuit2);
        userSuit.push(rSuit3);

        holdSuit = rSuit1;
        holdNum = rNum1;
        console.log(comp1Num);
        console.log(comp2Num);
        console.log(comp3Num);
        console.log(userNum);

        //find the higher of the dealt cards and assign its value
        //computer 1
        if(comp1Num[0] > comp1Num[1]){
            secCardVal1 = comp1Num[0];
        }else{
            secCardVal1 = comp1Num[1];
        }
        //computer 2
        if(comp2Num[0] > comp2Num[1]){
            secCardVal2 = comp2Num[0];
        }else{
            secCardVal2 = comp2Num[1];
        }
        //computer 3
        if(comp3Num[0] > comp3Num[1]){
            secCardVal3 = comp3Num[0];
        }else{
            secCardVal3 = comp3Num[1];
        }
        //user
        if(userNum[0] > userNum[1]){
            secCardVal4 = userNum[0];
        }else{
            secCardVal4 = userNum[1];
        }
        //find the lowest card and assign it a value to each
        if(comp1Num[0] < comp1Num[1]){
            first1Val = comp1Num[0];
        }else{
            first1Val = comp1Num[1];
        }
        //computer 2
        if(comp2Num[0] < comp2Num[1]){
            first2Val = comp2Num[0];
        }else{
            first2Val = comp2Num[1];
        }
        //computer 3
        if(comp3Num[0] < comp3Num[1]){
            first3Val = comp3Num[0];
        }else{
            first3Val = comp3Num[1];
        }
        //user
        if(userNum[0] < userNum[1]){
            first4Val = userNum[0];
        }else{
            first4Val = userNum[1];
        }
    }
    showUser2();
    //show the users first 2 cards
    function showUser2(){
        do {
            $(`#userCard${incUserArray}`).replaceWith('<img class="cBack" src="../Cards/' + cards[userNum[incUserArray]] +
                suits[userSuit[incUserArray]] + '.jpg">');
            incUserArray += 1;
        }while(incUserArray < 2);
    }
    //on click event to add a card
    $('#addCard').on('click', function(){
        $(`#replaceR${rCardNumber}`).replaceWith('<img class="cBack" src="../Cards/' + cards[holdNum] +
            suits[holdSuit] + '.jpg">');

       if(rCardNumber < 4) {
           //if statement to change the holding numbers
           if (rCardNumber === 1) {
               holdSuit = rSuit2;
               holdNum = rNum2;
               removeMargin();
           } else if (rCardNumber === 2) {
               holdSuit = rSuit3;
               holdNum = rNum3;
           } else if (rCardNumber === 3) {

               //finish the game
                $('#addCard').hide();
                $('#addCard2').show();
           }
       }
        rCardNumber += 1;
    });
    function removeMargin(){
        $('.UserCards').css('margin-top', '10px');
    }
    //event listener to find winner
    $('#addCard2').on('click', function(){
        secondHoldSuit = comp1Suit[0];
        secondHoldNum = comp1Num[0];


        do {
            $(`#cDown${rCardNumber1}`).replaceWith('<img class="cBack" src="../Cards/' + cards[secondHoldNum] +
                suits[secondHoldSuit] + '.jpg">');
            //if statement to change the holding numbers
            if (rCardNumber1 === 1) {
                secondHoldSuit = comp1Suit[1];
                secondHoldNum = comp1Num[1];
            }else if (rCardNumber1 === 2) {
                secondHoldSuit = comp2Suit[0];
                secondHoldNum = comp2Num[0];
            }else if (rCardNumber1 === 3) {
                secondHoldSuit = comp2Suit[1];
                secondHoldNum = comp2Num[1];
            }else if (rCardNumber1 === 4) {
                secondHoldSuit = comp3Suit[0];
                secondHoldNum = comp3Num[0];
            }else if (rCardNumber1 === 5) {
                secondHoldSuit = comp3Suit[1];
                secondHoldNum = comp3Num[1];
            }
            rCardNumber1 += 1;
        }while(rCardNumber1 < 7);
        //test all users for a flush
        /*for(let i = 0; i < comp1Suit.length - 1; i++){
            if(comp1Suit[i] === comp1Suit[i + 1]){
                findSame1 += 1;
            }
        }
        for(let i = 0; i < comp2Suit.length - 1; i++){
            if(comp2Suit[i] === comp2Suit[i + 1]){
                findSame2 += 1;
            }
        }
        for(let i = 0; i < comp3Suit.length - 1; i++){
            if(comp3Suit[i] === comp3Suit[i + 1]){
                findSame3 += 1;
            }
        }
        for(let i = 0; i < userSuit.length - 1; i++){
            if(userSuit[i] === userSuit[i + 1]){
                findSame4 += 1;
            }
        }*/

        //sort arrays of numbers
        comp1Num.sort((a,b) => a-b);
        comp2Num.sort((a,b) => a-b);
        comp3Num.sort((a,b) => a-b);
        userNum.sort((a,b) => a-b);
        console.log(comp1Num);


        //if statement to calculate the winner if someone has a flush
        //probability of 2 players having a straight flush is 1 in .000000000002372 chance so if that happens I dont care first one gets it
        //computer 1
        if(testFlush(comp1Suit)){
            if(testIncrement(comp1Num)){
                //automatic win
                winNumber = 1;
                showWin('Computer 1');
            }
            else{
                if(seeFullHouse(comp1Num)){
                    fullFlush1 = 1;
                }else {
                    comp1Flush = 1;
                }
            }
        }
        //computer 2
        if(testFlush(comp2Suit)){
            if(testIncrement(comp2Num)){
                //automatic win
                winNumber = 1;
                showWin('Computer 2');
            }
            else{
                if(seeFullHouse(comp2Num)){
                    fullFlush2 = 1;
                }else {
                    comp2Flush = 1;
                }
            }
        }
        //computer 3
        if(testFlush(comp3Suit)){
            if(testIncrement(comp3Num)){
                //automatic win
                winNumber = 1;
                showWin('Computer 3');
            }
            else{
                if(seeFullHouse(comp3Num)){
                    fullFlush3 = 1;
                }else {
                    comp3Flush = 1;
                }
            }
        }
        //user
        if(testFlush(userSuit)){
            if(testIncrement(userNum)){
                //automatic win
                winNumber = 1;
                showWin('Player');
            }
            else{
                if(seeFullHouse(userNum)){
                    fullFlush4 = 1;
                }else {
                    userFlush = 1;
                }
            }
        }
        //see if multiple people have a full flush
        //computer 1 wins
        if(fullFlush1 > fullFlush2 && fullFlush1 > fullFlush3 && fullFlush1 > fullFlush4){
            winNumber = 1;
            showWin('Computer 1');
        //computer 2 wins
        }else if(fullFlush2 > fullFlush1 && fullFlush2 > fullFlush3 && fullFlush2 > fullFlush4){
            winNumber = 1;
            showWin('Computer 2');
        //computer 3 wins
        }else if(fullFlush3 > fullFlush1 && fullFlush3 > fullFlush2 && fullFlush3 > fullFlush4){
            winNumber = 1;
            showWin('Computer 3');
        //user wins
        }else if(fullFlush4 > fullFlush1 && fullFlush4 > fullFlush2 && fullFlush4 > fullFlush3){
            winNumber = 1;
            showWin('Player');
        //if two are tied
        }else{
            //one has a flush
            if(comp1Flush === 1){
                showWin('Computer 1');
            //two has a flush
            }else if(comp2Flush === 1){
                showWin('Computer 2');
            //three has a flush
            }else if(comp3Flush === 1){
                showWin('Computer 3');
            //4 has a flush
            }else if(userFlush === 1){
                showWin('Player')
            //2 and 4 tied
            }
        }
        //find if any ones who have a flush are even
        if(winNumber < 1){

        }
        //if nobody has a flush
        //call a function to see how many occurences happen in each array

        //if statement for four of a kind possibilities
        if(winNumber < 1){
            //test for 4 of a kind
            if(see4ofAKind(comp1Num)){
                fourKindcomp1 = holdHighNum;
                comp14ofKind = true;
            }
            if(see4ofAKind(comp2Num)){
                fourKindcomp2 = holdHighNum;
                comp24ofKind = true;
            }
            if(see4ofAKind(comp3Num)){
                fourKindcomp3 = holdHighNum;
                comp34ofKind = true;
            }
            if(see4ofAKind(userNum)){
                fourKindUser = holdHighNum;
                user4ofKind = true;
            }
            //if someone got 4 of a kind check to see if any others also got 4 of a kind
            if(comp14ofKind || comp24ofKind || comp34ofKind || user4ofKind){
                //computer one wins
                if(fourKindcomp1 > fourKindcomp2 && fourKindcomp1 > fourKindcomp3 && fourKindcomp1 >
                fourKindUser){
                    showWin("Computer 1");
                //computer 2 wins
                }else if(fourKindcomp2 > fourKindcomp1 && fourKindcomp2 > fourKindcomp3 &&
                fourKindcomp2 > fourKindUser){
                    showWin("Computer 2");
                //computer 3 wins
                }else if(fourKindcomp3 > fourKindcomp1 && fourKindcomp3 > fourKindcomp2 &&
                fourKindcomp3 > fourKindUser){
                    showWin("Computer 3");
                    //if none of these are true the user automatically wins
                }else if(fourKindUser > fourKindcomp1 && fourKindUser > fourKindcomp2 && fourKindUser
                > fourKindcomp3){
                    showWin("Player");
                //if computer 1 and 2 both have 4 of a kind
                }else if(fourKindcomp1 === 1 && fourKindcomp2 === 1){
                    cardCompare(secCardVal1, secCardVal2, first1Val, first2Val, 1);
                //if computer 1 and 3 have 4 of a kind
                }else if(fourKindcomp1 === 1 && fourKindcomp3 === 1){
                    cardCompare(secCardVal1, secCardVal3, first1Val, first3Val, 2);
                //if computer 1 and user have 4 of a kind
                }else if(fourKindcomp1 === 1 && fourKindUser === 1){
                    cardCompare(secCardVal1, secCardVal4, first1Val, first4Val, 3);
                //if computer 2 and 3 have 4 of a kind
                }else if(fourKindcomp2 === 1 && fourKindcomp3 === 1){
                    cardCompare(secCardVal2, secCardVal3, first2Val, first4Val, 4);
                //if computer 2 and user have 4 of a kind
                }else if(fourKindcomp2 === 1 && fourKindUser === 1){
                    cardCompare(secCardVal2, secCardVal4, first2Val, first4Val, 5);
                //if computer 3 and user have 4 of a kind
                }else if(fourKindcomp3 === 1 && fourKindUser === 1){
                    cardCompare(secCardVal3, secCardVal4, first3Val, first4Val, 6);
                }else{
                    showWin('Nobody');
                }
            }
        }
        //look for a flush
        if(winNumber < 1){
            if(seeFullHouse(comp1Num) && !seeFullHouse(comp2Num) && !seeFullHouse(comp3Num) && !seeFullHouse(userNum)){
                showWin('Computer 1');
            }else if(seeFullHouse(comp2Num) && !seeFullHouse(comp1Num) && !seeFullHouse(comp3Num) && !seeFullHouse(userNum)){
                showWin('Computer 2');
            }else if(seeFullHouse(comp3Num) && !seeFullHouse(comp1Num) && !seeFullHouse(comp2Num) && !seeFullHouse(userNum)){
                showWin('Computer 3')
            }else if(seeFullHouse(userNum) && !seeFullHouse(comp1Num) && !seeFullHouse(comp2Num) && !seeFullHouse(comp3Num)){
                showWin('Player');
            //computer 1 and computer 2 tie
            }else if(seeFullHouse(comp1Num) && seeFullHouse(comp2Num)){
                cardCompare(secCardVal1, secCardVal2, first1Val, first2Val, 1);
            //computer 1 and 3 tie
            }else if(seeFullHouse(comp1Num) && seeFullHouse(comp3Num)){
                cardCompare(secCardVal1, secCardVal3, first1Val, first3Val, 2);
            //computer 1 and user tie
            }else if(seeFullHouse(comp1Num) && seeFullHouse(userNum)){
                cardCompare(secCardVal1, secCardVal4, first1Val, first4Val, 3);
            //computer 2 and 3 tie
            }else if(seeFullHouse(comp2Num) && seeFullHouse(comp3Num)){
                cardCompare(secCardVal2, secCardVal3, first2Val, first3Val, 4);
            //computer 2 and user tie
            }else if(seeFullHouse(comp2Num) && seeFullHouse(userNum)){
                cardCompare(secCardVal2, secCardVal4, first2Val, first4Val, 5);
            //computer 3 and user tie
            }else if(seeFullHouse(comp3Num) && seeFullHouse(userNum)){
                cardCompare(secCardVal3, secCardVal4, first3Val, first4Val, 6);
            }
        }
        //look for 3 of a kind
        if(winNumber < 1){
            if(see3ofAKind(comp1Num) || see3ofAKind(comp2Num) || see3ofAKind(comp3Num) || see3ofAKind(userNum)){
                //check for the highest 3 of a kind
                //if 1 and 2 have 3 of a kind
                if(see3ofAKind(comp1Num) && see3ofAKind(comp2Num)){
                    //computer 1 wins
                    if(highest3(comp1Num) > highest3(comp2Num)){
                        showWin('Computer 1');
                    //computer 2 wins
                    }else if(highest3(comp1Num) < highest3(comp2Num)){
                        showWin('Computer 2');
                    }else if(highest3(comp1Num) === highest3(comp2Num)){
                        cardCompare(secCardVal1, secCardVal2, first1Val, first2Val, 1);
                    }else{
                        showWin('Computer 1 and Computer 2');
                    }
                //if 1 and 3 have 3 of a kind
                }else if(see3ofAKind(comp1Num) && see3ofAKind(comp3Num)){
                    //computer 1 wins
                    if(highest3(comp1Num) > highest3(comp3Num)){
                        showWin('Computer 1');
                        //computer 3 wins
                    }else if(highest3(comp1Num) < highest3(comp3Num)){
                        showWin('Computer 3');
                    }else if(highest3(comp1Num) === highest3(comp3Num)){
                        cardCompare(secCardVal1, secCardVal3, first1Val, first3Val, 2);
                    }else{
                        showWin('Computer 1 and Computer 3');
                    }
                //if 1 and user have 3 of a kind
                }else if(see3ofAKind(comp1Num) && see3ofAKind(userNum)){
                    //computer 1 wins
                    if(highest3(comp1Num) > highest3(userNum)){
                        showWin('Computer 1');
                        //User wins
                    }else if(highest3(comp1Num) < highest3(userNum)){
                        showWin('Player');
                    }else if(highest3(comp1Num) === highest3(userNum)){
                        cardCompare(secCardVal1, secCardVal4, first1Val, first4Val, 3);
                    }else{
                        showWin('Computer 1 and Player');
                    }
                //if 2 and 3 have 3 of a kind
                }else if(see3ofAKind(comp2Num) && see3ofAKind(comp3Num)){
                    //computer 2 wins
                    if(highest3(comp2Num) > highest3(comp3Num)){
                        showWin('Computer 2');
                        //computer 3 wins
                    }else if(highest3(comp2Num) < highest3(comp3Num)){
                        showWin('Computer 3');
                        //need to find the highest card
                    }else if(highest3(comp2Num) === highest3(comp3Num)){
                        cardCompare(secCardVal2, secCardVal3, first2Val, first3Val, 4);
                    }else{
                        showWin('Computer 2 and Computer 3');
                    }
                //if 2 and user have 3 of a kind
                }else if(see3ofAKind(comp2Num) && see3ofAKind(userNum)){
                    //computer 2 wins
                    if(highest3(comp2Num) > highest3(userNum)){
                        showWin('Computer 2');
                        //computer 2 wins
                    }else if(highest3(comp2Num) < highest3(userNum)){
                        showWin('Player');
                    }else if(highest3(comp2Num) === highest3(userNum)){
                        cardCompare(secCardVal2, secCardVal4, first2Val, first4Val, 5);
                    }else{
                        showWin('Computer 2 and Player');
                    }
                //if 3 and user have 3 of a kind
                }else if(see3ofAKind(comp3Num) && see3ofAKind(userNum)){
                    //computer 3 wins
                    if(highest3(comp3Num) > highest3(userNum)){
                        showWin('Computer 3');
                        //computer 2 wins
                    }else if(highest3(comp3Num) < highest3(userNum)){
                        showWin('Player');
                    }else if(highest3(comp3Num) === highest3(userNum)){
                        cardCompare(secCardVal3, secCardVal4, first3Val, first4Val, 6);
                    }else{
                        showWin('Computer 3 and Player');
                    }
                //find the singular winner
                }else{
                    //computer 1 wins
                    if(see3ofAKind(comp1Num)){
                        showWin('Computer 1');
                    //computer 2 wins
                    }else if(see3ofAKind(comp2Num)){
                        showWin('Computer 2');
                    //computer 3 wins
                    }else if(see3ofAKind(comp3Num)){
                        showWin('Computer 3');
                    //user wins
                    }else if(see3ofAKind(userNum)){
                        showWin('Player');
                    }
                }
            }
        }
        //find 2 of a kind hands
        if(winNumber < 1) {
            if(find2ofPair(comp1Num) || find2ofPair(comp2Num) || find2ofPair(comp3Num) || find2ofPair(userNum)){
            //see if any have 2 two pairs
            //if computer 1 has 2 two pairs
            if (find2ofPair(comp1Num)) {
                comp12Pair = highof2Pair(comp1Num);
                //if computer 2 has 2 two pairs
            }
            if (find2ofPair(comp2Num)) {
                comp22Pair = highof2Pair(comp2Num);
                //if computer 3 has 2 two pairs
            }
            if (find2ofPair(comp3Num)) {
                comp32Pair = highof2Pair(comp3Num);
                //if user has 2 two pairs
            }
            if (find2ofPair(userNum)) {
                user2Pair = highof2Pair(userNum);
            }
        }else{
                //if they only have one pair
                //computer 1
                if(see2pair(comp1Num)){
                    pairValue1 = highest2(comp1Num);
                }
                //computer 2
                if(see2pair(comp2Num)){
                    pairValue2 = highest2(comp2Num);
                }
                //computer 3
                if(see2pair(comp3Num)){
                    pairValue3 = highest2(comp3Num);
                }
                //computer 4
                if(see2pair(userNum)){
                    pairValue4 = highest2(userNum);
                }
                //see which pair is the highest and that is the winner
                //computer 1 wins
                if(pairValue1 > pairValue2 && pairValue1 > pairValue3 && pairValue1 > pairValue4){
                    showWin('Computer 1');
                //computer 2 wins
                }else if(pairValue2 > pairValue1 && pairValue2 > pairValue3 && pairValue2 > pairValue4){
                    showWin('Computer 2');
                //computer 3 wins
                }else if(pairValue3 > pairValue1 && pairValue3 > pairValue2 && pairValue3 > pairValue4){
                    showWin('Computer 3');
                //by default user becomes winner
                }else if(pairValue4 > pairValue1 && pairValue4 > pairValue2 && pairValue4 > pairValue3){
                    showWin('Player');
                 //if the pairs are the same, it needs to find the highest dealt card and compare that!
                }else if(pairValue1 === pairValue2){
                    cardCompare(secCardVal1, secCardVal2, first1Val, first2Val, 1);
                }else if(pairValue1 === pairValue3){
                    cardCompare(secCardVal1, secCardVal3, first1Val, first3Val, 2);
                }else if(pairValue1 === pairValue4){
                    cardCompare(secCardVal1, secCardVal4, first1Val, first4Val, 3);
                }else if(pairValue2 === pairValue3){
                    cardCompare(secCardVal2, secCardVal3, first2Val, first3Val, 4);
                }else if(pairValue2 === pairValue4){
                    cardCompare(secCardVal2, secCardVal4, first2Val, first4Val, 5);
                }else if(pairValue3 === pairValue4){
                    cardCompare(secCardVal3, secCardVal4, first3Val, first4Val, 6);
                }
            }
            //find which pair of 2 is higher
            if(winNumber < 1) {
                //computer 1 wins
                if(comp12Pair > comp22Pair && comp12Pair > comp32Pair && comp12Pair > user2Pair){
                    showWin('Computer 1');
                //computer 2 wins
                }else if(comp22Pair > comp12Pair && comp22Pair > comp32Pair && comp22Pair > user2Pair){
                    showWin('Computer 2');
                //computer 3 wins
                }else if(comp32Pair > comp12Pair && comp32Pair > comp22Pair && comp32Pair > user2Pair){
                    showWin('Computer 3');
                //user wins
                }else if(user2Pair > comp12Pair && user2Pair > comp22Pair && user2Pair > comp32Pair){
                    showWin('Player');
                 //find highest card
                }else{
                    if(comp12Pair === comp22Pair){
                        cardCompare(secCardVal1, secCardVal2, first1Val, first2Val, 1);
                    }else if(comp12Pair === comp32Pair){
                        cardCompare(secCardVal1, secCardVal3, first1Val, first3Val, 2);
                    }else if(comp12Pair === user2Pair){
                        cardCompare(secCardVal1, secCardVal4, first1Val, first4Val, 3);
                    }else if(comp22Pair === comp32Pair){
                        cardCompare(secCardVal2, secCardVal3, first2Val, first3Val, 4);
                    }else if(comp22Pair === user2Pair){
                        cardCompare(secCardVal2, secCardVal4, first2Val, first4Val, 5);
                    }else if(comp32Pair === user2Pair){
                        cardCompare(secCardVal3, secCardVal4, first3Val, first4Val, 6);
                    }else if(comp12Pair === comp22Pair && comp12Pair === comp32Pair){
                        if(cardCompared3(secCardVal1, secCardVal2, secCardVal3, first1Val, first2Val, first3Val) === 1){
                            showWin('Computer 1');
                        }else if(cardCompared3(secCardVal1, secCardVal2, secCardVal3, first1Val, first2Val, first3Val) === 2){
                            showWin('Computer 2');
                        }else{
                            showWin('Computer 3');
                        }
                    }else if(comp12Pair === comp22Pair && comp12Pair === user2Pair){
                        if(cardCompared3(secCardVal1, secCardVal2, secCardVal4, first1Val, first2Val, first4Val) === 1){
                            showWin('Computer 1');
                        }else if(cardCompared3(secCardVal1, secCardVal2, secCardVal4, first1Val, first2Val, first4Val) === 2){
                            showWin('Computer 2');
                        }else{
                            showWin('Player');
                        }
                    }else if(comp12Pair === comp32Pair && comp12Pair === user2Pair){
                        if(cardCompared3(secCardVal1, secCardVal3, secCardVal4, first1Val, first3Val, first4Val) === 1){
                            showWin('Computer 1');
                        }else if(cardCompared3(secCardVal1, secCardVal3, secCardVal4, first1Val, first3Val, first4Val) === 2){
                            showWin('Computer 3');
                        }else{
                            showWin('Player');
                        }
                    }else if(comp22Pair === comp32Pair && comp22Pair === user2Pair){
                        if(cardCompared3(secCardVal2, secCardVal3, secCardVal4, first2Val, first3Val, first4Val) === 1){
                            showWin('Computer 2');
                        }else if(cardCompared3(secCardVal2, secCardVal3, secCardVal4, first2Val, first3Val, first4Val) === 2){
                            showWin('Computer 3');
                        }else{
                            showWin('Player');
                        }
                    }else if(comp22Pair === comp12Pair && comp22Pair === user2Pair){
                        if(cardCompared3(secCardVal2, secCardVal1, secCardVal4, first2Val, first1Val, first4Val) === 1){
                            showWin('Computer 2');
                        }else if(cardCompared3(secCardVal2, secCardVal1, secCardVal4, first2Val, first1Val, first4Val) === 2){
                            showWin('Computer 1');
                        }else{
                            showWin('Player');
                        }
                    }else if(comp22Pair === comp32Pair && comp22Pair === comp12Pair){
                        if(cardCompared3(secCardVal2, secCardVal3, secCardVal1, first2Val, first3Val, first1Val) === 1){
                            showWin('Computer 2');
                        }else if(cardCompared3(secCardVal2, secCardVal3, secCardVal1, first2Val, first3Val, first1Val) === 2){
                            showWin('Computer 3');
                        }else{
                            showWin('Computer 1');
                        }
                    }
                    else if(comp32Pair === comp12Pair && comp32Pair === comp22Pair){
                        if(cardCompared3(secCardVal3, secCardVal1, secCardVal2, first3Val, first1Val, first2Val) === 1){
                            showWin('Computer 3');
                        }else if(cardCompared3(secCardVal3, secCardVal1, secCardVal2, first3Val, first1Val, first2Val) === 2){
                            showWin('Computer 1');
                        }else{
                            showWin('Computer 2');
                        }
                    }else if(comp32Pair === comp12Pair && comp32Pair === user2Pair){
                        if(cardCompared3(secCardVal3, secCardVal1, secCardVal4, first3Val, first1Val, first4Val) === 1){
                            showWin('Computer 3');
                        }else if(cardCompared3(secCardVal3, secCardVal1, secCardVal4, first3Val, first1Val, first4Val) === 2){
                            showWin('Computer 1');
                        }else{
                            showWin('Player');
                        }
                    }else if(comp32Pair === comp22Pair && comp32Pair === user2Pair){
                        if(cardCompared3(secCardVal3, secCardVal2, secCardVal4, first3Val, first2Val, first4Val) === 1){
                            showWin('Computer 3');
                        }else if(cardCompared3(secCardVal3, secCardVal2, secCardVal4, first3Val, first2Val, first4Val) === 2){
                            showWin('Computer 2');
                        }else{
                            showWin('Player');
                        }
                    }else if(user2Pair === comp12Pair && user2Pair === comp22Pair){
                        if(cardCompared3(secCardVal4, secCardVal1, secCardVal2, first4Val, first1Val, first2Val) === 1){
                            showWin('Player');
                        }else if(cardCompared3(secCardVal4, secCardVal1, secCardVal2, first4Val, first1Val, first2Val) === 2){
                            showWin('Computer 1');
                        }else{
                            showWin('Computer 2');
                        }
                    }else if(user2Pair === comp12Pair && user2Pair === comp32Pair){
                        if(cardCompared3(secCardVal4, secCardVal1, secCardVal3, first4Val, first1Val, first3Val) === 1){
                            showWin('Player');
                        }else if(cardCompared3(secCardVal4, secCardVal1, secCardVal3, first4Val, first1Val, first3Val) === 2){
                            showWin('Computer 1');
                        }else{
                            showWin('Computer 3');
                        }
                    }else if(user2Pair === comp22Pair && user2Pair === comp32Pair){
                        if(cardCompared3(secCardVal4, secCardVal2, secCardVal3, first4Val, first2Val, first3Val) === 1){
                            showWin('Player');
                        }else if(cardCompared3(secCardVal4, secCardVal2, secCardVal3, first4Val, first2Val, first3Val) === 2){
                            showWin('Computer 2');
                        }else{
                            showWin('Computer 3');
                        }
                    }

                }
            }
        }
        //if noone has won yet, take the highest number for the winner
       if(winNumber < 1){
            //computer 1 wins
           /* if(highCard(comp1first) > highCard(comp2first) && highCard(comp1first) > highCard(comp3first) &&
            highCard(comp1first) > highCard(userfirst)){
                showWin('Computer 1');
            //computer 2 wins
            }else if(highCard(comp2first) > highCard(comp1first) && highCard(comp2first) > highCard(comp3first) &&
                highCard(comp2first) > highCard(userfirst)){
                showWin('Computer 2');
            //computer 3 wins
            }else if(highCard(comp3first) > highCard(comp1first) && highCard(comp3first) > highCard(comp2first) &&
                highCard(comp3first) > highCard(userfirst)){
                showWin('Computer 3');
            //by default the user wins
            }else{
                showWin('User');
            }*/
           if(secCardVal1 > secCardVal2 && secCardVal1 > secCardVal3 &&
               secCardVal1 > secCardVal4){
               showWin('Computer 1');
               //computer 2 wins
           }else if(secCardVal2 > secCardVal1 && secCardVal2 > secCardVal3 &&
               secCardVal2 > secCardVal4){
               showWin('Computer 2');
               //computer 3 wins
           }else if(secCardVal3 > secCardVal1 && secCardVal3 > secCardVal2 &&
               secCardVal3 > secCardVal4){
               showWin('Computer 3');
               //by default the user wins
           }else if(secCardVal4 > secCardVal1 && secCardVal4 > secCardVal2 && secCardVal4 > secCardVal3){
               showWin('Player');
           //if multiple ones have the same value
           }else{
               //if all second values are equal
               if(first1Val > first2Val && first1Val > first3Val &&
                   first1Val > first4Val){
                   showWin('Computer 1');
                   //computer 2 wins
               }else if(first2Val > first1Val && first2Val > first3Val &&
                   first2Val > first4Val){
                   showWin('Computer 2');
                   //computer 3 wins
               }else if(first3Val > first1Val && first3Val > first2Val &&
                   first3Val > first4Val){
                   showWin('Computer 3');
                   //by default the user wins
               }else if(first4Val > first1Val && first4Val > first2Val && first4Val > first3Val) {
                   showWin('Player');
               }else{
                    showWin('Nobody');
               }
           }
        }

    });
    //function to find if there is 4 of a kind
    function see4ofAKind(passedArray){
        if(passedArray[0] === passedArray[1] && passedArray[1] === passedArray[2] && passedArray[2] ===
        passedArray[3]){
            holdHighNum = passedArray[0];
            return true;
        }else if(passedArray[1] === passedArray[2] && passedArray[2] === passedArray[3] &&
            passedArray[3] === passedArray[4]){
            holdHighNum = passedArray[1];
            return true;
        }else{
            return false;
        }
    }
    //function to test for 3 of a kind
    function see3ofAKind(passedArray){
        if((passedArray[0] === passedArray[1] && passedArray[1] === passedArray[2]) || (passedArray[1]
            === passedArray[2] && passedArray[2] === passedArray[3]) || (passedArray[2] === passedArray[3] &&
            passedArray[3] === passedArray[4])){
            return true;
        }else{
            return false;
        }
    }
    //find highest 3 of a kind
    function highest3(passedArray){
        if(passedArray[0] === passedArray[1] && passedArray[1] === passedArray[2]){
            return passedArray[0];
        }else if(passedArray[1] === passedArray[2] && passedArray[2] === passedArray[3]){
            return passedArray[1];
        }else{
            return passedArray[5];
        }
    }
    //find 2 pair
    function find2ofPair(passedArray){
        if((passedArray[0] === passedArray[1] && passedArray[2] === passedArray[3]) || (passedArray[0]
        === passedArray[1] && passedArray[3] === passedArray[4]) ||(passedArray[1] === passedArray[2]
        && passedArray[3] === passedArray[4])){
            return true;
        }else{
            return false;
        }
    }
    //find 2 of a kind
    function see2pair(passedArray){
        if(passedArray[0] === passedArray[1] || passedArray[1] === passedArray[2] || passedArray[2] ===
        passedArray[3] || passedArray[3] === passedArray[4]){
            return true;
        }else{
            return false;
        }
    }
    //find highest pair
    function highest2(passedArray){
        if(passedArray[0] === passedArray[1]){
            return passedArray[0];
        }else if(passedArray[1] === passedArray[2]){
            return passedArray[1];
        }else if(passedArray[2] === passedArray[3]){
            return passedArray[2];
        }else{
            return passedArray[4];
        }
    }
    //function to test for a full house
    function seeFullHouse(passedArray){
        //see if there is 3 of a kind and 2 of a kind in the same array
        if((passedArray[0] === passedArray[1] && passedArray[1] === passedArray[2] && passedArray[3] ===
        passedArray[4]) || (passedArray[0] === passedArray[1] && passedArray[2] === passedArray[3] &&
        passedArray[3] === passedArray[4])){

        return true;
        }else{
            return false;
        }
    }

    //function to test users for a flush
    function testFlush(suitArray){
        let findSame1 = 0;
        for(let i = 0; i < suitArray.length - 1; i++){
            if(suitArray[i] === suitArray[i + 1]){
                findSame1 += 1;
            }
        }
        return findSame1 === 4;
    }
    //function to find the highest in a 2 pair
    function highof2Pair(passArray){
        if(passArray[2] === passArray[3]){
            return passArray[2];
        }
        else{
            return passArray[4];
        }
    }
    //function to test if the array has all incrementing numbers
    function testIncrement(incArray){
        let findIncrement = 0;
        for(let i = 0; i < incArray.length; i++){
            if(incArray[i] === incArray[i + 1] - 1){
                findIncrement += 1;
            }
        }
        if(findIncrement === 4) {
            return true;
        }else{
            return false;
        }
    }
    //function to find the highest one if the 3 numbers are equal
    function cardCompared3(num1, num2, num3, num11, num22, num33){
        if(num1 > num2 && num1 > num3){
            return 1;
        }else if(num2 > num1 && num2 > num3){
            return 2;
        }else if(num3 > num1 && num3 > num2){
            return 3;
        }else{
            if(num11 > num22 && num11 > num33){
                return 1;
            }else if(num22 > num11 && num22 > num33){
                return 2;
            }else if(num33 > num11 && num33 > num22){
                return 3;
            }else{

            }
        }

    }
    function cardCompare(secCompare1, secCompare2, firstCompare1, firstCompare2, compareNumber){
        let user1, user2;
        if(compareNumber === 1){
            user1 = "Computer 1";
            user2 = "Computer 2";
        }else if(compareNumber === 2){
            user1 = "Computer 1";
            user2 = "Computer 3";
        }else if(compareNumber === 3){
            user1 = "Computer 1";
            user2 = "User";
        }else if(compareNumber === 4){
            user1 = "Computer 2";
            user2 = "Computer 3";
        }else if(compareNumber === 5){
            user1 = "Computer 2";
            user2 = "User";
        }else{
            user1 = "Computer 3";
            user2 = "User";
        }
        //Computer 1 wins
        if(secCompare1 > secCompare2){
            showWin(user1);
            //computer 2 wins
        }else if(secCompare1 < secCompare2){
            showWin(user2);
            //if they are tied
        }else{
            if(firstCompare1 > firstCompare2){
                showWin(user1);
            }else if(firstCompare1 < firstCompare2){
                showWin(user2);
            }else{
                showWin(user1 + ' and ' + user2);
            }
        }
    }
    function showWin(winner){
        $('#showWinner').replaceWith('<div id="winner">' + winner + ' Wins!</div>');
        winNumber = 1;
        $('#addCard2').hide();
        $('#addCard3').show();
    }

});