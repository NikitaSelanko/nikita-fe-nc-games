export default function ReviewCard({title, owner, votes,}) {
    return(
        <article className="ReviewBox">
            <div className="ReviewBoxDetails">
            <p className="ReviewVotes">{votes}</p>
            <h3 className="ReviewOwner">{owner}</h3>
            <h4 className="ReviewTitle">Title:{title}</h4>
            </div>
        </article>
    )

}