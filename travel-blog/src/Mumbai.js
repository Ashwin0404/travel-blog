import React from "react";
import "./Mumbai.css"; 

export default function Mumbai({setPage}) {
    return (
        <div className="mumbai-blog">
            <h1 onClick={() => setPage("home")}><u>A Week in Mumbai: City of Dreams</u></h1>
            <div className="blog-content">
                <img src="goi.jpg" alt="Gateway of India" className="blog-image" />
                
                <p className="blog-text">
                <h3 ><u>The Gateway of India</u></h3>
                    My first day in Bombay began with a visit to <b>the Gateway of India</b>, one of the most famous historical landmarks in the city.
                    Overlooking the Arabian Sea, it was built during the 20th century in honor of King George V and Queen Mary's visit to India.
                </p>
            </div>
            <div className="blog-content">
                <img src="mumbai_cuisine.jpg" alt="Local Cuisine" className="blog-image" />
                <p className="blog-text">
                    <h3><u>Bombay Cuisine</u></h3>
                    No visit to Mumbai is complete without trying the local cuisine. <b>I indulged in Vada Pav, a popular street food</b>, which is essentially a spicy potato fritter sandwiched between buns, served with tangy chutneys.
                </p>
            </div>
            <div className="blog-content">
                <img src="sobo.jpeg" alt="South Bombay Architecture" className="blog-image" />
            <p className="blog-text">
            <h3><u>The Rich Lives of Mumbai</u></h3>
                 On my third day, I was captivated by the opulence and architectural elegance of South Bombay. The area is a testament to colonial grandeur, showcasing <b>an array of Victorian, Art Deco, and Gothic buildings</b>. Here, the legacy of Bombay's golden era is preserved in structures like the Bombay High Court and the University of Mumbai,each telling a story of a rich historical tapestry.
            </p>
            </div>

            <div className="blog-content">
                <img src="marine.jpeg" alt="Marine Drive" className="blog-image" />
                <p className="blog-text">
                    <h3><u>Marine Drive</u></h3>
                    An evening stroll along <b>Marine Drive, also known as the Queen's Necklace</b>, was truly mesmerizing. The crescent-shaped boulevard lights up beautifully at night, offering stunning views of the city's skyline.
                </p>
            </div>
            <div className="blog-content">
                <img src="elephanta.jpeg" alt="Elephanta Caves" className="blog-image" />
                <p className="blog-text">
                    <h3><u>The Elephanta Caves</u></h3>
                    Another highlight was a visit to <b>the Elephanta Caves</b>, located on an island about 11 km northeast of the Harbor. The rock-cut caves are primarily dedicated to the Hindu god Shiva and showcase India’s rich cultural heritage.
                </p>
            </div>
            
        </div>
    );
}
