import axios from 'axios';
import React, {useState} from 'react';
import ErrorHan from './gabimet/errorHan';
import TeDhenat from './teDhenat/teDhenat';
import Search from './search/search';
import Start from './gabimet/startingErr';
import Spinner from './Spinneri/Spinneri';

const api = {
  key : '6d69df7aefa6c688dc6ec8397aaafbda',
  base : 'https://api.openweathermap.org/data/2.5/'
}
function App() {
  const [query, setQuery] = useState('');
  const[weather, setWeather] = useState({});
  const[err, setErr] = useState(false);
  const[errInt, setErrInt] = useState(false);
  const[loading, setLoading] = useState(false);

  const search = evt => {
    if(evt.key === "Enter" && query !== ''){
      setLoading(true);
      axios.get(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(result => {
        setLoading(false);
        setWeather(result.data)
        setQuery('');
        
        setErr(false);
        
      })
      .catch((error) => {
        if(error.response ){
          setErr(true)
          setQuery('');
        }
        else if(error.request){
          setErr(true)
          setErrInt(true)
          setQuery('');
          
        }

      })
    }
  }

  return (
    
    <div className={
      
      (typeof weather.main !="undefined")
       ? ((weather.main.temp > 16) ? 'app warm' : 'app')
       : 'app' }>
     <main>
    
      <Search onchange={e => setQuery(e.target.value)}
      query={query}
      onkeypress={search}
      />
     

       {((typeof weather.main != "undefined") || err)? (
         (err ? <ErrorHan intErr={errInt}/> : (loading ?<Spinner/> : <TeDhenat 
          emriIqytetit={weather.name} 
          emriIshtetit={weather.sys.country}  
          temperatura={weather.main.temp}
          qielli={weather.weather[0].main}
          />))
       
         
       ) : <Start/>}
      
     </main>
    </div>
  );
}

export default App;
