define([], function ()
{
    class LResizable
    {
        init(domElement)
        {
            this.domElement = domElement;
            this.resizeHandle = $('<div/>', {
                "class": "resizeHandle"
            }).appendTo(this.domElement);
            this.resizeHandle.on('mousedown', this.resizeStart);
            this.hideResizeHandle();

            this.domElement.on('focus', this.showResizeHandle);
            this.domElement.on('blur', this.hideResizeHandle);
            this.domElement.attr("tabindex", 0);
            this.domElement.css({ "width": `${this.domElement.clientWidth}px`, "height": `${this.domElement.clientHeight}px` });
        }

        resize = (event) =>
        {
            let bounds = this.domElement[0].getBoundingClientRect();
            let scaleX = bounds.width / this.domElement[0].offsetWidth;
            let scaleY = bounds.height / this.domElement[0].offsetHeight;
            this.domElement.width(Math.max((event.clientX - bounds.left) / scaleX, 1) + "px");
            this.domElement.height(Math.max((event.clientY - bounds.top) / scaleY, 1) + "px");
            event.stopPropagation();
        }

        showResizeHandle = () =>
        {
            this.resizeHandle.css("display", "block");
        }

        hideResizeHandle = () =>
        {
            this.resizeHandle.css("display", "none");
        }

        resizeStart = (event) =>
        {
            // return if not element user is clicking on visually.
            if (document.elementFromPoint(event.clientX, event.clientY) != event.target) return;

            window.addEventListener('mousemove', this.resize);
            window.addEventListener('mouseup', this.resizeEnd);
            event.stopPropagation();
        }

        resizeEnd = (event) =>
        {
            window.removeEventListener('mousemove', this.resize);
            window.removeEventListener('mouseup', this.resizeEnd);
            event.stopPropagation();
        }
    }

    return LResizable;
});


