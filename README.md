This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


<h1 align="center"> LectoCoach </h1>
<p align="center">
  <img src="./public/logo-lc.png" width="600" />
</p>
LectoCoach es una herramienta diseñada para mejorar la comprensión lectora de estudiantes mediante preguntas sobre un texto y la posterior corrección de las respuestas a estas preguntas.
A diferencia de otras IAs que resumen textos o brindan respuestas directas, LectoCoach incentiva la lectura activa, el pensamiento crítico y el entrenamiento de habilidades reales.

### ¿Qué problema resuelve?

La comprensión lectora es una de las habilidades más críticas en la educación, pero también una de las más deficitarias en la región. Afecta directamente en el rendimiento escolar, pero también en la vida cotidiana: interpretar instrucciones, analizar información, resolver problemas o tomar decisiones requieren comprensión lectora. LectoCoach viene a combatir esta problemática, la falta de lectocomprensión en la mayoría de los alumnos en Argentina y Latinoamérica. Este desarrollo funciona a la inversa de la mayoría de las IA hoy en día, donde los alumnos no leen textos sino que piden resúmenes de los mismos. Esto provoca que no se practique el hábito de la lectura, y las habilidades para extraer ideas principales de un texto o leer entre líneas no se desarrollen y se acaben perdiendo.  LectoCoach se presenta como una herramienta accesible que acompaña el proceso de lectura sin reemplazarlo. Mediante preguntas sobre el texto, obliga al estudiante a leer activamente, comprender lo que lee y razonar ideas para luego poder contestar las preguntas de forma correcta. Además, al proporcionar feedback inmediato, el alumno puede comprender sus errores y áreas a mejorar para seguir trabajando en ellas.

### ¿Cuál es su impacto?

El impacto esperado de LectoCoach es mejorar gradualmente la capacidad de interpretar textos, desarrollando habilidades de análisis, inferencia y síntesis. También pretende promover el aprendizaje autónomo y aumentar la motivación de aprender mediante práctica interactiva y feedback instantáneo. 

## Tecnologías utilizadas

### [Next.js](https://nextjs.org)
<img src="https://www.digitality.es/img-articulos/ampliadas/que-es-nextjs-y-para-que-sirve-1-1697560678.jpg" width="300" />
 
Es un framework de React que permite crear aplicaciones web rápidas y modernas. Ofrece renderizado del lado del servidor (SSR), manejo integrado de rutas, optimización automática de rendimiento y una experiencia de desarrollo sencilla. Es ideal para construir aplicaciones escalables con una arquitectura flexible y eficiente.

### [Tailwind CSS](https://tailwindcss.com/)
<img src="https://cms.webtech.tools/wp-content/uploads/2024/07/1715021638881.png" width="300" />

Es un framework de estilos basado en utilidades que permite diseñar interfaces rápidamente usando clases predefinidas directamente en el HTML o JSX. Ofrece total personalización, un diseño consistente y una forma eficiente de crear estilos modernos sin escribir CSS tradicional.

### [Framer-Motion](https://www.npmjs.com/package/framer-motion)
<img src="https://konstantinlebedev.com/static/76d81ec25cd799b15cd16c0b16e869af/cover.png" width="300" />

Es una librería de animaciones para React que permite crear transiciones y efectos fluidos de manera simple y performante, facilitando interfaces modernas y dinámicas sin complejidad extra.

### [Recharts](https://recharts.github.io/)
<img src="https://devio2023-media.developers.io/wp-content/uploads/2021/08/eyecatch_recharts_1200x630.png" width="300" />

Es una librería de gráficos para React basada en componentes. Permite crear visualizaciones de datos simples y personalizables (como líneas, barras, áreas o tortas). Ideal para dashboards y análisis visual dentro de aplicaciones web.

### [Hugging Face](https://huggingface.co/)
<img src="https://miro.medium.com/v2/resize:fit:1400/1*7y6-k8o3pwCBw-0ency01g.jpeg" width="300" />

Es una plataforma y ecosistema de herramientas orientado a modelos de inteligencia artificial, especialmente en procesamiento de lenguaje natural. Ofrece modelos preentrenados, datasets y APIs que permiten integrar, entrenar y desplegar soluciones de IA de forma sencilla y colaborativa

### [Vercel](https://vercel.com/)
<img src="https://basement.studio/_next/image?url=https%3A%2F%2Fassets.basehub.com%2Fdd0abb74%2F4a2a616a6be7ef6150d55180348414c6%2Fvercel0.jpg&w=3840&q=75" width="300" />

Vercel es una plataforma de despliegue optimizada para aplicaciones frontend, especialmente proyectos basados en Next.js. Permite realizar deploys rápidos y automáticos conectando el repositorio de Github.


## Arquitectura y Funcionamiento de LectoCoach

LectoCoach se organiza en una arquitectura simple y modular basada en Next.js.
El frontend se encarga de la interfaz interactiva, permitiendo al usuario ingresar un texto, responder preguntas y visualizar el informe final. Las animaciones y la experiencia visual se gestionan con TailwindCSS y Framer Motion.

El backend utiliza API Routes de Next.js, donde cada endpoint procesa tareas específicas: generar preguntas o evaluar respuestas. Estas rutas se comunican con la Hugging Face Inference API, enviando prompts estructurados y recibiendo respuestas que el frontend presenta al usuario.

### Estructura de carpetas y archivos
```bash
.
├── app/
│   ├── api/
│   │   ├── generate-questions/
│   │   │   └── route.js
│   │   └── check-answers/
│   │       └── route.js
│   ├── lectocoach/
│   │   └── page.jsx
│   ├── comprension/
│   │   └── page.jsx
│   ├── como-funciona/
│   │   └── page.jsx
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── FadeIn.jsx
│   │   ├── Header.js
│   │   ├── PISABARchart.js
│   │   └── PISABARChart.js
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.js
│   └── page.jsx   # Landing Page
│
├── public/
│   └── logo-lc.png
│
├── .env.local # API Key
├── package.json
└── README.md
```

#### Carpeta app/api/ – Endpoints del backend
Dentro de app/api/ se encuentran las API Routes de Next.js, que actúan como el backend del proyecto. Cada carpeta representa un endpoint y contiene un archivo route.js que procesa una solicitud específica.

<ul>
  <li>generate-questions/route.js</li>
  <li>evaluate-answers/route.js</li>
</ul>

generate-questions/route.js: Recibe el texto enviado por el usuario y genera preguntas de comprensión (literal, inferencial y global) utilizando la API de Hugging Face.
evaluate-answers/route.js: Evalúa las respuestas del usuario y devuelve explicaciones y correcciones.

#### Rutas del frontend — Carpetas con page.jsx
Next.js utiliza el sistema file-based routing, por lo que cada carpeta dentro de app/ con un archivo page.jsx se convierte automáticamente en una ruta pública del sitio.

<ul>
  <li>app/page.jsx: La landing page principal del proyecto (/).</li>
  <li>app/lectocoach/page.jsx: Página donde el usuario ingresa un texto, obtiene las preguntas y completa la actividad.</li>
  <li>app/comprension/page.jsx: Sección de datos e informativa sobre la importancia de la comprensión lectora.</li>
  <li>app/como-funciona/page.jsx: Explicación simple  de cómo funciona la herramienta LectoCoach.</li>
</ul>

#### layout.js — Layout global del proyecto
El archivo layout.js define la estructura base que envuelve a todas las páginas del proyecto. Asegura que toda la aplicación comparta un diseño y configuración base, y permite que componentes globales se mantengan al cambiar de ruta.


### Flujo de ejecución

El flujo completo funciona de la siguiente manera:
<ol>
  <li>El usuario ingresa un texto.</li>
  <li>El frontend envía el texto al backend.</li>
  <li>La API genera preguntas en base a ese texto (literal, inferencial y global).</li>
  <li>El frontend muestra las preguntas al usuario.</li>
  <li>El usuario responde desde la interfaz y se envían nuevamente al backend.</li>
  <li>El backend evalúa las respuestas mediante la API.</li>
  <li>El frontend muestra los resultados de forma clara y visual.</li>
</ol>



