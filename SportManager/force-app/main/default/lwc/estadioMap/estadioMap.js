import { LightningElement,api } from 'lwc';
//import getEstadio from "@salesforce/apex/EstadioService.getEstadio";
export default class EstadioMap extends LightningElement {
    //searchText;
    //Cuando le ponemos un signo $ le decimos que cada  vez que cambia el searchText traeme nuevos valores de la cache o el servidor
    //@wire(getEstadio,{searchText:'$searchText'});
    //estadios;
    //@api name;
    //@api descripccion__c;
    @api name;
    @api descripccion__c;
    @api recordId;
    //@api objectApiName;
    currentrecorId;

    connectedCallback(){
        this.currentrecorId=this.recordId;
    }

    constructor(){
        super();
        console.log('name: '+this.name+', descripcion: '+this.descripccion__c);
        console.log('record id: '+this.recordId);
        console.log('current id: '+this.currentrecorId);
    }
}