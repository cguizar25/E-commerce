import { FC } from "react";
import s from "./Usernav.module.css";
import Link from "next/link";
import { Items as Cart, Favorite } from "@components/symbols";
import { useUI } from "@components/ui/context";

const Usernav: FC = () => {
  const ui = useUI();

  return (
    <nav>
      <ul className={s.list}>
        <li className={s.item}>
          <Cart onClick={ui.setSidebarOpen} />
        </li>
        <li className={s.item}>
          <Link href="/wishlist">
            <a>
              <Favorite />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Usernav;
