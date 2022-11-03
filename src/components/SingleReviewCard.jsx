export default function SingleReviewCard({title, owner, review_body,review_img_url,votes}){
    return(
        <article className="SingleReviewCard">
            <img src={review_img_url} alt="title" className="SingleRevieImg" />
            <p>{title}</p>
            <h3>{owner}</h3>
            <p>{review_body}</p>
            <p>{votes}</p>
        </article>
    )
}