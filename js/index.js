$(document).ready(function(){
    //Background  Change and Text Transition Change Start
    var backgrounds = ['url(images/code_hero.jpg) no-repeat', 'url(images/data_hero.jpg) no-repeat'];
    var current = 0;
    function changeBackgroundandText() {
        $('.topsection').css('background',backgrounds[current = ++current % backgrounds.length]);
        $('.typeofclass').each(function () {
            $(this).insertBefore($(this).prev('.typeofclass'));
        });
        setTimeout(function() {
            changeBackgroundandText();    
        }, 5000);
    }
    setTimeout(function() {
        changeBackgroundandText();    
    }, 5000);
    $('.topsection').css('background', backgrounds[0]);
    //Background  Change and Text Transition Change Start
    
    // Parallax Bg Start
    function parallaxIt() {
        // create variables
        var $fwindow = $(window);
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        var $contents = [];
        var $backgrounds = [];

        // for each of content parallax element
        $('[data-type="content"]').each(function(index, e) {
            var $contentObj = $(this);

            $contentObj.__speed = ($contentObj.data('speed') || 1);
            $contentObj.__fgOffset = $contentObj.offset().top;
            $contents.push($contentObj);
        });

        // for each of background parallax element
        $('[data-type="background"]').each(function() {
            var $backgroundObj = $(this);

            $backgroundObj.__speed = ($backgroundObj.data('speed') || 1);
            $backgroundObj.__fgOffset = $backgroundObj.offset().top;
            $backgrounds.push($backgroundObj);
        });

        // update positions
        $fwindow.on('scroll resize', function() {
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            $contents.forEach(function($contentObj) {
                var yPos = $contentObj.__fgOffset - scrollTop / $contentObj.__speed;

                $contentObj.css('top', yPos);
            })

            $backgrounds.forEach(function($backgroundObj) {
                var yPos = -((scrollTop - $backgroundObj.__fgOffset) / $backgroundObj.__speed);

                $backgroundObj.css({
                    backgroundPosition: '20% ' + yPos + 'px'
                });
            });
        });

        // triggers winodw scroll for refresh
        $fwindow.trigger('scroll');
    };

    parallaxIt();
    // Parallax Bg End
});

//Angular to read JSON Start
var app = angular.module('trilogyApp', []);
app.controller('faqsController', function ($scope, $http) {
    $http.get('js/faqs.json').success(function(data) {
        $scope.faqs = data;
 
    });

});
//Angular to read JSON End

$(document).ready(function(){
//Faqs Toggle Start
    setTimeout(function() {
        $('.faqswrapper .question').click(function(e){
            $(this).toggleClass('current');
            var onetoggle = $(this).next('.answer');
            $(".faqswrapper .answer").not(onetoggle).slideUp();
            $(".faqswrapper .answer").not(onetoggle).siblings('.faqswrapper .question').removeClass('current');
            onetoggle.slideToggle('700');
            e.preventDefault();
        });
    }, 600);    
});    

//Faqs Toggle End
