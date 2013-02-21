window.onload = function () {

Parse.initialize("XKwMCTKbCPQYOSKAfKUWdVWvPJCx4A2lX86ilCex", "w5RmtgqRfPrGR9NoYsUIoVKogoz3UDhqEOBxquYX");

$("#signup").click(function () {
    var user = new Parse.User();
    user.set("username", $("#username").val());
    user.set("password", $("#password").val());
    user.set("email", $("#email").val());

    user.signUp(null, {
        success: function(user) {
            // Hooray! Let them use the app now.
            alert("success");
        },
        error: function(user, error) {
            // Show the error message somewhere and let the user try again.
            alert("Error: " + error.code + " - " + error.message);
        }
    });
});

}
