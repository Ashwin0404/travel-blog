import React from "react";
import "./Shimla.css"; 

export default function Shimla({setPage}) {
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
                    <b>A short drive from Shimla took me to Kufri, a must-visit for nature lovers and adventure seekers</b>, famous for its trekking routes and panoramic views. From January through March, the town receives significant snowfall. Kufri's most well-known attraction is the Himalayan Nature Park, a high-altitude zoo with a diverse array of plant and animal life. <b>Tourists go to Mahasu Peak to take in the breathtaking scenery of the snowy hill station.</b>
                </p>
            </div>
            <div className="blog-content">
                <img src="shimlatemple.jpeg" alt="Jakhoo Temple" className="blog-image" />
                <p className="blog-text">
                <h3 ><u>Jakhoo Temple</u></h3>
                    <b>The Jakhoo Temple offers not just spiritual solace but also a breathtaking view of the surrounding mountains</b>. The steep climb up to the temple is rewarding with its scenic vistas.
                </p>
            </div>
            
        </div>
    );
}
