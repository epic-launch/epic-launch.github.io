Parse.initialize("ytmORm1NEOXV8e5ELZkEou62ywM4JJUS88R0V7UD", "xpYRPtwBActyCUjH1nkvaSckiiyo7d07O9FQHO0N");

var User = Parse.Object.extend("User");
var query = new Parse.Query(User);
query.ascending("first_name")
query.find({
  success: function(object) {
for (i = 0; i < object.length; i++) {
    var results = object[i];
    var fname = results.get("first_name");
    var lname = results.get("last_name");
    var image = results.get("profilepicture");
    if (image == undefined){
      image = "../Images/avatar-generic.jpg"
    } else{
      image = image.url();
    }

  	var id = results.id;
  	load(fname, lname, id, image)
}
    // Successfully retrieved the object.
  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});

function load (fname, lname, id, image) {
	$(".container").append(
    "<a class='card-link' href='../HTML/profile.html?"+id+"'><div class='person-card hvr-grow-shadow' id='"+id+"'>"+
      "<div class='picture-div' id='"+id+"-picture'><</div>"+
      "<div class='name-half'>"+
        "<h3 clas='name'>"+fname+ " " + lname+ "</h3>"+
      "</div></div></a>"
		)

  $("#"+id+"-picture").css("background","url("+image+")");
  $("#"+id+"-picture").css("background-size","cover");
}



