let gamePattern=[];
let userPattern=[];
let diff=["none","easy","medium","hard"];
let color=["red","blue","green","yellow"];
let start=false;
var choice;
var level=0;
document.getElementsByClassName("h1").innerHTML=" Press 1 for Easy 2 for Medium 3 for Hard ";
document.addEventListener("keydown",function(event)
{
if(start===false)
{
        
        document.getElementsByClassName("body").style.backgroundColor="#FCE9F1";
        start=true;
        if(event.key==1)
        {
                choice=event.key;
                start=true;
                easygenerator();
        }
        else if(event.key==2)
        {       
                choice=event.key;
                start=true;
                mediumgenerator();
        }
        else if(event.key==3)
        {
                choice=event.key;
                start=true;
                hardgenerator();
        }
        else{
                alert("wrong option selected please try again");
                start=false;
        }
        
}
});

function mediumgenerator()
{
        level++;
        document.getElementsByClassName("h1").innerHTML="Level "+level;
        let num=rand();
        animate(color[num]);
        play(color[num]);
        gamePattern.push(color[num]);
}

function easygenerator()
{
        level++;
        document.getElementsByClassName("h1").innerHTML="Level "+level;
        let counter=0;
        let num=rand();        
        gamePattern.push(color[num]);
        function delayedAction(counter) {
                setTimeout(function () {
                  console.log("gamePattern[counter]:", gamePattern[counter]);
                  
                  animate(gamePattern[counter]);
                  play(gamePattern[counter]);
                }, 100);
              }
              if(counter<gamePattern.length)
              {
                setInterval(function()
                {
                        delayedAction(counter);
                        counter++;
                },500);
              }
}

function hardgenerator()
{
        level++;
        document.getElementsByClassName("h1").innerHTML="Level "+level;
        let num=rand();
        play(color[num]);
        gamePattern.push(color[num]);
}

for(let i=0;i<4;i++)
{
document.getElementsByClassNameAll(".box")[i].addEventListener("click",function()
{
        animate(this.classList[1]); 
        let select=(this.classList[1]);
        userPattern.push(select);
        checkPattern((userPattern.length-1));
});
}

function checkPattern(index)
{
        if(userPattern[index]===gamePattern[index])
        {
                play(userPattern[index]);
                if((gamePattern.length-1)===index)
                {
                        if(choice==2)
                        {
                        userPattern=[];
                        setTimeout(function()
                        {
                        mediumgenerator();
                        },500);
                        }
                        else if(choice==1)
                        {
                                userPattern=[];
                                setTimeout(function()
                                {
                                        easygenerator();
                                },500);
                        }
                        else if(choice==3)
                        {
                                userPattern=[];
                                setTimeout(function()
                                {
                                        hardgenerator();
                                },500);
                        }
                }
        }
        else
        {
                userPattern=[];
                gamePattern=[];
                document.getElementsByClassName("body").style.backgroundColor="red";
                document.getElementsByClassName("h1").innerHTML=" Press 1 for Easy 2 for Medium 3 for Hard ";
                var sound=new Audio("./wrong.mp3");
                level=0;
                sound.play();
                start=false;
        }
}

function rand()
{
        let no=Math.random();
        no*=4;
        no=Math.floor(no);
        return no;
}
function animate(color)
{
        document.getElementsByClassName("."+color).classList.add("pressed");
        
        setTimeout(function()
        {
                document.getElementsByClassName("."+color).classList.remove("pressed");
        },100);
}
function play(color)
{
        var audio=new Audio("./"+color+".mp3");
        audio.play();
}