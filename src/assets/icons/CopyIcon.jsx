function CopyIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 18 20"
      {...props}
    >
      <g clipPath="url(#clip0_15_57)">
        <path
          fill="#000"
          // transform="translate(-5, 5)"
          d="M15.429 13.125H7.714a.636.636 0 01-.643-.625v-10c0-.344.29-.625.643-.625h5.63l2.727 2.652V12.5c0 .344-.289.625-.642.625zM7.714 15h7.715C16.847 15 18 13.879 18 12.5V4.527a1.85 1.85 0 00-.567-1.324L14.71.551A1.957 1.957 0 0013.347 0H7.714C6.296 0 5.143 1.121 5.143 2.5v10c0 1.379 1.153 2.5 2.571 2.5z"
        ></path>
        <path fill="#0000FF"
        d="M2.571 5C1.153 5 0 6.121 0 7.5v10C0 18.879 1.153 20 2.571 20h7.715c1.418 0 2.571-1.121 2.571-2.5v-1.25H10.93v1.25c0 .344-.29.625-.643.625H2.57a.636.636 0 01-.642-.625v-10c0-.344.289-.625.642-.625h1.286V5H2.571z"></path>
      </g>
      <defs>
        <clipPath id="clip0_15_57">
          <path fill="#fff" d="M0 0H18V20H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default CopyIcon;
