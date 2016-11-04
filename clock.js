// function to display the clock

function displayTime() {
	var today = new Date(); 
	var h = today.getHours();
	var m = today.getMinutes();
    var s = today.getSeconds();

	
    var myClock = document.getElementById('myClock');
    var time = h + ":" + m + ":" + s + " ";
    myClock.innerText = time;


// I have commented out the part of the the below if statement that would have the 
// greetings display at 6am, 12pm and 6pm. Right now they change at second 1, 21 and 
// 41 with the randmom image so that you can see that the greeting changes.



// this will change the greeting based on time of day 6am - Good Morning, 12pm Good Afternoon, 
// 6pm Good Evening. A random image will appear at second 1, 21, and 41.

	//if (h == 6 && m == 0 && s == 0 ){
	if (s == 1 ){
	document.getElementsByTagName('h1')[0].innerText = "Good Morning!";
	var num = Math.floor(Math.random() * 10);
	document.body.style.backgroundImage = imagesArray[num];
	 }else
	 //if (h == 12 && m == 0 && s == 0 ){
	 if (s == 21){
	document.getElementsByTagName('h1')[0].innerText = "Good Afternoon!";
	var num = Math.floor(Math.random() * 10);
	document.body.style.backgroundImage = imagesArray[num];
	 }else
	 //if (h == 18 && m == 0 && s == 0 ){
	if (s == 41) {
	 document.getElementsByTagName('h1')[0].innerText = "Good Evening!";
	 var num = Math.floor(Math.random() * 10);
	document.body.style.backgroundImage = none;
	 }


}


// calls displayTime
setInterval(displayTime, 1000);


// array of pictures to randomly display
	
imagesArray = ["url('rainbow.jpg')","url('supra.jpg')","url('flyfishing.jpg')", "url('morning.jpg')","url('sun.jpg')","url('evening.jpg')","url('moon.jpg')","url('nsx.jpg')","url('challener.jpg')","url('beach.jpg')"];





























