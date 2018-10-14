function removeSelf(e)
{
    if (isNaN(parseFloat(e.currentTarget.parentElement.style.opacity))) {
    		e.currentTarget.parentElement.style.opacity = "1.00"
    		//alert(parseFloat(e.currentTarget.parentElement.style.opacity));
    	}
    
    //e.currentTarget.parentElement.remove();
    
    fadeOut(function(e) {
        e.remove();
    }, e);
}

function fadeOut(callback, e)
{	
	
    var selfCard = e.currentTarget.parentElement;
    
    if (selfCard)
    {
        doFade();
    }
    
    function doFade() {
        if(parseFloat(selfCard.style.opacity) >0 )
        {
        	
            selfCard.style.opacity = parseFloat(selfCard.style.opacity) - 0.05;
            setTimeout(doFade, 50);
        }
        else if (callback)
        {	
        	
            callback(selfCard);
        }
    }
}