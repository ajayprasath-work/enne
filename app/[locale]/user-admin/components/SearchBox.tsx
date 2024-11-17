import React, { useState } from 'react';

interface SearchBoxProps {
    placeholder?: string;
    onSearch?: (query: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ placeholder = "Search...", onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        if (query.trim() !== '') {
            onSearch?.(query);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="flex gap-[12px] py-2 lg:py-[16px] px-[24px] items-center border-[0.5px] border-[rgba(0, 0, 0, 0.20)] rounded-[5px] w-full ">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M11.6665 11.6665L14.6665 14.6665" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M13.333 7.33325C13.333 4.01954 10.6467 1.33325 7.33301 1.33325C4.0193 1.33325 1.33301 4.01954 1.33301 7.33325C1.33301 10.647 4.0193 13.3333 7.33301 13.3333C10.6467 13.3333 13.333 10.647 13.333 7.33325Z" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-linejoin="round" />
            </svg>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={placeholder}
                className="flex-grow border-none outline-none p-2"
            />
        </div>
    );
};

export default SearchBox;
