var slides = new Array ("agra_fort", "ajanta_ellora", "akshardham_temple", "gateway_of_india", "hawa_mahal", "mehrangarh_fort", 
                        "mysore_palace", "qutub_minar", "sun_temple", "taj_mahal", "victoria_memorial");

var captions = new Array ("Agra Fort", "Ajanta Ellora", "Akshardham Temple", "Gateway of India", "Hawa Mahal", "Mehrangarh Fort", 
                        "Mysore Palace", "Qutub Minar", "Sun Temple", "Taj Mahal", "Victoria Memorial");

var files = new Array ("agra_fort.jpg", "ajanta_ellora.jpeg", "akshardham_temple.jpg", "gateway_of_india.jpg", "hawa_mahal.jpeg", "mehrangarh_fort.jpg",
                        "mysore_palace.jpeg", "qutub_minar.jpg", "sun_temple.jpg", "taj_mahal.jpeg", "victoria_memorial.jpg");

var index = 1;
document.getElementById("imgTop").src = files[0];
document.getElementById("imgBottom").src = files[0];
var myPause = setInterval(function(){ startSlides() }, 3000);
var selected_cap = "Agra Fort";
var cap_idx = 0;


function startSlides() {
    document.getElementById("imgTop").src = document.getElementById("imgBottom").src;
    $("#imgTop").fadeIn(0);
    document.getElementById("imgBottom").src = files[index];
    $("#imgTop").fadeOut(1500);
    console.log(cap_idx);
    index = (index + 1) % slides.length;
    cap_idx = (cap_idx + 1) % slides.length;
    selected_cap = captions[cap_idx];
	document.getElementById("caption").innerText = selected_cap;
}

function stopIt() {
    clearInterval(myPause);
    document.getElementById("start").disabled = false;
}

function startIt() {
    document.getElementById("start").disabled = true;
    myPause = setInterval(function(){ startSlides() }, 3000);
}
