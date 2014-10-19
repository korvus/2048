function SoundsAmbient(){

	this.death 		= new Audio("r/sounds/death.ogg");
	this.explosion 	= new Audio("r/sounds/explosion.ogg");
	this.gr 		= new Audio("r/sounds/grognements.ogg");
	this.grr 		= new Audio("r/sounds/grognements0.ogg");
	this.grrr 		= new Audio("r/sounds/impWalking.ogg");
	this.supershotgun = new Audio("r/sounds/bigshoot.ogg");
	this.openMenu 	= new Audio("r/sounds/openingDoor.ogg");

	this.death2 	= new Audio("r/sounds/deathMarines.ogg");
	this.death4 	= new Audio("r/sounds/deathSeargent.ogg");
	this.death8 	= new Audio("r/sounds/deathIMP.ogg");
	this.death16 	= new Audio("r/sounds/deathChaingunman.ogg");
	this.death32 	= new Audio("r/sounds/deathDaemon.ogg");
	this.death64 	= new Audio("r/sounds/deathLostsoul.ogg");
	this.death128 	= new Audio("r/sounds/deathCacodaemon.ogg");
	this.death256 	= new Audio("r/sounds/deathKnight.ogg");
	this.death512 	= new Audio("r/sounds/deathBaron.ogg");
	this.death1024 	= new Audio("r/sounds/deathSpider.ogg");
	this.death2048 	= new Audio("r/sounds/deathCyberdaemon.ogg");

}

SoundsAmbient.prototype.setVolum = function(volum){
	this.death.volume = volum;
	this.explosion.volume = volum;
	this.gr.volume = volum;
	this.grr.volume = volum;
	this.grrr.volume = volum;
	this.supershotgun.volume = volum;
	this.openMenu.volume = volum;

	this.death2.volume = volum;
	this.death4.volume = volum;
	this.death8.volume = volum;
	this.death16.volume = volum;
	this.death32.volume = volum;
	this.death64.volume = volum;
	this.death128.volume = volum;
	this.death256.volume = volum;
	this.death512.volume = volum;
	this.death1024.volume = volum;
	this.death2048.volume = volum;

}

SoundsAmbient.prototype.playstrangesounds = function(){
	this.whatsound = Math.floor(Math.random() * 3) + 1;
	if(this.whatsound==1){
		this.gr.play();
	}else if(this.whatsound==2){
		this.grr.play();
	}else{
		this.grrr.play();
	}
	this.randomSounds();
}

SoundsAmbient.prototype.randomSounds = function(){
	this.grrTimer = Math.round(Math.random()*50000);

	var that = this;
	var callStrangeSound = function(){
		that.playstrangesounds();
	}
	setTimeout(callStrangeSound,this.grrTimer);
}

SoundsAmbient.prototype.playMerge = function(hope){
	this.explosion.play();
	var soundName = "death"+hope;
	this[soundName].play();
}

SoundsAmbient.prototype.playDeath = function(){
	this.death.play();
}

SoundsAmbient.prototype.playStart = function(){
	this.openMenu.play();
}

SoundsAmbient.prototype.playvictory = function(){
	this.supershotgun.play();
}