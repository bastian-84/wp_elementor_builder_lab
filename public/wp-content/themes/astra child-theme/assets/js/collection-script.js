(function( $ ) {

   'use strict';   

    /* All of the code for your public-facing JavaScript source
    * should reside in this file.
    * Note: It has been assumed you will write jQuery code here, so the
    * $ function reference has been prepared for usage within the scope
    * of this function.
    * This enables you to define handlers, for when the DOM is ready:
    * $(function() {
    * });
    * When the window is loaded:
    * $( window ).load(function() {
    * });
    * ...and/or other possibilities.
    * Ideally, it is not considered best practise to attach more than a
    * single DOM-ready or window-load handler for a particular page.
    * Although scripts in the WordPress core, Plugins and Themes may be
    * practising this, we should strive to set a better example in our own work.
    * 
    */
    
    $(document).ready(function(){ 
        if (window.console) console.log('test 1');


        /* da.dev Bsp. */
          $(function() {
            var headerContainer = $(".header-container");
            $(window).scroll(function() {    
                var scroll = $(window).scrollTop();
            
                if (scroll >= 200) {
                    headerContainer.removeClass('header-container').addClass("header-container-custom");
                } else {
                    headerContainer.removeClass("header-container-scrolled").addClass('header-container');
                }
            });
        }); 
        /* ./ da.dev Bsp. */

      }); 
})( jQuery );