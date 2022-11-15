import "@assets/main.css";
import { AppProps } from "next/app";
import { FC } from "react";

const Noop: FC = ({children}) => <>{children}</>;


const MyApp = ({Component, pageProps}: AppProps & {Component: {Layout: FC}}) => {
  const Layout = Component.Layout ?? Noop

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp;
