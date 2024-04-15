import React from "react";
import "./Mauritius.css"; 

export default function Mauritius({ setPage }) {
  return (
    <div className="Mauritius-blog">
      <h1 onClick={() => setPage("home")}><u>A Week in Mauritius: Island Paradise</u></h1>
      <div className="blog-content">
        <img src="portlouis.jpeg" alt="Port Louis" className="blog-image" />
        <p className="blog-text">
          My Mauritian adventure began in the vibrant capital, <b>Port Louis</b>. I wandered
          through the bustling markets filled with colorful textiles, spices, and
          local crafts. <b>The French colonial architecture and historical landmarks,
          like the Government House, offered a glimpse into the island's rich past.</b>
        </p>
      </div>
      <div className="blog-content">
        <img src="mauritiusbeach.jpeg" alt="Mauritius Beaches" className="blog-image" />
        <p className="blog-text">
          Mauritius is renowned for its pristine beaches and crystal-clear turquoise
          waters. I spent a blissful day relaxing on the <b>white sand beaches of
          Ile aux Cerfs, indulging in water sports like snorkeling and kayaking,
          and soaking up the breathtaking scenery.</b>
        </p>
      </div>
      <div className="blog-content">
        <img src="botanicalgarden.jpeg" alt="Botanical Garden" className="blog-image" />
        <p className="blog-text">
          For a taste of the island's diverse flora and fauna, I explored the
          <b>Sir Seewoosagur Ramgoolam Botanical Garden</b>. The sprawling gardens showcase
          a variety of endemic plants, giant water lilies, and a vibrant birdlife,
          providing a peaceful escape amidst the lush greenery.
        </p>
      </div>
      <div className="blog-content">
        <img src="mauritiancuisine.jpeg" alt="Mauritius Cuisine" className="blog-image" />
        <p className="blog-text">
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
          Mauritius offers adventure beyond the beaches. I embarked on a scenic
          hiking trail through <b>the Black River Gorges National Park</b>, surrounded by
          lush rainforests, cascading waterfalls, and breathtaking viewpoints. The
          park is a haven for nature lovers and offers a chance to explore the
          island's natural beauty.
        </p>
      </div>
    </div>
  );
}
