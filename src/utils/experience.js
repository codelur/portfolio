const data = {
    EN: [
        { id: 1, company: "Freelance", position: "Full Stack Engineer",
            details:[{title: "UI/UX",
                    description: " Developed a budgeting tool for financial operations, offering personalized budgeting features and seamless "+
                        "integration with user accounts, resulting in improved financial oversight (ReactJS)."},
                {   title: "Secure platform",
                    description: "Engineered a web portal for user data management and event scheduling, integrating workflow "+
                        "automation to enhance operational efficiency ( Thymeleaf, Spring JPA, MongoDB, RESTful APIs)."},
                {   title: "Real-time geolocation",
                    description: "Managed a device location tracking feature with live updates and display configuration for a "+
                        "global lead fleet monitoring company, enhancing fleet management and operational visibility (Vue.js, GoLang)."},
                {   title: "Security",
                    description: " Enhanced API security by implementing JWT-based authorization, improving system security."}
            ]
        },
        { id: 2, company: "AMCS Group", position: "Full Stack Engineer",
            details:[{title: "AWS/Docker",
                    description: ":Participated in the design of a cloud-based SaaS platform for utilities management hosted on AWS "+
                        "leveraging Docker containerization for optimal performance, supporting millions of users."},
                {   title: "Microservices",
                    description: "Contributed to migrating to a scalable architecture by implementing interactions within a distributed "+
                        "system, ensuring high reliability through automated testing (Spring Framework, RESTful API, JUnit, Postman)."},
                {   title: "Payment handling",
                    description: "Modernized secure bill payment processing by integrating APIs, simplifying accounting "+
                        "workflows, and enabling real-time payment tracking and reporting (Spring, HTML5, CSS, JavaScript)."},
                {   title: "Agile",
                    description: "Led Java-based projects, ensuring exceptional code quality through strong leadership, comprehensive code "+
                        "reviews, and optimized workflows (CI/CD, Jira)."},
                {   title: "Database",
                    description: "Halved content search time by developing efficient data processing scripts, improving database query "+
                        "performance and user experience (SQL Server,JSP)."},
                {   title: "User communication hub",
                    description: "Implemented a customer portal including a dashboard, notifications, bill price "+
                        "forecasting, and user plan configuration, significantly improving customer engagement (AngularJS)."},
                {   title: "Customer engagement",
                    description: "Developed a CRM trial platform for managers and onboarding teams, featuring simulated "+
                        "billing and recommendation engines, automating client configuration and streamlining the onboarding process."}
                        
            ]
        },
        { id: 3, company: "CIU Cal International University ", position: "Android Developer",
            details:[{title: "Android Studio",
                    description: "Led the development of smart tools for a student app, including scheduling, a message board, and "+
                        "real-time notifications, significantly enhancing the student experience."},
                {   title: "RESTful API",
                    description: "Streamlined API functionality increasing user engagement through personalized content delivery."}
            ]
        },
        { id: 4, company: "Sun West Mortgage Inc", position: "Software Developer",
            details:[{title: "Automation",
                    description: "Reduced mortgage processing by 30% by automating the application process through API optimization "+
                        "and efficient database query implementation (Java, JSP, CSS, HTML, SQL Server)."},
                {   title: "Workflow Optimization",
                    description: "Modernized reporting workflow used by mortgage professionals to enable faster, dynamic "+
                        "content generation, incorporating background downloading for large reports with completion notifications."}
            ]
        },
        { id: 5, company: "", position: "",
            details:[{title: "",
                    description: ""},
                {   title: "",
                    description: ""},
                {   title: "",
                    description: ""},
                {   title: "",
                    description: ""}
            ]
        },
    ],
    ES: [{ id: 1, company: "Freelance", position: "Ingeniero Full Stack",
            details: [
                { title: "UI/UX", 
                description: "Desarrollé una herramienta de presupuestación para operaciones financieras, ofreciendo características personalizadas de presupuesto e integración fluida con cuentas de usuario, lo que resultó en una mejor supervisión financiera (ReactJS)."
                },
                { title: "Plataforma segura", 
                description: "Diseñé un portal web para la gestión de datos de usuarios y programación de eventos, integrando automatización de flujos de trabajo para mejorar la eficiencia operativa (Thymeleaf, Spring JPA, MongoDB, APIs RESTful)."
                },
                { title: "Geolocalización en tiempo real", 
                description: "Gestioné una función de seguimiento de ubicación de dispositivos con actualizaciones en vivo y configuración de visualización para una empresa global de monitoreo de flotas, mejorando la gestión de flotas y la visibilidad operativa (Vue.js, GoLang)."
                },
                { title: "Seguridad", 
                description: "Mejoré la seguridad de la API implementando autorización basada en JWT, lo que mejoró la seguridad del sistema."
                }
            ]
        },
        { id: 2, company: "AMCS Group", position: "Ingeniero Full Stack",
            details: [
                { title: "AWS/Docker ", 
                  description: "Participé en el diseño de una plataforma SaaS basada en la nube para la gestión de servicios públicos alojada en AWS, aprovechando la contenedorización de Docker para un rendimiento óptimo, soportando millones de usuarios."
                },
                { title: "Microservicios", 
                  description: "Contribuí a la migración a una arquitectura escalable implementando interacciones dentro de un sistema distribuido, asegurando alta fiabilidad mediante pruebas automatizadas (Spring Framework, API RESTful, JUnit, Postman)."
                },
                { title: "Manejo de pagos", 
                  description: "Modernicé el procesamiento seguro de pagos de facturas integrando APIs, simplificando los flujos de trabajo contables y permitiendo el seguimiento y reporte de pagos en tiempo real (Spring, HTML5, CSS, JavaScript)."
                },
                { title: "Ágil", 
                  description: "Lideré proyectos basados en Java, asegurando una calidad excepcional del código mediante un liderazgo fuerte, revisiones exhaustivas de código y flujos de trabajo optimizados (CI/CD, Jira)."
                },
                { title: "Base de datos", 
                  description: "Reduje a la mitad el tiempo de búsqueda de contenido desarrollando scripts eficientes de procesamiento de datos, mejorando el rendimiento de las consultas de base de datos y la experiencia del usuario (SQL Server, JSP)."
                },
                { title: "Centro de comunicación del usuario", 
                  description: "Implementé un portal para clientes que incluye un panel de control, notificaciones, pronóstico de precios de facturas y configuración de planes de usuario, mejorando significativamente el compromiso de los clientes (AngularJS)."
                },
                { title: "Compromiso del cliente", 
                  description: "Desarrollé una plataforma de prueba de CRM para gerentes y equipos de integración, con motores simulados de facturación y recomendaciones, automatizando la configuración del cliente y agilizando el proceso de integración."
                }
            ]
        },
        { id: 3, company: "CIU Cal International University", position: "Desarrollador Android",
            details: [
                { title: "Android Studio", 
                  description: "Lideré el desarrollo de herramientas inteligentes para una aplicación estudiantil, incluyendo configuracion de horario, un tablón de mensajes y notificaciones en tiempo real, mejorando significativamente la experiencia del estudiante."
                },
                { title: "API RESTful", 
                  description: "Optimizé la funcionalidad de la API aumentando el compromiso de los usuarios mediante la entrega de contenido personalizado."
                }
            ]
        },
        { id: 4, company: "Sun West Mortgage Inc", position: "Desarrollador de Software",
            details: [
                { title: "Automatización", 
                  description: "Reduje el procesamiento de hipotecas en un 30% automatizando el proceso de solicitud mediante la optimización de APIs y la implementación eficiente de consultas a la base de datos (Java, JSP, CSS, HTML, SQL Server)."
                },
                { title: "Optimización de flujo de trabajo", 
                  description: "Modernicé el flujo de trabajo de informes utilizado por profesionales de hipotecas para permitir la generación más rápida y dinámica de contenido, incorporando descargas en segundo plano para grandes informes con notificaciones de finalización."
                }
            ]
        },

    ]
};

export default data;