import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, textArea, ...props }, ref) {
  return (
    <p>
      <label className="block mb-1 ml-5 font-medium uppercase text-gray-700">
        {label}
      </label>
      {textArea ? (
        <textarea ref={ref} {...props} />
      ) : (
        <input ref={ref} {...props} />
      )}
    </p>
  );
});

export default Input;
