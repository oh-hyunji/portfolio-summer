$(document).ready(function(){
    // side menu open
    $('#sideOpenBt').on('click', function(){
        var sideMargin = $('#sideBar').css('margin-right');
        
        if(sideMargin == '0px') {
            $('#wrap').animate({'margin-left':'0'});
            $('#sideBar').animate({'margin-right':'-300px'});
        } else {
            $('#wrap').animate({'margin-left':'-300px'});
            $('#sideBar').animate({'margin-right':'0'});
        }
    });

    // side close Button
    $('#closeBt').on('click', function(){
        $('#wrap').animate({'margin-left':'0'});
        $('#sideBar').animate({'margin-right':'-300px'});
    });

    // window scroll event
     $(window).scroll(function(){
        var scrollT = $(this).scrollTop();
        var boxC = $('#boxC').offset().top; 

        if(scrollT >= 100) { 
            $('#top').css({'background' : '#7bc8d2', 'padding' : '20px 30px'});
            $('#scrollTopBt').fadeIn();
        } else {
            $('#top').css({'background' : 'transparent', 'padding' : '25px 30px'});
            $('#scrollTopBt').fadeOut();
        }

        if(scrollT >= boxC) $("#textBoxD").stop().animate({top: "50%"}, 600, "linear");
        else $("#textBoxD").stop().animate({top: "-100%"}, 600, "linear"); 
    });

    // scroll top button
    $('.scrollTopIcon').on('click', function(){
        $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
        return false;
    });

    // img modal event & img slide event
    var imgNum;
    var msg = ['OCEAN', 'RESORT', 'VOYAGE', 'ROOF', 'BEACH', 'HOTEL']
    $('.boxA').on('click', function(){
        imgNum = $(this).find('img').attr('alt');
        var bigImgUrl = './img/big'+ imgNum +'.jpg';
        var PhotoName = msg[imgNum - 1];

        $('#modal img').attr('src', bigImgUrl)
        $('.photoName').text(PhotoName);
        $('#modal').fadeIn().css('display','flex');
    });

    // modal click - fadeOut
    $('#modal').on('click', function(){
        $('#modal').fadeOut();
    });

    // slide left, right button event
    $('.slideBt').on('click', function(){
        event.stopPropagation();
        
        var slideId = $(this).attr('id');
        if(slideId == 'right') imgNum++;
        else  imgNum--;
        
        if(imgNum > 6) imgNum = 1;
        if(imgNum < 1) imgNum = 6;
        
        var bigImgUrl = './img/big'+ imgNum +'.jpg';
        var PhotoName = msg[imgNum - 1];

        $('#modal img').attr('src', bigImgUrl)
        $('.photoName').text(PhotoName);
    });

    // slide button - wrap resize val hide/show
    var wrapWidth = $('#wrap').width();
    
    $(window).resize(function(){
        wrapWidth = $('#wrap').width();
        $.wrapWidth();
    });

    $.wrapWidth = function() {
        if(wrapWidth < 650){
            $('.slideBt').hide();
        } else {
            $('.slideBt').show();
        }
    }

    $.wrapWidth();

    /*
    var numImg = 1;
    setInterval(function(){
        if(numImg > 4) numImg = 1;

        var front;
        var end;

        switch(numImg){
            case 1:
                front = '.one';
                end = '.three';
            break;
            case 2:
                front = '.two';
                end = '.one';
            break;
            case 3:
                front = '.three';
                end = '.two';
            break;

        }

        $(front).insertAfter(end);

        numImg++;

    },1500);
    */
    
    $('.btBoxA').on('click', function(){
        if($('#layerPop').css('display') == 'none') $('#layerPop').fadeIn();
        else $('#layerPop').fadeOut();
    });
});
