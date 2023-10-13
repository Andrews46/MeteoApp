import styles from "./index.module.scss";
import { useState } from "react";

import NavProps from "../interfaces";
  
const NavBar:React.FC <NavProps>= ({ onSearch, onSearchs }) => {
  const [search, setSearch] = useState("");
const[miniSearch,setMiniSearch] = useState("");

  const onHandleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Valore di search:", search);
  console.log("Valore di miniSearch:", miniSearch);
    onSearch(search);
    onSearchs(miniSearch);
  };
    return (
      <div className={styles.Navbar}>
        <form onSubmit={onHandleSubmit}>
          <h5>cerca la tua località</h5>
          <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="text"
          placeholder="...scrivi qui"
          
        />
        <input
          onChange={(e) => setMiniSearch(e.target.value)}
          value={miniSearch}
          type="text"
          placeholder="...previsione giornaliera"
        />
        <button className={styles.btnSearch} type="submit">Cerca</button>
        </form>
      </div>
    );
  };
  
  export default NavBar;