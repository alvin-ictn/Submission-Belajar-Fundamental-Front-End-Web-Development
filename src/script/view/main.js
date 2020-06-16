import '../component/covidInfo.js';
import '../component/search.js';
import CovidData from '../data/getData.js';
 
const apps = () => {
   const searchElement = document.querySelector("country-search");
   const covidItemElement = document.querySelector("covid-info");

   const searchIt = async () => {
       try {
           const result = await CovidData.covidSearch(searchElement.value);
           renderResult(result);
       } catch (message) {
           fallbackResult(message)
       }
   };
 
   const renderResult = results => {
       covidItemElement.covidInfo = results;
       
   };
 
   const fallbackResult = message => {
       covidItemElement.renderError(message);
   };
 
   searchElement.clickEvent = searchIt;
};

export default apps;