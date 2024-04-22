import React, { useState } from "react";
import "./Kashmir.css"; 

export default function Kashmir({ setPage }) {
  const [comments, setComments] = useState([
    { date: "2023-04-01", name: "John Doe", rating: 5, text: "The view of the Dal Lake was absolutely breathtaking, a must-see!" },
    { date: "2023-04-10", name: "Jane Smith", rating: 4, text: "Loved the Shikara ride and the warm hospitality of the local people!" }
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
    <div className="Kashmir-blog">
      <h1 onClick={() => setPage("home")}><u>A Week in Kashmir: Heavenly Abode</u></h1>
      <div className="blog-content">
        <img src="dallake.jpeg" alt="Dal Lake" className="blog-image" />
        <p className="blog-text">
        <h3 ><u>Dal Lake</u></h3>
          <b>My Kashmiri adventure began with a mesmerizing journey on a shikara, a
          traditional Kashmiri boat, across the pristine waters of Dal Lake.</b> The
          lake, surrounded by snow-capped peaks and dotted with houseboats,
          offered breathtaking views and a serene atmosphere.
        </p>
      </div>
      <div className="blog-content">
        <img src="gulmarg.jpeg" alt="Gulmarg" className="blog-image" />
        <p className="blog-text">
        <h3 ><u>Gulmarg</u></h3>
          No trip to Kashmir is complete without experiencing <b>the beauty of
          Gulmarg</b>, a hill station renowned for its meadows carpeted with vibrant
          flowers during summer and transformed into a winter wonderland for skiing
          during the colder months. <b>I enjoyed the scenic gondola ride and
          basked in the breathtaking panoramic views of the Himalayas.</b>
        </p>
      </div>
      <div className="blog-content">
        <img src="pahalgam2.jpeg" alt="Pahalgam" className="blog-image" />
        <p className="blog-text">
        <h3 ><u>Pahalgam</u></h3>
          <b>Pahalgam, another captivating hill station, offered a different kind of
          charm. Nestled amidst lush green valleys and cascading waterfalls, it
          was a perfect escape for nature lovers.</b> I embarked on a scenic trek
          through the breathtaking landscape and reveled in the tranquility of
          the valley.
        </p>
      </div>
      <div className="blog-content">
        <img src="kashmircuisine.jpeg" alt="Kashmiri Cuisine" className="blog-image" />
        <p className="blog-text">
        <h3 ><u>Kashmiri Cuisine</u></h3>
          Kashmiri cuisine is a delightful blend of flavors and spices. I
          savored <b>the famous Rogan Josh, a slow-cooked lamb dish with aromatic
          spices, and Kashmiri Kahwa, a fragrant green tea infused with saffron
          and cardamom, for a truly authentic culinary experience.</b>
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
