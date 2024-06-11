# Como subir este proyecto a tu playground

1. Crea un playground, obtén su usuario, contraseña y URL:

<img src="assets\instructions1.PNG" height="300px"/>

<img src="assets\instructions2.png" height="300px"/>



2. Escriba en la terminal o CMD "sf org login web -r url -s -a NombreProyecto", en mi caso:

   sf org login web -r htts://curious-shark-orxp9j-dev-ed.trailblaze.my.salesforce.com -s -a ZooManagerBackup

   y auténtifiquese de tal forma que aparezca en la parte inferior ZooManagerBackup.

   <img src="assets\instructions3.PNG" height="300px"/>

3. Esta es la estructura de tu proyecto:
4. 
   <img src="assets\schema.PNG" height="300px"/>

5. Suba en el siguiente orden los siguientes componentes:
   
    3.1 Objects:

        3.1.1 Pais
        3.1.2 Raza
        3.1.3 Animal

    3.2 Contentassets


    3.3 Tabs

    3.4 Applications

    3.5 Permissionsets

4. Aplique el permissionset subido al usuariario logeado
   4.1 sf org assign permset -n Zoo_Manager 

5. Importe los datos de la carpeta .\assets\WE_00DWU000005TMTo2AO_1
   con Data import Wizard

   <img src="assets\instructions4.PNG" height="300px"/>

    5.1 Pais

    5.2 Raza

    5.3 Animal 
