export default function TechIllustration({ className = "" }) {
  return (
    <svg
      viewBox="0 0 480 420"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Abstract illustration of connected cloud, network and security nodes"
    >
      <circle cx="240" cy="210" r="150" fill="#0B1E3D" fillOpacity="0.04" />
      <circle cx="240" cy="210" r="105" stroke="#D7DEE6" strokeWidth="1" />

      <g stroke="#0F6E62" strokeWidth="1.5" strokeOpacity="0.55">
        <line x1="240" y1="210" x2="120" y2="120" />
        <line x1="240" y1="210" x2="360" y2="120" />
        <line x1="240" y1="210" x2="105" y2="260" />
        <line x1="240" y1="210" x2="370" y2="270" />
        <line x1="240" y1="210" x2="240" y2="80" />
        <line x1="240" y1="210" x2="240" y2="340" />
      </g>

      <g>
        <circle cx="240" cy="210" r="34" fill="#0B1E3D" />
        <path
          d="M225 214a11 11 0 0 1 3-21.6 15 15 0 0 1 28.7-4A12 12 0 0 1 256 212"
          stroke="#F2F5F8"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      <g>
        <circle cx="120" cy="120" r="22" fill="#0F6E62" />
        <path
          d="M111 123a6.5 6.5 0 0 1 1.7-12.8 8.7 8.7 0 0 1 16.6-2.3 7 7 0 0 1 -1.3 15.1"
          stroke="#F2F5F8"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      <g>
        <rect x="343" y="102" width="34" height="34" rx="8" fill="#0B1E3D" />
        <path
          d="M352 128l7-18 7 18M355 122h8"
          stroke="#F2F5F8"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      <g>
        <rect x="85" y="242" width="36" height="36" rx="8" fill="#0F6E62" />
        <path
          d="M103 253l-11 8 11 8M111 253l11 8-11 8"
          stroke="#F2F5F8"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      <g>
        <circle cx="370" cy="270" r="24" fill="#0B1E3D" />
        <path
          d="M370 258l11 4v9c0 7-4.6 11-11 14-6.4-3-11-7-11-14v-9l11-4z"
          stroke="#F2F5F8"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      <g>
        <circle cx="240" cy="80" r="16" fill="#0F6E62" fillOpacity="0.85" />
      </g>
      <g>
        <circle cx="240" cy="340" r="16" fill="#0B1E3D" fillOpacity="0.85" />
      </g>
    </svg>
  );
}
