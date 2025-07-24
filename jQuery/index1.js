
// $("button").on("click",function(){
//     $("h1").hide(); //hide or unhide b
// }); 

// alert("1");
// $("button").on("click",function(){
//     $("h1").slideToggle(); //slideUp -down
// });

$("button").on("click",function(){
        $("h1").slideUp().slideDown().animate({opacity:0.5}); 
    });