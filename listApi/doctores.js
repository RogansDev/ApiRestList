// doctorws

const doctores = [
  // CUIDADO CAPILAR
  {
    id: 1,
    codigo: "GC01", // CUIDADO DEL CABELLO
    nombre: "cuidado capilar",
    especialidad: [
      {
        id: 1,
        nombre: "medicina General",
        doctores: [
          {
            id: 1,
            nombre: "Dr. Andres cuspoca",
            tipo: [
              {
                id: 1,
                nombre: "Telemedicina",
                mediciina: "Medicina general",
                duracion: "20 minutos",
                precio: "$ 25.000",
              },
              {
                id: 2,
                nombre: "Presencial",
                medicina: "Medicina general",
                duracion: "20 minutos",
                precio: "$ 25.000",
              },
            ],
          },
          {
            id: 2,
            nombre: "Dr. Carolina pinzón",
            tipo: [
              {
                id: 1,
                nombre: "Telemedicina",
                mediciina: "Medicina general",
                duracion: "20 minutos",
                precio: "$ 25.000",
              },
              {
                id: 2,
                nombre: "Presencial",
                medicina: "Medicina general",
                duracion: "20 minutos",
                precio: "$ 25.000",
              },
            ],
          },
          {
            id: 3,
            nombre: "Dr. David fornerino",
            tipo: [
              {
                id: 1,
                nombre: "Telemedicina",
                mediciina: "Medicina general",
                duracion: "20 minutos",
                precio: "$ 25.000",
              },
              {
                id: 2,
                nombre: "Presencial",
                medicina: "Medicina general",
                duracion: "20 minutos",
                precio: "$ 25.000",
              },
            ],
          },
          {
            id: 4,
            nombre: "Dr. Natalia pinzón",
            tipo: [
              {
                id: 1,
                nombre: "Telemedicina",
                mediciina: "Medicina general",
                duracion: "20 minutos",
                precio: "$ 25.000",
              },
              {
                id: 2,
                nombre: "Presencial",
                medicina: "Medicina general",
                duracion: "20 minutos",
                precio: "$ 25.000",
              },
            ],
          },
        ],
      },
    ],
  },
  // CUIDADO DE LA PIEL
  {
    id: 2,
    codigo: "CP02", // CUIDADO DE LA PIEL
    nombre: "Cuidado de la piel",
    especialidad: [
      // medicina general
      {
        id: 1,
        nombre: "medicina General",
        doctores: [
          {
            id: 1,
            nombre: "Dr. Andres cuspoca",
            tipo: [
              {
                id: 1,
                nombre: "Telemedicina",
                duracion: "30 minutos",
                precio: "$ 25.000",
              },
              {
                id: 2,
                nombre: "Presencial",
                duracion: "30 minutos",
                precio: "$ 25.000",
              },
            ],
          },
          {
            id: 2,
            nombre: "Dr. Carolina pinzón",
            tipo: [
              {
                id: 1,
                nombre: "Telemedcina",
                duracion: "30 minutos",
                precio: "$ 25.000",
              },
              {
                id: 2,
                nombre: "Presencial",
                duracion: "30 minutos",
                precio: "$ 25.000",
              },
            ],
          },
          {
            id: 3,
            nombre: "Dr. Natalia pinzón",
            tipo: [
              {
                id: 1,
                nombre: "Telemedicina",
                duracion: "30 minutos",
                precio: "$ 25.000",
              },
              {
                id: 2,
                nombre: "Presencial",
                duracion: "30  minutos",
                precio: "$ 25.000",
              },
            ],
          },
        ],
      },
      // dermatologia
      {
        id: 2,
        nombre: "Dermatología",
        doctores: [
          {
            id: 1,
            nombre: "Dr Jennifer prada",
            tipo: [
              {
                id: 1,
                nombre: "Telemedicina",
                duracion: "30 minutos",
                precio: "$ 90.000",
              },
            ],
          },
          {
            id: 2,
            nombre: "Dr. Maria farias",
            tipo: [
              {
                id: 1,
                nombre: "Presencial",
                duracion: "30 minutos",
                precio: "$ 90.000",
              },
            ],
          },
        ],
      },
    ],
  },
  // SALUD MENTAL
  {
    id: 3,
    codigo: "SM03", // SALUD MENTAL
    nombre: "Salud mental",
    especialidad: [
      {
        id: 1,
        nombre: "Psicología",
        doctores: [
          {
            id: 1,
            nombre: "Dr. Juan martinez",
            tipo: [
              {
                id: 1,
                nombre: "Telemedicina",
                duracion: "60 minutos",
                precio: "$ 25.000",
              },
              {
                id: 2,
                nombre: "Presencial",
                duracion: "60 minutos",
                precio: "$ 50.000",
              },
            ],
          },
          {
            id: 2,
            nombre: "Dr Diana cordoba",
            tipo: [
              {
                id: 1,
                nombre: "Telemedicina",
                duracion: "60 minutos",
                precio: "$ 25.000",
              },
              {
                id: 2,
                nombre: "Presencial",
                duracion: "60 minutos",
                precio: "$ 50.000",
              },
            ],
          },
        ],
      },
    ],
  },
  // SALUD SEXUAL
  {
    id: 4,
    codigo: "SS05", // SALUD SEXUAL
    nombre: "Salud sexual",
    especialidad: [
      {
        id: 1,
        nombre: "Urología",
        doctores: [
          {
            id: 1,
            nombre: "Dr. Vacio",
            tipo: [
              {
                id: 1,
                nombre: "Telemedicina",
                duracion: "60 minutos",
                precio: "$ 50.000",
              },
              {
                id: 2,
                nombre: "Presencial",
                duracion: "60 minutos",
                precio: "$ 150.000",
              },
            ],
          },
        ],
      },
      {
        id: 2,
        nombre: "General",
        doctores: [
          {
            id: 1,
            nombre: "Dr. Andres cuspoca",
            tipo: [
              {
                id: 1,
                nombre: "Telemedicina",
                duracion: "20 minutos",
                precio: "$ 25.000",
              },
              {
                id: 2,
                nombre: "Presencial",
                duracion: "20 minutos",
                precio: "$ 50.000",
              },
            ],
          },
          {
            id: 2,
            nombre: "Dr. Carolina pinzón",
            tipo: [
              {
                id: 1,
                nombre: "Telemedicina",
                duracion: "20 minutos",
                precio: "$ 25.000",
              },
              {
                id: 2,
                nombre: "Presencial",
                duracion: "20 minutos",
                precio: "$ 50.000",
              },
            ],
          },
          {
            id: 3,
            nombre: "Dr. Natalia pinzón",
            tipo: [
              {
                id: 1,
                nombre: "Telemedicina",
                duracion: "20 minutos",
                precio: "$ 25.000",
              },
              {
                id: 2,
                nombre: "Presencial",
                duracion: "20 minutos",
                precio: "$ 50.000",
              },
            ],
          },
        ],
      },
    ],
  },
  // PROCEDIMEINTOS
  {
    id: 5,
    codigo: "PC06", // PROCEDIMIENTOS
    nombre: "Procedimientos",
    especialidad: [
      {
        id: 1,
        nombre: "Valoración medica",
        doctores: [
          {
            id: 1,
            nombre: "Dr. Andrea diaz",
            tipo: [
              {
                id: 1,
                nombre: "Presencial",
                duracion: "20 minutos",
                precio: "Gratis",
              },
            ],
          },
          {
            id: 2,
            nombre: "Dr. Carolina pinzón",
            tipo: [
              {
                id: 1,
                nombre: "Presencial",
                duracion: "20 minutos",
                precio: "Gratis",
              },
            ],
          },
          {
            id: 3,
            nombre: "Dr. Maria farias",
            tipo: [
              {
                id: 1,
                nombre: "Presencial",
                duracion: "20 minutos",
                precio: "Gratis",
              },
            ],
          },
          {
            id: 4,
            nombre: "Dr. Natalia pinzón",
            tipo: [
              {
                id: 1,
                nombre: "Presencial",
                duracion: "20 minutos",
                precio: "Gratis",
              },
            ],
          },
        ],
      },
    ],
  },
  //  NUTRICION
  {
    id: 6,
    codigo: "NU07", // NUTRICION
    nombre: "Nutrición",
    especialidad: [
      {
        id: 1,
        nombre: "Nutricion",
        doctores: [
          {
            id: 1,
            nombre: "Dr. vacio",
            tipo: [
              {
                id: 1,
                nombre: "Telemedicina",
                duracion: "20 minutos",
                precio: "$ 50.000",
              },
              {
                id: 2,
                nombre: "Presencial",
                duracion: "20 minutos",
                precio: "$ 90.000",
              },
            ],
          },
        ],
      },
    ],
  },
  // MEDICINA GENERAL
  {
    id: 7,
    codigo: "MG08", // MEDICINA GENERAL
    nombre: "Medicina general",
    especialidad: [
        {
            id: 1,
            nombre: "Medicina general bienestar y salud integral",
            doctores: [
                {
                    id: 1,
                    nombre: "Dr. Andrea diaz",
                    tipo: [
                        {
                            id: 1,
                            nombre: 'Telemedicina',
                            duracion: '30 minutos',
                            precio: '$ 50.000',
                        },
                        {
                            id: 2,
                            nombre: 'Presencial',
                            duracion: '30 minutos',
                            precio: '$ 50.000',
                        },
                    ]
                },
                {
                    id: 2,
                    nombre: "Dr. Andres cuspoca",
                    tipo: [
                        {
                            id: 1,
                            nombre: 'Telemedicina',
                            duracion: '30 minutos',
                            precio: '$ 50.000',
                        },
                        {
                            id: 2,
                            nombre: 'Presencial',
                            duracion: '30 minutos',
                            precio: '$ 50.000',
                        }
                    ]
                },
                {
                    id: 3,
                    nombre: "Dr. David fornerino",
                    tipo: [
                        {
                            id: 1,
                            nombre: 'Telemedicina',
                            duracion: '30 minutos',
                            precio: '$ 50.000',
                        }
                    ]
                },
                {
                    id: 4,
                    nombre: "Dr. Natalia pinzón",
                    tipo: [
                        {
                            id: 1,
                            nombre: 'Telemedicina',
                            duracion: '30 minutos',
                            precio: '$ 50.000',
                        },
                        {
                            id: 2,
                            nombre: 'Presencial',
                            duracion: '30 minutos',
                            precio: '$ 50.000',
                        }
                    ]
                }
            ]
        }
    ]
  },
    // INTERNISTA
  {
    id: 8,
    nombre: "Internista",
    codigo: "IN09", // INTERNISTA
    especialidad: [
        {
            id: 1,
            nombre: "Control de peso",
            doctores: [
                {
                   id: 1,
                   nombre: "Dr. Alvaro diaz",
                   tipo: [
                      {
                        id: 1,
                        nombre: 'Telemedicina',
                        duracion: '30 minutos',
                        precio: '$ 180.000',
                      },
                      {
                        id: 2,
                        nombre: 'Presencial',
                        duracion: '30 minutos',
                        precio: '$ 180.000',
                      }
                   ]
                }
            ]
        }
    ]
  },
  // Cirujia plastica
  {
    id: 9,
    nombre: "Cirujia plastica",
    codigo: "CJP10", // CIRUJIA PLASTICA
    especialidad: [
        {
            id: 1,
            nombre: "Cirujia plastica",
            doctores: [
                {
                    id: 1,
                    nombre: "Dr. Jhonatan guevara",
                    tipo: [
                        {
                            id: 1,
                            nombre: 'Presencial',
                            duracion: '30 minutos',
                            precio: '$ vacio',
                        },
                    ]
                }
            ]
        }
    ]
  },  
];
