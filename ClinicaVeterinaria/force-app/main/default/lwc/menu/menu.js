import { LightningElement } from 'lwc';
import menu_mascotas_image from '@salesforce/resourceUrl/menu_mascotas_image';
import menu_propietarios_image from '@salesforce/resourceUrl/menu_propietarios_image';
import menu_visitas_image from '@salesforce/resourceUrl/menu_visitas_image';
//Es un mixin que es una estructira standrad de javascript que permite añadir funcionalidad a una clase
import { NavigationMixin } from 'lightning/navigation';

export default class Menu extends NavigationMixin(LightningElement) {
    menu_mascotas_image=menu_mascotas_image;
    menu_propietarios_image=menu_propietarios_image;
    menu_visitas_image=menu_visitas_image;
    navigateToPropietarioHome() {
        // Navigate to the Account home page
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Propietario__c',
                actionName: 'home',
            },
        });
    }
    navigateToMascotaHome() {
        // Navigate to the Account home page
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Mascota__c',
                actionName: 'home',
            },
        });
    }
    navigateToVisitaHome() {
        // Navigate to the Account home page
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Visita__c',
                actionName: 'home',
            },
        });
    }
}