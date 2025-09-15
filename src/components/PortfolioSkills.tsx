import { Badge } from "@/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/card";
import { 
  Server, 
  Database, 
  Cloud, 
  Shield, 
  Settings, 
  Code2,
  Award,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  Mail,
  MessageCircle
} from "lucide-react";
import { Button } from "@/ui/button";

const skillCategories = [
  {
    title: "Backend Technologies",
    icon: Server,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    skills: [
      { name: "Node.js", level: 95, expertise: "Expert" },
      { name: "Express.js", level: 90, expertise: "Expert" },
      { name: "Fastify", level: 85, expertise: "Advanced" },
      { name: "NestJS", level: 80, expertise: "Advanced" },
      { name: "GraphQL", level: 75, expertise: "Intermediate" },
      { name: "REST APIs", level: 95, expertise: "Expert" },
      { name: "WebSockets", level: 85, expertise: "Advanced" },
    ],
  },
  {
    title: "Databases & Storage",
    icon: Database,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    skills: [
      { name: "PostgreSQL", level: 90, expertise: "Expert" },
      { name: "MongoDB", level: 95, expertise: "Expert" },
      { name: "Redis", level: 85, expertise: "Advanced" },
      { name: "MySQL", level: 80, expertise: "Advanced" },
      { name: "Elasticsearch", level: 75, expertise: "Intermediate" },
      { name: "DynamoDB", level: 70, expertise: "Intermediate" },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    skills: [
      { name: "AWS", level: 85, expertise: "Advanced" },
      { name: "Docker", level: 90, expertise: "Expert" },
      { name: "Kubernetes", level: 75, expertise: "Intermediate" },
      { name: "CI/CD", level: 85, expertise: "Advanced" },
      { name: "Terraform", level: 70, expertise: "Intermediate" },
      { name: "Jenkins", level: 75, expertise: "Intermediate" },
      { name: "GitHub Actions", level: 90, expertise: "Expert" },
    ],
  },
  {
    title: "Security & Auth",
    icon: Shield,
    color: "from-red-500 to-orange-500",
    bgColor: "bg-red-50",
    skills: [
      { name: "JWT", level: 95, expertise: "Expert" },
      { name: "OAuth 2.0", level: 85, expertise: "Advanced" },
      { name: "Stripe", level: 90, expertise: "Expert" },
      { name: "Encryption", level: 80, expertise: "Advanced" },
      { name: "Rate Limiting", level: 90, expertise: "Expert" },
      { name: "CORS", level: 95, expertise: "Expert" },
      { name: "Helmet.js", level: 85, expertise: "Advanced" },
    ],
  },
  {
    title: "Tools & Testing",
    icon: Settings,
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-50",
    skills: [
      { name: "Jest", level: 90, expertise: "Expert" },
      { name: "Mocha", level: 80, expertise: "Advanced" },
      { name: "Postman", level: 95, expertise: "Expert" },
      { name: "Git", level: 95, expertise: "Expert" },
      { name: "Linux", level: 85, expertise: "Advanced" },
      { name: "Nginx", level: 80, expertise: "Advanced" },
      { name: "PM2", level: 85, expertise: "Advanced" },
      { name: "New Relic", level: 75, expertise: "Intermediate" },
    ],
  },
  {
    title: "Programming Languages",
    icon: Code2,
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-50",
    skills: [
      { name: "JavaScript", level: 95, expertise: "Expert" },
      { name: "TypeScript", level: 90, expertise: "Expert" },
      { name: "SQL", level: 85, expertise: "Advanced" },
    ],
  },
];

const achievements = [
  {
    icon: Award,
    number: "3+",
    title: "Years Experience",
    description: "Building enterprise-grade backend systems",
    color: "text-blue-600"
  },
  {
    icon: TrendingUp,
    number: "15+",
    title: "Projects Delivered",
    description: "Successfully launched applications",
    color: "text-green-600"
  },
  {
    icon: Users,
    number: "99%",
    title: "Client Satisfaction",
    description: "Proven track record of success",
    color: "text-purple-600"
  },
  {
    icon: CheckCircle,
    number: "99.9%",
    title: "Uptime Achievement",
    description: "Reliable and stable systems",
    color: "text-emerald-600"
  }
];

const PortfolioSkills = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-6 py-3 rounded-full text-sm font-medium mb-6">
            <Award className="w-4 h-4" />
            Technical Expertise & Skills
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Backend Development
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
              Arsenal
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive expertise in building scalable, secure, and high-performance 
            backend systems with modern technologies and industry best practices.
          </p>
        </div>

        {/* Skills Grid with Enhanced Design */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={category.title}
                className="group hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-slate-300 bg-white/80 backdrop-blur-sm hover:-translate-y-1"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} shadow-lg`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg font-bold text-slate-900 group-hover:text-slate-700 transition-colors">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                          <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                            skill.expertise === 'Expert' ? 'bg-green-100 text-green-700' :
                            skill.expertise === 'Advanced' ? 'bg-blue-100 text-blue-700' :
                            'bg-yellow-100 text-yellow-700'
                          }`}>
                            {skill.expertise}
                          </span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Achievement Stats */}
        <div className="bg-white/60 backdrop-blur-sm border border-slate-200 rounded-3xl p-8 shadow-xl mb-16">
          <h3 className="text-2xl font-bold text-center text-slate-900 mb-8">Professional Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-slate-50 rounded-2xl group-hover:bg-slate-100 transition-colors">
                      <IconComponent className={`w-8 h-8 ${achievement.color}`} />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">{achievement.number}</div>
                  <div className="text-lg font-semibold text-slate-700 mb-1">{achievement.title}</div>
                  <div className="text-sm text-slate-600">{achievement.description}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-center text-white shadow-2xl">
          <h3 className="text-2xl font-bold mb-4">Ready to Build Something Amazing?</h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your backend development needs and create scalable solutions 
            that drive your business forward.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-6 h-auto text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <Mail className="w-5 h-5 mr-2" />
              Start a Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-6 h-auto text-lg font-semibold transition-all duration-300"
              onClick={() => {
                window.open('https://wa.me/918955692248?text=Hi Fardeen, I would like to discuss a backend development project with you.', '_blank');
              }}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Quick Chat
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSkills;