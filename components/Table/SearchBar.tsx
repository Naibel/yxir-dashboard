import { ChangeEvent } from "react";
import { IoSearchSharp } from "react-icons/io5";

type SearchBarProps = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar = ({ value, onChange }: SearchBarProps) => (
  <div className="flex gap-2 border-2 rounded-full pl-2 pr-5 py-1">
    <IoSearchSharp
      size={24}
      color="#aaa"
      className="duration-300 opacity-70 hover:opacity-100 cursor-pointer"
    />
    <input
      className="bg-grey "
      type="text"
      placeholder="Rechercher dans le tableau"
      value={value}
      onChange={onChange}
    />
  </div>
);

export default SearchBar;
