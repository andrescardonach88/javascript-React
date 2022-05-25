import logo from './logo.svg'; //LOS IMPORTS VAN PRIMERO
import './App.css';

function App() 
/*TAREA # 1 JS.REACT.

Se debe crear un Array de 5 objetos , donde cada objeto tendrá las 
siguientes propiedades : id, nombre , correo , perfil (el campo perfil
   es otro objeto que tiene las siguientes propiedades :
    dirección , teléfono , sexo,edad)  */

    let estudiante = [
      {
        id: 1,
        nombre: 'Carlos Cardona',
        correo: 'cacardona5@gmail.com',
        perfil: 
               {direccion: 'carrera 123',
                telefono: 4404035,
                sexo: 'masculino',
                edad:10}
      },

      {
        id: 2,
        nombre: 'ANdres Chamorro',
        correo: 'chamorro5@gmail.com',
        perfil: 
               {direccion: 'calle 123',
                telefono: 3335656,
                sexo: 'masculino',
                edad:18}

      },
      {
        id: 3,
        nombre: 'Valentina Cardona',
        correo: 'valentina@gmail.com',
        perfil: 
               {direccion: 'avenida 123',
                telefono: 3109999,
                sexo: 'femenino',
                edad:20}
      },

      {
        id: 4,
        nombre: 'Fabian Chaguendo',
        correo: 'chaguendo@gmail.com',
        perfil: 
               {direccion: 'diagonal 123',
                telefono: 1109090,
                sexo: 'masculino',
                edad:50}
      },

      {
        id: 5,
        nombre: 'Socorro Gonzales',
        correo: 'socorro@gmail.com',
        perfil: 
               {direccion: 'transversal 123',
                telefono: 6606060,
                sexo: 'masculino',
                edad:34}
      },

    ]
    
  /*  Se debe crear una función que me retorne el perfil de un elemento 
  del array , esta función debe recibir como parámetro el índice del elemento 
  del array a retornar , ejemplo : quiero el elemento 1 del array, por lo que 
  llamaré a la función así funciónQueMeRetornaElPerfil(0) , donde 0 es el
   elemento del array que quiero
*/





{
  //LO PRIMERO ES DEFINIR VARIABLES
  //CODIGO LÓGICO DE LA VISTA VA AQUÍ
  const variable = 3.2;
  let nameAndLastName; // letra inicial minuscula, camelCase, ser diciente con los nombres
  const a = 1;
  const booleano = true; //booleans 1 verdadero - 0 false
  const bolleano2 = false; //booleans

  const stringEjemplo = 'hola mundo'; //String
  const stringHola = 'hola'; //String

  const floatEjemplo = 4.3; //Numero con decimales
  const floatEjemplo2 = 4.5;

  const integerExample = 3;
  const integerExample2 = 4;

  const humanExample = {
    nombre: 'Juan',
    apellido: 'perez',
    document: 1234984823,
    haveChildrens: true,
    perfil: {
      edad: 4,
    },
  };

  const humanExample2 = {
    nombre: 'Juan',
    apellido: 'perez',
    document: 1234984823,
    haveChildrens: true,
    perfil: {
      edad: 6,
    },
  };
  console.log('edad1 del humano ', humanExample.perfil.edad);
  console.log('edad 2del humano ', humanExample2.perfil.edad);
  console.log('suma ', humanExample.perfil.edad + humanExample2.perfil.edad);
  const arrayExamples = [
    { nombre: 'juan' },
    { apellido: 'perez' },
    { document: 321421342 },
    { haveChildrens: true },
    [],
  ];

  //TENGO 5 EVENTOS
  const evento1 = {
    name: 'event1',
  };
  const evento2 = {
    name: 'event2',
  };
  const evento3 = {
    name: 'event3',
  };
  const evento4 = {
    name: 'event4',
  };

  const arrayEvents = [evento1, evento2, evento3, evento4]; //cada objeto es un evento

  //OPERACIONES
  //console.log(floatEjemplo + floatEjemplo2);

  //console.log(floatEjemplo - floatEjemplo2);

  //console.log(floatEjemplo / floatEjemplo2);

  //console.log(floatEjemplo * floatEjemplo2);

  //FUNCIONES

  //TAREA 2 , CREO FUNCIÓN QUE RECIBE UN INDICE DEL ARRAY (POSICION DEL ELEMENTO) , RETORNAR EL PERFIL QUE SE ENCUENTRE EN ESA POSICIÓN DEL ARRAY
  function agarrarPefil(indice) {
    //codigo de la funcion
    return ejemploSuma[indice];
  }

  const cambiarValor = (e) => {
    e.preventDefault();
  };

  const ejemploSuma = [1, 2, 3, 4, 5, 6];
  console.log(ejemploSuma[0] + ejemploSuma[1]);

  const ejemploArrayTarea = [{ nombre: 'toño' }];
  console.log('ejemploArrayTarea :>> ', ejemploArrayTarea[0].nombre);
  return <div className='App'>{agarrarPefil(4)}</div>;
}

export default App;


