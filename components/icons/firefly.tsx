export function FireflyIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Firefly body */}
      <ellipse cx="12" cy="14" rx="3" ry="4" fill="#FFD84D" />
      {/* Firefly glow */}
      <circle cx="12" cy="12" r="2" fill="#FFD84D" opacity="0.8">
        <animate
          attributeName="opacity"
          values="0.8;1;0.8"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
      {/* Firefly wings */}
      <path
        d="M9 10 L12 8 L15 10"
        stroke="#FFD84D"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M9 12 L12 10 L15 12"
        stroke="#FFD84D"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.4"
      />
    </svg>
  );
}

