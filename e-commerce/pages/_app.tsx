import { AppProps } from "next/app";
import { FC } from "react"

const MyApp = ({Component, pageProps}: AppProps & {Component: {Layout: FC}}) => {
  const Layout = Component.Layout

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
