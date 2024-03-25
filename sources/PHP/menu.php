<div class="encadre jaune">
	<div class="intitule">
		Simulation
	</div>
	<div class="contenu">
		<div id="boutonLecture" class="playOff" onclick="lectureOnOff()" title="Lancer/Arrêter l'animation" ></div>
	</div>
</div>

<div class="encadre bleu">
	<div class="intitule">
		Pilotage
	</div>
	<div class="contenu">
		<form>
			<label for="input_I" title="Courant efficace dans le stator">I<sub>s</sub> = </label>
			<input type="number" name="input_I" id="input_I" step="0.1" onchange="IEFF(this.value)" size="5" value="0.7"> <span class="unite">A</span>
			<input type="range" name="range_I" id="range_I" min="0" max="2" step="0.1" value="0.7" oninput="IEFF(this.value)">
		</form>
		<br/>
		<form>
			<label for="input_f" title="Fréquence électrique">f = </label>
			<input type="number" name="input_f" id="input_f" min="0" size="5" step="0.1" onchange="f(this.value)"> <span class="unite">Hz</span>
			<input type="range" name="range_f" id="range_f" min="0" max="2" step="0.1" oninput="f(this.value)">
		</form>
		<br/>
		<form>
			<label for="input_w" title="Pulsation électrique">ω = </label>
			<input type="number" name="input_w" id="input_w" min="0" step="0.5" size="5" onchange="omega(this.value)"> <span class="unite">rad/s</span>
			<input type="range" name="range_w" id="range_w" min="0" max="10" step="0.1" oninput="omega(this.value)">
		</form>
		<br/>
		<form>
			<label for="input_T" title="Période électrique">T = </label>
			<input type="number" name="input_T" id="input_T" min="0" size="5" onchange="T(this.value)"> <span class="unite">s</span>
			<input type="range" name="range_T" id="range_T" min="0.1" max="30" step="0.5" oninput="T(this.value)">
		</form>
		
		Pilotage en :
		<br/>
		<form>
			<input type="radio" id="choix_pilotage_tri" name="choix_Pilotage" value="triphasé" checked/><label for="choix_pilotage_tri">triphasé</label>
			<input type="radio" id="choix_pilotage_bi" name="choix_Pilotage" value="biphasé"/><label for="choix_pilotage_bi">biphasé</label>
		</form>
		<br/>
		<form>
			<input type="checkbox" name="input_suivi_rotor_bi" id="input_suivi_rotor_bi" onchange="suivreRotorBi($(this).is(':checked'))"/>
			<label for="input_suivi_rotor_bi" title="Choisir automatiquement l'orientation diphasée">(d,q) suit rotor</label>
		</form>
		<br/>
		<form>
			<label for="input_alpha_bi" title="Angle d'orientation des bobines diphasées (en degré)">α<sub>Park</sub> = </label>
			<input type="number" name="input_alpha_bi" id="input_alpha_bi" step="1" onchange="alpha_bi(this.value)" size="5" value="0"> <span class="unite">°</span>
			<input type="range" name="range_alpha_bi" id="range_alpha_bi" value="0" min="0" max="359" step="1" oninput="alpha_bi(this.value)">
		</form>
	</div>
</div>

<div class="encadre vert">
	<div class="intitule">
		Affichage
	</div>
	<div class="contenu ferme">
		<form>
			<input type="checkbox" id="checkboxAfficheDiphase" onchange="afficheCacheDiphase()" checked/>
			<label for="checkboxAfficheDiphase">Affiche Diphasé</label>
			<input type="checkbox" id="checkboxAfficheRotor" onchange="afficheCacheRotor()" checked/>
			<label for="checkboxAfficheRotor">Affiche le rotor</label>
			<input type="checkbox" id="checkboxAfficheB" checked/> <!-- Se met tout seul à jour en redessinant la flèche -->
			<label for="checkboxAfficheB">Affiche B</label>
		</form>
	</div>
</div>


<div class="encadre rouge">
	<div class="intitule">
		Rotor
	</div>
	<div class="contenu ferme">
		<form>
			<label for="input_J" title="Inertie du rotor">J = <label>
			<input type="number" name="input_J" id="input_J" min="0.1" size="6" value="5" onchange="J(this.value)"> <span class="unite">kg.m<sup>2</sup></span>
			<input type="range" name="range_J" id="range_J" min="0.1" max="20" step="0.1" value="5" oninput="J(this.value)">
		</form>
		<form>
			<label for="input_Cr" title="Couple de frottement sec (Coulomb)">C<sub>r</sub> = <label>
			<input type="number" name="input_Cr" id="input_Cr" min="0.1" size="5" value="10" onchange="Cr(this.value)"> <span class="unite">N.m</span>
			<input type="range" name="range_Cr" id="range_Cr" min="0.1" max="20" step="0.1" value="10" oninput="Cr(this.value)">
		</form>
		<form>
			<label for="input_fv" title="Coefficient de frottement fluide">f<sub>v</sub> = <label>
			<input type="number" name="input_fv" id="input_fv" min="0.1" size="5" value="0.5" onchange="fv(this.value)"> <span class="unite">N.m/(rad/s)</span>
			<input type="range" name="range_fv" id="range_fv" min="0.1" max="5" step="0.1" value="0.5" oninput="fv(this.value)">
		</form>
	</div>
</div>

<script>
	$(".intitule").on("click",function(){$(this).parent().find(".contenu").toggle(400);})
	$( "input[type='checkbox'],input[type='radio']" ).checkboxradio();
</script>
