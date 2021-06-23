define(['mixwith', './ModelBase', './DraggableAcceptorMixin'], function (mw, ModelBase, DraggableAcceptorMixin)
{
    class MDraggableAcceptor extends mw.mix(ModelBase).with(DraggableAcceptorMixin) {
        constructor(domElement)
        {
            super("Draggable Acceptor Model", domElement);
        }

        init = function ()
        {
            this.domElement.addEventListener('drop', (event) => { this.drop(event, this.domElement) });
            this.domElement.addEventListener('dragover', this.allowDrop);
        }
    }

    return MDraggableAcceptor;
});


