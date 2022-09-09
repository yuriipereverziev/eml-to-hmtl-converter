const form = document.querySelector('.form')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    $.ajax({
        url: "/convert",
        type: "post",
        data: new FormData(this),
        contentType: false,
        processData: false,
        success: function success(data) {
            $('#output').html(data);
        },
        error: function error() {
            console.error("There was an error :(");
        }
    });
})

$('.input-file input[type=file]').on('change', function(){
    $('.submit-btn').addClass('active')
});

$('.submit-btn').click(function() {
    $(this).removeClass('active')
});
