// PROCEDIMIENOS 

const Procedimientos = [
  {
    codigo: "LC",
    departamento: "Capilar",
    descripción: "Descubre la solución definitiva para la pérdida de cabello con nuestros avanzados procedimientos capilares",
    procedimientos: [
       {
         nombre: "Cirugía capilar",
         categorias: [
          {
            nombre: "Transplante capilar",
            descripción: "Un trasplante capilar es un procedimiento quirúrgico en el que se toman folículos pilosos de una parte del cuerpo para ser trasplantadas a una zona que ha experimentado pérdida de cabello. Este procedimiento se utiliza comúnmente para tratar la calvicie o la alopecia.",
            imagen: "url",
            zonas: [
             {
               nombre: "Cabello capilar",
               descripción: "",
               tiempo_cita: "6 a 8 horas",
               recuperación: "De por vida",
               precio_p: "$ 9.900.000", // precio del procedimiento
             },
             {
               nombre: "Cabello cejas",
               descripción: "",
               tiempo_cita: "6 a 8 horas",
               recuperación: "De por vida",
               precio_p: "$ 9.900.000"
             }
            ],
          },
         ],
         tipo: [
           { 
             codigo: "CP", 
             nombre: "Presencial",
           }
         ],
         especialistas: [
          {
            codigo: "DR-9",
            nombre: "Natalia pinzón"
          },
          {
            codigo: "DR-8", 
            nombre: "Juan carlos Aycardi"
          }
         ]
       },
       {
        nombre: "Procedimiento Inyectable Capilar",
        categorias: [
          {
            nombre: "Mesoterapia capilar",
            descripción: "Es un tratamiento médico utilizado para combatir la pérdida de cabello y estimular el crecimiento capilar. Consiste en la administración de pequeñas inyecciones de sustancias nutritivas, vitaminas, minerales y otros ingredientes beneficiosos directamente en el cuero cabelludo",
            imagen: "url",
            zonas: [
              {
                nombre: "Vitaminas + Dutasteride + PRP",
                descripción: "",
                tiempo_cita: "1 hora",
                recuperación: "Variable",
                precio_p: "$ 450.000 por sesión",
              },
              {
                nombre: "Plasma rico en plaquetas",
                descripción: "",
                tiempo_cita: "1 hora",
                recuperación: "Variable",
                precio_p: "$ 300.000 por sesión",
              }
            ],
          }
        ],
        tipo: [
          {
            
            nombre: "Presencial",
          }
        ],
        especialistas: [
          {
            codigo: "DR-9",
            nombre: "Natalia pinzón"
          },
          {
            codigo: "DR-3", 
            nombre: "Carolina pinzón"
          },
          {
            codigo: "DR-1",
            nombre: "Angelica castro"
          },
          {
            codigo: "DR-5", 
            nombre: "David fornerino"
          }
        ]
       },
      {
         nombre: " Gorros o cascos",
         categorias: [
           {
            nombre: "Fototerapia Capilar",
            descripción: "La fototerapia capilar, también conocida como terapia con luz para el cabello, es un tratamiento no invasivo que utiliza luz para estimular el crecimiento del cabello y mejorar la salud del cuero cabelludo.",
            imagen: "url",
            zonas: [
              {
               nombre: "Capilar",
               tiempo_cita: "1 hora",
               recuperación: "Variable",
               precio_p: "$ 80.000 por sesión",
              }
            ],
           }
         ],
         tipo: [
          {
            
            nombre: "Presencial"
          }
         ],
         especialistas: [
          {
            codigo: "DR-9",
            nombre: "Natalia pinzón"
          },
          {
            codigo: "DR-3", 
            nombre: "Carolina pinzón"
          },
          {
            codigo: "DR-1",
            nombre: "Angelica castro"
          },
          {
            codigo: "DR-5", 
            nombre: "David fornerino"
          }
        ]
      }
    ]
  },
  // linea facial
  {
    codigo: "LF",
    departamento: "Facial",
    descripción: "Descubre la frescura y rejuvenecimiento que tanto deseas con nuestros efectivos procedimientos faciales",
    procedimientos: [
      {
        nombre: "Cirugía Facial",
        categorias: [
          {
            nombre: "Cirugía Plástica Facial",
            descripción: "La cirugía plástica facial se enfoca en mejorar la apariencia estética y la función de la cara y el cuello. Incluye la corrección de defectos congénitos, traumatismos, enfermedades, procesos de envejecimiento.",
            imagen: "url",
            zonas: [
              {
                nombre: "Ritidectomía o Lifting Facial",
                descripción: "Es una cirugía plástica diseñada para rejuvenecer la apariencia del rostro al reducir los signos de envejecimiento, como la flacidez de la piel y las arrugas.",
                tiempo_cita: "1 a 3 horas",
                recuperación: "De por vida ",
                precio_p: "$ 20.000.000",
              },
              {
                nombre: "Rinoplastia",
                descripción: "Cirugía de nariz, se realiza para cambiar la forma o el tamaño de la nariz, corregir problemas de respiración.",
                tiempo_cita: "1 a 3 horas",
                recuperación: "De por vida ",
                precio_p: "$ 8.500.000",
              },
              {
                
                nombre: "Otoplastia",
                descripción: "La cirugía de orejas se realiza para corregir orejas prominentes o deformidades en la forma de las orejas.",
                tiempo_cita: "1 a 3 horas",
                recuperación: "De por vida ",
                precio_p: "$ 4.500.000",
              },
              {
                
                nombre: "Blefaroplastia",
                descripción: "Cirugía de párpados que se utiliza para rejuvenecer los párpados superiores e inferiores, eliminando el exceso de piel y grasa.",
                tiempo_cita: "1 a 3 horas",
                recuperación: "De por vida ",
                precio_p: "$ 6.500.000",
              },
              {
                
                nombre: "Lipopapada.",
                descripción: "Es una cirugía en el que se succiona la grasa acumulada en el área de la papada a través de pequeñas incisiones. Esto mejora  la definición del cuello y eliminar la apariencia de la papada.",
                tiempo_cita: "1 a 3 horas",
                recuperación: "De por vida ",
                precio_p: "$ 1.500.000",
              },
              {
          
                nombre: "Bichectomia",
                descripción: " Es un procedimiento quirúrgico estético que consiste en la extracción de las bolsas de grasa bucales. Están bolsas de grasa están ubicadas en las mejillas.",
                tiempo_cita: "1 a 3 horas",
                recuperación: "De por vida ",
                precio_p: "$ 1.500.000",
              }
            ],
          }
        ],
        tipo: [
          {
            nombre: "Presencial"
          }
        ],
        especialistas: [
          {
            codigo: "DR-7",
            nombre: "Jonathan Guevara"
          }
        ]
      },
      {
        nombre: "Rejuvemiento facial",
        categorias: [
          {
            nombre: "Toxina Botulínica",
            descripción: "Es un procedimiento estético  que se utiliza  principalmente para suavizar las arrugas faciales que son causadas por la actividad repetitiva de los músculos faciales. También sirve para tratar enfermedades como sudoración excesiva y bruxismo. ",
            imagen: "url",
            zonas: [
              {
                nombre: "Tercio Superior",
                descripción: "(Frente, entrecejo y patas de gallo)",
                tiempo_cita: "45 minutos",
                recuperación: "3 a 6 meses",
                precio_p: "Desde $800.000 asta $ 1.200.000"
              },
              {
                nombre: "Hiperhidrosis",
                descripción: "(Axila, manos y pies)",
                tiempo_cita: "45 minutos",
                recuperación: "3 a 6 meses",
                precio_p: "Desde $900.000 asta $ 1.500.000",
              },
              {
                
                nombre: "Bruxismo",
                descripción: "(Mandíbula)",
                tiempo_cita: "45 minutos",
                recuperación: "3 a 6 meses",
                precio_p: "Desde $900.000 asta $ 1.200.000",
              }
            ],
          },
          {
            nombre: "Ácido Hialurónico",
            descripción: "En procedimientos estéticos para mejorar la apariencia de la piel y restaurar el volumen facial.",
            imagen: "url",
            zonas: [
              {
                nombre: "Ojeras", 
                descripción: "Tratamientos faciales más efectivos para mejorar la apariencia de las ojeras, ayudando a recuperar la tonalidad y elasticidad de la piel", 
                tiempo_cita: "45 minutos", 
                recuperación: "10 meses", 
                precio_p: "$ 1.200.000"
              },
              {
                nombre: "Labios", 
                descripción: "El ácido hialurónico es ideal si deseas unos labios más gruesos o perfilados", 
                tiempo_cita: "45 minutos", 
                recuperación: "12 meses", 
                precio_p: "$ 1.200.000"
              },
              {
                nombre: "Contorno mandibular", 
                descripción: "Es un procedimiento estético no quirúrgico para mejorar el contorno mandibular encargado de reflejar la elegancia y la juventud en nuestro rostro, rasgos que se van perdiendo con el paso del tiempo.", 
                tiempo_cita: "45 minutos", 
                recuperación: "18 meses", 
                precio_p: "$ 2.500.000"
              },
              {
                nombre: "Mentón", 
                descripción: " El relleno de mentón es un procedimiento estético, no quírúrgico para elevar y eliminar el mentón retraído, aportando naturalidad y equilibrio al rostro.", 
                tiempo_cita: "45 minutos", 
                recuperación: "18 meses", 
                precio_p: "$ 1.300.000"
              },
              {
                nombre: "Pómulos", 
                descripción: "Este tratamiento con ácido hialurónico nos permite remodelar el aspecto de las mejillas.", 
                tiempo_cita: "45 minutos", 
                recuperación: "12 meses", 
                precio_p: "$ 1.300.000"
              },
              {
                nombre: "Surcos", 
                descripción: "Es uno de los tratamientos faciales para mejorar la apariencia de la piel cuando se presentan hendiduras faciales que aparecen y se marcan en el rostro ",
                tiempo_cita: "45 minutos",
                recuperación: "10 meses",
                precio_p: "$ 1.200.000",
              },
              { 
                nombre: "Rostro completo", 
                descripción: " Es un tratamiento de cuidado de la piel que se utiliza para proporcionar hidratación profunda y mejorar la apariencia y la salud de la piel.",
                tiempo_cita: "30 minutos",
                recuperación: "8 meses",
                precio_p: "$ 990.000",
              },
            ]
          }     
        ],
        tipo: [{nombre: "Presencial"}],
        especialistas: [{ nombre: "vacio"}],
      },
      {
        nombre: "Bioestimuladores",
        categorias: [
          {
            nombre: "Harmonyca", 
            descripción: "Es un tratamiento que combina la bio estimulación de la hidroxiapatita de calcio y ácido hialurónico para definir el contorno mandibular.", 
            imagen: "url",
            zonas: [
              {
                nombre: "Zona mandibular",
                descripción: "",
                tiempo_cita: "30 minutos",
                recuperación: "16 meses",
                precio_p: "$ 3.800.000 sesión",
              }
            ]
          },
          {
            nombre: "Radiesse",
            descripción: "Es un relleno dérmico a base de hidroxiapatita de calcio(CaHA) que se utiliza para tratar el envejecimiento facial y la pérdida de volumen.",
            imagen: "url",
            zonas: [
              {
                nombre: "Rostro completo",
                descripción: "",
                tiempo_cita: "30 minutos",
                recuperación: "12 meses",
                precio_p: "$ 1.500.000 sesión",
              }
            ]
          },
          {
            nombre: "Hibridación dinámica",
            descripción: "Es un procedimiento que combina diferentes tratamientos y técnicas en medicina estética para abordar múltiples preocupaciones de manera simultánea.",
            imagen: "url",
            zonas: [
              {
                nombre: "Radiesse + Ácido hialurónico",
                descripción: "",
                tiempo_cita: "1 hora",
                recuperación: "18 meses",
                precio_p: "$ 3.500.000 sesión",
              }
            ]   
          },
          {
            nombre: "Plasma Facial (PRP)",
            descripción: "El PRP se utiliza para mejorar la textura y la apariencia de la piel, reducir líneas finas y arrugas, y promover un aspecto más juvenil.",
            imagen: "url",
            zonas: [
              {
                nombre: "Rostro completo",
                descripción: "",
                tiempo_cita: "1 hora",
                recuperación: "",
                precio_p: "$ 400.000",
              }
            ]

          },
          {
            nombre: "NCTF",
            descripción: "NCTF es una solución polirevitalizante que contiene más de 50 ingredientes activos, incluyendo vitaminas, aminoácidos, minerales y coenzimas que ayudan a optimizar las funciones celulares de la piel.",
            imagen: "url",
            zonas: [
              {
                nombre: "Rostro completo",
                descripción: "",
                tiempo_cita: "30 minutos",
                recuperación: "16 meses",
                precio_p: "$ 400.000"
              }
            ]
          }
        ],
        tipo: [{ nombre: "presencial"}],
        especialistas: [{ nombre: ""}],
      },
      {
        nombre: "Anti -Manchas  hiperpigmentación",
        categorias: [
          {
            nombre: "Cosmelan",
            descripción: "Es un tratamiento despigmentante de la piel utilizado para tratar y reducir la hiperpigmentación, las manchas oscuras y las irregularidades en la pigmentación de la piel. ",
            imagen: "url",
            zonas: [
              {
                nombre: "Rostro completo",
                descripción: "",
                tiempo_cita: "1 hora",
                recuperación: "12 meses",
                precio_p: "$ 3.500.000"
              }
            ]
          },
          {
            nombre: "Dermapen",
            descripción: "Es tratamiento de microneedling o microagujas. Este procedimiento estético implica la aplicación de pequeñas agujas en la piel para estimular la producción de colágeno y promover la regeneración celular.",
            imagen: "url",
            zonas: [
              {
                nombre: "Dermapen + Plasma",
                descripción: "",
                tiempo_cita: "1 hora",
                recuperación: "24 meses",
                precio_p: "$ 200.000",
              },
              {
                nombre: "Dermapen + Vitaminas BCN",
                descripción: "",
                tiempo_cita: "1 horas",
                recuperación: "24 meses",
                precio_p: "$ 400.000",
              },
              {
                nombre: " Dermapen + Ácido tranxenamico",
                descripción: "",
                tiempo_cita: "1 hora",
                recuperación: "24 meses",
                precio_p: "$ 200.000"
              }
            ]
          },
          {
             
             nombre: "Peeling Químico",
             descripción: "Es un procedimiento que mejora el aspecto de las manchas en rostro, manos, disminuye la pigmentación oscura de los párpados.",
             imagen: "url",
             zonas: [
               {
                 nombre: "Manchas",
                 descripción: "",
                 tiempo_cita: "30 minutos",
                 recuperación: "",
                 precio_p: "$ 250.000 sesión",
               },
               {
                nombre: "Ojeras (ácido hiáluronico)",
                descripción: "",
                tiempo_cita: "30 inutos",
                recuperación: "6 a 12 meses",
                precio_p: "$ 250.000 sesión"
               },
               {
                nombre: "Ojeras (NCTF)",
                descripción: "",
                tiempo_cita: "30 minutos",
                recuperación: "4 a 6 meses",
                precio_p: "$ "
               }
             ]
          }
        ],
        tipo: [{ nombre: "presencial"}],
        especialistas: [
          {
            nombre: "Natalia pinzón"
          }, 
          {
            nombre: "Carolina pinzón"
          }, 
          {
            nombre: "Angelica castro"
          }
        ],
      },
      {
        nombre: "Limpieza",
        descripción: "Es el procedimiento principal de cuidado de la piel que tiene como objetivo eliminar la suciedad, el exceso de grasa, las impurezas y las células muertas de la superficie de la piel. ",
        categorias: [
          {
            nombre: "Limpieza facial",
            descripción: "",
            imagen: "url",
            zonas: [
              {
                nombre: "",
                descripción: "",
                tiempo_cita: "1 hora",
                recuperación: "",
                precio_p: "Desde $80.000 hasta $250.000",
              }
            ]
          }
        ],
        tipo: [{ nombre: "Presencial"}],
        especialistas: [
          {  
            nombre: "Nati"
          }, 
          {
            nombre: "Carolina pinzón"
          }, 
          {  
            nombre: "Angelica castro"
          }
        ]
      },
      {
        nombre: "Hidratación Facial No Invasivo",
        categorias: [
          {
            nombre: "Hidratación facial con mascarilla de CO2",
            descripción: "También conocida como mascarilla de burbujas de oxígeno, es un tratamiento que utiliza dióxido de carbono (CO2) para proporcionar hidratación, mejora la textura de la piel, estimula el colágeno",
            imagen: "url",
            zonas: [
              {
                nombre: "Rostro completo",
                descripción: "",
                tiempo_cita: "30 minutos",
                recuperación: "3 meses",
                precio_p: "$ 300.000 sesión",
              },
            ]
          },
          {
            nombre: "ProfHilo",
            descripción: "Es un tratamiento estético con ácido hialurónico para ,ejorar la calidad de la piel y proporcionar un efecto de rejuvecimiento facial. Principalmente estimula la producción de colágeno y elastina.",
            imagen: "url",
            zonas: [
              {
                nombre: "Rostro completo",
                descripción: "",
                tiempo_cita: "30 minutos",
                recuperación: "18 meses",
                precio_p: "$ 2.500.000 sesión",
              }
            ]
          }
        ]
      }
    ]
  },
  {
    codigo: "L-CP",
    departamento: "Corporal",
    descripción: "Promovemos la satisfacción corporal asesorando a nuestros pacientes con el tratamiento mas adecuado sus nesecidades individuales.",
    procedimientos: [
      {
        nombre: "Cirujia",
        categorias: [
          {  
            nombre: "Cirujia plastica",
            desripción: "La cirujia plástica facial se enfoca en mejorar la apariencia y la función de la cara y el cuello Incluyendo la corrección de defectos congénitos, traumatismos, enfermedades, procesos de envejecimiento o para mejorar la apariencia estética.",
            imagen: "url",
            zonas: [
              {
                 nombre: "Liposucción",
                 descripción: "Es un procedimiento quirúrgico que se utiliza para eliminar depósitos de grasa no deseados en áreas específicas del cuerpo, con el objetivo de mejorar la forma y la apariencia corporal",
                 tiempo_cita: "",
                 recuperacion: "",
                 precio_p: "",
              },
              { 
                 nombre: "Liposucción + lipectomía",
                 descripción: "Es un procedimeinto quirúrgico que se utiliza para mejorar la apariencia del abdomen al eliminar el exceso de piel y grasa",
                 tiempo_cita: "",
                 recuperacion: "",
                 precio_p: "",
              },
              {
                nombre: "Mamoplastia",
                descripción: "Cirujía de las mamas que puede incluir varios tipos de procedimientos diseñados para cambiar la forma, el tamaño o la aparencia de los senos",
                tiempo_cita: "Mamoplstia de aumento (implantes mamarios) - Mastopexia (levantamiento de senos) - Mamoplastia de reducción",
                recuperación: "",
                precio_p: "",
              },
              {
                nombre: "Liposucción+lipectomía+Pexia",
                descripción: "La combinación de estos procedimientos se realiza a menudo en pacientes que desean una transformación más completa",
                tiempo_cita: "",
                recuperación: "",
                precio_p: "",
              }
            ]
          }
        ],
        tipo: [{ nombre: "Presencial"}],
        especialistas: [],
      },
      {
        nombre: "Procedimiento inyectable corporal",
        categorias: [
          {  
            nombre: "Hidrolipoclasia",
            descripción: "Es un procedimiento médico estético que se utiliza para eliminar depósitos de grasa localizados en el cuerpo mediante la inyección en el área tratada. También es conocida como 'liposución sin cirujia'",
            imagen: "url",
            zonas: [
                {  
                  nombre: "Corporal",
                  descripción: "",
                  tiempo_cita: "",
                  recuperación: "Mes",
                  precio_p: "Desde $ 400.000 Hasta $ 1-250.000 depende de las sesiones",
                }
            ]
          }
        ],
        tipo: [{ nombre: "Presencial"}],
        especialista: [
          {
            
            nombre: "Dra. Natalia pinzón"
          },
          {
          
            nombre: "Dra. Carolina pinzón"
          },
          {
            
            nombre: "Dra. Angelica castro",
          },
          {
            
            nombre: "Dr. David Fornerino",
          }
        ],
      },
      {
        nombre: "Procedmeinto intravenoso",
        categorias: [
          {
            nombre: "Sueroterapia",
            descripción: "También conocida como terapia de infusión intravenosa, es un procedimiento médico en el cual se administra una mezcla de líquidos y nutrientes directamente en el torrente sanguínio a través de una via intravenosa",
            imagen: "url",
            zonas: [
              {
                nombre: "Rehidratación",
                descripción: "",
                tiempo_cita: "30 minutos",
                recuperación: "variable",
                precio_p: "$ 250.000",
              },
              {
                nombre: "Reposición de Nutrientes",
                descripción: "",
                tiempo_cita: "30 minutos",
                recuperación: "variable",
                precio_p: "$ 250.000"
              },
              {
                nombre: "Refuerzo de la energía",
                descripción: "",
                tiempo_cita: "30 minutos",
                recuperación: "variable",
                precio_p: "$ 250.000",
              },
              {  
                nombre: "Apoyo inmunológico",
                descripción: "",
                tiempo_cita: "30 minutos",
                recuperación: "variable",
                precio_p: "$ 250.000"
              },
              {
                nombre: "Mejora la piel",
                descripción: "",
                tiempo_cita: "30 minutos",
                recuperación: "variable",
                precio_p: "$ 250.000",
              }
            ]
          }
        ],
        tipo: [{ nombre: "Presencial"}],
        especialista: [
          {
             
             nombre: "Dra. Natalia pinzón"
          },
          {
           
            nombre: "Dra. Carolina pinzón"
          },
          {
            
            nombre: "Dra. Angelica castro",
          },
          {
            
            nombre: "Dr. David fornerino"
          }
        ]
      },
      {
        nombre: "Plan nutricional",
        categorias: [
          {
            nombre: "Nutrición",
            descripción: "Te brindamos planes personalizados que se ajusten a su estilo de vida y nesecidades individuales. Ya sea que desees perder peso, aumentar tu energía o mejorar tus hábitos alimenticios",
            imagen: "url",
            zonas: [
              {
                nombre: "Control de peso",
                descripción: "",
                tiempo_cita: "",
                recuperación: "Variable",
                precio_p: "$ 5.000.000 tratamiento completo",
              }
            ]
          }
        ],
        tipo: [
          {
            
            nombre: "Presencial",
          },
          {
          
            nombre: "Telemedicina",
          }
        ],
        especialista: [
          {
            
            nombre: "Rawdy"
          }
        ]
      },
      {
        nombre: "Informe de ADN",
        categorias: [
          {
            nombre: "ADN",
            descripción: "Contamos con kits que pueden ayudarte a descubrir información valiosa sobre ts antecedentes familiares, predisposiciones genéticas y mucho mas",
            imagen: "url",
            zonas: [
              {
                nombre: "Baby",
                descripción: "",
                tiempo_cita: "",
                recuperacion: "",
                precio_p: "$ 750.000"
              },
              {
                nombre: "Adult Basic",
                descripción: "",
                tiempo_cita: "",
                recuperación: "",
                precio_p: "$ 1.800.000",
              },
              {
                nombre: "Adult Advance",
                descripción: "",
                tiempo_cita: "",
                recuperación: "",
                precio_p: "$ 2.500.000",
              },
              {
                nombre: "Anti-edad",
                descripción: "",
                tiempo_cita: "",
                recuperacion: "",
                precio_p: "$ 1.500.000"
              }
            ]
          }
        ],
        tipo: [
          {
            
            nombre: "Presencial",
          },
          {
          
            nombre: "Telemedicina"
          }
        ],
        especialista: [
          {
            
            nombre: "Dra. Natalia pinzón"
          },
          {
          
            nombre: "Dra. Carolina pinzón"
          },
          {
            
            nombre: "Dra. Angelica castro",
          },
          {
            
            nombre: "Dr. David fornerino",
          },
          {
            
            nombre: "Dr. Andrés cuspoca",
          }
        ]
      }
    ]
  }
]

