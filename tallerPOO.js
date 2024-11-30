///// #2
class Animal {
  constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
  }
  
  //"mostrar informacion" es el metodo general para mostrar la informacion
  mostrarInformacion(){
      console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
  }
  hacenSonido(){
      console.log(`${this.nombre} este animal hace `);  // este es el metodo que heredaran las clases derivadas ( leon, elefante, tigre)
  }
}

class Leon extends Animal{
  constructor(nombre) {
      super(nombre, 12);
      
  }
  rugir(){
  console.log(`${this.nombre} ruge`); //'rugir' es el metodo especifico 
  }
  hacenSonido(){     //Aqui sobrescribimos el metodo "hacenSonido".
  this.rugir();      // este metodo va en todas las clases derivadas
  } 
}

class Elefante extends Animal {
  constructor(nombre) {
      super(nombre, 4);
  }
  tocarTrompeta(){     // este seria el metodo especifico de la clase derivada 'elefante'
      console.log(`${this.nombre} usa su trompa larga`);
  }
  hacenSonido(){
      this.tocarTrompeta();  
  }
}

class Tigre extends Animal {
  constructor(nombre,) {
      super(nombre,6);
  }
  gruñe(){
      console.log(`${this.nombre} gruñe`)
  }
  hacenSonido(){
      this.gruñe();
  }
}
//este seria nuestro arreglo para almacenar a los animales 
const salvajes =[];

salvajes.push(new Leon("Leon"));
salvajes.push(new Elefante("Elefante"));
salvajes.push(new Tigre("Tigre"));

// creamos el metodo para recorrer el arreglo y ejecutar la accion especifica
function ejecutarAcciones(){
salvajes.forEach(animal =>{
  animal.mostrarInformacion();   
  animal.hacenSonido();

});
}
ejecutarAcciones();
/*for (let i = 0; i < salvajes.length; i++) {
  salvajes[i].hacenSonido();
  
}*/




////////#3

class Producto {
  constructor(nombre, precio, cantidadStock) {
      this.nombre = nombre;
      this.precio = precio;
      this.cantidadStock = cantidadStock;

  };
  mostrarInformacion() {
      return `Producto: ${this.nombre}, Precio:${this.precio}, Stock: ${this.cantidadStock}`;
  }

  static bajoStock(almacenar){
      console.log('Productos con stock menor a 10:');
      almacenar.forEach(almacenar =>{
          if (almacenar.cantidadStock < 10) {
              console.log(almacenar.mostrarInformacion());
          }
      });
}
}
class Electrodomestico extends Producto {
  constructor(nombre, precio, cantidadStock, marca) {
      super(nombre, precio, cantidadStock);
      this.marca = marca;

  }
  mostrarInformacion(){
      return `${super.mostrarInformacion()}, Marca: ${this.marca}`;
  }

}
const almacenar = [
  new Electrodomestico("Lavadora", 100, 10, "Samsung"),
  new Electrodomestico("Refrigerador", 150, 20, "Wh"),
  new Producto("Silla Gamer", 230, 5, "Ranger"),
  new Producto("Mesa Madera", 250,6,"El Bosque"),
  new Electrodomestico("Televisor", 300, 15, "Sony"),
 
 ];
 Producto.bajoStock(almacenar);

/////#4

 class Empleado {
  constructor(nombre,sueldo){
      this.nombre = nombre;   
      this.sueldo = sueldo;
      }
      mostrarInformacion(){
          console.log(`Nombre: ${this.nombre} Sueldo: ${this.sueldo}`)
      }
      sueldoTotal(calcular){
          return calcular * this.sueldo

      }
}

class EmpleadoTiempoCompleto extends Empleado{
  constructor(nombre,sueldo){
      super(nombre,sueldo);
     
  }
  sueldoTotal(calcular){
      const Total = super.sueldoTotal(calcular);
      console.log(`empleado a tiempo completo - ${this.nombre}: el sueldo es ${calcular} horas trabajadas es ${Total}`)
      return Total;   
  }

}

class EmpleadoMedioTiempo extends Empleado{
  constructor(nombre,sueldo,){
      super(nombre,sueldo);
      
  }
  sueldoTotal(calcular){
      const Total = super.sueldoTotal(calcular);
      console.log(`empleado medio tiempo - ${this.nombre}: el sueldo por ${calcular} horas trabajadas es de ${Total}`);
      return Total;
  }
}

const trabajadores = [];

trabajadores.push(new EmpleadoMedioTiempo("Carlos", 20));
trabajadores.push(new EmpleadoTiempoCompleto("Juan", 12));
trabajadores.push(new EmpleadoTiempoCompleto("Pedro", 15));
trabajadores.push(new EmpleadoMedioTiempo("Luis", 18));
trabajadores.push(new EmpleadoTiempoCompleto("Manuel", 17));

const calcular = [12, 24, 24, 12, 24];

for (let i=0; i < trabajadores.length; i++){
  trabajadores[i].mostrarInformacion();
  trabajadores[i].sueldoTotal(calcular[i]);
}


///// #5
class CuentaBancaria {
  #saldo;
  constructor(numeroCuenta, saldo) {
   this.numeroCuenta=numeroCuenta;
   this.#saldo=saldo;
  }
  mostrarInformacion(){
      return this.#saldo;
  }
  depositar(cantidad){
      if (cantidad > 0){
      this.#saldo += cantidad;
      console.log(`Deposito de ${cantidad} realizado en la cuenta ${this.numeroCuenta}.`);
  } else{
      console.log(`No se puede depositar una cantidad negativa`);
  }
}
  retirar(cantidad){
      if (cantidad > 0 && cantidad <= this.#saldo){
          this.#saldo -= cantidad;
          console.log(`Retiro de ${cantidad} realizado en la cuenta ${this.numeroCuenta}`);
      } else {
          console.log(`No se puede retirar una cantidad negativa o mayor a la cuenta`);
      }
       
  }
}

class CuentaAhorros  extends CuentaBancaria {
  constructor(numeroCuenta, saldo, Interes) {
      super(numeroCuenta, saldo);
      this.Interes = Interes
  }
  aplicarIntereses(){
      const interes = this.mostrarInformacion() * (this.Interes / 100);
      this.depositar(interes);
      console.log(`Interes de ${interes.toFixed(2)} aplicados a la cuenta ${this.numeroCuenta}.`);
  }
}

class CuentaCorriente extends CuentaBancaria{
  constructor(numeroCuenta, saldo, limiteCredito) {
      super(numeroCuenta, saldo);
      this.limiteCredito = limiteCredito
  }

  retirar(cantidad){
      if (cantidad > 0 && cantidad <= this.mostrarInformacion() + this.limiteCredito){
          const nuevoSaldo = this.mostrarInformacion() - cantidad;
          this.depositar (-cantidad);
          console.log(`Retiro de ${cantidad} realizado en la cuenta ${this.numeroCuenta},saldo actual: ${this.mostrarInformacion()}.`);
      } else{
          console.log(`No se puede retirar una cantidad negativa o mayor a la cuenta`);
      }
  }
}

const cuentas = [
  new CuentaAhorros("1234", 1000),
  new CuentaCorriente("321", 1200),
];

function depositarEnTodas (cuentas,cantidad){
  cuentas.forEach(cuenta => {
      cuenta.depositar(cantidad);
  });
}

function retirarDeTodas (cuentas,cantidad) {
  cuentas.forEach(cuenta =>{
      cuenta.retirar(cantidad);
  });
}
cuentas.forEach(cuenta => {
   if(cuenta instanceof CuentaAhorros){
      cuenta.aplicarIntereses();
   }
});

depositarEnTodas(cuentas,200);
retirarDeTodas(cuentas,250);

///// #6
class Vehiculo {
  constructor(marca, modelo, año){
  this.marca= marca
  this.modelo = modelo
  this.año = año
  }
  mostrarInformacion(){
      return `Vehiculo :${this.marca} ${this.modelo} ${this.año}`
  }   

}


class Auto extends Vehiculo {
  constructor(marca, modelo, año, ) {
      super(marca, modelo, año);
  }
  conducir(){
      return `Estoy conduciendo un ${this.marca} ${this.modelo} ${this.año}`
  }
}


class Moto extends Vehiculo{
  constructor(marca, modelo, año, ){
      super(marca, modelo, año);
  }
  acelerar(){
      return `Acelerando una moto de marca ${this.marca} modelo ${this.modelo}`;
  }
}

class CatalogoVehiculos {
  constructor(){
      this.vehiculos = [];
  }
agregarVehiculo(vehiculo){
  this.vehiculos.push(vehiculo);
}

listarVehiculosPorTipo(tipo){
  console.log(`Listado de ${tipo}s:`)    
  this.vehiculos.forEach(vehiculo=> {
      if ((tipo === 'Auto' && vehiculo instanceof Auto) ||
      (tipo === 'Moto' && vehiculo instanceof Moto)) {
          console.log(vehiculo.mostrarInformacion());
      }
  });
}
}
const catalogo = new CatalogoVehiculos();

catalogo.agregarVehiculo( new Auto('Toyota', 'Corolla', 2015));
catalogo.agregarVehiculo( new Moto('Honda', 'CBR500R', 2018));
catalogo.agregarVehiculo( new Moto('Yamaha','R1M', 2015));
catalogo.listarVehiculosPorTipo('Auto');
catalogo.listarVehiculosPorTipo('Moto');


////// #7


class Curso{

  constructor(nombreCurso) {
      this.nombreCurso = nombreCurso;  
      this.estudiantes = [];
  }
  agregarEstudiantes(estudiante) {
      this.estudiantes.push(estudiante);
  }
  calcularPromedioCurso() {
      let suma = 0;
      let total = 0;
      for (let i = 0; i < this.estudiantes.length; i++){
          for (let j = 0; j < this.estudiantes[i].calificacion.length; j++);
          suma += this.estudiantes[i].calificacion[j];
          total++;
      }
      return total > 0 ? (suma/ total).toFixed(2) : 0;
  }
}
class Persona {
  constructor(nombre, edad){
      this.nombre = nombre;
      this.edad = edad;
  }
  saludar(){
      return `
          Hola, persona: ${this.nombre}, tu edad es: ${this.edad}`;
  }
}

class Estudiante extends Persona {
  calificaciones;
  constructor(nombre, edad){
      super(nombre, edad);
      this.calificaciones = [];
  }
  agregarCalificaion(calificacion){ //calificacion debe ser un valor numerico
      if(calificacion){
          this.calificaciones.push( parseFloat(calificacion) )
      }else{
          return "Debes ingresar un valor valido";
      }
  }
  calcularPromedio(){
      if( this.calificaciones.length >= 2 ){
          let resultado = 0;
          this.calificaciones.map(calificacion => {
              resultado += calificacion
          })

          return resultado / this.calificaciones.length;
      }
      
  }
}

const perso1 = new Persona("Ramon Valdez", 58);
console.log(perso1.saludar());

const estu1 = new Estudiante("Sebastian Rengifo", 25);
console.log( estu1.saludar() );
estu1.agregarCalificaion(2.3);
estu1.agregarCalificaion(1.5);
estu1.agregarCalificaion(4.0);

console.log( estu1.calcularPromedio() )


///// #8

class Libro {
  constructor ( titulo, autor){
      this.titulo = titulo;
      this.autor = autor;
  }
  
}

class LibroDigital extends Libro {
  constructor (titulo, autor, formato, tamañoArchivo){
      super(titulo, autor);
      this.formato = formato;
      this.tamañoArchivo = tamañoArchivo;
  }
 
}

class LibroFisico extends Libro {
  constructor(titulo,autor,paginas){
      super(titulo,autor);
      this.paginas = paginas;
  }
  
}
/*const biblioteca =[new LibroFisico("Cronica de una muerte anunciada", "Gabriel Garcia Márquez", 250),
  new LibroDigital("Cien Años de Soledad", "Gabriel Garcia Márquez","PDF", '5MB'),
  new LibroFisico ("Don Quijote de la Mancha","Miguel de Cervantes",863,1200),
  
];*/
const listarLibrosPorAutor =(libros,autor) =>{
  return libros.filter(biblioteca=>biblioteca.autor==autor)
}
console.log(listarLibrosPorAutor(biblioteca,"Gabriel Garcia Márquez"))

const biblioteca = [];
biblioteca.push(new LibroDigital("Cien Años de Soledad", "Gabriel Garcia Márquez","PDF", 5));
biblioteca.push(new LibroFisico("1984", "George Orwell", 250));
biblioteca.push(new LibroDigital("El Amor en los tiempos del cólera","Gabriel Garcia Márquez","PDF", 4));
biblioteca.push(new LibroFisico ("Don Quijote de la Mancha","Miguel de Cervantes",863,1200));

function listarLibrosPorAutor(autor){
  console.log(`Libros de ${autor}:`);
  biblioteca.forEach(libro =>{
      if(libro.autor === autor){
          console.log(libro.mostrarInformacion());
      }
  });
}




//// #9

class Transporte {
  constructor(capacidad,tipoCombustible) {
  this.capacidad= capacidad
  this.tipoCombustible = tipoCombustible;
  }
  mostrarInformacion(){
      console.log(` Capacidad: ${this.capacidad} , Tipo de combustible: ${this.tipoCombustible}`);
  }
}

class Automovil extends Transporte {
  constructor(capacidad,tipoCombustible){
      super(capacidad,tipoCombustible)
  }
  arrancar(){
      console.log("El automovil ha arrancado.");
  }
  mostrarInformacion(){
      return `Automovil ${super.mostrarInformacion()}`;
  }

}

class Bicicleta extends Transporte{
  constructor(capacidad){
      super(capacidad)
  }
  pedalear(){
      console.log("La bicicleta está en movimiento.");
  }
  mostrarInformacion(){
      return `Bicicleta: ${super.mostrarInformacion()}`
  }
}

const flota = [];

flota.push (new Automovil(2,"Extra"));
flota.push (new Bicicleta(1,""));
flota.push (new Automovil(2,"Gasolina"));
flota.push (new Bicicleta(1,"Pedal"));
const outout = document.getElemenById('output');

flota.forEach(transporte =>{
  console.log(transporte.mostrarInformacion());

  if (transporte instanceof Automovil){
      transporte.arrancar();
  }else if (transporte instanceof Bicicleta){
      transporte.pedalear();
  }
})


////// 10


class Mascota {
  constructor(nombre, tipo) {
      this.nombre = nombre; 
      this.tipo = tipo;     
  }

  
  mostrarInfo() {
      return `Nombre: ${this.nombre}, Tipo: ${this.tipo}`;
  }
}


class Perro extends Mascota {
  constructor(nombre) {
      super(nombre, "Perro"); 
  }

  
  ladrar() {
      return `${this.nombre} dice: ¡Guau guau!`;
  }
}

class Gato extends Mascota {
  constructor(nombre) {
      super(nombre, "Gato"); //
  }

  
  maullar() {
      return `${this.nombre} dice: ¡Miau!`;
  }
}


const mascotas = [];


mascotas.push(new Perro("Rex"));
mascotas.push(new Gato("Michi"));
mascotas.push(new Perro("Buddy"));
mascotas.push(new Gato("Luna"));


function hacerSonidos() {
  mascotas.forEach(mascota => {
      console.log(mascota.mostrarInfo()); 
      if (mascota instanceof Perro) {
          mascota.ladrar();
      } else if (mascota instanceof Gato) {
          mascota.maullar();
      }
  });
}

hacerSonidos();
