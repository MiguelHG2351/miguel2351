export default function FirebaseLogo(props = { width: 36, height: 48 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36 48"
      fill="none"
      {...props}
    >
      <path
        d="M0 38.7l.29-.406 13.73-26.053.03-.276L7.997.595c-.507-.951-1.935-.71-2.101.356L0 38.7z"
        fill="#FFC24A"
      />
      <path
        d="M.171 38.39l.22-.428 13.587-25.78L7.94.767C7.438-.175 6.164.065 6 1.12L.17 38.39z"
        fill="#FFA712"
      />
      <g filter="url(#filter0_i_37_58)">
        <path
          d="M.171 38.39l.22-.428 13.587-25.78L7.94.767C7.438-.175 6.164.065 6 1.12L.17 38.39z"
          fill="#FFA712"
        />
      </g>
      <path
        d="M18.462 20.565l4.507-4.616-4.508-8.605c-.428-.815-1.623-.818-2.046 0l-2.409 4.593v.39l4.456 8.238z"
        fill="#F4BD62"
      />
      <path
        d="M18.382 20.372l4.381-4.487-4.381-8.342c-.416-.792-1.427-.875-1.838-.081l-2.422 4.664-.072.239 4.332 8.007z"
        fill="#FFA50E"
      />
      <g filter="url(#filter1_i_37_58)">
        <path
          d="M18.382 20.372l4.381-4.487-4.381-8.342c-.416-.792-1.427-.875-1.838-.081l-2.422 4.664-.072.239 4.332 8.007z"
          fill="#FFA50E"
        />
      </g>
      <path
        d="M0 38.7l.132-.132.478-.194L18.18 20.87l.222-.606-4.383-8.352L0 38.7z"
        fill="#F6820C"
      />
      <path
        d="M19.025 47.528l15.9-8.868-4.54-27.965a1.087 1.087 0 00-1.841-.593L0 38.7l15.81 8.827a3.3 3.3 0 003.215 0z"
        fill="#FDE068"
      />
      <path
        d="M34.783 38.586l-4.506-27.753c-.14-.868-1.033-1.227-1.655-.605L.176 38.646l15.636 8.74a3.274 3.274 0 003.191 0l15.78-8.8z"
        fill="#FCCA3F"
      />
      <path
        d="M19.025 47.267a3.298 3.298 0 01-3.215 0l-15.683-8.7L0 38.7l15.81 8.827a3.299 3.299 0 003.215 0l15.9-8.868-.038-.24-15.862 8.847z"
        fill="#EEAB37"
      />
      <defs>
        <filter
          id="filter0_i_37_58"
          x={0.171387}
          y={0.177979}
          width={13.8063}
          height={38.2127}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={17.5} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
          <feBlend in2="shape" result="effect1_innerShadow_37_58" />
        </filter>
        <filter
          id="filter1_i_37_58"
          x={14.0498}
          y={-0.0941772}
          width={9.71338}
          height={20.4667}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx={1} dy={-9} />
          <feGaussianBlur stdDeviation={3.5} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0" />
          <feBlend in2="shape" result="effect1_innerShadow_37_58" />
        </filter>
      </defs>
    </svg>
  )
}
