
/*============================================================
Inertie */
function J(j_)
{
 	if(j_ !== undefined)
 	{
 		j_=Number(j_)
 		ROTOR_SYNC_TRI.J(j_);
 		ROTOR_SYNC_BI.J(j_);
 		$("#input_J").val(j_);
 		$("#range_J").val(j_);
 	}
 	return ROTOR_SYNC_TRI.J(j_);
}



/*============================================================
Couple de frottement sec */
function Cr(c_)
{
 	if(c_ !== undefined)
 	{
 		c_=Number(c_)
 		ROTOR_SYNC_TRI.Cr(c_);
 		ROTOR_SYNC_BI.Cr(c_);
 		$("#input_Cr").val(c_);
 		$("#range_Cr").val(c_);
 	}
 	return ROTOR_SYNC_TRI.Cr(c_);
}



/*============================================================
Coefficient de frottement fluide*/
function fv(f_)
{
 	if(f_ !== undefined)
 	{
 		f_=Number(f_)
 		ROTOR_SYNC_TRI.fv(f_);
 		ROTOR_SYNC_BI.fv(f_);
 		$("#input_fv").val(f_);
 		$("#range_fv").val(f_);
 	}
 	return ROTOR_SYNC_TRI.fv(f_);
}

