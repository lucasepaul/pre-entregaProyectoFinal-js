// const bienvenido=(nombre, apellido) => {}

// let nombre = prompt ("Ingrese su nombre");
// let apellido = prompt ("Ingrese su apellido");

// alert (`Bienvenido/a ${nombre} ${apellido} a mi pagina web`);
// console.log (`Bienvenido/a ${nombre} ${apellido} a mi pagina web`);
// for (let i = 0; i < nombre.length; i ++){
    // console.log (nombre[i]);}


    
// incorporando array

const clientes =  [
    {
        nombre : "Lucas" ,
        apellido: "Paul",
        edad : 26,
        ciudad: "Caba"
    } ,
    {
        nombre : "Maria" ,
        apellido: "Sanchez",
        edad : 48,
        ciudad: "Caba"
    } ,
    {
        nombre : "Jose" ,
        apellido: "Paul",
        edad : 52,
        localidad: "San Telmo"
    } ,
    {
        nombre : "Juan" ,
        apellido: "Lopez",
        edad : 28,
        ciudad: "Mataderos"
    } ,
    {
        nombre : "Laura" ,
        apellido: "Fernandez",
        edad : 34,
        ciudad:"Avellaneda"
    } ,
    
]
const clientesExtranjeros = [
    {
        nombre : "Washington" ,
        apellido: "Pereira",
        edad : 29,
        ciudad: "Uruguay"
    } ,
    {
        nombre : "Cesar" ,
        apellido: "Bello",
        edad : 32,
        ciudad: "Venezuela"
    } ,
    {
        nombre : "Ricardo" ,
        apellido: "Kaka",
        edad : 43,
        ciudad: "Brasil"
    } 

]

console.log (clientes[3]) ;
clientes.push({
    nombre: "Juana",
    apellido:"Duprat",
    edad: 30,
    ciudad:"Caba" }) ;
    clientes.push({
        nombre: "Emilse",
        apellido:"Beltramo",
        edad: 38,
        ciudad:"Mendoza" }) ;
        clientes.reverse ();

 
     console.log (clientes);
     //clientes mayores de edad
 
      const totalClientes = clientes.concat(clientesExtranjeros) ;
      console.log (totalClientes);
 
 
       const clientesMayorEdad = totalClientes.filter ((curr) => {
           return curr.edad > 18
       })
       console.log(clientesMayorEdad);
 
 
       //clientes menores de edad
       const clientesMenorEdad = totalClientes.filter ((curr) => {
         return curr.edad < 18
     })
     console.log(clientesMenorEdad);
 

     
     
     //servicios de calibracion

  const serviciosDisponibles = [ 
    { servicio: 'Calibracion guitarra electrica' ,
    precio : 2500},

    {servicio: 'Calibracion guitarra de concierto',
    precio: 1900},

    {servicio: 'Calibracion guitarra electro-acustica',
    precio: 1900},
    { servicio: 'Calibracion guitarra criolla',
    precio : 1500
    },
    { servicio: 'Calibracion bajo electrico',
    precio : 2500
      
    },
    { servicio: 'Calibracion bajo acustico',
    precio : 1900
      
    },
    
]
console.log (serviciosDisponibles);
const resultado = serviciosDisponibles.filter((curr) => 
curr.servicio.includes ('bajo'));
console.log ( resultado)

// sube el precio de los servicios

const preciosActualizados = serviciosDisponibles.map((curr) =>
{
  return {
      servicio: curr.servicio,
      precio: curr.precio * 1.10
  }
});
console.log (preciosActualizados);
 
 
 
     
 
 