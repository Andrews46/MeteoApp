 import styles from "./index.module.scss";
import { useState } from "react";

import NavProps from "../interfaces.ts"
  
const NavBar:React.FC <NavProps>= ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    onSearch(search);
  };
   
    // const inputText=(e)=>setInfo (e.target.value);
    
    // const onHandleSubmit = (e) => {
    //   e.preventDefault();
    // };
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
        </form>
      </div>
    );
  };
  
  export default NavBar;