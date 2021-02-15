$(document).ready(function() {
    $("#btnAcudit").click(demanarAcudit);
});

function demanarAcudit() {
    fetch("http://api.icndb.com/jokes/random")
    .then(function(response) {
        if(response.ok) {
            response.json().then(data => $("#acudit").html("<p>" + data.value.joke + "</p>"));
        } else {
            $("#acudit").html("");
            console.log("La petició fetch ha fallat");
        }
    })
}