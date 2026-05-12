export const portfolioDataEN = {
  sectionDescriptions: {
    skills: "My technical arsenal is a carefully curated blend of DevOps practices, cloud infrastructure, and full stack development tools. I continuously refine these skills to architect robust, scalable, and highly available systems tailored for modern enterprise challenges.",
    projects: "Below is a comprehensive showcase of my professional portfolio. Each case study represents a unique fusion of DevOps automation, cloud-native architecture, and full stack engineering — from CI/CD pipelines to production-grade web applications.",
    education: "A solid theoretical foundation paired with rigorous practical application. My academic journey has been defined by a relentless pursuit of engineering excellence and cutting-edge software development methodologies.",
    certifications: "In the rapidly evolving landscape of cloud and DevOps, continuous learning is non-negotiable. These professional validations reflect my commitment to mastering industry-standard tools, cloud platforms, and modern development practices.",
    services: "I bridge the gap between development and operations. My services are designed to empower organizations through automated pipelines, scalable cloud infrastructure, and robust full stack engineering solutions."
  },
  personal: {
    name: "Fared Mansour",
    title: "DevOps & Full Stack Engineer",
    email: "faredmansour6@gmail.com",
    linkedin: "https://linkedin.com/in/fared-mansour-718324225",
    github: "https://github.com/faredmansour",
    avatar: "/profile-photo.jpg",
    phone: "01098798893",
    whatsapp: "https://wa.me/01098798893",
    perspectives: {
      official: "I am a Backend & Cloud Engineer with a strong foundation in building scalable web applications and cloud-native systems. I have extensive experience in Node.js, .NET Web API, SQL databases, and RESTful API development. My hands-on expertise includes AWS, Docker, Kubernetes, Terraform, and CI/CD pipelines. I am passionate about problem-solving, system design, and building reliable backend services that scale in fast-paced environments.",
      tech: "Stack: {React.js, Node.js, Express.js, Python, FastAPI, Docker, Kubernetes, Jenkins, GitHub Actions, Terraform, AWS, Azure}. Core Competencies: [CI/CD Automation, Container Orchestration, Full Stack Development, Infrastructure as Code, Cloud Architecture].\n\nI treat infrastructure as code and deployments as a science. My workflow prioritizes automation, observability, and zero-downtime releases. Currently focusing on building cloud-native microservices and GitOps-driven deployment workflows.",
      story: "My journey started with a passion for building things that work reliably at scale. I realized early on that great software is not just about writing code — it's about how that code gets built, tested, deployed, and monitored.\n\nI dove deep into DevOps not just to automate pipelines, but to build engineering cultures where delivery is fast, safe, and repeatable. From containerizing legacy apps to architecting full stack platforms from scratch, I am driven by the intersection of development excellence and operational stability."
    },
    metrics: [
      { label: "Pipelines Deployed", value: "30", suffix: "+" },
      { label: "Services Containerized", value: "50", suffix: "+" },
      { label: "System Uptime", value: "99.9", suffix: "%" }
    ],
    services: [
      {
        title: "CI/CD Pipeline Automation",
        description: "Designing and implementing end-to-end CI/CD pipelines that automate testing, building, and deployment to accelerate software delivery with confidence.",
        icon: "Cpu",
        features: ["GitHub Actions", "Jenkins Pipelines", "Automated Testing"]
      },
      {
        title: "Cloud Infrastructure (IaC)",
        description: "Provisioning and managing scalable cloud infrastructure on AWS and Azure using Terraform and Ansible for repeatable, version-controlled environments.",
        icon: "Cloud",
        features: ["Terraform & Ansible", "AWS & Azure", "Auto-scaling"]
      },
      {
        title: "Full Stack Development",
        description: "Building modern, responsive web applications from front-end to back-end using React.js, Node.js, and RESTful APIs with a focus on performance and scalability.",
        icon: "Layers",
        features: ["React.js & Next.js", "Node.js & Express", "REST APIs"]
      },
      {
        title: "Containerization & Orchestration",
        description: "Containerizing applications with Docker and orchestrating them at scale with Kubernetes for high availability, self-healing deployments.",
        icon: "Database",
        features: ["Docker & Compose", "Kubernetes (K8s)", "Helm Charts"]
      },
      {
        title: "Monitoring & Observability",
        description: "Implementing comprehensive monitoring stacks with Prometheus, Grafana, and the ELK Stack to provide deep visibility into system health and performance.",
        icon: "BarChart3",
        features: ["Prometheus & Grafana", "ELK Stack", "Alerting Systems"]
      },
      {
        title: "DevSecOps & Security",
        description: "Integrating security practices directly into the development pipeline with automated vulnerability scanning, secrets management, and compliance auditing.",
        icon: "Eye",
        features: ["Vulnerability Scanning", "Secrets Management", "Access Control"]
      }
    ]
  },
  skills: [
    { 
      category: "Cloud & DevOps", 
      items: [
        { name: "AWS", description: "Deploying and managing cloud infrastructure, serverless functions, and storage on Amazon Web Services." },
        { name: "Docker", description: "Containerizing applications for consistent, portable, and isolated deployment environments." },
        { name: "Kubernetes", description: "Orchestrating containerized workloads for auto-scaling, self-healing, and high-availability deployments." },
        { name: "CI/CD Pipelines", description: "Automating build, test, and deployment workflows with Jenkins, GitLab CI, and GitHub Actions." },
        { name: "Terraform", description: "Infrastructure as Code tool for provisioning and managing cloud resources in a declarative way." },
        { name: "Ansible", description: "Agentless automation tool for configuration management, app deployment, and task orchestration." }
      ] 
    },
    { 
      category: "Tools & Security", 
      items: [
        { name: "Git & GitHub", description: "Version control and collaboration platform for tracking changes and managing codebases at scale." },
        { name: "JWT Authentication", description: "Secure, stateless token-based authentication for protecting APIs and user sessions." },
        { name: "Linux & Bash", description: "Linux system administration, Bash scripting, and user/permission management for server environments." }
      ] 
    },
    { 
      category: "Backend & Databases", 
      items: [
        { name: "Node.js", description: "Event-driven runtime for building scalable, high-performance backend services and APIs." },
        { name: "Express.js", description: "Minimal and flexible Node.js framework for building RESTful APIs and web applications." },
        { name: "RESTful APIs", description: "Designing and consuming stateless, resource-oriented APIs following REST architectural principles." },
        { name: "PostgreSQL", description: "Advanced open-source relational database for complex queries and transactional data integrity." },
        { name: "MongoDB", description: "Document-oriented NoSQL database for flexible, schema-less, and high-throughput data storage." }
      ] 
    },
    { 
      category: "Frontend", 
      items: [
        { name: "React.js", description: "Component-based UI library for building fast, scalable, and modern single-page applications." },
        { name: "HTML5 & CSS3", description: "Semantic markup and modern styling for accessible, responsive, and visually rich interfaces." },
        { name: "Responsive Design", description: "Crafting layouts that adapt seamlessly to all screen sizes and device types." }
      ] 
    },
    { 
      category: "Languages", 
      items: [
        { name: "JavaScript (ES6+)", description: "Modern JavaScript for building dynamic, interactive, and high-performance web applications." },
        { name: "Python", description: "Versatile language for backend development, scripting, automation, and AI integration." },
        { name: "SQL", description: "Designing and querying relational databases for structured data management and reporting." },
        { name: "C++", description: "Systems-level programming language used for performance-critical applications and algorithms." }
      ] 
    }
  ],
  allSkills: ["JavaScript", "Python", "SQL", "React.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "Docker", "Kubernetes", "AWS", "Azure", "Terraform", "Ansible", "CI/CD", "Git"],
  radarData: [
    { subject: 'Full Stack Dev', A: 90, fullMark: 100 },
    { subject: 'DevOps & CI/CD', A: 88, fullMark: 100 },
    { subject: 'Cloud (AWS/Azure)', A: 85, fullMark: 100 },
    { subject: 'Containerization', A: 87, fullMark: 100 },
    { subject: 'Backend APIs', A: 92, fullMark: 100 },
    { subject: 'Security', A: 83, fullMark: 100 },
  ],
  projects: [
    {
      title: "AI-Driven Full-Stack Capstone Project",
      description: "Designed and deployed a robust full-stack web application using the MERN stack (MongoDB, Express, React, Node.js) integrated with AI-driven automation features. Implemented CI/CD pipelines with Docker for containerization and managed cloud deployment via AWS. Secured the application with JWT-based authentication and advanced security protocols.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800",
      tags: ["MERN Stack", "Docker", "AWS", "JWT"],
      link: "#",
      github: "https://github.com/faredmansour",
      caseStudy: {
        problem: "The team needed a scalable full-stack application that integrates AI-driven analytics while maintaining secure access and automated deployment workflows.",
        solution: "Built a MERN stack application with AI automation features, containerized with Docker, and deployed on AWS with a full CI/CD pipeline.",
        impact: "Delivered a production-ready platform with zero-downtime deployments, JWT-secured APIs, and AI-powered data insights for end users."
      }
    },
    {
      title: "National Students Community Platform",
      description: "Engineered a large-scale web platform connecting middle and high school students across Egypt to share knowledge, collaborate on learning, and participate in educational and cultural challenges. Built with Node.js RESTful APIs, SQL relational database, and role-based access control supporting users across multiple governorates.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
      tags: ["Node.js", "SQL", "REST API", "JWT"],
      link: "#",
      github: "https://github.com/faredmansour",
      caseStudy: {
        problem: "Egyptian students lacked a unified platform for collaborative learning, educational challenges, and knowledge sharing across different governorates.",
        solution: "Built backend RESTful APIs using Node.js and SQL with role-based access control, supporting discussions, challenges, and volunteering modules.",
        impact: "Delivered a scalable platform designed to handle large-scale users across multiple governorates, enabling educational and cultural collaboration nationwide."
      }
    },
    {
      title: "CI/CD Pipeline Automation",
      description: "Designed and implemented a complete CI/CD pipeline using Jenkins and GitLab CI for a multi-service application. Integrated automated testing, Docker image building, and Kubernetes deployment stages to achieve fully automated, zero-downtime releases on AWS.",
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=800",
      tags: ["Jenkins", "GitLab CI", "Docker", "Kubernetes"],
      link: "#",
      github: "https://github.com/faredmansour",
      caseStudy: {
        problem: "Manual deployment processes were error-prone and slow, causing frequent downtime and inconsistent environments across dev, staging, and production.",
        solution: "Implemented a full CI/CD pipeline with Jenkins and GitLab CI, automating testing, containerization with Docker, and orchestration via Kubernetes.",
        impact: "Reduced deployment time by 70% and eliminated manual errors, achieving consistent zero-downtime releases across all environments."
      }
    },
    {
      title: "Cloud Infrastructure with Terraform",
      description: "Provisioned and managed scalable AWS cloud infrastructure using Terraform as Infrastructure as Code. Configured auto-scaling groups, load balancers, VPCs, and security groups for a high-availability production environment. Automated configuration management using Ansible.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800",
      tags: ["Terraform", "AWS", "Ansible", "IaC"],
      link: "#",
      github: "https://github.com/faredmansour",
      caseStudy: {
        problem: "Manually provisioned cloud resources were inconsistent, hard to replicate, and took hours to spin up new environments.",
        solution: "Wrote Terraform modules for all AWS infrastructure components and Ansible playbooks for automated server configuration management.",
        impact: "Reduced environment provisioning time from hours to minutes, with fully reproducible and version-controlled infrastructure."
      }
    },
    {
      title: "Containerized Microservices with Kubernetes",
      description: "Containerized a suite of backend microservices using Docker and orchestrated them on a Kubernetes cluster. Implemented Helm charts for templated deployments, horizontal pod autoscaling, and Prometheus/Grafana monitoring for real-time observability.",
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=800",
      tags: ["Docker", "Kubernetes", "Helm", "Prometheus"],
      link: "#",
      github: "https://github.com/faredmansour",
      caseStudy: {
        problem: "A monolithic backend application was difficult to scale and deploy, causing bottlenecks during traffic spikes.",
        solution: "Decomposed the application into microservices, containerized each with Docker, and orchestrated on Kubernetes with Helm charts and auto-scaling.",
        impact: "Achieved 99.9% uptime with automatic scaling during peak loads and full observability through a Prometheus/Grafana monitoring stack."
      }
    }
  ],
  education: [
    {
      period: "Dec 2025 — Present",
      degree: "Software Development Diploma (AI-Based)",
      institution: "Digital Pioneers Initiative (DIGILIANS) — Ministry of Communications & IT",
      description: "An intensive software development program focused on full-stack development integrated with AI. Hands-on training in building scalable backend architectures with Node.js and Express, implementing CI/CD pipelines, and deploying containerized applications on AWS/Azure using Docker and Kubernetes.",
      highlights: ["Full Stack Development", "CI/CD Pipelines", "Docker & AWS", "JWT Authentication", "Agile Methodologies", "AI Integration"]
    },
    {
      period: "2018 — 2023",
      degree: "B.Sc. in Engineering — Telecommunications & Electronics",
      institution: "Kafr el-Sheikh University",
      description: "Bachelor's degree in Telecommunications and Electronics Engineering with a strong foundation in networking, systems design, and electronic principles — providing the technical depth that underpins my expertise in DevOps infrastructure and cloud networking.",
      highlights: ["Telecommunications", "Electronics", "Networking", "Systems Design", "TCP/IP"]
    }
  ],
  certifications: [
    { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", icon: "Cloud" },
    { name: "Full Stack Developer Certification", issuer: "Digital Pioneers Initiative", icon: "Code" },
    { name: "TCP/IP, Routing & Switching (CCNA level)", issuer: "ITI", icon: "Cpu" }
  ],
  experience: [
    {
      period: "Dec 2025 — Present",
      role: "Full Stack Developer (AI-Based Diploma)",
      company: "Digital Pioneers Initiative (DIGILIANS) — Ministry of Communications & IT",
      description: "Developing full-stack applications integrating AI models to automate complex workflows. Building scalable backend architectures using Node.js and Express with secure JWT-based authentication. Implementing CI/CD pipelines and containerizing applications with Docker for cloud deployment on AWS/Azure. Applying Agile methodologies to deliver high-quality software solutions.",
      technologies: ["Node.js", "React.js", "Docker", "AWS", "CI/CD", "JWT"]
    },
    {
      period: "2024 — Present",
      role: "DevOps Engineer Trainee",
      company: "ITI (Information Technology Institute)",
      description: "Comprehensive training in DevOps principles, Agile/Lean methodologies, and CI/CD automation using Jenkins and GitLab CI. Hands-on experience with Infrastructure as Code using Terraform and Ansible, containerization with Docker and Kubernetes orchestration. Linux system administration, Bash scripting, user and permission management, and system monitoring in real-world integrated projects.",
      technologies: ["Jenkins", "Terraform", "Ansible", "Docker", "Kubernetes", "Linux"]
    }
  ]
};

export const portfolioDataAR = {
  sectionDescriptions: {
    skills: "ترسانتي التقنية مزيج منتقى من ممارسات DevOps والبنية التحتية السحابية وأدوات تطوير الويب الشامل. أسعى دائماً لبناء أنظمة قوية وقابلة للتوسع وعالية الإتاحة.",
    projects: "فيما يلي عرض شامل لمحفظة أعمالي الاحترافية. تمثل كل حالة دراسية مزيجاً فريداً من أتمتة DevOps والمعمارية السحابية وهندسة الويب الشاملة.",
    education: "أساس نظري صلب مقترن بتطبيق عملي صارم. رحلتي الأكاديمية تميزت بالسعي الدؤوب لتحقيق التميز الهندسي وتطبيق أحدث منهجيات تطوير البرمجيات.",
    certifications: "في عالم السحابة وتقنيات DevOps سريع التطور، التعلم المستمر ضرورة. تعكس هذه الاعتمادات التزامي بإتقان الأدوات المعيارية ومنصات السحابة الحديثة.",
    services: "أسد الفجوة بين التطوير والتشغيل. صُممت خدماتي لتمكين المؤسسات من خلال خطوط تسليم مؤتمتة وبنية تحتية سحابية قابلة للتوسع وحلول هندسة ويب شاملة."
  },
  personal: {
    name: "فريد منصور",
    title: "مهندس DevOps وفول ستاك",
    email: "faredmansour6@gmail.com",
    linkedin: "https://linkedin.com/in/fared-mansour-718324225",
    github: "https://github.com/faredmansour",
    avatar: "/profile-photo.jpg",
    phone: "01098798893",
    whatsapp: "https://wa.me/201098798893",
    perspectives: {
      official: "أنا مهندس خلفية وسحابة (Backend & Cloud Engineer) ذو أساس قوي في بناء تطبيقات الويب القابلة للتوسع والأنظمة السحابية الأصلية. خبير في Node.js و .NET Web API وقواعد بيانات SQL وتطوير واجهات RESTful APIs. لدي خبرة عملية في AWS و Docker و Kubernetes و Terraform وخطوط CI/CD. شغوف بحل المشكلات وتصميم الأنظمة وبناء خدمات خلفية موثوقة تتوسع في بيئات العمل سريعة الوتيرة.",
      tech: "Stack: {React.js, Node.js, Express.js, Python, Docker, Kubernetes, Jenkins, GitHub Actions, Terraform, AWS, Azure}. القدرات الجوهرية: [أتمتة CI/CD، تنسيق الحاويات، تطوير الويب الشامل، البنية التحتية كـكود، معمارية السحابة].\n\nأتعامل مع البنية التحتية كـكود والنشر كعلم. أولوياتي هي الأتمتة والمراقبة والإصدارات بدون توقف. أركز حالياً على بناء خدمات مصغرة سحابية ونماذج نشر GitOps.",
      story: "بدأت رحلتي بشغف لبناء أشياء تعمل بشكل موثوق على نطاق واسع. أدركت مبكراً أن البرمجيات الرائعة لا تتعلق فقط بكتابة الكود — بل بكيفية بناء هذا الكود واختباره ونشره ومراقبته.\n\nتعمقت في DevOps ليس فقط لأتمتة خطوط العمل، بل لبناء ثقافات هندسية يكون فيها التسليم سريعاً وآمناً وقابلاً للتكرار. من احتواء التطبيقات القديمة إلى هندسة منصات ويب شاملة من الصفر، يحركني التقاطع بين التميز التطويري والاستقرار التشغيلي."
    },
    metrics: [
      { label: "خطوط نشر مُنجزة", value: "30", suffix: "+" },
      { label: "خدمات محتواة", value: "50", suffix: "+" },
      { label: "وقت تشغيل النظام", value: "99.9", suffix: "%" }
    ],
    services: [
      {
        title: "أتمتة خطوط CI/CD",
        description: "تصميم وتنفيذ خطوط CI/CD شاملة تُؤتمت الاختبار والبناء والنشر لتسريع تسليم البرمجيات بثقة.",
        icon: "Cpu",
        features: ["GitHub Actions", "Jenkins Pipelines", "اختبار مؤتمت"]
      },
      {
        title: "البنية التحتية السحابية (IaC)",
        description: "توفير وإدارة البنية التحتية السحابية القابلة للتوسع على AWS و Azure باستخدام Terraform و Ansible.",
        icon: "Cloud",
        features: ["Terraform & Ansible", "AWS & Azure", "توسع تلقائي"]
      },
      {
        title: "تطوير الويب الشامل",
        description: "بناء تطبيقات ويب حديثة ومتجاوبة من الواجهة إلى الخادم باستخدام React.js و Node.js وواجهات REST.",
        icon: "Layers",
        features: ["React.js & Next.js", "Node.js & Express", "REST APIs"]
      },
      {
        title: "الحاويات والتنسيق",
        description: "احتواء التطبيقات بـ Docker وتنسيقها على نطاق واسع بـ Kubernetes لتحقيق نشر عالي الإتاحة ويعيد ترميم نفسه.",
        icon: "Database",
        features: ["Docker & Compose", "Kubernetes (K8s)", "Helm Charts"]
      },
      {
        title: "المراقبة والرصد",
        description: "تنفيذ مجموعات مراقبة شاملة بـ Prometheus و Grafana ومجموعة ELK لرؤية عميقة لصحة النظام.",
        icon: "BarChart3",
        features: ["Prometheus & Grafana", "ELK Stack", "أنظمة التنبيه"]
      },
      {
        title: "DevSecOps والأمان",
        description: "دمج ممارسات الأمان في خط التطوير مباشرة مع فحص آلي للثغرات وإدارة الأسرار ومراجعة الامتثال.",
        icon: "Eye",
        features: ["فحص الثغرات", "إدارة الأسرار", "التحكم بالوصول"]
      }
    ]
  },
  skills: [
    { 
      category: "السحابة و DevOps", 
      items: [
        { name: "AWS", description: "نشر وإدارة البنية التحتية السحابية والدوال بدون خادم والتخزين على خدمات أمازون." },
        { name: "Docker", description: "احتواء التطبيقات لبيئات نشر متسقة ومحمولة ومعزولة." },
        { name: "Kubernetes", description: "تنسيق أحمال العمل المحتواة للتوسع التلقائي والإصلاح الذاتي والنشر عالي الإتاحة." },
        { name: "CI/CD Pipelines", description: "أتمتة سير عمل البناء والاختبار والنشر بـ Jenkins وGitLab CI وGitHub Actions." },
        { name: "Terraform", description: "أداة البنية التحتية كـكود لتوفير موارد السحابة وإدارتها بشكل إعلاني." },
        { name: "Ansible", description: "أداة أتمتة بدون وكلاء لإدارة التكوين ونشر التطبيقات وتنسيق المهام." }
      ] 
    },
    { 
      category: "الأدوات والأمان", 
      items: [
        { name: "Git & GitHub", description: "منصة التحكم في الإصدار والتعاون لتتبع التغييرات وإدارة قواعد الكود على نطاق واسع." },
        { name: "JWT Authentication", description: "مصادقة آمنة وعديمة الحالة قائمة على الرمز المميز لحماية واجهات برمجية وجلسات المستخدم." },
        { name: "Linux & Bash", description: "إدارة نظام Linux والبرمجة النصية بـ Bash وإدارة المستخدمين والأذونات لبيئات الخادم." }
      ] 
    },
    { 
      category: "الخلفية وقواعد البيانات", 
      items: [
        { name: "Node.js", description: "بيئة تشغيل مدفوعة بالأحداث لبناء خدمات خلفية وواجهات برمجية عالية الأداء." },
        { name: "Express.js", description: "إطار عمل Node.js مرن لبناء واجهات REST البرمجية وتطبيقات الويب." },
        { name: "RESTful APIs", description: "تصميم واستهلاك واجهات برمجية عديمة الحالة تتبع مبادئ معمارية REST." },
        { name: "PostgreSQL", description: "قاعدة بيانات علائقية متقدمة للاستعلامات المعقدة وسلامة البيانات التعاملية." },
        { name: "MongoDB", description: "قاعدة بيانات NoSQL موجهة للوثائق للتخزين المرن وعالي الإنتاجية." }
      ] 
    },
    { 
      category: "الواجهة الأمامية", 
      items: [
        { name: "React.js", description: "مكتبة واجهة مستخدم قائمة على المكونات لبناء تطبيقات صفحة واحدة سريعة وقابلة للتوسع." },
        { name: "HTML5 & CSS3", description: "ترميز دلالي وتنسيق حديث لواجهات سهلة الوصول ومتجاوبة وغنية بصرياً." },
        { name: "Responsive Design", description: "تصميم تخطيطات تتكيف بسلاسة مع جميع أحجام الشاشات وأنواع الأجهزة." }
      ] 
    },
    { 
      category: "اللغات", 
      items: [
        { name: "JavaScript (ES6+)", description: "جافاسكريبت الحديثة لبناء تطبيقات ويب ديناميكية وتفاعلية وعالية الأداء." },
        { name: "Python", description: "لغة متعددة الاستخدامات للتطوير الخلفي والبرمجة النصية والأتمتة ودمج الذكاء الاصطناعي." },
        { name: "SQL", description: "تصميم واستعلام قواعد البيانات العلائقية لإدارة البيانات المنظمة وإعداد التقارير." },
        { name: "C++", description: "لغة برمجة على مستوى الأنظمة تُستخدم في التطبيقات ذات الأداء الحرج والخوارزميات." }
      ] 
    }
  ],
  allSkills: ["JavaScript", "Python", "SQL", "React.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "Docker", "Kubernetes", "AWS", "Azure", "Terraform", "Ansible", "CI/CD", "Git"],
  radarData: [
    { subject: 'Full Stack Dev', A: 90, fullMark: 100 },
    { subject: 'DevOps & CI/CD', A: 88, fullMark: 100 },
    { subject: 'Cloud (AWS/Azure)', A: 85, fullMark: 100 },
    { subject: 'Containerization', A: 87, fullMark: 100 },
    { subject: 'Backend APIs', A: 92, fullMark: 100 },
    { subject: 'Security', A: 83, fullMark: 100 },
  ],
  projects: [
    {
      title: "مشروع التخرج: تطبيق ويب شامل بالذكاء الاصطناعي",
      description: "تصميم ونشر تطبيق ويب شامل بمكدس MERN (MongoDB, Express, React, Node.js) مدمج بميزات أتمتة مدعومة بالذكاء الاصطناعي. تم تنفيذ خطوط CI/CD مع Docker للاحتواء وإدارة النشر السحابي عبر AWS. تأمين التطبيق ببروتوكولات JWT والمصادقة المتقدمة.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800",
      tags: ["MERN Stack", "Docker", "AWS", "JWT"],
      link: "#",
      github: "https://github.com/faredmansour",
      caseStudy: {
        problem: "كان الفريق بحاجة إلى تطبيق ويب شامل قابل للتوسع يدمج التحليلات المدعومة بالذكاء الاصطناعي مع الوصول الآمن وسير عمل النشر المؤتمت.",
        solution: "بناء تطبيق MERN مع ميزات أتمتة الذكاء الاصطناعي، محتوى بـ Docker، ومنشور على AWS مع خط CI/CD كامل.",
        impact: "تسليم منصة جاهزة للإنتاج مع نشر بدون توقف وواجهات برمجية مؤمنة بـ JWT ورؤى بيانات مدعومة بالذكاء الاصطناعي للمستخدمين النهائيين."
      }
    },
    {
      title: "منصة مجتمع الطلاب الوطنية",
      description: "هندسة منصة ويب واسعة النطاق تربط طلاب المدارس المتوسطة والثانوية في جميع أنحاء مصر لتبادل المعرفة والتعاون في التعلم والمشاركة في التحديات التعليمية والثقافية. مبنية بواجهات RESTful APIs بـ Node.js وقاعدة بيانات SQL علائقية والتحكم في الوصول القائم على الأدوار.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
      tags: ["Node.js", "SQL", "REST API", "JWT"],
      link: "#",
      github: "https://github.com/faredmansour",
      caseStudy: {
        problem: "افتقر الطلاب المصريون إلى منصة موحدة للتعلم التعاوني والتحديات التعليمية وتبادل المعرفة عبر المحافظات المختلفة.",
        solution: "بناء واجهات RESTful APIs الخلفية بـ Node.js وSQL مع التحكم في الوصول القائم على الأدوار، ودعم وحدات النقاشات والتحديات والتطوع.",
        impact: "تسليم منصة قابلة للتوسع مصممة للتعامل مع مستخدمين على نطاق واسع عبر محافظات متعددة، مما يتيح التعاون التعليمي والثقافي على المستوى الوطني."
      }
    },
    {
      title: "أتمتة خطوط CI/CD",
      description: "تصميم وتنفيذ خط CI/CD كامل بـ Jenkins وGitLab CI لتطبيق متعدد الخدمات. دمج مراحل الاختبار التلقائي وبناء صور Docker ونشر Kubernetes لتحقيق إصدارات مؤتمتة بالكامل بدون توقف على AWS.",
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=800",
      tags: ["Jenkins", "GitLab CI", "Docker", "Kubernetes"],
      link: "#",
      github: "https://github.com/faredmansour",
      caseStudy: {
        problem: "كانت عمليات النشر اليدوية عرضة للأخطاء وبطيئة، مما تسبب في توقف متكرر وبيئات غير متسقة عبر التطوير والاختبار والإنتاج.",
        solution: "تنفيذ خط CI/CD كامل بـ Jenkins وGitLab CI، مما يؤتمت الاختبار والاحتواء بـ Docker والتنسيق عبر Kubernetes.",
        impact: "تقليل وقت النشر بنسبة 70% والقضاء على الأخطاء اليدوية، مما يحقق إصدارات متسقة بدون توقف عبر جميع البيئات."
      }
    },
    {
      title: "البنية التحتية السحابية بـ Terraform",
      description: "توفير وإدارة البنية التحتية السحابية لـ AWS القابلة للتوسع باستخدام Terraform كـ Infrastructure as Code. تكوين مجموعات التوسع التلقائي وموازنات التحميل وVPCs ومجموعات الأمان لبيئة إنتاج عالية الإتاحة. أتمتة إدارة التكوين بـ Ansible.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800",
      tags: ["Terraform", "AWS", "Ansible", "IaC"],
      link: "#",
      github: "https://github.com/faredmansour",
      caseStudy: {
        problem: "كانت موارد السحابة المُوفَّرة يدوياً غير متسقة وصعبة التكرار وتستغرق ساعات لإنشاء بيئات جديدة.",
        solution: "كتابة وحدات Terraform لجميع مكونات البنية التحتية لـ AWS وكتب Ansible للإدارة التلقائية لتكوين الخادم.",
        impact: "تقليل وقت توفير البيئة من ساعات إلى دقائق، مع بنية تحتية قابلة للتكرار بالكامل ومنظمة في إصدارات."
      }
    },
    {
      title: "خدمات مصغرة محتواة بـ Kubernetes",
      description: "احتواء مجموعة من الخدمات المصغرة الخلفية بـ Docker وتنسيقها على مجموعة Kubernetes. تطبيق مخططات Helm للنشر المقولب والتوسع التلقائي الأفقي للـ Pod ومراقبة Prometheus/Grafana للرصد الفوري.",
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=800",
      tags: ["Docker", "Kubernetes", "Helm", "Prometheus"],
      link: "#",
      github: "https://github.com/faredmansour",
      caseStudy: {
        problem: "كان تطبيق الخلفية المتجانس صعب التوسع والنشر، مما يتسبب في اختناقات أثناء ذروة حركة المرور.",
        solution: "تحليل التطبيق إلى خدمات مصغرة واحتواء كل منها بـ Docker وتنسيقها على Kubernetes مع مخططات Helm والتوسع التلقائي.",
        impact: "تحقيق وقت تشغيل 99.9% مع التوسع التلقائي أثناء أوقات الذروة ورصد كامل من خلال مجموعة مراقبة Prometheus/Grafana."
      }
    }
  ],
  education: [
    {
      period: "ديسمبر 2025 — الوقت الحالي",
      degree: "دبلومة تطوير البرمجيات (قائمة على الذكاء الاصطناعي)",
      institution: "مبادرة رواد مصر الرقمية (DIGILIANS) — وزارة الاتصالات وتكنولوجيا المعلومات",
      description: "برنامج تطوير برمجيات مكثف يركز على تطوير الويب الشامل المدمج بالذكاء الاصطناعي. تدريب عملي على بناء معمارات خلفية قابلة للتوسع بـ Node.js وExpress وتنفيذ خطوط CI/CD ونشر تطبيقات محتواة على AWS/Azure باستخدام Docker وKubernetes.",
      highlights: ["تطوير الويب الشامل", "خطوط CI/CD", "Docker & AWS", "مصادقة JWT", "منهجيات Agile", "دمج الذكاء الاصطناعي"]
    },
    {
      period: "2018 — 2023",
      degree: "بكالوريوس في الهندسة — الاتصالات والإلكترونيات",
      institution: "جامعة كفر الشيخ",
      description: "بكالوريوس في هندسة الاتصالات والإلكترونيات مع أساس متين في الشبكات وتصميم الأنظمة والمبادئ الإلكترونية — يوفر العمق التقني الذي يدعم خبرتي في بنية DevOps وشبكات السحابة.",
      highlights: ["الاتصالات", "الإلكترونيات", "الشبكات", "تصميم الأنظمة", "TCP/IP"]
    }
  ],
  certifications: [
    { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", icon: "Cloud" },
    { name: "شهادة مطور فول ستاك", issuer: "مبادرة رواد مصر الرقمية", icon: "Code" },
    { name: "TCP/IP، التوجيه والتبديل (مستوى CCNA)", issuer: "ITI", icon: "Cpu" }
  ],
  experience: [
    {
      period: "ديسمبر 2025 — الوقت الحالي",
      role: "مطور فول ستاك (دبلومة قائمة على الذكاء الاصطناعي)",
      company: "مبادرة رواد مصر الرقمية (DIGILIANS) — وزارة الاتصالات",
      description: "تطوير تطبيقات ويب شاملة تدمج نماذج الذكاء الاصطناعي لأتمتة سير العمل المعقد. بناء معمارات خلفية قابلة للتوسع بـ Node.js وExpress مع مصادقة آمنة بـ JWT. تنفيذ خطوط CI/CD واحتواء التطبيقات بـ Docker للنشر السحابي على AWS/Azure. تطبيق منهجيات Agile لتسليم حلول برمجية عالية الجودة.",
      technologies: ["Node.js", "React.js", "Docker", "AWS", "CI/CD", "JWT"]
    },
    {
      period: "2024 — الوقت الحالي",
      role: "متدرب مهندس DevOps",
      company: "معهد تكنولوجيا المعلومات (ITI)",
      description: "تدريب شامل على مبادئ DevOps ومنهجيات Agile/Lean وأتمتة CI/CD بـ Jenkins وGitLab CI. خبرة عملية في البنية التحتية كـكود بـ Terraform وAnsible واحتواء التطبيقات بـ Docker وتنسيق Kubernetes. إدارة نظام Linux والبرمجة النصية بـ Bash وإدارة المستخدمين والأذونات ومراقبة النظام في مشاريع متكاملة حقيقية.",
      technologies: ["Jenkins", "Terraform", "Ansible", "Docker", "Kubernetes", "Linux"]
    }
  ]
};


