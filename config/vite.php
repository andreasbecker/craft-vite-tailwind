<?php

use craft\helpers\App;

return [
    'useDevServer' => App::env('ENVIRONMENT') === 'dev',
    'manifestPath' => '@webroot/dist/manifest.json',
    'devServerPublic' => 'http://localhost:3000/',
    'serverPublic' => App::env('PRIMARY_SITE_URL') . '/dist/',
    'errorEntry' => '/src/js/app.js',
    'cacheKeySuffix' => '',
    'devServerInternal' => '',
    'checkDevServer' => false,
];
