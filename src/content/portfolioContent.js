import { appRoutes } from "../routes";

export const portfolioContent = {
  en: {
    navItems: [
      { id: "core-identity", path: appRoutes.identity, label: "Identity" },
      { id: "mental-lab", path: appRoutes.lab, label: "Lab" },
      { id: "neural-stack", path: appRoutes.stack, label: "Stack" },
      { id: "signal-feed", path: appRoutes.signal, label: "Signal" },
      { id: "connection-protocol", path: appRoutes.connect, label: "Connect" },
    ],
    navbar: {
      brand: "EMANUEL MARTINEZ",
      toggleLabel: "Switch language",
      languages: {
        en: "EN",
        es: "ES",
      },
    },
    hero: {
      intro: "Mind Interface",
      microcopy: "Neural entry point",
      title: ["EMANUEL'S", "FULLSTACK", "SIGNAL"],
      subhero: "A futuristic portfolio engineered to feel like a live system.",
      lede:
        "I build web products from interface to infrastructure with a systems-first mindset, sharp frontend execution, and backend logic that stays clear under complexity.",
      primaryCta: "Enter Mental Lab",
      primaryHref: appRoutes.lab,
      secondaryCta: "Open Hiring Channel",
      secondaryHref: appRoutes.connect,
      highlightsLabel: "Profile highlights",
      highlights: [
        { label: "Current Role", text: "Fullstack Product Builder" },
        { label: "Primary Focus", text: "Scalable web systems and polished UX" },
        { label: "Operating Mode", text: "Interface, logic, data, deployment" },
      ],
    },
    identity: {
      intro: "Core Identity",
      title: "THE WAY I THINK IS THE PRODUCT I BRING TO A TEAM.",
      description:
        "I like software that feels coherent end to end. The interface should guide action, the backend should stay predictable, and the release process should reduce friction instead of adding it.",
      rows: [
        {
          index: "01",
          title: "Structured Thinking",
          text: "I break problems into flows, boundaries, and responsibilities before writing code, so implementations stay scalable instead of reactive.",
        },
        {
          index: "02",
          title: "Product Awareness",
          text: "I care about user clarity, not just technical correctness. Good software has to make sense on screen and in code.",
        },
        {
          index: "03",
          title: "Delivery Discipline",
          text: "I value maintainability, performance, and predictable release habits because quality is part of the user experience.",
        },
      ],
    },
    lab: {
      intro: "Mental Lab",
      title: "EACH PROJECT IS A DEPLOYED THOUGHT PROCESS.",
      description:
        "I do not present projects as screenshots. I present them as technical decisions translated into useful systems.",
      stackLabel: "Technologies used",
      entries: [
        {
          experiment: "Experiment 01",
          label: "Fullstack Platform",
          kicker: "Operational memory map",
          title: "Product Operations Dashboard",
          text: "Designed an internal workspace to centralize workflows, operational visibility, and role-based actions across the team.",
          tone: "cyan",
          image: "",
          imageAlt: "Preview panel for the product operations dashboard project",
          previewTag: "Live System",
          previewTitle: "Ops Surface",
          previewMeta: "roles / analytics / workflow control",
          stack: ["React", "Node.js", "PostgreSQL", "Charts"],
          primaryLabel: "View Project",
          primaryHref: "#",
          repoLabel: "GitHub repository",
          repoHref: "#",
          points: [
            "Scope: frontend architecture, API integration, UX flows",
            "Challenge: keep dense information readable and fast",
            "Outcome: clearer workflows and stronger operational control",
          ],
        },
        {
          experiment: "Experiment 02",
          label: "Service Layer",
          kicker: "Security behavior model",
          title: "Authentication and Access System",
          text: "Built a secure entry layer with session control, protected routes, and differentiated access based on system responsibilities.",
          tone: "magenta",
          image: "",
          imageAlt: "Preview panel for the authentication and access system project",
          previewTag: "Secure Gate",
          previewTitle: "Auth Kernel",
          previewMeta: "sessions / validation / route shielding",
          stack: ["React", "JWT", "Node.js", "MongoDB"],
          primaryLabel: "View Demo",
          primaryHref: "#",
          repoLabel: "GitHub repository",
          repoHref: "#",
          points: [
            "Scope: auth flows, backend validation, route protection",
            "Challenge: keep security strong without harming UX",
            "Outcome: safer navigation and cleaner permission logic",
          ],
        },
        {
          experiment: "Experiment 03",
          label: "Data Engine",
          kicker: "Signal interpretation layer",
          title: "Real-Time Monitoring Interface",
          text: "Created a live data experience for status tracking, activity awareness, and operational decision-making.",
          tone: "violet",
          image: "",
          imageAlt: "Preview panel for the real-time monitoring interface project",
          previewTag: "Realtime Pulse",
          previewTitle: "Signal Board",
          previewMeta: "activity / sync / decision support",
          stack: ["React", "WebSockets", "Spring Boot", "Redis"],
          primaryLabel: "View Project",
          primaryHref: "#",
          repoLabel: "GitHub repository",
          repoHref: "#",
          points: [
            "Scope: UI state design, real-time sync, dashboard behavior",
            "Challenge: avoid noise while exposing useful change",
            "Outcome: higher visibility and quicker reaction loops",
          ],
        },
      ],
    },
    stack: {
      intro: "Neural Stack",
      title: "MY STACK IS ORGANIZED BY CAPABILITY, NOT BY LOGO COLLECTION.",
      description:
        "I prefer technologies that help build coherent products, maintainable services, and dependable delivery cycles.",
      capabilities: [
        {
          index: "01",
          title: "Interface Systems",
          text: "Responsive product UIs, component structure, state handling, and frontend experiences that stay clear under complexity.",
        },
        {
          index: "02",
          title: "Backend Logic",
          text: "APIs, validations, business rules, service organization, and application flows that remain explicit and testable.",
        },
        {
          index: "03",
          title: "Data Modeling",
          text: "Relational thinking, query clarity, and data structures built around long-term maintainability.",
        },
        {
          index: "04",
          title: "Delivery Quality",
          text: "Performance awareness, testing habits, deployment discipline, and engineering standards that protect the product over time.",
        },
      ],
    },
    signal: {
      intro: "Signal Feed",
      title: "TECHNICAL CREDIBILITY SHOULD BE VISIBLE, NOT IMPLIED.",
      description:
        "These are the quality signals I care about when building software and the standards I aim to bring into every team.",
      items: [
        {
          index: "A",
          title: "Readable Architecture",
          text: "Clear responsibilities across screens, services, and data flow.",
        },
        {
          index: "B",
          title: "Performance Awareness",
          text: "Interfaces should stay responsive and services should stay predictable.",
        },
        {
          index: "C",
          title: "Testing Mindset",
          text: "Critical logic deserves confidence before release, not after failure.",
        },
        {
          index: "D",
          title: "Delivery Discipline",
          text: "Clean handoffs, reliable deploys, and attention to production reality.",
        },
      ],
      currentState: {
        label: "Current State",
        title: "Actively sharpening fullstack depth.",
        text: "Focused on building stronger product systems, improving frontend precision, and writing backend code that scales with confidence.",
      },
    },
    contact: {
      intro: "Connection Protocol",
      title: "I AM BUILT FOR TEAMS THAT NEED EXECUTION, CLARITY, AND TECHNICAL JUDGMENT.",
      description:
        "I bring product awareness, structured engineering, and end-to-end delivery. The right team gets someone who can think across interface, backend, data, and release quality without losing clarity.",
      items: [
        {
          label: "Preferred Channel",
          text: "emanuel@example.com",
          href: "mailto:emanuel@example.com",
        },
        {
          label: "Best Fit",
          text: "Product teams that need a fullstack engineer with strong frontend judgment and systems thinking.",
        },
        {
          label: "What I Add",
          text: "Clear execution, readable architecture, and a product mindset that improves decisions across the stack.",
        },
      ],
      form: {
        panelLabel: "Transmission Channel",
        title: "START THE CONVERSATION IF YOU NEED A FULLSTACK PROFILE WITH JUDGMENT AND RANGE.",
        description:
          "Use this channel if you are hiring for technical judgment, product sensitivity, and strong execution. The message opens already structured so the conversation starts with context.",
        markersLabel: "Transmission markers",
        markers: ["Execution", "Product judgment", "Fullstack range"],
        targetEmail: "emanuel@example.com",
        mailSubjectPrefix: "Neural contact |",
        bodyLabels: {
          sender: "Sender",
          email: "Email",
          mission: "Mission",
          message: "Message",
        },
        fields: {
          sender: {
            label: "Origin identity",
            placeholder: "Your name, company, or hiring lead identity",
          },
          email: {
            label: "Reply channel",
            placeholder: "name@company.com",
          },
          mission: {
            label: "Mission context",
            placeholder: "Role scope, team context, or product challenge",
          },
          message: {
            label: "Transmission payload",
            placeholder:
              "Describe what you are building, where the team needs stronger technical leverage, and why this role matters now.",
          },
        },
        helper:
          "Submitting opens your email client with a structured outreach draft, ready to send.",
        submitLabel: "Transmit briefing",
      },
    },
    shared: {
      backToHub: "Back to the Mind-Hub",
    },
  },
  es: {
    navItems: [
      { id: "core-identity", path: appRoutes.identity, label: "Identidad" },
      { id: "mental-lab", path: appRoutes.lab, label: "Lab" },
      { id: "neural-stack", path: appRoutes.stack, label: "Stack" },
      { id: "signal-feed", path: appRoutes.signal, label: "Señal" },
      { id: "connection-protocol", path: appRoutes.connect, label: "Contacto" },
    ],
    navbar: {
      brand: "EMANUEL MARTINEZ",
      toggleLabel: "Cambiar idioma",
      languages: {
        en: "EN",
        es: "ES",
      },
    },
    hero: {
      intro: "Interfaz Mental",
      microcopy: "Punto de entrada neural",
      title: ["EMANUEL'S", "FULLSTACK", "SIGNAL"],
      subhero: "Un portafolio futurista diseñado para sentirse como un sistema vivo.",
      lede:
        "Construyo productos web desde la interfaz hasta la infraestructura, con mentalidad sistémica, ejecución frontend precisa y lógica backend clara incluso en escenarios complejos.",
      primaryCta: "Entrar al Mental Lab",
      primaryHref: appRoutes.lab,
      secondaryCta: "Abrir canal de contratación",
      secondaryHref: appRoutes.connect,
      highlightsLabel: "Resumen del perfil",
      highlights: [
        { label: "Rol Actual", text: "Desarrollador Fullstack orientado a producto" },
        { label: "Foco Principal", text: "Sistemas web escalables y UX pulida" },
        { label: "Modo de Trabajo", text: "Interfaz, lógica, datos y despliegue" },
      ],
    },
    identity: {
      intro: "Identidad Central",
      title: "LA FORMA EN QUE PIENSO ES EL PRODUCTO QUE LLEVO A UN EQUIPO.",
      description:
        "Me interesa el software que se siente coherente de punta a punta. La interfaz tiene que guiar la acción, el backend debe ser predecible y el proceso de entrega tiene que reducir fricción, no agregarla.",
      rows: [
        {
          index: "01",
          title: "Pensamiento Estructurado",
          text: "Descompongo los problemas en flujos, límites y responsabilidades antes de escribir código, para que las implementaciones escalen en lugar de reaccionar tarde.",
        },
        {
          index: "02",
          title: "Visión de Producto",
          text: "Me importa la claridad para el usuario, no solo la corrección técnica. Un buen software tiene que tener sentido en pantalla y también en el código.",
        },
        {
          index: "03",
          title: "Disciplina de Entrega",
          text: "Valoro la mantenibilidad, la performance y los hábitos de release predecibles porque la calidad también forma parte de la experiencia del usuario.",
        },
      ],
    },
    lab: {
      intro: "Mental Lab",
      title: "CADA PROYECTO ES UN PROCESO DE PENSAMIENTO DESPLEGADO.",
      description:
        "No presento proyectos como simples screenshots. Los presento como decisiones técnicas convertidas en sistemas útiles.",
      stackLabel: "Tecnologías utilizadas",
      entries: [
        {
          experiment: "Experimento 01",
          label: "Plataforma Fullstack",
          kicker: "Mapa operativo de memoria",
          title: "Dashboard de Operaciones de Producto",
          text: "Diseñé un workspace interno para centralizar flujos, visibilidad operativa y acciones por rol dentro del equipo.",
          tone: "cyan",
          image: "",
          imageAlt: "Panel de vista previa para el proyecto de dashboard de operaciones de producto",
          previewTag: "Sistema Vivo",
          previewTitle: "Superficie Ops",
          previewMeta: "roles / analíticas / control de flujos",
          stack: ["React", "Node.js", "PostgreSQL", "Charts"],
          primaryLabel: "Ver proyecto",
          primaryHref: "#",
          repoLabel: "Repositorio en GitHub",
          repoHref: "#",
          points: [
            "Scope: arquitectura frontend, integración de APIs, flujos UX",
            "Desafío: mantener información densa legible y rápida",
            "Resultado: workflows más claros y mayor control operativo",
          ],
        },
        {
          experiment: "Experimento 02",
          label: "Capa de Servicios",
          kicker: "Modelo de comportamiento seguro",
          title: "Sistema de Autenticación y Accesos",
          text: "Construí una capa de ingreso segura con control de sesiones, rutas protegidas y accesos diferenciados según responsabilidades del sistema.",
          tone: "magenta",
          image: "",
          imageAlt: "Panel de vista previa para el proyecto de autenticación y accesos",
          previewTag: "Puerta Segura",
          previewTitle: "Núcleo Auth",
          previewMeta: "sesiones / validación / escudo de rutas",
          stack: ["React", "JWT", "Node.js", "MongoDB"],
          primaryLabel: "Ver demo",
          primaryHref: "#",
          repoLabel: "Repositorio en GitHub",
          repoHref: "#",
          points: [
            "Scope: flujos de auth, validación backend, protección de rutas",
            "Desafío: sostener seguridad fuerte sin dañar la UX",
            "Resultado: navegación más segura y permisos más claros",
          ],
        },
        {
          experiment: "Experimento 03",
          label: "Motor de Datos",
          kicker: "Capa de interpretación de señales",
          title: "Interfaz de Monitoreo en Tiempo Real",
          text: "Creé una experiencia de datos en vivo para seguimiento de estado, visibilidad de actividad y toma de decisiones operativas.",
          tone: "violet",
          image: "",
          imageAlt: "Panel de vista previa para el proyecto de monitoreo en tiempo real",
          previewTag: "Pulso Realtime",
          previewTitle: "Signal Board",
          previewMeta: "actividad / sync / soporte de decisión",
          stack: ["React", "WebSockets", "Spring Boot", "Redis"],
          primaryLabel: "Ver proyecto",
          primaryHref: "#",
          repoLabel: "Repositorio en GitHub",
          repoHref: "#",
          points: [
            "Scope: diseño de estado UI, sincronización realtime, comportamiento del dashboard",
            "Desafío: evitar ruido y mostrar solo cambios útiles",
            "Resultado: más visibilidad y respuesta más rápida",
          ],
        },
      ],
    },
    stack: {
      intro: "Neural Stack",
      title: "MI STACK SE ORGANIZA POR CAPACIDAD, NO POR COLECCIÓN DE LOGOS.",
      description:
        "Prefiero tecnologías que ayuden a construir productos coherentes, servicios mantenibles y ciclos de entrega confiables.",
      capabilities: [
        {
          index: "01",
          title: "Sistemas de Interfaz",
          text: "UIs de producto responsivas, estructura de componentes, manejo de estado y experiencias frontend que siguen siendo claras bajo complejidad.",
        },
        {
          index: "02",
          title: "Lógica Backend",
          text: "APIs, validaciones, reglas de negocio, organización de servicios y flujos de aplicación que se mantienen explícitos y testeables.",
        },
        {
          index: "03",
          title: "Modelado de Datos",
          text: "Pensamiento relacional, consultas claras y estructuras de datos orientadas a la mantenibilidad a largo plazo.",
        },
        {
          index: "04",
          title: "Calidad de Entrega",
          text: "Conciencia de performance, hábitos de testing, disciplina de despliegue y estándares de ingeniería que protegen el producto en el tiempo.",
        },
      ],
    },
    signal: {
      intro: "Canal de Señal",
      title: "LA CREDIBILIDAD TÉCNICA DEBE VERSE, NO SUPONERSE.",
      description:
        "Estas son las señales de calidad que priorizo al construir software y los estándares que busco aportar a cada equipo.",
      items: [
        {
          index: "A",
          title: "Arquitectura Legible",
          text: "Responsabilidades claras entre pantallas, servicios y flujo de datos.",
        },
        {
          index: "B",
          title: "Conciencia de Performance",
          text: "Las interfaces deben sentirse ágiles y los servicios deben mantenerse predecibles.",
        },
        {
          index: "C",
          title: "Mentalidad de Testing",
          text: "La lógica crítica merece confianza antes del release, no después del fallo.",
        },
        {
          index: "D",
          title: "Disciplina de Entrega",
          text: "Handoffs limpios, deploys confiables y atención a la realidad de producción.",
        },
      ],
      currentState: {
        label: "Estado Actual",
        title: "Profundizando activamente mi perfil fullstack.",
        text: "Enfocado en construir sistemas de producto más sólidos, mejorar la precisión frontend y escribir backend que escale con confianza.",
      },
    },
    contact: {
      intro: "Protocolo de Conexión",
      title: "ESTOY HECHO PARA EQUIPOS QUE NECESITAN EJECUCIÓN, CLARIDAD Y CRITERIO TÉCNICO.",
      description:
        "Aporto mirada de producto, ingeniería estructurada y capacidad de entrega end-to-end. El equipo correcto suma a alguien que puede pensar interfaz, backend, datos y calidad de release sin perder claridad.",
      items: [
        {
          label: "Canal Preferido",
          text: "emanuel@example.com",
          href: "mailto:emanuel@example.com",
        },
        {
          label: "Mejor Encaje",
          text: "Equipos de producto que necesiten un fullstack con criterio frontend fuerte y pensamiento sistémico.",
        },
        {
          label: "Lo Que Aporto",
          text: "Ejecución clara, arquitectura legible y una mentalidad de producto que mejora decisiones en todo el stack.",
        },
      ],
      form: {
        panelLabel: "Canal de Transmisión",
        title: "INICIÁ LA CONVERSACIÓN SI BUSCÁS UN PERFIL FULLSTACK CON CRITERIO Y RANGO TÉCNICO.",
        description:
          "Usá este canal si estás contratando por criterio técnico, sensibilidad de producto y capacidad de ejecución. El mensaje se abre ya estructurado para que la conversación arranque con contexto.",
        markersLabel: "Marcadores de transmisión",
        markers: ["Ejecución", "Criterio de producto", "Rango fullstack"],
        targetEmail: "emanuel@example.com",
        mailSubjectPrefix: "Contacto neural |",
        bodyLabels: {
          sender: "Origen",
          email: "Email",
          mission: "Contexto",
          message: "Mensaje",
        },
        fields: {
          sender: {
            label: "Identidad de origen",
            placeholder: "Tu nombre, empresa o identidad del hiring lead",
          },
          email: {
            label: "Canal de respuesta",
            placeholder: "nombre@empresa.com",
          },
          mission: {
            label: "Contexto de misión",
            placeholder: "Alcance del rol, contexto del equipo o desafío de producto",
          },
          message: {
            label: "Carga de transmisión",
            placeholder:
              "Contame qué están construyendo, dónde el equipo necesita más peso técnico y por qué este rol importa ahora.",
          },
        },
        helper:
          "Al enviar se abrirá tu cliente de correo con un borrador estructurado, listo para mandar.",
        submitLabel: "Transmitir briefing",
      },
    },
    shared: {
      backToHub: "Volver a la mente",
    },
  },
};
