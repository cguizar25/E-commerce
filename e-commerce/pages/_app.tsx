import "@assets/main.css";
import { AppProps } from "next/app";
import { FC } from "react";
import { UIProvider } from "@components/ui/context";

const Noop: FC = (children) => <>{children}</>;


function MyApp({Component, pageProps}: any & {Component: {Layout: FC}}) {
  const Layout = Component.Layout ?? Noop
  
  return (
    <UIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UIProvider>
  )
}

export default MyApp;
