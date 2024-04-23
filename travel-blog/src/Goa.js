import React, { useState } from "react";
import "./Goa.css"; 

export default function Goa({setPage}) {
    const [comments, setComments] = useState([
        { date: "01-04-2022", name: "Naman Badiani", rating: 5, text: "The beaches in Goa are simply stunning. Loved the sunset at Anjuna Beach!" },
        { date: "28-10-2019", name: "Niharika Singh", rating: 4, text: "Had a great time exploring the historic forts. The views from Fort Aguada are breathtaking!" },
        { date: "15-03-2022", name: "Rahul Mehta", rating: 5, text: "The nightlife in Baga is electric! A must-experience for anyone visiting Goa." },
        { date: "22-02-2022", name: "Harry Lewis", rating: 4, text: "The spice plantations are a hidden gem. Learned a lot and tasted some incredibly fresh spices!" },
        { date: "05-01-2022", name: "Amita Patel", rating: 5, text: "Goa's Portuguese architecture is enchanting. Walking through Fontainhas felt like stepping back in time." },
        { date: "17-11-2021", name: "Chris Wong", rating: 5, text: "Dolphin watching was a highlight of our trip. The kids loved it and the crew was fantastic!" }
    ]);
    const [commentText, setCommentText] = useState("");
    const [commentDate, setCommentDate] = useState("");
    const [commentName, setCommentName] = useState("");
    const [commentRating, setCommentRating] = useState(5);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!commentText || !commentDate || !commentName) return;
        const newComment = {
            date: commentDate,
            name: commentName,
            rating: parseInt(commentRating, 10),
            text: commentText
        };
        setComments([...comments, newComment]);
        setCommentText("");
        setCommentDate("");
        setCommentName("");
        setCommentRating(5);
    };
    return (
        <div className="goa-blog">
            <h1 onClick={() => setPage("home")}><u>A Week in Goa: Sun, Sand, and Serenity</u></h1>
            <div className="blog-content">
                <img src="goabeach.jpeg" alt="Goan Beach" className="blog-image" />
                <p className="blog-text">
                    <h3><u>The Queen of Beaches</u></h3>
                    My adventure in Goa started with its world-famous beaches. <b>Calangute Beach, known as the 'Queen of Beaches'</b>, offers beautiful sunsets and a bustling atmosphere.
                </p>
            </div>
            <div className="blog-content">
                <img src="fortaguada.jpeg" alt="Fort Aguada" className="blog-image" />
                <p className="blog-text">
                    <h3><u>Fort Aguada</u></h3>
                    Visiting Fort Aguada brought history to life. This <b>well-preserved seventeenth-century Portuguese fort provides panoramic views of the Arabian Sea</b>.
                </p>
            </div>
            <div className="blog-content">
            <img src="watersports.jpeg" alt="Water Sports" className="blog-image" />
            <p className="blog-text">
                <h3><u>Exhilarating Water Sports</u> </h3>
                     Goa is a haven for water sports enthusiasts. <b>From parasailing and windsurfing to jet skiing and kayaking</b>, I indulged in the thrill of exploring the  waters and enjoying the adrenaline rush.
                                 
                               
            </p>
            </div>
            <div className="blog-content">
                <img src="goanightlife.jpeg" alt="Goan Nightlife" className="blog-image" />
                <p className="blog-text">
                    <h3><u>Goan Nightlife</u></h3>
                Goa's nightlife is vibrant and exciting. <b>From beach shacks to elegant clubs</b>, the nightlife scene here caters to every taste and mood.
                </p>
            </div>
            <div className="blog-content">
            <img src="goaseafood1.jpeg" alt="Goan Seafood" className="blog-image" />
            <p className="blog-text">
                <h3><u>The Goan cuisine</u></h3>
                No trip to Goa is complete without savoring its delectable seafood
            cuisine. From <b>fresh fish curries to Xacuti (a spicy coconut-based dish)</b>,
            the flavors were an explosion for the taste buds. Don't forget to try
            <b>Feni, a local cashew-based alcoholic beverage.</b>
            </p>
            </div>
            <div className="blog-content">
                <img src="oldgoa.jpeg" alt="Old Goa" className="blog-image" />
                <p className="blog-text">
                    <h3><u>The Portuguese Influence</u></h3>
                    Exploring Old Goa was like stepping back in time. <b>The area's rich collection of churches, convents, and ruins reflect its history as a Portuguese capital.</b>
                </p>
            </div>
            <div className="comment-section">
                <h2><u>Share Your Experience</u></h2>
                <form onSubmit={handleSubmit}>
                    <input type="date" value={commentDate} onChange={e => setCommentDate(e.target.value)} required />
                    <input type="text" placeholder="Your name" value={commentName} onChange={e => setCommentName(e.target.value)} required />
                    <select value={commentRating} onChange={e => setCommentRating(e.target.value)}>
                        <option value="5">5 Stars</option>
                        <option value="4">4 Stars</option>
                        <option value="3">3 Stars</option>
                        <option value="2">2 Stars</option>
                        <option value="1">1 Star</option>
                    </select>
                    <textarea placeholder="Your comment" value={commentText} onChange={e => setCommentText(e.target.value)} required></textarea>
                    <button type="submit">Submit Comment</button>
                </form>
                <ul>
                    {comments.map((comment, index) => (
                        <li key={index}>
                            <strong>{comment.name}</strong> ({comment.date}) - <i>{comment.rating} Stars</i><br />
                            {comment.text}
                        </li>
                    ))}
                </ul>
            </div>

            
        
        
        
        
        
        
        
        
        </div>
    );
}
