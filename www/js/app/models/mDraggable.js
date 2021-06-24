define(['mixwith', './ModelBase', './DraggableMixin'], function (mw, ModelBase, DraggableMixin)
{
    class MDraggable extends mw.mix(ModelBase).with(DraggableMixin) {
        constructor(domElement)
        {
            super("Draggable Model", domElement);
        }

        init = function ()
        {
            this.domElement.addEventListener('dragstart', this.drag);
            this.domElement.setAttribute("draggable", "true");
            this.domElement.setAttribute("style", "position:absolute; transfrom:translate(0px,0px);");
        }
    }

    return MDraggable;
});


