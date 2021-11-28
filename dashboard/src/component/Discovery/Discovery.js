import React, { useState } from 'react';
import './Discovery.css';

export default function Discovery() {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    const [searchInfo, setSearchInfo] = useState({});

    const handleSearch = async(e) => {
        e.preventDefault();
        if (search === '') return;
        const endPoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&
        utf8=&format=json&origin=*&srlmit=20&srsearch=${search}`;
        const response = await fetch(endPoint);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        setResults(json.query.search);
        setSearchInfo(json.query.searchinfo);
    }

    return (
        <div className="Discovery">
            <header>
                <h2>Wiki Copier</h2>
                <form className="search-box" onSubmit={handleSearch}>
                    <input 
                        type="search"
                        placeholder="search..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                </form>
                {(searchInfo.totalhits) ? <p>Found {searchInfo.totalhits} results</p> : ''}
            </header>
            <div className="results">
                {
                    results.map((result, i) => {
                        const url = `https://en.wikipedia.org/?curid=${result.pageid}`;
                        return (
                            <div className="result" key={i}>
                                <h3>{ result.title }</h3>
                                <p dangerouslySetInnerHTML={{ __html: result.snippet }}></p>
                                <a href={url} target="_blank" rel="noreferrer">Read More</a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}