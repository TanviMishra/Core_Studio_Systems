let ceThreshold = 1000; //in billions
let waterRise = 1; //when ce reaches 1000, water rises by 1m
let rateOfRise=waterRise/ceThreshold //meters per CE
let initialWaterLevel=75;
let currentWaterLevel=initialWaterLevel;
let ceInitial=100;
let ceTotal=ceInitial;
let humanPos=[200,200];

let human=document.querySelector("#human");
let water=document.querySelector("#water");
let land=document.querySelector("#land");

//all sliders
let techSlider = document.querySelector("#techSlider");
let foodSlider = document.querySelector("#foodSlider");
let wasteSlider = document.querySelector("#wasteSlider");
let energySlider = document.querySelector("#energySlider");
let techSliderInfo = 0;
let foodSliderInfo = 0;
let wasteSliderInfo = 0;
let energySliderInfo = 0;

//country values initalised from continentCreator
let valueSetBottom, valueSetTop, temp;

//mapping values function
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

//human position setting
human.style.left = humanPos[0] + "px";
human.style.bottom = humanPos[1] + "px";


//JSON DATA BREAKDOWN
// "Lebanon":{
//     "altitude":{
//         "low":0,
//         "high":3088 // in m
//     },
//     "landArea":3950, //in m^2
//     "population":0.09, //% of world pop
//     "carbonCredit":{
//         "historical":0.04,//% of historical
//         "present": 0.021 //in gt
// }