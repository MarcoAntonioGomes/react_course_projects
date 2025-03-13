export default function Button({ label, icon, css, click, btnAlign }) {
  return (
    <div className={btnAlign}>
      <button onClick={click} className={`${css}`}>
        <span>{icon}</span>
        <span>{label}</span>
      </button>
    </div>
  );
}
