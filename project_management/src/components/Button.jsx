export default function Button({ label, icon, css, click }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <button onClick={click} className={`${css}`}>
        <span>{icon}</span>
        <span>{label}</span>
      </button>
    </div>
  );
}
