export default function Bubble() {
  return (
    <>
      <svg
        xmlns="http://w3.org/2000/svg"
        width="43"
        height="43"
        viewBox="0 0 43 43"
        fill="none"
        className="bubble-draw"
      >
        <rect
          x={4}
          y={24}
          width={24}
          height={24}
          transform="rotate(-45 4 21.5)"
          stroke="#0099ff"
          strokeWidth={4.9}
        />
      </svg>
      <style jsx>
        {`
          .bubble-draw {
            position: absolute;
            top: 20px;
            left: 50px;
            z-index: -1;
            transition: transform 0.2s ease;
            animation-name: jump-bubble;
            animation-duration: 2s;
            animation-iteration-count: infinite;
            animation-fill-mode: both;
            opacity: 0.9;
          }
          @keyframes jump-bubble {
            0% {
              transform: translate(1.5px, 1.5px);
            }

            25% {
              opacity: 0.6;
              transform: translate(-1.5px, 1.5px);
            }

            50% {
              transform: translate(-1.5px, 1.5px);
            }

            75% {
              transform: translate(-1.5px, 1.5px);
              opacity: 0.9;
            }

            100% {
              transform: translate(1.5px, 1.5px);
              opacity: 1;
            }
          }
        `}
      </style>
    </>
  );
}
