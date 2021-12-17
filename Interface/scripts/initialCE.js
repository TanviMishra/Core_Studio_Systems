function calculatingInitialCE(home,destination,workAge,visaTime){
    url="https://raw.githubusercontent.com/TanviMishra/Core_Studio_Systems/main/draft1-water-rising/scripts/country.json"
    fetch(url).then(response => {
        return response.json();
    }).then(data => {
        for (let i = 0; i < data.length; i++){
            if (data[i].country == destination){
                destHist=data[i].carbonCredit.historical;
                destPresent=data[i].carbonCredit.present;
                destPop=data[i].population; 
            }
            else if(data[i].country == home){
                homeHist=data[i].carbonCredit.historical;
                homePresent=data[i].carbonCredit.present;
                homePop=data[i].population; 
            }
        }
        credStart=0.1*(((homeHist*workAge)/homePop)+(destPresent*visaTime)/destPop);
        console.log(credStart)
    }).catch(err => {
        console.log("error loading data")
    });
}
