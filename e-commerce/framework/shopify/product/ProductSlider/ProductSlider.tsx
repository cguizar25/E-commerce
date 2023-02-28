import { FC, Children, isValidElement } from "react";
import s from "./ProductSlider.module.css";

const ProductSlider: FC = ({children}) => {

  return (
    <div className={s.root}>
      <div className="keen-slider h-full transition-opacity">
        { Children.map(children, child => {
          if (isValidElement(child)) {

            return React.cloneElement(child, {className: "keen-slider__slide"})
          }

          return child
        }
        )}
      </div>
    </div>
  )
}

export default ProductSlider;