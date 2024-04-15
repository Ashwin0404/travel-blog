import React from "react";
import "./NorthEastIndia.css"; 
export default function NorthEastIndia({ setPage }) {
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
          <b>Arunachal Pradesh, the "Land of Dawn-Lit Mountains"</b>, boasts
          stunning snow-capped peaks, serene valleys, and rich biodiversity. Trek
          through the Tawang Monastery, the largest Buddhist monastery in India,
          or explore the vibrant local festivals showcasing tribal heritage.
        </p>
      </div>
      <div className="blog-content">
        <img src="assam.jpeg" alt="Assam" className="blog-image" />
        <p className="blog-text">
          **Assam, the "Land of One-Horned Rhinos,"** is a haven for wildlife
          enthusiasts. Spot the majestic one-horned rhinoceros in Kaziranga
          National Park, a UNESCO World Heritage Site, or take a boat ride on the
          mighty Brahmaputra River, witnessing the vibrant Assamese culture.
        </p>
      </div>
      <div className="blog-content">
        <img src="meghalaya.jpeg" alt="Meghalaya" className="blog-image" />
        <p className="blog-text">
          **Meghalaya, the "Abode of Clouds,"** is known for its mesmerizing
          natural beauty. Explore the cascading waterfalls of Nohkalikai Falls,
          one of the tallest plunge waterfalls in India, or delve into the
          mysterious caves of Mawlynnong, Asia's cleanest village.
        </p>
      </div>
      <div className="blog-content">
        <img src="manipur.jpeg" alt="Manipur" className="blog-image" />
        <p className="blog-text">
          **Manipur, the "Land of Gems,"** is renowned for its rich cultural
          heritage and natural beauty. Witness the vibrant Manipuri dance forms
          like Lai Haraoba, or trek through the scenic Loktak Lake, the largest
          freshwater lake in Northeast India.
        </p>
      </div>
      <div className="blog-content">
        <img src="mizoram.jpeg" alt="Mizoram" className="blog-image" />
        <p className="blog-text">
          **Mizoram, the "Land of the Blues,"** offers a glimpse into the unique
          Mizo culture. Explore the scenic hills of Champhai, or visit the
          Mizoram State Museum to learn about the state's history and traditions.
          Don't miss trying the local delicacy, bamboo shoot curry.
        </p>
      </div>
      <div className="blog-content">
        <img src="nagaland.jpeg" alt="Nagaland" className="blog-image" />
        <p className="blog-text">
          **Nagaland, the "Land of Festivals,"** is known for its vibrant Naga
          tribes and their rich cultural heritage. Immerse yourself in the
          Hornbill Festival, a celebration of Naga culture with traditional
          music, dance, and cuisine, or explore the Dzukou Valley, a breathtaking
          meadow carpeted with vibrant flowers.
        </p>
      </div>
    </div>
      )
}