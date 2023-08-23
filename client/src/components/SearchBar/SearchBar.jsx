import style from '../SearchBar/SearchBar.module.css';

 function SearchBar(characters) {
   const { onSearch } = characters;
   return (
      <div className={style.navbar}>
      <div className={style.wrapperSearch}>
         <input className={style.input} type="search" />
         <button className={style.btn} onClick={onSearch}>
            Search
         </button>
      </div>
         </div>
   );
}
export default SearchBar;