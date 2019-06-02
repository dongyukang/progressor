let mix = require('laravel-mix');

mix.postCss(
    './src/resources/css/app.css',
    './src/public/css/',
    [
        require('tailwindcss')
    ]
);