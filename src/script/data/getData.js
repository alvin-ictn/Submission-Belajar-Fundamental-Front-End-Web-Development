class CovidData {
  static covidSearch(country) {
      return fetch(`https://covid19.mathdro.id/api/countries/${country}`)
      .then(response => {
          return response.json();
      })
      .then(covidData => {
          console.log(covidData)
          if(covidData.confirmed) {
              return Promise.resolve(covidData);
          } else {
              return Promise.reject(`Data of ${country} is not found`);
          }
      })
  }
}

export default CovidData;