import React from "react"

interface CheckCircleIconProps {
  className?: string
  stroke?: string
  size?: number
}

const CheckCircleIcon: React.FC<CheckCircleIconProps> = ({
  className,
  stroke = "#77FF00",
  size = 24,
}) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke={stroke}
          strokeWidth="1.5"
        ></circle>
        <path
          d="M8.5 12.5L10.5 14.5L15.5 9.5"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
    </svg>
  )
}

export default CheckCircleIcon
