
import { FC } from "react";
import s from "./Layout.module.css";
import { Footer, Navbar } from "@components/common";
import { CartSidebar } from "@components/cart";


const Layout: FC = ({c}) => {
  return (
    <div className={s.root}>
      <Navbar />
      <Sidebar>
        <CartSidebar />
      </Sidebar>
        <main className="fit">
          {c}
        </main>
        <Footer />
    </div>
  )
}

export default Layout;
