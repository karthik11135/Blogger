"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      You should not have landed here. 
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
}
