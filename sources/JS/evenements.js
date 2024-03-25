/* CLIQUE SUR OSCILLO TRIPHAS ============================= */

STAGE_OSCILLO_TRI.on("stagemousedown", sourisClickOscilloTri)
function sourisClickOscilloTri(event)
{
	//lectureOff()
	SAVE_OLD_f = f();
	f(0); // On arrete de faire défiler le temps
	STAGE_OSCILLO_TRI.on("stagemousemove",sourisDeplaceOscilloTri,null,false,{x0souris:event.stageX,y0souris:event.stageY,theta0:THETA})
}

function sourisDeplaceOscilloTri(event,data)
{
	var dx= event.stageX - data.x0souris;
	THETA = data.theta0 - dx/500*2*Math.PI;
	
	// Autodestruction
	//STAGE_OSCILLO_TRI.on("stagemouseup",function(evUp,data){evUp.remove(),data.evDep.remove()},null,false,{evDep:event})
}

STAGE_OSCILLO_TRI.on("stagemouseup",function(){
		f(SAVE_OLD_f);
		STAGE_OSCILLO_TRI.removeAllEventListeners("stagemousemove");
	})




// SUPPRESSION DE LA TOUCHE [ENTER] SUR LES FORMULAIRES
$(document).on("keydown", "form", function(event) { 
    return event.key != "Enter";
});
