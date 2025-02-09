"use client"; // Error components must be Client components

import { useEffect } from "react";

const Error = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  useEffect(() => {
    // Log the error to an error reporting service
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        type="button"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
};

export { Error, Error as default };
