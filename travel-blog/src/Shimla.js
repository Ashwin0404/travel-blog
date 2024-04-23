import React,{useState} from "react";
import "./Shimla.css"; 

export default function Shimla({setPage}) {
    const [comments, setComments] = useState([
{ date: "2023-05-01", name: "Aryan Shah", rating: 5, text: "The snow-covered peaks were majestic!" },
{ date: "2023-05-15", name: "Vedika Kulkarni", rating: 4, text: "The toy train ride was a nostalgic journey." },
{ date: "2023-05-20", name: "Tara Mehta", rating: 5, text: "Wandering through the markets of Mall Road was so much fun!" },
{ date: "2023-06-02", name: "Nikhil Chaudhary", rating: 4, text: "The views from Jakhoo Temple are truly a sight to behold." },
{ date: "2023-06-10", name: "Ishaan Dev", rating: 5, text: "The sunrise from Kufri took my breath away, absolutely stunning!" },
{ date: "2023-06-18", name: "Zoya Singh", rating: 4, text: "Enjoyed every moment of the peaceful walks in the pine forests!" }

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
        <div className="shimla-blog">
            <h1 onClick={() => setPage("home")}><u>Shimla: Queen of Hills</u></h1>
            <div className="blog-content">
                <img src="shimlamall.jpeg" alt="Mall Road Shimla" className="blog-image" />
                <p className="blog-text">
                <h3 ><u>Mall Road</u></h3>
                    My journey in Shimla began <b>with a stroll down the famous Mall Road</b>. Lined with shops, cafes, and colonial buildings, it’s the perfect introduction to the quaint charm of this hill station.
                </p>
            </div>
            <div className="blog-content">
                <img src="shimlachruch.jpeg" alt="Christ Church Shimla" className="blog-image" />
                <p className="blog-text">
                <h3 ><u>Chirst Church</u></h3>
                    <b>The iconic Christ Church, situated on The Ridge, is an architectural marvel of the British era.</b> Its neo-Gothic style and serene presence dominate the skyline of Shimla.
                </p>
            </div>
            <div className="blog-content">
                <img src="shimlakurfi.jpeg" alt="Kufri in Shimla" className="blog-image" />
                <p className="blog-text">
                <h3 ><u>Kufri</u></h3>
                    <b>A short drive from Shimla took me to Kufri, a must-visit for nature lovers and adventure seekers</b>, famous for its trekking routes and panoramic view. Kufri's most well-known attraction is the Himalayan Nature Park, a high-altitude zoo with a diverse array of plant and animal life.
                </p>
            </div>
            <div className="blog-content">
                <img src="shimlatemple.jpeg" alt="Jakhoo Temple" className="blog-image" />
                <p className="blog-text">
                <h3 ><u>Jakhoo Temple</u></h3>
                    <b>The Jakhoo Temple offers not just spiritual solace but also a breathtaking view of the surrounding mountains</b>. The steep climb up to the temple is rewarding with its scenic vistas.
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
