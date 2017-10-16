Enterprise warp-drive management software
=========================================

Codigo de ejercicio para Idukay, version Javascript

Me queda una duda en el Caso 5, donde dice que el tiempo de retorno debe ser
de 80 minutos, pero en los tests y en analisis no he podido determinar ese
valor propuesto.


Modo de ejecucion:
------------------

Dentro del directorio del proyecto:

````
$ node app.js
````

Los parametros de operacion deben ser argumentos. Los 3 primeros parametros son
los valores de daño de cada reactor y el 4to argumento es la velocidad de la luz
deseada, por ejemplo:

````
$ node app.js 0 0 0 100
````


Ejecucion de los tests:
-----------------------

````
$ jasmine spec/warpdrive_spec.js
````

TODO:
----

- Implementar validaciones de entrada de argumentos o talvez ingreso interactivo

- Mas pruebas unitarias para casos mas extremos, no solo los provistos 
  en el email.

- Documentar los metodos de calculo para los reactores.

- Documentar el metodo de calculo global del WarpDrive.


