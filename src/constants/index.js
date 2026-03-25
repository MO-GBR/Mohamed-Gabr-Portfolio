export const SERVICES = {
    front: [
        'Responsive, mobile-first interfaces',
        'Modern UI with smooth animations',
        'Performance-optimized React & Next.js applications'
    ],
    back: [
        'Secure authentication & authorization',
        'REST & GraphQL APIs',
        'Real-time features & integrations'
    ],
    others: [
        'Clean, scalable project architecture',
        'API integrations & payments (Stripe)',
        'Deployment & hosting (Vercel, Render)'
    ]
};

export const TECHS = [
    {
        icon: 'html',
        tech: 'HTML'
    },
    {
        icon: 'css',
        tech: 'CSS'
    }, 
    {
        icon: 'javascript',
        tech: 'JavaScript'
    }, 
    {
        icon: 'typescript',
        tech: 'TypeScript'
    }, 
    {
        icon: 'react',
        tech: 'React JS'
    }, 
    {
        icon: 'next',
        tech: 'Next JS'
    }, 
    {
        icon: 'nodejs',
        tech: 'Node JS'
    }, 
    {
        icon: 'express',
        tech: 'Express JS'
    }, 
    {
        icon: 'graphql',
        tech: 'GraphQL'
    }, 
    {
        icon: 'mongodb',
        tech: 'Mongo DB'
    }, 
    {
        icon: 'postgres',
        tech: 'PostgreSQL'
    }, 
    {
        icon: 'prisma',
        tech: 'Prisma'
    }, 
    {
        icon: 'redux',
        tech: 'Redux'
    }, 
    {
        icon: 'tailwind',
        tech: 'Tailwind CSS'
    }, 
    {
        icon: 'sass',
        tech: 'Sass'
    }, 
    {
        icon: 'git',
        tech: 'Git'
    }, 
    {
        icon: 'zustand',
        tech: 'Zustand'
    }, 
    {
        icon: 'supabase',
        tech: 'Supabase'
    }, 
    {
        icon: 'three',
        tech: 'Three JS'
    }, 
    {
        icon: 'fire',
        tech: 'Firebase'
    }
];

export const CERTIFICATIONS = [
    {
        title: 'Responsive Web Design',
        link: 'https://www.freecodecamp.org/certification/mogabr/responsive-web-design',
        image: '/certification/1.jpg'
    },
    {
        title: 'Front End Development Libraries',
        link: 'https://www.freecodecamp.org/certification/mogabr/front-end-development-libraries',
        image: '/certification/2.jpg'
    },
    {
        title: 'Back End Development and APIs',
        link: 'https://www.freecodecamp.org/certification/mogabr/back-end-development-and-apis',
        image: '/certification/3.jpg'
    },
    {
        title: 'JavaScript Algorithms and Data Structures',
        link: 'https://www.freecodecamp.org/certification/mogabr/javascript-algorithms-and-data-structures',
        image: '/certification/4.jpg'
    }
];

export const TECH_BADGES = {
    React: {
        icon: '/tech/react.png',
        text: 'React JS',
        styles: 'text-[#005269] bg-[#c7f3ff] border-[#0096bf]',
    },
    Next: {
        icon: '/tech/next.png',
        text: 'Next JS',
        styles: 'text-[#000] bg-[#fff] border-[#000]',
    },
    Tailwind: {
        icon: '/tech/tailwind.png',
        text: 'Tailwind CSS',
        styles: 'text-[#005269] bg-[#c7f3ff] border-[#0096bf]',
    },
    typescript: {
        icon: '/tech/typescript.png',
        text: 'TypeScript',
        styles: 'text-[#005269] bg-[#c7f3ff] border-[#0096bf]',
    },
    nodejs: {
        icon: '/tech/nodejs.png',
        text: 'Node JS',
        styles: 'text-[#003d04] bg-[#9cffa2] border-[#003d04]',
    },
    express: {
        icon: '/tech/express.png',
        text: 'Express JS',
        styles: 'text-[#000] bg-[#fff] border-[#000]',
    },
    mongodb: {
        icon: '/tech/mongodb.png',
        text: 'MongoDB',
        styles: 'text-[#003d04] bg-[#9cffa2] border-[#003d04]',
    },
    postgres: {
        icon: '/tech/postgres.png',
        text: 'PostgreSQL',
        styles: 'text-[#005269] bg-[#c7f3ff] border-[#0096bf]',
    },
    graphql: {
        icon: '/tech/graphql.png',
        text: 'GraphQL',
        styles: 'text-[#3b0033] bg-[#ffa8f3] border-[#3b0033]',
    },
    redux: {
        icon: '/tech/redux.png',
        text: 'Redux',
        styles: 'text-[#21003d] bg-[#d7a8ff] border-[#21003d]',
    },
    prisma: {
        icon: '/tech/prisma.png',
        text: 'Prisma',
        styles: 'text-[#000] bg-[#fff] border-[#000]',
    },
    sass: {
        icon: '/tech/sass.png',
        text: 'Sass',
        styles: 'text-[#c36291] bg-[#ffd1e8] border-[#c36291]',
    },
    zustand: {
        icon: '/tech/zustand.png',
        text: 'Zustand',
        styles: 'text-[#2e2e2e] bg-[#c2c2c2] border-[#2e2e2e]',
    },
    threejs: {
        icon: '/tech/three.png',
        text: 'Three JS',
        styles: 'text-[#2e2e2e] bg-[#c2c2c2] border-[#2e2e2e]',
    },
    firebase: {
        icon: '/tech/fire.png',
        text: 'Firebase',
        styles: 'text-[#ff9900] bg-[#fff0e6] border-[#ff9900]',
    },
    subabase: {
        icon: '/tech/supabase.png',
        text: 'Supabase',
        styles: 'text-[#003b0c] bg-[#a3ffb6] border-[#003b0c]',
    }
};

export const PROJECTS = [
    {
        title: 'Green',
        text: 'A Full-Stack Ecommerce website. That can handle all of the ecomm user features. Featuring seamless payment processing through Stripe, you have the capability to purchase order from you shopping cart.',
        img: '/images/Projects/green.jpg',
        tags: [
            TECH_BADGES.React,
            TECH_BADGES.Tailwind,
            TECH_BADGES.Next,
            TECH_BADGES.postgres,
            TECH_BADGES.prisma,
            TECH_BADGES.typescript
        ],
        githubLink: 'https://github.com/MO-GBR/green_ecom_website',
        liveLink: 'https://green-ecom-website.vercel.app/',
        updatedAt: 'Jun 3, 2025'
    },
    {
        title: 'Nike Landing Page',
        text: 'A Nike landing page, with some cool and advanced features. A React JS landing page that is ready for production.',
        img: '/images/Projects/nike.jpg',
        tags: [
            TECH_BADGES.React,
            TECH_BADGES.Tailwind,
            TECH_BADGES.firebase
        ],
        githubLink: 'https://github.com/MO-GBR/nike_landing_page',
        liveLink: 'https://nike-landing-page-gamma-wine.vercel.app/',
        updatedAt: 'May 18, 2025'
    },
    {
        title: 'Netflix Clone',
        text: 'A Netflix landing page, with some cool and advanced features. A React JS landing page that is ready for production.',
        img: '/images/Projects/netflix.jpg',
        tags: [
            TECH_BADGES.React,
            TECH_BADGES.sass,
            TECH_BADGES.firebase,
            TECH_BADGES.redux
        ],
        githubLink: 'https://github.com/MO-GBR/netflix_clone',
        liveLink: 'https://netflix-clone-mu-woad-36.vercel.app/',
        updatedAt: 'May 18, 2025'
    },
    {
        title: 'Disney Plus Clone',
        text: 'A Disney + landing page, with some cool and advanced features. A React JS landing page that is ready for production.',
        img: '/images/Projects/disney.jpg',
        tags: [
            TECH_BADGES.React,
            TECH_BADGES.firebase,
            TECH_BADGES.redux
        ],
        githubLink: 'https://github.com/MO-GBR/disney_plus_clone',
        liveLink: 'https://disney-plus-clone-pied-psi.vercel.app',
        updatedAt: 'May 19, 2025'
    },
    {
        title: 'Zentry Gaming Website',
        text: 'Zentry is a gaming landing page, with some cool and advanced features. A React JS landing page that is ready for production.',
        img: '/images/Projects/zentry.jpg',
        tags: [
            TECH_BADGES.React,
            TECH_BADGES.Tailwind
        ],
        githubLink: 'https://github.com/MO-GBR/zentry_gaming_website',
        liveLink: 'https://zentry-gaming-website-gamma.vercel.app/',
        updatedAt: 'May 18, 2025'
    },
    {
        title: 'Q7 Cars Landing Page',
        text: 'A Cars landing page, with some cool and advanced features. A React JS landing page that is ready for production.',
        img: '/images/Projects/q7.jpg',
        tags: [
            TECH_BADGES.React,
            TECH_BADGES.Tailwind,
            TECH_BADGES.threejs
        ],
        githubLink: 'https://github.com/MO-GBR/q7cars_landing_page',
        liveLink: 'https://q7cars-landing-page.vercel.app/',
        updatedAt: 'May 18, 2025'
    },
    {
        title: 'Xora Landing Page',
        text: 'Xora is a modern designed landing page, with some cool and advanced features. A React JS landing page that is ready for production.',
        img: '/images/Projects/xora.jpg',
        tags: [
            TECH_BADGES.React,
            TECH_BADGES.Tailwind
        ],
        githubLink: 'https://github.com/MO-GBR/xora_landing_page',
        liveLink: 'https://xora-landing-page-weld.vercel.app/',
        updatedAt: 'May 18, 2025'
    },
    {
        title: 'Smart E-commerce Website',
        text: 'A Full-Stack e-commerce website. That can handle all of the e-commerce user features. Featuring seamless payment processing through Stripe, you have the capability to purchase order from your shopping cart. With an admin side dashboard where you have a full management system.',
        img: '/images/Projects/smart.jpg',
        tags: [
            TECH_BADGES.React,
            TECH_BADGES.Tailwind,
            TECH_BADGES.redux,
            TECH_BADGES.nodejs,
            TECH_BADGES.express,
            TECH_BADGES.mongodb
        ],
        githubLink: 'https://github.com/MO-GBR/smart_ecom_website',
        liveLink: 'https://github.com/MO-GBR/smart_ecom_website',
        updatedAt: 'May 19, 2025'
    },
    {
        title: 'Chatty',
        text: 'Chatty is an advanced chat web app with some crazy amazing features. A real world project ready for production. It handles user privacy and easy to use. Real time functions that makes the app fast.',
        img: '/images/Projects/chat.jpg',
        tags: [
            TECH_BADGES.React,
            TECH_BADGES.Tailwind,
            TECH_BADGES.graphql,
            TECH_BADGES.postgres,
            TECH_BADGES.nodejs,
            TECH_BADGES.express
        ],
        githubLink: 'https://github.com/MO-GBR/chat_app',
        liveLink: 'https://github.com/MO-GBR/chat_app',
        updatedAt: 'May 19, 2025'
    },
    {
        title: 'Evently',
        text: 'Full-stack platform for managing events. It serves as a hub, spotlighting diverse events taking place globally. Featuring seamless payment processing through Stripe, you have the capability to purchase tickets for any event or even initiate and manage your own events.',
        img: '/images/Projects/event.jpg',
        tags: [
            TECH_BADGES.React,
            TECH_BADGES.Tailwind,
            TECH_BADGES.Next,
            TECH_BADGES.mongodb,
            TECH_BADGES.typescript
        ],
        githubLink: 'https://github.com/MO-GBR/evently_events_platform',
        liveLink: 'https://evently-events-platform.vercel.app/',
        updatedAt: 'Jun 5, 2025'
    },
];

export const LINKS = [
    {
        title: 'About Me',
        href: '#about',
    },
    {
        title: 'Services',
        href: '#service',
    },
    {
        title: 'Skills',
        href: '#skills',
    },
    {
        title: 'Certifications',
        href: '#certifications',
    },
    {
        title: 'Projects',
        href: '#work',
    },
    {
        title: 'Contact',
        href: '#contact',
    }
];