
$("h1"); // document.querySelector("h1");
$("button");// document.querySelectorAll("button")- selects all button

// $("h1").css("color","red");
// console.log($("h1").css("color"));

$("h1").addClass("bigtitle"); // making a class in css to seperate behaviour from styles 

$("h1").text("Bye");
$("button").text("Dont click");

//html is taken into consideration if text was there then the whole thing gets printed
alert("html");
$("button").html("<em>hey</em>");

alert("change link of google");
$("a").attr("href","https://www.yahoo.com/");

alert("event listeners");

$("h1").click(function(){
    $("h1").css("color","purple");
});

//in javascript without js 
// for (var i = 0; i < 5; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function() {
//         document.querySelector("h1").style.color = "purple";
//     });
// }

//with js 
$("button").click(function(){
    $("h1").css("color","purple");
});

$("input").keypress(function(event){
    $("h1").text(event.key);//to chnage h1 text
    console.log(event.key);//to print on console thhe text 
});

// $("h1").on("mouseover",function(){  can use click also instead of mouse
//     $("h1").css("color","red");
// })
