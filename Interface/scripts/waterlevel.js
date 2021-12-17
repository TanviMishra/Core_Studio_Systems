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
function calcRise(val){
    currentWaterLevel+=val;
    dispWaterRise();
}
function calcCE(){
    //ceTotal+=20;
    calcRise(credStart);
}
setInterval(function(){calcCE()}, 3000);
