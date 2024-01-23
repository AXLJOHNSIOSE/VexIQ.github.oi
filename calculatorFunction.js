let uniformone = false;
let uniformtwo = false;
let uniformthree = false;


let GoalOne_Height = 0;
let GoalTwo_Height = 0;
let GoalThree_Height = 0;

let prev_level = 0;
let lowest_level = 0;

let mysupply = false;

let prev_park2 = 0;
let prev_park1 = 0;
let active_park = 0;


function homepage(){
    window.location.assign("roboticScoring.html");
}

function REDBOX_MINUS(){
    var score = parseInt(document.getElementById("REDBOX_COUNT").textContent);
    if (score == 0){
        // don't do anything
    }else{
        score = score - 1;
        document.getElementById("REDBOX_COUNT").innerText = score;
        MY_TOTAL_SCORE(0,'redbox');
    }

}
function REDBOX_ADD(){
    var score = parseInt(document.getElementById("REDBOX_COUNT").textContent);
    if (score == 3){
        // don't do anything
    }else{
        score = score + 1;
        document.getElementById("REDBOX_COUNT").innerText = score;
        MY_TOTAL_SCORE(1,'redbox');
    }
}


// Goal 1 code START here
function GOAL_ONE_MINUS(){
    SCORING_BOX(0,"GOAL_ONE_POINT",'GOAL1_UNIFORM',1);
}

function GOAL_ONE_ADD(){
    SCORING_BOX(1,"GOAL_ONE_POINT",'GOAL1_UNIFORM',1);
}

function GOAL_ONE_LEVEL_0(){
    GOAL_LEVEL('GOAL1_LEVEL_THREE','GOAL1_LEVEL_TWO','GOAL1_LEVEL_ONE','GOAL1_LEVEL_ZERO');
    if (0 != GoalOne_Height){
        HEIGHT_BUNOS(1,0);
    }
}
function GOAL_ONE_LEVEL_1(){
    GOAL_LEVEL('GOAL1_LEVEL_THREE','GOAL1_LEVEL_TWO','GOAL1_LEVEL_ZERO','GOAL1_LEVEL_ONE');
    if (1 != GoalOne_Height){
        HEIGHT_BUNOS(1,1);
    }
}
function GOAL_ONE_LEVEL_2(){
    GOAL_LEVEL('GOAL1_LEVEL_THREE','GOAL1_LEVEL_ZERO','GOAL1_LEVEL_ONE','GOAL1_LEVEL_TWO');
    if (2 != GoalOne_Height){
        HEIGHT_BUNOS(1,2);
    }
}
function GOAL_ONE_LEVEL_3(){
    GOAL_LEVEL('GOAL1_LEVEL_ZERO','GOAL1_LEVEL_TWO','GOAL1_LEVEL_ONE','GOAL1_LEVEL_THREE');
    if (3 != GoalOne_Height){
        HEIGHT_BUNOS(1,3);
    }
}

function GOAL_ONE_UNIFORM(){
    uniformone = UNIFORM_GOAL('GOAL1_UNIFORM','GOAL_ONE_POINT',uniformone);   
}

// Goal 1 code END here.

// Goal 2 code START here
function GOAL_TWO_MINUS(){
    SCORING_BOX(0,"GOAL_TWO_POINT",'GOAL2_UNIFORM',2);
}

function GOAL_TWO_ADD(){
    SCORING_BOX(1,"GOAL_TWO_POINT",'GOAL2_UNIFORM',2);
}

function GOAL_TWO_LEVEL_0(){
    GOAL_LEVEL('GOAL2_LEVEL_THREE','GOAL2_LEVEL_TWO','GOAL2_LEVEL_ONE','GOAL2_LEVEL_ZERO');
    if (0 != GoalTwo_Height){
        HEIGHT_BUNOS(2,0);
    }
}
function GOAL_TWO_LEVEL_1(){
    GOAL_LEVEL('GOAL2_LEVEL_THREE','GOAL2_LEVEL_TWO','GOAL2_LEVEL_ZERO','GOAL2_LEVEL_ONE');
    if (1 != GoalTwo_Height){
        HEIGHT_BUNOS(2,1);
    }
}
function GOAL_TWO_LEVEL_2(){
    GOAL_LEVEL('GOAL2_LEVEL_THREE','GOAL2_LEVEL_ZERO','GOAL2_LEVEL_ONE','GOAL2_LEVEL_TWO');
    if (2 != GoalTwo_Height){
        HEIGHT_BUNOS(2,2);
    }
}
function GOAL_TWO_LEVEL_3(){
    GOAL_LEVEL('GOAL2_LEVEL_ZERO','GOAL2_LEVEL_TWO','GOAL2_LEVEL_ONE','GOAL2_LEVEL_THREE');
    if (3 != GoalTwo_Height){
        HEIGHT_BUNOS(2,3);
    }
}

function GOAL_TWO_UNIFORM(){
    uniformtwo = UNIFORM_GOAL('GOAL2_UNIFORM','GOAL_TWO_POINT',uniformtwo);   
}

// Goal 2 code END here.

// Goal 3 code START here
function GOAL_THREE_MINUS(){
    SCORING_BOX(0,"GOAL_THREE_POINT",'GOAL3_UNIFORM',3);
}

function GOAL_THREE_ADD(){
    SCORING_BOX(1,"GOAL_THREE_POINT",'GOAL3_UNIFORM',3);
}

function GOAL_THREE_LEVEL_0(){
    GOAL_LEVEL('GOAL3_LEVEL_THREE','GOAL3_LEVEL_TWO','GOAL3_LEVEL_ONE','GOAL3_LEVEL_ZERO');
    if (0 != GoalThree_Height){
        HEIGHT_BUNOS(3,0);
    }
}
function GOAL_THREE_LEVEL_1(){
    GOAL_LEVEL('GOAL3_LEVEL_THREE','GOAL3_LEVEL_TWO','GOAL3_LEVEL_ZERO','GOAL3_LEVEL_ONE');
    if (1 != GoalThree_Height){
        HEIGHT_BUNOS(3,1);
    }
}
function GOAL_THREE_LEVEL_2(){
    GOAL_LEVEL('GOAL3_LEVEL_THREE','GOAL3_LEVEL_ZERO','GOAL3_LEVEL_ONE','GOAL3_LEVEL_TWO');
    if (2 != GoalThree_Height){
        HEIGHT_BUNOS(3,2);
    }
}
function GOAL_THREE_LEVEL_3(){
    GOAL_LEVEL('GOAL3_LEVEL_ZERO','GOAL3_LEVEL_TWO','GOAL3_LEVEL_ONE','GOAL3_LEVEL_THREE');
    if (3 != GoalThree_Height){
        HEIGHT_BUNOS(3,3);
    }
    
}

function GOAL_THREE_UNIFORM(){
    uniformthree = UNIFORM_GOAL('GOAL3_UNIFORM','GOAL_THREE_POINT',uniformthree);   
}

// Goal 3 code END here.


//Height Bunos code start here
function HEIGHT_BUNOS(mygoal,myheight){
    var lower_height;

    if (mygoal == 1){
        // goal 1
        GoalOne_Height = myheight;

    }else if(mygoal == 2){
        // goal 2
        GoalTwo_Height = myheight;
    }else{
        // goal 3
        GoalThree_Height = myheight;
    }

    lower_height = (Math.min(GoalOne_Height,GoalTwo_Height,GoalThree_Height));
    
    if (lowest_level != lower_height){
        if (lower_height == 0){
            MY_HEIGHT_LEVEL(1,'level_0');
        }
        if (lower_height == 1){
            MY_HEIGHT_LEVEL(1,'level_1');
        }
        if (lower_height == 2){
            MY_HEIGHT_LEVEL(1,'level_2');
        }
         
        if (lower_height == 3){
            MY_HEIGHT_LEVEL(1,'level_3');
        }
    } 

    lowest_level = lower_height;

     
}
//height bunos code end here


//supply code start here
function SUPPLY_ZONE(){
    const btn = document.getElementById('SUPPLYZONEBUTTON');
    if (mysupply == false){
        btn.style.backgroundColor = "green";
        btn.style.color = 'white';
        mysupply = true;
        MY_TOTAL_SCORE (1,'supplyzone');
    }else{
        btn.style.backgroundColor = "white";
        btn.style.color = 'black';
        mysupply = false;
        MY_TOTAL_SCORE (0,'supplyzone');
    }

}
//supply code end here



// parking code start here
function NOT_PARKED1(){
    PARKING_POSITION('PARTIALLY1', 'FULLY1' , 'PARKED1');
    MY_PARKING_ROBOT(1,'not_parking',1);
}
function NOT_PARKED2(){
    PARKING_POSITION('PARTIALLY2', 'FULLY2' , 'PARKED2');
    MY_PARKING_ROBOT(1,'not_parking',2);
}
function PARTIALLY_PARKED1(){
    PARKING_POSITION('FULLY1' , 'PARKED1','PARTIALLY1');
    MY_PARKING_ROBOT(1,'partially_parking',1);
}
function PARTIALLY_PARKED2(){
    PARKING_POSITION('FULLY2' , 'PARKED2','PARTIALLY2');
    MY_PARKING_ROBOT(1,'partially_parking',2);
}
function FULLY_PARKED1(){
    PARKING_POSITION('PARTIALLY1' , 'PARKED1' , 'FULLY1');
    MY_PARKING_ROBOT(1,'fully_parking',1);
}
function FULLY_PARKED2(){
    PARKING_POSITION('PARTIALLY2' , 'PARKED2' , 'FULLY2');
    MY_PARKING_ROBOT(1,'fully_parking',2);
}

//parking code end here


//storage supply
function UNIFORM_GOAL(goal,goaltext,active){
    var uniform = document.getElementById(goal);
    var count = parseInt(document.getElementById(goaltext).textContent);
    if (count > 1){
        if (active == false){
            uniform.style.background = 'green';
            uniform.style.color = 'white';
            MY_TOTAL_SCORE(1,'uniform');
            return true;
        }else{
            uniform.style.background = 'white';
            uniform.style.color = 'black';
            MY_TOTAL_SCORE(0,'uniform');
            return false;
        }
    }else{
        return active;
    } 
}


function GOAL_LEVEL(button1,button2,button3,active){
    const btn_1 = document.getElementById(button1);
    const btn_2 = document.getElementById(button2);
    const btn_3 = document.getElementById(button3);
    const active_button = document.getElementById(active);

    btn_1.style.background = "white";
    btn_1.style.color = "black";
    btn_2.style.background = "white";
    btn_2.style.color = "black";
    btn_3.style.background = "white";
    btn_3.style.color = "black";
    active_button.style.background = "green";
    active_button.style.color = 'white';
}


function PARKING_POSITION(button1,button2,active){
    const btn_1 = document.getElementById(button1);
    const btn_2 = document.getElementById(button2);
    const active_button = document.getElementById(active);

    btn_1.style.background = "white";
    btn_1.style.color = "black";
    btn_2.style.background = "white";
    btn_2.style.color = "black";
    active_button.style.background = "green";
    active_button.style.color = 'white';
}

// SCORING FOR GOAL
function SCORING_BOX(type,id,goal,goaltype){
    var score = parseInt (document.getElementById(id).textContent);
    var uniform = document.getElementById(goal);

    if (type == 0){
        if (score == 0){
            // don't do anything
        }else{
            score = score - 1;
            document.getElementById(id).innerText = score;
            MY_TOTAL_SCORE(0,'counting');
        }
    }else{
        score = score + 1;
        document.getElementById(id).innerText = score;
        MY_TOTAL_SCORE(1,'counting');
    }

    if (score <= 1){
        uniform.style.background = 'white';
        uniform.style.color = 'black';
        if (goaltype == 1){
            uniformone = TURN_FALSE(uniformone);
            
        }else if (goaltype == 2){
            uniformtwo = TURN_FALSE(uniformtwo);
            
        }else{  
            uniformthree = TURN_FALSE(uniformthree);
            
        }

    }
}

function TURN_FALSE(uniform){
    if (uniform == true){
        MY_TOTAL_SCORE(0,'uniform');
        return false;
    }else{
        return uniform;
    }
}


function RESET(){
    document.getElementById("TOTAL_SCORE").innerText = "0";
    document.getElementById("REDBOX_COUNT").innerText = "0";
    document.getElementById("GOAL_ONE_POINT").innerText = "0";
    document.getElementById("GOAL_TWO_POINT").innerText = "0";
    document.getElementById("GOAL_THREE_POINT").innerText = "0";
    document.getElementById("HEIGHT_LEVEL").innerText = "0";

    PARKING_POSITION('PARTIALLY1', 'FULLY1' , 'PARKED1');
    PARKING_POSITION('PARTIALLY2', 'FULLY2' , 'PARKED2');
    GOAL_LEVEL('GOAL3_LEVEL_THREE','GOAL3_LEVEL_TWO','GOAL3_LEVEL_ONE','GOAL3_LEVEL_ZERO');
    GOAL_LEVEL('GOAL2_LEVEL_THREE','GOAL2_LEVEL_TWO','GOAL2_LEVEL_ONE','GOAL2_LEVEL_ZERO');
    GOAL_LEVEL('GOAL1_LEVEL_THREE','GOAL1_LEVEL_TWO','GOAL1_LEVEL_ONE','GOAL1_LEVEL_ZERO');

    let all_button =  new Array ('SUPPLYZONEBUTTON','GOAL3_UNIFORM','GOAL2_UNIFORM','GOAL1_UNIFORM');


    for (let i = 0; i < all_button.length;  i++){
        var valueof = document.getElementById(all_button[i]);
        valueof.style.background = 'white';
        valueof.style.color = "black";
    }







    uniformone = false;
    uniformtwo = false;
    uniformthree = false;
    GoalOne_Height = 0;
    GoalTwo_Height = 0;
    GoalThree_Height = 0;
    prev_level = 0;
    lowest_level = 0;
    mysupply = false;
    prev_park2 = 0;
    prev_park1 = 0;
    active_park = 0;




}



// buttontype
// 0 for minus
// 1 for plus

//mytype
// redbox = redbox
// counting = goal count box

// change total score
function MY_TOTAL_SCORE(buttontype,type){
    var total_score = parseInt(document.getElementById("TOTAL_SCORE").textContent);
    var mytype = type;
    var point;

    if (mytype == "redbox"){
        point = 5;
        total_score = CALCULATOR(buttontype,point,total_score);
    }

    if (mytype == "counting"){
        point = 1;
        total_score = CALCULATOR(buttontype,point,total_score);
    }
    if (mytype == 'uniform'){
        point = 10;
        total_score = CALCULATOR(buttontype,point,total_score);
    }
    if(mytype == 'supplyzone'){
        point = 20;
        total_score = CALCULATOR(buttontype,point,total_score);
    }
    
    document.getElementById("TOTAL_SCORE").innerText = total_score;
}


function MY_PARKING_ROBOT(button,type,prev){
    var total_score = parseInt(document.getElementById("TOTAL_SCORE").textContent);
    var mytype = type;
    var point;
    var bunos = 0;

    if (mytype == 'not_parking'){
        point = 0;
        total_score = total_score - robot(prev);
        total_score = CALCULATOR(button,point,total_score);

        if (prev == 1){
            prev_park1 = 0;
        }else{
            prev_park2 = 0;
        }

    }
    if (mytype == 'partially_parking'){
        point = 5;
        total_score = total_score - robot(prev);
        total_score = CALCULATOR(button,point,total_score);
        if (prev == 1){
            prev_park1 = 5;
        }else{
            prev_park2 = 5;
        }

    }
    if (mytype == 'fully_parking'){
        point = 10;
        total_score = total_score - robot(prev);
        total_score = CALCULATOR(button,point,total_score);
        if (prev == 1){
            prev_park1 = 10;
        }else{
            prev_park2 = 10;
        }

    }

    
    if ((prev_park1 == 10) && (prev_park2 == 10) && active_park == 0){
        bunos = 10;
        active_park = 1;
    }

    if (((prev_park1 != 10) || (prev_park2 != 10)) && (active_park == 1)){
        bunos = -10;
        active_park = 0;    
    }


    document.getElementById("TOTAL_SCORE").innerText = total_score + bunos;
}

function robot(prev){
    if (prev == 1 ){
        return prev_park1;
    }else{
        return prev_park2;
    }
}





function MY_HEIGHT_LEVEL(buttontype,type){
    var total_score = parseInt(document.getElementById("HEIGHT_LEVEL").textContent);
    var score = parseInt(document.getElementById("TOTAL_SCORE").textContent);
    var mytype = type;
    var point;

    if (mytype == 'level_0'){
        point = 0;
        total_score = total_score - prev_level;
        score = score - prev_level;
        total_score = CALCULATOR(buttontype,point,total_score);
        prev_level = 0;
    }
    if (mytype == 'level_1'){
        point = 10;
        total_score = total_score - prev_level;
        score = score - prev_level;
        total_score = CALCULATOR(buttontype,point,total_score);
        prev_level = 10;
    }
    if (mytype == 'level_2'){
        point = 20;
        total_score = total_score - prev_level;
        score = score - prev_level;
        total_score = CALCULATOR(buttontype,point,total_score);
        prev_level = 20;
    }
    if (mytype == 'level_3'){
        point = 30;
        total_score = total_score - prev_level;
        score = score - prev_level;
        total_score = CALCULATOR(buttontype,point,total_score);
        prev_level = 30;
    }

    document.getElementById("HEIGHT_LEVEL").innerText = total_score;
    document.getElementById("TOTAL_SCORE").innerText = total_score + score;

}

function CALCULATOR(type,point,totalscore){
    var total = totalscore;
    if (type == 0){
        return total - point;
    }else if (type == 1){
        return total + point;
    }else {
        return total;
    }
}