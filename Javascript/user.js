Parse.initialize("ytmORm1NEOXV8e5ELZkEou62ywM4JJUS88R0V7UD", "xpYRPtwBActyCUjH1nkvaSckiiyo7d07O9FQHO0N");
var currentUser = Parse.User.current();

var name = currentUser.get("first_name");
var userEmail = currentUser.get("email");
var userFirstName = currentUser.get("first_name");
var userLastName = currentUser.get("last_name");
var userMajor = currentUser.get("major");
var userMinor = currentUser.get("minor");
var userGrad= currentUser.get("grad_year");
var userBio= currentUser.get("user_bio");
var userID = currentUser.id;
var username = currentUser.username;
var userPhoto = currentUser.get("profilepicture");

$(".name").text(name);
$('#first_name').text(userFirstName);
$("#last_name").text(userLastName);
$("#email").text(userEmail);
$('#major').text(userMajor);
$("#minor").text(userMinor);
$("#grad_year").text(userGrad);
$("#user_bio").text(userBio);
$("#profile-pic").attr("src", userPhoto.url());
$("#edit_fn").val(userFirstName);
$("#edit_ln").val(userLastName);
$("#edit_email").val(userEmail);
$("#edit_major").val(userMajor);
$("#edit_minor").val(userMinor);
$("#edit_user_bio").val(userBio);




$("#edit_details").click(function(){
$(".text").css("display", "none");
$(".editing").css("display","flex");
$("#edit_details").css("display","none")
$("#edit_details1").css("display","flex");

$("#edit_details1").click(function(){
  var update_fname = $("#edit_fn").val();
  var update_lname = $("#edit_ln").val();
  var update_email = $("#edit_email").val();

  currentUser.set("first_name", update_fname);
  currentUser.set("last_name", update_lname);
  currentUser.set("email", update_email);
  currentUser.set("username", update_email);

  currentUser.save(null,{
    success: function(user){
     location.reload()
    },
    error: function(error) {
    console.log("Error: " + error.code + " " + error.message);
  }
  })
})      
});

$("#edit_bio").click(function(){
$(".text1").css("display", "none");
$(".editing1").css("display","flex");
$("#edit_bio").css("display","none")
$("#edit_bio1").css("display","flex");

$("#edit_bio1").click(function(){
  var update_major = $("#edit_major").val();
  var update_minor = $("#edit_minor").val();
  var update_grad_year = $("#edit_grad_year").val();
  var update_user_bio = $("#edit_user_bio").val();

  currentUser.set("major", update_major);
  currentUser.set("minor", update_minor);
  currentUser.set("grad_year", update_grad_year);
  currentUser.set("user_bio", update_user_bio);
  currentUser.save(null,{
    success: function(user){
     location.reload()
    },
    error: function(error) {
    console.log("Error: " + error.code + " " + error.message);
  }
  })
})      
});

$("#edit_picture").click(function(){
$(".editing2").css("display","flex");
$("#edit_picture").css("display","none")
$("#edit_picture1").css("display","flex");

$("#save-pic").click(function(){
  var pic1 = $("#picture")[0];
  var pic = pic1.files[0];
  var name = userLastName + "-" + userFirstName + "-profilepicture"
  var parseFile = new Parse.File(name, pic)
  
  parseFile.save().then(function() {
    console.log("success")
    currentUser.set("profilepicture",parseFile)
    currentUser.save(null,{
    success: function(user){
     location.reload()
    },
    error: function(error) {
    console.log("Error: " + error.code + " " + error.message);
  }
  })
  }, function(error) {
    console.log(error)  
  });
})
})

$("#pass_reset").click(function(){
  console.log("click");
  Parse.User.requestPasswordReset(userEmail, {
        success: function() {
        $(".details").prepend("<div class='alert alert-success' role='alert'>Password reset instructions have been sent to your email.</div>")
        },
        error: function(error) {
          $("#reset_instructions").append("<p class='alert_text' id='invalid_email'>Error: " + error.message + "</p>")
        }
      });
    
})

