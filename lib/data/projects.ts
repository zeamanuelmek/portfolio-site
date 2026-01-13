export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProjectSection {
  title: string;
  content: string;
  images?: ProjectImage[];
  layout?: 'single' | 'two-column' | 'three-column';
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: 'dashboard' | 'mobile-app' | 'web-app' | 'design-system';
  color: 'teal' | 'purple' | 'blue' | 'amber' | 'emerald';
  thumbnail: string;
  featured: boolean;
  shortDescription: string;
  overview: string;
  role: string;
  timeline: string;
  tools: string[];
  sections: ProjectSection[];
  images: ProjectImage[];
  parent?: string;
  children?: Project[];
}

const projects: Project[] = [
  {
    id: 'omoc',
    slug: 'omoc',
    title: 'OMOC - Oromia Minerals Operations Center',
    category: 'dashboard',
    color: 'teal',
    thumbnail: '/projects/omoc/thumbnail.jpg',
    featured: true,
    shortDescription: 'A comprehensive operations center dashboard for managing mining operations across Oromia region',
    overview: 'OMOC is a large-scale operations management system designed to monitor and control mining operations across multiple sites in the Oromia region. The project involved creating a unified dashboard experience with six interconnected sub-systems.',
    role: 'Lead UX/UI Designer',
    timeline: '2024 - 2025 (12 months)',
    tools: ['Figma', 'FigJam', 'Adobe Illustrator', 'Miro', 'UserTesting'],
    sections: [
      {
        title: 'Project Overview',
        content: 'The OMOC project aimed to create a centralized operations center for managing mining activities across multiple sites. This involved extensive research, stakeholder interviews, and iterative design processes to create a system that could handle complex real-time data visualization and operational controls.',
      },
      {
        title: 'Design Process',
        content: 'We conducted extensive user research with mining operators, managers, and field workers. The design process involved creating information architecture, wireframes, and high-fidelity prototypes. Each sub-system was designed to work independently while maintaining consistency with the overall design system.',
      },
      {
        title: 'Key Features',
        content: 'Real-time monitoring dashboards, resource allocation management, safety tracking systems, equipment maintenance scheduling, production analytics, and environmental compliance monitoring.',
      },
    ],
    images: [
      { src: '/projects/omoc/hero.jpg', alt: 'OMOC Dashboard Overview' },
      { src: '/projects/omoc/wireframes.jpg', alt: 'Wireframe iterations' },
      { src: '/projects/omoc/final.jpg', alt: 'Final design system' },
    ],
    children: [
      {
        id: 'omoc-monitoring',
        slug: 'omoc-monitoring',
        title: 'Real-time Monitoring System',
        category: 'dashboard',
        color: 'teal',
        thumbnail: '/projects/omoc/monitoring-thumb.jpg',
        featured: false,
        shortDescription: 'Live monitoring dashboard for mining operations',
        overview: 'Subsystem for real-time monitoring of mining operations',
        role: 'Lead UX/UI Designer',
        timeline: '3 months',
        tools: ['Figma', 'FigJam'],
        sections: [],
        images: [],
        parent: 'omoc',
      },
      {
        id: 'omoc-resources',
        slug: 'omoc-resources',
        title: 'Resource Management',
        category: 'dashboard',
        color: 'teal',
        thumbnail: '/projects/omoc/resources-thumb.jpg',
        featured: false,
        shortDescription: 'Resource allocation and tracking system',
        overview: 'Subsystem for managing resources across mining sites',
        role: 'Lead UX/UI Designer',
        timeline: '2 months',
        tools: ['Figma', 'FigJam'],
        sections: [],
        images: [],
        parent: 'omoc',
      },
      {
        id: 'omoc-safety',
        slug: 'omoc-safety',
        title: 'Safety Management',
        category: 'dashboard',
        color: 'teal',
        thumbnail: '/projects/omoc/safety-thumb.jpg',
        featured: false,
        shortDescription: 'Safety tracking and incident management',
        overview: 'Subsystem for managing safety protocols and incidents',
        role: 'Lead UX/UI Designer',
        timeline: '2 months',
        tools: ['Figma', 'FigJam'],
        sections: [],
        images: [],
        parent: 'omoc',
      },
      {
        id: 'omoc-maintenance',
        slug: 'omoc-maintenance',
        title: 'Equipment Maintenance',
        category: 'dashboard',
        color: 'teal',
        thumbnail: '/projects/omoc/maintenance-thumb.jpg',
        featured: false,
        shortDescription: 'Equipment maintenance scheduling and tracking',
        overview: 'Subsystem for managing equipment maintenance',
        role: 'Lead UX/UI Designer',
        timeline: '2 months',
        tools: ['Figma', 'FigJam'],
        sections: [],
        images: [],
        parent: 'omoc',
      },
      {
        id: 'omoc-analytics',
        slug: 'omoc-analytics',
        title: 'Production Analytics',
        category: 'dashboard',
        color: 'teal',
        thumbnail: '/projects/omoc/analytics-thumb.jpg',
        featured: false,
        shortDescription: 'Production data analytics and reporting',
        overview: 'Subsystem for analyzing production data',
        role: 'Lead UX/UI Designer',
        timeline: '2 months',
        tools: ['Figma', 'FigJam'],
        sections: [],
        images: [],
        parent: 'omoc',
      },
      {
        id: 'omoc-compliance',
        slug: 'omoc-compliance',
        title: 'Environmental Compliance',
        category: 'dashboard',
        color: 'teal',
        thumbnail: '/projects/omoc/compliance-thumb.jpg',
        featured: false,
        shortDescription: 'Environmental monitoring and compliance tracking',
        overview: 'Subsystem for environmental compliance management',
        role: 'Lead UX/UI Designer',
        timeline: '2 months',
        tools: ['Figma', 'FigJam'],
        sections: [],
        images: [],
        parent: 'omoc',
      },
    ],
  },
  {
    id: 'hisab',
    slug: 'hisab',
    title: 'Hisab - Financial Management App',
    category: 'mobile-app',
    color: 'purple',
    thumbnail: '/projects/hisab/thumbnail.jpg',
    featured: true,
    shortDescription: 'A mobile app for personal and small business financial management tailored for Ethiopian users',
    overview: 'Hisab is a comprehensive financial management application designed specifically for Ethiopian users and small businesses. The app addresses the unique needs of managing finances in a context where cash transactions are common and digital financial literacy is growing.',
    role: 'Product Designer & UX Researcher',
    timeline: '2024 (6 months)',
    tools: ['Figma', 'Principle', 'UserTesting', 'Google Analytics'],
    sections: [
      {
        title: 'Problem Statement',
        content: 'Many small businesses and individuals in Ethiopia lack accessible tools for tracking expenses, managing invoices, and understanding their financial health. Existing solutions are either too complex, not localized, or do not support Ethiopian Birr and local payment methods.',
      },
      {
        title: 'Research & Discovery',
        content: 'Conducted interviews with 25 small business owners and freelancers in Addis Ababa. Key findings included the need for offline functionality, support for both Birr and dollar tracking, integration with local mobile money services, and simple expense categorization.',
      },
      {
        title: 'Design Solution',
        content: 'Created an intuitive mobile-first experience with features including expense tracking, invoice generation, project-based budgeting, financial reports, and integration with TeleBirr and CBE Birr. The design emphasizes simplicity while providing powerful features for business users.',
      },
      {
        title: 'Impact',
        content: 'Currently in beta testing with 150+ users. Early feedback shows 85% user satisfaction rate and users report saving an average of 3 hours per week on financial management tasks.',
      },
    ],
    images: [
      { src: '/projects/hisab/screens.jpg', alt: 'Hisab app screens', caption: 'Main app screens' },
      { src: '/projects/hisab/user-flow.jpg', alt: 'User flow diagram', caption: 'Core user flows' },
      { src: '/projects/hisab/prototype.jpg', alt: 'Interactive prototype', caption: 'High-fidelity prototype' },
    ],
  },
  {
    id: 'dh-app',
    slug: 'dh-app',
    title: 'DH App - Digital Health Platform',
    category: 'mobile-app',
    color: 'blue',
    thumbnail: '/projects/dh-app/thumbnail.jpg',
    featured: true,
    shortDescription: 'A health management platform connecting patients with healthcare providers in Ethiopia',
    overview: 'DH App is a comprehensive digital health platform designed to improve access to healthcare services in Ethiopia. The platform connects patients with doctors, enables telemedicine consultations, and provides tools for managing medical records and appointments.',
    role: 'Lead Product Designer',
    timeline: '2023 - 2024 (8 months)',
    tools: ['Figma', 'Maze', 'Optimal Workshop', 'Hotjar'],
    sections: [
      {
        title: 'Challenge',
        content: 'Access to quality healthcare in Ethiopia is limited by geographic constraints, shortage of medical professionals, and lack of digital infrastructure. Many patients, especially in rural areas, struggle to access timely medical care and manage their health records.',
      },
      {
        title: 'User Research',
        content: 'Conducted extensive research with patients, doctors, and healthcare administrators. Created personas representing different user groups including urban professionals, rural patients, general practitioners, and specialists. Mapped patient journeys from symptom discovery to treatment.',
      },
      {
        title: 'Key Features',
        content: 'Telemedicine video consultations, appointment booking, digital medical records, prescription management, health tracking tools, multilingual support (Amharic, Oromiffa, English), and integration with local pharmacies and laboratories.',
      },
      {
        title: 'Design System',
        content: 'Built a comprehensive design system optimized for healthcare contexts. Emphasized accessibility, clear information hierarchy, and trust-building elements. All components were designed to work across iOS, Android, and web platforms.',
      },
    ],
    images: [
      { src: '/projects/dh-app/overview.jpg', alt: 'DH App overview', caption: 'Platform overview' },
      { src: '/projects/dh-app/consultation.jpg', alt: 'Consultation interface', caption: 'Telemedicine consultation' },
      { src: '/projects/dh-app/records.jpg', alt: 'Medical records', caption: 'Digital health records' },
    ],
  },
];

// Helper functions
export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  const findProject = (projects: Project[]): Project | undefined => {
    for (const project of projects) {
      if (project.slug === slug) {
        return project;
      }
      if (project.children) {
        const found = findProject(project.children);
        if (found) return found;
      }
    }
    return undefined;
  };

  return findProject(projects);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}
