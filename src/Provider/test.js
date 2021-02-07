var axios = require('axios');
var data = JSON.stringify({"email":"asdf","password":"asdf"});

var config = {
  method: 'post',
  url: 'http://127.0.0.1:5000/usignin',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};
console.log(data)
axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});