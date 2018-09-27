function topFunction() { document.body.scrollTop = 0, document.documentElement.scrollTop = 0 }

function openNav() { document.getElementById("myNav").style.display = "block" }

function closeNav() { document.getElementById("myNav").style.display = "none" }
$(document).ready(function() { setTimeout(function() { $("body").addClass("loaded") }, 1e3) }), $(function() {
    $("#myNav").click(function() {
        $('#myNav').hide(250);
    });


    var e = $("#play-stop"),
        o = document.getElementById("playi"),
        c = document.getElementById("player"),
        s = $("#carouselHome"),
        l = $("#slide-stop"),
        t = document.getElementById("slidei");
    sflag = 0, e.click(function() { c.paused ? (c.play(), o.src = "img/icons/pause.svg") : (c.pause(), o.src = "img/icons/music.svg") }), l.click(function() { 0 == sflag ? (s.carousel("pause"), t.src = "img/icons/repeat.svg", sflag = 1) : (s.carousel("cycle"), t.src = "img/icons/x.svg", sflag = 0) })
}), $(document).on("click", "#expand", function() { $("#playi").toggle(), $("#slidei").toggle(), $("#share").toggle(), $(".navbar").toggle(), $(".carousel-control-prev").toggle(), $(".carousel-control-next").toggle(), $(".carousel-indicators").toggle(), $(".carousel-caption").toggle(), $("#expandi").toggleClass("color"); var e = $(".carousel-image"); "white" === $(".expandi").css("color") ? (alert("beyaz"), e.css({ color: "rgb(37, 37, 212)" })) : e.css({ color: "white" }), "1" === e.css("opacity") ? e.css({ opacity: "0.5" }) : e.css({ opacity: "1" }) });