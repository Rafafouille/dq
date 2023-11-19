// Méthode d'héritage : voir https://createjs.com/tutorials/Inheritance/


class Fleche extends createjs.Container
{

	constructor(D_,A_,_couleur_="black",_epaisseur_=1)
	{
		// Appel du constructeur parent
		super()
		
		this.D_ = D_
		this.A_ = A_
		this.couleur_= _couleur_
		this.epaisseur_ = _epaisseur_
		
		this.largeurPointe = 10*_epaisseur_
		this.longueurPointe = 20*_epaisseur_
		
		this.redessine()
	}
	
	
	// Paramètres =====
	
	D_ = [0,0];	// Coordonnées départ
	epaisseur_= 3	// Epaisseur du trait
	A_ = [1,0];	// Coordonnées arrivée
	unite_ = 10;	// nbr de Pixels pour une unité
	
	tige = null;	// élement graphique tige de la flèche
	pointe= null	// élément graphique pointe de la flèche
	
	largeurPointe_ = 10;
	longueurPointe_ =20;
	
	// Membres =======================================================

	// Setter/getter. Point de Départ 
	D(_D_)
	{
		if(_D_ !== undefined)
			this.D_=_D_
		return this.D_
	}

	// Setter/getter. Point de Départ 
	A(_A_)
	{
		if(_A_ !== undefined)
			this.A_=_A_
		return this.A_
	}
	

	// Setter/getter. Point de Départ 
	unite(_u_)
	{
		if(_u_ !== undefined)
			this.unite_=_u_
		return this.unite_
	}
	

	// Setter/getter. Epaisseur des traits 
	epaisseur(_e_,redessine=true)
	{
		if(_e_ !== undefined)
		{
			this.epaisseur_=Math.abs(_e_)
			if(redessine)
			{
				this.redessine()
			}
		}
		return this.epaisseur_
	}
	
	

	// Setter/getter. Largeur de la pointe de la flèche
	largeurPointe(_l_,redessine=true)
	{
		if(_l_ !== undefined)
		{
			this.largeurPointe=Math.abs(_l_)
			if(redessine)
			{
				this.redessine()
			}
		}
		return this.largeurPointe_
	}
	
	
	// Setter/getter. Longueur de la pointe de la flèche
	longueurPointe(_l_,redessine=true)
	{
		if(_l_ !== undefined)
		{
			this.longueurPointe=Math.abs(_l_)
			if(redessine)
			{
				this.redessine()
			}
		}
		return this.longueurPointe_
	}
	
	

	// Setter/getter. Epaisseur des traits 
	couleur(_c_,redessine=true)
	{
		if(_c_ !== undefined)
		{
			this.couleur_=_c_
			if(redessine)
			{
				this.redessine()
			}
		}
		return this.couleur_
	}
	

	// norme de la flèche
	norme()
	{
		return Math.sqrt( (this.A_[0]-this.D_[0])*(this.A_[0]-this.D_[0])+(this.A_[1]-this.D_[1])*(this.A_[1]-this.D_[1]) )
	}
	
	
	
	// Fonction qui efface puis redessine la flèche
	redessine()
	{
		this.removeAllChildren()
		
		var largeurPointe = this.largeurPointe_
		var longueurPointe = this.longueurPointe_
		
		if(longueurPointe>this.norme()*this.unite_)
		{
			largeurPointe = largeurPointe/longueurPointe*this.norme()*this.unite_
			longueurPointe=this.norme()*this.unite_;
		}
		
		var nx = (this.A_[0]-this.D_[0])/this.norme();
		var ny = (this.A_[1]-this.D_[1])/this.norme();

		
		var perpx = -ny;
		var perpy = nx;
		
		this.tige = new createjs.Shape();
		this.tige.graphics.setStrokeStyle(this.epaisseur_).beginStroke(this.couleur_,"round");
		this.tige.graphics.moveTo(this.D_[0]*this.unite_,-this.D_[1]*this.unite_)
		this.tige.graphics.lineTo(this.A_[0]*this.unite_ - nx*longueurPointe, -this.A_[1]*this.unite_ + ny*longueurPointe);
		this.addChild(this.tige)
		
		this.pointe = new createjs.Shape();
		
		
		this.pointe.graphics.beginFill(this.couleur_);
		this.pointe.graphics.moveTo(this.A_[0]*this.unite_,-this.A_[1]*this.unite_)
		this.pointe.graphics.lineTo(this.A_[0]*this.unite_ -  nx*longueurPointe+perpx*largeurPointe/2  ,     -this.A_[1]*this.unite_ +  ny*longueurPointe-perpy*largeurPointe/2 )
		this.pointe.graphics.lineTo(this.A_[0]*this.unite_ -  nx*longueurPointe-perpx*largeurPointe/2  ,     -this.A_[1]*this.unite_ +  ny*longueurPointe+perpy*largeurPointe/2 )
		this.pointe.graphics.lineTo(this.A_[0]*this.unite_  ,     -this.A_[1]*this.unite_  )
		this.addChild(this.pointe)
		
	}

}
