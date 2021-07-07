define(function (require)
{
    class ModelHandler
    {
        constructor()
        {
            this.models = [require('./MDraggable'), require('./MDraggableAcceptor'), require('./MFakeScreen'), require('./MBox')];
        }

        getModels = () =>
        {
            return this.models;
        }
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
