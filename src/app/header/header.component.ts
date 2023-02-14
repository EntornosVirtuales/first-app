import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {



    items: MenuItem[];
    constructor(){
      this.items=[];
    }

    ngOnInit() {
        this.items = [
            {
                label: 'Inicio',
                icon: 'pi pi-fw pi-home',
                items: [
                    {label:'Informacion'},
                    {label: 'Quienes Somos?'}
                ]
            },
            {
                label: 'Noticias',
                icon: 'pi pi-fw pi-globe',
                items: [
                    {label: 'Fichas'},
                    {label: 'Titulacion'},
                    {label: 'Ingenieria'}
                ]
            },
            {
              label: 'UTNG',
              icon: 'pi pi-fw pi-book',
              items: [
                  {label: 'Pagina Oficial'},
                  {label: 'Siga'},
                  {label: 'Elearning'}
              ]
          },
          {
            label: 'Usuarios',
            icon: 'pi pi-fw pi-user',
            items: [
                {label: 'Inicio de Sesion'},
                {label: 'Registro'}
            ]
        },
        ];
    }
}


//{
  //label: 'New', 
  //icon: 'pi pi-fw pi-plus',
  //items: [
    //  {label: 'Project'},
    //  {label: 'Other'},
 // ]
//},