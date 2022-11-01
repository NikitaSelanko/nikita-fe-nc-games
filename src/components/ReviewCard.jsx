export default function ReviewCard({title, owner, votes,}) {
    return(
        <article className="ReviewBox">
            <h3 className="ReviewOwner">{owner}</h3>
            <div className="ReviewBoxDetails">
            <h4 className="ReviewTitle">{title}</h4>
            <p className="ReviewVotes">{votes}</p>
            </div>
        </article>
    )

}