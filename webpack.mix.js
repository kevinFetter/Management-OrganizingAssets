const mix = require('laravel-mix');

mix
    //Reference to site - client
    .styles([
        'resources/views/site/css/reset.css',
        'resources/views/site/css/style.css'
    ],  'public/site/css/style.css')  

    .scripts([
        'resources/views/site/js/script.js'
    ],  'public/site/js/script.js')

    .styles([
        'resources/views/admin/css/style.css'   
    ],  'public/admin/css/style.css')

    .scripts([
        'resources/views/admin/js/script.js'
    ],  'public/admin/js/script.js')

    .verion(); //solve problens with Hash 
    
