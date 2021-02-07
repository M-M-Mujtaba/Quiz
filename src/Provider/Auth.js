import  useState  from 'react';
var _token = "";
var _isLoggedInStat = false;
var _isAdmin = null;


var repos = null;


function login_student(username, password) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify({"email":"mujtaba@gmail.com","password":"12345678"});
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  
  var output = fetch("http://127.0.0.1:5000/usignin", requestOptions)
  
  return output;
}

function handleResponse(response) {
  var output =  response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
        if (response.status === 401) {
            // auto logout if 401 response returned from api
            logout();
        }

        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
    }
    console.log(data)
    return data;
});;
  return output
}
const login = (token, isAdmin) => {
  _token = token;
  _isAdmin = isAdmin;
  _isLoggedInStat = true;
  localStorage.removeItem("REACT_TOKEN_AUTH_RUGBY");
  localStorage.removeItem("REACT_ISADMIN_AUTH_RUGBY");
  localStorage.setItem("REACT_TOKEN_AUTH_RUGBY", token);
  localStorage.setItem("REACT_ISADMIN_AUTH_RUGBY", isAdmin);
  return;
};
const logout = () => {
  localStorage.removeItem("REACT_TOKEN_AUTH_RUGBY");
  localStorage.removeItem("REACT_ISADMIN_AUTH_RUGBY");
  _isLoggedInStat = false;
  _token = "";
  _isAdmin = null;
};

const isLoggedIn = () => {
  if (_isLoggedInStat === false) {
    if (localStorage.getItem("REACT_TOKEN_AUTH_RUGBY") != null) {
      _token = localStorage.getItem("REACT_TOKEN_AUTH_RUGBY");
      _isLoggedInStat = true;
    }
  }
  return _isLoggedInStat;
};

const isAdminLogged = () => {
  if (_isAdmin === null) {
    if (localStorage.getItem("REACT_ISADMIN_AUTH_RUGBY") != null) {
      _isAdmin = localStorage.getItem("REACT_ISADMIN_AUTH_RUGBY");
    }
  }
  return _isAdmin;
};

const getToken = () => {
  return _token;
};

export { login, logout, isLoggedIn, getToken, isAdminLogged, login_student };
