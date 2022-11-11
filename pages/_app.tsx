import "../styles/globals.css";
import type { AppProps } from "next/app";
import AppProvider from "@/components/app-context";

export default function App({ Component, pageProps }: AppProps) {
  //extract global data from page props to assign to app context
  const { global, ...componentProps } = pageProps

  return (
    <AppProvider value={global}>
      <Component {...componentProps} />
    </AppProvider>
  );
}
