interface ToggleProps {
  checked: boolean;
  onChange: () => void;
}

export default function Toggle({
  checked,
  onChange,
}: ToggleProps) {
  return (
    <button
      type="button"
      onClick={onChange}
      className={`relative w-14 h-8 rounded-full transition ${
        checked ? "bg-green-500" : "bg-gray-400"
      }`}
    >
      <span
        className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
          checked ? "translate-x-6" : ""
        }`}
      />
    </button>
  );
}