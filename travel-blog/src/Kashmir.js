import React from "react";
import "./Kashmir.css"; 

export default function Kashmir({ setPage }) {
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
    </div>
  );
}
