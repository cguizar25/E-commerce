import { FC } from "react";
import s from "./Usernav.module.css";
import Link from "next/link";
import { Items as Cart, Favorite } from "@components/symbols";

const Usernav: FC = () => {

  return (
    <nav>
      <ul className={s.list}>
        <li className={s.item}>
          <Cart />
        </li>
        <li className={s.item}>
          <Link href="/">
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
