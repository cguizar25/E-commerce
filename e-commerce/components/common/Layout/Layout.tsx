
import { FC } from "react";
import s from "./Layout.module.css";
import { Footer, Navbar } from "@components/common";
import { CartSidebar } from "@components/cart";
import { useUI } from "@components/ui/context";


const Layout: FC = ({c}) => {
  const { isSidebarOpen, closeSidebar } = useUI();
  console.log("Re-rendering LAYOUT");
  return (
    <div className={s.root}>
      <Navbar />
      <Sidebar isOpen={ui.isSideBarOpen} onClose={closeSidebar}>
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
