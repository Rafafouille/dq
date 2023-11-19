<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <title>Transformée dans le plan DQ</title>
        <script src="https://code.createjs.com/1.0.0/easeljs.min.js"/></script>
        <script src="./sources/JS/libraries/math.js.js"/></script>
        <script src="./sources/JS/CLASS_fleche.js"/></script>
        
        <script src="./sources/JS/fonctions_graphismes.js"/></script>
        <script src="./sources/JS/fonctions_elec.js"/></script>
        
    </head>
    <body>
    	<div style="margin:auto;text-align:center;">
	    	<table style="margin:auto;">
	    		<tr>
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
	    	</table>
    	</div>
    	
    	<!-- Lancement des scripts -->
        <script src="./sources/JS/main.js"></script>
    </body>
</html>
