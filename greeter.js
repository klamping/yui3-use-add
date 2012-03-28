YUI.add('Greeter_js', function (Y) {
    Y.Greet = function (cfg) {
        Y.one(cfg.srcNode).on('click', function (ev) {
            alert("Hello " + cfg.name);
        });
    };
}, '1.0', {requires:['node', 'event', 'Greeter_css']});