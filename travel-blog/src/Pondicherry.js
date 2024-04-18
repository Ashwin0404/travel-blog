import React from "react";
import "./Pondicherry.css"; 

export default function Pondicherry({ setPage }) {
  return (
    <div className="Pondicherry-blog">
      <h1 onClick={() => setPage("home")}> <u>Pondicherry: French Charm in India</u></h1>
      <div className="blog-content">
        <img src="frenchquarter.jpeg" alt="French Quarter" className="blog-image" />
        <p className="blog-text">
        <h3 ><u>The Frenvh Quarters</u></h3>
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
      
    </div>
  );
}
