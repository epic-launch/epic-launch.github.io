Parse.initialize("ytmORm1NEOXV8e5ELZkEou62ywM4JJUS88R0V7UD", "xpYRPtwBActyCUjH1nkvaSckiiyo7d07O9FQHO0N");
var page_id = window.location.toString().split("?")[1]
console.log(page_id)
var contact;
var current = Parse.User.current();

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
    var image = results.get("profilepicture");
    var github = results.get("github_url");
    var twitter = results.get("twitter_url");
    var linkedin = results.get("linkedin_url");
    if (image == undefined){
      image = "../Images/avatar-generic.jpg"
    } else{
      image = image.url();
    }
   contact = {
        "email": email,
        "linkedin": linkedin,
        "twitter":twitter,
        "github":github,
    }
    console.log(contact)
    $("#name").text(fname + " " + lname);
    $("#major").text("Major(s): "+ major);
    $("#minor").text("Minor(s) and Certificate(s): "+minor);
    $("#year").text("Graduation Year: "+year);
    $("#bio").text(bio);
    $("#prof-pic").attr("src", image);
    $(".contact-title").text("Contact "+fname+":");
    if (contact.email != undefined){
        $(".contact-box").append(
            "<a href='mailto:"+email+"' class='email-to'><i class='fa-4x fa fa-envelope'></i></a>"
            )
    }
    if (contact.linkedin != "" ){
        $(".contact-box").append(
            "<a href='"+linkedin+"' class='linkedin'><i class='fa-4x fa fa-linkedin-square'></i></a>"
            )
    }
    if (contact.twitter != "" ){
        $(".contact-box").append(
            "<a href='"+twitter+"' class='twitter'><i class='fa-4x fa fa-twitter-square'></i></a>"
            )
    }
    if (contact.github != "" ){
        $(".contact-box").append(
            "<a href='"+github+"' class='github'><i class='fa-4x fa fa-github-square'></i></a>"
            )
    } else{
        console.log("no icon for github")
    }
  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});

