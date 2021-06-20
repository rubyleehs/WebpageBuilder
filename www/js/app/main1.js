define(function (require)
{
    var $ = require('jquery'),
        lib = require('./lib'),
        controller = require('./controllers/c1'),
        model = require('./models/m1');

    //A fabricated API to show interaction of
    //common and specific pieces.
    controller.setModel(model);
    $(function ()
    {
        controller.render(lib.getBody());
    });
});
