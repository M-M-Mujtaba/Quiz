var _token = "";
var _isLoggedInStat = false;
var _isAdmin = null;

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

export { login, logout, isLoggedIn, getToken, isAdminLogged };
