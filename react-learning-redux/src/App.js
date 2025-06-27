import Counter from "./components/Counter";
import { Provider, useSelector } from "react-redux";
import store from "./store";
import Header from "./components/Header";
import { Fragment } from "react";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

function AppContent() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;
