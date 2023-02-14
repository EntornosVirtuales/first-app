# FirstApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

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
"# first-app" 
"# clase-01" 
"# clase-01" 
"# class-01" 
"# first-app" 

##############
####
#################
####
####################
####
#################
####
##############

Define que es un componente y al crearlo que elementos lo forman:
  Un componente de Angular es un elemento que consta de: un archivo que será nuestra plantilla (app.component. html), 
  que es nuestro HTML que se mostrará en la interfaz de usuario, en la vista o, en términos más simples, lo que verá en la página.
  
Define que es un módulo y que función tiene el patrón de diseño decorator:
  Un Modulo: 
    Un módulo angular recopila un conjunto de artefactos angulares, como componentes, directivas, canalizaciones y servicios, que pertenecen al mismo módulo.
    Esto quiere decir que es una agrupación lógica de lo que podríamos llamar un área funcional de nuestra aplicación. 
    Además, un módulo Angular define dependencias con otros módulos, es decir. qué otros módulos importar y qué componentes, directivas o conductos exporta.
  funcion del patron de diseño decorativo:
    Un decorador es un patrón de diseño estructural que le permite agregar dinámicamente un nuevo comportamiento a un objeto colocando el nuevo comportamiento 
    en un objeto envolvente especial.
  
Menciona y describe los elementos importantes de un @NgModule:
  declarations: 
    Componentes, directivas y conductos pertenecientes a este NgModule.
  exports: 
    Un subconjunto de declaraciones que están visibles y disponibles en otras plantillas de componentes de NgModule.
  imports: 
    Las plantillas de componentes declaradas en este NgModule requieren otros módulos cuyas clases exportadas son obligatorias.
  providers: 
    Este NgModule proporciona constructores de servicios en la colección de servicios globales; se puede acceder a ellos en todas las partes de la aplicación.
    (También puede especificar proveedores a nivel de componente, lo que generalmente se prefiere).
  bootstrap: 
    La vista principal de la aplicación, conocida como componente raíz, que aloja todas las demás vistas de la aplicación.
