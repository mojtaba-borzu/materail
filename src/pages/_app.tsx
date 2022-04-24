//libraries
import "../styles/globals.css";

//redux
import store from "../redux/store";
import { Provider } from "react-redux";

export default function MyApp({ Component, pageProps }: any) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
