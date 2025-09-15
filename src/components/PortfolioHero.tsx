import { Button } from "@/ui/button";
import { Badge } from "@/ui/badge";
import { ExternalLink, Mail, MapPin, Github, Linkedin, Award, Zap } from "lucide-react";

const PortfolioHero = () => {
  const badges = ["Node.js", "MongoDB", "PostgreSQL", "Docker", "AWS"];
  
  const achievements = [
    { number: "15+", label: "Projects Delivered", icon: Award },
    { number: "3+", label: "Years Experience", icon: Zap },
    { number: "99%", label: "Client Satisfaction", icon: Award },
    { number: "24/7", label: "Support Available", icon: Zap }
  ];

  return (
    <section className="min-h-screen flex items-center py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
      
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-6">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Available for new projects
              </div>

              {/* Main Heading */}
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-4">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Fardeen Joad
                  </span>
                </h1>
                <div className="text-2xl sm:text-3xl text-slate-700 font-semibold mb-4">
                  Senior Backend Developer
                </div>
                <div className="flex items-center gap-2 text-slate-600 mb-6">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span>Remote • Available Worldwide</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                I specialize in building <span className="font-semibold text-slate-800">scalable, secure backend systems</span> and 
                high-performance APIs that power modern applications and drive business growth.
              </p>

              {/* Technology Badges */}
              <div className="flex flex-wrap gap-3">
                {badges.map((badge) => (
                  <Badge
                    key={badge}
                    variant="secondary"
                    className="text-sm font-medium px-4 py-2 bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition-colors"
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="text-lg px-8 py-6 h-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View My Portfolio
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 h-auto border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-all duration-300"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Let's Connect
                <Mail className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-sm text-slate-600">Follow me:</span>
              <div className="flex gap-3">
                <a
                  href="https://github.com/fardeenjoad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/fardeenjoad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:contact@fardeenjoad.dev"
                  className="p-2 text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right content - Enhanced Professional Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Professional Card */}
              <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-8 max-w-md backdrop-blur-sm">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="text-center border-b border-slate-100 pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-white">FJ</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Fardeen Joad</h3>
                    <p className="text-slate-600">Senior Backend Developer</p>
                  </div>

                  {/* Code Snippet */}
                  <div className="bg-slate-900 rounded-lg p-4 text-left">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="ml-2 text-slate-400 text-xs">portfolio.js</span>
                    </div>
                    <div className="font-mono text-sm space-y-1">
                      <div className="text-blue-400">const developer = &#123;</div>
                      <div className="text-slate-300 ml-4">name: <span className="text-green-400">"Fardeen"</span>,</div>
                      <div className="text-slate-300 ml-4">role: <span className="text-yellow-400">"Backend Dev"</span>,</div>
                      <div className="text-slate-300 ml-4">experience: <span className="text-purple-400">3</span>,</div>
                      <div className="text-slate-300 ml-4">passion: <span className="text-orange-400">true</span></div>
                      <div className="text-blue-400">&#125;</div>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {achievements.map((achievement, index) => {
                      const Icon = achievement.icon;
                      return (
                        <div key={index} className="text-center p-3 bg-slate-50 rounded-lg">
                          <div className="flex items-center justify-center mb-1">
                            <Icon className="w-4 h-4 text-blue-600 mr-1" />
                            <div className="text-xl font-bold text-slate-900">{achievement.number}</div>
                          </div>
                          <div className="text-xs text-slate-600">{achievement.label}</div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Tech Stack */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-slate-700 text-center">Core Expertise</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Node.js</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">Express</span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">MongoDB</span>
                      <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-medium">Docker</span>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">AWS</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-200 to-purple-200 rounded-2xl -z-10 opacity-50"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-purple-200 to-pink-200 rounded-2xl -z-10 opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;