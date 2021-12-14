url="https://raw.githubusercontent.com/TanviMishra/Core_Studio_Systems/main/draft1-water-rising/scripts/country.json"
fetch(url).then(response => {
    return response.json();
  }).then(data => {
    // Work with JSON data here
    maxTop=data.china.altitude.high;
    minBottom=data.china.altitude.low;
    countryTop = data.Belgium.altitude.high;
    countryBottom = data.Belgium.altitude.low;
    countryTopFormatted=scale(countryTop,maxTop,minBottom,0,window.innerHeight)
    
    
  }).catch(err => {
    console.log("error loading data")
  });