import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleReviewCard from "./SingleReviewCard";


export default function SingleReviewPage() {
    const {review_id} = useParams()
    const [review, setReview] = useState(null)
    const [isLoading, setIsLoading]= useState(true)

    useEffect(()=>{
        setIsLoading(true);
        fetch(`https://bencgames.herokuapp.com/api/reviews/${review_id}`)
        .then((res)=>{
            return res.json();
        }).then(({review})=>{
            setReview(review)
            setIsLoading(false)
        })
    },[review_id])
    if (isLoading) {
        return <p>Loading...</p>;
    }
    return (
        <div>
            <SingleReviewCard
            review_img_url={review.review_img_url}
            title={review.title}
            owner={review.owner}
            review_body={review.review_body}
            votes={review.votes}
            />
        </div>
    )
}