

creeGraphiqueTriphase()
creeGraphiqueBiphase()
creeGraphiqueOscilloTriphase()
creeGraphiqueOscilloBiphase()



TEMPS = 0 // Temps
FACTEUR_TEMPS = 1
LECTURE = true;

IMAX = 1;// Amplitude du courant
K_B = 10;// Reliation B = K_B * I   (K_B = mu0/(2pi d)) Relation pour passer du I à B

THETA = 0 // Angle sur la période (en triphasé)
OMEGA = 1 // Pulsation du signal triphasé


// BOUCLE ================================
createjs.Ticker.addEventListener("tick",function(event){
	if(LECTURE)
	{
		var dt = event.delta/1000*FACTEUR_TEMPS;
		TEMPS += dt;
		
		
		THETA += OMEGA*dt;
		
		CURSEUR_TRI.x = (THETA/(2*Math.PI)*500)%500;
		redessine_B_tri()
		updateAllStages()
	}
})


