    $("#date").datepicker();

    $("#sendData").on("click", function () {

        var userData = {
            name: $("#name").val(),
            age: $("#age").val(),
            date: $("#date").val()
        };

        if (userData.name != "" && userData.name.match(/^[a-zA-Z]/) && userData.age != "" && userData.date != "" && userData.age.match(/^[0-9]/)) {
            $("#form").hide("blind");

        }
        $("#form").effect("shake");
    });
