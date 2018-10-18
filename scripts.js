/*
elements = document.getElementsByClassName("header")

//.onclick = function() 
{removeSelf1(event)};

function removeSelf1(e) {
    removeSelf(e);
}
*/

function removeSelf(e)
{
    
    
    fadeOut(function(e) {
        e.remove();
    }, e);
}

function fadeOut(callback, e)
{	
	
    var selfCard = e.currentTarget.parentElement;
    
    if (selfCard)
    {
        doFade(20);
    }
    
    function doFade(z) {
        //if(parseFloat(selfCard.style.opacity) >0 )
        //{
        	
            //selfCard.style.opacity = parseFloat(selfCard.style.opacity) - 0.05;
        
        if(z >0 )
        {
            selfCard.classList.add("shrinker");
            setTimeout(function() {
            doFade(z-1);
            }, 30);
        }
        else if (callback)
        {   
            
            callback(selfCard);
        }

            //callback(selfCard);
        //}
    }
}