interface IconProps {
  className?: string
}

export function AutoResponseIcon({ className = "" }: IconProps) {
  return (
    <svg
      fill="#ffffff"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#ffffff"
      className={`text-[#77FF00] ${className}`}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M17 11v3l-3-3H8a2 2 0 0 1-2-2V2c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-1zm-3 2v2a2 2 0 0 1-2 2H6l-3 3v-3H2a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h2v3a4 4 0 0 0 4 4h6z"></path>
      </g>
    </svg>
  )
}

export function LeadsIcon({ className = "" }: IconProps) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-[#77FF00] ${className}`}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 21H6C4.89543 21 4 20.1046 4 19V18C4 14.6863 6.68629 12 10 12H14C17.3137 12 20 14.6863 20 18V19C20 20.1046 19.1046 21 18 21Z"
        fill="currentColor"
      />
      <path
        d="M19 8L21 10L19 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 8L3 10L5 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ConversionIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#ffffff"
      className={`text-[#77FF00] ${className}`}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M4 5V19C4 19.5523 4.44772 20 5 20H19"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
        <path
          d="M18 9L13 13.9999L10.5 11.4998L7 14.9998"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
      </g>
    </svg>
  )
}
