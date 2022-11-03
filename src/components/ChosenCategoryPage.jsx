import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import ReviewCard from "./ReviewCard";
import {Link} from "react-router-dom"

export default function ChosenCategoryPage() {
    const {category} = useParams()

    const [reviews, setReviews] = useState([])
    const [isLoading, setIsLoading]= useState(true)

    useEffect(()=>{
        setIsLoading(true);
        fetch(`https://bencgames.herokuapp.com/api/reviews?category=${category}`)
        .then((res)=>{
            return res.json()
        }).then(({reviews})=>{
            setReviews(reviews);
            setIsLoading(false)
        })
    }, [category]);
    if (isLoading) {
        return <p>Loading...</p>;
    }
    return (
        <section className="AllReviews">
            {reviews.map((review)=>{
                return (
                    <Link to={`/reviews/${review.review_id}`} key={review.review_id} className="ReviewLink">
                        <ReviewCard 
                        key={review.review_id}
                        owner={review.owner}
                        title={review.title}
                        votes={review.votes}
                        />
                    </Link>
                    )
            })}
        </section>
    )
}

