

/* ================================================================
 getter/setter de la pulsation*/
 function theta(t_)
 {
 	if(t_ !== undefined)
 	{
 		THETA = t_;
 	}
 	return THETA
 }
 
 
 
/* ================================================================
 getter/setter de la pulsation*/
 function omega(w_)
 {
 	if(w_ !== undefined)
 	{
 		OMEGA = Math.abs(w_);
 		$("#input_w").val(Math.round(w_*1000)/1000)
 		$("#range_w").val(Math.round(w_*1000)/1000)
 		$("#input_f").val(Math.round(w_/(2*Math.PI)*1000)/1000)
 		$("#range_f").val(Math.round(w_/(2*Math.PI)*1000)/1000)
 		if(w_!=0)
 		{
	 		$("#input_T").val(Math.round((2*Math.PI)/w_*1000)/1000)
	 		$("#range_T").val(Math.round((2*Math.PI)/w_*1000)/1000)
 		}
 		else
 		{
	 		$("#input_T").val("")
	 		$("#range_T").val(99)
 		}
 	}
 	return OMEGA
 }
 
 
/* ================================================================
 getter/setter de la fréquence*/
 function f(f_)
 {
 	if(f_ !== undefined)
 	{
 		OMEGA = Math.abs(f_*2*Math.PI);
 		$("#input_w").val(Math.round(2*Math.PI*f_*1000)/1000)
 		$("#range_w").val(Math.round(2*Math.PI*f_*1000)/1000)
 		$("#input_f").val(Math.round(f_*1000)/1000)
 		$("#range_f").val(Math.round(f_*1000)/1000)
 		if(f_!=0)
 		{
	 		$("#input_T").val(Math.round(1/f_*1000)/1000)
	 		$("#range_T").val(Math.round(1/f_*1000)/1000)
 		}
 		else
 		{
	 		$("#input_T").val("")
	 		$("#range_T").val(99)
 		}
 	}
 	return OMEGA/(2*Math.PI)
 }
 
 
 /* =============================================================
 Getter Setter pour l'angle de la transformée de Park */
 function alpha_bi(t_)
 {
 	if(t_ !== undefined)
 	{
 		ALPHA_BI = t_;
 		$("#input_alpha_bi").val(Math.round(t_%360))
 		$("#range_alpha_bi").val(Math.round(t_%360))
 		redessineBobinesBi()
 	}
 	return ALPHA_BI
 }
 
/* ================================================================
 getter/setter de la période*/
 function T(t_)
 {
 	if(t_ !== undefined)
 	{
 		if(t_!=0)
	 		f(1/t_)
	 	else
	 	{
	 		OMEGA=100;
	 		$("#input_T").val(0)
	 		$("#input_w").val("")
	 		$("#range_w").val(9999)
	 		$("#input_f").val("")
	 		$("#range_f").val(9999)
	 	}
 	}
 	return 1/f()
 }
 
 
/* ===================================================================
	LES COURANTS
=====================================================================*/
 
 
/* ==========================================================
GETTER/SETTER du courant efficace*/
function IEFF(i_)
{
	if(i_!=undefined)
	{
		i_=Number(i_)
		IEFF_=i_;
	 	$("#input_I").val(i_)
 		$("#range_I").val(i_)
		redessine_courbes_tri();
		redessine_courbes_bi();
		
	}
	return IEFF
}

 
/* ==========================================================
GETTER/SETTER du courant max*/
function IMAX(i_)
{
	if(i_!=undefined)
	{
		i_=Number(i_)
		IEFF(i_/Math.sqrt(2));
		
	}
	return IEFF_*Math.sqrt(2)
}

 
 

 
/* ==========================================================
Fonction qui renvoie la valeur du courant instantanné dans la bobine 1*/
function i1()
{
	if(pilotage()=="triphasé")
		return IMAX() * Math.cos(theta())
	else
	{
		var a_ = ALPHA_BI*Math.PI/180; // Angle de position des bobines
		var k_=Math.sqrt(2/3);
		return k_*( id()*Math.cos(a_) - iq()*Math.sin(a_))
	}
}


/* ==========================================================
Fonction qui renvoie la valeur du courant instantanné dans la bobine 2*/
function i2()
{
	if(pilotage()=="triphasé")
		return IMAX() * Math.cos(theta()-Math.PI/3*2)
	else
	{
		var a_ = ALPHA_BI*Math.PI/180; // Angle de position des bobines
		var k_=Math.sqrt(2/3);
		return k_*( id()*Math.cos(a_-2/3*Math.PI) - iq()*Math.sin(a_-2/3*Math.PI))
	}
}


/* ==========================================================
Fonction qui renvoie la valeur du courant instantanné dans la bobine 3*/
function i3()
{
	if(pilotage()=="triphasé")
		return IMAX() * Math.cos(theta()-Math.PI/3*4)
	else
	{
		var a_ = ALPHA_BI*Math.PI/180; // Angle de position des bobines
		var k_=Math.sqrt(2/3);
		return k_*( id()*Math.cos(a_+2/3*Math.PI) - iq()*Math.sin(a_+2/3*Math.PI))
	}
}




/* =========================================================
Courant direct Park*/
function id(theta_)
{
	if(pilotage()=="triphasé")
	{
		var k_=Math.sqrt(2/3)
		return k_*(Math.cos(theta_)*i1()+Math.cos(theta_-2/3*Math.PI)*i2() + Math.cos(theta_-4/3*Math.PI)*i3())
	}
	else
		{return 0}
}




/* =========================================================
Courant direct Park*/
function iq(theta_)
{
	if(pilotage()=="triphasé")
	{
		var k_=Math.sqrt(2/3)
		return k_*(-Math.sin(theta_)*i1()-Math.sin(theta_-2/3*Math.PI)*i2() - Math.sin(theta_-4/3*Math.PI)*i3())
	}
	else
		{return IMAX()}
}



 
/* ===================================================================
	LES COURANTS COMPLEXES
=====================================================================*/
 
/* ==========================================================
Courant complexe i1 */
function i1c()
	{return math.complex({abs: IEFF(), arg: THETA})}

/* ==========================================================
Courant complexe i2 3*/
function i2c()
	{return math.complex({abs: IEFF(), arg: THETA-2*Math.PI/3})}

/* ==========================================================
Courant complexe i3 3*/
function i3c()
	{return math.complex({abs: IEFF(), arg: THETA-4*Math.PI/3})}


 
 
 
 
/* ===================================================================
	LES CHAMPS
=====================================================================*/
 
 
/* ==========================================================
Fonction qui renvoie la valeur du champs B1 instantanné dans la bobine 1*/
function B1()
	{return i1()*K_B}

/* ==========================================================
Fonction qui renvoie la valeur du champs B2 instantanné dans la bobine 2*/
function B2()
	{return i2()*K_B}

/* ==========================================================
Fonction qui renvoie la valeur du champs B3 instantanné dans la bobine 3*/
function B3()
	{return i3()*K_B}

/* ==========================================================
Fonction qui renvoie l'amplitude du champ magnétique au centre (composée des 3)*/
function B()
	{return IMAX()*K_B*3/2}


/* =========================================================
Champ direct Park*/
function Bd(theta_)
	{return id(theta_)*K_B;}

/* =========================================================
Champ direct Park*/
function Bq(theta_)
	{return iq(theta_)*K_B;}





/* =====================================================
getter/setter pour savoir si SQ se cale sur le rotor*/
function suivreRotorBi(_s)
{
 	if(_s !== undefined)
 	{
 		SUIVRE_ROTOR_BI = _s;
 		if(_s)
 		{
	 		$("#input_alpha_bi").attr("disabled", "disabled");
	 		$("#range_alpha_bi").attr("disabled", "disabled");
	 	}
	 	else
	 	{
	 		$("#input_alpha_bi").removeAttr("disabled");
	 		$("#range_alpha_bi").removeAttr("disabled");
	 	}
 	}
 	return SUIVRE_ROTOR_BI;
}



