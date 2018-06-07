# Prueba Front-end
Prueba para Evaluación de Front-end

Esa aplicación es un gestor de registros de clientes. Al hacer el login en la aplicación es exhibido al usuario una pantalla con el listado de clientes, en esa pantalla hay un botón (+) que va servir para redireccionar el usuario para la pantalla de registro de cliente. 

Se utilizaron las tecnologías Vue.js y Firebase para estructurar la aplicación.

Referencias:
- [Vue.js](https://vuejs.org/v2/api/)
- [Firebase](https://firebase.google.com/docs/)
- [Firebase Database](https://firebase.google.com/docs/reference/js/firebase.database.Reference)

Version en Portugués: [README.pt-br.md](README.pt-br.md)

## Instrucciones

Requisitos:
- Para ejecutar la aplicación es necesario tener el Node.js y el NPM instalado en su máquina.

Ejecutar la aplicación:
- Abrir la terminal en la carpeta 'Proyecto'
- Ejecutar el comando: npm install
- Ejecutar el comando: npm run dev
- Abrir el navegador y acceder el URL: http://localhost:8080
	
Login de acceso de la aplicación:
- Login: prueba@paytechholding.com
- Contraseña: teste123
	
Tareas:
1. Trabajar en el CSS de la pantalla de Login
2. Crear la página de registro de cliente
	
	
### Tarea 1 - Trabajar en el CSS de la pantalla de Login
Descripción:
- Debes trabajar en el CSS de la página de login para dejarla igual al layout exhibido en la imagen 'Layout - Login.png' ubicada en la carpeta raíz del proyecto.

### Tarea 2 - Crear la página de registro de cliente
Descripción:
- Debes crear un componente que va ser la pantalla de registro de cliente, que va ser insertado en la base de datos en Firebase.
Para acceder hasta esa nueva pantalla, debes agregar una acción en el botón (+) que está en la pantalla de listado,
donde al pinchar, el usuario va ser redireccionado para la pantalla de registro.

- Esa pantalla debe permitir el usuario llenar un objeto con la estructura exhibida en el ejemplo abajo:
```bash
{
 "name": "Jose Alfredo Nunes",
 "phone": "9 3123-1231",
 "email": "jose.alfredo@paytechholding.com",
 "rut": "12.123.123-2" ,
 "description": "El cliente trabaja con informática.",
 "addresses": [
   {
    "name": "Dirección Principal",
    "street": "Av Del Valle",
    "number": 123,
    "complement": "Oficina 12",
    "city": "Santiago",
    "country": "Chile"
  }
 ]
}
```

- Validaciones:
1. El campo "name" no puede ser vacío y necesita tener más de 3 caracteres
2. El campo "phone" no puede ser vacío y necesita tener más de 8 caracteres
3. El campo "email" no puede ser vacío, y necesita tener los caracteres '@' y '.' y necesita tener más de 4 caracteres
4. El campo "rut" no puede ser vacío y necesita tener más de 7 caracteres
5. El campo "addresses" necesita tener por lo menos una dirección
6. El campo "name" de "addresses" no puede ser vacío y necesita tener más de 3 caracteres
7. El campo "street" de "addresses" no puede ser vacío y necesita tener más de 3 caracteres
8. El campo "number" de "addresses" necesita ser un número
9. El campo "city" de "addresses" no puede ser vacío y necesita tener más de 3 caracteres
10. El campo "country" de "addresses" no puede ser vacío y necesita tener más de 3 caracteres

- Use los métodos del Firebase para guardar ese objeto en la base de datos, la referencia en la base de datos es 'customers' 
- Debes mostrar mensajes de error se los campos obligatorios no fueron llenados
- Al obtener una respuesta de suceso en la llamada del registro, redireccionar el usuario para la pantalla de listado

### Enviar el proyecto listo
- Debes enviar el proyecto para el correo: eduardo.moura@paytechholding.com
