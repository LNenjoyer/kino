import Movielist from "./MovieList";
import './App.css';
import joker from './joker.jpg';
import klej from './klej.jpg';
import magi from './magi.jpg';
import robot from './robot.jpg';
import zwierz from './zwierzeta.jpg';

const movie =[
    {photo:joker,name:"JOKER: FOLIE A DEUX",gatunek:"dramat/kryminalny",    czas1:"17:00", czas2:"20:00", premiera:"PREMIERA", salas:"SALA STUDYJNA",dldzieci:"", stud:"STUDYJNY"},
    {photo:klej,name:"KULEJ. DWIE STRONY MEDALU",gatunek:"biograficzny",    czas1:"17:00", czas2:"", premiera:"",      salas:"SALA STUDYJNA",dldzieci:"", stud:""},
    {photo:magi,name:"AKADEMIA MAGI",gatunek:"animowany/przygodowy",        czas1:"17:00", czas2:"20:00", premiera:"PREMIERA",salas:"",dldzieci:"DLA DZIECI", stud:""},
    {photo:robot,name:"DZIKI ROBOT",gatunek:"animowany/przygodowy/familijny",czas1:"17:00",czas2:"", premiera:"",  salas:"",dldzieci:"DLA DZIECI", stud:"STUDYJNY"},
    {photo:zwierz,name:"MY,NASZE ZWIERZĘTA I WOJNA",gatunek:"dramat/dokumentalny",czas1:"17:00",czas2:"20:00", premiera:"PREMIERA", salas:"SALA STUDYJNA",dldzieci:"", stud:""}
];

const App = () =>(
  <div>
      <Movielist photo={movie[0].photo} name={movie[0].name} gatunek={movie[0].gatunek} czas1={movie[0].czas1} czas2={movie[0].czas2} premiera={movie[0].premiera} salas={movie[0].salas} dldzieci={movie[0].dldzieci} stud={movie[0].stud}/>
      <Movielist photo={movie[1].photo} name={movie[1].name} gatunek={movie[1].gatunek} czas1={movie[1].czas1} czas2={movie[1].czas2} premiera={movie[1].premiera} salas={movie[1].salas} dldzieci={movie[1].dldzieci} stud={movie[1].stud}/>
      <Movielist photo={movie[2].photo} name={movie[2].name} gatunek={movie[2].gatunek} czas1={movie[2].czas1} czas2={movie[2].czas2} premiera={movie[2].premiera} salas={movie[2].salas} dldzieci={movie[2].dldzieci} stud={movie[2].stud}/>
      <Movielist photo={movie[3].photo} name={movie[3].name} gatunek={movie[3].gatunek} czas1={movie[3].czas1} czas2={movie[3].czas2} premiera={movie[3].premiera} salas={movie[3].salas} dldzieci={movie[3].dldzieci} stud={movie[3].stud}/>
      <Movielist photo={movie[4].photo} name={movie[4].name} gatunek={movie[4].gatunek} czas1={movie[4].czas1} czas2={movie[4].czas2} premiera={movie[4].premiera} salas={movie[4].salas} dldzieci={movie[4].dldzieci} stud={movie[4].stud}/>
  </div>
);

export default App;
