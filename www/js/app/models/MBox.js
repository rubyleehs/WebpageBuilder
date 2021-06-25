define(['mixwith', './ModelBase', './DraggableMixin', './ResizableMixin'], function (mw, ModelBase, DraggableMixin, ResizableMixin)
{
    class MBox extends mw.mix(ModelBase).with(DraggableMixin, ResizableMixin) {
        constructor(domElement)
        {
            super("Box Model", domElement);
        }

        init = function ()
        {
            this.domElement.addEventListener('dragstart', this.drag);
            this.domElement.setAttribute("draggable", "true");


            this.initResizableMixin(this.domElement);
            this.domElement.addEventListener('focus', this.showResizeHandle);
            this.domElement.addEventListener('blur', this.hideResizeHandle);
            this.domElement.setAttribute("tabindex", 0);

            this.domElement.setAttribute("style", `position:absolute; transfrom:translate(0px,0px); width:${this.domElement.clientWidth}px; height:${this.domElement.clientHeight}px;`);
        }
    }

    return MBox;
});


