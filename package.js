Package.describe({
    summary: "Waypoints is a jQuery plugin that makes it easy to execute a function whenever you scroll to an element. http://imakewebthings.github.com/jquery-waypoints/"
});

Package.on_use(function (api){
    // Package needs jQuery
    api.use(['jquery'], 'client')

    api.add_files('lib/jquery-waypoints/waypoints.js', 'client'); 
    api.add_files('lib/jquery-waypoints/waypoints.coffee', 'client'); 

    api.add_files('lib/jquery-waypoints/shortcuts/infinite-scroll/waypoints-infinite.js', 'client'); 
    api.add_files('lib/jquery-waypoints/shortcuts/infinite-scroll/waypoints-infinite.coffee', 'client'); 

    api.add_files('lib/jquery-waypoints/shortcuts/sticky-elements/waypoints-sticky.js', 'client'); 
    api.add_files('lib/jquery-waypoints/shortcuts/sticky-elements/waypoints-sticky.coffee', 'client'); 
});