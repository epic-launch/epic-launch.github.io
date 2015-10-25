Parse.initialize("ytmORm1NEOXV8e5ELZkEou62ywM4JJUS88R0V7UD", "xpYRPtwBActyCUjH1nkvaSckiiyo7d07O9FQHO0N");
var page_id = window.location.toString().split("?")[1]
console.log(page_id)
var User = Parse.Object.extend("User");
var query = new Parse.Query(User);
query.equalTo("objectId", page_id)
query.first({
  success: function(object) {
    console.log(object)
    var results = object;
    var fname = results.get("first_name");
    var lname = results.get("last_name");
    var id = results.id;
    var major = results.get("major");
    var minor = results.get("minor");
    var year = results.get("grad_year");
    var email = results.get("email");
    var bio = results.get("user_bio");
    var picture = results.get("profilepicture");
    console.log(year);
    
    $("#name").text(fname + " " + lname);
    $("#major").text("Major(s): "+ major);
    $("#minor").text("Minor(s) and Certificate(s): "+minor);
    $("#year").text("Graduation Year: "+year);
    $("#bio").text(bio);
    $(".email-to").attr("href","mailto:"+email);
    $("#prof-pic").attr("src", picture.url());
    $(".contact-title").text("Contact "+fname+":")

  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});
