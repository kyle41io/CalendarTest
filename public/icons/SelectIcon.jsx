import * as React from "react"
const SelectIcon = ({className, ...rest}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1}
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m8 9 4-4 4 4M16 15l-4 4-4-4" />
  </svg>
)
export default SelectIcon
