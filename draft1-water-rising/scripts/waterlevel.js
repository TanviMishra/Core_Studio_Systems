function checkCollision(){
    return isCollide(human, water);

}

function dispWaterRise(){
    let collisionVal= checkCollision()
    if(collisionVal!=true){
        document.querySelector("#water").style.height = currentWaterLevel + "px";
    } 
    else{
        document.querySelector("#dead").style.display="block";
    }
}

function calcRise(){
    currentWaterLevel+=rateOfRise*ceTotal;
    dispWaterRise();
}

function calcCE(){
    //lifeFunctions();
    ceTotal+=20;
    calcRise();
}

setInterval(function(){calcCE()}, 1000);
