url="https://raw.githubusercontent.com/TanviMishra/Core_Studio_Systems/main/draft1-water-rising/scripts/country.json"
fetch(url).then(response => {
    return response.json();
  }).then(data => {
    // Work with JSON data here
    maxTop=data.China.altitude.high;
    minBottom=data.China.altitude.low;
    countryTop = data.Belgium.altitude.high;
    countryBottom = data.Belgium.altitude.low;
    countryTopFormatted=scale(countryTop,maxTop,minBottom,window.innerHeight,0)
    console.log(countryTop, "and", countryTopFormatted)
    
  }).catch(err => {
    console.log("error loading data")
  });