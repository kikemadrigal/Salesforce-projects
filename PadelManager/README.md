# Como subir este proyecto a tu playground

1. Crea un playground, obtén su usuario, contraseña y URL:

<img src="assets\instructions1.PNG" height="300px"/>

<img src="assets\instructions2.png" height="300px"/>


2. Escriba en la terminal o CMD "sf org login web -r url -s -a NombreProyecto", en mi caso:

   sf org login web -r https://resilient-raccoon-e2hnod-dev-ed.trailblaze.my.salesforce.com -s -a PadelManagerBackup

   y auténtifiquese de tal forma que parezca en la parte inferior PadelManagerBackup.

   <img src="assets\instructions3.png" height="100px"/>

3. Suba los siguientes componentes:
   
    3.1 Objects:

        3.1.1 Jugador
        3.1.2 Pareja
        3.1.3 Partido

    3.2 BrandingSets

    3.3 Contentassets

    3.4 QuickActions

        3.4.1 Jugador__c.Crear_Pareja_Estrella

        3.4.2 Nuevo_Partido

    3.5 Tabs

    3.6 Applications

    3.7 Permissionsets


4. Aplique el permissionset subido al usuariario logeado
   4.1 sf org assign permset -n Padel_Manager 

5. Importe los datos de la carpeta .\assets\WE_00DWU000005PK782AG_1 con Data import Wizard
 
    5.1 Jugadores

    5.2 Pareja

    5.3 Partido 



