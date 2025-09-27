import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Link } from "react-router-dom"
import {
  TrendingUp,
  Target,
  BarChart3,
  Users,
  Search,
  MousePointer,
  PenTool,
  Globe,
  CheckCircle,
  ArrowRight,
  Zap,
  Award
} from "lucide-react"

const DigitalMarketing = () => {
  const features = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Strategic Planning",
      description: "Comprehensive digital strategies tailored to your business goals"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Data-Driven Insights",
      description: "Analytics and reporting to measure and optimize performance"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Audience Targeting",
      description: "Reach the right customers at the right time with precision"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Multi-Channel Approach",
      description: "Integrated campaigns across all digital touchpoints"
    }
  ]

  const services = [
    {
      icon: <Search className="h-8 w-8" />,
      title: "SEO Optimization",
      description: "Improve your search engine rankings and organic visibility"
    },
    {
      icon: <MousePointer className="h-8 w-8" />,
      title: "PPC Advertising",
      description: "Drive immediate traffic with targeted paid advertising campaigns"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Social Media Marketing",
      description: "Build brand awareness and engage with your audience on social platforms"
    },
    {
      icon: <PenTool className="h-8 w-8" />,
      title: "Content Strategy",
      description: "Create compelling content that resonates with your target audience"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Analytics & Reporting",
      description: "Track performance and ROI with detailed analytics and insights"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web Optimization",
      description: "Optimize your website for better user experience and conversions"
    }
  ]

  const benefits = [
    "Increased brand visibility and awareness",
    "Higher quality leads and conversions",
    "Better customer engagement and retention",
    "Measurable ROI and performance tracking",
    "Competitive advantage in digital space",
    "Cost-effective marketing solutions"
  ]

  const process = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We analyze your business, competition, and target audience to create a foundation for success."
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Develop a comprehensive digital marketing strategy tailored to your specific goals and budget."
    },
    {
      step: "03",
      title: "Implementation",
      description: "Execute campaigns across multiple channels with precision and attention to detail."
    },
    {
      step: "04",
      title: "Optimization",
      description: "Continuously monitor, analyze, and optimize campaigns for maximum performance and ROI."
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
                Digital Marketing Services
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Comprehensive digital marketing solutions to help your business grow, engage customers, and achieve measurable results in the digital landscape.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="accent" size="lg" asChild>
                  <Link to="/contact">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                {/* <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"> */}
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


            {/* <div className="relative h-[75vh] rounded-2xl overflow-hidden">
              <img
                src="/Images/digital-marketing.png"
                alt="Paid Media"
                className="w-full h-full object-cover transform scale-105 hover:scale-100"
              />

              <div className="absolute inset-0 bg-[#1C3458] opacity-30"></div>
            </div> */}


{/* 
             <div className="relative">
              <div className="aspect-square bg-primary-foreground/10 rounded-2xl p-8 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="bg-primary-foreground/20 rounded-lg p-4 flex items-center justify-center">
                    <TrendingUp className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <div className="bg-primary-foreground/20 rounded-lg p-4 flex items-center justify-center">
                    <Target className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <div className="bg-primary-foreground/20 rounded-lg p-4 flex items-center justify-center">
                    <BarChart3 className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <div className="bg-primary-foreground/20 rounded-lg p-4 flex items-center justify-center">
                    <Award className="h-12 w-12 text-primary-foreground" />
                  </div>
                </div>
              </div>
            </div>  */}

  <div className="relative h-[80vh] rounded-2xl overflow-hidden flex justify-center">
              <img
                src="/Images/digitalmarketingservice (1)_11zon.png"
                alt="Paid Media"
                className="w-[100%] object-cover object-center"
              />
            </div>


          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Digital Marketing?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine strategic thinking with cutting-edge technology to deliver results that matter to your business.
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

      {/* Services Grid */}
      <section className="section-padding bg-secondary">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Digital Marketing Services</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive solutions for all your digital marketing needs
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

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Benefits of Digital Marketing</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Digital marketing offers unparalleled opportunities to reach, engage, and convert your target audience. Here's what you can expect:
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
                  <h3 className="text-2xl font-bold mb-4">200%+</h3>
                  <p className="text-muted-foreground mb-4">Average increase in online visibility</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center">
                      <div className="font-bold text-primary">150%</div>
                      <div className="text-muted-foreground">Traffic Growth</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-primary">85%</div>
                      <div className="text-muted-foreground">Client Satisfaction</div>
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
            <h2 className="text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground">
              A proven methodology that delivers consistent results
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-primary-foreground">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
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
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's create a digital marketing strategy that drives real results for your business.
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
                  <Link to="/contact">Schedule Consultation </Link>
                </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DigitalMarketing