export { fetchCountries };
  
const BASE_URL = 'https://restcountries.com/v3.1/name/';

function fetchCountries(name) {  
  return fetch(`${BASE_URL}${name}?fields=name,capital,population,flags,languages`)
    .then(response => {      
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })    
    .catch(error => console.error(error));
};

// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// export { fetchCountries };
  
// const BASE_URL = 'https://restcountries.com/v3.1/name/';
// const minValueOfCountries = 2;
// const maxValueOfCountries = 10;

// function fetchCountries(name) {  
//   fetch(`${BASE_URL}${name}?fields=name,capital,population,flags,languages`)
//     .then(response => {      
//       if (!response.ok) {
//         throw new Error(response.statusText);
//       }
//       return response.json();
//     })
//     .then(data => {
//       console.log(data); // DELETE
      
//       if (data.length === 1) {
//         Notify.success('One country found.');
//         return data;
//       };

//       if (data.length >= minValueOfCountries && data.length <= maxValueOfCountries) {
//         Notify.success(`${data.length} countries found.`);
//         return data;
//       };      
      
//       if (data.length > 10) {
//         Notify.info('Too many matches found. Please enter a more specific name.');
//       };
//     })
//     .catch(error => Notify.failure('Oops, there is no country with that name'));
// };
