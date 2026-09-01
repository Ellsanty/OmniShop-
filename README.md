## 👥 Autores y Colaboradores
* **Santiago José Penso Peña** - Arquitectura Backend, Flask y Despliegue en Netlify
* **Cristian Diaz** - Gestión de Base de Datos y Configuración de Conexiones
* **Cristian Cantillo** - Pruebas, Control de Git y Documentación de Rutas

# 🛒 OmniShop - E-commerce Marketplace

Bienvenido a **OmniShop**, una plataforma web tipo marketplace desarrollada como parte de la formación en el programa de Tecnología en Desarrollo de Software en la Universidad de la Costa (CUC).

## 🚀 Descripción del Proyecto
OmniShop es una aplicación web dinámica de comercio electrónico. A diferencia de una página estática, cuenta con un backend robusto que gestiona autenticación de usuarios (con roles de cliente y administrador), control de inventario en tiempo real, carrito de compras persistente, procesamiento de pedidos y registro de ventas.

## 🛠️ Tecnologías Utilizadas
* **Backend:** Python con Flask (manejo de rutas, sesiones y lógica del servidor).
* **Base de Datos:** PostgreSQL (alojada en Supabase) con soporte dual para SQLite en entornos locales.
* **Frontend:** HTML5, CSS3, JavaScript (ES6+) y plantillas dinámicas con Jinja2.
* **Control de Versiones y Despliegue:** Git, GitHub y Render (para producción).

## 📂 Estructura Principal del Proyecto
```text
omnishop/
│
├── app.py             # Archivo principal del servidor Flask y rutas
├── requirements.txt   # Dependencias de Python para producción
├── Procfile           # Configuración de arranque para Render (Gunicorn)
├── templates/         # Plantillas HTML dinámicas (Jinja2)
│   ├── index.html     # Página principal y catálogo
│   ├── carrito.html   # Vista del carrito de compras
│   ├── perfil.html    # Gestión de datos del usuario
│   ├── mis_pedidos.html # Historial de compras del cliente
│   ├── inventario.html  # Panel de administración de stock
│   ├── admin_usuarios.html # Gestión de usuarios (Admin)
│   ├── login.html     # Inicio de sesión
│   └── registro.html  # Registro de nuevos usuarios
└── static/            # Archivos estáticos (imágenes de productos, estilos, etc.)