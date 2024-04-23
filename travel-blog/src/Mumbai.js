import React, { useState } from "react";
import "./Mumbai.css";

export default function Mumbai({ setPage }) {
    const [comments, setComments] = useState([
        { date: "2023-04-01", name: "Arjun Singh", rating: 5, text: "Loved the night view at Marine Drive!" },
        { date: "2023-04-10", name: "Dhruv Doshi", rating: 4, text: "The street food was incredible, especially the Vada Pav!" },
        { date: "2023-05-02", name: "Meena Gupta", rating: 5, text: "The historical tour of the Chhatrapati Shivaji Terminus was enlightening. Such intricate architecture!" },
        { date: "2023-03-15", name: "Oliver McLovin", rating: 4, text: "The hustle and bustle of the Crawford Market is something you can't miss. Great place for souvenirs!" },
        { date: "2023-02-25", name: "Pooja Krishnan", rating: 5, text: "Watching the sunset from Juhu Beach was truly magical. Highly recommend!" },
        { date: "2023-01-30", name: "Emily Johnson", rating: 4, text: "The ferry ride to Elephanta Island was a great escape from the city's buzz. Loved the cave sculptures!" }
        
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
        <div className="mumbai-blog">
            <h1 onClick={() => setPage("home")}><u>A Week in Mumbai: City of Dreams</u></h1>
            <div className="blog-content">
                <img src="goi.jpg" alt="Gateway of India" className="blog-image" />
                <div className="blog-text">
                    <h3><u>The Gateway of India</u></h3>
                    <p>My first day in Bombay began with a visit to <b>the Gateway of India</b>, one of the most famous historical landmarks in the city.
                    Overlooking the Arabian Sea, it was built during the 20th century in honor of King George V and Queen Mary's visit to India.</p>
                </div>
            </div>
            <div className="blog-content">
                <img src="mumbai_cuisine.jpg" alt="Local Cuisine" className="blog-image" />
                <p className="blog-text">
                    <h3><u>Bombay Cuisine</u></h3>
                    No visit to Mumbai is complete without trying the local cuisine. <b>I indulged in Vada Pav, a popular street food</b>, which is essentially a spicy potato fritter sandwiched between buns, served with tangy chutneys.
                </p>
            </div>
            <div className="blog-content">
                <img src="sobo.jpeg" alt="South Bombay Architecture" className="blog-image" />
            <p className="blog-text">
            <h3><u>The Rich Lives of Mumbai</u></h3>
                 On my third day, I was captivated by the opulence and architectural elegance of South Bombay. The area is a testament to colonial grandeur, showcasing <b>an array of Victorian, Art Deco, and Gothic buildings</b>. Here, the legacy of Bombay's golden era is preserved in structures like the Bombay High Court and the University of Mumbai,each telling a story of a rich historical tapestry.
            </p>
            </div>

            <div className="blog-content">
                <img src="marine.jpeg" alt="Marine Drive" className="blog-image" />
                <p className="blog-text">
                    <h3><u>Marine Drive</u></h3>
                    An evening stroll along <b>Marine Drive, also known as the Queen's Necklace</b>, was truly mesmerizing. The crescent-shaped boulevard lights up beautifully at night, offering stunning views of the city's skyline.
                </p>
            </div>
            <div className="blog-content">
                <img src="elephanta.jpeg" alt="Elephanta Caves" className="blog-image" />
                <p className="blog-text">
                    <h3><u>The Elephanta Caves</u></h3>
                    Another highlight was a visit to <b>the Elephanta Caves</b>, located on an island about 11 km northeast of the Harbor. The rock-cut caves are primarily dedicated to the Hindu god Shiva and showcase India’s rich cultural heritage.
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
