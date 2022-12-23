import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;
const minValueOfCountries = 2;
const maxValueOfCountries = 10;

const refs = {
  searchBox: document.querySelector('#search-box'),
  listCountry: document.querySelector('.country-list'),
  infoCountry: document.querySelector('.country-info'),
};

refs.searchBox.addEventListener('input', debounce(onSearchBoxInput, DEBOUNCE_DELAY));

function onSearchBoxInput(e) {
  e.preventDefault();
  
  let normalizedSearchInput = refs.searchBox.value.trim();

  fetchCountries(normalizedSearchInput)
    .then(data => {
      // console.log(data);
      // if (normalizedSearchInput === '') {
      //   clearMarkup();
      //   return;
      // };

      if(data.length === 1) {
        Notify.success('One country found.');
        console.log(data) // stopped here!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        
        // return data;
      };

      if(data.length >= minValueOfCountries && data.length <= maxValueOfCountries) {
        Notify.success(`${data.length} countries found.`);
        // return data;
      };      
      
      if(data.length > maxValueOfCountries) {
        Notify.info('Too many matches found. Please enter a more specific name.');
      };  
    })
    .catch(error => Notify.failure('Oops, there is no country with that name'));  

}

function createMarkupForCountryInfo() {

};

function createMarkupForCountryList() {

};

function clearMarkup() {
  refs.infoCountry.innerHTML = '';
  refs.listCountry.innerHTML = '';
}


 
