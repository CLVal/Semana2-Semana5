const habilidades = new Array ();
var cont = 0;
class jugador {
    constructor(nombre, vida, mana, ataque){
        this.nombre = nombre;
        this.vida = vida;
        this.mana = mana;
        this.ataque = ataque;
    }
 
}

class tanque extends jugador{ //armadura
    constructor(nombre, vida, mana, ataque, armadura, ...habilidades){
        super(nombre, vida, mana, ataque)
        this.armadura= armadura;
        this.fuerte1 = 'mago';
        this.fuerte2 = 'asesino';
        this.habilidades= habilidades;
        this.vida = this.vida * 24 / 100 + this.vida; 
    }

    presentarse(){
        console.log ('Hola, soy ', this.nombre, '. Mis estadísticas son las siguientes: vida: ', this.vida, ', maná: ', this.mana, ', ataque: ', this.ataque, '.');
        console.log ('Mis habilidades son: ')
        for(var valor of this.habilidades){
            console.log(valor);
        }
    }

    comparar(nombre){
        if(nombre instanceof mago == true){
            console.log('Tu personaje ', this.nombre, 'tiene las de ganar');
        }

        if(nombre instanceof asesino == true){
            console.log('Tu personaje ', this.nombre, 'tiene las de ganar');
        }

        if(nombre instanceof tirador == true){
            console.log('Tu personaje ', this.nombre, 'tiene las de perder');
        }

        if(nombre instanceof luchador == true){
            console.log('Tu personaje ', this.nombre, 'tiene las de perder');
        }

        if(nombre instanceof tanque == true){
            console.log('La balanza está equilibrada, todo depende de ti. Échale ganitas');
        }

    }

    

}

class asesino extends jugador{ //
    constructor(nombre, vida, mana, ataque, ...habilidades){
        super(nombre, vida, mana, ataque)
        this.fuerte1 = 'tirador';
        this.fuerte2 = 'mago';
        this.habilidades= habilidades;
        this.ataque =+ this.ataque * 30 / 100;
        this.vida =- this.vida * 5 / 100;
    }

    presentarse(){
        console.log ('Hola, soy ', this.nombre, '. Mis estadísticas son las siguientes: vida: ', this.vida, ', maná: ', this.mana, ', ataque: ', this.ataque, '.');
        console.log ('Mis habilidades son: ')
        for(var valor of this.habilidades){
            console.log(valor);
        }
    }

    comparar(nombre){
        if(nombre instanceof tirador == true){
            console.log('Tu personaje ', this.nombre, 'tiene las de ganar');
        }

        if(nombre instanceof mago == true){
            console.log('Tu personaje ', this.nombre, 'tiene las de ganar');
        }

        if(nombre instanceof luchador == true){
            console.log('Tu personaje ', this.nombre, 'tiene las de perder');
        }

        if(nombre instanceof tanque == true){
            console.log('Tu personaje ', this.nombre, 'tiene las de perder');
        }

        if(nombre instanceof asesino == true){
            console.log('La balanza está equilibrada, todo depende de ti. Échale ganitas');
        }

    }
    

}

class luchador extends jugador{ //movilidad
    constructor(nombre, vida, mana, ataque, movilidad, ...habilidades){
        super(nombre, vida, mana, ataque)
        this.movilidad= movilidad;
        this.fuerte1 = 'tanque';
        this.fuerte2 = 'asesino';
        this.habilidades= habilidades;
        this.vida = this.vida * 15 / 100 + this.vida;
        this.ataque = this.ataque * 15 / 100 + this.ataque;  
    }

    presentarse(){
        console.log ('Hola, soy ', this.nombre, '. Mis estadísticas son las siguientes: vida: ', this.vida, ', maná: ', this.mana, ', ataque: ', this.ataque, '.');
        console.log ('Mis habilidades son: ')
        for(var valor of this.habilidades){
            console.log(valor);
        }
    }

    comparar(nombre){
        if(nombre instanceof tanque == true){
            console.log('Tu personaje ', this.nombre, 'tiene las de ganar');
        }

        if(nombre instanceof asesino == true){
            console.log('Tu personaje ', this.nombre, 'tiene las de ganar');
        }

        if(nombre instanceof tirador == true){
            console.log('Tu personaje ', this.nombre, 'tiene las de perder');
        }

        if(nombre instanceof mago == true){
            console.log('Tu personaje ', this.nombre, 'tiene las de perder');
        }

        if(nombre instanceof luchador == true){
            console.log('La balanza está equilibrada, todo depende de ti. Échale ganitas');
        }

    }

}

class tirador extends jugador{ //distancia
    constructor(nombre, vida, mana, ataque, distancia, ...habilidades){
        super(nombre, vida, mana, ataque)
        this.distancia= distancia;
        this.fuerte1 = 'tanque';
        this.fuerte2 = 'luchador';
        this.habilidades= habilidades;
        this.ataque = this.ataque * 24 / 100 + this.ataque;
         
    }

    presentarse(){
        console.log ('Hola, soy ', this.nombre, '. Mis estadísticas son las siguientes: vida: ', this.vida, ', maná: ', this.mana, ', ataque: ', this.ataque, '.');
        console.log ('Mis habilidades son: ')
        for(var valor of this.habilidades){
            console.log(valor);
        }
    }

    comparar(nombre){
        if(nombre instanceof tanque == true){
            console.log('Tu personaje ', this.nombre, 'tiene las de ganar');
        }

        if(nombre instanceof luchador == true){
            console.log('Tu personaje ', this.nombre, 'tiene las de ganar');
        }

        if(nombre instanceof asesino == true){
            console.log('Tu personaje ', this.nombre, 'tiene las de perder');
        }

        if(nombre instanceof mago == true){
            console.log('Tu personaje ', this.nombre, 'tiene las de perder');
        }

        if(nombre instanceof tirador == true){
            console.log('La balanza está equilibrada, todo depende de ti. Échale ganitas');
        }

    }

}

class mago extends jugador{ //distancia
    constructor(nombre, vida, mana, ataque, distancia, ...habilidades){
        super(nombre, vida, mana, ataque)
        this.distancia = distancia;
        this.fuerte1 = 'tirador';
        this.fuerte2 = 'luchador';
        this.habilidades  = habilidades;
        this.mana = this.mana * 24 / 100 + this.mana;
    }

    presentarse(){
        console.log ('Hola, soy ', this.nombre, '. Mis estadísticas son las siguientes: vida: ', this.vida, ', maná: ', this.mana, ', ataque: ', this.ataque, '.');
        console.log ('Mis habilidades son: ')
        for(var valor of this.habilidades){
            console.log(valor);
        }
    }

    comparar(nombre){
        if(nombre instanceof tirador == true){
            console.log('Tu personaje ', this.nombre, 'tiene las de ganar');
        }

        if(nombre instanceof luchador == true){
            console.log('Tu personaje ', this.nombre, 'tiene las de ganar');
        }

        if(nombre instanceof asesino == true){
            console.log('Tu personaje ', this.nombre, 'tiene las de perder');
        }

        if(nombre instanceof tanque == true){
            console.log('Tu personaje ', this.nombre, 'tiene las de perder');
        }

        if(nombre instanceof mago == true){
            console.log('La balanza está equilibrada, todo depende de ti. Échale ganitas');
        }
    }
}

