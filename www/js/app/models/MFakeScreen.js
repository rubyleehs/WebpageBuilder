define(['mixwith', './ModelBase', './DraggableAcceptorMixin', './ScalableMixin'], function (mw, ModelBase, DraggableAcceptorMixin, ScalableMixin)
{
    class MFakeScreen extends mw.mix(ModelBase).with(DraggableAcceptorMixin, ScalableMixin) {
        constructor(domElement)
        {
            super("Fake Screen Model", domElement);
        }

        init = function ()
        {
            this.domElement.addEventListener('wheel', this.rescale);
            this.domElement.addEventListener('drop', (event) => { this.drop(event, this.domElement) });
            this.domElement.addEventListener('dragover', (event) => { this.allowDrop(event, this.domElement) });
            this.domElement.setAttribute("style", `transform: scale(1);`);
            this.domElement.setAttribute("tabindex", 0);
        }
    }

    return MFakeScreen;
});


