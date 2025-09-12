import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Link } from "react-router-dom"
import { 
  PenTool, 
  BookOpen, 
  Video, 
  FileText, 
  Mic, 
  Image,
  CheckCircle,
  ArrowRight,
  Target,
  TrendingUp,
  Users,
  Search
} from "lucide-react"

const ContentMarketing = () => {
  const contentTypes = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Blog Articles",
      description: "SEO-optimized blog posts that drive organic traffic and establish thought leadership"
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: "Video Content",
      description: "Engaging videos, tutorials, and promotional content for multiple platforms"
    },
    {
      icon: <Image className="h-8 w-8" />,
      title: "Infographics",
      description: "Visual content that simplifies complex information and increases shareability"
    },
    {
      icon: <Mic className="h-8 w-8" />,
      title: "Podcasts",
      description: "Audio content strategy to reach audiences during their commute or workout"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "eBooks & Guides",
      description: "In-depth resources that generate leads and showcase expertise"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Social Content",
      description: "Platform-specific content that engages and builds communities"
    }
  ]

  const services = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Content Strategy",
      description: "Comprehensive content planning aligned with business objectives"
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "SEO Content",
      description: "Search-optimized content that ranks high and drives organic traffic"
    },
    {
      icon: <PenTool className="h-6 w-6" />,
      title: "Content Creation",
      description: "High-quality, engaging content across all formats and platforms"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Performance Tracking",
      description: "Analytics and insights to measure content effectiveness and ROI"
    }
  ]

  const benefits = [
    "Increased brand awareness and authority",
    "Higher search engine rankings",
    "More qualified leads and conversions",
    "Enhanced customer engagement and loyalty",
    "Cost-effective long-term marketing asset",
    "Improved thought leadership positioning"
  ]

  const process = [
    {
      step: "01",
      title: "Research & Planning",
      description: "We analyze your audience, competitors, and industry to create a content strategy that resonates."
    },
    {
      step: "02",
      title: "Content Creation",
      description: "Our expert writers and designers create high-quality, engaging content that tells your story."
    },
    {
      step: "03",
      title: "Distribution",
      description: "Strategic content distribution across multiple channels to maximize reach and impact."
    },
    {
      step: "04",
      title: "Optimization",
      description: "Continuous monitoring and optimization based on performance data and audience feedback."
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
                Content Marketing
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Create powerful content that speaks to your audience, builds trust, and drives meaningful engagement across all touchpoints.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="accent" size="lg" asChild>
                  <Link to="/contact">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  View Samples
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-primary-foreground/10 rounded-2xl p-8 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="bg-primary-foreground/20 rounded-lg p-4 flex items-center justify-center">
                    <PenTool className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <div className="bg-primary-foreground/20 rounded-lg p-4 flex items-center justify-center">
                    <BookOpen className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <div className="bg-primary-foreground/20 rounded-lg p-4 flex items-center justify-center">
                    <Video className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <div className="bg-primary-foreground/20 rounded-lg p-4 flex items-center justify-center">
                    <Target className="h-12 w-12 text-primary-foreground" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="section-padding">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Content Types We Master</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From blog posts to videos, we create diverse content formats that engage your audience at every stage of their journey.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentTypes.map((type, index) => (
              <Card key={index} className="card-hover group">
                <CardContent className="p-8">
                  <div className="text-primary mb-4 group-hover:text-accent transition-colors">
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{type.title}</h3>
                  <p className="text-muted-foreground">{type.description}</p>
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
            <h2 className="text-4xl font-bold mb-4">Our Content Marketing Services</h2>
            <p className="text-xl text-muted-foreground">
              End-to-end content marketing solutions that deliver results
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-hover text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4 text-primary-foreground">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
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
              <h2 className="text-4xl font-bold mb-6">The Power of Great Content</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Quality content is the foundation of successful digital marketing. It builds trust, educates your audience, and drives profitable customer action.
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
                    <PenTool className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">400%+</h3>
                  <p className="text-muted-foreground mb-4">Increase in qualified leads</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center">
                      <div className="font-bold text-primary">75%</div>
                      <div className="text-muted-foreground">More Engagement</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-primary">300%</div>
                      <div className="text-muted-foreground">Better ROI</div>
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
            <h2 className="text-4xl font-bold mb-4">Our Content Process</h2>
            <p className="text-xl text-muted-foreground">
              A strategic approach that ensures every piece of content serves your business goals
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

      {/* Content Calendar Section */}
      <section className="section-padding">
        <div className="container-width text-center">
          <h2 className="text-4xl font-bold mb-8">Strategic Content Planning</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            We create detailed content calendars that align with your marketing objectives, seasonal trends, and audience preferences.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="card-hover">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Weekly</h3>
                <p className="text-muted-foreground text-sm">Regular blog posts and social content</p>
              </CardContent>
            </Card>
            <Card className="card-hover">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Video className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Monthly</h3>
                <p className="text-muted-foreground text-sm">Video content and in-depth guides</p>
              </CardContent>
            </Card>
            <Card className="card-hover">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Quarterly</h3>
                <p className="text-muted-foreground text-sm">eBooks, whitepapers, and research</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-primary-foreground">
        <div className="container-width text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Tell Your Story?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's create content that resonates with your audience and drives meaningful business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" asChild>
              <Link to="/contact">Start Content Strategy</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Download Content Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContentMarketing