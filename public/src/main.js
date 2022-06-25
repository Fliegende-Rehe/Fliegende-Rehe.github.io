/*global $, jQuery, alert*/
$(document).ready(function() {

    const typed = $(".typed");

    $(function() {
        typed.typed({
            strings: ["Ruslan Abdullin.", "Robotics Engineer.", "Java Programmer.", "Developer.", "Anime Nerd."],
            typeSpeed: 80,
            loop: true,
        });
    });

});