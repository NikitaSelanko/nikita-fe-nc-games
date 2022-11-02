import { useEffect } from "react";
import { useState } from "react";
import {Link} from "react-router-dom"


export default function AllCategories() {

    const[categories, setCategories] =useState([]);


    useEffect(()=>{
        fetch("https://bencgames.herokuapp.com/api/categories")
        .then((res)=>{
            return res.json()
        }).then((response)=>{
            setCategories(response.categories)
        })
    },[])
    return(
        <>
        <ul type="none" className="CategoriesList">
            {categories.map((category)=>{
                return( 
                    <Link to={`/categories/${category.slug}`}
                    key={category.slug}>
                        <li>{category.slug}</li>
                    </Link>
                )
            })}
        </ul>
        </>
    )
}



