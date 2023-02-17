export default function NextjsLogo(props = { width: 512, height: 104 }) {
  return (
    <svg
      fill="none"
      viewBox="0 0 180 180"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g mask="url(#mask0_292_290)">
        <circle cx={90} cy={90} fill="#000" r={87} strokeWidth={6} />
        <path
          d="M149.508 157.52L69.142 54H54v71.97h12.114V69.384l73.885 95.461a90.304 90.304 0 009.509-7.325z"
          fill="url(#paint0_linear_292_290)"
        />
        <path fill="url(#paint1_linear_292_290)" d="M115 54H127V126H115z" />
      </g>
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_292_290"
          x1={109}
          x2={144.5}
          y1={116.5}
          y2={160.5}
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint1_linear_292_290"
          x1={121}
          x2={120.799}
          y1={54}
          y2={106.875}
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  )
}
