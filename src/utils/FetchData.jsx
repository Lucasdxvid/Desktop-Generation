//Creamos una promesa que simule un tiempo de espera para recibir los datos

let is_ok = true;

const fetchData = (time, task) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (is_ok) {
        resolve(task);
      } else {
        reject("Ha ocurrido un error con el fetchData");
      }
    }, time);
  });
};

export default fetchData;
