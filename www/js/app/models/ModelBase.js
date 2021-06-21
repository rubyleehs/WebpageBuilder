define(function ()
{
    class ModelBase
    {
        constructor(modelName)
        {
            this.modelName = modelName;
            this.modelHtml = "";
        }

        getModelName = function ()
        {
            return this.modelName;
        }
        getModelHtml = function ()
        {
            return this.modelHtml;
        }
        setModelHtml = function (html)
        {
            this.modelHtml = html;
        }
    }

    return ModelBase;
});
