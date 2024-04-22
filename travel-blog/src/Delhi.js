import React, { useState } from "react";
import "./Delhi.css"; 

export default function Delhi({ setPage }) {
    const [comments, setComments] = useState([
        { date: "2024-04-18", name: "John Doe", rating: 5, text: "Loved the Red Fort, a must-visit!" },
        { date: "2024-04-17", name: "Jane Smith", rating: 4, text: "The food in Chandni Chowk was incredible." }
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
        <div className="delhi-blog">
            <h1 onClick={() => setPage("home")}><u>A Week in Delhi: A City of Contrasts</u></h1>
            <div className="blog-content">
                <img src="redfort.jpeg" alt="Red Fort" className="blog-image" />
                <p className="blog-text">
                    <h3><u>The Red Fort</u></h3>
                    My visit to Delhi began with the <b>iconic Red Fort</b>. This historical fortification is a reminder of the Mughal era and a symbol of India's rich past.
                </p>
            </div>
            <div className="blog-content">
                <img src="lotus.jpeg" alt="Lotus Temple" className="blog-image" />
                <p className="blog-text">
                    <h3><u>The Lotus Temple</u></h3>
                    I then explored <b>the Lotus Temple, known for its flowerlike shape</b>. It is not only a place of worship but a marvel of modern architecture and open to all, regardless of religion.
                </p>
            </div>
            <div className="blog-content">
                <img src="indiagate.jpeg" alt="India Gate" className="blog-image" />
                <p className="blog-text">
                    <h3><u>The India Gate</u></h3>
                    An evening walk at <b>the India Gate</b> was refreshing. It's a war memorial and an emblem of bravery and pride.
                </p>
            </div>
            <div className="blog-content">
                <img src="chandini.jpeg" alt="Chandni Chowk" className="blog-image" />
                <p className="blog-text">
                    <h3><u>Chandni Chowk</u></h3>
                    No trip to Delhi is complete without visiting <b>Chandni Chowk. It's one of the oldest and busiest markets in Old Delhi</b>, known for its street food and diverse shopping options.
                </p>
            </div>
            <div className="blog-content">
                <img src="hauzkhas.jpeg" alt="Hauz Khas Village" className="blog-image" />
                <p className="blog-text">
                    <h3><u>Hauz Khaz Village</u></h3>
                    <b>Hauz Khas Village offered a unique blend of historical ambiance mingled with urban culture</b>. The neighborhood is a creative hub, featuring art galleries, boutiques, and cafes in a beautifully conserved urban village.
                </p>
            </div>
            <div className="blog-content">
                <img src="olddelhi.jpeg" alt="Old Delhi Market" className="blog-image" />
                <p className="blog-text">
                    <h3><u>Old Delhi</u></h3>
                    I delved deeper into the heart of Old Delhi, absorbing the bustling energy of its myriad markets. <b>These markets encapsulate the soul of Delhi, offering everything from spices and textiles to jewelry and handicrafts.</b>
                </p>
            </div>
            <div className="blog-content">
                <img src="delhicuisine.jpeg" alt="Delhi Cuisine" className="blog-image" />
                <p className="blog-text">
                    <h3><u>Delhi Cuisine</u></h3>
                    Delhi's cuisine is as diverse as its heritage, and sampling the street food is a must.<b> From chaat, samosas to the rich gravies and tandoori rotis, each dish tells a story of its own.</b>
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
