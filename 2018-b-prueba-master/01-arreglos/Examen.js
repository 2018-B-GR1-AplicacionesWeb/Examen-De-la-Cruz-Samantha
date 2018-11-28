var fs = require('fs');
var rxjs = require('rxjs');
function main() {
    leerPeople();
}
function leerPeople() {
    return new Promise(function (resolve) {
        fs.readFile('people.json', 'utf-8', function (error, contenidoLeido) {
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
    return new Promise(function (resolve, reject) {
        fs.readFile('people.json', 'utf-8', function (err, contenido) {
            if (err) {
                reject({ mensaje: 'Error leyendo' });
            }
            else {
                var people_1 = JSON.parse(contenido);
                var respuestaFind = people_1.json
                    .find(function (gender) {
                    return people_1.gender === gender;
                });
                resolve(respuestaFind);
            }
        });
        function buscarEye(eye_color) {
            return new Promise(function (resolve, reject) {
                fs.readFile('people.json', 'utf-8', function (err, contenido) {
                    if (err) {
                        reject({ mensaje: 'Error leyendo' });
                    }
                    else {
                        var people_2 = JSON.parse(contenido);
                        var respuestaFind = people_2.json
                            .find(function (eye_color) {
                            return people_2.eye_color === eye_color;
                        });
                        resolve(respuestaFind);
                    }
                });
                function buscarskin(skin_color) {
                    return new Promise(function (resolve, reject) {
                        fs.readFile('people.json', 'utf-8', function (err, contenido) {
                            if (err) {
                                reject({ mensaje: 'Error leyendo' });
                            }
                            else {
                                var people_3 = JSON.parse(contenido);
                                var respuestaFind = people_3.json
                                    .find(function (skin_color) {
                                    return people_3.skin_color === skin_color;
                                });
                                resolve(respuestaFind);
                            }
                        });
                        main();
                    });
                }
            });
        }
    });
}
