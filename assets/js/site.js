var form = document.getElementById("myForm");
function signUp() {
    $("#firstName").val("");
    $("#lastName").val("");
    $("#birthday").val("");
    $("#email").val("");
    $("#password").val("");
    $("#passwordConfirm").val("");
    $("#phonenumber").val("");
    $("#mainDiv").append("<div class='alert alert-success alert-dismissible fade show' role='alert'>Thank you! Your account has been successfully created.<button type='button' class='btn-close closeBtn' data-bs-dismiss='alert' aria-label='Close'></button></div>");
}

$(".closeBtn").click(function () {
    location.reload();
});

// TODO: Validate password - Passwords must match
$('#passwordConfirm').on('keyup', function () {
    if ($('#password').val() == $('#passwordConfirm').val()) {
        $('#message').html('Passwords match').css('color', 'green');
    } else
        $('#message').html('Passwords do not match').css('color', 'red');
});
