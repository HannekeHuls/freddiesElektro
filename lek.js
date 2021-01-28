/**
 * display image
 */
const showImage = function() {
    var img = document.getElementById("lamp");
    img.style.visibility = "visible";
};
/**
 * hide image
 */
const hideImage = function() {
    var img = document.getElementById("lamp");
    img.style.visibility = "hidden";
};

const checkList =[["1","b"],["2","g"],["3","e"],["4","h"],["5","f"], ["6","i"],["7","a"],["8","d"],["9","c"]];
let compList = [];
let count = 9;

const checkAnswer = function(){
    let a = compList[0];
    let b = compList[1];
    
    for (let i=0; i < checkList.length; i++)
        if (checkList[i][0] == a && checkList[i][1] == b){
            compList = [];
            count = count-1;
            showImage();
          
            if (count == 0){
                hideImage();
                var felicity = document.getElementById("cat");
                felicity.style.visibility = "visible";
            }
        else compList = [];
        }
};

const compare = function(x){        
        compList.push(x);
        checkAnswer();
    };

const whenClicked = function(name){
    compare(name);
    hideImage();
};
