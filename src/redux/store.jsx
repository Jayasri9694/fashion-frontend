import { createStore } from "redux";
import cartReducer from "./reducers.jsx"; // Ensure the correct path

const store = createStore(cartReducer);

export default store;
