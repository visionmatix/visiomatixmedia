import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Link } from "react-router-dom"
import {
  Globe,
  Code,
  Smartphone,
  Zap,
  Shield,
  Palette,
  CheckCircle,
  ArrowRight,
  Monitor,
  Settings,
  Users,
  TrendingUp,
  Award,
  Search
} from "lucide-react"

const WebsiteDevelopment = () => {
  const services = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Custom Website Design",
      description: "Unique, responsive designs that reflect your brand and engage visitors"
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Frontend Development",
      description: "Modern, interactive user interfaces built with latest technologies"
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Backend Development",
      description: "Robust server-side solutions for dynamic websites and applications"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Responsive",
      description: "Websites that work perfectly across all devices and screen sizes"
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "SEO Optimization",
      description: "Built-in SEO best practices for better search engine visibility"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance Optimization",
      description: "Fast-loading websites optimized for speed and user experience"
    }
  ]

  const technologies = [
    { name: "React", description: "Modern JavaScript library for building user interfaces" },
    { name: "Next.js", description: "Full-stack React framework for production-ready applications" },
    { name: "WordPress", description: "Flexible CMS for content-driven websites" },
    { name: "Shopify", description: "E-commerce platform for online stores" },
    { name: "Node.js", description: "Server-side JavaScript runtime for scalable applications" },
    { name: "Python", description: "Versatile programming language for web applications" }
  ]

  const features = [
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "Responsive Design",
      description: "Works flawlessly on desktop, tablet, and mobile devices"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security First",
      description: "Built with security best practices and regular updates"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Fast Loading",
      description: "Optimized for speed with modern performance techniques"
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Custom Design",
      description: "Unique designs tailored to your brand and audience"
    }
  ]

  const benefits = [
    "Professional online presence that builds trust",
    "Mobile-responsive design for all devices",
    "SEO-optimized structure for better rankings",
    "Fast loading speeds for better user experience",
    "Secure and reliable hosting solutions",
    "Ongoing maintenance and support included"
  ]

  const websiteTypes = [
    {
      icon: <Globe className="h-12 w-12" />,
      title: "Business Websites",
      description: "Professional websites that showcase your services and build credibility",
      features: ["Contact Forms", "Service Pages", "About Us", "Portfolio"]
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "E-commerce Stores",
      description: "Full-featured online stores with payment processing and inventory management",
      features: ["Product Catalog", "Shopping Cart", "Payment Gateway", "Order Management"]
    },
    {
      icon: <Award className="h-12 w-12" />,
      title: "Portfolio Sites",
      description: "Stunning portfolios that showcase your work and attract new clients",
      features: ["Gallery", "Case Studies", "Client Testimonials", "Contact"]
    }
  ]

  const developmentProcess = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "Understanding your goals, audience, and requirements for the perfect website.",
      icon: <Users className="h-6 w-6" />
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Creating wireframes and designs that reflect your brand and user needs.",
      icon: <Palette className="h-6 w-6" />
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Building your website with clean code and thorough testing across devices.",
      icon: <Code className="h-6 w-6" />
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "Launching your website and providing ongoing maintenance and support.",
      icon: <Zap className="h-6 w-6" />
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-hero text-primary-foreground">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Website Development
              </h1>
              <p className="text-xl mb-8 opacity-90">
                In today’s market, your website isn’t just an online brochure; it’s your most powerful sales tool. Yet, an outdated design, slow loading speed, or clunky user experience can quickly turn potential customers away and into the arms of your competition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="accent" size="lg" asChild>
                  <Link to="/contact">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                {/* <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  View Portfolio
                </Button> */}

                <Button
                  variant="outline"
                  size="lg"
                  className="border-[#1C3458] text-[#1C3458] hover:bg-[#1C3458] hover:text-white"
                  asChild
                >
                  <Link to="/contact">Free Consultation</Link>
                </Button>


              </div>
            </div>


            {/* <div className="relative">
              <div className="aspect-square bg-primary-foreground/10 rounded-2xl p-8 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="bg-primary-foreground/20 rounded-lg p-4 flex items-center justify-center">
                    <Globe className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <div className="bg-primary-foreground/20 rounded-lg p-4 flex items-center justify-center">
                    <Code className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <div className="bg-primary-foreground/20 rounded-lg p-4 flex items-center justify-center">
                    <Smartphone className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <div className="bg-primary-foreground/20 rounded-lg p-4 flex items-center justify-center">
                    <Zap className="h-12 w-12 text-primary-foreground" />
                  </div>
                </div>
              </div>
             </div> */}



            <div className="relative h-[75vh] rounded-2xl overflow-hidden">
              <img
                src="/Images/website-developement.png"
                alt="Website Development"
                className="w-full h-full object-contain"
              />
            </div>




          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Does this sound familiar?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A poorly designed website is a liability, not an asset. It's time for a professional, modern website that not only looks good but is engineered to grow your business.


            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-hover text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4 text-primary-foreground">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-secondary">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Development Services</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive web development solutions for businesses of all sizes
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-hover group">
                <CardContent className="p-8">
                  <div className="text-primary mb-4 group-hover:text-accent transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Website Types Section */}
      <section className="section-padding">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Types of Websites We Build</h2>
            <p className="text-xl text-muted-foreground">
              From simple business websites to complex e-commerce platforms
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {websiteTypes.map((type, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-8">
                  <div className="text-primary mb-4 flex justify-center">
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">{type.title}</h3>
                  <p className="text-muted-foreground mb-4 text-center">{type.description}</p>
                  <div className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section-padding bg-secondary">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Technologies We Use</h2>
            <p className="text-xl text-muted-foreground">
              Modern tools and frameworks for building exceptional websites
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{tech.name}</h3>
                  <p className="text-muted-foreground text-sm">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Benefits of Professional Web Development</h2>
              <p className="text-lg text-muted-foreground mb-8">
                A professionally developed website is an investment in your business's future. It builds credibility, drives conversions, and provides a platform for growth.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <Card className="card-hover">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">99.9%</h3>
                  <p className="text-muted-foreground mb-4">Uptime guarantee</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center">
                      <div className="font-bold text-primary">&lt;3s</div>
                      <div className="text-muted-foreground">Load Time</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-primary">100%</div>
                      <div className="text-muted-foreground">Mobile Ready</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-secondary">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Development Process</h2>
            <p className="text-xl text-muted-foreground">
              A proven methodology that delivers high-quality websites on time and on budget
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {developmentProcess.map((step, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-foreground">{step.step}</span>
                  </div>
                  <div className="text-primary mb-3 flex justify-center">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-primary-foreground">
        <div className="container-width text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Build Your Dream Website?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's create a website that represents your brand beautifully and drives real business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" asChild>
              <Link to="/contact">Start Your Project</Link>
            </Button>
           
            <Button
                  variant="outline"
                  size="lg"
                  className="border-[#1C3458] text-[#1C3458] hover:bg-[#1C3458] hover:text-white"
                  asChild
                >
                  <Link to="/contact">View Our Work</Link>
                </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WebsiteDevelopment
