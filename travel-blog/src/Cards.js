import React from 'react';


export default function Cards(props) {
	return (
		<div className='card'>
			<section className='column-left'>
				<img className="card-img" src={`./${props.item.coverImg}`} alt="images" />
			</section>
			<section className='column-right'>
            <img id="point" height="30px" width="30px" src='pointer.png'></img>
                <span className='material-symbols-outlined'></span>
				<span className="card-country">{props.item.country} </span>
				<a href={props.item.googleMapLink}>View on Google Maps</a>
                
				<h3 className="card-country-title" onClick={() => props.setPage(`${props.item.state}`)}>{props.item.title}</h3>
				<h4 className="card-date">{props.item.date}</h4>
				<p>{props.item.description}</p>
				<span>Read more..</span>
			</section>

		</div>
	)
}
