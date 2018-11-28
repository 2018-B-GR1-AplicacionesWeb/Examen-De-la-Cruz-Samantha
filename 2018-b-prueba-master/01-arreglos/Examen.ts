declare var Promise;
declare var require;
const fs = require('fs');
const rxjs = require('rxjs');
function main (){
    leerPeople();
}
function leerPeople() {
    return new Promise((resolve) => {
        fs.readFile('people.json', 'utf-8', (error, contenidoLeido) => {
            if (error) {
                resolve({
                    mensaje: 'Base de datos vacia',
                    people: null
                });
            }
            else {
                resolve({
                    mensaje: 'Si existe la Base',
                    people: JSON.parse(contenidoLeido)
                });
            }
        });
    });
}
function buscarGENDER(gender) {
    return new Promise((resolve, reject) => {
        fs.readFile('people.json', 'utf-8', (err, contenido) => {
            if (err) {
                reject({mensaje: 'Error leyendo'});
            }
            else {
                const people = JSON.parse(contenido);
                const respuestaFind = people.json
                    .find((gender) => {
                        return people.gender === gender;
                    });
                resolve(respuestaFind);
            }
        });

        function buscarEye(eye_color) {
            return new Promise((resolve, reject) => {
                fs.readFile('people.json', 'utf-8', (err, contenido) => {
                    if (err) {
                        reject({mensaje: 'Error leyendo'});
                    }
                    else {
                        const people = JSON.parse(contenido);
                        const respuestaFind = people.json
                            .find((eye_color) => {
                                return people.eye_color === eye_color;
                            });
                        resolve(respuestaFind);
                    }
                });

                function buscarskin(skin_color) {
                    return new Promise((resolve, reject) => {
                        fs.readFile('people.json', 'utf-8', (err, contenido) => {
                            if (err) {
                                reject({mensaje: 'Error leyendo'});
                            }
                            else {
                                const people = JSON.parse(contenido);
                                const respuestaFind = people.json
                                    .find((skin_color) => {
                                        return people.skin_color === skin_color;
                                    });
                                resolve(respuestaFind);
                            }
                        });


                        main();
    }