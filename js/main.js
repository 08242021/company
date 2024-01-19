$(document).ready(function () {
    $(document).ready(function () {
    
        // Header hover effect
        $(".main-menu").mouseenter(function () {
            $(this).find(".sub-menu").stop().slideDown(200);
        });
    
        $(".main-menu").mouseleave(function () {
            $(this).find(".sub-menu").stop().slideUp(200);
        });
    
        
        // Slider
        var currentSlide = 1;
        var totalSlides = $(".slide").length;
    
        // Clone the first slide and append it to the end
        var firstSlideClone = $(".slide:first-child").clone();
        $(".slider").append(firstSlideClone);
    
        $("#main-slide-nextBtn").click(function () {
            if (currentSlide < totalSlides + 1) {
                currentSlide++;
            } else {
                currentSlide = 2;
                $(".slider").css("transition", "none");
                $(".slider").css("transform", "translateX(0)");
                setTimeout(function () {
                    $(".slider").css("transition", "transform 1s ease-in-out");
                    currentSlide = 2;
                    $("#main-slide-nextBtn").trigger('click');
                }, 0);
            }
            updateSlider();
        });
    
        $("#main-slide-prevBtn").click(function () {
            if (currentSlide > 1) {
                currentSlide--;
            } else {
                currentSlide = totalSlides;
                $(".slider").css("transition", "none");
                $(".slider").css("transform", "translateX(-" + (totalSlides - 1) + "00%)");
                setTimeout(function () {
                    $(".slider").css("transition", "transform 1s ease-in-out");
                    currentSlide = totalSlides - 1;
                    $("#main-slide-prevBtn").trigger('click');
                }, 0);
            }
            updateSlider();
        });
    
        function updateSlider() {
            var translateValue = -100 * (currentSlide - 1) + "%";
            $(".slider").css("transform", "translateX(" + translateValue + ")");
        }
    
        // Automatically switch slides every 2000 milliseconds (2 seconds)
        setInterval(function () {
            $("#main-slide-nextBtn").trigger('click');
        }, 2000);
    });



});

