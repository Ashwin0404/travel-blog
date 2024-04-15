import React from "react";
import "./Goa.css"; 

export default function Goa({setPage}) {
    return (
        <div className="goa-blog">
            <h1 onClick={() => setPage("home")}><u>A Week in Goa: Sun, Sand, and Serenity</u></h1>
            <div className="blog-content">
                <img src="goabeach.jpeg" alt="Goan Beach" className="blog-image" />
                <p className="blog-text">
                    <h3>The Queen of Beaches</h3>
                    My adventure in Goa started with its world-famous beaches. <b>Calangute Beach, known as the 'Queen of Beaches'</b>, offers beautiful sunsets and a bustling atmosphere.
                </p>
            </div>
            <div className="blog-content">
                <img src="fortaguada.jpeg" alt="Fort Aguada" className="blog-image" />
                <p className="blog-text">
                    <h3>Fort Aguada</h3>
                    Visiting Fort Aguada brought history to life. This <b>well-preserved seventeenth-century Portuguese fort provides panoramic views of the Arabian Sea</b>.
                </p>
            </div>
            <div className="blog-content">
            <img src="watersports.jpeg" alt="Water Sports" className="blog-image" />
            <p className="blog-text">
                <h3>Exhilarating Water Sports </h3>
                     Goa is a haven for water sports enthusiasts. <b>From parasailing and windsurfingto jet skiing and kayaking</b>, I indulged in the thrill of exploring the  waters and enjoying the adrenaline rush.
                                 
                               
            </p>
            </div>
            <div className="blog-content">
                <img src="goanightlife.jpeg" alt="Goan Nightlife" className="blog-image" />
                <p className="blog-text">
                    <h3><u>Goan Nightlife</u></h3>
                Goa's nightlife is vibrant and exciting. <b>From beach shacks to elegant clubs</b>, the nightlife scene here caters to every taste and mood.
                </p>
            </div>
            <div className="blog-content">
            <img src="goaseafood1.jpeg" alt="Goan Seafood" className="blog-image" />
            <p className="blog-text">
                <h3><u>The Goan cuisine</u></h3>
                No trip to Goa is complete without savoring its delectable seafood
            cuisine. From <b>fresh fish curries to Xacuti (a spicy coconut-based dish)</b>,
            the flavors were an explosion for the taste buds. Don't forget to try
            <b>Feni, a local cashew-based alcoholic beverage.</b>
            </p>
            </div>
            <div className="blog-content">
                <img src="oldgoa.jpeg" alt="Old Goa" className="blog-image" />
                <p className="blog-text">
                    <h3><u>The Portuguese Influence</u></h3>
                    Exploring Old Goa was like stepping back in time. <b>The area's rich collection of churches, convents, and ruins reflect its history as a Portuguese capital.</b>
                </p>
            </div>
            
        </div>
    );
}
