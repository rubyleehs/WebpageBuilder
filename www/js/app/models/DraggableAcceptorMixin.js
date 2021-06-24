define([], function ()
{
    let DraggableAcceptorMixin = (superclass) => class extends superclass
    {
        allowDrop = function (event, targetDomEle)
        {
            let targetBounds = targetDomEle.getBoundingClientRect();

            if (targetBounds.left < event.clientY && targetBounds.right > event.clientX && targetBounds.top < event.clientY && targetBounds.bottom > event.clientY)
            {
                event.preventDefault();
            }
        }
        drop = function (event, targetDomEle)
        {
            event.preventDefault();
            let data = event.dataTransfer.getData("text/plain").split(',');
            let draggableEle = document.getElementById(data[0]);
            //let domElement = event.currentTarget;

            if (targetDomEle === draggableEle) targetDomEle = draggableEle.parentNode; // So you cannot drop it on itself

            let targetBounds = targetDomEle.getBoundingClientRect();
            let targetStyle = window.getComputedStyle(targetDomEle);
            let targetScaleX = targetBounds.width / targetDomEle.offsetWidth;
            let targetScaleY = targetBounds.height / targetDomEle.offsetHeight;
            let xTranslate = (event.clientX - targetBounds.x - parseFloat(data[1])) / targetScaleX - parseFloat(targetStyle.borderLeftWidth) - parseFloat(targetStyle.paddingLeft);
            let yTranslate = (event.clientY - targetBounds.y - parseFloat(data[2])) / targetScaleY - parseFloat(targetStyle.borderTopWidth) - parseFloat(targetStyle.paddingTop);
            // (event.clientX - targetBounds.x) is the distance between mouse and left edge of drop target
            // data[1] is the distance between the grab location and the left edge of the thing that is being grabbed
            // (event.clientX - targetBounds.x - parseFloat(data[1]) is the distance bewtween the target left edge and the grabbed thing left edge

            targetDomEle.appendChild(draggableEle);
            draggableEle.style.transform = `translate(${xTranslate}px, ${yTranslate}px)`
        }
    }
    return DraggableAcceptorMixin;
});


