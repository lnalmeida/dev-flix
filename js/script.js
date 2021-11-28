$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

$(".btn").on("click", function(){
    $(".btn").toggleClass("close-btn");
    $(".menu").toggleClass("open-menu");
    if($(".btn").hasClass("close-btn")){
        $(".buttons").css("z-index", -1);
    } else {
        $(".buttons").css("z-index", 1);
    }
  });