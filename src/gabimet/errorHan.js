import React from 'react';
import './error.css';

const errorHan = (props) =>{
return(
    
       <div className="divii">
                <p>{props.intErr ? 'Keni Probleme me Internetin. Kontrolloni internetin tuaj pastaj provoni perseri!! ' : 'Ka ndodhur nje Gabim!!! Provoni Perseri'} </p>

       </div>
       
);
}

export default errorHan;