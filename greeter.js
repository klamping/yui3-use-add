YUI.add('Greeter', function (Y) {
    Y.Greet = function (cfg) {
        Y.one(cfg.srcNode).on('click', function (ev) {
            alert("Hello " + cfg.name);
        });
    };
});