import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import styles from '../components/myStyles.module.css'




export default function SearchBar() {


    return(
    <>
        <div className={styles.forSearchBar}>
        <input
   type="search"
   placeholder="Search here"
   
   >
   </input>

        </div>

    </>

    )

        
}