import type { RefObject } from "react";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  inputRef: RefObject<HTMLInputElement | null>;
}

export function SearchInput({value,onChange,inputRef,}: SearchInputProps) {
  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="Search users..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}