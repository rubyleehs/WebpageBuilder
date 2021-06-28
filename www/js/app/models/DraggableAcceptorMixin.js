define([], function ()
{
    let DraggableAcceptorMixin = (superclass) => class extends superclass
    {
        allowDrop = function (event, targetDomEle)
        {
            let targetBounds = targetDomEle.getBoundingClientRect();
            //console.log((targetBounds.left < event.clientY) + "|" + (targetBounds.right > event.clientX) + "|" + (targetBounds.top < event.clientY) + "|" + (targetBounds.bottom > event.clientY))
            //console.log(event.clientX + "," + event.clientY);
            if (targetBounds.left < event.clientX && targetBounds.right > event.clientX && targetBounds.top < event.clientY && targetBounds.bottom > event.clientY)
            {
                event.preventDefault();
            }
        }
        drop = function (event, targetDomEle)
        {
            if (document.elementFromPoint(event.clientX, event.clientY) != event.target) return;
            event.preventDefault();
            let data = event.dataTransfer.getData("text/plain").split(',');
            let draggableEle = $(`#${data[0]}`);
            //console.log(draggableEle);

            if (targetDomEle === draggableEle) targetDomEle = draggableEle[0].parentNode; // So you cannot drop it on itself

            //TODO: account for margin/padding/etc on draggableEle itself
            let targetBounds = targetDomEle.getBoundingClientRect();
            let targetStyle = window.getComputedStyle(targetDomEle);
            let targetScaleX = targetBounds.width / targetDomEle.offsetWidth;
            let targetScaleY = targetBounds.height / targetDomEle.offsetHeight;
            let xTranslate = (event.clientX - targetBounds.x - parseFloat(data[1])) / targetScaleX - parseFloat(targetStyle.borderLeftWidth) - parseFloat(targetStyle.paddingLeft);
            let yTranslate = (event.clientY - targetBounds.y - parseFloat(data[2])) / targetScaleY - parseFloat(targetStyle.borderTopWidth) - parseFloat(targetStyle.paddingTop);
            // (event.clientX - targetBounds.x) is the distance between mouse and left edge of drop target
            // data[1] is the distance between the grab location and the left edge of the thing that is being grabbed
            // (event.clientX - targetBounds.x - parseFloat(data[1]) is the distance bewtween the target left edge and the grabbed thing left edge

            targetDomEle.appendChild(draggableEle[0]);
            draggableEle.css('transform', `translate(${xTranslate}px, ${yTranslate}px)`);
        }
    }
    return DraggableAcceptorMixin;
});


