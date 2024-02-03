import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const InputBox = () => {
    const [search, setSearch] = useState('')

    return (
        <div className='w-[60vw] max-ss:w-[80vw] max-xs:w-[90vw]   mt-5'>
            <div class="container">
                <div class="search-container">
                    <input className="input max-ss:w-[70vw]"
                        value={search} onChange={(e) => setSearch(e.target.value)}
                        type="text"
                        placeholder='Search Exercise'
                    />
                    <Link to={`exercise/${search}`}>
                        <svg viewBox="0 0 24 24" class="search__icon">
                            <g>
                                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z">
                                </path>
                            </g>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default InputBox