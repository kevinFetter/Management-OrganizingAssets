const mix = require('laravel-mix');


mix.styles([
    'resources/views/site/css/reset.css',
    'resources/views/site/css/style.css'
],  
    'public/site/css/style.css')  
    .scripts([
        'resources/views/site/js/script.js'
    ],  'public/site/js/script.js')
    .version(); //solve problens with Hash 


