const form = document.querySelector('.form')

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const options = {year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' };

    $.ajax({
        url: "/convert",
        type: "post",
        data: new FormData(this),
        contentType: false,
        processData: false,
        success: function success(data) {
            const date = new Date(data.date).toLocaleDateString('en-EN', options)

            $('#email-from').html(data.from.value[0].address);
            $('#email-to').html(data.to.text);
            $('#date').html(date);
            $('#content').html(data.html);
            // console.log(data)
            console.log(data)



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
