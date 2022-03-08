import AddFilm from "../../pages/AddFilm/AddFilm";
import AddFilmHook from "../../pages/AddFilmHook/AddFilmHook";
import Home from "../../pages/Home/Home";
import SignIn from "../../pages/Login/Login";
import AddFilmAd from "../../pages/test";
import DefaultTemplate from "../../templates/DefaultTemplate/DefaultTemplate";
import EmptyTemplate from "../../templates/EmptyTemplate/EmptyTemplate";

const IndexRoutes = [
  {
    path: "/home",
    exact: true,
    element: Home,
    isPrivate: false,
    authenticateRedirect: false,
    template: DefaultTemplate,
  },

  {
    path: "/login",
    exact: true,
    element: SignIn,
    isPrivate: false,
    authenticateRedirect: false,
    template: EmptyTemplate,
  },

  {
    path: "/addFilm",
    exact: true,
    element: AddFilm,
    isPrivate: true,
    authenticateRedirect: false,
    template: EmptyTemplate,
  },

  {
    path: "/addFilmAd",
    exact: true,
    element: AddFilmAd,
    isPrivate: true,
    authenticateRedirect: false,
    template: EmptyTemplate,
  },

  {
    path: "/add",
    exact: true,
    element: AddFilmHook,
    isPrivate: false,
    authenticateRedirect: false,
    template: EmptyTemplate,
  },
];

export default IndexRoutes;
