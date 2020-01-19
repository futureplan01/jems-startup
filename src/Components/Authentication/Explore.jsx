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
				<div class = "content-header">
					<h1>Explore</h1>
					<p>Be spontaneous, start your adventure</p>
				</div>
				<div id = "country-slider">
					<a href = "https://www.yahoo.com"><div class = "country-slides country-slide-1"><h3 class = "spotlight-title">France</h3></div></a>
					<a href = "https://www.yahoo.com"><div class = "country-slides country-slide-2"><h3 class = "spotlight-title">Spain</h3></div></a>
					<a href = "https://www.yahoo.com"><div class = "country-slides country-slide-3"><h3 class = "spotlight-title">Iceland</h3></div></a>
					<a href = "https://www.yahoo.com"><div class = "country-slides country-slide-4"><h3 class = "spotlight-title">Portugal</h3></div></a>
				</div>
				<a href = "https://www.yahoo.com"><div class = "hide country-display spotlight-country"><h3 class = "spotlight-country-title"></h3></div></a>	
				<div class = "country-control">
					<div class = "country-images country1"><h3 class = "country-one-title">France</h3></div>
					<div class = "country-images country2"><h3 class = "country-two-title">Spain</h3></div>
					<div class = "country-images country3"><h3 class = "country-three-title">Iceland</h3></div>
					<div class = "country-images country4"><h3 class = "country-four-title">Portugal</h3></div>
				</div>
				<button class = "explore-all-btn">
					<a href = "#">
						<i class="fas fa-globe"></i>
						Explore All
					</a>
				</button>
			</div>
		</div>	);
    }
}

export default Explore;