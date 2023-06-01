import style from "./SearchBar.module.css";

export default function SearchBar({onSearch}) {
   return (
      <div className={style.bar}>
     <div className={style.buscador}>
      <input type='search' className={style.serchInpunt}/>
    <button className={style.serchButton}
    onClick={ (id)=> {onSearch(id);}}>Agregar</button> 
    </div></div>
    );
}