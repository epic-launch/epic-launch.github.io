Parse.initialize("ytmORm1NEOXV8e5ELZkEou62ywM4JJUS88R0V7UD", "xpYRPtwBActyCUjH1nkvaSckiiyo7d07O9FQHO0N");
var page_id = window.location.toString().split("?")[1]
console.log(page_id)
var Participant = Parse.Object.extend("Participant");
var query = new Parse.Query(Participant);
query.equalTo("objectId", page_id)
query.first({
  success: function(object) {
    console.log(object)
    var results = object;
    var name = results.get("Name");
    var id = results.id;
    var major = results.get("Major");
    var minor = results.get("Minor");
    var year = results.get("Year");
    var accomplishments = results.get("Accomplishment");
    var skills = results.get("Skills");
    var experience = results.get("Experience");
    var desires = results.get("Want_to_do");
    var interests = results.get("Interests");
    var ideas = results.get("Idea");
    var email = results.get("Email");
    var bio = results.get("Bio");
    console.log(name);
    
    $("#name").text(name);
    $("#major").text(major);
    $("#minor").text(minor);
    $("#year").text(year);
    $("#accomplishments").text(accomplishments);
    $("#experience").text(experience);
    $("#do").text(desires);
    $("#bio").text(bio);
    $("#interests").text(interests);
    $("#ideas").text(ideas);
    $("#email").text(email);
    $("#skills").text(skills);

  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});

