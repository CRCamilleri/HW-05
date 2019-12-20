$(document).ready(function () {
    $("#1button").on("click", function () {
        $('#9am').each(function () {
            var input = $(this).val()
            var div = $(this).attr("id")
            window.localStorage.setItem(div, input)
            console.log(input)
        console.log(div)

        });
        
        

    });
    
});