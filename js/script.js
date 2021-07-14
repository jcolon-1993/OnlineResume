// Place in iife
(function ()
{
  // Variable for window object
  var $window = $(window);
  // Create reference for image.
  var $headshot = $(".headshot");
  // Create reference for links
  var $links = $("#links");
  // Create references for header elements
  var $name = $(".content-wrap").find("h1");
  var $desc = $(".content-wrap").find("h2");
  // Create reference for the children of job details and job summary
  var jobDet = $(".job-details").children();
  var jobSum = $(".job-summary").children();

  // Create reference for icons
  var $icons = $(".contact-list");
  // Create reference for determining how far the user has scrolled down
  var endZone = $icons.offset().top - $window.height();
  // Create reference for determining how far the user has scrolled down pass a certain point
  var endZoneWork = $icons.offset().top - $window.height() - 1200;


  /*
    Use window object for event listener. Event listener executes when page
    loads. Then, anonymous function get executed
  */
  $window.on("load", function()
  {
    // Animate elements in header when page loads
    $links.animate({"marginLeft": "-1500px"}, 1000);
    $name.animate({"left": "0px"}, 1000);
    $desc.animate({"right": "0px"}, 1000);
    // Hide elements for job details when page loads
    jobDet.hide();
    jobSum.hide();

    // Animate and show image when user scrolls down.
    // Uses margin left property and sets time to 1000 milliseconds for animation
    $headshot.animate({"marginLeft": "-1000px"}, 1000);
  });

  /*
  Use window object for event listener. Event listener executes when user scrolls
  down page. Then, anonymous function get executed
  */

  $window.on("scroll", function()
  {
    // If statment used to check if user scrolls down a certain point
    if ( (endZone) < $window.scrollTop())
    {
      // If so, animate icons for 2000 milliseconds
      $icons.animate({"paddingLeft": "-1500px"}, 2000);
    }
    // Otherwise
    else
    {
      // Fade in job details and summary for 1500 milliseconds
        jobDet.fadeIn(1500);
        jobSum.fadeIn(1500);
    }
  });
}());
