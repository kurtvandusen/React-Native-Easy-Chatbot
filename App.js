import { Provider } from "react-redux";

import { store } from "./app/store";
import Main from "./app/views/Main";

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
