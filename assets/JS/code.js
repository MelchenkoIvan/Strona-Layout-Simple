function openMenu() {
    document.getElementById("sidebar").classList.toggle('active');
    document.getElementById("rotate").classList.toggle('active');
    document.getElementById("textMenu").classList.toggle('active');
};
var x = document.getElementById("search_input");
x.style.display = "none";

function search() {
    if (x.style.display === "block") {
        x.style.display = "none";
    }
    else if (x.style.display === "none") {
        x.style.display = "block";
    }
}
var boo = true;

function ColorSliderItem(clicked_id) {

    document.getElementById("img1").style.borderColor = "#fff";
    document.getElementById("img2").style.borderColor = "#fff";
    document.getElementById("img3").style.borderColor = "#fff";
    document.getElementById("img4").style.borderColor = "#fff";
    var im = document.getElementById(clicked_id);
    document.getElementById("intro").classList.remove('activeimg1','activeimg2','activeimg3','activeimg4');
    document.getElementById("intro").classList.add('active' + clicked_id);
    im.style.borderColor = "#023a5c";

}

//const windowInnerWidth = window.innerWidth;


$(document).ready(function(){



    $('.slider_').slick({

        adaptiveHeight:true,
        waitForAnimate:true,
        slidesToShow:4,
        slidesToScroll:1,
        responsive: [
            {
                breakpoint: 720,
                settings: {
                    adaptiveHeight:true,
                    waitForAnimate:true,
                    slidesToShow:1,
                    slidesToScroll:1
                  }
            }

        ]


    });
    $('.slider_footer').slick({

        adaptiveHeight:true,
        waitForAnimate:true,
        slidesToShow:5,
        slidesToScroll:1,
        responsive: [
            {
                breakpoint: 720,
                settings: {
                    adaptiveHeight:true,
                    waitForAnimate:true,
                    slidesToShow:1,
                    slidesToScroll:1
                  }
            }

        ]

    });

    var uns;
    var sli;
    function scrwid(){
        var width = screen.width;
        if(width > 720 && uns != 1){

                uns = 1;
                sli = 0;
                $('.slider_kont_tel').slick('unslick');





        }
        if(width<720 && sli != 1){
                sli = 1;
                uns = 0;
                $('.slider_kont_tel').slick({
                     adaptiveHeight:true,
                     waitForAnimate:true,
                     slidesToShow:1,
                     slidesToScroll:1,
                     mobileFirst:true});


        }
    }

    setInterval(scrwid,100);





    $('.slider_320px').slick({

        adaptiveHeight:true,
        waitForAnimate:true,
        slidesToShow:1,
        slidesToScroll:1,

    });


});



















