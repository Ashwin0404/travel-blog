import React,{useState} from "react";
import "./Mauritius.css"; 

export default function Mauritius({ setPage }) {
  const [comments, setComments] = useState([
    { date: "2023-08-15", name: "Aarav Mehta", rating: 5, text: "The crystal clear waters at Grand Baie are a must-see!" },
{ date: "2023-08-20", name: "Sophie Martin", rating: 4, text: "The vibrant markets in Port Louis were full of life and color." },
{ date: "2023-08-25", name: "Niharika Singh", rating: 5, text: "Snorkeling in Blue Bay Marine Park was an unforgettable experience!" },
{ date: "2023-08-30", name: "Lucas Weber", rating: 4, text: "The sunset at Flic en Flac is truly magical, a perfect evening!" },
{ date: "2023-09-04", name: "Priya Kapoor", rating: 5, text: "The lush greenery of the Black River Gorges National Park is breathtaking." },
{ date: "2023-09-10", name: "Emily Thompson", rating: 4, text: "Tasting the local cuisine, especially the seafood, was a culinary delight." }

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
    <div className="Mauritius-blog">
      <h1 onClick={() => setPage("home")}><u>A Week in Mauritius: Island Paradise</u></h1>
      <div className="blog-content">
        <img src="portlouis.jpeg" alt="Port Louis" className="blog-image" />
        <p className="blog-text">
        <h3 ><u>Port Louis</u></h3>
          My Mauritian adventure began in the vibrant capital, <b>Port Louis</b>. I wandered
          through the bustling markets filled with colorful textiles, spices, and
          local crafts. <b>The French colonial architecture and historical landmarks,
          like the Government House, offered a glimpse into the island's rich past.</b>
        </p>
      </div>
      <div className="blog-content">
        <img src="mauritiusbeach.jpeg" alt="Mauritius Beaches" className="blog-image" />
        <p className="blog-text">
        <h3 ><u>Beach Getaway</u></h3>
          Mauritius is renowned for its pristine beaches and crystal-clear turquoise
          waters. I spent a blissful day relaxing on the <b>white sand beaches of
          Ile aux Cerfs, indulging in water sports like snorkeling and kayaking,
          and soaking up the breathtaking scenery.</b>
        </p>
      </div>
      <div className="blog-content">
        <img src="botanicalgarden.jpeg" alt="Botanical Garden" className="blog-image" />
        <p className="blog-text">
        <h3 ><u>Botanical Garden</u></h3>
          For a taste of the island's diverse flora and fauna, I explored the
          <b>Sir Seewoosagur Ramgoolam Botanical Garden</b>. The sprawling gardens showcase
          a variety of endemic plants, giant water lilies, and a vibrant birdlife,
          providing a peaceful escape amidst the lush greenery.
        </p>
      </div>
      <div className="blog-content">
        <img src="mauritiancuisine.jpeg" alt="Mauritius Cuisine" className="blog-image" />
        <p className="blog-text">
        <h3 ><u>Mauritian Cuisine</u></h3>
          Mauritius offers a unique blend of flavors, <b>influenced by African,
          Indian, Chinese, and European cuisines</b>. I savored a delicious Mauritian
          curry, combining fresh seafood with fragrant spices and creamy coconut
          milk. Don't forget to try the local rum, a popular souvenir and a perfect
          way to end a delightful meal.
        </p>
      </div>
      <div className="blog-content">
        <img src="hiking.jpeg" alt="Hiking Trail" className="blog-image" />
        <p className="blog-text">
        <h3 ><u>One For the Adventurer</u></h3>
          Mauritius offers adventure beyond the beaches. I embarked on a scenic
          hiking trail through <b>the Black River Gorges National Park</b>, surrounded by
          lush rainforests, cascading waterfalls, and breathtaking viewpoints. The
          park is a haven for nature lovers and offers a chance to explore the
          island's natural beauty.
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
