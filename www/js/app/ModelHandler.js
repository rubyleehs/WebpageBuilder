define(function (require)
{
    class ModelHandler
    {
        constructor()
        {
            this.models = [require('./models/MDraggable'), require('./models/MDraggableAcceptor'), require('./models/MFakeScreen'), require('./models/MBox')];
        }

        getModels = () =>
        {
            return this.models;
        };
        getModel = (name) =>
        {
            for (let i = 0; i < this.models.length; i++)
            {
                if (this.models[i].name == name) return models[i];
            }
            return null;
        }
    }
    return ModelHandler;
});
