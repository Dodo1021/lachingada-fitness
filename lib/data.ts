export interface Sucursal {
  id: string
  nombre: string
  nombreCorto: string
  estado: 'abierto' | 'proximamente'
  fechaApertura?: string
  ubicacion: {
    direccion: string
    referencia?: string
    ciudad: string
    estado: string
    googleMapsUrl: string
    googleMapsEmbed: string
  }
  contacto: {
    telefono?: string
    whatsapp: string
  }
  redesSociales: {
    facebook: string
    instagram: string
    messenger: string
  }
  horarios: {
    dia: string
    horario: string
  }[]
  acceso24h?: boolean
  servicios: {
    icono: string
    titulo: string
    descripcion: string
  }[]
  precios: PreciosPlan[]
  politicas: string[]
  caracteristicasEspeciales?: string[]
}

export interface PreciosPlan {
  nombre: string
  precio: string
  precioDamas?: string
  notas?: string
  destacado?: boolean
  ahorro?: string
}

export const sucursales: Sucursal[] = [
  {
    id: 'plaza-puerta-grande',
    nombre: 'Plaza Puerta Grande',
    nombreCorto: 'PPG',
    estado: 'abierto',
    ubicacion: {
      direccion: 'Cam. a Chicola S/N, Rancho Puerta Grande, 94420 Palmira, Ver.',
      referencia: 'Delante del CBTIS 142',
      ciudad: 'Palmira',
      estado: 'Veracruz',
      googleMapsUrl: 'https://maps.app.goo.gl/ttpvw3fTXzUPGW9Q9',
      googleMapsEmbed: 'https://maps.google.com/maps?q=La+Chingada+Fitness+Plaza+Puerta+Grande,+Palmira,+Veracruz&t=&z=17&ie=UTF8&iwloc=&output=embed',
    },
    contacto: {
      whatsapp: '523318903496',
    },
    redesSociales: {
      facebook: 'https://www.facebook.com/profile.php?id=61583350767500',
      instagram: 'https://www.instagram.com/lachingadafitness_ppg',
      messenger: 'https://m.me/61583350767500',
    },
    horarios: [
      { dia: 'Lunes a Viernes', horario: '6:00 AM - 10:00 PM' },
      { dia: 'Sábado', horario: '7:00 AM - 5:00 PM' },
      { dia: 'Domingo', horario: '8:00 AM - 3:00 PM' },
    ],
    acceso24h: true,
    servicios: [
      {
        icono: 'dumbbell',
        titulo: 'Equipos Premium',
        descripcion: 'Maquinaria Panatta y Matrix de última generación',
      },
      {
        icono: 'clock',
        titulo: 'Acceso 24/7',
        descripcion: 'Entrena cuando quieras con acceso automatizado',
      },
      {
        icono: 'car',
        titulo: 'Estacionamiento',
        descripcion: 'Estacionamiento gratuito para todos los miembros',
      },
      {
        icono: 'shower',
        titulo: 'Vestidores',
        descripcion: 'Regaderas y vestidores equipados',
      },
      {
        icono: 'wifi',
        titulo: 'WiFi Gratis',
        descripcion: 'Conexión de alta velocidad en todo el gym',
      },
      {
        icono: 'shield',
        titulo: 'Zona Segura',
        descripcion: 'Ambiente seguro y accesible para todos',
      },
    ],
    precios: [
      {
        nombre: 'Visita Diaria',
        precio: '$60',
      },
      {
        nombre: 'Semanal',
        precio: '$180',
        notas: '7 días consecutivos',
      },
      {
        nombre: 'Domiciliado / Socio VIP',
        precio: '$399/mes',
        notas: 'Cargo automático a tarjeta, sin plazos forzosos, 5 visitas gratis/mes para acompañante',
        destacado: true,
      },
      {
        nombre: 'Estudiantes Fundadores',
        precio: '$449/mes',
        notas: 'CUPO LIMITADO - Requiere credencial escolar',
      },
      {
        nombre: 'Socios Fundadores',
        precio: '$549/mes',
        notas: 'CUPO LIMITADO',
      },
      {
        nombre: 'Estudiantes Normal',
        precio: '$599/mes',
        notas: 'Requiere credencial escolar vigente',
      },
      {
        nombre: 'Mensualidad Normal',
        precio: '$649/mes',
      },
      {
        nombre: 'Trimestral',
        precio: '$1,889',
        ahorro: '10%',
      },
      {
        nombre: 'Semestral',
        precio: '$3,559',
        ahorro: '15%',
      },
      {
        nombre: 'Anualidad',
        precio: '$6,699',
        ahorro: '20%',
      },
    ],
    politicas: [
      'Menores de edad SOLO pueden ingresar con carta responsiva firmada por padres o tutores legales',
    ],
    caracteristicasEspeciales: [
      'Acceso 24/7 para miembros con membresía activa',
      'Sistema de acceso automatizado',
    ],
  },
  {
    id: 'el-capulin',
    nombre: 'El Capulín',
    nombreCorto: 'CAP',
    estado: 'abierto',
    ubicacion: {
      direccion: 'Venustiano Carranza 1, 45675 El Capulín, Jal.',
      referencia: 'Frente a la plaza del Capulín',
      ciudad: 'El Capulín',
      estado: 'Jalisco',
      googleMapsUrl: 'https://maps.app.goo.gl/a9yZfHxk4YVXjpuT7',
      googleMapsEmbed: 'https://maps.google.com/maps?q=La+Chingada+Fitness+El+Capulin,+Jalisco&t=&z=17&ie=UTF8&iwloc=&output=embed',
    },
    contacto: {
      telefono: '+52 33 3470 6910',
      whatsapp: '523334706910',
    },
    redesSociales: {
      facebook: 'https://www.facebook.com/lachingadafitnessoficial',
      instagram: 'https://www.instagram.com/lachingadafitness_oficial',
      messenger: 'https://m.me/lachingadafitnessoficial',
    },
    horarios: [
      { dia: 'Lunes a Viernes', horario: '5:40 AM - 11:00 PM' },
      { dia: 'Sábado', horario: '7:00 AM - 5:00 PM' },
      { dia: 'Domingo', horario: '8:00 AM - 3:00 PM' },
    ],
    servicios: [
      {
        icono: 'cardio',
        titulo: 'Área de Cardio',
        descripcion: 'Caminadoras, elípticas, bicicletas estáticas y escaladoras',
      },
      {
        icono: 'dumbbell',
        titulo: 'Pesas y Máquinas',
        descripcion: 'Área completa de pesas libres y máquinas de musculación',
      },
      {
        icono: 'stretch',
        titulo: 'Zona Funcional',
        descripcion: 'Área de estiramientos y entrenamiento funcional',
      },
      {
        icono: 'shower',
        titulo: 'Regaderas',
        descripcion: 'Regaderas con agua caliente incluidas',
      },
      {
        icono: 'coach',
        titulo: 'Instructores',
        descripcion: 'Entrenadores capacitados incluidos en la membresía',
      },
      {
        icono: 'nutrition',
        titulo: 'Asesoría Nutricional',
        descripcion: 'Asesoría básica de nutrición sin costo extra',
      },
    ],
    precios: [
      {
        nombre: 'Visita',
        precio: '$60',
        precioDamas: '$60',
      },
      {
        nombre: 'Semanal',
        precio: '$150',
        precioDamas: '$150',
      },
      {
        nombre: 'Mensualidad',
        precio: '$450',
        precioDamas: '$400',
        destacado: true,
      },
      {
        nombre: 'Trimestral',
        precio: '$1,250',
        precioDamas: '$1,100',
      },
      {
        nombre: 'Semestral',
        precio: '$2,400',
        precioDamas: '$2,100',
      },
      {
        nombre: 'Anualidad',
        precio: '$4,500',
        precioDamas: '$4,000',
      },
    ],
    politicas: [
      'No hay edad mínima para inscribirse',
      'No es necesario que menores vengan acompañados de padres/tutores',
      'Rutinas 100% personalizadas tienen costo adicional',
    ],
    caracteristicasEspeciales: [
      '¡Inscripción GRATIS!',
      'Ambiente climatizado',
      'WiFi gratuito',
      'Estacionamiento público al lado del gimnasio',
    ],
  },
]

export function getSucursal(id: string): Sucursal | undefined {
  return sucursales.find((s) => s.id === id)
}
