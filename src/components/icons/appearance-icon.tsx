export default function AppearanceIcon({ color }: { color: string }) {
  return (
    <svg
      style={{ paddingTop: "4px" }}
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden="false"
      aria-labelledby="ltclid1_title "
    >
      <title id="ltclid1_title">Appearance</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.008 1a5.009 5.009 0 1 0 0 10.018v1A6.009 6.009 0 1 1 6.008 0v1Zm5.01 5.009A5.009 5.009 0 0 0 6.008 1V0a6.009 6.009 0 0 1 6.01 6.009h-1Zm-4.01.5-.5.5V15.5l.5.5H15.5l.5-.5V7.008l-.5-.5H7.007Zm.5 8.492V7.508H15v7.493H7.507Z"
        fill={color}
      ></path>
    </svg>
  );
}
