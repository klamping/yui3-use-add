YUI.add('greeter', function (Y) {
    Y.greet = function (cfg) {
        alert("Hello " + cfg.name);
    };
});