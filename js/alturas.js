$(document).ready(function() {
    /*altura cajas normales*/
    let ventana_alto = $(window).height();
    /*altura cajas de sobre mi*/
    let ventana_alto2 = ventana_alto/4.3;
    $("main>div").height(ventana_alto);
    $(".izda,.drcha").height(ventana_alto2);
    $(".sobreizda,.sobredrcha").css("max-height", ventana_alto2/3);
    $(".sobreizda,.sobredrcha").css("min-height", ventana_alto2/3);
    $("#sobremi .izda,#sobremi .drcha").height(ventana_alto/2.8);
    $("#mistrabajos .izda a,#mistrabajos .drcha a").height(ventana_alto2/2);
    /*Centrar la caja del ancla*/
    let ventana_centro = $(window).width()/20;
    $(".centro").css("right", ventana_centro);
    $(".centro").css("left", ventana_centro);
    $("#sobremi .drcha img").css("width", "18%");
    let img= $("#sobremi .drcha img").width();
    let img2=  $("#sobremi .drcha img").height();
    $(".pro svg").css("width", img);
    $(".pro svg").css("height",img2);
    $(".drcha .sobredrcha,.drcha .sobreizda").css("margin-top", "2px");

    /*Dispositivos pequeños*/
    if ($(window).height() < "550") {
        $("#sobremi .izda,#sobremi .drcha").css("margin","1px auto");
        $(".sobreizda,.sobredrcha").css("max-height", ventana_alto2/3.5);
        $(".sobreizda,.sobredrcha").css("min-height", ventana_alto2/3.5);
        $(".centro img").css("width", "40px");
        $("#mistrabajos .izda,#mistrabajos .drcha").css("min-width","44.5%");
        $("#mistrabajos .izda,#mistrabajos .drcha").css("margin","2px");
        $("#mistrabajos .izda").css("float","left");
        $("#mistrabajos .drcha").css("float","right");
        $("#mistrabajos .izda a,#mistrabajos .drcha a").height(ventana_alto2/1.6);

    }
    if ($(window).height() < "550" || $(window).width() < "350") {
        $("#sobremi h4").css("margin-bottom", "1%");
        $(".centro2").css("margin-top", "5%");
        $(".pro span").css("font-size", "0.8em");
    }
    /*Tablet*/
    if ($(window).width() >= "768") {
        $("#sobremi .drcha img").css("width", "17%");
        $(".drcha .sobredrcha,.drcha .sobreizda").css("margin-top", "0px");

        $("#sobremi .izda,#sobremi .drcha").height(ventana_alto/2.8);
        $(".sobreizda,.sobredrcha").css("max-height", ventana_alto2/3.2);
        $(".sobreizda,.sobredrcha").css("min-height", ventana_alto2/3.2);
        $("#mistrabajos .izda a,#mistrabajos .drcha a").height(ventana_alto2/2.7);

    }
    /*PC pequeño*/
    if ($(window).width() >= "1024") {
        $(".sobreizda,.sobredrcha").css("max-height", ventana_alto2/2.5);
        $(".sobreizda,.sobredrcha").css("min-height", ventana_alto2/2.5);
        $("#sobremi .izda,#sobremi .drcha").height(ventana_alto/2);
        $("#sobremi .izda,#sobremi .drcha").css("margin-top","5%");
        $("#mistrabajos .izda a,#mistrabajos .drcha a").height(ventana_alto2/3);

    }
});
