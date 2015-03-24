angular.module('krugermaxi.controllers',[])
.controller('ArticulosController', function(){
    this.articulos = [
        {
            nombre:"nescafe",
            descripcion:"Nescafe",
            precio: 0.50,
            categoria: "Bebida"
        },
        {
            nombre:"salch-pop-fritz",
            descripcion:"Salch-Pop Fritz",
            precio: 1.53,
            categoria: "Embutidos"
        },
        {
            nombre:"calculadora",
            descripcion:"Calculadora",
            precio: 1.26,
            categoria: "Utiles"
        },
        {
            nombre:"galletas_dore_ricas",
            descripcion:"Galletas Ricas",
            precio: 0.54,
            categoria: "Golosinas"
        },
        {
            nombre:"guitig",
            descripcion:"Bebida con Gas",
            precio: 0.80,
            categoria: "Bebida"
        },
        {
            nombre:"mermelada_gustadina",
            descripcion:"Mermelada Gustadina",
            precio: 0.55,
            categoria: "Dulces"
        },
        {
            nombre:"mochila_infantil_tiran",
            descripcion:"Mochila Tyran",
            precio: 20.01,
            categoria: "Utiles"
        },
        {
            nombre:"desodorante_apolo_axe",
            descripcion:"Desodorante Axe",
            precio: 1.90,
            categoria: "Bebida"
        },
        {
            nombre:"toallas_de_cocina",
            descripcion:"Toallas Cocina",
            precio: 0.90,
            categoria: "Limpieza"
        }
    ];
});
