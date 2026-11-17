const sharedSkills = {
  cloud: [
    { name: "AWS", description: "Hands-on work with ECS/Fargate, ECR, ALB, VPC, RDS, ElastiCache, S3, CloudFront, IAM and CloudWatch." },
    { name: "Terraform", description: "Infrastructure as Code for repeatable AWS networking, compute, load balancing, databases, caching and IAM." },
    { name: "Docker", description: "Multi-stage container builds, non-root runtime images, health checks and reproducible deployments." },
    { name: "Kubernetes", description: "Container orchestration knowledge from DevOps training and cloud-native project work." },
    { name: "CI/CD", description: "GitHub Actions and Jenkins workflows for build, test, image publishing and deployment automation." },
    { name: "Linux & Bash", description: "Linux administration, shell scripting, permissions, networking and operational troubleshooting." },
  ],
  backend: [
    { name: "Node.js", description: "Production-oriented REST APIs and backend services with Express." },
    { name: "Express.js", description: "API design, middleware, validation, authentication and service-layer architecture." },
    { name: "Python", description: "Backend automation and API work, including Django/DRF and FastAPI project experience." },
    { name: "MongoDB", description: "Document data modeling with Mongoose for full-stack applications." },
    { name: "PostgreSQL / SQL", description: "Relational data modeling, queries and backend integration." },
    { name: "Redis", description: "Caching and real-time infrastructure patterns for application workloads." },
  ],
  security: [
    { name: "IAM", description: "Least-privilege access patterns for AWS workloads and deployment automation." },
    { name: "JWT & Refresh Tokens", description: "Stateless authentication and authorization patterns for web APIs." },
    { name: "SSRF Protection", description: "Server-side target validation and host allowlisting patterns in DevOps Control Center." },
    { name: "Trivy", description: "Container, filesystem and IaC security scanning in GitHub Actions." },
    { name: "GitHub", description: "Repository management, pull requests, Actions, Dependabot and portfolio workflows." },
  ],
};

const projectsEN = [
  {
    title: "DevOps Control Center",
    description: "A stateless web control plane for observing, testing and diagnosing controlled backend targets. Built with React/TypeScript and Django/DRF, with a separate FastAPI Test App and AWS ECS/Fargate infrastructure managed by Terraform.",
    image: "/projects/project1.png",
    tags: ["DevOps", "AWS", "Terraform", "ECS", "Docker", "Security"],
    link: null,
    github: "https://github.com/faredmansour/devops-control-center",
    status: "Live repository",
    caseStudy: {
      problem: "Operational testing of backend services needs to be controlled, observable and protected against unsafe target access.",
      solution: "Built a server-mediated control plane with signed expiring continuation tokens, target allowlisting, SSRF defenses, bounded timeouts and response sizes, OpenAPI discovery and controlled execution flows.",
      impact: "Validated the architecture with automated tests, frontend type checking and live smoke tests against the deployed AWS environment."
    }
  },
  {
    title: "EduCommunity Egypt",
    description: "A full-stack educational community platform with separate student/teacher and admin React applications, Node/Express APIs, MongoDB, Redis, Socket.IO, JWT refresh tokens, Cloudinary uploads and AWS ECS/Fargate deployment patterns.",
    image: "/projects/project2.png",
    tags: ["Full Stack", "AWS", "ECS", "Terraform", "Redis", "Socket.IO", "Docker"],
    link: null,
    github: null,
    status: "Portfolio project — repository being prepared",
    caseStudy: {
      problem: "Students and teachers need a single platform for educational content, challenges, social interaction, attendance and real-time communication.",
      solution: "Designed a modular React/Node platform with role-based authorization, refresh-token authentication, real-time chat, Redis-backed infrastructure, Docker and AWS/Terraform deployment automation.",
      impact: "Prepared as a portfolio-grade cloud-native project with CI/CD, AWS infrastructure, security hardening and deployment documentation."
    }
  },
  {
    title: "E-Commerce Platform",
    description: "A full-stack commerce application using React/Vite, Node/Express, MongoDB, Redis and Docker Compose, with authentication, products, carts, orders, payments, coupons, reviews and admin workflows.",
    image: "/projects/project3.png",
    tags: ["Full Stack", "Node.js", "React", "MongoDB", "Redis", "Docker", "CI/CD"],
    link: null,
    github: "https://github.com/faredmansour/ecommerce-project",
    status: "Live repository",
    caseStudy: {
      problem: "A commerce platform needs reliable API workflows for catalog, authentication, carts, orders, payments and administration.",
      solution: "Implemented a React/Node architecture with MongoDB, Redis, JWT authentication, Stripe integration, validation, security middleware, Swagger/OpenAPI and automated tests.",
      impact: "Provides a practical full-stack showcase combining application engineering with containerized local development and CI/CD practices."
    }
  },
  {
    title: "AI-Based Full-Stack Capstone",
    description: "Full-stack software development capstone completed through the Digital Pioneers Initiative, combining React, Node/Express, MongoDB, AI-oriented automation, Docker and cloud deployment concepts.",
    image: "/projects/project4.png",
    tags: ["Full Stack", "AI", "Node.js", "React", "Docker", "AWS"],
    link: null,
    github: null,
    status: "Completed — training project",
    caseStudy: {
      problem: "The capstone required an end-to-end application that combined modern web development with AI-oriented automation.",
      solution: "Built a MERN-based application, added authentication and automation workflows, containerized the application and practiced cloud deployment patterns.",
      impact: "Completed the software-development track while strengthening backend, frontend, Docker and delivery skills."
    }
  },
  {
    title: "National Students Community Platform",
    description: "An educational community concept focused on connecting school students across Egypt for knowledge sharing, discussions, volunteering, reading initiatives and challenges.",
    image: "/assets/health-ai-mockup.png",
    tags: ["Full Stack", "Node.js", "SQL", "REST API", "JWT", "RBAC"],
    link: null,
    github: null,
    status: "Previous project — repository retired",
    caseStudy: {
      problem: "Students need a unified platform for collaborative learning, educational challenges and community activities.",
      solution: "Designed REST APIs, relational data models, authentication and role-based access control for educational and social modules.",
      impact: "Established a strong backend-focused project foundation for later full-stack and cloud-native work."
    }
  },
  {
    title: "Cloud-Native EKS Lab",
    description: "A planned portfolio project focused on Kubernetes on AWS EKS, Terraform, container delivery and observability. It is intentionally marked as in progress rather than presented as a completed production system.",
    image: "/cloud_infra.png",
    tags: ["Kubernetes", "EKS", "AWS", "Terraform", "Observability"],
    link: null,
    github: null,
    status: "Planned / in progress",
    caseStudy: {
      problem: "Demonstrate practical Kubernetes operations and cloud-native observability beyond ECS/Fargate deployments.",
      solution: "The planned scope includes EKS, Terraform, containerized workloads, ingress, autoscaling and observability components.",
      impact: "Will extend the portfolio from AWS container services into managed Kubernetes operations."
    }
  }
];

const servicesEN = [
  { title: "Cloud & Infrastructure", description: "AWS infrastructure design and Terraform-based provisioning for repeatable environments.", icon: "Cloud", features: ["AWS", "Terraform", "VPC / ECS", "IAM"] },
  { title: "CI/CD & Delivery", description: "Automated build, test, security scanning and deployment workflows using GitHub Actions and Jenkins.", icon: "Cpu", features: ["GitHub Actions", "Jenkins", "ECR", "Deployment automation"] },
  { title: "Full-Stack Engineering", description: "Modern React and Node.js applications with secure APIs, databases, authentication and real-time features.", icon: "Layers", features: ["React", "Node.js", "MongoDB", "Redis"] },
  { title: "Containerization", description: "Production-oriented Docker images and container deployment patterns for ECS/Fargate and future Kubernetes workloads.", icon: "Database", features: ["Docker", "Compose", "ECS/Fargate", "Kubernetes"] },
  { title: "Security & Reliability", description: "Practical security controls across IAM, authentication, SSRF protection, dependency scanning and bounded service execution.", icon: "Eye", features: ["IAM", "JWT", "Trivy", "SSRF defenses"] },
  { title: "Observability", description: "CloudWatch and application-level health checks, metrics and smoke tests to verify deployed systems.", icon: "BarChart3", features: ["CloudWatch", "Health checks", "Smoke tests", "Container Insights"] },
];

const skillsEN = [
  { category: "Cloud & DevOps", items: sharedSkills.cloud },
  { category: "Backend & Databases", items: sharedSkills.backend },
  { category: "Security & Engineering Tools", items: sharedSkills.security },
  { category: "Frontend", items: [
    { name: "React", description: "Component-driven frontend development with Vite, responsive UI and interactive experiences." },
    { name: "Vite", description: "Fast development and production builds for modern React applications." },
    { name: "JavaScript / TypeScript", description: "Modern JavaScript and TypeScript for frontend and backend engineering." },
    { name: "HTML / CSS / Tailwind", description: "Responsive interfaces, design systems and accessible component styling." },
  ] },
];

const skillsAR = [
  { category: "السحابة و DevOps", items: [
    { name: "AWS", description: "خبرة عملية مع ECS/Fargate وECR وALB وVPC وRDS وElastiCache وS3 وCloudFront وIAM وCloudWatch." },
    { name: "Terraform", description: "إدارة البنية التحتية ككود لبناء بيئات AWS قابلة للتكرار." },
    { name: "Docker", description: "بناء صور متعددة المراحل وتشغيلها بحساب غير root مع Health Checks." },
    { name: "Kubernetes", description: "معرفة عملية من تدريب DevOps ومشروعات Cloud-Native." },
    { name: "CI/CD", description: "أتمتة البناء والاختبار وفحص الأمان والنشر باستخدام GitHub Actions وJenkins." },
    { name: "Linux & Bash", description: "إدارة Linux والـ Bash والصلاحيات والشبكات واستكشاف المشكلات التشغيلية." },
  ] },
  { category: "Backend & Databases", items: [
    { name: "Node.js", description: "بناء REST APIs وخدمات Backend باستخدام Express." },
    { name: "Python", description: "تطوير Backend وأتمتة باستخدام Django/DRF وFastAPI ضمن مشروعات سابقة." },
    { name: "MongoDB", description: "نمذجة البيانات باستخدام Mongoose لتطبيقات Full-Stack." },
    { name: "PostgreSQL / SQL", description: "تصميم البيانات العلائقية والاستعلامات وربطها بالـ Backend." },
    { name: "Redis", description: "أنماط التخزين المؤقت والبنية التحتية للتطبيقات والـ Real-Time." },
  ] },
  { category: "Security & Tools", items: [
    { name: "IAM", description: "تطبيق مبادئ أقل صلاحية ممكنة لخدمات AWS." },
    { name: "JWT & Refresh Tokens", description: "مصادقة وتفويض عديمة الحالة لتطبيقات الويب." },
    { name: "SSRF Protection", description: "حماية من طلبات الخوادم غير الآمنة في DevOps Control Center." },
    { name: "Trivy", description: "فحص أمان الملفات والـ IaC والحاويات داخل GitHub Actions." },
    { name: "Git & GitHub", description: "إدارة الأكواد والـ Pull Requests وGitHub Actions وDependabot." },
  ] },
  { category: "Frontend", items: [
    { name: "React", description: "تطوير واجهات تفاعلية ومكونات قابلة لإعادة الاستخدام." },
    { name: "Vite", description: "بناء وتشغيل تطبيقات React الحديثة بسرعة." },
    { name: "JavaScript / TypeScript", description: "JavaScript حديث وTypeScript لتطوير الواجهة والخادم." },
    { name: "Tailwind CSS", description: "واجهات Responsive وتصميمات مكونات حديثة." },
  ] },
];

const educationEN = [
  { period: "Dec 2025 — Present", degree: "Software Development Diploma (AI-Based)", institution: "Digital Pioneers Initiative (DIGILIANS) — Ministry of Communications & IT", description: "Intensive software development training covering full-stack engineering, AI-oriented application work, Node.js/Express, CI/CD, Docker, cloud deployment concepts and Agile practices.", highlights: ["Full Stack", "Node.js", "AI Integration", "CI/CD", "Docker", "AWS"] },
  { period: "2018 — 2023", degree: "Bachelor’s in Telecommunications and Electronics Engineering", institution: "Kafr el-Sheikh University", description: "Bachelor’s degree in telecommunications and electronics engineering, with a foundation in networking and systems design.", highlights: ["Telecommunications", "Electronics", "Networking", "Systems Design"] },
];

const experienceEN = [
  { period: "2026 — Present", role: "Full Stack & DevOps Engineer", company: "Seitech Solution", description: "Working across full-stack engineering and DevOps workflows, with hands-on AWS, Docker, CI/CD, infrastructure automation and production-oriented application delivery. Portfolio work includes the DevOps Control Center and cloud-native application platforms.", technologies: ["AWS", "Docker", "Terraform", "CI/CD", "Node.js", "React"] },
  { period: "Dec 2025 — Present", role: "Software Development Diploma (AI-Based)", company: "Digital Pioneers Initiative (DIGILIANS) — Ministry of Communications & IT", description: "Developing full-stack applications, backend services and AI-oriented workflows while practicing Docker, CI/CD, authentication and cloud deployment patterns.", technologies: ["Node.js", "React", "Docker", "AWS", "CI/CD", "JWT"] },
  { period: "2024 — Present", role: "DevOps Engineer Trainee", company: "Information Technology Institute (ITI)", description: "DevOps training covering Jenkins, GitLab CI, Terraform, Ansible, Docker, Kubernetes, Linux administration, Bash scripting, networking and monitoring through integrated projects.", technologies: ["Jenkins", "Terraform", "Ansible", "Docker", "Kubernetes", "Linux"] },
];

const basePersonalEN = {
  name: "Fared Mansour",
  title: "DevOps & Full Stack Engineer",
  email: "faredmansour6@gmail.com",
  linkedin: "https://linkedin.com/in/fared-mansour-718324225",
  github: "https://github.com/faredmansour",
  avatar: "/Professional%20Suited%20Headshot%20Cutout.png",
  phone: "01098798893",
  whatsapp: "https://wa.me/201098798893",
  resume: "/fared-cv.pdf",
  perspectives: {
    official: "DevOps & Full Stack Engineer focused on AWS, Terraform, Docker, CI/CD and reliable backend systems. I build practical cloud-native applications and delivery workflows, with a strong emphasis on security, automation and operational verification.",
    tech: "Core stack: AWS, Terraform, Docker, ECS/Fargate, ECR, ALB, VPC, RDS, Redis, CloudWatch, GitHub Actions, Node.js, React, Python and SQL/NoSQL databases. I prefer infrastructure as code, immutable deployments, least-privilege access and measurable health checks.",
    story: "My path combines telecommunications engineering, full-stack development and DevOps. I moved from building applications toward understanding the full delivery lifecycle: how software is tested, containerized, deployed, secured and observed in real environments."
  },
  services: servicesEN,
};

const sectionDescriptionsEN = {
  skills: "A practical engineering toolkit built around AWS, Terraform, Docker, CI/CD, backend APIs, databases and security. The goal is not to list every tool, but to show the technologies used across real project work and training.",
  projects: "Selected projects that demonstrate cloud infrastructure, DevOps automation, backend engineering and full-stack delivery. Completed, previous and in-progress work are clearly labeled.",
  education: "Engineering education combined with focused software-development and DevOps training.",
  certifications: "Credentials and training are listed conservatively. Certification claims are not marked as verified unless a certificate link is available.",
  services: "The engineering capabilities I can contribute to: cloud infrastructure, delivery automation, full-stack applications, containers, security and observability."
};

const certificationsEN = [
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", icon: "Cloud", status: "View certificate", link: "/certificates/aws-cloud-practitioner.pdf" },
  { name: "AWS Certified Developer – Associate", issuer: "Amazon Web Services", icon: "Cloud", status: "View certificate", link: "/certificates/aws-developer-associate.pdf" },
  { name: "Build Automation and Continuous Integration", issuer: "Packt via Coursera", icon: "Code", status: "View certificate", link: "/certificates/coursera-4AWJA9R7QDO7.pdf" },
  { name: "Advanced DevOps Tools and Practices", issuer: "Packt via Coursera", icon: "Code", status: "View certificate", link: "/certificates/coursera-KBLJEQPBCH67.pdf" },
  { name: "Advanced Git and GitHub Practices", issuer: "Packt via Coursera", icon: "Code", status: "View certificate", link: "/certificates/coursera-N8YD04TT9SNV.pdf" },
  { name: "Front-End Developer Capstone", issuer: "Meta via Coursera", icon: "Code", status: "View certificate", link: "/certificates/coursera-P44I1K81MF1M.pdf" },
  { name: "Meta Front-End Developer Professional Certificate", issuer: "Meta via Coursera", icon: "Code", status: "View certificate", link: "/certificates/coursera-TITJRJ3PLM9F.pdf" },
  { name: "Foundations of DevOps and Git", issuer: "Packt via Coursera", icon: "Code", status: "View certificate", link: "/certificates/coursera-XCOEV1PDO0AZ.pdf" },
  { name: "Full Stack Developer Certification", issuer: "Digital Pioneers Initiative", icon: "Code", status: "Training credential", link: null },
  { name: "TCP/IP, Routing & Switching (CCNA level)", issuer: "ITI", icon: "Cpu", status: "Training / coursework", link: null },
];

export const portfolioDataEN = {
  sectionDescriptions: sectionDescriptionsEN,
  personal: basePersonalEN,
  skills: skillsEN,
  allSkills: ["AWS", "Terraform", "Docker", "ECS/Fargate", "ECR", "ALB", "VPC", "CloudWatch", "GitHub Actions", "Jenkins", "Kubernetes", "Node.js", "React", "Python", "MongoDB", "PostgreSQL", "Redis", "JWT", "Trivy", "Linux"],
  radarData: [
    { subject: "Backend", A: 88, fullMark: 100 },
    { subject: "AWS / Cloud", A: 86, fullMark: 100 },
    { subject: "DevOps / CI", A: 84, fullMark: 100 },
    { subject: "Containers", A: 86, fullMark: 100 },
    { subject: "Full Stack", A: 84, fullMark: 100 },
    { subject: "Security", A: 78, fullMark: 100 },
  ],
  projects: projectsEN,
  education: educationEN,
  certifications: certificationsEN,
  experience: experienceEN,
};

const projectsAR = projectsEN.map((p) => ({
  ...p,
  title: ({
    "DevOps Control Center": "مركز تحكم DevOps",
    "EduCommunity Egypt": "منصة EduCommunity التعليمية",
    "E-Commerce Platform": "منصة التجارة الإلكترونية",
    "AI-Based Full-Stack Capstone": "مشروع التخرج Full-Stack بالذكاء الاصطناعي",
    "National Students Community Platform": "منصة مجتمع الطلاب الوطنية",
    "Cloud-Native EKS Lab": "مختبر EKS السحابي",
  })[p.title] || p.title,
  status: ({
    "Live repository": "مستودع متاح",
    "Portfolio project — repository being prepared": "مشروع Portfolio — المستودع قيد التجهيز",
    "Completed — training project": "مكتمل — مشروع تدريبي",
    "Previous project — repository retired": "مشروع سابق — تم إيقاف المستودع",
    "Planned / in progress": "مخطط / قيد التنفيذ",
  })[p.status] || p.status,
}));

const servicesAR = [
  { title: "السحابة والبنية التحتية", description: "تصميم بنية AWS وتوفير الموارد باستخدام Terraform لبناء بيئات قابلة للتكرار.", icon: "Cloud", features: ["AWS", "Terraform", "VPC / ECS", "IAM"] },
  { title: "CI/CD وتسليم البرمجيات", description: "أتمتة البناء والاختبار وفحص الأمان والنشر باستخدام GitHub Actions وJenkins.", icon: "Cpu", features: ["GitHub Actions", "Jenkins", "ECR", "أتمتة النشر"] },
  { title: "هندسة Full-Stack", description: "بناء تطبيقات React وNode.js مع APIs وقواعد بيانات ومصادقة وميزات Real-Time.", icon: "Layers", features: ["React", "Node.js", "MongoDB", "Redis"] },
  { title: "الحاويات", description: "بناء صور Docker وأنماط تشغيل مناسبة لـ ECS/Fargate مع التوسع لاحقاً إلى Kubernetes.", icon: "Database", features: ["Docker", "Compose", "ECS/Fargate", "Kubernetes"] },
  { title: "الأمان والاعتمادية", description: "تطبيق ضوابط عملية تشمل IAM والمصادقة وحماية SSRF وفحص التبعيات والتنفيذ المقيد.", icon: "Eye", features: ["IAM", "JWT", "Trivy", "SSRF"] },
  { title: "المراقبة والتحقق التشغيلي", description: "استخدام CloudWatch وHealth Checks وSmoke Tests للتحقق من الأنظمة المنشورة.", icon: "BarChart3", features: ["CloudWatch", "Health Checks", "Smoke Tests", "Container Insights"] },
];

const educationAR = [
  { period: "ديسمبر 2025 — حتى الآن", degree: "دبلومة تطوير البرمجيات — مسار الذكاء الاصطناعي", institution: "مبادرة رواد مصر الرقمية (DIGILIANS) — وزارة الاتصالات وتكنولوجيا المعلومات", description: "تدريب مكثف في Full-Stack وBackend وAI-oriented development وCI/CD وDocker ومفاهيم النشر السحابي وAgile.", highlights: ["Full Stack", "Node.js", "AI", "CI/CD", "Docker", "AWS"] },
  { period: "2018 — 2023", degree: "بكالوريوس هندسة الاتصالات والإلكترونيات", institution: "جامعة كفر الشيخ", description: "درجة البكالوريوس في هندسة الاتصالات والإلكترونيات، مع أساس في الشبكات وتصميم الأنظمة.", highlights: ["اتصالات", "إلكترونيات", "شبكات", "تصميم الأنظمة"] },
];

const experienceAR = [
  { period: "2026 — حتى الآن", role: "مهندس Full Stack وDevOps", company: "Seitech Solution", description: "العمل على هندسة التطبيقات وعمليات DevOps مع AWS وDocker وCI/CD وأتمتة البنية التحتية وتسليم التطبيقات بشكل عملي. تشمل أعمال الـPortfolio مركز تحكم DevOps ومنصات Cloud-Native.", technologies: ["AWS", "Docker", "Terraform", "CI/CD", "Node.js", "React"] },
  { period: "ديسمبر 2025 — حتى الآن", role: "دبلومة تطوير البرمجيات — مسار الذكاء الاصطناعي", company: "مبادرة رواد مصر الرقمية (DIGILIANS)", description: "تطوير تطبيقات Full-Stack وخدمات Backend وتدفقات عمل مرتبطة بالذكاء الاصطناعي مع Docker وCI/CD والمصادقة ومفاهيم النشر السحابي.", technologies: ["Node.js", "React", "Docker", "AWS", "CI/CD", "JWT"] },
  { period: "2024 — حتى الآن", role: "متدرب DevOps Engineer", company: "معهد تكنولوجيا المعلومات (ITI)", description: "تدريب في Jenkins وGitLab CI وTerraform وAnsible وDocker وKubernetes وLinux وBash والشبكات والمراقبة من خلال مشروعات متكاملة.", technologies: ["Jenkins", "Terraform", "Ansible", "Docker", "Kubernetes", "Linux"] },
];

export const portfolioDataAR = {
  sectionDescriptions: {
    skills: "مجموعة أدوات عملية تركز على AWS وTerraform وDocker وCI/CD وتطوير الـBackend وقواعد البيانات والأمان.",
    projects: "مشروعات مختارة توضح خبرتي في Cloud وDevOps والـBackend والـFull-Stack، مع توضيح حالة كل مشروع بدقة.",
    education: "خلفية هندسية مع تدريب متخصص في تطوير البرمجيات وDevOps.",
    certifications: "نعرض الاعتمادات والتدريب بشكل محافظ، ولا نستخدم كلمة موثق إلا عند وجود رابط شهادة واضح.",
    services: "القدرات التي أستطيع المساهمة بها: البنية السحابية، أتمتة النشر، تطبيقات Full-Stack، الحاويات، الأمان والمراقبة."
  },
  personal: {
    ...basePersonalEN,
    name: "فريد منصور",
    title: "مهندس DevOps وFull Stack",
    perspectives: {
      official: "مهندس DevOps وFull Stack أركز على AWS وTerraform وDocker وCI/CD وبناء خدمات Backend موثوقة. أعمل على تطبيقات Cloud-Native ومسارات تسليم عملية مع اهتمام قوي بالأمان والأتمتة والتحقق التشغيلي.",
      tech: "المجموعة الأساسية: AWS وTerraform وDocker وECS/Fargate وECR وALB وVPC وRDS وRedis وCloudWatch وGitHub Actions وNode.js وReact وPython وقواعد SQL/NoSQL.",
      story: "رحلتي تجمع بين هندسة الاتصالات وتطوير Full-Stack وDevOps. انتقلت من بناء التطبيقات إلى فهم دورة التسليم كاملة: الاختبار والـContainerization والنشر والأمان والمراقبة في البيئات الحقيقية."
    },
    services: servicesAR
  },
  skills: skillsAR,
  allSkills: ["AWS", "Terraform", "Docker", "ECS/Fargate", "ECR", "ALB", "VPC", "CloudWatch", "GitHub Actions", "Jenkins", "Kubernetes", "Node.js", "React", "Python", "MongoDB", "PostgreSQL", "Redis", "JWT", "Trivy", "Linux"],
  radarData: [
    { subject: "Backend", A: 88, fullMark: 100 },
    { subject: "AWS / Cloud", A: 86, fullMark: 100 },
    { subject: "DevOps / CI", A: 84, fullMark: 100 },
    { subject: "Containers", A: 86, fullMark: 100 },
    { subject: "Full Stack", A: 84, fullMark: 100 },
    { subject: "Security", A: 78, fullMark: 100 },
  ],
  projects: projectsAR,
  education: educationAR,
  certifications: certificationsEN,
  experience: experienceAR,
};
