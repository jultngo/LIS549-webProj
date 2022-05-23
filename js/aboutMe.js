function openAMWindow(){
    $('.preference-window').addClass("active-state-1");
    $('.preference-buttons').addClass("active");
    console.log("check");
}

var opened = false;

function closeWindowAM(){
    opened = false;
    $('.aboutMe').remove();
    $('.preference-window').removeClass("active-state-1");
    $('.preference-buttons').removeClass("active");
    $('.preference-name').empty();
    $('.tabs').remove();
    reset();
}

$('.preference-buttons div').hover(
    //onhover
    function(){
        $('.preference-buttons .red').append("<img src='images/close.svg' width='60%' class='close'>");
        $('.preference-buttons .yellow').append("<img src='images/minimize.svg' width='60%' class='minimize'>");
    },
    //exithover
    function(){
        $('.preference-buttons div img').remove();
    }
);

function openAboutMe(){
    if(opened == false){
        openAMWindow();
        $('head').append('<link class="aboutMe" href="css/aboutMe.css" rel="stylesheet">');
    
        $('.preference-name').append("About Me");
        openFirstTab();
        opened = true;
    }
}
//'<div class="tabs"> <div onclick="openFirstTab()" class="selected" id="firstTab">Overview</div> <div onclick="openTab2()" id="tab2">Resumè</div> <div onclick="openTab3()" id="tab3">Skills</div> <div onclick="openTab4()" id="tab4">Contact</div> <div onclick="openLastTab()"id="lastTab">Game</div> </div>'
function reset(){
    $('#firstTab').removeClass('selected');
    $('#tab2').removeClass('selected');
    $('#tab3').removeClass('selected');
    $('#tab4').removeClass('selected');
    $('#lastTab').removeClass('selected');
    $('.preference-body').empty();
}

function openFirstTab(){
    reset();
    $('#firstTab').addClass('selected');
    $('.preference-body').html(firstTabContent);
}

function openTab2(){
    reset();
    $('#tab2').addClass('selected');
    $('.preference-body').html(tab2Content);
}

function openTab3(){
    reset();
    $('#tab3').addClass('selected');
    $('.preference-body').html(tab3Content);
    setTimeout(function(){
        $('.fill-50').css("width","250px");
        $('.fill-80').css("width","400px");
    },500);
    
}

function openTab4(){
    reset();
    $('#tab4').addClass('selected');
    $('.preference-body').html(tab4Content);
}

function openLastTab(){
    reset();
    $('#lastTab').addClass('selected');
    $('.preference-body').html(lastTabContent);
    updateCounter();
}

var firstTabContent = "<div id='overview'><img src='images/Julian.jpg'><header><b>Julian</b>Ngo</header><p id='ver'><b>Version</b> 25.0.0</p> <br> </p><p>I strive to dedicate myself to go above and beyond for any and all tasks that come my way, whether it be in an individual setting or a team-based. I understand that design and management are fluid work systems that requires constant evolution and adaptability to ensure that each project and work environment is as productive as possible.</p> <br><br> <a href='docs/JulianNgo_Resume.pdf' rel='noopener noreferrer' target='_blank' class='myButton'>Resume<a> <a href='mailto:jultngo@gmail.com' class='myButton'>E-mail Me!<a></div>";

var tab2Content = "<embed src= 'MyHome.pdf' width= '500' height= '375'>";

var tab3Content = "<div id='skills'> <table> <tr> <td></td>  <td>Coding</div><div class='empty-bar'><div class='fill-80' id='coding-bar'></div></td> </tr>  <tr> <td></td>  <td>Design</div><div class='empty-bar'><div class='fill-80'></div></td> </tr>  <tr> <td></td>  <td>Other Skills</div><div class='empty-bar'><div class='fill-80'></div></td> </tr></table> </div>";

var tab4Content = '<div class="buttonHolder"> <input value="Search" title="Search" type="submit" id="btn_s"> <input value="I\'m Feeling Lucky" title="I\'m Feeling Lucky" name="lucky" type="submit" id="btn_i"> </div>';

var lastTabContent = '<div id="game-screen"> <p id="counter"></p> <div id="main-butt" class="buttonHolder"> <input onclick="clicker()" value="HELLO?" title="click" type="submit" id="btn_s"> </div> <div id="encapsulate"> <div id="upgradeTab" onclick="openOrCloseUpgradeTab()"> </div> <div id = "upgrades" class="buttonHolder"> <input onclick="increaseM()" value="Increase Click Increment" title="Increase Click Increment" type="submit" id="btn_i"> <input onclick="increaseN()" value="Increase Click Increment" title="Increase Click Increment" type="submit" id="btn_i"> <input onclick="changeState1()" value="+10 auto" title="Beard" type="submit" id="btn_i"> <input onclick="changeState2()" value="+100 auto" title="Cat" type="submit" id="btn_i"> <input onclick="changeState3()" value="+1000 auto" title="Frand" type="submit" id="btn_i"> </div> </div> </div>';

///////////////////////////
//code for the clicker game
///////////////////////////
var counter = 0;
var n = 1;//autoclicker
var m = 1;//clicker
var stateStartGame = false;
var state1 = false;
var state2 = false;
var state3 = false;
var upgradeTabOpened = false;

function clicker(){
    if(stateStartGame == false){
        stateStartGame = true;
    }
    console.log("click");
    counter += m;
    updateCounter();
}

function updateCounter(){
    //update the value shown on the html
    $('#counter').empty;
    $('#counter').html(counter);
}

setInterval(function(){
    if(stateStartGame == true){
        counter += n;
        if(state1 == true){
            counter += 10;
        }
        if(state2 == true){
            counter += 100;
        }
        if(state3 == true){
            counter += 1000;
        }
    }
    updateCounter();
}, 1000);

function increaseN(){
    n ++;
}
function increaseM(){
    m ++;
}

function changeState1(){
    state1 = true;
}

function changeState2(){
    state2 = true;
}

function changeState3(){
    state3 = true;
}

function openOrCloseUpgradeTab(){
    if(upgradeTabOpened == true){
        //change css element
        $('#upgrades').css("height", "0");
        $('#upgrades').css("visibility", "hidden");
        upgradeTabOpened = false;
    }else{
        //revert changes
        $('#upgrades').css("height", "200");
        $('#upgrades').css("visibility", "visible");
        upgradeTabOpened = true;
    }
}