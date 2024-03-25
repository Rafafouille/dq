// Méthode d'héritage : voir https://createjs.com/tutorials/Inheritance/


class RotorSynchrone extends createjs.Container
{

	constructor()
	{
		// Appel du constructeur parent
		super()
		
		this.redessine()
		
	}
	
	
	// Paramètres =====
	
	rayon = 100;
	J_ = 5;	// Moment d'inertie
	omega_ = 0 // Vitesse de rotation
	k_ = 1 // constante de couple magnétique
	B_ = 1 // Amplitude du champ créé par le rotor
	fv_ = 0.5 // Coef de frottement fluide
	Cr_ = 10 // Couple de frottement sec
		
	// Membres =======================================================

	J(_J_)
	{
		if(_J_ !== undefined)
			this.J_=_J_
		return this.J_
	}
	
	k(_k_)
	{
		if(_k_ !== undefined)
			this.k_=_k_
		return this.k_
	}
	
	
	fv(_f_)
	{
		if(_f_ !== undefined)
			this.fv_=_f_
		return this.fv_
	}
	
	B(_b_)
	{
		if(_b_ !== undefined)
			this.B_=_b_
		return this.B_
	}
	
	Cr(_c_)// Attention : en setter, ca donne l'amplitude. en getter, ça dépend du sens 
	{
		if(_c_ !== undefined)
			this.Cr_=_c_
		if(this.omega())
		{
			return -this.Cr_*Math.abs(this.omega())/this.omega()	//*Math.abs(Math.atan((this.theta()-THETA)%(2*Math.PI)*10)/(Math.PI/2));//Le dernier coef pour lisser la discontinuité
		}
		return this.Cr_ ; //En cas de non-mouvement, on renvoi l'amplitude (qui sera utile pour "régler" l'adhérence. Voir membre deplaceRotor())
	}
	
	Cfv()
	{
		return -this.fv()*this.omega()
	}
	// Angle de rotation (en radian) dans le sens trigo
	theta(_t_)
	{
		if(_t_ !== undefined)
			this.rotation = -_t_/Math.PI*180;
		return -this.rotation/180*Math.PI;
	}
	
	// vitesse de rotation (en radian/s) dans le sens trigo
	omega(_w_)
	{
		if(_w_ !== undefined)
			this.omega_ = _w_;
		return this.omega_;
	}
	
	// Couple sans les frottements
	C_libre()
	{
		return -this.k() * this.B() * B() * Math.sin(this.theta()-THETA) 
	}
	
	// Couple
	C()
	{
		if(this.omega()==0) // Si on est dans l'adhérence
		{
			if(Math.abs(this.C_libre())<Math.abs(this.Cr())) // Si on est dans le cone de frottement
			{
				return 0
			}
		}
		return this.C_libre() +this.Cfv() + this.Cr();
	}
	
	// Couple
	acc()
	{
		return this.C() / this.J()
	}
	// Fonction qui calcule la rotation du rotor, en fonction des couples en jeu et du pas de temps (euler)
	deplaceRotor(dt)
	{
		if(LECTURE)
		{
			var omegaPrec = this.omega(); // Pour vérifier le retour à l'adhérence
		
			this.theta(this.theta()+dt*this.omega());
			this.omega(this.omega()+dt*this.acc())
			
			// Cas du retour vers l'adhérence
			if(omegaPrec * this.omega() <0 && Math.abs(this.C_libre())<Math.abs(this.Cr()) ) //Si on "coupe" la vitesse nulle et que le couple moteur est plus petit que le frottement
				this.omega(0); // On bloque
		}
	}
	
	// Fonction qui efface puis redessine la flèche
	redessine()
	{
		this.removeAllChildren()
		
		var rotor = new createjs.Shape()
		
		rotor.graphics.beginFill("red").moveTo(0,this.rayon).arcTo(this.rayon,this.rayon, this.rayon,0,this.rayon).arcTo(this.rayon,-this.rayon,0,-this.rayon,this.rayon)
		rotor.graphics.beginFill("blue").moveTo(0,-this.rayon).arcTo(-this.rayon,-this.rayon, -this.rayon,0,this.rayon).arcTo(-this.rayon,this.rayon,0,this.rayon,this.rayon)
		this.addChild(rotor);		
		
		var N = new createjs.Text("N","36px Arial","#FFF")
		N.x = this.rayon/2-N.getBounds().width/2;
		N.y = -N.getBounds().height/2;
		this.addChild(N);
		
		var S = new createjs.Text("S","36px Arial","#FFF")
		S.x = -this.rayon/2-S.getBounds().width/2;
		S.y = -S.getBounds().height/2;
		this.addChild(S);
		
		var F = new Fleche([0,0],[15,0],"red",5)
		this.addChild(F)
		
		this.alpha=0.5;
		

	}

}
