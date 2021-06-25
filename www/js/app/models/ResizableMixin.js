define([], function ()
{
    let ResizableMixin = (superclass) => class extends superclass
    {
        resize = (event) =>
        {
            let bounds = this.domElement.getBoundingClientRect();
            let scaleX = bounds.width / this.domElement.offsetWidth;
            let scaleY = bounds.height / this.domElement.offsetHeight;
            this.domElement.style.width = Math.max((event.clientX - bounds.left) / scaleX, 1) + "px"
            this.domElement.style.height = Math.max((event.clientY - bounds.top) / scaleY, 1) + "px"
            event.stopPropagation();
        }

        showResizeHandle = () =>
        {
            this.resizeHandle.style.display = "block";
        }

        hideResizeHandle = () =>
        {
            this.resizeHandle.style.display = "none";
        }

        initResizableMixin = (targetDomEle) =>
        {
            this.domElement = targetDomEle;
            this.resizeHandle = document.createElement('div');
            this.resizeHandle.className = "resizeHandle";
            this.resizeHandle.addEventListener('mousedown', this.resizeStart);
            this.domElement.appendChild(this.resizeHandle);
            this.resizeHandle.style.display = "none";
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

    return ResizableMixin;
});


