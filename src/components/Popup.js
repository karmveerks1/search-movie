import React from 'react'
function Popup({selected,closePopup}){
	return(
      <section className="popup">
        <div className="content">
	       <h2>{selected.Title} <span>({selected.Year})</span></h2>
	       <p className="rating">Rating:{selected.imdbRating}</p>
	       <p className="rating">Total Votes:{selected.imdbVotes}</p>
	       <p className="rating">BoxOffice:{selected.BoxOffice}</p>
	       <div className="plot">
	          <img src={selected.Poster}/>
	          <p>{selected.Plot}</p>
	       </div>
	       <button className="close" onClick={closePopup}>Close</button>
	       </div>
	   </section>
	)
}
export default Popup;