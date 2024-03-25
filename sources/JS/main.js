toto=null;



TEMPS = 0 // Temps
FACTEUR_TEMPS = 1
LECTURE = false;

IEFF_ = 1/Math.sqrt(2) // Courant efficace
//IMAX = 1;// Amplitude du courant
ECHELLE_OSCILLO = 80;


K_B = 10;// Reliation B = K_B * I   (K_B = mu0/(2pi d)) Relation pour passer du I à B

THETA = 0 // Angle sur la période (en triphasé)
ALPHA_BI = 0 // Angle de rotation des bobines biphasées en degré

OMEGA = 0.1 // Pulsation du signal triphasé

SUIVRE_ROTOR_BI = false;



creeGraphiqueTriphase()
creeGraphiqueBiphase()
creeGraphiqueOscilloTriphase()
creeGraphiqueOscilloBiphase()
creeGraphiqueFresnel()



omega(1) // <-- Pour mettre à jour toutes les variables

// BOUCLE ================================
createjs.Ticker.addEventListener("tick",function(event){

		var dt = event.delta/1000*FACTEUR_TEMPS;
		TEMPS += dt;
		
		if(LECTURE)
		{
			if(pilotage()=="triphasé")
				THETA += OMEGA*dt;
			else
				THETA = Math.atan2((B2()-B3())*Math.sqrt(3)/2, B1()-(B2()+B3())/2)
				
		}
		

		recale_oscillo_tri() ;
		recale_oscillo_bi() ;
		redessine_Fresnel() ;
		recaleRotors(dt) ;
		if(SUIVRE_ROTOR_BI) 
			alpha_bi(-ROTOR_SYNC_BI.rotation) ;
		
		redessine_B_tri() ;
		redessine_B_bi() ;
		updateAllStages()
})


