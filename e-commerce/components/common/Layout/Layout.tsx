
import { FC } from "react";
import s from "./Layout.module.css";
import { Footer, Navbar } from "@components/common";
import { CartSidebar } from "@components/cart";
import { useUI } from "@components/ui/context";


const Layout: FC = ({c}) => {
  const ui = useUI();
  return (
    <div className={s.root}>
      <Navbar />
      <Sidebar isOpen={ui.isSideBarOpen}>
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
