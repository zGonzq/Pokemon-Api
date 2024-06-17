# Configuración del Proyecto
### Instalación de Node.js y configuración del entorno

- Asegurarse de que Node.js y npm estén instalados
- Crear un nuevo directorio para el proyecto y navegar a él en la consola
- Ejecutar `npm init -y` para crear un archivo `package.json`


### Instalación y configuración de TypeScript

- Instalar TypeScript globalmente y como dependencia de desarrollo con npm
install -g typescript
- Crear un archivo tsconfig.json ejecutando `tsc --init` y ajustar las
configuraciones necesarias

## Conexión a la Base de Datos

- Instalar el paquete mysql2 con `npm install mysql2`.
- Crear un módulo para gestionar la conexión a la base de datos.

## Creación de Clases y Objetos

### Diseño de Clases

- Basándose en el esquema de la base de datos, diseñar clases en TypeScript.
Por ejemplo, clases como Pokemon, Ability, Move.
- Implementar constructores y métodos para manejar la lógica de negocio.

## Implementación de Funciones CRUD

- Implementar funciones para cada clase que permitan realizar operaciones
CRUD sobre la base de datos.
- Por ejemplo, métodos para obtener todos los Pokémon, obtener un Pokémon
por su ID, añadir un nuevo Pokémon, etc.

## Integración y Pruebas

### Ejecutar Consultas desde la Consola

- Crear scripts que permitan interactuar con las funciones implementadas
desde la consola de Node.js.
- Por ejemplo, scripts que al ejecutarse realicen consultas específicas a la base
de datos y muestren los resultados.

## Validación y Pruebas
- Probar las diferentes funciones para asegurar que se manejan correctamente
los datos y que las conexiones a la base de datos son estables.
- Verificar que los errores son manejados adecuadamente.