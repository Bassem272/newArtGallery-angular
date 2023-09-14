# NewArtGallery

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.1.

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


ng generate module shared --routing 
ng generate module admin --routing 
ng generate module user --routing 
ng generate module authentication --routing

ng generate component user/home --module=user 
ng generate component user/products --module=user 
ng generate component user/profile --module=user 
ng generate component user/cart --module=user 
ng generate component user/checkout --module=user 
ng generate component user/product-details --module=user 
ng generate component authentication/login --module=authentication 
ng generate component authentication/logout --module=authentication 
ng generate component authentication/register --module=authentication 

ng generate component shared/header --module=shared 
ng generate component shared/footer --module=shared 
ng generate component shared/admin-header --module=shared 
ng generate component shared/admin-footer --module=shared 
ng generate component shared/admin-sidenav --module=shared 


ng generate component admin/dashboard --module=admin
ng generate component admin/customers --module=admin
ng generate component admin/products --module=admin
ng generate component admin/orders --module=admin 


Install Angular Material:

Install Font Awesome:
ng add @angular/material
npm install bootstrap
npm install @fortawesome/fontawesome-svg-core
npm install @fortawesome/free-brands-svg-icons
npm install @fortawesome/free-regular-svg-icons
npm install @fortawesome/free-solid-svg-icons
npm install @fortawesome/fontawesome-free
npm install @fortawesome/angular-fontawesome
After installing these packages, you can import them in your Angular project as needed. For example, to use Font Awesome icons, you can add the following line to your styles.scss file:
@import '~@fortawesome/fontawesome-free/css/all.css';
