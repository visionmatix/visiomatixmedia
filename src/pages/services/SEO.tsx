import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Link } from "react-router-dom"
import { 
  Search, 
  TrendingUp, 
  BarChart3, 
  Target, 
  Globe, 
  Users,
  CheckCircle,
  ArrowRight,
  Zap,
  Award,
  FileText,
  Link2,
  Settings,
  Eye
} from "lucide-react"

const SEO = () => {
  const services = [
    {
      icon: <Search className="h-8 w-8" />,
      title: "Keyword Research",
      description: "In-depth keyword analysis to identify high-value search opportunities"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "On-Page SEO",
      description: "Optimize your website structure, content, and meta tags for search engines"
    },
    {
      icon: <Link2 className="h-8 w-8" />,
      title: "Link Building",
      description: "Build high-quality backlinks to increase domain authority and rankings"
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Technical SEO",
      description: "Fix technical issues that prevent search engines from crawling your site"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Local SEO",
      description: "Optimize your business for local search results and Google My Business"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "SEO Analytics",
      description: "Track rankings, traffic, and conversions with detailed reporting"
    }
  ]

  const features = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Strategic Approach",
      description: "Data-driven SEO strategies that align with your business goals"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Proven Results",
      description: "Track record of improving rankings and organic traffic"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Team",
      description: "Certified SEO specialists with years of experience"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "White Hat Methods",
      description: "Ethical SEO practices that ensure long-term success"
    }
  ]

  const benefits = [
    "Increased organic search visibility",
    "Higher quality website traffic",
    "Better user experience and site performance",
    "Long-term sustainable growth",
    "Cost-effective marketing investment",
    "Competitive advantage in search results"
  ]

  const seoProcess = [
    {
      step: "01",
      title: "SEO Audit",
      description: "Comprehensive analysis of your current SEO performance and opportunities.",
      icon: <Eye className="h-6 w-6" />
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Create a customized SEO strategy based on your industry and competition.",
      icon: <Target className="h-6 w-6" />
    },
    {
      step: "03",
      title: "Implementation",
      description: "Execute on-page, technical, and off-page optimizations systematically.",
      icon: <Settings className="h-6 w-6" />
    },
    {
      step: "04",
      title: "Monitoring & Optimization",
      description: "Continuous tracking and refinement to maintain and improve rankings.",
      icon: <BarChart3 className="h-6 w-6" />
    }
  ]

  const rankings = [
    { keyword: "Digital Marketing Agency", position: "#1", change: "+15" },
    { keyword: "SEO Services Pune", position: "#2", change: "+8" },
    { keyword: "Web Design Company", position: "#1", change: "+12" },
    { keyword: "Social Media Marketing", position: "#3", change: "+5" }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-hero text-primary-foreground">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                SEO Services
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Boost your search visibility and rank higher on Google with our proven SEO strategies that drive organic traffic and qualified leads.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="accent" size="lg" asChild>
                  <Link to="/contact">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Free SEO Audit
                </Button>
              </div>
            </div>
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
                    <Award className="h-12 w-12 text-primary-foreground" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our SEO Services?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine technical expertise with strategic thinking to deliver SEO results that matter to your business.
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
            <h2 className="text-4xl font-bold mb-4">Our SEO Services</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive SEO solutions to improve your search engine rankings
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

      {/* Results Section */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">SEO Results That Matter</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our SEO strategies deliver measurable improvements in search rankings, organic traffic, and business growth.
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
                <h3 className="text-xl font-bold mb-6">Ranking Improvements</h3>
                <div className="space-y-4">
                  {rankings.map((rank, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                      <div>
                        <div className="font-medium">{rank.keyword}</div>
                        <div className="text-sm text-muted-foreground">Position {rank.position}</div>
                      </div>
                      <div className="text-accent font-semibold">
                        {rank.change} positions
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">450%</div>
                  <div className="text-muted-foreground">Average traffic increase</div>
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
            <h2 className="text-4xl font-bold mb-4">Our SEO Process</h2>
            <p className="text-xl text-muted-foreground">
              A systematic approach that delivers consistent ranking improvements
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {seoProcess.map((step, index) => (
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

      {/* Technical SEO Section */}
      <section className="section-padding">
        <div className="container-width text-center">
          <h2 className="text-4xl font-bold mb-8">Technical SEO Excellence</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            We optimize every technical aspect of your website to ensure search engines can crawl, index, and rank your content effectively.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="card-hover">
              <CardContent className="p-6 text-center">
                <Zap className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Site Speed</h3>
                <p className="text-muted-foreground text-sm">Optimize loading times for better user experience and rankings</p>
              </CardContent>
            </Card>
            <Card className="card-hover">
              <CardContent className="p-6 text-center">
                <Globe className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Mobile Optimization</h3>
                <p className="text-muted-foreground text-sm">Ensure perfect performance across all devices and screen sizes</p>
              </CardContent>
            </Card>
            <Card className="card-hover">
              <CardContent className="p-6 text-center">
                <Settings className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Schema Markup</h3>
                <p className="text-muted-foreground text-sm">Implement structured data for rich snippets and enhanced visibility</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-primary-foreground">
        <div className="container-width text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Dominate Search Results?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's create an SEO strategy that puts your business at the top of search results and drives qualified traffic.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" asChild>
              <Link to="/contact">Start SEO Campaign</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Get Free SEO Report
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SEO