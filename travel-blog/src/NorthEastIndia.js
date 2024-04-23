import React,{useState} from "react";
import "./NorthEastIndia.css"; 
export default function NorthEastIndia({ setPage }) {
  const [comments, setComments] = useState([
    { date: "2023-09-05", name: "Kavya Iyer", rating: 5, text: "The serene landscapes of Tawang Monastery are absolutely breathtaking!" },
{ date: "2023-09-10", name: "Siddharth Singh", rating: 4, text: "Kaziranga National Park offers an amazing wildlife experience." },
{ date: "2023-09-15", name: "Anushka Patel", rating: 5, text: "The living root bridges in Meghalaya are a marvel of natural engineering!" },
{ date: "2023-09-22", name: "Rohan Bhatia", rating: 4, text: "The vibrant culture and festivals of Manipur are a feast for the senses." },
{ date: "2023-09-28", name: "Priya Das", rating: 5, text: "The boat ride on the majestic Brahmaputra River was unforgettable." },
{ date: "2023-10-03", name: "Aman Verma", rating: 4, text: "Exploring the ancient temples of Tripura was a profound spiritual journey." }

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
    <div className="north-east-india-blog">
      <h1 onClick={() => setPage("home")}><u>North East India: A Seven Sister Wonder </u></h1>
      <p className="blog-intro">
      
        Embark on a captivating journey through the diverse and breathtaking
        landscapes of North East India, exploring the unique cultures and
        traditions of the Seven Sister States: Arunachal Pradesh, Assam,
        Meghalaya, Manipur, Mizoram, Nagaland, and Tripura.
      </p>
      <div className="blog-content">
        <img src="arunachalpradesh.jpeg" alt="Arunachal Pradesh" className="blog-image" />
        <p className="blog-text">
        <h3 ><u>Arunachal Pradesh</u></h3>
          <b>Arunachal Pradesh, the "Land of Dawn-Lit Mountains"</b>, boasts
          stunning snow-capped peaks, serene valleys, and rich biodiversity. Trek
          through the Tawang Monastery, the largest Buddhist monastery in India,
          or explore the vibrant local festivals showcasing tribal heritage.
        </p>
      </div>
      <div className="blog-content">
        <img src="assam.jpeg" alt="Assam" className="blog-image" />
        <p className="blog-text">
        <h3 ><u>Assam</u></h3>
          <b>Assam, the "Land of One-Horned Rhinos,"</b> is a haven for wildlife
          enthusiasts. Spot the majestic one-horned rhinoceros in Kaziranga
          National Park, a UNESCO World Heritage Site, or take a boat ride on the
          mighty Brahmaputra River, witnessing the vibrant Assamese culture.
        </p>
      </div>
      <div className="blog-content">
        <img src="meghalaya.jpeg" alt="Meghalaya" className="blog-image" />
        <p className="blog-text">
        <h3 ><u>Meghalaya</u></h3>
          <b>Meghalaya, the "Abode of Clouds,"</b> is known for its mesmerizing
          natural beauty. Explore the cascading waterfalls of Nohkalikai Falls,
          one of the tallest plunge waterfalls in India, or delve into the
          mysterious caves of Mawlynnong, Asia's cleanest village.
        </p>
      </div>
      <div className="blog-content">
        <img src="manipur.jpeg" alt="Manipur" className="blog-image" />
        <p className="blog-text">
        <h3 ><u>Manipur</u></h3>
          <b>Manipur, the "Land of Gems,"</b> is renowned for its rich cultural
          heritage and natural beauty. Witness the vibrant Manipuri dance forms
          like Lai Haraoba, or trek through the scenic Loktak Lake, the largest
          freshwater lake in Northeast India.
        </p>
      </div>
      <div className="blog-content">
        <img src="mizoram.jpeg" alt="Mizoram" className="blog-image" />
        <p className="blog-text">
        <h3 ><u>Manipur</u></h3>
          <b>Mizoram, the "Land of the Blues,"</b> offers a glimpse into the unique
          Mizo culture. Explore the scenic hills of Champhai, or visit the
          Mizoram State Museum to learn about the state's history and traditions.
          Don't miss trying the local delicacy, bamboo shoot curry.
        </p>
      </div>
      <div className="blog-content">
        <img src="nagaland.jpeg" alt="Nagaland" className="blog-image" />
        <p className="blog-text">
        <h3 ><u>Nagaland</u></h3>
          <b>Nagaland, the "Land of Festivals,"</b> is known for its vibrant Naga
          tribes and their rich cultural heritage. Immerse yourself in the
          Hornbill Festival, a celebration of Naga culture with traditional
          music, dance, and cuisine, or explore the Dzukou Valley, a breathtaking
          meadow carpeted with vibrant flowers.
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
  )
}