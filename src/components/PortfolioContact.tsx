import { Button } from "@/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/card";
import { Badge } from "@/ui/badge";
import { Mail, Calendar, Github, Linkedin, ExternalLink, Zap, MapPin, Award, Clock, Phone } from "lucide-react";

const PortfolioContact = () => {
  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-green-200/50 shadow-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Available for New Projects
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent mb-6 leading-tight">
            Let's Build Something
            <br />
            <span className="text-primary">Great Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to scale your backend infrastructure? I specialize in creating robust, 
            secure, and high-performance solutions that power modern businesses.
          </p>
        </div>

        {/* Main Contact Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Primary Contact Card */}
          <Card className="lg:col-span-2 border-0 shadow-2xl bg-gradient-to-br from-card to-card/80 backdrop-blur-sm hover:shadow-3xl transition-all duration-500">
            <CardHeader className="pb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Start Your Project
                </CardTitle>
              </div>
              <p className="text-muted-foreground">
                Choose your preferred way to connect and let's discuss how I can help transform your ideas into reality.
              </p>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* CTA Buttons */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 h-auto bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  onClick={() =>
                    window.open(
                      "mailto:fardeenjoad313@gmail.com?subject=Backend Development Project Inquiry&body=Hi Fardeen,%0D%0A%0D%0AI would like to discuss a backend development project with you.%0D%0A%0D%0AProject Details:%0D%0A- %0D%0A- %0D%0A%0D%0ABest regards",
                      "_blank"
                    )
                  }
                >
                  <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Send Email
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6 h-auto border-2 hover:bg-green-50 hover:border-green-300 hover:text-green-700 transition-all duration-300 group"
                  onClick={() =>
                    window.open("https://wa.me/918955692248?text=Hi Fardeen, I would like to discuss a backend development project with you.", "_blank")
                  }
                >
                  <Phone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  WhatsApp
                </Button>
              </div>

              {/* Contact Information */}
              <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    Direct Contact
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors group">
                      <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                      <a 
                        href="mailto:fardeenjoad313@gmail.com"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium group-hover:text-primary"
                      >
                        fardeenjoad313@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors group">
                      <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                      <a 
                        href="https://wa.me/918955692248"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium group-hover:text-primary"
                      >
                        +91 8955692248
                      </a>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                    <Linkedin className="h-5 w-5 text-primary" />
                    Social Connect
                  </h3>
                  <div className="flex gap-2 flex-wrap">
                    <Button
                      variant="outline"
                      size="sm"
                      className="hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300"
                      onClick={() =>
                        window.open("https://github.com/fardeenjoadder", "_blank")
                      }
                    >
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
                      onClick={() =>
                        window.open("https://linkedin.com/in/fardeen-joad", "_blank")
                      }
                    >
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Portfolio
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Info Card */}
          <Card className="border-0 shadow-xl bg-gradient-to-br from-primary/5 to-accent/5 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Quick Info
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Clock className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Response Time</p>
                    <p className="text-sm text-muted-foreground">Within 2-4 hours</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <MapPin className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Location</p>
                    <p className="text-sm text-muted-foreground">India (UTC +5:30)</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Award className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Experience</p>
                    <p className="text-sm text-muted-foreground">5+ years backend</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-green-700">
                      Available Now
                    </span>
                  </div>
                  <p className="text-xs text-green-600">
                    Ready to start your project
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Services Showcase */}
        <Card className="border-0 shadow-2xl bg-gradient-to-r from-card via-card/95 to-card backdrop-blur-sm overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
          <CardContent className="relative p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">What I Can Help You Build</h3>
              <p className="text-muted-foreground">Specialized backend solutions tailored to your business needs</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center space-y-3 p-6 rounded-xl bg-gradient-to-b from-muted/30 to-transparent hover:from-muted/50 transition-all duration-300">
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-foreground">API Development</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• REST API Architecture</li>
                  <li>• Database Integration</li>
                  <li>• Authentication Systems</li>
                </ul>
              </div>

              <div className="text-center space-y-3 p-6 rounded-xl bg-gradient-to-b from-muted/30 to-transparent hover:from-muted/50 transition-all duration-300">
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-foreground">Performance</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Speed Optimization</li>
                  <li>• Scalable Architecture</li>
                  <li>• Load Balancing</li>
                </ul>
              </div>

              <div className="text-center space-y-3 p-6 rounded-xl bg-gradient-to-b from-muted/30 to-transparent hover:from-muted/50 transition-all duration-300">
                <div className="mx-auto w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <ExternalLink className="h-6 w-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-foreground">Integration</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Third-party APIs</li>
                  <li>• Payment Gateways</li>
                  <li>• Cloud Services</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 backdrop-blur-sm border border-primary/20 rounded-2xl p-8">
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold text-foreground mb-2">Ready to Get Started?</h3>
              <p className="text-muted-foreground">Let's discuss your project requirements and timeline.</p>
            </div>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg hover:shadow-xl transition-all duration-300 px-8"
              onClick={() => {
                window.location.href = 'mailto:fardeenjoad313@gmail.com?subject=Project Discussion&body=Hi Fardeen,%0D%0A%0D%0AI would like to discuss my project requirements with you.%0D%0A%0D%0AProject Type:%0D%0ATimeline:%0D%0ABudget Range:%0D%0A%0D%0ALooking forward to hearing from you!';
              }}
            >
              Start Discussion
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioContact;