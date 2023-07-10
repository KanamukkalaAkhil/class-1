//class component Es6
import React,{ Component } from "react";

class Card extends Component {
    constructor(props){
        super(props)
    }

    //component render - built in method to return jsx

    render(){
        return(
            <div className="card">
                <div className="content">
                    <div className="img">
                        <img src="https://picsum.photos/id/900/1200/800" alt="no image" />
                    </div>
                    <div className="details">
                        <div className="name">AKHILo9</div>
                        <div className="job">WEB DEVELOPER</div>
                    </div>
                    <div className="media-icons">
                        <a href="#" target="_blank"> <i className="bi bi-instagram"></i></a>
                        <a href="#" target="_blank"> <i className="bi bi-whatsapp"></i></a>
                        <a href="#" target="_blank"> <i className="bi bi-twitter"></i></a>
                        <a href="#" target="_blank"> <i className="bi bi-pinterest"></i></a>
                        <a href="#" target="_blank"> <i className="bi bi-youtube"></i></a>

                    </div>
                </div>
            </div>
        )
    }
}
export default Card