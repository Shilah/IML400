/* ----- */
// Replace YOUR NAME with yours

var NAME = "Shilah";
console.log( "/*****************/\n" + NAME +"'s submission \nfor Whodat Assignment" + "\n/*****************/\n");



/*
 * CHALLENGES
 *
 * Complete as many of the following challenges 
 * that you can. Simply put your code where indicated
 * and when you have completed a challenge
 * the delete the not in the 'not completed' message
 * if you try and don't get it then change the log message to 
 * something else. (e.g. 'attempted', 'attempted but javascript stinks', 
 * 'attempted but the instructor stinks', ...)
 */




/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
/*  Ch1											*/	
/*	Change the color of the wings on  			*/	
/*	1st owl to a different color				*/	
/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
console.log('...challenge 1...');

var myResult = document.getElementsByClassName('wing_L')
myResult[0].setAttribute("style", "background-color: purple");

var myResult = document.getElementsByClassName('wing_R')
myResult[0].setAttribute("style", "background-color: deeppink");

/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
/*  Ch2											*/	
/*	Change the background color of the cage  	*/	
/*	on the 1st row at the end					*/	
/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
console.log('...challenge 2...');

var daCage = document.getElementsByClassName('cage')
daCage[2].setAttribute('style', "background-color: black");



/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
/*  Ch3											*/	
/*	Change the length of the beak for the owl	*/	
/*	at the end of the second row				*/	
/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/

/** 		HINT		 **/
// to change the length of the beak you need to change
// the pixel value of:
// border-top
// e.g.
// changing:
// border-top: 60px solid goldenrod;
// to
// border-top: 120px solid goldenrod;
// would double the length of the beak.
/** ---		----	---	 **/

console.log('...challenge 3...');

document.querySelector("#container > div:nth-child(1) > div:nth-child(3) > section.beak").setAttribute("style", "border-top: 60px solid magenta")


/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
/*  Ch4											*/	
/*	Write a function that takes a number		*/	
/*  and returns the cage on the page that 		*/
/* 	corresponds to that number 					*/
/* 		e.g. calling 							*/
/*				getCage(0)						*/
/*		would return <section class="cage" ...	*/
/*					 </section>					*/
/*												*/					
/*				html Tag for the first cage     */					
/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
console.log('...challenge 4...');
function getCage(aNumber){
var res = document.getElementsByClassName('cage');[aNumber];
return res;
}




/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
/*  Ch5											*/	
/*	Change the colors of the cages and owls		*/	
/*	in the middle column to be the same			*/
/*												*/	
/*												*/	
/*  HINTkey: "value", 							*/
/*  If you got Ch4 then you should be able to 	*/
/* 	you should be able to use that function to 	*/
/*	assist you 									*/
/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
console.log('...challenge 5...');

function changeCageColor(aNumber,color){
getCage(aNumber).setAttribute("style", "background-color:" + color );
}

changeCageColor(4, 'red')



/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
/*  Ch6											*/	
/*	Write functions that take an owl element	*/	
/* 	as an argument and return the html sections */
/*	of different body parts						*/
/*												*/	
/*	see functions below for hints				*/	
/*												*/	
/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
console.log('...challenge 6...');


function getWings(anOwl) {
	return wings;
}

function getBeak(anOwl) {
	return wings;
}

function getEyes(anOwl) {
	return eyes;
}

function getBody(anOwl) {
	return body;
}

function getPupils(anOwl) {

}


