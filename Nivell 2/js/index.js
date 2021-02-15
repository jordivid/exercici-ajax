$(document).ready(function() {
    $("#btnAcudit").click(demanarAcudit);
});

function demanarAcudit() {
    $.getJSON("http://api.icndb.com/jokes/random", 
    function(data, status) {
        $("#acudit").html("");
        if(status == "success") {
            if (data.type == "success") {
                $("#acudit").html("<p>" + data.value.joke + "</p>");
            } else {
                error(2);
            }
        } else {
            error(1);
        }
    });
}

function error(err) {
    switch (err) {
        case 1:
            console.log("La petició ajax ha fallat");
            break;
        case 2:
            console.log("El servidor no ha retornat cap acudit");
            break;
    }
}