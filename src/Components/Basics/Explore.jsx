import React, {Component} from "react";

class Explore extends Component{

    constructor (){
        super();
        this.handleCarousel = this.handleCarousel.bind(this);
    }
    handleCarousel(event){
        const images = document.querySelectorAll(".slide-images");
        const timer = 5000;
        let currentImageCounter = 0;
    
        images[currentImageCounter].classList.add("displayImage");
    
        setInterval(nextImage, timer);
    
        function nextImage(){
    
            images[currentImageCounter].classList.add("stackImage");
    
            /*USED TO MAKE SURE BACKGROUND DOESN'T INTERFERE/SHOW WITH IMAGE TRANSITIONS*/
    
                const tempCounter = currentImageCounter;
    
                setTimeout(function(){
                    images[tempCounter].classList.remove("displayImage");
                },1000);
    
            /*END*/
    
            currentImageCounter = (currentImageCounter + 1) % images.length;
    
            images[currentImageCounter].classList.add("displayImage");
            images[currentImageCounter].classList.remove("stackImage"); 
        }
    }

    render(){
        return (
            <div id = "container">
			<div id = "explore-section">
				<div className = "content-header">
					<h1>Explore</h1>
					<p>Be spontaneous, start your adventure</p>
				</div>
				<div id = "country-slider">
					<a href = "https://www.yahoo.com"><div className = "country-slides country-slide-1"><h3 className = "spotlight-title">France</h3></div></a>
					<a href = "https://www.yahoo.com"><div className = "country-slides country-slide-2"><h3 className = "spotlight-title">Spain</h3></div></a>
					<a href = "https://www.yahoo.com"><div className = "country-slides country-slide-3"><h3 className = "spotlight-title">Iceland</h3></div></a>
					<a href = "https://www.yahoo.com"><div className = "country-slides country-slide-4"><h3 className = "spotlight-title">Portugal</h3></div></a>
				</div>
				<a href = "https://www.yahoo.com"><div className = "hide country-display spotlight-country"><h3 className = "spotlight-country-title"></h3></div></a>	
				<div className = "country-control">
					<div className = "country-images country1"><h3 className = "country-one-title">France</h3></div>
					<div className = "country-images country2"><h3 className = "country-two-title">Spain</h3></div>
					<div className = "country-images country3"><h3 className = "country-three-title">Iceland</h3></div>
					<div className = "country-images country4"><h3 className = "country-four-title">Portugal</h3></div>
				</div>
				<button className = "explore-all-btn">
					<a href = "#">
						<i className="fas fa-globe"></i>
						Explore All
					</a>
				</button>
			</div>
		</div>	);
    }
}

export default Explore;