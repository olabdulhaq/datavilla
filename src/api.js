// import axios from 'axios'

const data = JSON.stringify({
  "angular_test": "angular-developer"
});

export const config = {
  method: 'post',
  url: 'https://g54qw205uk.execute-api.eu-west-1.amazonaws.com/DEV/stub',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

// const data = JSON.stringify({
//   "angular_test": "angular-developer"
// });

// const instance = axios.create({
//   baseUrl: 'https://g54qw205uk.execute-api.eu-west-1.amazonaws.com/DEV/stub',
//   headers: { 
//     'Content-Type': 'application/json'
//   }
// });

// export const postData = () => {
//     instance({
//         'method': 'POST',
//         'data': {
//             data
//         },
//         'headers': {
//             'content-type':'application/json'  // override instance defaults
//         }
//     })
// }
