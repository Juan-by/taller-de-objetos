// Clase Animal
class Animal {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    hacerSonido() {
      console.log("El animal hace un sonido.");

    }
  }
  
  // Clase "Perro" que hereda de "Animal"
  class Perro extends Animal {
    constructor(nombre, edad, raza) {
           super(nombre, edad);  // Inicializa las propiedades heredadas
          this.raza = raza;
    }
  
    hacerSonido() {
      console.log("El perro ladra: ¡Guau!");
    }
  }
  
  
  const animal = new Animal("Tigre", 4 );
  animal.hacerSonido(); 
  
  const perro = new Perro("Max", 7, "Pitbull");
  perro.hacerSonido(); 

  
   
  console.log(perro);
  console.log(animal);
  console.log(`${perro.nombre} es un ${perro.raza}`);

// 3er Ejercicio//

// Clase Vehiculo (clase padre)
class Vehiculo {
    constructor(marca) {
      this.marca = marca;
    }
  
    arrancar() {
      console.log("El vehículo ha arrancado.");
    }
  }
  
  // Clase Coche (clase hija que hereda de Vehiculo)
  class Coche extends Vehiculo {
    constructor(marca, modelo) {
      super(marca);  //se llama al constructor de Vehiculo para inicializar 'marca'
      this.modelo = modelo;  // la propiedad específica de Coche
    }
  
    mostrarInfo() {
      console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`);
    }
  }
  
  // Crear una instancia de Coche
  const miCoche = new Coche("Toyota", "Corolla");
  
  // Llamando a los métodos
  miCoche.arrancar();         
  miCoche.mostrarInfo();    
    
  


/*
  // Función constructora de Vehiculo
function Vehiculo(marca) {
    this.marca = marca;
  }
  
  Vehiculo.prototype.arrancar = function () {
    console.log("El vehículo ha arrancado.");
  };
  
  // Función constructora de Coche, esta es la que se hereda de Vehiculo
  function Coche(marca, modelo) {
    Vehiculo.call(this, marca); // Hereda la propiedad marca
    this.modelo = modelo;
  }
  
  // Herencia 
  Coche.prototype = Object.create(Vehiculo.prototype);
  Coche.prototype.constructor = Coche;
  
  Coche.prototype.mostrarInfo = function () {
    console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`);
  };
  
  
  const miCoche = new Coche("Toyota", "Corolla");
  miCoche.arrancar(); 
  miCoche.mostrarInfo(); */
  
  //4to Ejercicio

  // Clase Empleado
  /*
class Empleado {
    constructor(nombre, salario) {
      this.nombre = nombre;
      this.salario = salario;
    }
  
    obtenerDetalles() {
      return `Empleado: ${this.nombre}, Salario: ${this.salario}`;
    }
  }
  
  // Clase Gerente que hereda de Empleado
  class Gerente extends Empleado {
    constructor(nombre, salario, departamento) {
      super(nombre, salario); // Inicializa nombre y salario
      this.departamento = departamento;
    }
  
    obtenerDetalles() {
      return `Gerente: ${this.nombre}, Salario: ${this.salario}, Departamento: ${this.departamento}`;
    }
  }
  
  const gerente = new Gerente("Laura", 5000, "Ventas");
  console.log(gerente.obtenerDetalles()); */
  