$(document).ready(function(){
    //First Container
    $("<div/>", {
        "appendTo": ".c_one",
        "class": "row"
    });
    $("<div/>", {
        "appendTo": ".row",
        "class": "container_one"
    });
    $("<div/>", {
        "appendTo": ".container_one",
        "class": "inline"
    });
    $("<div/>", {
        "appendTo": ".inline",
        "class": "weather_post article_design_one",
        html: "<p/><p/><hr/>"
    });
    $(".weather_post").find("p").eq(0).html("{{DW1}}").attr({
        "class": "{{IC1}}"
    });
    $(".weather_post").find("p").eq(1).html("{{DW2}}").attr({
        "class": "{{IC2}}"
    });
    $(".weather_post").find("hr").eq(0).attr({
        "class": "{{IC3}}"
    });
    
    //VUE IN ACTION
    //variables
    var descriptionW = ['In Namibia now +52°', 'Oh... The Dog Days, Bro'];
    var identClass = ['heading_four', 'p_w_p','hr_customize'];

    new Vue({
        el: ".c_one",
        data: {
            DW1: descriptionW[0],
            DW2: descriptionW[1],
            IC1: identClass[0],
            IC2: identClass[1],
            IC3: identClass[2]

        }
    });
    
    // SECOND CONTAINER 
    $("<div/>", {
        "appendTo": ".c_two",
        "class": "row"
    });
    $("<div/>", {
        "appendTo": ".row",
        "class": "container_two"
    });
    $("<div/>", {
        "appendTo": ".container_two",
        "class": "inline"
    });
    $("<div/>", {
        "appendTo": ".inline",
        "class": "title_post article_design_two",
        html: "<h1/><h1/><h1/>"
    });
    $(".title_post").find("h1").eq(0).html("{{DPT0}}").attr({
        "class": "{{CDT0}}"
    });
    $(".title_post").find("h1").eq(1).html("{{DPT1}}").attr({
        "class": "{{CDT0}}"
    });
    $(".title_post").find("h1").eq(2).html("{{DPT2}}").attr({
        "class": "{{CDT1}}"
    });
    
    // THIRD CONTAINER NEAR THE SECOND
    $("<div/>", {
        "appendTo": ".inline",
        "class": "title_post_three article_design_three",
        html: "<p>"
    });
    $(".title_post_three").find("p").eq(0).html("{{DPT3}}").attr({
        "class": "{{CDT2}}"
    });
        

       
    /* VUE IN ACTION */
        /* VARIABLES */
            var descriptionPostTwo = ['DeadVlei', 'Sossusvlei', 'Namibia', 'play'];
            var classDescriptionTwo = ['white_title', 'special_title', 'paragraf'];
            var namibiaDes = ['N', 'a', 'm', 'i', 'b', 'i', 'a'];
                /* USING VUE */ 
                    new Vue({
                        el: '.c_two',
                        data: {
                            DPT0: descriptionPostTwo[0],
                            DPT1: descriptionPostTwo[1],
                            DPT2: descriptionPostTwo[2],
                            DPT3: descriptionPostTwo[3],
                            /* SECOND VARIABLE*/
                            CDT0: classDescriptionTwo[0],
                            CDT1: classDescriptionTwo[1],
                            CDT2: classDescriptionTwo[2],
                            /* THIRD VARIABLE*/
                            ND0: namibiaDes[0],
                            ND1: namibiaDes[1],
                            ND2: namibiaDes[2],
                            ND3: namibiaDes[3],
                            ND4: namibiaDes[4],
                            ND5: namibiaDes[5],
                            ND6: namibiaDes[6]
                            
                        }
                    });
});