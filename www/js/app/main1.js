define(function (require)
{
    var $ = require('jquery'),
        lib = require('./lib'),
        controller = require('./controllers/c1'),
        models = [require('./models/MDraggable'), require('./models/MDraggableAcceptor')];

    //It is possible to make it so the classname can be just a list of models lol.
    controller.setModel(models[0]);
    $(function ()
    {
        for (let i = 0; i < models.length; i++)
        {
            let domElements = $(`*[model='${models[i].name}']`);
            for (let ii = 0; ii < domElements.length; ii++)
            {
                let tempModel = new models[i]();
                tempModel.init(domElements[ii]);
            }
        }

        controller.render(lib.getBody());
    });
});
