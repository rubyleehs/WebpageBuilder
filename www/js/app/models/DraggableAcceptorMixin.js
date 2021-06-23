define([], function ()
{
    let DraggableAcceptorMixin = (superclass) => class extends superclass
    {
        allowDrop = function (event)
        {
            event.preventDefault();
        }
        drop = function (event, targetDomEle)
        {
            event.preventDefault();
            let data = event.dataTransfer.getData("text/plain").split(',');
            let draggableEle = document.getElementById(data[0]);
            //let domElement = event.currentTarget;

            if (targetDomEle === draggableEle) targetDomEle = draggableEle.parentNode; // So you cannot drop it on itself

            let targetBounds = targetDomEle.getBoundingClientRect();

            // (event.clientX - targetBounds.x) is the distance between mouse and left edge of drop target
            // data[1] is the distance between the grab location and the left edge of the thing that is being grabbed
            // (event.clientX - targetBounds.x - parseFloat(data[1]) is the distance bewtween the target left edge and the grabbed thing left edge
            //draggableEle.style.left = ((event.clientX - targetBounds.x - parseFloat(data[1])) / targetBounds.width) * 100 + '%';
            //draggableEle.style.top = ((event.clientY - targetBounds.y - parseFloat(data[2]))  / targetBounds.height) * 100 + '%';
            draggableEle.style.left = ((event.pageX - targetBounds.x - parseFloat(data[1])) + 'px');
            draggableEle.style.top = ((event.pageY - parseFloat(data[2])) + 'px');

            targetDomEle.appendChild(draggableEle);
        }
    }
    return DraggableAcceptorMixin;
});


