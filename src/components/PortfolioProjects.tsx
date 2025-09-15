import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import { Button } from "@/ui/button";
import { Badge } from "@/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/ui/dialog";
import { ExternalLink, Github, Star, Calendar, X, Code, Zap, Target } from "lucide-react";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  tags: string[];
  repoUrl: string;
  demoUrl: string;
  featured: boolean;
  year: string;
  detailedDescription: string;
  features: string[];
  technologies: string[];
  challenges: string;
  results: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Microservices Architecture",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop&auto=format",
    description:
      "Scalable microservices backend architecture with distributed services, API gateways, and service mesh implementation.",
    problem:
      "Monolithic systems limiting scalability and deployment flexibility",
    solution:
      "Designed microservices architecture with Docker containerization",
    impact: "Improved scalability, faster deployments, better fault isolation",
    tags: ["Node.js", "Docker", "Microservices", "API Gateway", "Service Mesh"],
    repoUrl: "https://github.com/fardeenjoad/Microservices",
    demoUrl: "https://microservices-demo.netlify.app",
    featured: true,
    year: "2024",
    detailedDescription: "This comprehensive microservices architecture was designed to address the scalability challenges of monolithic systems. The project implements a full-stack solution with service discovery, load balancing, and distributed logging.",
    features: [
      "Service mesh implementation with Istio",
      "API Gateway with rate limiting and authentication",
      "Docker containerization for all services",
      "Kubernetes orchestration",
      "Distributed tracing and monitoring",
      "Circuit breaker pattern implementation"
    ],
    technologies: ["Node.js", "Express", "Docker", "Kubernetes", "Istio", "Redis", "PostgreSQL", "MongoDB"],
    challenges: "The main challenge was implementing proper service communication and handling distributed transactions. This was solved by implementing the Saga pattern and using message queues for asynchronous communication.",
    results: "Successfully reduced deployment time by 70%, improved system reliability by 95%, and enabled independent scaling of individual services."
  },
  {
    id: 2,
    title: "Housing Yard Platform",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop&auto=format",
    description:
      "Real estate platform with property listings, user management, and search functionality. Built with modern web technologies.",
    problem: "Need for efficient property management and search system",
    solution: "Built comprehensive real estate platform with advanced search",
    impact: "Streamlined property management with intuitive user interface",
    tags: ["JavaScript", "Node.js", "Express", "MongoDB", "Real Estate"],
    repoUrl: "https://github.com/fardeenjoad/Housing-Yard",
    demoUrl: "https://housing-yard-demo.netlify.app",
    featured: false,
    year: "2024",
    detailedDescription: "A full-featured real estate platform that connects property owners with potential buyers and renters. Features advanced search capabilities, virtual tours, and integrated payment processing.",
    features: [
      "Advanced property search with filters",
      "User authentication and role-based access",
      "Property image gallery and virtual tours",
      "Integrated messaging system",
      "Payment gateway integration",
      "Admin dashboard for property management"
    ],
    technologies: ["JavaScript", "Node.js", "Express", "MongoDB", "Stripe", "Cloudinary", "JWT"],
    challenges: "Implementing real-time messaging between users and optimizing search performance for large datasets. Solved using WebSockets for real-time communication and Elasticsearch for advanced search capabilities.",
    results: "Platform handles 10,000+ property listings with sub-second search response times and 95% user satisfaction rate."
  },
  {
    id: 3,
    title: "Real-Time Location Tracker",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=400&h=250&fit=crop&auto=format",
    description:
      "Real-time location tracking application with live updates, geolocation services, and interactive mapping features.",
    problem: "Need for accurate real-time location sharing and tracking",
    solution:
      "Implemented WebSocket-based real-time tracking with geolocation APIs",
    impact: "Precise location tracking with sub-second update latency",
    tags: ["JavaScript", "WebSocket", "Geolocation", "Real-time", "Maps API"],
    repoUrl: "https://github.com/fardeenjoad/Real-Time-Tracker",
    demoUrl: "https://location-tracker-demo.netlify.app",
    featured: true,
    year: "2023",
    detailedDescription: "A sophisticated real-time location tracking system that enables live sharing of GPS coordinates with minimal latency. Built for logistics and delivery companies requiring precise location monitoring.",
    features: [
      "Real-time GPS tracking with WebSockets",
      "Interactive maps with route visualization",
      "Geofencing capabilities",
      "Location history and analytics",
      "Multi-user tracking dashboard",
      "Mobile-responsive design"
    ],
    technologies: ["JavaScript", "Node.js", "Socket.io", "Google Maps API", "MongoDB", "Express"],
    challenges: "Achieving sub-second location updates while maintaining battery efficiency on mobile devices. Implemented intelligent update frequency based on movement patterns and battery status.",
    results: "Reduced location update latency to under 500ms with 40% improvement in battery life compared to competitors."
  },
  {
    id: 4,
    title: "RESTful API Service",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&auto=format",
    description:
      "Production-ready REST API with authentication, rate limiting, and comprehensive documentation. Built for scalability.",
    problem: "Need for robust, scalable API with proper security measures",
    solution: "Developed RESTful API with JWT authentication and rate limiting",
    impact: "Secure, scalable API serving thousands of requests per minute",
    tags: ["JavaScript", "REST API", "JWT", "Rate Limiting", "Documentation"],
    repoUrl: "https://github.com/fardeenjoad/Rest-API",
    demoUrl: "https://api-docs.fardeenjoad.dev",
    featured: false,
    year: "2023",
    detailedDescription: "A production-grade RESTful API service designed for high-performance applications. Features comprehensive authentication, authorization, rate limiting, and extensive API documentation. Built to handle enterprise-level traffic with robust error handling.",
    features: [
      "JWT-based authentication and authorization",
      "Advanced rate limiting with Redis",
      "Comprehensive API documentation with Swagger",
      "Input validation and sanitization",
      "Error handling and logging middleware",
      "Database connection pooling and optimization"
    ],
    technologies: ["Node.js", "Express", "JWT", "Redis", "PostgreSQL", "Swagger", "Jest", "Docker"],
    challenges: "Implementing proper rate limiting for different user tiers while maintaining performance. Solved by creating a multi-tier rate limiting system using Redis with sliding window counters.",
    results: "API successfully handles 10,000+ requests per minute with 99.9% uptime and average response time under 100ms."
  },
  {
    id: 5,
    title: "MERN Authentication System",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop&auto=format",
    description:
      "Complete authentication system with user registration, login, password reset, and role-based access control.",
    problem: "Complex user management and authentication requirements",
    solution: "Built comprehensive auth system with MERN stack and JWT",
    impact: "Secure user management with role-based permissions",
    tags: ["MongoDB", "Express", "React", "Node.js", "JWT", "RBAC"],
    repoUrl: "https://github.com/fardeenjoad/Mern-Auth",
    demoUrl: "https://mern-auth-demo.netlify.app",
    featured: true,
    year: "2023",
    detailedDescription: "A complete authentication and authorization system built with the MERN stack. Features user registration, login, password recovery, email verification, and sophisticated role-based access control for enterprise applications.",
    features: [
      "User registration with email verification",
      "Secure login with JWT tokens",
      "Password reset via email",
      "Role-based access control (RBAC)",
      "Two-factor authentication (2FA)",
      "Session management and refresh tokens"
    ],
    technologies: ["MongoDB", "Express", "React", "Node.js", "JWT", "Nodemailer", "bcrypt", "Joi"],
    challenges: "Implementing secure session management with refresh token rotation while maintaining user experience. Solved by creating a seamless token refresh mechanism that works transparently in the background.",
    results: "Authentication system used by 5+ production applications with zero security incidents and 99.8% user satisfaction rate."
  },
  {
    id: 6,
    title: "Markdown Blog Engine",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop&auto=format",
    description:
      "Dynamic blog platform supporting Markdown content, syntax highlighting, and SEO optimization features.",
    problem: "Need for developer-friendly content management system",
    solution: "Created Markdown-based blog with syntax highlighting and SEO",
    impact: "Enhanced content creation experience for technical writers",
    tags: ["JavaScript", "Markdown", "Blog", "SEO", "Syntax Highlighting"],
    repoUrl: "https://github.com/fardeenjoad/Markdown-Blog",
    demoUrl: "https://markdown-blog-demo.netlify.app",
    featured: false,
    year: "2023",
    detailedDescription: "A modern blog platform specifically designed for developers and technical writers. Features native Markdown support, syntax highlighting for code blocks, SEO optimization, and a clean, fast interface optimized for readability.",
    features: [
      "Native Markdown editor with live preview",
      "Syntax highlighting for 50+ programming languages",
      "SEO optimization with meta tags and sitemap",
      "Responsive design for all devices",
      "Comment system with moderation",
      "Tag-based categorization and search"
    ],
    technologies: ["JavaScript", "Node.js", "Express", "MongoDB", "Marked.js", "Prism.js", "EJS"],
    challenges: "Optimizing page load speeds while maintaining rich content features and syntax highlighting. Implemented code splitting and lazy loading to achieve under 2-second load times.",
    results: "Blog platform achieves 95+ Google PageSpeed score and supports 1000+ concurrent readers with excellent performance."
  }
];

const PortfolioProjects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleDemoClick = (e: React.MouseEvent, demoUrl: string, title: string) => {
    e.stopPropagation();
    if (demoUrl === "#") {
      alert(`${title} demo is coming soon! Check the GitHub repo for now.`);
      return;
    }
    window.open(demoUrl, "_blank");
  };

  const handleRepoClick = (e: React.MouseEvent, repoUrl: string) => {
    e.stopPropagation();
    window.open(repoUrl, "_blank");
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50/30"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            Featured Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world backend solutions that have driven measurable business
            impact and technical excellence. Click on any project to view detailed information.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className={`group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 h-full flex flex-col cursor-pointer ${
                project.featured ? 'ring-2 ring-blue-200' : ''
              }`}
              onClick={() => handleProjectClick(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {project.featured && (
                  <div className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Featured
                  </div>
                )}
                
                <div className="absolute bottom-3 left-3 flex items-center gap-1 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Calendar className="w-3 h-3" />
                  {project.year}
                </div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                    <span className="text-gray-700 text-sm font-medium">Click for details</span>
                  </div>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4 flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className="text-xs px-2 py-1 bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs px-2 py-1">
                      +{project.tags.length - 3} more
                    </Badge>
                  )}
                </div>

                <div className="flex gap-3 pt-4 mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 hover:bg-gray-50 transition-colors"
                    onClick={(e) => handleRepoClick(e, project.repoUrl)}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 transition-colors"
                    onClick={(e) => handleDemoClick(e, project.demoUrl, project.title)}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-3"
            onClick={() => window.open("https://github.com/fardeenjoad", "_blank")}
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-center justify-between">
                  <DialogTitle className="text-2xl font-bold text-gray-900">
                    {selectedProject.title}
                  </DialogTitle>
                  <div className="flex items-center gap-2">
                    {selectedProject.featured && (
                      <Badge className="bg-yellow-100 text-yellow-800">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                    <Badge variant="outline">{selectedProject.year}</Badge>
                  </div>
                </div>
              </DialogHeader>

              <div className="space-y-6">
                {/* Project Image */}
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover"
                  />
                </div>

                {/* Detailed Description */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">About This Project</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedProject.detailedDescription}
                  </p>
                </div>

                {/* Problem, Solution, Impact */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-red-50 border-l-4 border-red-200 p-4 rounded-r">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4 text-red-600" />
                      <span className="font-semibold text-red-700">Problem</span>
                    </div>
                    <p className="text-red-600 text-sm">{selectedProject.problem}</p>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-200 p-4 rounded-r">
                    <div className="flex items-center gap-2 mb-2">
                      <Code className="w-4 h-4 text-blue-600" />
                      <span className="font-semibold text-blue-700">Solution</span>
                    </div>
                    <p className="text-blue-600 text-sm">{selectedProject.solution}</p>
                  </div>
                  <div className="bg-green-50 border-l-4 border-green-200 p-4 rounded-r">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-4 h-4 text-green-600" />
                      <span className="font-semibold text-green-700">Impact</span>
                    </div>
                    <p className="text-green-600 text-sm">{selectedProject.impact}</p>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="px-3 py-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Challenges & Results */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Challenges & Solutions</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {selectedProject.challenges}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Results</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {selectedProject.results}
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4 border-t">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => window.open(selectedProject.repoUrl, "_blank")}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Source Code
                  </Button>
                  <Button
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                    onClick={() => {
                      if (selectedProject.demoUrl === "#") {
                        alert(`${selectedProject.title} demo is coming soon!`);
                        return;
                      }
                      window.open(selectedProject.demoUrl, "_blank");
                    }}
                  >
                    <ExternalLink className="w-4 w-4 mr-2" />
                    View Live Demo
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PortfolioProjects;