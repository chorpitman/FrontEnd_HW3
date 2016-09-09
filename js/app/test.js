/**
 * Created by i4790k on 06.09.2016.
 */


 $(function () {
    database.ref('education')
    .once('value')
    .then(function(vals) {

        vals.val().forEach (function(item) {
                $("#education .education-wrapper").append(educationDiv(item))
            }
        )

    })
 });

 function educationDiv(educationItem) {
    return "<article class='education'><div class='education-year'><ul><li><h4>"+educationItem.date+
    "</h4></li></ul></div><div class='education-history'><h4>"+educationItem.title+"</h4>"+
    "<p>"+educationItem.someText+"</p></div></article>"

 }