export default function Input({ label, textArea, ...props }) {
  return (
    <p>
      <label className="block mb-1 ml-5 font-medium uppercase text-gray-700">
        {label}
      </label>
      {textArea ? <textarea {...props} /> : <input {...props} />}
    </p>
  );
}
