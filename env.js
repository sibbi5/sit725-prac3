$(document).ready(function () {
    $('.tabs').tabs()
    $('#btnWeather').click(function () {
        $.get('/weather', function (data) {
            console.log(data)
        })
    })
    $('#btnSum').click(function () {
        let num1 = $('#number1').val()
        let num2 = $('#number2').val()
        let data = { num1, num2 }
        $.get('/adder', data, function (result) {
            $('#result').val(result.result)
            M.updateTextFields()
        })
    })
})