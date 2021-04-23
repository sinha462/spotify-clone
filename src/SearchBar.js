import React, {useEffect} from 'react'
import SearchIcon from "@material-ui/icons/Search";
import "./SearchBar.css"
export default function SearchBar({query, setQuery, resetQuery}) {
    useEffect(() => {
        return () => resetQuery()
        // eslint-disable-next-line
    }, [])

    return (
        <div className="SearchContainer">
            <div className='SearchBar'>
                <SearchIcon /> 
                <input className= 'SearchInput no-outline' 
                        maxLength='80' 
                        autoCorrect='off' 
                        autoCapitalize='off' 
                        spellCheck='false'
                        autoFocus={true}
                        placeholder='Search for Artists, Songs, or Podcasts'
                        value={query}
                        onChange={e => setQuery(e.target.value)}/>
            </div>
        </div>
    )
}

