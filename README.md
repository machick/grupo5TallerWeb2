# TallerWeb2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.7.

## Machi notas
Clonar el repo y luego correr `npm install` una vez instalado las dependencias tendrian que correr el proyecto con `ng serve` (aconsejo `ng serve -o` asi tambien se los abre automaticamente con el navegador predeterminado) 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

`

const express = require('express');
const router = express.Router();
const {Product} = require('@models');
const logger = require('@logger');

router.get('/:idRestaurant/:search?', (req, res) => {
    let searchWord = req.params.search;
    let products;
    if(searchWord !== null && searchWord !== '' && searchWord) {
        searchWord = req.params.search.trim();
        products = Product.find({restaurant: req.params.idRestaurant, name: new RegExp(searchWord, 'i')})
            .sort({createdAt: -1});

    } else {
        products = Product.find({restaurant: req.params.idRestaurant}).sort({createdAt: -1});
    }

    return products.then((data) => {
        return res.status(200).json(data);
    }).catch((err) => {
        logger.error(`PRODUCTS OF RESTAURANT - ERROR ${err.message}`);
        return res.status(500).json({
            errorCode: 500,
            userMessage: 'Internal error'
        });
    });

});

module.exports = router;


`
