import { ChangeEvent } from "react";
import { IoSearchSharp } from "react-icons/io5";

type SearchBarProps = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar = ({ value, onChange }: SearchBarProps) => (
  <div className="flex relative gap-2">
    <IoSearchSharp
      size={22}
      color="#aaa"
      className="absolute left-2 top-1 duration-300 opacity-70 hover:opacity-100 cursor-pointer"
    />
    <input
      className="w-full ring-gray-900	ring-1 ring-inset focus:ring-indigo-600 pl-8 pr-5 py-1 rounded-full"
      type="text"
      placeholder="Rechercher dans le tableau"
      value={value}
      onChange={onChange}
    />
  </div>
);

export default SearchBar;
