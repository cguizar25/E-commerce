import { FC } from "react";
import s from "./Usernav.module.css";
import Link from "next/link";
import { Items as Cart, Favorite } from "@components/symbols";
import { useUI } from "@components/ui/context";
import useCart from "@framework/cart/use-cart"
import { LineItem } from "@common/types/cart"

const Usernav: FC = () => {
  const { openSidebar } = useUI();
  const { data } = useCart();

  const itemsCount = data?.lineItems.reduce((count: number, item: LineItem) => {
    return count + item.quantity
  }, 0) ?? 0

  return (
    <nav>
      <ul className={s.list}>
        <li className={s.item}>
          <Cart onClick={openSidebar} />
          { itemsCount > 0 &&
            <span className={s.bagCount}>
              { itemsCount }
            </span>
          }
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
