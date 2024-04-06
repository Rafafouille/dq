


/* ================================================================================
 Fonction d'initialisation du canvas "triphas" */
function creeGraphiqueTriphase()
{
	// STAGE
	STAGE_TRI = new createjs.Stage("dessin_triphase");
	
	// SCENE (qu'on recentre)
	SCENE_TRI = new createjs.Container();
	STAGE_TRI.addChild(SCENE_TRI);
	SCENE_TRI.x=250
	SCENE_TRI.y=250

	// Calque BOBINES
	BOBINES_TRI = new createjs.Container();
	SCENE_TRI.addChild(BOBINES_TRI)
	
	// Calque AIMANT PERMANENT
	AIMANT_TRI = new createjs.Container();
	var rayon = 200	;
	var epaisseur = 80;
	var longueurBranches = 100;
	var poleSud = new createjs.Shape();	
		poleSud.graphics.beginFill("blue");
		poleSud.graphics.moveTo(-rayon-epaisseur/2, -longueurBranches).lineTo(-rayon-epaisseur/2, 0)
		.arcTo(-rayon-epaisseur/2,rayon+epaisseur/2,0,rayon+epaisseur/2,rayon+epaisseur/2)
		.lineTo(0,rayon-epaisseur/2)
		.arcTo(-rayon+epaisseur/2,rayon-epaisseur/2,-rayon+epaisseur/2,0,rayon-epaisseur/2)
		.lineTo(-rayon+epaisseur/2, -longueurBranches);
		AIMANT_TRI.addChild(poleSud);
	var poleNord = new createjs.Shape();	
		poleNord.graphics.beginFill("red");
		poleNord.graphics.moveTo(rayon+epaisseur/2, -longueurBranches).lineTo(rayon+epaisseur/2, 0)
		.arcTo(rayon+epaisseur/2,rayon+epaisseur/2,0,rayon+epaisseur/2,rayon+epaisseur/2)
		.lineTo(0,rayon-epaisseur/2)
		.arcTo(rayon-epaisseur/2,rayon-epaisseur/2,rayon-epaisseur/2,0,rayon-epaisseur/2)
		.lineTo(rayon-epaisseur/2, -longueurBranches);
		AIMANT_TRI.addChild(poleNord);
	var textS = new createjs.Text("S", "bold 40px Arial", "white");
		textS.x=-rayon-13;
		textS.y=-50;
		AIMANT_TRI.addChild(textS);
	var textN = new createjs.Text("N", "bold 40px Arial", "white");
		textN.x=rayon-13;
		textN.y=-50;
		AIMANT_TRI.addChild(textN);
	SCENE_TRI.addChild(AIMANT_TRI)
	AIMANT_TRI.visible=false;
	
	// Rotor
	ROTOR_SYNC_TRI = new RotorSynchrone();
	SCENE_TRI.addChild(ROTOR_SYNC_TRI); 
		if(!$("#checkboxAfficheRotor").is(':checked'))// Si le bouton "non visible" est déjà enclenché, on cache le rotor
		{
			ROTOR_SYNC_TRI.visible=false;
		}
	
	
	// Calques VECTEURS B
	VECTEURS_TRI = new createjs.Container();
	SCENE_TRI.addChild(VECTEURS_TRI)
	
	// trace les bobines
	redessineBobinesTri(redessine=false)
}



/* ================================================================================
 Fonction d'initialisation du canvas "biphase" */
function creeGraphiqueBiphase()
{
	// STAGE
	STAGE_BI = new createjs.Stage("dessin_biphase");

	// SCENE (qu'on recentre)
	SCENE_BI = new createjs.Container();
	STAGE_BI.addChild(SCENE_BI);
	SCENE_BI.x=250
	SCENE_BI.y=250

	// Calque BOBINES
	 BOBINES_BI = new createjs.Container();
	 SCENE_BI.addChild(BOBINES_BI)
	 
	 // Rotor
	ROTOR_SYNC_BI = new RotorSynchrone();
	SCENE_BI.addChild(ROTOR_SYNC_BI);
		if(!$("#checkboxAfficheRotor").is(':checked'))// Si le bouton "non visible" est déjà enclenché, on cache le rotor
		{
			ROTOR_SYNC_BI.visible=false;
		}
	
	// Calque vecteurs B
	VECTEURS_BI = new createjs.Container();
	SCENE_BI.addChild(VECTEURS_BI)
	

	// trace les bobines
	redessineBobinesBi(redessine=false)
}


// On prépare la SCENE OSCILLO Triphasé ======================================
function creeGraphiqueOscilloTriphase()
{
/*
STAGE_OSCILLO_TRI
	+ ------ SCENE_OSCILLO_TRI
			+ ------- GROUPE_COURBES_TRI
					+ ------- REPERE_OSCILLO_TRI
					+ ------- COURBES_TRI
			+ ------- CURSEUR_TRI
			+ ------- TACTIL (Calque transparent pour les évents souris)
*/


	// Canvas
	STAGE_OSCILLO_TRI = new createjs.Stage("oscillo_triphase");
	STAGE_OSCILLO_TRI.canvas.style.backgroundColor = "#003300";

	// Scene (qu'on centre)
	SCENE_OSCILLO_TRI = new createjs.Container();
	SCENE_OSCILLO_TRI.y = 100;
	SCENE_OSCILLO_TRI.x = 50;
	STAGE_OSCILLO_TRI.addChild(SCENE_OSCILLO_TRI)
	
	
	// Courbes
	GROUPE_COURBES_TRI = new createjs.Container();
	SCENE_OSCILLO_TRI.addChild(GROUPE_COURBES_TRI);

		//Définition du groupe1
		// Repere / grille
		REPERE_OSCILLO_TRI = new createjs.Container();
		GROUPE_COURBES_TRI.addChild(REPERE_OSCILLO_TRI)
		redessine_repere_oscillo(REPERE_OSCILLO_TRI)

		// Courbes
		COURBES_TRI = new createjs.Container();
		GROUPE_COURBES_TRI.addChild(COURBES_TRI)
		redessine_courbes_tri()

		// Mise en cache (pour simplifier)
		GROUPE_COURBES_TRI.cache(-500,-100,1500,200)
	
	
	
	// Curseur
	CURSEUR_TRI = new createjs.Shape();
	CURSEUR_TRI.graphics.setStrokeStyle(3).beginStroke("yellow").moveTo(0,-1000).lineTo(0,1000)
	SCENE_OSCILLO_TRI.addChild(CURSEUR_TRI)
	
	// Tactil
	TACTIL_TRI = new createjs.Shape();
		TACTIL_TRI.graphics.beginFill("rgba(0,0,0,0)").rect(-1000,-1000,2000,2000)
		var hit = new createjs.Shape();
		hit.graphics.beginFill("#100").rect(-1000,-1000,2000,2000);
		TACTIL_TRI.hitArea = hit
	SCENE_OSCILLO_TRI.addChild(TACTIL_TRI);
	
	// Dessine les éléments
}



// On prépare la SCENE OSCILLO Biphasé ======================================
function creeGraphiqueOscilloBiphase()
{
 /*
STAGE_OSCILLO_BI
	+ ------ SCENE_OSCILLO_BI
			+ ------- GROUPE_COURBES_BI
					+ ------- REPERE_OSCILLO_BI
					+ ------- COURBES_BI
			+ ------- CURSEUR_BI
			+ ------- TACTIL (Calque transparent pour les évents souris)
*/

	// Canvas
	STAGE_OSCILLO_BI = new createjs.Stage("oscillo_biphase");
	STAGE_OSCILLO_BI.canvas.style.backgroundColor = "#003300";

	// Scene (qu'on centre)
	SCENE_OSCILLO_BI = new createjs.Container();
	STAGE_OSCILLO_BI.addChild(SCENE_OSCILLO_BI)
	SCENE_OSCILLO_BI.y = 100;
	SCENE_OSCILLO_BI.x = 50;

	// Courbes
	GROUPE_COURBES_BI = new createjs.Container();
	SCENE_OSCILLO_BI.addChild(GROUPE_COURBES_BI);
		//Définition du groupe1
		REPERE_OSCILLO_BI = new createjs.Container();
		GROUPE_COURBES_BI.addChild(REPERE_OSCILLO_BI)
		redessine_repere_oscillo(REPERE_OSCILLO_BI)
		
		// Courbes
		COURBES_BI = new createjs.Container();
		GROUPE_COURBES_BI.addChild(COURBES_BI)
		redessine_courbes_bi(REPERE_OSCILLO_BI)
		
		// Mise en cache (pour simplifier)
		GROUPE_COURBES_BI.cache(-500,-100,1500,200)

	// Curseur
	CURSEUR_BI = new createjs.Shape();
	CURSEUR_BI.graphics.setStrokeStyle(3).beginStroke("yellow").moveTo(0,-1000).lineTo(0,1000)
	SCENE_OSCILLO_BI.addChild(CURSEUR_BI)

}



// On prépare la SCENE fresnel ======================================
function creeGraphiqueFresnel()
{ 
	STAGE_FRESNEL = new createjs.Stage("fresnel");

	SCENE_FRESNEL = new createjs.Container();
	STAGE_FRESNEL.addChild(SCENE_FRESNEL)
	SCENE_FRESNEL.x = 250;
	SCENE_FRESNEL.y = 250;

	REPERE_FRESNEL = new createjs.Container();
	SCENE_FRESNEL.addChild(REPERE_FRESNEL)
	redessine_repere_Fresnel();
	
	
	VECTEURS_FRESNEL = new createjs.Container();
	SCENE_FRESNEL.addChild(VECTEURS_FRESNEL)
	
}




// =================================================================================
// Met à jour tous les STAGES (au sens de CreateJS)
function updateAllStages()
{

	STAGE_TRI.update();
	STAGE_BI.update();
	STAGE_OSCILLO_TRI.update();
	STAGE_OSCILLO_BI.update();
	STAGE_FRESNEL.update();
}



/* =================================================================================
Fonction qui redessine les bobines sur le STAGE_TRI
Si redessine=true, on met à jour le stage (par défaut)*/
function redessineBobinesTri(redessine=false)
{
        var p=1 // Nombre de paires de poles
	var rayon = 200	
	BOBINES_TRI.removeAllChildren();
	for(var ip=0;ip<p;ip++) // Pour chaque paire de pôle
	{
		for(var i=0;i<3;i++) // Pour chaque phase
		{
			var conteneur =  new createjs.Container();
			BOBINES_TRI.addChild(conteneur)
			
			var axe = new createjs.Shape();
			axe.graphics.setStrokeStyle(1).beginStroke("rgba(0,0,0,0.5)").setStrokeDash([20, 10], 0).moveTo(0,0).lineTo(rayon,0);
			conteneur.addChild(axe)
			
			if(i==0)
				var bitmap = new createjs.Bitmap("./sources/images/bobineR.png") 
			else if(i==1)
				var bitmap = new createjs.Bitmap("./sources/images/bobineV.png") 
			else
				var bitmap = new createjs.Bitmap("./sources/images/bobineB.png") 
				
			conteneur.addChild(bitmap)
			bitmap.x = rayon-25;
			bitmap.y = -20;

			conteneur.rotation = -i*360/(p*3)
			conteneur.rotation += ip * 360/p // Décalage du ip-ieme paire de pole
		}
	}
	
	if(redessine)
		STAGE_TRI.update();
}











/* =================================================================================
Fonction qui redessine les bobines sur le STAGE_BI
Si redessine=true, on met à jour le stage (par défaut)
alpha = angle (en degrés) de rotation de "d" */
function redessineBobinesBi(redessine=false)
{
	var alpha=ALPHA_BI
	var rayon = 200	
	BOBINES_BI.removeAllChildren();
	
	
	for(var i=0;i<2;i++) // Pour chaque phase
	{
		var conteneur =  new createjs.Container();
		BOBINES_BI.addChild(conteneur)
		
		var axe = new createjs.Shape();
		axe.graphics.setStrokeStyle(1).beginStroke("rgba(0,0,0,0.5)").setStrokeDash([20, 10], 0).moveTo(0,0).lineTo(rayon,0);
		conteneur.addChild(axe)
		
		if(i==0)
			var bitmap = new createjs.Bitmap("./sources/images/bobineR.png") 
		else
			var bitmap = new createjs.Bitmap("./sources/images/bobineV.png")
			
		conteneur.addChild(bitmap)
		bitmap.x = rayon-25;
		bitmap.y = -20;

		conteneur.rotation = -i*90-alpha
	}
	
	if(redessine)
		STAGE_BI.update();
}






// =================================================================================
// Fonction qui trace le repère de l'oscillo du "groupeRepere" (container contenant le repere)
function redessine_repere_oscillo(groupeRepere,redessine=false)
{
	groupeRepere.removeAllChildren();
	
	var axeX = new createjs.Shape();
	axeX.graphics.setStrokeStyle(1).beginStroke("rgba(0,255,0,1)").moveTo(-10000,0).lineTo(10000,0);
	groupeRepere.addChild(axeX)
	
	
	var longueurTotal = 500;// (en px)
	for(var i=-360;i<2*360;i+=30)
	{
		var axeY = new createjs.Shape();
		axeY.graphics.setStrokeStyle(1).beginStroke("rgba(0,255,0,1)").moveTo(500*i/360,-1000).lineTo(500*i/360,1000);
		groupeRepere.addChild(axeY)
	}
	
	
	if(redessine)
	{
		STAGE_OSCILLO_TRI.update();
		STAGE_OSCILLO_BI.update();
	}
	
}



// =================================================================================
// Fonction qui trace le repère de Fresnel
function redessine_repere_Fresnel()
{
	REPERE_FRESNEL.removeAllChildren();
	
	/*var axeRe = new createjs.Shape();
	axeRe.graphics.setStrokeStyle(1).beginStroke("rgba(0,255,0,1)").moveTo(-10000,0).lineTo(10000,0);
	REPERE_FRESNEL.addChild(axeRe)
	
	var axeIm = new createjs.Shape();
	axeIm.graphics.setStrokeStyle(1).beginStroke("rgba(0,255,0,1)").moveTo(0,-10000).lineTo(0,10000);
	REPERE_FRESNEL.addChild(axeIm)*/
	
	var Ray = 1000;
	for(var theta=0 ; theta<360 ; theta+=15)
	{
		var rayon_ = new createjs.Shape();
		if(theta%90==0)
			rayon_.graphics.setStrokeStyle(3).beginStroke("black");
		else if(theta%30==0)
			rayon_.graphics.setStrokeStyle(1).beginStroke("black");
		else if(theta%45==0)
			rayon_.graphics.setStrokeStyle(2).beginStroke("black");
		else
			rayon_.graphics.setStrokeStyle(1).beginStroke("gray").setStrokeDash([20, 10], 0);
		rayon_.graphics.moveTo(0,0).lineTo(Ray*Math.cos(theta*Math.PI/180),-Ray*Math.sin(theta*Math.PI/180));
		REPERE_FRESNEL.addChild(rayon_)
	}
	
	for(var r_=10;r_<2000;r_+=50)
	{
		var cercle_ = new createjs.Shape();
		cercle_.graphics.setStrokeStyle(1).beginStroke("gray").setStrokeDash([20, 10], 0).drawCircle(0, 0, r_);
		REPERE_FRESNEL.addChild(cercle_)
	}
	
}

/*================================================================================
 Fonction qui redessine les trois sinus du triphasé */
function redessine_courbes_tri(redessine=false)
{
	COURBES_TRI.removeAllChildren();
	
	COURBES_TRI.addChild(dessine_cosinus(500,IMAX()*ECHELLE_OSCILLO,0,"red"))
	COURBES_TRI.addChild(dessine_cosinus(500,IMAX()*ECHELLE_OSCILLO,-2*Math.PI/3,"green"))
	COURBES_TRI.addChild(dessine_cosinus(500,IMAX()*ECHELLE_OSCILLO,-4*Math.PI/3,"blue"))
	
	if(redessine)
		STAGE_OSCILLO_TRI.update();
}



/*================================================================================
 Fonction qui redessine les deux sinus du biphasé */
function redessine_courbes_bi(redessine=false)
{
	COURBES_BI.removeAllChildren();
	
	COURBES_BI.addChild(dessine_cosinus(500,IMAX()*ECHELLE_OSCILLO,0,"red"))
	COURBES_BI.addChild(dessine_cosinus(500,IMAX()*ECHELLE_OSCILLO,-Math.PI/2,"green"))
	
	if(redessine)
		STAGE_OSCILLO_BI.update();
}




/* =================================================================================
Fonction qui dessine une période de sinus sur L pixels de large,
amplitude A, et dephasage phi (en rad), de la couleur "coul" 
renvoie une shape*/
function dessine_cosinus(L, A, phi, coul)
{
	var ligne = new createjs.Shape();
	ligne.graphics.setStrokeStyle(3).beginStroke(coul).moveTo(-L,-A*Math.cos(phi))
	for(i=-L+1;i<2*L;i+=2)
	{
		ligne.graphics.lineTo(i, -A*Math.cos(i/L*2*Math.PI+phi))
	}
	ligne.graphics.lineTo(2*L, -A*Math.cos(phi)) // Dernier point
	
	return ligne
}



/* =================================================================================
Fonction qui re-trace les veteurs champs magnétique triphasé */
function redessine_B_tri(redessine=false )
{
	VECTEURS_TRI.removeAllChildren()
	
	
	var vecB1 = new Fleche([0,0],[B1(),0],"red")
	var vecB2 = new Fleche([0,0],[-B2()/2,B2()*Math.sqrt(3)/2],"green")
	var vecB3 = new Fleche([0,0],[-B3()/2,-B3()*Math.sqrt(3)/2],"blue")
	
	
	var vecB1Chasles = new Fleche([0,0],[B1(),0],"rgba(100,0,0,0.3)")
	var vecB2Chasles = new Fleche([B1(),0],[B1()-B2()/2,B2()*Math.sqrt(3)/2],"rgba(0,100,0,0.3)")
	var vecB3Chasles = new Fleche([B1()-B2()/2,B2()*Math.sqrt(3)/2],[B1()-B2()/2-B3()/2,B2()*Math.sqrt(3)/2-B3()*Math.sqrt(3)/2],"rgba(0,0,100,0.3)")
	
	var Btot = new Fleche([0,0],[B1()-(B2()+B3())/2, (B2()-B3())*Math.sqrt(3)/2],"black",4)
	
	VECTEURS_TRI.addChild(vecB1);
	VECTEURS_TRI.addChild(vecB2);
	VECTEURS_TRI.addChild(vecB3);
	
	VECTEURS_TRI.addChild(vecB1Chasles);
	VECTEURS_TRI.addChild(vecB2Chasles);
	VECTEURS_TRI.addChild(vecB3Chasles);
	VECTEURS_TRI.addChild(Btot);
	
	if($("#choix_affiche_aimant").is(':checked')) // Si on affiche les bobines (et pas l'aimant)
	{
		vecB1.visible = false;
		vecB2.visible = false;
		vecB3.visible = false;
		vecB1Chasles.visible = false;
		vecB2Chasles.visible = false;
		vecB3Chasles.visible = false;
	}
	
	if(!$("#checkboxAfficheB").is(':checked'))
	{
		Btot.visible = false;
		vecB1Chasles.visible = false;
		vecB2Chasles.visible = false;
		vecB3Chasles.visible = false;
	}
	
	
	
	// On recalle aussi l'aimant
	AIMANT_TRI.rotation = -THETA*180/Math.PI;

	if(redessine)
		STAGE_TRI.update();
}

/* =================================================================================
Fonction qui re-trace les veteurs champs magnétique biphasé */
function redessine_B_bi(redessine=false )
{
	VECTEURS_BI.removeAllChildren()
	
	
	var alpha = ALPHA_BI/180*Math.PI;
	
	var vecBd = new Fleche([0,0],[Bd(alpha)*Math.cos(alpha),		Bd(alpha)*Math.sin(alpha)],	"red")
	var vecBq = new Fleche([0,0],[-Bq(alpha)*Math.sin(alpha),	Bq(alpha)*Math.cos(alpha)],	"green")
	
	
	//var vecB1Chasles = new Fleche([0,0],[B1(),0],"rgba(100,0,0,0.3)")
	var vecB2Chasles = new Fleche([Bd(alpha)*Math.cos(alpha),Bd(alpha)*Math.sin(alpha)]  ,[Bd(alpha)*Math.cos(alpha)-Bq(alpha)*Math.sin(alpha),Bd(alpha)*Math.sin(alpha)+Bq(alpha)*Math.cos(alpha)],"rgba(0,100,0,0.3)")
//	var vecB3Chasles = new Fleche([B1()-B2()/2,B2()*Math.sqrt(3)/2],[B1()-B2()/2-B3()/2,B2()*Math.sqrt(3)/2-B3()*Math.sqrt(3)/2],"rgba(0,0,100,0.3)")
	
	var Btot = new Fleche([0,0],[Bd(alpha)*Math.cos(alpha)-Bq(alpha)*Math.sin(alpha),Bd(alpha)*Math.sin(alpha)+Bq(alpha)*Math.cos(alpha)],"black",4)
	
	VECTEURS_BI.addChild(vecBd);
	VECTEURS_BI.addChild(vecBq);
	
	//VECTEURS_TRI.addChild(vecB1Chasles);
	VECTEURS_BI.addChild(vecB2Chasles);
	//VECTEURS_TRI.addChild(vecB3Chasles);
	
	VECTEURS_BI.addChild(Btot);
	
	
	if(!$("#checkboxAfficheB").is(':checked'))
	{
		Btot.visible = false;
		vecB2Chasles.visible = false;
	}

	if(redessine)
		STAGE_BI.update();
}


/* ======================================================================
Fonction qui décale le dessin des sinus du triphasé
en fonction de alpha*/
function recale_oscillo_tri()
{

	var X = -THETA%(2*Math.PI)/(2*Math.PI)*500;
	if(X < -SCENE_OSCILLO_TRI.x) // Si on a reculé plus que la position du curseur (donc contre le bord)
		X+=500
	if(X > 500 - SCENE_OSCILLO_TRI.x)
		X-=500
	GROUPE_COURBES_TRI.x = X
}



/* ======================================================================
Fonction qui décale le dessin des sinus du biphasé
en fonction de alpha*/
function recale_oscillo_bi()
{
	var ANGLE = THETA - ALPHA_BI/180*Math.PI;
	var X = -ANGLE%(2*Math.PI)/(2*Math.PI)*500;
	if(X < -SCENE_OSCILLO_BI.x) // Si on a reculé plus que la position du curseur (donc contre le bord)
		X+=500
	if(X > 500 - SCENE_OSCILLO_BI.x)
		X-=500
	GROUPE_COURBES_BI.x = X
}


/* =================================================================================
Fonction qui re-trace les veteurs champs magnétique triphasé */
function redessine_Fresnel(redessine=false )
{
	VECTEURS_FRESNEL.removeAllChildren()
	
	var echelle_ = 20
	
	var I1_ = new Fleche([0,0],[i1c().re*echelle_,i1c().im*echelle_],"red")
	I1_.epaisseur(3);
	var I2_ = new Fleche([0,0],[i2c().re*echelle_,i2c().im*echelle_],"green")
	I2_.epaisseur(3);
	var I3_ = new Fleche([0,0],[i3c().re*echelle_,i3c().im*echelle_],"blue")
	I3_.epaisseur(3);
	VECTEURS_FRESNEL.addChild(I1_)
	VECTEURS_FRESNEL.addChild(I2_)
	VECTEURS_FRESNEL.addChild(I3_)
}




/* =====================================================================
Fonction qui recalcule la nouvelle postion des rotors */
function recaleRotors(dt)
{
	
	ROTOR_SYNC_TRI.deplaceRotor(dt)
	ROTOR_SYNC_BI.rotation = ROTOR_SYNC_TRI.rotation
}











function afficheCacheRotor(aff)
{
	if(typeof(aff)=="undefined")
		aff = !ROTOR_SYNC_TRI.visible;
		
	if(aff)
	{
		ROTOR_SYNC_TRI.visible=true;
		ROTOR_SYNC_BI.visible=true;
	}
	else
	{
		ROTOR_SYNC_TRI.visible=false;
		ROTOR_SYNC_BI.visible=false;
	}
	return aff;
}





function afficheCacheDiphase(aff)
{
	if(typeof(aff)=="undefined")
		aff = $("#dessin_biphase").css("display")=="none" ;
		
	if(aff)
	{
		$("#dessin_biphase").css("display","inline");
		$("#oscillo_biphase").css("display","inline");
	}
	else
	{
		$("#dessin_biphase").css("display","none");
		$("#oscillo_biphase").css("display","none");
	}
	return aff;
}
