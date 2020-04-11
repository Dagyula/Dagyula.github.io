let value = 0
$("h1").append ("<h2>"+value+"</h2>")
$("#increase").click(() => {
    value = value + 1
    console.log(value)
    $("h2").text(value)
} )
$("#decrease").click(()=>
{
    value=value-1
    $("h2").text(value)
})