$(document).ready(function () {
    $('.test').click(function () {

        try{
            $('.test').get(5);
        }catch(e){
            console.log(e);
        }

    });
});