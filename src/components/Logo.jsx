export default function Logo({ className, color }) {
  return (
    <svg
      alt="The Bermuda Events Triangular Company Logo"
      className={`${className}`}
      width="65"
      height="56"
      viewBox="0 0 65 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32.0304 22.5783C27.8431 15.3233 28.2393 6.67563 32.3306 0L51.7331 33.6063C43.9079 33.8134 36.2207 29.8332 32.0304 22.5783Z"
        className={`${color ? "fill-brown" : "fill-white"}`}
      />
      <path
        d="M19.7027 44.9616C15.5154 52.2195 7.82826 56.1967 0 55.9926L19.4026 22.3833C23.4938 29.0589 23.893 37.7066 19.7027 44.9616Z"
        className={`${color ? "fill-brownlight" : "fill-white"}`}
      />
      <path
        d="M45.2586 44.4512C53.6392 44.4512 60.9272 49.1187 64.6612 55.9985H25.8561C29.5931 49.1187 36.8811 44.4512 45.2586 44.4512Z"
        className={`${color ? "fill-browndark" : "fill-white"}`}
      />
    </svg>
  );
}
