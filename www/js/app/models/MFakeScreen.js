define(['mixwith', './ModelBase', './DraggableAcceptorMixin', './ScalableMixin'], function (mw, ModelBase, DraggableAcceptorMixin, ScalableMixin)
{
    class MFakeScreen extends mw.mix(ModelBase).with(DraggableAcceptorMixin, ScalableMixin) {
        constructor(domElement)
        {
            super("Fake Screen Model", domElement);
        }

        init = function ()
        {
            $(window).on('resize', (event) => { this.rescale(event, this.domElement) });
            this.domElement.addEventListener('drop', (event) => { this.drop(event, this.domElement) });
            this.domElement.addEventListener('dragover', this.allowDrop);
            this.domElement.setAttribute("style", `transform: scale(${this.calculateZoomRatio()});`);
            this.domElement.setAttribute("tabindex", 0);
        }
    }

    return MFakeScreen;
});


