import { Provider } from "react-redux";

import { ErrorBoundary } from "./app/screens/ErrorScreen/ErrorBoundary";
import Main from "./app/screens/Main";
import { store } from "./app/store";

export default function App() {
  return (
    <Provider store={store}>
      <ErrorBoundary catchErrors="always">
        <Main />
      </ErrorBoundary>
    </Provider>
  );
}
