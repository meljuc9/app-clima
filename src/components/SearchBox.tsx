import { useRef, useState } from 'react'

export const SearchBox = () => {
  
    const [search, setSearch] = useState ("");
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form 
            id='form' 
            onSubmit={(e) => {
                setSearch("")
            }}
        >
            <label htmlFor="search"></label>
            <input 
                autoComplete='off'
                id='search'
                name='search'
                type='search'
                className='absolute w-72 h-8 p-3 rounded-full mt-12'
                placeholder='Buscar ubicación...' 
            />
        </form>
    );
};
