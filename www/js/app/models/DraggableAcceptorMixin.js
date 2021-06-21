define([], function ()
{
    let DraggableAcceptorMixin = (superclass) => class extends superclass
    {
        allowDrop = function (event)
        {
            event.preventDefault();
        }
        drop = function (event)
        {
            event.preventDefault();
            let data = event.dataTransfer.getData("text/plain").split(',');
            for (let i = 1; i < data.length; i++)
            {
                data[i] = parseInt(data[i]) || 0;
            }
            let draggableEle = document.getElementById(data[0]);
            console.log((event.clientY) + " + " + data[2] + "-" + event.target.offsetTop + " = " + (event.clientY + data[2] - event.target.offsetTop));
            draggableEle.style.left = (event.clientX + data[1] - event.target.offsetLeft) + 'px';
            draggableEle.style.top = (event.clientY + data[2] - event.target.offsetTop) + 'px';
            console.log(event.target);
            console.log(draggableEle.parentNode);
            if (!(event.target === draggableEle.parentNode))
            {
                event.target.appendChild(draggableEle);
            }
        }
    }
    return DraggableAcceptorMixin;
});


