import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
import { persistStore } from "redux-persist";

export const store = createStore(
  rootReducer,
  window.devToolsExtension && window.devToolsExtension()
);

export const persistor = persistStore(store);
