import Index from "views/Index.js";
import Login from "views/examples/Login.js";
import UserHome from "views/UserHome.js";
import AdminLogin from "views/examples/AdminLogin";
import Quiz from "views/Quiz";
import Question_bank from "views/Question_bank";
import Attempt from "views/Attempt"


var routes = [
  {
    path: "/index",
    name: "Stats",
    icon: "ni ni-chart-bar-32 text-warning",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/quiz",
    name: "Quiz",
    icon: "ni ni-ruler-pencil text-info",
    component: Quiz,
    layout: "/admin",
  },
  {
    path: "/question_bank",
    name: "Question Bank",
    icon: "ni ni-folder-17 text-danger",
    component: Question_bank,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Logout",
    icon: "ni ni-button-power text-danger",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/adminLogin",
    name: "Admin Login",
    component: AdminLogin,
    layout: "/auth",
  },
  {
    path: "/Home",
    name: "Home",
    component: UserHome,
    layout: "/User",
  },
  {
    path: "/attempt",
    name: "Attempt",
    component: Attempt,
    layout: "/User"
  }
];
export default routes;
