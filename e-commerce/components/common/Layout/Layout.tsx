
import { FC } from "react";
import s from "./Layout.module.css";
import { Footer } from "@components/common";


const Layout: FC = ({c}) => {
  return (
    <div className={s.root}>
        <main className="fit">
          {c}
        </main>
        <Footer />
    </div>
  )
}

export default Layout;
