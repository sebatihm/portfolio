export const proyects = [
  {
    image_url: '/assets/icons/proyects_previews/fagia.png',
    title: 'Fagia App',
    text: `A Docker-containerized REST API made in rust with the actix web framework, using Sea ORM to manage the 
    database structure, that helps to manage the transactions beetwen the food banks and donators`,
    is_private: false,
    technologies: {
      main_language: '/assets/icons/languages/rust.svg',
      tech: [
        { 
          url: '/assets/icons/technologies/actix.png',
          alt: 'Actix Web'
        },
        {
          url: '/assets/icons/technologies/sea-orm.png',
          alt: 'Sea Orm'
        },
        {
          url: '/assets/icons/technologies/mysql.svg',
          alt: 'MySQL'
        }
      ]
    },
    links: {
      github: 'https://github.com/sebatihm/fagia',
    }
  },
  {
    image_url: '/assets/icons/proyects_previews/barbershop.png',
    title: 'Barbershop',
    text: `A Docker-containerized system made with NextJS for the front client and Express JS for the back client, this system can 
      make appointments for clients and manage them accross diferent establishment, i worked in the frontend`,
    is_private: false,
    technologies: {
      main_language: '/assets/icons/languages/js.svg',
      tech: [
        { 
          url: '/assets/icons/technologies/nextjs.svg',
          alt: 'NextJS'
        },
        {
          url: '/assets/icons/technologies/reactjs.svg',
          alt: 'React'
        },
        {
          url: '/assets/icons/technologies/nodejs.svg',
          alt: 'Node'
        },
        {
          url: '/assets/icons/technologies/docker.svg',
          alt: 'Docker'
        },
        {
          url: '/assets/icons/technologies/mysql.svg',
          alt: 'MySQL'
        }
      ]
    },
    links: {
      github: 'https://github.com/julianvent/barbershop',
    }
  },
  {
    image_url: '/assets/icons/proyects_previews/laravel_post.png',
    title: 'Laravel Post',
    text: `Laravel Post is a proyect made with the sole purpose of getting familiar and learn the laravel Framework,
      its a basic post system, where everybody could post their own thougths`,
    is_private: false,
    technologies: {
      main_language: 'assets/icons/languages/php.svg',
      tech: [
        { 
          url: 'assets/icons/technologies/laravel.svg',
          alt: 'Laravel Icons'
        },
        {
          url: '/assets/icons/technologies/mysql.svg',
          alt: 'MySQL'
        }
      ]
    },
    links: {
      github: 'https://github.com/sebatihm/laravel-practice',
    }
  },
  {
    image_url: '/assets/icons/proyects_previews/coopsbot_practice.png',
    title: 'IMSS Relational Database',
    text: `A school proyect that consisted in design, create and fill a Database for the IMSS (Instituto Mexicano del Seguro Social)" `,
    is_private: false,
    technologies: {
      main_language: '/assets/icons/technologies/mysql.svg',
      tech: []
    },
    links: {
      github: 'https://github.com/sebatihm/bdimss',
    }
  },
  {
    image_url: '/assets/icons/proyects_previews/private_project.png',
    title: 'GPC Logistica',
    text: `Mantaining a ERP made in Laravel 10 for the GPC Logistica enterprise that manages the process of said
    enterprise, like Inventory, actives, billing and invoices`,
    is_private: true,
    technologies: {
      main_language: 'assets/icons/languages/php.svg',
      tech: [
        { 
          url: 'assets/icons/technologies/laravel.svg',
          alt: 'Laravel Icon'
        },
        {
          url: '/assets/icons/technologies/mysql.svg',
          alt: 'MySQL'
        }
      ]
    }
  },
  {
    image_url: '/assets/icons/proyects_previews/private_project.png',
    title: 'Dictamen Control Web App',
    text: `A Docker-containerized web app aplication made with NestJS and NextJS that manages the dictum flow for the 
      Coatzacoalcos Municipal Seat`,
    is_private: true,
    technologies: {
      main_language: '/assets/icons/languages/js.svg',
      tech: [
        { 
          url: '/assets/icons/technologies/nextjs.svg',
          alt: 'NextJS'
        },
        {
          url: '/assets/icons/technologies/reactjs.svg',
          alt: 'React'
        },
        {
          url: '/assets/icons/technologies/nodejs.svg',
          alt: 'Node'
        },
        {
          url: '/assets/icons/technologies/docker.svg',
          alt: 'Docker'
        },
        {
          url: '/assets/icons/technologies/microsoft-sql-server.svg',
          alt: 'MySQL'
        }
      ]
    },
  }
];