import { useState, useCallback, useRef, useEffect } from "react";
export interface SearchBarProps {
  onSearch: (search: string) => void;
  onReset: () => void;
  searchTerms: string;
  maxLength?: number;
  placeholder?: string;
}

function SearchBar({ 
  placeholder,
  onSearch,
  onReset,
  searchTerms,
  maxLength = 40
}: SearchBarProps) {

  const [inputValue, setInputValue] = useState(searchTerms);
  const inputRef = useRef(null);

  useEffect(() => {
    setInputValue(searchTerms);
  }, [searchTerms]);

  const handleSearch = useCallback(() => {
    onSearch(inputValue);
  }, [inputValue, onSearch]);

  const handleOnChange = useCallback((e: any) => {
    setInputValue(e.target.value);
    
  }, []);

  const handleOnKeyDown = useCallback((e: any) => {
    if (e.key === "Enter") {
      onSearch(inputValue);
    }
    else if (e.key === "Escape") {
      setInputValue("");
      handleOnReset();
    }
  }, [inputValue, onSearch, onReset]);

  const handleOnReset = useCallback(() => {
    setInputValue("");
    onReset();
    // inputRef.current.focus();
  }, []);

  
  return (
    <form className="w-full" onSubmit={e => { e.preventDefault(); }}>
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          className="w-full py-3 pl-12 pr-4 text-gray-500 rounded-lg outline-none bg-gray-50"
          type="text"
          ref={inputRef}
          value={inputValue}
          onChange={handleOnChange}
          maxLength={maxLength}
          onKeyDown={handleOnKeyDown}
          placeholder={placeholder}
        />
      </div>
    </form>
  );
}

export default SearchBar;

