import "@ai/styles/globals.css";
import type { AppProps } from "next/app";
import Transition from "@ai/components/Transition/Transition";
import Cover from "@ai/components/Cover/Cover";
import FooterLayout from "@ai/layout/footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Transition />
      <Cover />
      <FooterLayout />
    </>
  );
}
