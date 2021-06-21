define(function ()
{
    class ModelBase
    {
        constructor(modelName)
        {
            this.modelName = modelName;
            this.modelHtml = "";
        }
        getModelName()
        {
            return this.modelName;
        }

        getModelHtml()
        {
            return this.modelHtml;
        }
        setModelHtml(html)
        {
            this.modelHtml = html;
        }

    }

    return ModelBase;
});
