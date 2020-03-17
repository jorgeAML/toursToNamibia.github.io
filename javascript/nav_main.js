$(document).ready(function (){
    
    $("<img>", {
        "appendTo": ".nav",
        "class": "img-portrait",
        "src": "images/portrait.jpg"
    });
    
    //ERROR HANDLING 
    
    $(".img-portrait").on("error", function(){
        alert("Handler for error() called");
    }).attr("src", "images/portrait.jpg");
    
    
    $("<div/>",{
        "appendTo": ".nav",
        "class": "navbar",
        "html": "<div/><div/><nav><div/><div/><div/><div/><div/><div/><div/></nav>"
    });
    $(".navbar").find("nav").eq(0).attr({
        "class": "{{cFN0}}"
    });
    $(".navbar").find('div').eq(0).html("<a class='{{cFN5}}' href='{{lFN0}}'>{{dN0}}</a>").attr({
        "class": '{{cFN1}} {{cFN2}}'
    });
    $(".navbar").find("div").eq(2).html("<a class='{{cFN6}}' href='{{lFN1}}'>{{dN1}}</a>").attr({
        "class": "{{cFN1}} {{cFN3}}"
    });
    $(".navbar").find("div").eq(3).html("<a class='{{cFN6}}' class='{{}}' href='{{lFN2}}'>{{dN2}}</a>").attr({
        "class": "{{cFN1}} {{cFN3}}"
    });
    $(".navbar").find("div").eq(4).html("<a class='{{cFN6}}' href='{{lFN3}}'>{{dN3}}</a>").attr({
        "class": "{{cFN1}} {{cFN3}}"
    });
    $(".navbar").find("div").eq(5).html("<a class='{{cFN6}}' href='{{lFN4}}'>{{dN4}}</a>").attr({
        "class": "{{cFN1}} {{cFN3}}"
    });
    $(".navbar").find("div").eq(6).html("<a class='{{cFN6}}' href='{{lFN5}}'>{{dN5}}</a>").attr({
        "class": "{{cFN1}} {{cFN3}}"
    });
    $(".navbar").find("div").eq(1).html("<i class='material-icons md-18 md-light'>more_vert</i>").attr({
        "class": "{{cFN1}} {{cFN3}} {{cFN4}}"
    });
    //  VARIABLES FOR VUE
    var descriptionNav = ["BantuTours", "OUR DESTINATIONS", "SELF DRIVE", "GUIDE SAFARIS", "DAYS TOURS", "CONTACTS", '$$'];
    var linksForNav = ['#', '#', '#', '#', '#', '#'];
    var classesForNav = ['navbar_items', 'navbar_link', 'font_fredoka', 'font_cabin', 'navbar-link-toggle', 'link1', 'link2'];
    //  VUE IN ACTION
    new Vue({
        el: ".nav",
        data: {
            dN0: descriptionNav[0],
            dN1: descriptionNav[1],
            dN2: descriptionNav[2],
            dN3: descriptionNav[3],
            dN4: descriptionNav[4],
            dN5: descriptionNav[5],
            dN6: descriptionNav[6],

            lFN0: linksForNav[0],
            lFN1: linksForNav[1],
            lFN2: linksForNav[2],
            lFN3: linksForNav[3],
            lFN4: linksForNav[4],
            lFN5: linksForNav[5],
            lFN6: linksForNav[6],

            cFN0: classesForNav[0],
            cFN1: classesForNav[1],
            cFN2: classesForNav[2],
            cFN3: classesForNav[3],
            cFN4: classesForNav[4],
            cFN5: classesForNav[5],
            cFN6: classesForNav[6],
        }
    });
    // language=JQuery-CSS
    $('.navbar-link-toggle').click(function () {
        $('.navbar_items').slideToggle(800);
    });
    $('.navbar_items').click(function () {
        console.log('The slideToggle is working well');
    });



});