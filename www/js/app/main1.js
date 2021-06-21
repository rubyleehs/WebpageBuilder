define(function (require)
{
    var $ = require('jquery'),
        lib = require('./lib'),
        controller = require('./controllers/c1'),
        model = require('./models/mDraggable');


    //A fabricated API to show interaction of
    //common and specific pieces.
    controller.setModel(model);
    $(function ()
    {
        var modelArr = $("*[class^='m']");
        console.log(modelArr.length);
        /**
        for (var i = 0; i < modelArr.length; i++)
        {
            
        }
        */

        controller.render(lib.getBody());
    });
});
