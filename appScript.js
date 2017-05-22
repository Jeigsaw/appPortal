// trigger when the submit is clicked
// first check the input field and
// store the name of the user
var uName;
$("#rtbar button").on("click", function(e){
    e.preventDefault();
   var inputUname = $("#loginForm input[name='uName']")[0].value,
       inputPass = $("#loginForm input[name='passCode']")[0].value;

    if(inputUname == '' || inputPass == ''){
        $("#errMsg").css("opacity","1");
    } else {
        uName = inputUname;
        $("#loginBx").fadeOut('slow');
    };
});

// close the errmsg when clicking 'x'
$("#errMsg a").on("click", function(){
    $("#errMsg").css("opacity", "0");
});