import { FC } from "react";
import s from"./Swatch.module.css";
import { Mark } from "@components/symbols";
import cn from "classnames";
import { isDark } from "@lib/color"

interface Props {
  size?: "sm" | "md" | "lg"
  color?: string
  label?: string
  active?: boolean
  variant?: "size" | "color" | string
  onClick: () => void
}


const Swatch: FC<Props> = ({
  color, label, variant, active,
  size="md",
  ...rest
}) => {
  
  label = label?.toLowerCase()
  variant = variant?.toLocaleLowerCase()
  const rootClassName = cn(
    s.root,
    {
      [s.active]: active,
      [s.color]: color,
      [s.size]: variant === "size",
      [s.dark]: color && isDark(color),
      [s.sm]: size === "sm"
    }
  )


export default Swatch;