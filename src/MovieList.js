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

            <div className={props.premiera !== "" ? 'premiera' : 'nie'}>{props.premiera}</div>
            <div className={props.salas !== "" ? 'salas' : 'nie'}>{props.salas}</div>
            <div className={props.dldzieci !== "" ? 'dldzieci' : 'nie'}>{props.dldzieci}</div>
            <div className={props.stud !== "" ? 'stud' : 'nie'}>{props.stud}</div>

        </div>
        <div className={props.czas1 !== "" ? 'czas' : 'nie'}>{props.czas1}</div>
        <div className={props.czas2 !== "" ? 'czas' : 'nie'}>{props.czas2}</div>
    </div>
);
export default Movielist;