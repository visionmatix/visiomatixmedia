import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Link } from "react-router-dom"
import {
  Search,
  TrendingUp,
  Target,
  Eye,
  DollarSign,
  Users,
  ArrowRight,
  CheckCircle,
  BarChart3,
  Settings,
  FileText,
  Link2,
  MapPin,
  Globe,
  Zap,
  Shield,
  Award
} from "lucide-react"

const SEOP = () => {
  const problems = [
    {
      icon: <Eye className="h-6 w-6" />,
      text: "Your website gets very little to no organic traffic."
    },
    {
      icon: <Search className="h-6 w-6" />,
      text: "You're not on the first page of Google for your most important keywords."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      text: "Your competitors consistently outrank you in search results."
    },
    {
      icon: <FileText className="h-6 w-6" />,
      text: "You're not sure what content to create to attract your audience."
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      text: "You're relying solely on paid ads to bring in new business."
    }
  ]

  const benefits = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "More Qualified Traffic",
      description: "We bring in visitors who are actively searching for your products or services."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Higher Search Rankings",
      description: "We help your website climb the search results and earn the top spots."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Unmatched Credibility",
      description: "Higher rankings build trust, establishing your brand as a leading authority in your industry."
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Long-Term Growth",
      description: "Unlike paid ads, organic traffic continues to grow over time with a solid SEO foundation."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "A Better User Experience",
      description: "We optimize your site for both search engines and the people who visit it, ensuring a seamless experience."
    }
  ]

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Audit",
      description: "We start with a comprehensive technical and content audit of your website. We identify exactly what's working, what's not, and where the biggest opportunities for growth lie.",
      icon: <Search className="h-8 w-8" />
    },
    {
      number: "02",
      title: "Strategy & Keywords",
      description: "We conduct in-depth keyword research to uncover what your customers are searching for. We then build a customized strategy that targets those opportunities and aligns with your business goals.",
      icon: <Target className="h-8 w-8" />
    },
    {
      number: "03",
      title: "Implementation & Optimization",
      description: "We handle all on-page and off-page optimization. This includes content creation, technical fixes, and building a high-quality backlink profile to boost your authority.",
      icon: <Settings className="h-8 w-8" />
    },
    {
      number: "04",
      title: "Monitoring & Refinement",
      description: "SEO is an ongoing process. We continuously monitor your rankings, analyze your performance, and refine our strategy to ensure your website keeps climbing and stays ahead of the competition.",
      icon: <BarChart3 className="h-8 w-8" />
    }
  ]

  const services = [
    {
      name: "Technical SEO",
      description: "We ensure your website's foundation is strong, addressing issues like site speed, mobile-friendliness, and crawlability.",
      icon: <Settings className="h-8 w-8" />,
      color: "bg-blue-600"
    },
    {
      name: "On-Page SEO",
      description: "We optimize your content, headings, and meta tags to ensure search engines understand and rank your pages for the right keywords.",
      icon: <FileText className="h-8 w-8" />,
      color: "bg-green-600"
    },
    {
      name: "Off-Page SEO",
      description: "We build your website's authority and credibility through high-quality link building and strategic external promotions.",
      icon: <Link2 className="h-8 w-8" />,
      color: "bg-purple-600"
    },
    {
      name: "Local SEO",
      description: "For businesses with physical locations, we optimize your online presence to attract local customers, including managing your Google Business Profile.",
      icon: <MapPin className="h-8 w-8" />,
      color: "bg-red-600"
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
                Search Engine Optimization (SEO)
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Are You Invisible to Your Customers?
              </p>
              <p className="text-lg mb-8 opacity-80">
                You've built a beautiful website, but are you getting the traffic you deserve? The truth is, without a strategic SEO plan, even the most stunning website can get lost on the second, third, or fourth page of search results—places your customers never look.
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
            {/*             
            <div className="relative">
              <div className="aspect-square bg-primary-foreground/10 rounded-2xl p-8 flex items-center justify-center">

                <div className="grid grid-cols-2 gap-4 w-full">

                  <div className="bg-primary-foreground/20 rounded-lg p-4 flex items-center justify-center">
                    <Search className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <div className="bg-primary-foreground/20 rounded-lg p-4 flex items-center justify-center">
                    <TrendingUp className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <div className="bg-primary-foreground/20 rounded-lg p-4 flex items-center justify-center">
                    <BarChart3 className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <div className="bg-primary-foreground/20 rounded-lg p-4 flex items-center justify-center">
                    <Globe className="h-12 w-12 text-primary-foreground" />
                  </div>
                </div>
              </div>
            </div>  */}

            <div className="relative h-[75vh] rounded-2xl overflow-hidden flex justify-center">
              <img
                src="/Images/search-engine-optimization-1.png"
                alt="Paid Media"
                className="w-[90%] object-cover object-center"
              />
            </div>





          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="section-padding">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Does this sound familiar?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
              You're right to feel frustrated. Being invisible online means you're missing out on a steady stream of high-quality leads. It's time to stop guessing and start getting found.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {problems.map((problem, index) => (
              <Card key={index} className="card-hover border-l-4 border-l-destructive">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-destructive mt-1">
                      {problem.icon}
                    </div>
                    <p className="text-foreground">{problem.text}</p>
                  </div>
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
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              At Visiomatix Media, we transform your website from a static brochure into a powerful lead-generating asset. We believe in building a sustainable online presence that delivers long-term growth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.slice(0, 3).map((benefit, index) => (
              <Card key={index} className="card-hover group">
                <CardContent className="p-8">
                  <div className="text-primary mb-4 group-hover:text-accent transition-colors">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
            {benefits.slice(3).map((benefit, index) => (
              <Card key={index + 3} className="card-hover group">
                <CardContent className="p-8">
                  <div className="text-primary mb-4 group-hover:text-accent transition-colors">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
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
              Our SEO process is built on transparency, expertise, and a commitment to measurable results. Here's how we make your business visible:
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="card-hover relative overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="text-6xl font-bold text-primary/20 absolute top-4 right-4">
                      {step.number}
                    </div>
                    <div className="text-primary">
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
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
            <h2 className="text-4xl font-bold mb-4">Our Core SEO Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We specialize in every facet of search engine optimization to build a complete and powerful digital presence for your brand.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.name}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-gradient-primary text-primary-foreground">
        <div className="container-width text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Found by Your Customers?</h2>
          <p className="text-xl mb-6 opacity-90 max-w-3xl mx-auto">
            We believe that great SEO is an investment in your future. Our custom strategies are built to provide a clear and measurable ROI.
          </p>
          <p className="text-lg mb-8 opacity-80">
            Don't let your business stay invisible. Contact us today for a free SEO consultation and let's discuss how we can get you to the top of the search results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" asChild>
              <Link to="/contact">Free SEO Consultation</Link>
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
  );
};

export default SEOP;