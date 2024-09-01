# Toro Wine

Este es un proyecto personal para una página web llamada **Toro Wine**, desarrollada utilizando Angular 18. La página está diseñada para ofrecer una experiencia elegante y moderna para la presentación del equipo de fútbol y de esports en línea.

## Características

- **Página de inicio**: Presentación atractiva del equipo de futbol Toro Wine con un diseño moderno y responsivo.

- **Despliegue en Netlify**: La aplicación está desplegada y accesible públicamente a través de Netlify.

## Tecnologías utilizadas

- **Angular 18**: Framework principal para el desarrollo del frontend.
- **Bootstrap**: Para el diseño responsivo y estilizado de la página.
- **HTML5 y CSS3**: Utilizados para la estructura y estilo del contenido.
- **TypeScript**: Lenguaje de programación utilizado en Angular.
- **GitHub**: Control de versiones y almacenamiento del código fuente.
- **Netlify**: Plataforma de despliegue continuo para la web.

## Instalación y uso

Sigue estos pasos para clonar y ejecutar el proyecto en tu entorno local:

1. Clona este repositorio:
    ```bash
    git clone https://github.com/usuario/toro-wine.git
    ```

2. Navega al directorio del proyecto:
    ```bash
    cd toro-wine
    ```

3. Instala las dependencias:
    ```bash
    npm install
    ```

4. Inicia la aplicación:
    ```bash
    ng serve
    ```

5. Abre la aplicación en tu navegador en `http://localhost:4200/`.

## Despliegue

El proyecto está desplegado en Netlify y se puede acceder a él a través del siguiente enlace:

[Visitar Toro Wine](https://enlace-netlify.netlify.app)

El despliegue continuo está configurado para que cada vez que se realiza un push en la rama principal de GitHub, Netlify automáticamente reconstruya y despliegue la última versión del proyecto.

## Estructura del proyecto

```plaintext
|
|
|
public/
├── assets/                # Recursos estáticos como imágenes y fuentes
|                
src/
│
├── app/
│   ├── components/        # Componentes principales
│   ├── services/          # Servicios para manejar la lógica del negocio
│   ├── models/            # Definición de interfaces y modelos de datos
│   ├── app-routing.module.ts
│   ├── app.component.ts
│   └── app.module.ts
│

├── environments/          # Configuración para distintos entornos 
├── index.html
└── styles.css
