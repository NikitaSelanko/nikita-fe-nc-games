import { useEffect } from "react";
import { useState } from "react";
import ReviewCard from "./ReviewCard"
import {Link} from "react-router-dom"

export default function AllReviews() {
    const[reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading]= useState(true)


    useEffect(()=>{
        setIsLoading(true);
        fetch("https://bencgames.herokuapp.com/api/reviews")
        .then((res)=>{
            return res.json()
        }).then ((response)=>{
            setReviews(response.reviews)
            setIsLoading(false)
        })
    },[])
    if (isLoading) {
        return <p>Loading...</p>;
    }
    return (
        <section className="AllReviews">
            {reviews.map(({title, owner, votes, review_id})=>{
                return(
                    <Link to={`/reviews/${review_id}`} key={review_id} className="ReviewLink">
                    <ReviewCard 
                    key={review_id}                   
                    owner={owner}
                    title={title}
                    votes={votes}
                    />
                    </Link>
                )
            })}
        </section>
    )
}