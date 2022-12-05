//Creamos una promesa que simule un tiempo de espera para recibir los datos

let is_ok = true;

export const fetchData = (time, task) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (is_ok) {
        resolve(task);
      } else {
        reject("Error");
      }
    }, time);
  });
};
