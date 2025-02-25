interface IconProps {
  className?: string
}

export function InfoAlertIcon({ className = "" }: IconProps) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 16 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-red-500 ${className}`}
    >
      <path
        d="M7.493 0.015C7.442 0.021 7.268 0.039 7.107 0.055C5.234 0.242 3.347 1.208 2.071 2.634C0.660 4.211 -0.057 6.168 0.009 8.253C0.124 11.854 2.599 14.903 6.110 15.771C8.169 16.280 10.433 15.917 12.227 14.791C14.017 13.666 15.270 11.933 15.771 9.887C15.943 9.186 15.983 8.829 15.983 8.000C15.983 7.171 15.943 6.814 15.771 6.113C14.979 2.878 12.315 0.498 9.000 0.064C8.716 0.027 7.683 -0.006 7.493 0.015M8.853 1.563C9.967 1.707 11.010 2.136 11.944 2.834C12.273 3.080 12.920 3.727 13.166 4.056C13.727 4.807 14.142 5.690 14.330 6.535C14.544 7.500 14.544 8.500 14.330 9.465C13.916 11.326 12.605 12.978 10.867 13.828C10.239 14.135 9.591 14.336 8.880 14.444C8.456 14.509 7.544 14.509 7.120 14.444C5.172 14.148 3.528 13.085 2.493 11.451C2.279 11.114 1.999 10.526 1.859 10.119C1.618 9.422 1.514 8.781 1.514 8.000C1.514 6.961 1.715 6.075 2.160 5.160C2.500 4.462 2.846 3.980 3.413 3.413C3.980 2.846 4.462 2.500 5.160 2.160C6.313 1.599 7.567 1.397 8.853 1.563M7.706 4.290C7.482 4.363 7.355 4.491 7.293 4.705C7.257 4.827 7.253 5.106 7.259 6.816C7.267 8.786 7.267 8.787 7.325 8.896C7.398 9.033 7.538 9.157 7.671 9.204C7.803 9.250 8.197 9.250 8.329 9.204C8.462 9.157 8.602 9.033 8.675 8.896C8.733 8.787 8.733 8.786 8.741 6.816C8.749 4.664 8.749 4.662 8.596 4.481C8.472 4.333 8.339 4.284 8.040 4.276C7.893 4.272 7.743 4.278 7.706 4.290M7.786 10.530C7.597 10.592 7.410 10.753 7.319 10.932C7.249 11.072 7.237 11.325 7.294 11.495C7.388 11.780 7.697 12.000 8.000 12.000C8.303 12.000 8.612 11.780 8.706 11.495C8.763 11.325 8.751 11.072 8.681 10.932C8.616 10.804 8.460 10.646 8.333 10.580C8.217 10.520 7.904 10.491 7.786 10.530"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
}

export function MissedCallsIcon({ className = "" }: IconProps) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 52 52"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-red-500 ${className}`}
    >
      <path
        d="M34.7,40.3c0.7,0,1.2,0.5,1.4,1.1l0.8,5.4c0.2,1.5,1.4,2.6,2.9,2.8l6.5,0.7c2,0.2,3.7-1.3,3.7-3.3v-6.2 c0-1-0.4-1.8-1.1-2.5c-6.4-5.8-14.9-8.8-23-8.8s-16.6,3-23,8.8C2.3,38.9,2,39.9,2,40.8V47c-0.2,2,1.5,3.6,3.5,3.3l6.5-0.7 c1.5-0.2,2.7-1.3,2.9-2.8l0.8-5.4c0.1-0.7,0.7-1.1,1.4-1.1C17.1,40.3,25.5,39.6,34.7,40.3z"
        fill="currentColor"
      />
      <path
        d="M39.7,12.6c0.5-0.5,1.4-0.1,1.4,0.6v6.7c0,0.7,0.5,1.2,1.2,1.2l2.5,0c0.7,0,1.2-0.5,1.2-1.2 c0,0,0.1-16.1,0.1-16.1c0-0.7-0.5-1.2-1.2-1.2H28.9c-0.7,0-1.2,0.5-1.2,1.2v2.5c0,0.7,0.5,1.2,1.2,1.2h6.7c0.7,0,1.1,0.9,0.6,1.4 l-9.4,9.4c-0.3,0.3-0.9,0.3-1.3,0L10.1,3C9.6,2.5,8.8,2.5,8.3,3L6.4,4.8c-0.5,0.5-0.5,1.3,0,1.9l18.8,18.9c0.5,0.6,1.3,0.6,1.9,0 L39.7,12.6z"
        fill="currentColor"
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
      viewBox="-1.7 0 20.4 20.4"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-red-500 ${className}`}
    >
      <path d="M16.417 10.283A7.917 7.917 0 1 1 8.5 2.366a7.916 7.916 0 0 1 7.917 7.917zm-4.844 1.754a2.249 2.249 0 0 0-.556-1.477l-.001-.002a3.02 3.02 0 0 0-.835-.665l-.003-.002a3.498 3.498 0 0 0-.866-.313H9.31a3.78 3.78 0 0 0-.795-.083 2.849 2.849 0 0 1-.475-.037 1.8 1.8 0 0 1-.494-.158l-.002-.001a1.17 1.17 0 0 1-.371-.298L7.172 9a.733.733 0 0 1-.175-.44.749.749 0 0 1 .421-.63 2.157 2.157 0 0 1 1.11-.297 2.283 2.283 0 0 1 .391.066l.049.01a2.479 2.479 0 0 1 .473.166 1.33 1.33 0 0 1 .381.261.792.792 0 1 0 1.118-1.12 2.902 2.902 0 0 0-.85-.585 3.996 3.996 0 0 0-.785-.268h-.001l-.008-.002v-.786a.792.792 0 1 0-1.583 0v.763a3.557 3.557 0 0 0-1.14.454 2.328 2.328 0 0 0-1.159 1.967 2.296 2.296 0 0 0 .529 1.44 2.724 2.724 0 0 0 .894.717 3.342 3.342 0 0 0 .942.305 4.398 4.398 0 0 0 .736.059 2.202 2.202 0 0 1 .46.046 1.927 1.927 0 0 1 .467.168 1.431 1.431 0 0 1 .382.308.674.674 0 0 1 .165.436c0 .097 0 .324-.385.573a2.182 2.182 0 0 1-1.132.314 3.515 3.515 0 0 1-.494-.06 2.381 2.381 0 0 1-.459-.148h-.001a.953.953 0 0 1-.356-.274.792.792 0 1 0-1.197 1.037 2.516 2.516 0 0 0 .967.708 3.799 3.799 0 0 0 .774.237h.007v.783a.792.792 0 1 0 1.583 0v-.79a3.581 3.581 0 0 0 1.17-.479 2.215 2.215 0 0 0 1.107-1.9z"></path>
    </svg>
  )
}
