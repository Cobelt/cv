import { IconType } from "../../../types"

export default function GreatBritainFlag({
  size = 24,
  className,
  style,
}: IconType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      width={size}
      viewBox="0 0 300 300"
      className={className}
      style={style}
    >
      <rect width="300" height="300" fill="#00247d" />
      <path
        d="M 0,0 L 300,300 M 300,0 L 0,300"
        stroke="#fff"
        strokeWidth="60"
      />
      <path
        d="M 0,0 L 300,300 M 300,0 L 0,300"
        stroke="#cf142b"
        strokeWidth="40"
      />
      <path
        d="M 150,150 v -30 L 30,0 H 0 z h 30 L 300,30 V 0 z v 30 L 270,300 H 300 z h -30 L 0,270 V 300 z"
        fill="#fff"
      />
      <path d="M 150,0 V 300 M 0,150 H 300" stroke="#fff" strokeWidth="100" />
      <path d="M 150,0 V 300 M 0,150 H 300" stroke="#cf142b" strokeWidth="60" />
    </svg>
  )
}
