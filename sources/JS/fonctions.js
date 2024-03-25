
// Clic sur lecture ======================================== */


// Fonction qui alterne ON/OFF
function lectureOnOff()
{
	if(LECTURE)
		lectureOff()
	else
		lectureOn()
}


// Fonction qui lance le "temps"
function lectureOn()
{
	LECTURE = true;
	$("#boutonLecture").attr("class","playOn");
}



// Fonction qui arrete le "temps"
function lectureOff()
{
	LECTURE = false;
	$("#boutonLecture").attr("class","playOff");
}



function pilotage(p_)
{
	
 	if(p_ !== undefined)
 	{
 	}
 	
	return $('input[name=choix_Pilotage]:checked').val()
}
