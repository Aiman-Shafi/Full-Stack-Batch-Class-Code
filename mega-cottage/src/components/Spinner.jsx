import React from "react";

export default function Spinner() {
  return (
    <>
      {/*<!-- Component: Basic xl sized 1/4 spinner --> */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-live="polite"
        aria-busy="true"
        aria-labelledby="title-04b desc-04b"
        className="animate h-10 w-10 animate-spin"
      >
        <title id="title-04b">Icon title</title>
        <desc id="desc-04b">Some desc</desc>
        <circle
          cx="12"
          cy="12"
          r="10"
          className="stroke-slate-200"
          strokeWidth="4"
        />
        <path
          d="M22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2"
          className="stroke-green-500"
          strokeWidth="4"
        />
      </svg>
      {/*<!-- End Basic xl sized 1/4 spinner --> */}
    </>
  );
}
