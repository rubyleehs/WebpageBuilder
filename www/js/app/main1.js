define(function (require)
{
    var $ = require('jquery'),
        lib = require('./lib'),
        controller = require('./controllers/c1'),
        modelHandler = new (require('./models/ModelHandler'));

    //It is possible to make it so DOM elements have multiple models attached lol
    models = modelHandler.getModels();
    controller.setModel(models[0]);
    $(function ()
    {
        for (let i = 0; i < models.length; i++)
        {
            let domElements = $(`*[model='${models[i].name}']`);
            for (let ii = 0; ii < domElements.length; ii++)
            {
                domElements[ii].setAttribute("original-copy", true) //check if works
                new models[i]().init($(domElements[ii]));
            }
        }

        controller.render(lib.getBody());
    });
});
