define(function ()
{
    function ControllerBase(id)
    {
        this.id = id;
    }

    ControllerBase.prototype = {
        setModel: function (model)
        {
            this.model = model;
        },

        render: function (bodyDom)
        {
            let temp = new this.model();
            console.log("temp.ping() : " + temp.ping());
            console.log("temp.getModelName() : " + temp.getModelName());
            bodyDom.prepend('<h1>Controller ' + this.id + ' says "' +
                temp.getModelName() + '"</h1>');

        }
    };

    return ControllerBase;
});
