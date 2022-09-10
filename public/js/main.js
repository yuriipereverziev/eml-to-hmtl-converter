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
            $('#email-from').html(data.from.value[0].address);
            $('#email-to').html(data.to.text);
            $('#date').html(data.date.slice(0, 19).replace('T', ' '));
            $('#content').html(data.html);

            console.log(data)

            if (success){
                $('.field-top').removeClass('hidden')
            }
        },
        error: function error() {
            console.error("There was an error :(");
        }
    });
})

$('.input-file input[type=file]').on('change', function(){
    $('.submit-btn').removeAttr('disabled')
});
