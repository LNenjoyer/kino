import React from "react";
import './MovieList.css';


const Movielist = (props) => (
    <div className="film">
        <div className="zdj">
            <img src={props.photo} alt={props.name}/>
        </div>
        <div className="container">
            <div className="nazwa">
                <div className="tytul">{props.name}</div>
                <div className="gatunek">{props.gatunek}</div>
            </div>

            <div  className={props.premiera == true ? 'premiera' : 'nie'}>PREMIERA</div>

        </div>
        <div className="czas">{props.czas1}</div>
        <div className="czas">{props.czas2}</div>
    </div>
);
export default Movielist;