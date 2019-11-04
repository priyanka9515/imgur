import React, { Component } from "react";
import upvote from "./upvote.png";
import comments from "./index.jpeg"
import views from "./images.png"

class ImageCard extends Component{
	constructor(props){
		super(props);
		this.displayTitle=this.displayTitle.bind(this);
	};
	
	
displayTitle(props){

	return <div>hi, {this.props.title}
</div>

}


render(){
 
return(

<div>
	<div>
		
				
		{
	
		}
		<div>{
			<div>
				<div width="300px">
					<div height="300px">
					<img src={this.props.src} width="240px" height="240px"/>
					<div>
					{this.props.title}
					</div>
					<div class="icons">
					<div><img width="15px" height="15px" name="Upvotes" src={upvote}/>	{this.props.upvotes}</div>
					<div><img width="20px" height="20px" name="Upvotes" src={comments}/>	{this.props.comments}</div>
					<div><img width="15px" height="15px" name="Views" src={views}/>	{this.props.views}</div>
					</div>

				</div>	
				</div>	
				</div>
		}</div>

	</div>
	</div>






);
}
}

export default ImageCard;