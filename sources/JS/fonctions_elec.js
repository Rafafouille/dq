


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
 	}
 	return OMEGA/(2*Math.PI)
 }
 
 
/* ================================================================
 getter/setter de la période*/
 function T(t_)
 {
 	if(t_ !== undefined)
 	{
 		f(1/t_)
 	}
 	return 1/f()
 }
 
 
 
 
/* ==========================================================
Fonction qui renvoie la valeur du courant instantanné dans la bobine 1*/
function i1()
{
	return IMAX * Math.sin(theta())
}


/* ==========================================================
Fonction qui renvoie la valeur du courant instantanné dans la bobine 2*/
function i2()
{
	return IMAX * Math.sin(theta()-Math.PI/3*2)
}


/* ==========================================================
Fonction qui renvoie la valeur du courant instantanné dans la bobine 3*/
function i3()
{
	return IMAX * Math.sin(theta()-Math.PI/3*4)
}





 
 
/* ==========================================================
Fonction qui renvoie la valeur du champs B1 instantanné dans la bobine 1*/
function B1()
{
	return i1()*K_B
}


/* ==========================================================
Fonction qui renvoie la valeur du champs B2 instantanné dans la bobine 2*/
function B2()
{
	return i2()*K_B
}


/* ==========================================================
Fonction qui renvoie la valeur du champs B3 instantanné dans la bobine 3*/
function B3()
{
	return i3()*K_B
}


