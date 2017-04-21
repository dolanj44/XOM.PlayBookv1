/**
    Describes a set of environmental variables which
    can be injected into the app at runtime.
*/
(function (window) {
    window.__env = window.__env || {};

    // API url
    window.__env.apiUrl = 'http://localhost:52548';
    
    // Indicates whether or not the $log.debug values
    // will be sent to the console. When not enabled,
    // no debug language will be sent to the console.
    window.__env.enableDebug = true;
}(this));