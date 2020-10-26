$(document).ready(function () {
  
    $('#addition').click(function () {
        var number1 = $('#num1').val()
        var number2 = $('#num2').val()
        var numbers = { 
            num1: number1, 
            num2: number2 }
        
        $.get('/adder', numbers, function (result) {
            $('#result').val(result)
            M.updateTextFields()
        })
    })
})