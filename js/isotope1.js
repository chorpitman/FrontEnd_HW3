// external js: isotope.pkgd.js


$(function () {

  // init Isotope
      var $grid = $('.grid').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows',
        stagger: 25
      });
// filter functions
      var filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function() {
          var number = $(this).find('.number').text();
          return parseInt( number, 10 ) > 50;
        },
        // show if name ends with -ium
        ium: function() {
          var name = $(this).find('.name').text();
          return name.match( /ium$/ );
        }
      };
// bind filter button click
      $('.filters-button-group').on( 'click', 'button', function() {
        var filterValue = $( this ).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterFns[ filterValue ] || filterValue;
        $grid.isotope({ filter: filterValue });
      });

// change is-checked class on buttons
      $('.button-group').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'button', function() {
          $buttonGroup.find('.is-checked').removeClass('is-checked');
          $( this ).addClass('is-checked');
        });
      });

// validation
        $(".add-skill button").on("click", function(e) {

//Отменяет событие, если оно отменяемое, без остановки дальнейшего распространения этого события.
            var skillLength = $("#s_name").val();
            var skillRange = $("#range").val();

            if (skillLength.length > 100 ) {
            alert("skillLength length should be less than 100 characters " + skillLength);
            }
            if (skillRange.length > 100) {
            alert(" skillRange length should be less than 100 characters " + skillRange);
            }

            //valid form
            var skillForm = $("#skills form")[0].checkValidity()
            if (skillForm == true) {

                $('.skills-list').append("<div class='skill' style='width:"+skillRange+"%'>"+skillLength+"</div>");
                e.preventDefault();
            }
            })


    }
)
