//ANIMATIONS
AOS.init();

//SCREEN WIDTH ATTR CHANGES
if($(window).width() < 360){
    $("header img").attr("src", "images/i5logo.png");
}
if ($(window).width() < 768){
    $("#howToPlay .cardCol").attr("data-aos-delay", "0");
    $(".reviewBox").attr("data-aos-delay", "0");
}

//REVIEWS DATA
const reviews = [
    {
        name: "Jiminy Cricket",
        comment: "Amazing prize! Didn't even wish upon a star! 11/10",
        location: "Italy"
    },
    {
        name: "Drizella Tremaine",
        comment: "Cinders may have won Prince Charming but who needs love when you can win a range rover for £15!",
        location: "France"
    },
    {
        name: "Winnie-the-Pooh",
        comment: "Oh, bother...I will have to buy a bigger t-shirt! I won a year's supply of honeypots with a £5 ticket",
        location: "Hundred Acre Wood, England"
    },
    {
        name: "Jasmine",
        comment: "So easy to play! I can finally get around in style with my brand new Audi, and to be honest I was only polite about the carpet, I'm scared of heights!",
        location: "Agrabah"
    },
    {
        name: "Fa Mulan",
        comment: "I won a well needed spa weekend! I'll never pass for a perfect bride looking like this.",
        location: "China"
    },
    {
        name: "Hercules",
        comment: "♫ I have won a booaat, I can go the distance! ♫",
        location: "Greece"
    },
    {
        name: "Alice",
        comment: "I won a beautiful china tea set with vouchers for afternoon tea. Can't wait to let Hatter know! Although, the tea set might be safer if I keep that to myself",
        location: "Wonderland, Down the Rabbit Hole"
    }
];

//REVIEWS CAROUSEL
var index = 1;
setInterval(function(){
    $("#reviewComment").html(reviews[index].comment);
    $("#reviewAuthor").html(reviews[index].name);
    $("#reviewLocation").html(reviews[index].location);
    index++;
    if (index === reviews.length) {
        index = 0;
    }
}, 6000);  

//BACK BUTTON
function goBack() {
    window.history.back();
  } 
  
//COMP QUESTION
$("#compChoice").on("click", function(){
    $(this).toggleClass("selectedAnswer");
    $(this).toggleClass("btn-outline-light");
})
