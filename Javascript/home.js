Parse.initialize("ytmORm1NEOXV8e5ELZkEou62ywM4JJUS88R0V7UD", "xpYRPtwBActyCUjH1nkvaSckiiyo7d07O9FQHO0N");

var Participant = Parse.Object.extend("Participant");
var query = new Parse.Query(Participant);
query.ascending("Name")
query.find({
  success: function(object) {
for (i = 0; i < object.length; i++) {
    var results = object[i];
    var name = results.get("Name");
  	var id = results.id;
  	load(name, id)
}
    // Successfully retrieved the object.
  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});

function load (name, id) {
	$(".name_list").append(
		"<li> <a id='" + id + "' href='/HTML/person.html?"+id+"'>"+
		name +
		"</a></li>")
}