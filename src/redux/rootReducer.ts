import { combineReducers } from "redux";
import addFilmReducer from "./reducers/addFilmReducer";
import loginReducer from "./reducers/loginReducer";
import movieReducer from "./reducers/movieReducer";

const rootReducer = combineReducers({
  // declare reducer
  movieReducer,
  loginReducer,
  addFilmReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
