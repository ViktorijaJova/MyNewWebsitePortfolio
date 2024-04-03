import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MyThemeContextProvider } from "../layout/store/store";


type AppPropsWithAuth = AppProps & {
  Component: {
    requireAuth?: boolean;
  };
};
interface ScrollPositions {
  [url: string]: number;
}

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithAuth) {
  return (
    <MyThemeContextProvider>
      <Component {...pageProps} />
    </MyThemeContextProvider>
  );
}
