define(function ()
{
    class ModelBase
    {
        constructor(modelName)
        {
            this.modelName = modelName;
        }

        getModelName = function ()
        {
            return this.modelName;
        }

        init()
        {
            //This function should be used to add listeners to stuff and set DomElementAttributes.
            console.log("Missing init() in model, likely missing listeners. Please declare in model and override this message");
        }
    }

    return ModelBase;
});
