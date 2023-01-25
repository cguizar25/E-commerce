
import { FC } from "react";
import s from "./Layout.module.css";
import { Footer, Navbar } from "@components/common";


const Layout: FC = ({c}) => {
  return (
    <div className={s.root}>
      <Navbar />
        <main className="fit">
          {c}
        </main>
        <Footer />
    </div>
  )
}

export default Layout;
