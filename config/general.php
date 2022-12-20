<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see \craft\config\GeneralConfig
 */

use craft\helpers\App;

$isDev = App::env('CRAFT_ENVIRONMENT') === 'dev';
$isProd = App::env('CRAFT_ENVIRONMENT') === 'production';

$__headers__ = [];

// @see http://php.net/manual/de/function.getallheaders.php#84262
if (function_exists('getallheaders')) {
    $__headers__ = getallheaders();
}
else {
    foreach ($_SERVER as $name => $value) {
        if (substr($name, 0, 5) == 'HTTP_') {
            $__headers__[str_replace(' ', '-', ucwords(strtolower(str_replace('_', ' ', substr($name, 5)))))] = $value;
        }
    }
}

$__proto__ = 'http:';
if (isset($_SERVER['HTTPS']) && !empty($_SERVER['HTTPS'])) {
    $__proto__ = 'https:';
}

$__host__ = !empty($__headers__['Host']) ? $__headers__['Host'] : $__headers__['host'];
$__host__ = '//' . $__host__ . '/';

return [
    // Default Week Start Day (0 = Sunday, 1 = Monday...)
    'defaultWeekStartDay' => 1,

    // Whether generated URLs should omit "index.php"
    'omitScriptNameInUrls' => true,

    'limitAutoSlugsToAscii' => true,

    // The URI segment that tells Craft to load the control panel
    'cpTrigger' => App::env('CP_TRIGGER') ?: 'admin',

    // The secure key Craft will use for hashing and encrypting data
    'securityKey' => App::env('SECURITY_KEY'),

    // Whether Dev Mode should be enabled (see https://craftcms.com/guides/what-dev-mode-does)
    'devMode' => $isDev,

    // Whether administrative changes should be allowed
    'allowAdminChanges' => $isDev,

    // Whether crawlers should be allowed to index pages and following links
    'disallowRobots' => !$isProd,

    'aliases' => [
        '@basePath' => $_SERVER['DOCUMENT_ROOT'] . DIRECTORY_SEPARATOR,
        '@baseUrl' => $__proto__ . $__host__,
        '@uploadsUrl' => '@baseUrl/uploads',
        '@web' => App::env('PRIMARY_SITE_URL')
    ],
];
