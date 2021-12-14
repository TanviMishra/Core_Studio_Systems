let additive;
function lifeFunctions(additive){
    //adding energy costs of being alive
    ceTotal+=parseInt(additive);
    console.log(ceTotal);
}

// assign slider value to variables
techSlider.oninput = function() { 
    techSliderInfo = this.value;
    lifeFunctions(techSliderInfo)
}
foodSlider.oninput = function() { 
    foodSliderInfo = this.value;
    lifeFunctions(techSliderInfo)
}
wasteSlider.oninput = function() { 
    wasteSliderInfo = this.value;
    lifeFunctions(techSliderInfo)
}
energySlider.oninput = function() { 
    energySliderInfo = this.value;
    lifeFunctions(techSliderInfo)
}