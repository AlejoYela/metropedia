// courseData.js

const courseData = [
    {
        id: 1,
        course: "METROLOGÍA BÁSICA",
        image: "https://res.cloudinary.com/dc0aja7yx/image/upload/v1731448961/1_zatgis.png",
        color: "#60a5fa",
        description: "Domina los principios esenciales de la medición y entiende cómo la precisión influye directamente en la calidad. Con teoría y práctica, obtendrás una base sólida para el manejo de instrumentos y calibración, fundamental para cualquier entorno industrial.",
        modules: [
            {
                title: "Fundamentos de la Metrología",
                content: [
                    { subtitle: "¿Qué es Metrología?", description: "Definición, propósito y alcance de la metrología como ciencia de las mediciones." },
                    { subtitle: "Importancia de la Metrología", description: "Relevancia en la industria, la investigación y la vida cotidiana." },
                    { subtitle: "Historia de la Metrología", description: "Evolución histórica desde las primeras mediciones hasta los estándares modernos." }
                ]
            },
            {
                title: "Conceptos Matemáticos Aplicados",
                content: [
                    { subtitle: "Promedio", description: "Cálculo y significado del promedio en el análisis de datos metrológicos." },
                    { subtitle: "Desviación Estándar", description: "Uso y cálculo de la desviación estándar para medir la variabilidad de los datos." },
                    { subtitle: "Notación Científica", description: "Representación de números grandes o pequeños mediante notación científica." }
                ]
            },
            {
                title: "Magnitudes y Unidades",
                content: [
                    { subtitle: "Magnitudes", description: "Clasificación y ejemplos de magnitudes fundamentales y derivadas." },
                    { subtitle: "Unidades de Medida", description: "Concepto y clasificación de unidades de medida." },
                    { subtitle: "Sistemas de Unidades", description: "Sistemas como el SI, sus componentes y su aplicación global." },
                    { subtitle: "Conversión de Unidades", description: "Métodos y ejemplos prácticos para convertir entre unidades diferentes." }
                ]
            },
            {
                title: "Características de las Mediciones",
                content: [
                    { subtitle: "Precisión y Exactitud", description: "Diferencias entre precisión y exactitud y su importancia en las mediciones." },
                    { subtitle: "Incertidumbre", description: "Definición, cálculo e interpretación de la incertidumbre en las mediciones." }
                ]
            },
            {
                title: "Calibración y Documentación",
                content: [
                    { subtitle: "Calibración", description: "Proceso y propósito de la calibración de instrumentos de medición." },
                    { subtitle: "Certificados de Calibración", description: "Elementos y análisis de un certificado de calibración." }
                ]
            }
        ],
        category: "Metrología",
        price: 30000,
        duration: 8,
        rating: 4.5,
        students: 4523,
        lastUpdated: "11/2024",
        language: "Español",
        subtitles: ["Español", "Inglés"],
        includes: ["8 horas de vídeo", "3 artículos", "Certificado de finalización"],
        highlights: [
            "Aprender los principios de la medición",
            "Identificar instrumentos de medición comunes",
            "Practicar aplicaciones reales en metrología"
        ],
        long_description: "La metrología es la ciencia que estudia las mediciones y su aplicación en diferentes campos, siendo fundamental para garantizar la calidad y la precisión en las mediciones en diversas industrias. Este curso proporciona una comprensión básica de los principios fundamentales de la metrología, incluyendo su importancia en la fabricación, la investigación científica, y la gestión de calidad. Aprenderás sobre las herramientas y técnicas de medición, así como sobre las magnitudes y unidades de medida que se emplean en la práctica profesional. Además, se abordan temas como la conversión de unidades y la relación entre precisión, exactitud e incertidumbre, aspectos que son esenciales para la realización de mediciones de alta calidad y su interpretación correcta. Este curso está diseñado tanto para principiantes como para aquellos que desean actualizar sus conocimientos en metrología, aplicando estos conceptos a situaciones reales en la industria."
    },
    {
        id: 2,
        course: "VERIFICACIÓN DE MÉTODOS",
        image: "https://res.cloudinary.com/dc0aja7yx/image/upload/v1731448961/2_pdsybm.png",
        color: "#ff7900",
        description: "Asegura resultados precisos y repetibles con técnicas de verificación y validación de métodos. Aprende a identificar errores y garantizar la fiabilidad en cada medición, manteniendo los más altos estándares de calidad en tus procesos.",
        modules: [
            {
                title: "Introducción a la Verificación de Métodos",
                content: [
                    { subtitle: "Fundamentos de la Verificación de Métodos de Medición", description: "Definición, objetivos y alcance de la verificación en la metrología." },
                    { subtitle: "Criterios de Aceptación para Métodos de Medición", description: "Factores clave para evaluar si un método de medición cumple con los estándares establecidos." }
                ]
            },
            {
                title: "Procedimientos y Factores Clave",
                content: [
                    { subtitle: "Procedimiento para la Verificación de Métodos", description: "Pasos sistemáticos para llevar a cabo una verificación efectiva." },
                    { subtitle: "Factores que Afectan la Verificación de Métodos", description: "Identificación y análisis de variables que pueden influir en la validez del proceso de verificación." }
                ]
            },
            {
                title: "Evaluación y Toma de Decisiones",
                content: [
                    { subtitle: "Evaluación de Desempeño del Método", description: "Herramientas y criterios para medir la eficacia y precisión del método evaluado." },
                    { subtitle: "Interpretación de Resultados y Toma de Decisiones", description: "Cómo analizar los resultados obtenidos y definir acciones correctivas o de aceptación." }
                ]
            },
            {
                title: "Gestión y Aplicaciones Prácticas",
                content: [
                    { subtitle: "Documentación y Registro de Verificación", description: "Formatos, reportes y registros necesarios para asegurar la trazabilidad del proceso." },
                    { subtitle: "Casos Prácticos y Ejercicios de Verificación de Métodos", description: "Resolución de ejemplos reales y simulaciones para afianzar conocimientos teóricos." }
                ]
            }
        ],
        category: "Metrología",
        price: 30000,
        duration: 12,
        rating: 4.7,
        students: 3820,
        lastUpdated: "10/2024",
        language: "Español",
        subtitles: ["Español", "Portugués"],
        includes: ["12 horas de vídeo", "5 artículos", "Material descargable", "Certificado de finalización"],
        highlights: [
            "Técnicas avanzadas de verificación",
            "Métodos para validar procesos de medición",
            "Elaboración de informes técnicos"
        ],
        long_description: "La verificación de métodos de medición es un proceso crítico para asegurar que las mediciones realizadas en un sistema de calidad sean precisas y consistentes. En este curso, exploramos los fundamentos de la verificación de métodos, incluyendo los criterios de aceptación que se deben cumplir para garantizar la fiabilidad de los resultados obtenidos. Aprenderás a implementar procedimientos efectivos para verificar la precisión y confiabilidad de los métodos de medición en distintos entornos. Además, abordaremos los factores que afectan la verificación de los métodos y cómo evaluar el desempeño de los métodos utilizados. El curso también cubre la interpretación de los resultados de la verificación, la documentación requerida y la toma de decisiones basadas en estos resultados. Los participantes trabajarán con casos prácticos y ejemplos de la aplicación de estos procedimientos en diversos sectores, brindando herramientas para una mejor toma de decisiones y mejorando la eficiencia en los sistemas de medición."
    },
    {
        id: 3,
        course: "REGLAS DE DECISIÓN",
        image: "https://res.cloudinary.com/dc0aja7yx/image/upload/v1731448959/3_uwi6xx.png",
        color: "#ac94fa",
        description: "Toma decisiones informadas basadas en datos precisos. Conoce las reglas de decisión en metrología, aprende a interpretar resultados de mediciones y a evaluar la conformidad de productos y procesos de forma efectiva.",
        modules: [
            {
                title: "Fundamentos de las Reglas de Decisión",
                content: [
                    { subtitle: "Introducción a las Reglas de Decisión en ISO/IEC 17025:2017", description: "Definición e importancia de las reglas de decisión según la norma ISO/IEC 17025:2017." },
                    { subtitle: "Concepto de Conformidad y No Conformidad", description: "Diferencias entre conformidad y no conformidad, y cómo se relacionan con las decisiones en la calibración." }
                ]
            },
            {
                title: "Selección y Criterios de las Reglas de Decisión",
                content: [
                    { subtitle: "Tipos de Reglas de Decisión", description: "Exploración de las diferentes reglas de decisión, como las basadas en el límite de aceptación, el nivel de probabilidad y otros factores." },
                    { subtitle: "Criterios para la Selección de Reglas de Decisión", description: "Factores que influyen en la elección de la regla de decisión adecuada según el contexto y los requisitos normativos." }
                ]
            },
            {
                title: "Impacto de la Incertidumbre y su Aplicación",
                content: [
                    { subtitle: "Incertidumbre de Medición y su Impacto en las Reglas de Decisión", description: "Cómo la incertidumbre de medición afecta la toma de decisiones y la interpretación de resultados." },
                    { subtitle: "Aplicación de Reglas de Decisión en Mediciones de Conformidad", description: "Proceso práctico para aplicar reglas de decisión en la evaluación de la conformidad de los resultados de medición." }
                ]
            },
            {
                title: "Gestión y Casos Prácticos",
                content: [
                    { subtitle: "Documentación de las Reglas de Decisión", description: "Requisitos documentales para garantizar la trazabilidad, transparencia y correcta aplicación de las reglas de decisión." },
                    { subtitle: "Casos Prácticos de Implementación de Reglas de Decisión", description: "Ejemplos reales y ejercicios prácticos para entender la implementación de las reglas de decisión en diferentes escenarios de medición." }
                ]
            }
        ],
        category: "Metrología",
        price: 30000,
        duration: 6,
        rating: 4.6,
        students: 2912,
        lastUpdated: "11/2024",
        language: "Español",
        subtitles: ["Español"],
        includes: ["6 horas de vídeo", "Casos prácticos", "Certificado de finalización"],
        highlights: [
            "Interpretar resultados de mediciones",
            "Aplicar reglas de decisión en la industria",
            "Resolver casos de conformidad de procesos"
        ],
        long_description:"Las reglas de decisión son fundamentales para determinar si los resultados de una medición cumplen con los requisitos especificados en un proceso de medición. En el contexto de la norma ISO/IEC 17025:2017, este curso profundiza en cómo establecer y aplicar reglas de decisión en las auditorías y sistemas de medición de los laboratorios de calibración y ensayo. Estudiaremos las diferentes tipos de reglas de decisión, los criterios para su selección y la influencia de la incertidumbre de medición en la toma de decisiones. Además, aprenderás cómo documentar adecuadamente las reglas de decisión y cómo aplicarlas en mediciones de conformidad. El curso también incluye casos prácticos que ilustran la aplicación de estas reglas en situaciones reales, con un enfoque en mejorar la precisión y fiabilidad de los resultados de medición."
    },
    {
        id: 4,
        course: "ISO/IEC 10012:2003 SISTEMAS DE GESTIÓN DE LA MEDICIÓN",
        image: "https://res.cloudinary.com/dc0aja7yx/image/upload/v1731448959/4_nvbpx3.png",
        color: "#16bdca",
        description: "Implementa un sistema de gestión de la medición acorde con ISO/IEC 10012:2003. Desde la planificación hasta la ejecución y evaluación, asegúrate de que cada proceso de medición cumpla con los requisitos de trazabilidad y confiabilidad.",
        modules: [
            {
                title: "Fundamentos de la ISO 10012:2003",
                content: [
                    { subtitle: "Introducción a ISO 10012:2003 y sus Objetivos", description: "Visión general de la norma ISO 10012:2003, sus objetivos y la importancia de un sistema de gestión de la medición en organizaciones." }
                ]
            },
            {
                title: "Requisitos para un Sistema de Gestión de la Medición",
                content: [
                    { subtitle: "Requisitos para un Sistema de Gestión de la Medición", description: "Descripción detallada de los requisitos fundamentales para implementar un sistema efectivo de gestión de la medición." },
                    { subtitle: "Responsabilidad de la Dirección en el Sistema de Medición", description: "El papel clave de la alta dirección en la implementación, supervisión y mantenimiento de un sistema de medición." }
                ]
            },
            {
                title: "Gestión de Recursos y Procesos de Medición",
                content: [
                    { subtitle: "Gestión de Recursos y Competencia del Personal de Medición", description: "Cómo gestionar adecuadamente los recursos y asegurar que el personal encargado de la medición tenga la competencia necesaria." },
                    { subtitle: "Planificación y Control de Procesos de Medición", description: "Estrategias para la planificación adecuada de los procesos de medición y cómo mantener un control efectivo sobre ellos." }
                ]
            },
            {
                title: "Trazabilidad y Evaluación de la Conformidad",
                content: [
                    { subtitle: "Trazabilidad Metrológica y Control de los Equipos de Medición", description: "La importancia de la trazabilidad metrológica y cómo mantener el control adecuado de los equipos de medición." },
                    { subtitle: "Evaluación de la Conformidad de los Procesos de Medición", description: "Métodos para evaluar la conformidad de los procesos de medición y garantizar que cumplan con los requisitos de calidad." }
                ]
            },
            {
                title: "Documentación y Mejora Continua",
                content: [
                    { subtitle: "Documentación y Registros en el Sistema de Gestión de la Medición", description: "Requisitos para la correcta documentación y gestión de registros dentro del sistema de medición." },
                    { subtitle: "Auditoría y Mejora Continua en el Sistema de Medición", description: "El proceso de auditoría y cómo implementarlo para asegurar la mejora continua dentro del sistema de medición." }
                ]
            }
        ],
        category: "Normativa internacional",
        price: 30000,
        duration: 8,
        rating: 4.8,
        students: 3410,
        lastUpdated: "09/2024",
        language: "Español",
        subtitles: ["Español", "Francés"],
        includes: ["8 horas de vídeo", "Documentación de la norma", "Certificado de finalización"],
        highlights: [
            "Implementar sistemas de medición trazables",
            "Auditar sistemas conforme a la norma",
            "Gestionar la calidad en procesos de medición"
        ],
        long_description: "ISO 10012:2003 establece los requisitos para un sistema de gestión de la medición, con el objetivo de asegurar que los procesos de medición sean adecuados y estén bajo control. Este curso ofrece una comprensión profunda de los elementos clave de esta norma, explorando los requisitos que deben cumplirse para implementar un sistema de gestión de la medición efectivo. Aprenderás sobre la responsabilidad de la dirección, la gestión de recursos humanos y la competencia del personal de medición, así como los aspectos clave de la planificación y control de los procesos de medición. El curso también aborda la trazabilidad metrológica, la evaluación de la conformidad de los procesos de medición y la documentación necesaria para cumplir con los requisitos de la norma. Además, se cubren las auditorías y la mejora continua en el sistema de gestión de la medición, asegurando que los procesos sean efectivos y se mantengan en conformidad con los estándares internacionales."
    },
    {
        id: 5,
        course: "VOCABULARIO INTERNACIONAL DE METROLOGÍA",
        image: "https://res.cloudinary.com/dc0aja7yx/image/upload/v1731448959/5_vdwfkj.png",
        color: "#f43f5e",
        description: "Comunícate con claridad en el campo de la metrología. Este curso te familiariza con los términos clave aceptados internacionalmente, asegurando coherencia y precisión en la industria al aplicar estos conceptos en situaciones prácticas.",
        modules: [
            {
                title: "Fundamentos del Vocabulario Internacional de Metrología (VIM)",
                content: [
                    { subtitle: "Introducción al Vocabulario Internacional de Metrología (VIM)", description: "Presentación del VIM, su importancia en la normalización de los términos y su aplicación global en el ámbito metrológico." }
                ]
            },
            {
                title: "Conceptos Fundamentales de Metrología",
                content: [
                    { subtitle: "Conceptos Fundamentales de Metrología", description: "Explicación de los conceptos clave en metrología, como magnitudes, unidades y su rol en la medición precisa." },
                    { subtitle: "Unidades y Magnitudes", description: "Definición y clasificación de las unidades de medida y las magnitudes fundamentales para realizar mediciones de calidad." }
                ]
            },
            {
                title: "Términos Relacionados con la Medición",
                content: [
                    { subtitle: "Términos Relacionados con la Medición", description: "Descripción de los términos utilizados en metrología y su relevancia para garantizar claridad y precisión en la comunicación técnica." }
                ]
            },
            {
                title: "Instrumentos de Medición y sus Características",
                content: [
                    { subtitle: "Instrumentos de Medición y sus Características", description: "Análisis de los distintos tipos de instrumentos de medición, sus características y el impacto de cada uno en los resultados obtenidos." },
                    { subtitle: "Exactitud, Precisión y Errores en Medición", description: "Diferenciación entre exactitud y precisión, así como la identificación y control de los errores en medición." }
                ]
            },
            {
                title: "Incertidumbre y Trazabilidad en la Medición",
                content: [
                    { subtitle: "Incertidumbre de Medición y Trazabilidad", description: "Estudio de la incertidumbre en los resultados de medición y la importancia de la trazabilidad metrológica en el contexto de los estándares internacionales." }
                ]
            },
            {
                title: "Calibración y Verificación de Instrumentos",
                content: [
                    { subtitle: "Calibración y Verificación de Instrumentos", description: "La importancia de la calibración y verificación de instrumentos de medición para garantizar la validez de los resultados." }
                ]
            },
            {
                title: "Evaluación y Expresión de Resultados de Medición",
                content: [
                    { subtitle: "Evaluación y Expresión de Resultados de Medición", description: "Cómo evaluar y comunicar los resultados de medición con claridad, incluyendo la expresión de la incertidumbre asociada." }
                ]
            },
            {
                title: "Casos Prácticos y Aplicación del VIM en la Industria",
                content: [
                    { subtitle: "Casos Prácticos y Aplicación del VIM en la Industria", description: "Estudio de casos prácticos que muestran cómo se aplica el VIM en diferentes contextos industriales para mejorar la precisión y validez de las mediciones." }
                ]
            }
        ],
        category: "Metrología",
        price: 30000,
        duration: 8,
        rating: 4.8,
        students: 3560,
        lastUpdated: "11/2024",
        language: "Español",
        subtitles: ["Español"],
        includes: [
            "8 horas de vídeo",
            "Glosarios descargables",
            "Certificado de finalización"
        ],
        highlights: [
            "Entender términos clave en metrología",
            "Aplicar conceptos internacionalmente aceptados",
            "Mejorar la comunicación técnica en la industria"
        ],
        long_description: "El Vocabulario Internacional de Metrología (VIM) establece los términos y definiciones esenciales para la metrología, proporcionando un marco común para su comprensión y aplicación. Este curso está diseñado para introducir los principales conceptos fundamentales de la metrología, incluyendo las unidades y magnitudes utilizadas en mediciones. Además, se explican los términos más comunes relacionados con la medición y los instrumentos de medición, brindando una comprensión clara sobre exactitud, precisión y errores en medición. Los estudiantes aprenderán sobre la incertidumbre de medición, la trazabilidad y la importancia de la calibración y verificación de instrumentos. A lo largo del curso, se presentan casos prácticos que ilustran cómo se aplican estos conceptos en la industria, garantizando que los participantes puedan aplicar el VIM en su trabajo diario para asegurar la calidad y precisión en sus mediciones."
    },

    {
        id: 6,
        course: "ESTIMACIÓN DE LA INCERTIDUMBRE",
        image: "https://res.cloudinary.com/dc0aja7yx/image/upload/v1731448959/6_fmysqj.png",
        color: "#3b82f6",
        description: "Domina el cálculo y análisis de incertidumbre en tus mediciones para garantizar resultados precisos. Con ejemplos prácticos, comprenderás el impacto de los factores de incertidumbre y cómo controlarlos en procesos industriales.",
        modules: [
            {
                title: "Fundamentos de la Incertidumbre de Medición",
                content: [
                    { subtitle: "Introducción a la Incertidumbre de Medición", description: "Presentación del concepto de incertidumbre en la medición, su importancia y su impacto en los resultados de las mediciones." },
                    { subtitle: "Conceptos Básicos y Terminología Relacionada con la Incertidumbre", description: "Explicación de los términos fundamentales utilizados en la estimación de la incertidumbre, tales como precisión, exactitud y repetibilidad." }
                ]
            },
            {
                title: "Tipos y Fuentes de Incertidumbre",
                content: [
                    { subtitle: "Fuentes de Incertidumbre", description: "Descripción de las diversas fuentes que pueden generar incertidumbre en las mediciones, tanto internas como externas." },
                    { subtitle: "Tipos de Incertidumbre (Tipo A y Tipo B)", description: "Explicación de los dos tipos de incertidumbre: Tipo A (estadística) y Tipo B (no estadística), y su relación con los métodos de estimación." }
                ]
            },
            {
                title: "Métodos de Estimación de la Incertidumbre",
                content: [
                    { subtitle: "Métodos Estadísticos: Promedio, Desviación Estándar, Análisis de Repetibilidad", description: "Enfoque en las técnicas estadísticas utilizadas para la estimación de la incertidumbre Tipo A, incluyendo el cálculo del promedio, desviación estándar y la repetibilidad." },
                    { subtitle: "Asignación de Incertidumbre a Partir de Fuentes No Estadísticas", description: "Métodos para la evaluación de incertidumbre Tipo B, especialmente cuando la información disponible proviene de fuentes no estadísticas, como especificaciones del fabricante." }
                ]
            },
            {
                title: "Cálculo y Propagación de la Incertidumbre",
                content: [
                    { subtitle: "Cálculo de Incertidumbre Combinada", description: "Método para combinar las contribuciones de diversas fuentes de incertidumbre en un solo valor representativo de la incertidumbre total." },
                    { subtitle: "Factor de Cobertura y Cálculo de Incertidumbre Expandida", description: "Explicación del uso de un factor de cobertura para expandir la incertidumbre combinada a un intervalo de confianza más amplio." },
                    { subtitle: "Propagación de Incertidumbres en Mediciones Indirectas", description: "Estudio de cómo la incertidumbre se propaga en mediciones indirectas, usando fórmulas de propagación y derivadas." }
                ]
            },
            {
                title: "Expresión y Documentación de la Incertidumbre",
                content: [
                    { subtitle: "Expresión de la Incertidumbre en los Resultados de Medición", description: "Cómo presentar los resultados de medición junto con la incertidumbre estimada, utilizando un formato adecuado y estandarizado." },
                    { subtitle: "Documentación de la Estimación de Incertidumbre", description: "Importancia de registrar y documentar adecuadamente el proceso de estimación de la incertidumbre en los informes y registros de medición." }
                ]
            },
            {
                title: "Casos Prácticos y Aplicación de la Incertidumbre",
                content: [
                    { subtitle: "Casos Prácticos y Ejercicios de Estimación de Incertidumbre", description: "Ejercicios prácticos y estudios de caso que permiten aplicar los conceptos y métodos aprendidos para estimar la incertidumbre en situaciones reales de medición." }
                ]
            }
        ],
        category: "Metrología",
        price: 30000,
        duration: 8,
        duration: 10,
        rating: 4.9,
        students: 3975,
        lastUpdated: "11/2024",
        language: "Español",
        subtitles: ["Español"],
        includes: ["10 horas de vídeo", "Ejercicios descargables", "Certificado de finalización"],
        highlights: [
            "Identificar fuentes de error en mediciones",
            "Calcular incertidumbre combinada y expandida",
            "Ejecutar cálculos en escenarios reales"
        ],
        long_description: "La incertidumbre de medición es un aspecto esencial para garantizar la calidad de los resultados en cualquier proceso de medición. En este curso, aprenderás los conceptos básicos de la incertidumbre, incluyendo los diferentes tipos y fuentes que pueden influir en la precisión de las mediciones. A lo largo del curso, se profundiza en las metodologías de estimación de la incertidumbre, diferenciando entre los métodos estadísticos (Tipo A) y los métodos basados en el análisis de fuentes no estadísticas (Tipo B). Los participantes aprenderán a calcular la incertidumbre combinada y expandida, y cómo aplicar el factor de cobertura para obtener intervalos de confianza precisos. Además, se cubren temas como la propagación de incertidumbres en mediciones indirectas y la correcta documentación de la estimación de incertidumbre, permitiendo que los estudiantes puedan realizar mediciones más precisas y confiables en sus actividades profesionales."
    },
    {
        id: 7,
        course: "ISO/IEC 19011:2018 AUDITORÍA DE SISTEMAS DE GESTIÓN",
        image: "https://res.cloudinary.com/dc0aja7yx/image/upload/v1731448960/7_of14fk.png",
        color: "#60a5fa",
        description: "Aprende a planificar y ejecutar auditorías efectivas según la norma ISO/IEC 19011:2018. Descubre las mejores prácticas para mejorar la eficiencia de los sistemas de gestión y asegurar el cumplimiento normativo en cada proceso.",
        modules: [
            {
                title: "Fundamentos de la Auditoría ISO/IEC 19011:2018",
                content: [
                    { subtitle: "Introducción a ISO/IEC 19011:2018", description: "Presentación de la norma ISO/IEC 19011:2018, su propósito y aplicación en los sistemas de gestión." },
                    { subtitle: "Principios de la Auditoría", description: "Descripción de los principios fundamentales que guían la auditoría, como la integridad, imparcialidad y enfoque basado en evidencia." }
                ]
            },
            {
                title: "Gestión y Planificación del Programa de Auditoría",
                content: [
                    { subtitle: "Gestión del Programa de Auditoría", description: "Enfoque en cómo gestionar un programa de auditoría, incluyendo la planificación y el establecimiento de objetivos." },
                    { subtitle: "Competencia y Evaluación de Auditores", description: "Requisitos de competencia y formación para auditores, así como cómo evaluar sus habilidades y conocimientos." }
                ]
            },
            {
                title: "Proceso de Auditoría",
                content: [
                    { subtitle: "Proceso de Auditoría", description: "Fases del proceso de auditoría, desde la planificación hasta la ejecución y cierre de la auditoría." },
                    { subtitle: "Redacción de Hallazgos y No Conformidades", description: "Cómo redactar hallazgos de manera clara y objetiva, y definir no conformidades de acuerdo con los requisitos del sistema auditado." }
                ]
            },
            {
                title: "Informe de Auditoría y Seguimiento",
                content: [
                    { subtitle: "Informe de Auditoría", description: "Cómo estructurar un informe de auditoría, que incluya todos los hallazgos, conclusiones y recomendaciones de manera clara y precisa." },
                    { subtitle: "Seguimiento y Acciones Correctivas", description: "Proceso de seguimiento a las no conformidades, asegurando que se implementen acciones correctivas adecuadas." }
                ]
            },
            {
                title: "Mejora Continua en la Auditoría",
                content: [
                    { subtitle: "Mejora Continua del Programa de Auditoría", description: "Métodos y prácticas para evaluar y mejorar continuamente el programa de auditoría y los procesos involucrados." }
                ]
            },
            {
                title: "Aplicación Práctica en Auditoría",
                content: [
                    { subtitle: "Casos Prácticos y Simulaciones", description: "Ejercicios prácticos y simulaciones que permiten a los participantes aplicar los conceptos y habilidades adquiridas en situaciones reales." }
                ]
            }
        ],
        category: "Normativa internacional",
        price: 30000,
        duration: 8,
        rating: 4.9,
        students: 4120,
        lastUpdated: "11/2024",
        language: "Español",
        subtitles: ["Español"],
        includes: [
            "8 horas de vídeo",
            "Materiales descargables",
            "Certificado de finalización"
        ],
        highlights: [
            "Aprender a ejecutar auditorías efectivas",
            "Dominar las mejores prácticas en auditorías",
            "Garantizar el cumplimiento normativo"
        ],
        long_description:"La auditoría es una herramienta esencial para evaluar la eficacia y el cumplimiento de los sistemas de gestión de calidad. Este curso proporciona una introducción detallada a la norma ISO/IEC 19011:2018, que establece los principios y las directrices para la auditoría de sistemas de gestión. Aprenderás sobre los principios clave de la auditoría, la planificación y ejecución de auditorías, y cómo evaluar la competencia de los auditores. El curso cubre todo el proceso de auditoría, desde la preparación y realización hasta la redacción de los hallazgos y la generación del informe de auditoría. Además, se abordarán las acciones correctivas y el seguimiento posterior, para asegurar la mejora continua del sistema de gestión. Los estudiantes también trabajarán en simulaciones y casos prácticos, mejorando su capacidad para aplicar los principios de auditoría en escenarios reales."
    },
    {
        id: 8,
        course: "ISO/IEC 31000:2018 GESTIÓN DEL RIESGO",
        image: "https://res.cloudinary.com/dc0aja7yx/image/upload/v1731448960/8_e477ln.png",
        color: "#60a5fa",
        description: "Desarrolla habilidades para gestionar el riesgo organizacional de manera efectiva, con la norma ISO/IEC 31000:2018 como guía. Identifica, evalúa y mitiga riesgos en diversos contextos, mejorando la toma de decisiones y fortaleciendo la resiliencia.",
        modules: [
            {
                title: "Fundamentos de la Gestión del Riesgo según ISO/IEC 31000:2018",
                content: [
                    { subtitle: "Introducción a ISO/IEC 31000:2018", description: "Presentación de la norma ISO/IEC 31000:2018, su propósito y su importancia en la gestión del riesgo en las organizaciones." },
                    { subtitle: "Principios de la Gestión del Riesgo", description: "Los principios fundamentales de la gestión del riesgo, como la integración en la toma de decisiones y el enfoque en la mejora continua." }
                ]
            },
            {
                title: "Marco de Trabajo para la Gestión del Riesgo",
                content: [
                    { subtitle: "Marco de Trabajo para la Gestión del Riesgo", description: "Descripción del marco de trabajo propuesto por la norma para gestionar riesgos en diversos contextos organizacionales." }
                ]
            },
            {
                title: "Proceso de Gestión del Riesgo",
                content: [
                    { subtitle: "Proceso de Gestión del Riesgo", description: "Explicación del proceso estructurado de gestión del riesgo, que incluye identificación, evaluación, tratamiento, monitoreo y revisión." }
                ]
            },
            {
                title: "Identificación y Evaluación del Riesgo",
                content: [
                    { subtitle: "Identificación de Riesgos", description: "Métodos para identificar riesgos en la organización y su entorno, considerando tanto amenazas como oportunidades." },
                    { subtitle: "Evaluación y Análisis de Riesgos", description: "Técnicas para evaluar y analizar los riesgos identificados, considerando su probabilidad, impacto y nivel de severidad." }
                ]
            },
            {
                title: "Tratamiento del Riesgo",
                content: [
                    { subtitle: "Tratamiento del Riesgo", description: "Estrategias y métodos para mitigar, transferir, aceptar o evitar riesgos, según los resultados de la evaluación." }
                ]
            },
            {
                title: "Monitoreo y Revisión del Riesgo",
                content: [
                    { subtitle: "Monitoreo y Revisión del Riesgo", description: "Cómo monitorear los riesgos en el tiempo, así como la importancia de revisar y ajustar el plan de gestión del riesgo de manera continua." }
                ]
            },
            {
                title: "Comunicación y Consulta",
                content: [
                    { subtitle: "Comunicación y Consulta en la Gestión del Riesgo", description: "Importancia de la comunicación eficaz y la consulta con las partes interesadas en todas las etapas del proceso de gestión del riesgo." }
                ]
            },
            {
                title: "Aplicación Práctica de la Gestión del Riesgo",
                content: [
                    { subtitle: "Casos Prácticos y Aplicación en Diferentes Sectores", description: "Estudio de casos prácticos y ejemplos de la aplicación de la norma ISO/IEC 31000:2018 en diversos sectores y tipos de organizaciones." }
                ]
            }
        ],
        category: "Normativa internacional",
        price: 30000,
        duration: 8,
        rating: 4.6,
        students: 2900,
        lastUpdated: "11/2024",
        language: "Español",
        subtitles: ["Español"],
        includes: ["8 horas de vídeo", "Material descargable", "Certificado de finalización"],
        highlights: [
            "Identificar y evaluar riesgos organizacionales",
            "Implementar estrategias de mitigación",
            "Fortalecer procesos de toma de decisiones"
        ],
        long_description: "La gestión del riesgo es un proceso crucial para garantizar la estabilidad y el éxito a largo plazo de una organización. En este curso, se introduce el marco de trabajo de ISO/IEC 31000:2018, proporcionando las herramientas necesarias para identificar, evaluar y tratar los riesgos de manera efectiva. Los participantes aprenderán sobre los principios de la gestión del riesgo, el proceso de gestión y las mejores prácticas para evaluar y tratar los riesgos en diversos contextos. El curso cubre la importancia de la comunicación y la consulta durante todo el proceso de gestión del riesgo, así como la necesidad de monitorear y revisar de forma continua los riesgos identificados. Además, se presentan casos prácticos que permiten a los estudiantes aplicar estos conceptos en diferentes sectores, mejorando su capacidad para gestionar los riesgos de manera efectiva y eficiente."
    },
    {
        id: 9,
        course: "INDICADORES DE GESTIÓN",
        image: "https://res.cloudinary.com/dc0aja7yx/image/upload/v1731448960/9_lnf6uu.png",
        color: "#60a5fa",
        description: "Define y utiliza indicadores clave de rendimiento (KPI) para medir y mejorar los procesos de calidad en tu organización. Aprende desde el diseño de KPI hasta el análisis de datos, optimizando la gestión de calidad con objetivos medibles.",
        modules: [
            {
                title: "Fundamentos de los Indicadores de Gestión",
                content: [
                    { subtitle: "Introducción a los Indicadores de Gestión", description: "Exploración del concepto de indicadores de gestión y su importancia en la medición y seguimiento del desempeño organizacional." },
                    { subtitle: "Tipos de Indicadores de Gestión", description: "Descripción de los diferentes tipos de indicadores, tales como indicadores financieros, operacionales, de calidad, entre otros." }
                ]
            },
            {
                title: "Características y Definición de Indicadores",
                content: [
                    { subtitle: "Características de un Buen Indicador", description: "Identificación de las características clave que deben tener los indicadores de gestión, como claridad, relevancia y precisión." },
                    { subtitle: "Definición y Establecimiento de Indicadores", description: "Proceso de definir y establecer indicadores adecuados que alineen los objetivos estratégicos con la medición efectiva." }
                ]
            },
            {
                title: "Cálculo e Interpretación de Indicadores",
                content: [
                    { subtitle: "Cálculo e Interpretación de Indicadores", description: "Métodos para calcular los indicadores y cómo interpretarlos para entender el desempeño y las áreas de mejora." }
                ]
            },
            {
                title: "Uso Estratégico de los Indicadores",
                content: [
                    { subtitle: "Uso de Indicadores para la Toma de Decisiones", description: "Cómo utilizar los indicadores de gestión para apoyar la toma de decisiones informadas y mejorar la eficiencia organizacional." },
                    { subtitle: "Indicadores Clave de Desempeño (KPI)", description: "Estudio y aplicación de los KPIs como indicadores esenciales para medir el éxito de los objetivos clave de la organización." }
                ]
            },
            {
                title: "Monitoreo, Análisis y Mejora",
                content: [
                    { subtitle: "Monitoreo y Seguimiento de Indicadores", description: "Estrategias para monitorear y hacer un seguimiento continuo de los indicadores a fin de evaluar el desempeño en tiempo real." },
                    { subtitle: "Análisis de Resultados y Acciones Correctivas", description: "Cómo analizar los resultados obtenidos y tomar acciones correctivas basadas en los datos de los indicadores." }
                ]
            },
            {
                title: "Aplicación Práctica de los Indicadores",
                content: [
                    { subtitle: "Casos Prácticos y Ejemplos de Aplicación", description: "Estudio de casos prácticos y ejemplos de cómo los indicadores de gestión se aplican en diferentes organizaciones y sectores." }
                ]
            }
        ],
        category: "Gestión de la calidad",
        price: 30000,
        duration: 8,
        rating: 4.7,
        students: 3150,
        lastUpdated: "11/2024",
        language: "Español",
        subtitles: ["Español"],
        includes: ["8 horas de vídeo", "Plantillas descargables", "Certificado de finalización"],
        highlights: [
            "Diseñar e implementar KPI efectivos",
            "Analizar datos para optimizar procesos",
            "Fortalecer la gestión de calidad organizacional"
        ],
        long_description:"Los indicadores de gestión son fundamentales para medir y analizar el desempeño de una organización. Este curso está diseñado para ofrecer una comprensión profunda sobre los indicadores clave de gestión (KPIs), cómo se establecen, calculan e interpretan. Los estudiantes aprenderán a identificar y definir los indicadores más relevantes para cada tipo de proceso y sector, asegurando que los resultados obtenidos sean fiables y representativos del desempeño real. Además, se exploran las características que deben tener los buenos indicadores, como su claridad, precisión y relevancia. El curso también cubre cómo utilizar los indicadores para la toma de decisiones y cómo realizar un seguimiento continuo para mejorar los resultados. A través de casos prácticos y ejemplos reales, los participantes aprenderán a aplicar los indicadores de gestión en su trabajo diario, optimizando los procesos y tomando decisiones informadas para mejorar el desempeño de la organización."
    },
];

export default courseData;
