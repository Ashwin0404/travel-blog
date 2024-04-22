import React from "react";


export default function Header() {
	return (
		<div id="head">
			<header className="journal-header" style={{ background: 'url(path/to/background.jpg) center/cover no-repeat' }}>
				
				<div ><h1 className="title">Mystic India Travelogues</h1> 
				
				</div>
			</header>
			<div >
				<p align="center" id="para">
					My travel blog is a vibrant journey through various corners of India, capturing the essence of its diverse cultures and breathtaking landscapes.
					As I traverse this vast country, I delve into the unique traditions, festivals, and daily lives of its people.
					Each blog post is filled with rich narratives and vivid photography, from the bustling markets of major cities to the serene beauty of rural areas. I explore local cuisines, historic temples, and modern urban centers, offering both insights and inspiration for 
					others who are eager to experience India's rich cultural tapestry firsthand.
				</p>
			</div>
		</div>
	)
}
