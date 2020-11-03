if (document.images)
    {   var homeOff = new Image()
        homeOff.src = "images/home.gif"
        var homeOn = new Image()
        homeOn.src = "images/homea.gif"

        var aboutOff = new Image()
        aboutOff.src = "images/about.gif"
        var aboutOn = new Image()
        aboutOn.src = "images/abouta.gif"		
		
        var browseOff = new Image()
        browseOff.src = "images/browse.gif"
        var browseOn = new Image()
        browseOn.src = "images/browsea.gif"

        var successOff = new Image()
        successOff.src = "images/success.gif"
        var successOn = new Image()
        successOn.src = "images/successa.gif"

        var beaminxOff = new Image()
        beaminxOff.src = "images/beaminx.gif"
        var beaminxOn = new Image()
        beaminxOn.src = "images/beaminxa.gif"
		
        var bookOff = new Image()
        bookOff.src = "images/book.gif"
        var bookOn = new Image()
        bookOn.src = "images/booka.gif"
		
        var questionsOff = new Image()
        questionsOff.src = "images/questions.gif"
        var questionsOn = new Image()
        questionsOn.src = "images/questionsa.gif"	
		
        var contactOff = new Image()
        contactOff.src = "images/contact.gif"
        var contactOn = new Image()
        contactOn.src = "images/contacta.gif"			
		
        var modelloginOff = new Image()
        modelloginOff.src = "images/modellogin.gif"
        var modelloginOn = new Image()
        modelloginOn.src = "images/modellogina.gif"				
}		
function inact(imgName)
{
	if(document.images)
		document[imgName].src = eval(imgName+'Off.src')
}

function act(imgName)
{
	if(document.images)
		document[imgName].src = eval(imgName+'On.src')
}

// -->
