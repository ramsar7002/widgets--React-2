import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Search = ()=>{
    const[term, setTerm]=useState('programming');
    const[results, setResults]=useState([]);

useEffect(()=>{

    //method number one
    const search = async()=>{
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php',{
                params:{
                    action: 'query',
                    list: 'search',
                    format: 'json',
                    origin: '*',
                    srsearch: term,
                }
            });
            setResults(data.query.search);
        
    }
    if(term && !results)  search();
    else
    {
        const timeoutId = setTimeout(() => {
            if(term){
                search();
            }
        }, 500);

        return()=>{
            clearInterval(timeoutId);
        }
    }

    //method number two
    // (async ()=>{
    //     await axios.get('fdfd');
    // })();

    //method number three
    //axios.get('fdfdfd').then(res=>console.log(res.data))


},[term])

const renderedResults = results.map((result)=>{
    return(
        <div className="item" key={result.pageid}>
            <div className="right floated content">
                <a 
                className="ui button"
                href={`https://en.wikipedia.org?curid=${result.pageid}`}
                
                >Go</a>
            </div>
            <div className="content">
                <div className="header">
                    {result.title};
                </div>
                <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
            </div>
        </div>
    )
})

    return(
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input 
                    className="input" 
                    type="text" value = {term} 
                    onChange={(e)=>setTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    )
}

export default Search