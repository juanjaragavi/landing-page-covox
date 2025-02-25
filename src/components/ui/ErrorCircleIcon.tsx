import React from "react"

interface ErrorCircleIconProps {
  className?: string
  size?: number
}

const ErrorCircleIcon: React.FC<ErrorCircleIconProps> = ({
  className,
  size = 24,
}) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M32 0C14.327 0 0 14.327 0 32C0 49.673 14.327 64 32 64C49.673 64 64 49.673 64 32C64 14.327 49.673 0 32 0ZM32 58C17.64 58 6 46.36 6 32C6 17.64 17.64 6 32 6C46.36 6 58 17.64 58 32C58 46.36 46.36 58 32 58ZM44.5 19.5L32 32L44.5 44.5L41 48L28.5 35.5L16 48L12.5 44.5L25 32L12.5 19.5L16 16L28.5 28.5L41 16L44.5 19.5Z" />
    </svg>
  )
}

export default ErrorCircleIcon
