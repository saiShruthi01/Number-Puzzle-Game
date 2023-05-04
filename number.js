alert("There are at least 36 different possibilities.\nGood luck!");
values = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function checkSums() {
    /*
    rows, 0-2:top>bottom
    cols, 3-5:left>right
    */
    i = document.getElementsByClassName("input");
    o = document.getElementsByClassName("output");
    
    //check for valid numbers
    for(j = 0; j < i.length; j++)
        if(isNaN(i[j].value))
            i[j].value = 0;
    
    o[0].value = parseInt(i[0].value) + parseInt(i[1].value) + parseInt(i[2].value);
    o[1].value = parseInt(i[3].value) + parseInt(i[4].value) + parseInt(i[5].value);
    o[2].value = parseInt(i[6].value) + parseInt(i[7].value) + parseInt(i[8].value);
    //195 627 843
    o[3].value = parseInt(i[0].value) + parseInt(i[3].value) + parseInt(i[6].value);
    o[4].value = parseInt(i[1].value) + parseInt(i[4].value) + parseInt(i[7].value);
    o[5].value = parseInt(i[2].value) + parseInt(i[5].value) + parseInt(i[8].value);
    
    clearBoxes();
}
function help() {    
    alert("Using the nine boxes, arrange the numbers from 1 to 9 in a way that their horizontal and vertical sums add up to 15. Each number can only be used once.");
    alert("Press the 'R' button to randomize the boxes");
    alert("Press the 'Clear' button to remove all green and red verifications");
    alert("Press the 'Submit' button to verify your inputs");
    alert("Good luck!");
}
function clearBoxes() {
    i = document.getElementsByClassName("input");
    o = document.getElementsByClassName("output");
    
    for(j = 0; j < o.length; j++)                    
        o[j].style.backgroundColor = "#ccc";
    for(j = 0; j < i.length; j++)                    
        i[j].style.backgroundColor = "#eee";
}
function submit() {
    var valid = isValid();
    var correct = isCorrect();
    if(valid && correct)
        win();
    else
        lose();
}
function isCorrect() {
    var correct = true;
    //all must be 15
    o = document.getElementsByClassName("output");
    
    for(j = 0; j < o.length; j++) {
        o[j].style.backgroundColor = "#7f7";
        if(parseInt(o[j].value)!==15) {
            o[j].style.backgroundColor = "#f77";
            correct = false;
        }
    }
            
    return correct;
}
function isValid() {
    var valid = true;
    var h = []; 
    i = document.getElementsByClassName("input");
    
    for(a = 0; a < i.length; a++) { 
        i[a].style.backgroundColor = "#7f7";
        if(parseInt(i[a].value)===0) {
            i[a].style.backgroundColor = "#f77";
            valid = false;
        }
        for(b = 0; b < h.length; b++) {            
            if(i[a].value==h[b]) {
                i[a].style.backgroundColor = "#f77";
                valid = false;
            }
                
        }
        h[a] = i[a].value;
    }
    return valid;
}
function random() {
    shuffle();
    i = document.getElementsByClassName("input");    
    
    for(j = 0; j < i.length; j++)
        i[j].value = values[j];
        
    checkSums();    
}
function shuffle() {
    var tempVar;
    var j;
    for(i=0; i < values.length; i++) {
        j = rand(1, values.length-1);
        tempVar = values[i];
        values[i] = values[j];
        values[j] = tempVar;
    }
}
function win() {
    alert("Congratulations! You solved the number puzzle. Please upvote if you enjoyed.\n😉😉😎😎 ");
    alert("Comment your winning code and see how unique you are from the rest.");
}
function lose() {
    alert("The red boxes either have repeated numbers, or sums are not 15. Try again.")
}
function copyright() {
    window.open('https://danidre14.wixsite.com/danidre14');
}
function rand(min, max) {
    range = max - min;
    return Math.round(Math.random()*range + min);
}