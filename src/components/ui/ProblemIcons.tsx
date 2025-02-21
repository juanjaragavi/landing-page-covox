interface IconProps {
  className?: string
}

export function MissedCallsIcon({ className = "" }: IconProps) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-red-500 ${className}`}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 5C16.6569 5 18 6.34315 18 8V16C18 17.6569 16.6569 19 15 19H9C7.34315 19 6 17.6569 6 16V8C6 6.34315 7.34315 5 9 5H15ZM11.7071 8.29289L13.7071 10.2929L13 11L11 9L9 11L8.29289 10.2929L10.2929 8.29289L11 9L11.7071 8.29289ZM11.7071 13.2929L13.7071 15.2929L13 16L11 14L9 16L8.29289 15.2929L10.2929 13.2929L11 14L11.7071 13.2929Z"
        fill="currentColor"
      />
      <path
        d="M19.5 4.5L4.5 19.5"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function LeadTimeIcon({ className = "" }: IconProps) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-red-500 ${className}`}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8V12C11 12.2652 11.1054 12.5196 11.2929 12.7071L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L13 11.5858V8Z"
        fill="currentColor"
      />
      <path
        d="M20 4L22 2M2 22L4 20"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M20.5 12H19.5M4.5 12H3.5"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function HighCostsIcon({ className = "" }: IconProps) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-red-500 ${className}`}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2L2 7L12 12L22 7L12 2ZM12 14L2 9L12 14L22 9L12 14ZM12 19L2 14L12 19L22 14L12 19Z"
        fill="currentColor"
      />
      <path
        d="M20 2L22 4M20 4L22 2"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M11 5H13M12 4V6"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}
