Evaluación Completa Web App
Esta aplicación web es una herramienta para gestionar la evaluación de docentes y estudiantes, dividida en tres secciones ponderadas:

Evaluación Continua (50%)
Defensa de Perfil de Investigación (20%)
Examen Parcial (30%)
La aplicación permite realizar operaciones CRUD (crear, leer, actualizar y eliminar) en cada sección, calcular automáticamente los promedios de cada parte y sumar el total de la evaluación final. Además, cuenta con una versión imprimible optimizada.

Características
CRUD Completo: Agregar, editar y eliminar registros en cada sección.
Cálculos Automáticos: Se realizan automáticamente el total por registro, los promedios ponderados por sección y la nota final (suma de los tres promedios).
Validaciones de Datos: Se validan los rangos permitidos para cada campo.
Interfaz Responsiva: Utiliza Bootstrap 5 para una apariencia moderna y adaptativa.
Versión Imprimible: Incluye estilos especiales para imprimir, ocultando formularios y botones de acción.
Estructura del Proyecto
bash
Copiar
Editar
/tu-proyecto
├── index.html # Página principal de la aplicación
├── style.css # Estilos personalizados y reglas de impresión
└── script.js # Lógica de la aplicación (CRUD y cálculos)
Requisitos
Navegador web moderno (Chrome, Firefox, Edge, etc.)
Conexión a Internet (para cargar Bootstrap desde el CDN)
Uso
Descarga o clona el repositorio y asegúrate de que los archivos index.html, style.css y script.js se encuentren en el mismo directorio.
Abre index.html en tu navegador.
Utiliza los formularios en cada sección para ingresar los datos de evaluación.
Puedes editar o eliminar registros utilizando los botones correspondientes en cada tabla.
La nota final se actualiza automáticamente cada vez que agregas, editas o eliminas un registro.
Haz clic en el botón "Imprimir" para generar una versión optimizada de la evaluación para impresión.
Personalización
Estilos: Puedes modificar style.css para ajustar el diseño o la presentación de la aplicación.
Lógica: La funcionalidad CRUD y los cálculos se encuentran en script.js; puedes adaptarlos según tus necesidades.
Bootstrap: La aplicación utiliza Bootstrap 5 a través de CDN. Si prefieres trabajar con archivos locales, descarga Bootstrap y actualiza el enlace en index.html.
Contribuciones
Las contribuciones son bienvenidas. Si tienes ideas para mejorar la aplicación o deseas agregar nuevas funcionalidades, por favor crea un pull request o abre un issue.

Licencia
Este proyecto es de código abierto y se distribuye bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.
