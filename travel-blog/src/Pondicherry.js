import React,{useState} from "react";
import "./Pondicherry.css"; 

export default function Pondicherry({ setPage }) {
  const [comments, setComments] = useState([
    { date: "2023-07-01", name: "Vedant Mehta", rating: 5, text: "The French Quarter is incredibly charming and picturesque!" },
{ date: "2023-07-12", name: "Tara Khanna", rating: 4, text: "Loved the tranquility of the Aurobindo Ashram." },
{ date: "2023-07-20", name: "Reyansh Choudhary", rating: 5, text: "The beaches here are serene, perfect for a relaxing day out. Paradise Beach is a must-visit!" },
{ date: "2023-06-18", name: "Siya Gupta", rating: 4, text: "Exploring the colonial architecture on foot was like stepping back in time. Absolutely beautiful!" },
{ date: "2023-08-05", name: "Vivaan Reddy", rating: 5, text: "The vibrant market scenes and the colorful Goubert Avenue at night were mesmerizing." },
{ date: "2023-07-25", name: "Naina Agarwal", rating: 4, text: "The culinary blend of French and Tamil cuisines is unique and delicious. Don't miss out on the creole dishes!" }

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
    <div className="Pondicherry-blog">
      <h1 onClick={() => setPage("home")}> <u>Pondicherry: French Charm in India</u></h1>
      <div className="blog-content">
        <img src="frenchquarter.jpeg" alt="French Quarter" className="blog-image" />
        <p className="blog-text">
        <h3 ><u>The French Quarters</u></h3>
          My Pondicherry adventure began in <b>the charming French Quarter. The colorful
          colonial architecture, reminiscent of French villages, transported me to a
          different era.</b> I wandered along cobblestone streets lined with boutiques,
          cafes, and bakeries, soaking in the unique ambience.
        </p>
      </div>
      <div className="blog-content">
        <img src="promenade.jpeg" alt="Promenade Beach" className="blog-image" />
        <p className="blog-text">
        <h3 ><u>Promenade Beach</u></h3>
          <b>Promenade Beach, also known as Roche Noir, is a perfect spot to relax and
          enjoy the beauty of the Bay of Bengal.</b> I strolled along the golden sands,
          watched the sunset paint the sky with vibrant colors, and savored fresh
          seafood from the beachside shacks.
        </p>
      </div>
      <div className="blog-content">
        <img src="frenchcuisine.jpeg" alt="French Cuisine" className="blog-image" />
        <p className="blog-text">
        <h3 ><u>The French Cuisine</u></h3>
          Pondicherry offers a delightful fusion of French and Indian cuisine. <b>I
          indulged in a delicious crepe at a quaint cafe, followed by a flavorful
          South Indian thali for dinner.</b> The unique blend of spices and ingredients
          tantalised my taste buds.
        </p>
      </div>
      <div className="blog-content">
        <img src="pondinightlife.jpeg" alt="Pondi Nightlife" className="blog-image" />
        <p className="blog-text">
        <h3 ><u>Nightlife</u></h3>
          <b>As the sun sets, Pondicherry's vibrant nightlife comes alive. I explored
          the bustling cafes and rooftop bars along the French Quarter.</b> The lively
          atmosphere, with music and friendly faces, was a great way to unwind and
          experience a different side of the city.
        </p>
      </div>
      <div className="blog-content">
        <img src="auroville.jpeg" alt="Auroville" className="blog-image" />
        <p className="blog-text">
        <h3 ><u>Auroville-UNESCO World Heritage Site</u></h3>
          A visit to <b>Auroville</b>, an experimental township promoting
          international harmony and spiritual growth, was a unique experience.
          <b>This UNESCO World Heritage Site offers a glimpse into a utopian
          community and a chance to reflect on peace and unity.</b>
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
