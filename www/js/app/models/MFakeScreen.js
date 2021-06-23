define(['mixwith', './ModelBase', './ScalableMixin'], function (mw, ModelBase, ScalableMixin)
{
    class MFakeScreen extends mw.mix(ModelBase).with(ScalableMixin) {
        constructor(domElement)
        {
            super("Fake Screen Model", domElement);
        }

        init = function ()
        {
            $(window).on('resize', (event) => { this.rescale(event, this.domElement) });
            this.domElement.setAttribute("style", "scale(1.00);");
        }
    }

    return MFakeScreen;
});


