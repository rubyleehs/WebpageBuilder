define(['./ModelBase', './DraggableAcceptorMixin', 'mixwith'], function (ModelBase, DraggableAcceptorMixin, mw)
{
    class MDraggableAcceptor extends mw.mix(ModelBase).with(DraggableAcceptorMixin) {
        constructor()
        {
            super("Draggable Acceptor Model");
        }

        init = function (domElement)
        {
            domElement.addEventListener('drop', this.drop);
            domElement.addEventListener('dragover', this.allowDrop);
        }
    }

    return MDraggableAcceptor;
});


