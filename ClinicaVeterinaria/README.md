# Como subir este proyecto a tu playground

1. Crea un playground, obtén su usuario, contraseña y URL:




2. Escriba en la terminal o CMD "sf org login web -r url -s -a NombreProyecto", en mi caso:

   sf org login web -r https://....trailblaze.my.salesforce.com -s -a ClinicaVeterinaria

   y auténtifiquese de tal forma que parezca en la parte inferior ClinicaVeterinaria.

   
3. Suba los siguientes componentes:
   
    3.1 Objects:


    3.2 BrandingSets

    3.3 Contentassets

    3.4 QuickActions



    3.5 Tabs

    3.6 Applications

    3.7 Permissionsets


4. Aplique el permissionset subido al usuariario logeado
   4.1 sf org assign permset -n ClinicaVeterinaria

5. Importe los datos de la carpeta .\assets\WE_...



