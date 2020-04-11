let value = 0
let val=0
$("h1").append ("<h2>"+value+"</h2>")
$("#increase").click(() => {
    value = value + 1
    console.log(value)
     if (value === 3 && val!==3) {
        console.log("its 3")
        val = 3
        $('#thediv').append('<img id="theImg" src="./gyula.gif"/>')
        $('#divsecond').append('<img id="theImgsecond" height="200" width="400" src="./bazinga.jpg"/>')}
        $("h2").text(value)
} )
$("#decrease").click(()=>
{
    value=value-1
    $("h2").text(value)
})