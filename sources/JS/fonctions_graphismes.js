


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

	// trace les bobines
	redessineBobinesBi(30,redessine=false)
}


// On prépare la SCENE OSCILLO Triphasé ======================================
function creeGraphiqueOscilloTriphase()
{
	// Canvas
	STAGE_OSCILLO_TRI = new createjs.Stage("oscillo_triphase");
	STAGE_OSCILLO_TRI.canvas.style.backgroundColor = "#003300";

	// Scene (qu'on centre)
	SCENE_OSCILLO_TRI = new createjs.Container();
	SCENE_OSCILLO_TRI.y = 100;
	STAGE_OSCILLO_TRI.addChild(SCENE_OSCILLO_TRI)

	// Repere / grille
	REPERE_OSCILLO_TRI = new createjs.Container();
	SCENE_OSCILLO_TRI.addChild(REPERE_OSCILLO_TRI)

	// Courbes
	COURBES_TRI = new createjs.Container();
	SCENE_OSCILLO_TRI.addChild(COURBES_TRI)
	
	// Curseur
	CURSEUR_TRI = new createjs.Shape();
	CURSEUR_TRI.graphics.setStrokeStyle(3).beginStroke("yellow").moveTo(0,-1000).lineTo(0,1000)
	SCENE_OSCILLO_TRI.addChild(CURSEUR_TRI)
	
	// Dessine les éléments
	redessine_repere(REPERE_OSCILLO_TRI)
	redessine_courbes_tri(REPERE_OSCILLO_TRI)
}



// On prépare la SCENE OSCILLO Biphasé ======================================
function creeGraphiqueOscilloBiphase()
{ 
	STAGE_OSCILLO_BI = new createjs.Stage("oscillo_biphase");
	STAGE_OSCILLO_BI.canvas.style.backgroundColor = "#003300";

	SCENE_OSCILLO_BI = new createjs.Container();
	STAGE_OSCILLO_BI.addChild(SCENE_OSCILLO_BI)

	REPERE_OSCILLO_BI = new createjs.Container();
	SCENE_OSCILLO_BI.addChild(REPERE_OSCILLO_BI)
	REPERE_OSCILLO_BI.y = 100;

	redessine_repere(REPERE_OSCILLO_BI)
}


// =================================================================================
// Met à jour tous les STAGES (au sens de CreateJS)
function updateAllStages()
{

	STAGE_TRI.update();
	STAGE_BI.update();
	STAGE_OSCILLO_TRI.update();
	STAGE_OSCILLO_BI.update();
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
function redessineBobinesBi(alpha,redessine=false)
{
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
function redessine_repere(groupeRepere,redessine=false)
{
	groupeRepere.removeAllChildren();
	
	var axeX = new createjs.Shape();
	axeX.graphics.setStrokeStyle(1).beginStroke("rgba(0,255,0,1)").moveTo(-1000,0).lineTo(1000,0);
	groupeRepere.addChild(axeX)
	
	
	var longueurTotal = 500;// (en px)
	for(var i=0;i<360;i+=30)
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



/*================================================================================
 Fonction qui redessine les trois sinus du triphasé */
function redessine_courbes_tri(redessine=false)
{
	COURBES_TRI.removeAllChildren();
	
	COURBES_TRI.addChild(dessine_sinus(500,80,0,"red"))
	COURBES_TRI.addChild(dessine_sinus(500,80,-2*Math.PI/3,"green"))
	COURBES_TRI.addChild(dessine_sinus(500,80,-4*Math.PI/3,"blue"))
	
	if(redessine)
		STAGE_OSCILLO_TRI.update();
}




/* =================================================================================
Fonction qui dessine une période de sinus sur L pixels de large,
amplitude A, et dephasage phi (en rad), de la couleur "coul" 
renvoie une shape*/
function dessine_sinus(L, A, phi, coul)
{
	var ligne = new createjs.Shape();
	ligne.graphics.setStrokeStyle(3).beginStroke(coul).moveTo(0,-A*Math.sin(phi))
	for(i=1;i<L;i+=2)
	{
		ligne.graphics.lineTo(i, -A*Math.sin(i/L*2*Math.PI+phi))
	}
	ligne.graphics.lineTo(L, -A*Math.sin(phi)) // Dernier point
	
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
	
	

	if(redessine)
		STAGE_TRI.update();
}
