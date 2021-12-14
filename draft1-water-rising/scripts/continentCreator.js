var element = document.getElementById("countrySelector");
var countryInput = "China";

element.addEventListener("change", (e) => {
    const value = e.target.value;
    const text = element.options[element.selectedIndex].text;
    if (value) {
      countryInput=value;
      makingShape(countryInput)
    } else {
      console.log("waiting for input")
    }
  });

function makingShape(selectedCountry){
    url="https://raw.githubusercontent.com/TanviMishra/Core_Studio_Systems/main/draft1-water-rising/scripts/country.json"
    fetch(url).then(response => {
        return response.json();
    }).then(data => {
        function findTopBottom (search){
            for (let i = 0; i < data.length; i++){
                if (data[i].country == search){
                    return [data[i].altitude.high,data[i].altitude.low,data[i].landArea]
                }
            }
        }
        function scaleFunction(setter,setting){
            return scale(setting,setter[0],setter[1],50,window.innerHeight-50);
        }

        let valueSetTop = "China"; //finding highest value to scale the rest to screen size
        valueTop=findTopBottom(valueSetTop);
        let valueSetBottom = "Zambia"; //finding lowest value to scale the rest to screen size
        valueBottom=findTopBottom(valueSetBottom);
        valueSet=[valueTop[0],valueBottom[1]]
        let inputCountry = selectedCountry;
        countryDim=findTopBottom(inputCountry); //returned values from function

        countryTopScaled =scaleFunction(valueSet,countryDim[0])
        countryBottomScaled =scaleFunction(valueSet,countryDim[1])
        countryHeight=countryBottomScaled-countryTopScaled
        countryWidth=countryDim[2]/(countryDim[0]-countryDim[1]);
        countryWidth=scale(countryWidth,1.2791450777202074,1115.1925925925925,100,window.innerWidth-100) //HARDCODED SCALE VALUES
        console.log(countryWidth)

        land.style.top = countryTopScaled + "px";
        land.style.height = countryHeight + "px";
        land.style.width = countryWidth + "px";

        humanPosH=countryTopScaled-15//HARDCODED HEIGHT
        humanPosW=50+countryWidth/2-5//HARDCODED -5 to center allign
        human.style.top=humanPosH + "px";
        human.style.left=humanPosW + "px";
        
    }).catch(err => {
        console.log("error loading data")
    });
}