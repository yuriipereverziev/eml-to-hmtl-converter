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
            $('#output').html(data.from.value[0].address);
            $('#output1').html(data.to.text);
            $('#output2').html(data.html);
            // console.log(data)
            console.log(data)
            console.log(data.from.value[0].address)


        },
        error: function error() {
            console.error("There was an error :(");
        }
    });
})

$('.input-file input[type=file]').on('change', function(){
    // $('.submit-btn').addClass('active')
    $('.submit-btn').removeAttr('disabled')

});

$('.submit-btn').click(function() {
    $(this).removeClass('active')
    $('.field-top').removeClass('hidden')
});
