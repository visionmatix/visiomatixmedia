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
  Search,
  X,
  Clock,
  Eye
} from "lucide-react"

const WebsiteDevelopmentNew = () => {
  const problems = [
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Outdated Design",
      description: "Your website looks outdated or unprofessional, hurting your credibility."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Slow Loading Speed",
      description: "It's slow to load, causing visitors to abandon it before it even opens."
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Not Mobile-Friendly",
      description: "Your site isn't mobile-friendly, losing you a majority of today's traffic."
    },
    {
      icon: <X className="h-8 w-8" />,
      title: "Poor Conversion",
      description: "It's not generating leads or sales, despite the time and money you've put into it."
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Hard to Update",
      description: "You can't easily update the content yourself, leaving it stagnant."
    }
  ]

  const benefits = [
    "A Powerful First Impression: We create a professional, modern, and aesthetically pleasing website that builds instant trust and credibility.",
    "High-Converting Design: Our websites are built with a clear purpose: to turn visitors into leads and customers with intuitive user flows and clear calls-to-action.",
    "Seamless User Experience: We develop fast, responsive, and easy-to-navigate websites that provide an exceptional experience on any device, from desktop to mobile.",
    "Optimized for Growth: Our websites are built with a strong technical SEO foundation and the flexibility to support all your future marketing efforts.",
    "Complete Control: We empower you with a user-friendly Content Management System (CMS) so you can easily manage and update your own content without needing a developer."
  ]

  const services = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Custom Website Design",
      description: "A unique, branded website built from the ground up to stand out in your industry."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "E-commerce Development",
      description: "A secure, high-performing online store that makes it easy for customers to browse and buy your products."
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Website Redesign",
      description: "A complete modernization of your existing site, updating its look, speed, and functionality to drive better results."
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "CMS Integration",
      description: "We build on powerful platforms like WordPress, providing you with a flexible and easy-to-use backend for content management."
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Responsive Web Design",
      description: "Every site we build is optimized for a perfect display and user experience on all screen sizes, from mobile phones to large desktops."
    }
  ]

  const developmentProcess = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We start by understanding your business, your target audience, and your specific goals. We then create a strategic blueprint outlining your website's features, structure, and content to ensure it aligns with your vision.",
      icon: <Users className="h-6 w-6" />
    },
    {
      step: "02",
      title: "Design & Development",
      description: "Our designers create a stunning, custom visual identity for your site, and our developers build a robust, clean-coded foundation. We incorporate the latest trends in UI/UX to ensure a modern and intuitive experience.",
      icon: <Palette className="h-6 w-6" />
    },
    {
      step: "03",
      title: "Testing & Launch",
      description: "We conduct rigorous testing to ensure your website is fast, secure, and bug-free across all browsers and devices. Once it meets our high standards, we seamlessly launch the site.",
      icon: <Code className="h-6 w-6" />
    },
    {
      step: "04",
      title: "Training & Support",
      description: "After launch, we provide comprehensive training so you can confidently manage your new website. We also offer ongoing support to ensure your site remains up-to-date and performs at its best.",
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
                Is Your Website Costing You Customers?
              </h1>
              <p className="text-xl mb-8 opacity-90">
                In today's market, your website isn't just an online brochure; it's your most powerful sales tool. Yet, an outdated design, slow loading speed, or clunky user experience can quickly turn potential customers away and into the arms of your competition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="accent" size="lg" asChild>
                  <Link to="/contact">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
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

      {/* Problems Section */}
      <section className="section-padding">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Does this sound familiar?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A poorly designed website is a liability, not an asset. It's time for a professional, modern website that not only looks good but is engineered to grow your business.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 text-primary-foreground">
                    {problem.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
                  <p className="text-muted-foreground text-sm">{problem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-secondary">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What You Gain with Visiomatix Media</h2>
            <p className="text-xl text-muted-foreground">
              At Visiomatix Media, we build high-converting websites that are beautiful, fast, and secure. We focus on a data-driven approach, ensuring your website is a strategic tool that delivers a clear return on your investment.
            </p>
          </div>
          <div className="space-y-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-card rounded-lg card-hover">
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How We Work: Our 4-Step Process</h2>
            <p className="text-xl text-muted-foreground">
              Our website development process is transparent and collaborative, ensuring the final product perfectly reflects your brand's vision and business goals.
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

      {/* Services Section */}
      <section className="section-padding bg-secondary">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Website Services</h2>
            <p className="text-xl text-muted-foreground">
              We specialize in a variety of website solutions to fit your unique business needs, whether you're launching a new business or revamping an old site.
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

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-primary-foreground">
        <div className="container-width text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Invest in a Website That Works for You?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Your website is a critical investment in your business's future. Our custom solutions are designed to deliver a clear and measurable return by turning your online presence into a powerful growth engine.
          </p>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Don't let an outdated website hold you back. Contact us today for a free consultation and let's discuss building a website that drives your business forward.
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
              <Link to="/contact">Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WebsiteDevelopmentNew