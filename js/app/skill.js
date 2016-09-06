/**
 * Created by i4790k on 06.09.2016.
 */

$(function () {
// validation
    $(".add-skill button").on("click", function (e) {

        var skillName;
        skillName = $("#s_name").val();

        var skillRange;
        skillRange = $("#range").val();

        //valid form
        var skillForm = $("#skills form")[0].checkValidity()
        if (skillForm == true) {
            $('.skills-list').append("<div class='skill' style='width:" + skillRange + "%'>" + skillName + "</div>");
            e.preventDefault();
        }
    })
});

