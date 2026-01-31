"use client";

export default function Sun() {
  return (
    <div className="relative w-full h-64 flex items-center justify-center overflow-hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 600 600"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-full"
      >
        <defs>
          <filter
            id="filter_sunBlur"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
          </filter>
        </defs>

        {/* ☀️ SOLEIL */}
        <g id="sun" transform="translate(300 300)">
          {/* HALO */}
          <circle
            r="180"
            fill="rgba(255,206,44,0.6)"
            filter="url(#filter_sunBlur)"
          />

          {/* GROUPE ORANGE (IMPORTANT) */}
          <g id="sun-bg">
            <path
              fill="#ff952c"
              d="M500.7-59.8c-14.1-12-34.2-8.5-50.8-12.7s-29.8-14.2-41.7-27c-25-27.3-47.1-70.1-89.9-42.5-16.4,10.5-28,27-44.5,37.8s-33.1,16-51.1,21.8c-16.3,5.3-37.7,11.1-46.8,27.3-10.6,18.8,3.3,37.2,4.6,56.3,2.6,37.5-37.9,65.9-30.2,103.8,7,34.4,59.2,37.6,81.2,60.2,27,27.7,37.4,66.5,83.7,48.7,16.8-6.4,30.7-18.7,47.8-24.4,23.1-7.8,47.2-3.8,71-6.2,54.8-5.4,45.5-63.3,52.2-104.4,4.2-25.9,11.7-50.4,19.7-75.4C512.4-16.4,519.4-43.7,500.7-59.8Z"
              transform="translate(-332 -32)"
            />
          </g>

          {/* COUCHES INTERNES */}
          <circle r="135" fill="#ffcb4a" />
          <circle r="90" fill="#ffe6a6" />
          <circle r="45" fill="#ffeec2" />
        </g>

        {/* 🎞️ ANIMATION — SUR LE GROUPE */}
        <animateTransform
          href="#sun-bg"
          attributeName="transform"
          type="rotate"
          from="0"
          to="360"
          dur="18s"
          repeatCount="indefinite"
        />
      </svg>
    </div>
  );
}
