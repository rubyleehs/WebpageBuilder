define(function ()
{
    class ModelBase
    {
        constructor(modelName, domElement)
        {
            this.modelName = modelName;
            this.domElement = domElement;
        }

        getModelName = function ()
        {
            return this.modelName;
        }

        getDomElement = function ()
        {
            return this.domElement;
        }

        init = function ()
        {
            //This function should be used to add listeners to stuff and set DomElementAttributes.
            console.log("Missing init() in model, likely missing listeners. Please declare in model and override this message");
        }
    }

    return ModelBase;
});
