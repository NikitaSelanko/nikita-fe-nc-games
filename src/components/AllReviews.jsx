import { useEffect } from "react";
import { useState } from "react";
import ReviewCard from "./ReviewCard"

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
                    <ReviewCard 
                    key={review_id}                   
                    owner={owner}
                    title={title}
                    votes={votes}
                    />
                )
            })}
        </section>
    )
}