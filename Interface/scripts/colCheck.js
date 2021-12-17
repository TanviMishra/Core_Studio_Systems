function isCollide(a, b) {
    var aRect = a.getBoundingClientRect();
    var bRect = b.getBoundingClientRect();
    if(
        ((aRect.top + aRect.height) > (bRect.top))
    ){
        return true;
    };
}
