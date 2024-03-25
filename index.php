<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <title>Transformée dans le plan DQ</title>
        <script src="https://code.createjs.com/1.0.0/easeljs.min.js"/></script>
        <script src="./sources/JS/libraries/math.js.js"/></script>
        
        <script src="./sources/JS/CLASS_fleche.js"/></script>
        <script src="./sources/JS/CLASS_RotorSynchrone.js"/></script>
	<link rel="stylesheet" type="text/css" href="https://code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css" />
	<!--<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js"></script>-->
	<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.js"></script>
	
	<!--<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.12/jquery-ui.min.js"></script>-->
	<script type="text/javascript" src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>
        
        <script src="./sources/JS/fonctions.js"/></script>
        <script src="./sources/JS/fonctions_graphismes.js"/></script>
        <script src="./sources/JS/fonctions_elec.js"/></script>
        <script src="./sources/JS/fonctions_rotor.js"/></script>
        
        <link href="./sources/style/style.css" rel="stylesheet">
        
        <link rel="icon" type="image/png" href="./sources/images/bobine.png">
    </head>
    <body>
    	<div style="margin:auto;text-align:center;">
	    	<table style="margin:auto;">
	    		<tr>
	    			<td id="commandes" rowspan="2">
	    				<?php include("./sources/PHP/menu.php")?>
	    			</td>
	    			<td>
				    	<!-- Dessin coté triphasé -->
				    	<canvas id="dessin_triphase" width="500" height="500" style="border:solid;"></canvas>
				</td>
				<td>
				    	<!-- Dessin coté biphasé -->
				    	<canvas id="dessin_biphase" width="500" height="500" style="border:solid;"></canvas>
	    			</td>
	    		</tr>
	    		<tr>
	    			<td>
				    	<!-- Oscilloscope coté triphasé -->
				    	<canvas id="oscillo_triphase" width="500" height="200" style="border:solid;"></canvas>
	    			</td>
	    			<td>
				    	<!-- Oscilloscope coté biphasé -->
				    	<canvas id="oscillo_biphase" width="500" height="200" style="border:solid;"></canvas>
	    			</td>
	    		</tr>
	    		<tr>
	    			<td></td>
	    			<td COLSPAN="2">
				    	<!-- Diagramme de Fresnel -->
				    	<canvas id="fresnel" width="500" height="500" style="border:solid;"></canvas>
	    			</td>
	    		</tr>
	    	</table>
    	</div>
    	
    	<!-- Lancement des scripts -->
        <script src="./sources/JS/main.js"></script>
        
        
        <script src="./sources/JS/evenements.js"/></script> <!-- Doit être appelé après main.js -->
    </body>
</html>
