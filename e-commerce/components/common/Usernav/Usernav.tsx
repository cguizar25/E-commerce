import { FC } from "react";
import s from "./Usernav.module.css";
import Link from "next/link";
import { Items as Cart, Favorite } from "@components/symbols";
import { useUI } from "@components/ui/context";
import useCart from "@common/cart/use-cart";

const Usernav: FC = () => {
  const { openSidebar } = useUI();
  const { data } = useCart();
  debugger;

  return (
    <nav>
      <ul className={s.list}>
        <li className={s.item}>
          <Cart onClick={openSidebar} />
        </li>
        <li className={s.item}>
          <Link legacyBehavior href="/wishlist">
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
