function showDescription(descript){
	$("#description").html("Description: " + descript);
}

function hideDescription(){
	$("#description").html("");
}

function validate(){
	var txtDob = $("#dob").val();
	var dob = new Date(txtDob);
	if(dob >= new Date()){
		alert("Date of Birth is not valid. Date has to be before today.");
		return false
	}
	var txtNum = $("#num").val();
	if(txtNum < 10){
		alert("Phone Number is not valid. Number has to be at least 10 digits.");
		return false
	}
}

$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  2500);