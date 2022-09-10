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
                $('.checkbox-wrap').removeClass('hidden');
                $('.submit-btn').attr('disabled', 'disabled')
            }
        },
        error: function error() {
            console.error("There was an error :(");
        }
    });
})



$('#checkbox').on('change', function(){
    if(this.checked) {
        $('.checkbox-label').text('hide details')
        $('.content-wrap').addClass('active')
    } else {
        $('.checkbox-label').text('show details')
        $('.content-wrap').removeClass('active')
    }
})




$('.input-file input[type=file]').on('change', function(){
    $('.submit-btn').removeAttr('disabled')
});
