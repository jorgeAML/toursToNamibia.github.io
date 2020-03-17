/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
   $("<div/>", {
       "appendTo": ".c_three",
       "class": "container_three_info"
   });
   $("<div/>", {
       "appendTo": ".container_three_info",
       "class": "row_cont_three"
   });
   $("<div/>", {
       "appendTo": ".row_cont_three",
       "class": "ctd_info",
       html: "<h5/><h3/>"
   });
   $(".ctd_info").find("h5").eq(0).html("{{DC1}}").attr({
      "class": "{{CD1}}" 
   });
   $(".ctd_info").find("h3").eq(0).html("{{DC2}}").attr({
       "class": "{{CD2}}"
   });
   
   //VUE IN ACTION
   //variables
   var description3 = ["SET FOOT IN THE WORLD'S OLDEST DESERT", "3 Days Sossusvlei Camping"];
   var classDesc = ["dessert1", "dessert2"];
   
   new Vue({
       el: ".c_three",
       data: {
           DC1: description3[0],
           DC2: description3[1],
           CD1: classDesc[0],
           CD2: classDesc[1]
           
       }
   });
   //****************
   //POST FOR COLUMNS; THE FIRST ONE IS THE LAST ONE
   //****************
   
   $("<div/>", {
       "appendTo": ".c_four",
       "class": "post_four"
   });
   $("<div/>", {
       "appendTo": ".post_four",
       "class": "row_cont_four"
   });
   $("<div/>", {
       "appendTo": ".row_cont_four",
       "class": "column"
   });
   $("<div/>", {
       "appendTo": ".column",
       "class": "hoja_post"
   });
   $("<div/>", {
       "appendTo": ".hoja_post",
       "class": "inlinediv"
   });
   $("<div/>", {
       "appendTo": ".inlinediv",
       "class": "first_post_left c1",
       html: "<h4/><p/><p/>"
   });
   $(".first_post_left").find("h4").eq(0).html("{{DV1}}").attr({
       "class": "{{DQ1}}"
   });
   $(".c1").find("p").eq(0).html("{{DD2}}").attr({
       "class": "{{DQ2}}"
   });
   $(".c1").find("p").eq(1).html("{{DE3}}").attr({
       "class": "{{DQ2}}"
   });
   
   var descriptionFour = ['Departure', 'This tour depart on every', 'Tuesday from Windhoek'];
   var classDescFour = ['description_tittle', 'description_paragraf', 'special_ho'];
   
   new Vue({
       el: ".c_four",
       data: {
           DV1: descriptionFour[0],
           DD2: descriptionFour[1],
           DE3: descriptionFour[2],
           DQ1: classDescFour[0],
           DQ2: classDescFour[1],
           DQ3: classDescFour[2]
       }
   });
   
   //**********
   //CENTER TOP
   //**********
   $("<div/>", {
       "appendTo": ".inlinediv",
       "class": "first_post_center c2",
       html: "<h4/><p/><p/>"
   });
   $(".first_post_center").find("h4").eq(0).html("{{DF0}}").attr({
       "class": "{{DF3}}"
   });
   $(".c2").find("p").eq(0).html("{{DF1}}").attr({
       "class": "{{DF4}}"
   });
   $(".c2").find("p").eq(1).html("{{DF2}}").attr({
       "class": "{{DF4}}"
   });
   
   var descriptionFourCenter = ['Passengers', 'No minimum & a maximum', 'of 14 travelers per tour'];
   var classFourCenter = ['description_tittle', 'description_paragraf'];
   new Vue ({
       el: ".c_four",
       data: {
           DF0: descriptionFourCenter[0],
           DF1: descriptionFourCenter[1],
           DF2: descriptionFourCenter[2],
           DF3: classFourCenter[0],
           DF4: classFourCenter[1]
       }
   });
   
   //***************************
   //THE FIRST POST THE LEFT ONE
   //***************************
   
   $("<div/>", {
       "appendTo": ".inlinediv",
       "class": "first_post_right c3",
       html: "<h4/><p/><p/>"
   });
   $(".c3").find("h4").eq(0).html("{{DF5}}").attr({
       "class": "{{DF8}}"
   });
   $(".c3").find("p").eq(0).html("{{DF6}}").attr({
       "class": "{{DF9}}"
   });
   $(".c3").find("p").eq(1).html("{{DF7}}").attr({
       "class": "{{DF9}}"
   });
   
   var descriptionFourRight = ['Vehicle', '1-4 guests: Toyota Quantum', '5-14 guests: Toyota Dina truck'];
   var classDescriptionRight = ["description_tittle", 'description_paragraf'];
      
   new Vue({
       el: ".c_four",
       data: {
           DF5: descriptionFourRight[0],
           DF6: descriptionFourRight[1],
           DF7: descriptionFourRight[2],
           DF8: classDescriptionRight[0],
           DF9: classDescriptionRight[1]
       }
   });
   
   //*********************
   //SECOND ROW OF COLUMNS
   //*********************
   
   $("<div/>", {
       "appendTo": ".column",
       "class": "hoja_post"
   });
   $("<div/>", {
       "appendTo": ".hoja_post",
       "class": "inlinediv"
   });
   $("<div/>", {
       "appendTo": ".inlinediv",
       "class": "second_post_left c4",
       html: "<h4/><p/><p/>"
   });
   $(".c4").find("h4").eq(0).html("{{DF10}}").attr({
       "class": "{{DF13}}"
   });
   $(".c4").find("p").eq(0).html("{{DF11}}").attr({
       "class": "{{DF14}}"
   });
   $(".c4").find("p").eq(1).html("{{DF12}}").attr({
       "class": "{{DF14}}"
   });
   
   var secondDescOne = ['Return', 'Back to Windhoek on Thursday', 'late afternoon/early evening'];
   var secondClassOne = ['description_tittle', 'description_paragraf'];
   
   new Vue({
       el: ".c_four",
       data: {
           DF10: secondDescOne[0],
           DF11: secondDescOne[1],
           DF12: secondDescOne[2],
           DF13: secondClassOne[0],
           DF14: secondClassOne[1]
       }
   });
   
   //*************************
   //SECOND POST IN THE CENTER
   //*************************
   
   $("<div/>", {
       "appendTo": ".inlinediv",
       "class": "second_post_center c5",
       html: "<h4/><p/><p/>"
   });
   $(".c5").find("h4").eq(0).html("{{DF15}}").attr({
       "class": "{{DF18}}"
   });
   $(".c5").find("p").eq(0).html("{{DF16}}").attr({
       "class": "{{DF19}}"
   });
   $(".c5").find("p").eq(1).html("{{DF17}}").attr({
       "class": "{{DF19}}"
   });
   
   var secondDescTwo = ['Style', 'Camping safari with limited', 'participation'];
   var secondClassTwo = ['description_tittle', 'description_paragraf'];
   
   new Vue({
       el: ".c_four",
       data: {
           DF15: secondDescTwo[0],
           DF16: secondDescTwo[1],
           DF17: secondDescTwo[2],
           DF18: secondClassTwo[0],
           DF19: secondClassTwo[1]
       }
   });
   
   //***********************
   //THIRD POST IN THE RIGHT
   //***********************
   
   $("<div/>", {
       "appendTo": ".inlinediv",
       "class": "second_post_right c6",
       html: "<h4/><p/><p/>"
   });
   $(".c6").find("h4").eq(0).html("{{DF20}}").attr({
       "class": "{{DF23}}"
   });
   $(".c6").find("p").eq(0).html("{{DF21}}").attr({
       "class": "{{DF24}}"
   });
   $(".c6").find("p").eq(1).html("{{DF22}}").attr({
       "class": "{{DF24}}"
   });
   
   var secondDescThird = ['Places', 'Deadvlei, Dune 45, Sossusvlei,', 'Sesriem Canyon'];
   var secondClassThird = ['description_tittle', 'description_paragraf'];
   
   new Vue({
       el: ".c_four",
       data: {
           DF20: secondDescThird[0],
           DF21: secondDescThird[1],
           DF22: secondDescThird[2],
           DF23: secondClassThird[0],
           DF24: secondClassThird[1]
       }
   });
   
   //*******************
   // CHECK AVAILABILITY 
   //*******************
   $("<div/>", {
       "appendTo": ".column",
       "class": "hoja_post"
   });
   $("<div/>", {
       "appendTo": ".hoja_post",
       "class": "inlinediv"
   });
   $("<div/>", {
       "appendTo": ".inlinediv",
       "class": "third_post_left c7",
       html: "<h4/>"
   });
   $(".c7").find("h4").eq(0).html(" ");
   
   // CENTER AVAILABILITY
   
   $("<div/>", {
       "appendTo": ".inlinediv",
       "class": "third_post_center c8",
       html: "<h4/>"
   });
   $(".c8").find("h4").eq(0).html(" ");
   
   // LEFT AVAILABILITY
   
   $("<div/>", {
       "appendTo": ".inlinediv",
       "class": "third_post_right c9",
       html: "<a/>"
   });
   $(".c9").find("a").eq(0).html("{{DF25}} <i class='material-icons md-14 md-light arrow'> arrow_forward</i>").attr({
       "class": "{{DF26}}",
       "href": "#"
   }).css({
       "color": "#fffbf0",
       "font-family": "'Cabin Condensed', sans-serif",
       "text-decoration": "none"
       
   });
   var arrow = '<i class="material-icons md-18 md-light"> arrow_forward</i>';
   var checkAvailability = ["CHECK AVAILABILITY"];
   var checkClass = ["check_availability"];
   
   new Vue({
       el: ".c_four",
       data: {
           DF25: checkAvailability[0],
           DF26: checkClass[0],
           DF27: arrow
       }
   });
   
   
});


