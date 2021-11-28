import React, { useState } from 'react';
import './Giphy.css';
import './../Wiki/Wiki.css';

export default function Giphy() {

    const giphy_api = "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit=20&offset=0&q=";
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);

    const handleSearch = async(e) => {
        e.preventDefault();
        if (search === '') return;
        fetch(giphy_api + search)
        .then((res) => {
            return (res.json());
        })
        .then((result) => {
            setResults(result.data.map((gif) => {
                return (gif.images.fixed_height.url);
            }))
        })
    }

    return (
        <div className="gi-container">
            <h2>Daily Giphy</h2>
            <form className="search-box" onSubmit={handleSearch}>
                <input 
                    type="search"
                    placeholder="search..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
            </form>
            <div className="gif-results">
                {
                    results.map((result, i) => {
                        return (
                            <div className="gif-result" key={i}>
                                <img 
                                src={result}
                                alt="gifs"
                                className="gif-imgs"
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}