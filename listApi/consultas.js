const consultas = [
    {
        codigo: "CS", 
        nombre: "Colsultas",
        descripción: "Bienvenido a la clinica rogans pioneros en la salud integral. Entendemos la importancia de tu salud y bienestar. Contamos con consultas médicas que han sido diseñada pensando en tu comodidad y accesibilidad.",
        consultas: [
            {
                codigo: "CC1",
                nombre: "cuidado del cabello",
                descripcion: "En Rogans entendemos lo desafiante que puede ser lidiar con la pérdida de cabello y sus efectos en la autoestima y la confianza. Te ofrecemos un enfque integral y experto para abordar la alopecia y ayudarte a recuperar tru cabello y su confianza.",
                imagen: "url",
                tiempo_cita: "30 minutos",
                tipo: [
                    {
                        id: 1,
                        nombre: "Presencial",
                    },
                    {
                        id: 2,
                        nombre: "Virtual"
                    }
                ],
                precio: "$ 80.000",
                especialistas: [
                    {
                        codigo: "DR-1",
                        nombre: "Dra. Angelica castro"
                    },
                    {
                        codigo: "DR-3",
                        nombre: "Dra. Carolina pinzón",
                    },
                    {
                        codigo: "DR-5",
                        nombre: "Dra. David fornerino"
                    },
                    {
                        codigo: "DR-8",
                        nombre: "Natalia pinzón",
                    }
                ]
            },
            {
                codigo: "CP2",
                nombre: "Cuidado de la piel",
                descripción: "Reconocemos la importancia de mantener la piel saludable, radiante y rejuvencida. Te brndamos soluciones perzonalizadas y tratamientos consméticos de vanguardia para ayudarte a lograr tu aparencia ideal",
                imagen: "url",
                tiempo_cita: "30 minutos",
                tipo: [
                    {
                        codigo: "CP",
                        nombre: "Presencial",
                    },
                    {
                        codigo: "CV",
                        nombre: "Telemedicina",
                    },
                ],
                precio: "$ 50.000",
                especialistas: [
                    {
                        codigo: "DR-1",
                        nombre: "Angelica castro",
                    },
                    {
                        codigo: "DR-3",
                        nombre: "Dra. Carolina pinzón"
                    },
                    {
                        codigo: "DR-8",
                        nombre: "Dra. Natalia pinzón"
                    }
                ]
            },
            {
                codigo: "RS3",
                nombre: "Rendimiento sexual (Masculino)",
                descripción: "Comprendemos que la salud sexual es una parte fundamental de la calidad de vida. Te brindamos un espacio seguro y condifidencial donde puedas abordar tus inquietudes y mejorar tu vida sexual.",
                imagen: "url",
                tiempo_cita: "30 minutos",
                tipo: [
                    {
                        codigo: "CP",
                        nombre: "Presencial"
                    },
                    {
                        codigo: "CV",
                        nombre: "Telemedicina"
                    }
                ],
                precio: "$ 100.000",
                especialistas: [
                    {
                        codigo: "DR-5",
                        nombre: "Dr. David fornerino"
                    }
                ]
            },
            {
                codigo: "SM4",
                nombre: "Salud mental",
                descripción: "Tu salud mental es nuestra prioridad, y estamos comprometidos a trabajar contigo para que puedas vivir una vida mas plena y equilibrada.",
                imagen: "url",
                tiempo_cita: "30 minutos",
                tipo: [
                    {
                        codigo: "CP",
                        nombre: "Presencial"
                    },
                    {
                        codigo: "CV",
                        nombre: "Telemedicina"
                    }
                ],
                precio: "$ 80.000",
                especialista: [
                    {
                        codigo: "DR-4",
                        nombre: "Dra, Diana cordoba"
                    }
                ]
            },
            {
                codigo: "MG5",
                nombre: "Medicina general",
                descripción: "Nos enorgullece ofrecer atención médica intehral para cuidar de tu salud en general. Con médicos altamente calificados que se dedican a proporcionar atención médica personalizada y completa para toda tu familia.",
                imagen: "url",
                tiempo_cita: "20 minutos",
                tipo: [
                    {
                        codigo: "CP",
                        nombre: "Presencial",
                    },
                    {
                        codigo: "CV",
                        nombre: "Telemedicina"
                    }
                ],
                precio: "$ 50.000",
                especialistas: [
                    {
                        codigo: "DR-1",
                        nombre: "Dra. Angelica castro",
                    },
                    {
                        codigo: "DR-3",
                        nombre: "Dra. Carolina pinzón",
                    },
                    {
                        codigo: "DR-5",
                        nombre: "Dra. David fornerino"
                    },
                    {
                        codigo: "DR-8",
                        nombre: "Dra. Natalia pinzón",
                    }
                ]
            },
            {
                codigo: "ED6",
                nombre: "Estética dental",
                descripción: "Te ayudamos a lograr la sonrisa perfecta que siempre has deseado. Nuestro equipo de especialistas en odontología estética se dedica a trasformar sonrosas y a mejorar la confianza de nuestros pacientes.",
                imagen: "url",
                tiempo_cita: "30 minutos",
                tipo: [
                    {
                        codigo: "CP",
                        nombre: "Presencial",
                    },
                    {
                        codigo: "CV",
                        nombre: "Telemedicina"
                    }
                ],
                precio: "$ 80.000",
                especialistas: [
                    {
                        codigo: "DR-6",
                        nombre: "Echeverry"
                    }
                ]
            },
            {
                codigo: "NT7",
                nombre: "Nutrición",
                descripción: "Contamos con expertos en nutrición que diseñan planes personalizados que se ajusten a tu eslito de vida y necesidades individuales como: Perder peso, aumentar tu energía o mejorar tus hábitos alimnticios.",
                imagen: "url",
                tiempo_cita: "45 minutos",
                tipo: [
                    {
                        codigo: "CP",
                        nombre: "Presencial"
                    },
                    {
                        codigo: "CV",
                        nombre: "Telemedicina"
                    }
                ],
                precio: "$ 80.000",
                especialistas: [
                    {
                        codigo: "DR-9",
                        nombre: "Rawdy"
                    }
                ]
            },
            {
                codigo: "ADN8",
                nombre: "ADN",
                descripción: "Te ofrecemos una ventana a tu propia historia genética. Nuestro equipo de expertos en genética está dedicado a ayudarte a descubrir información valiosa sobre tus antecedentes familiares, predisposiciones genéticas y mucho mas.",
                imagen: "url",
                tiempo_c: "40 minutos",
                tipo: [
                    {
                        codigo: "CP",
                        nombre: "Presencial"
                    },
                    {
                        codigo: "CV",
                        nombre: "Telemedicina"
                    }
                ],
                precio: "$ 000000000",
                especialistas: [
                    {
                        codigo: "DR-1",
                        nombre: "Dra. Anglica castro"
                    },
                    {
                        codigo: "DR-2",
                        nombre: "Dr. Andrés Cuspoca"
                    },
                    {
                        codigo: "DR-3",
                        nombre: "Dra. Carolina pinzón"
                    },
                    {
                        codigo: "DR-5",
                        nombre: "Dr. David fornerino"
                    },
                    {
                        codigo: "DR-8",
                        nombre: "Dra. Natalia pinzón"
                    }
                ]
            } 
        ]
    }
]