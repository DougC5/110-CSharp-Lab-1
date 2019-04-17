// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function clicked() {
    console.log('button was clicked');
    
}

function SendTest(){
    let text = $('#txtName').val();

    $.ajax({
        type: "POST",
        url: "/Employee/Create",
        data: text,
        contentType: "application/json; charset=utf-8",
        success: function (res) {
            console.log('POST Ended');
            console.log('Server Says: ', res);
            
        }
    });
}
