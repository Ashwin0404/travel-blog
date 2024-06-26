import React, { useEffect, useState } from 'react';


export default function Cards(props) {
	const [index, setIndex] = useState(0);
	
	function changeIndex() {
		
		if(index === props.item.coverImg.length - 1) {
			setIndex(0);
		}
		else setIndex(index + 1);
	}

	function getDirections() {
		const searchElem = document.getElementById(`search-bar-${props.item.state}`);
		console.log(searchElem.value);
		window.open(`https://www.google.com/maps/dir/${searchElem.value}/${props.item.state}`, "_blank");
		searchElem.value = "";
	}

	useEffect(() => {
		const tout = setTimeout(changeIndex, 1200)
		return () => {
			clearTimeout(tout)
		}
	}, [index])
	
	return (
		<div className='card'>
			<section className='column-left'>
				<div className='card-img-div'>
					<img className="card-img" src={`./${props.item.coverImg[index]}`} alt="images" />
				</div>
			</section>
			<section className='column-right'>
            <img id="point" height="30px" width="30px" src='pointer.png'></img>
                <span className='material-symbols-outlined'></span>
				<span className="card-country">{props.item.country} </span>
				<a href={props.item.googleMapLink}>View on Google Maps</a>
				<div className='headie-div'>
					
				<h2 className="headie"><u>FOR PROBABLE ROUTES:</u></h2>
				</div>
                <div id='search-bar-div'>
					<input type='search' id={`search-bar-${props.item.state}`} className='search-bar'  placeholder="Enter your location..." onKeyDown={(e) => {
						if(e.key === "Enter") getDirections();
					}}/>
					<button className='search-button' onClick={getDirections}>Search</button>
				</div>
				<h3 className="card-country-title" onClick={() => props.setPage(`${props.item.state}`)}>{props.item.title}</h3>
				<h4 className="card-date">{props.item.date}</h4>
				<p>{props.item.description}</p>
				<span>Read more..</span>
			</section>

		</div>
	)
}
