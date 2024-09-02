import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import { CartContextProvider } from "../src/components/hooks/useCart";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Component {...pageProps} />;
    </CartContextProvider>
  );
}
