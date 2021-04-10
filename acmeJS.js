//Acme Solutions JavaScript

//Home start
function start() {
	document.getElementById("description").style.visibility = "visible";
	document.getElementById("slideImage").style.visibility = "visible";
	document.getElementById("slogan").style.visibility = "visible";
	document.getElementById("next").style.visibility = "visible";
	document.getElementById("title").style.visibility = "visible";
	document.getElementById("welcome").style.display = "none";
	document.getElementById("cite").style.visibility = "visible";

}
//Slide Show
let images = new Array();
images[0] = "Images/Slide Show/green.jpg";
images[1] = "Images/Slide Show/pills.jpg";
images[2] = "Images/Slide Show/silhouette.png";
images[3] = "Images/Slide Show/stock.jpg";

let green = "Derived From Cynareae Cirsium VPL Is A Therapeutic Alternative To Drugs Currently On The Market.";
let pills = "Acme Solutions Is A Pioneer In The Development Of Affordable And Effective Rhinotillexomania Medication.";
let silhouette = "Don't Let Rhinotillexomania Reduce Your Quality Of Life. Volunteer For Our Clinical Trials Today!";
let stock = "Our Latest Offereing Memorandum Deadline Is January 17 2019. Become Part Of This Exciting New Investment Opportunity.";

let count = 4;
let max = 4;
let space = document.getElementById('description');

function automatic(){
	let j = count % max;
	if(j==0){
		space.innerHTML = green;
		document.getElementById("slideImage").src = images[j];
	}else if(j==1){
		space.innerHTML = pills;
		document.getElementById("slideImage").src = images[j];
	}else if(j==2){
		space.innerHTML = silhouette;	
		document.getElementById("slideImage").src = images[j];
	}else if(j==3){
		space.innerHTML = stock;
		document.getElementById("slideImage").src = images[j];
	}
	count+=1;
}