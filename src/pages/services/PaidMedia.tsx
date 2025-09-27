import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Link } from "react-router-dom"
import {
  MousePointer,
  Target,
  BarChart3,
  Zap,
  DollarSign,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Search,
  Users,
  Eye,
  MousePointer2
} from "lucide-react"

const PaidMedia = () => {
  const platforms = [
    {
      icon: <Search className="h-8 w-8" />,
      title: "Google Ads",
      description: "Search, Display, Shopping, and YouTube advertising campaigns",
      features: ["Search Campaigns", "Display Network", "Shopping Ads", "YouTube Ads"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Facebook Ads",
      description: "Targeted campaigns across Facebook and Instagram platforms",
      features: ["Lead Generation", "Brand Awareness", "Traffic Campaigns", "Conversions"]
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "LinkedIn Ads",
      description: "B2B focused advertising for professional audience targeting",
      features: ["Sponsored Content", "Message Ads", "Dynamic Ads", "Lead Gen Forms"]
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Twitter Ads",
      description: "Promote tweets and drive engagement with targeted campaigns",
      features: ["Tweet Promotion", "Follower Campaigns", "Website Clicks", "App Installs"]
    }
  ]

  const services = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Campaign Strategy",
      description: "Comprehensive advertising strategies aligned with your business goals"
    },
    {
      icon: <MousePointer className="h-6 w-6" />,
      title: "Ad Creation",
      description: "Compelling ad copy and creative that drives clicks and conversions"
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Audience Targeting",
      description: "Precise audience segmentation for maximum campaign effectiveness"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Performance Tracking",
      description: "Real-time monitoring and optimization for better ROI"
    }
  ]

  const benefits = [
    "Immediate traffic and lead generation",
    "Precise audience targeting capabilities",
    "Measurable ROI and performance metrics",
    "Brand awareness and visibility boost",
    "Competitive advantage in search results",
    "Flexible budget control and optimization"
  ]

  const adTypes = [
    {
      icon: <Search className="h-12 w-12" />,
      title: "Search Ads",
      description: "Capture high-intent users actively searching for your products or services",
      metric: "95% Intent Rate"
    },
    {
      icon: <Eye className="h-12 w-12" />,
      title: "Display Ads",
      description: "Build brand awareness with visually appealing ads across the web",
      metric: "2M+ Reach"
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Social Ads",
      description: "Engage audiences on their favorite social platforms with targeted content",
      metric: "150% Engagement"
    },
    {
      icon: <MousePointer2 className="h-12 w-12" />,
      title: "Retargeting",
      description: "Re-engage visitors who showed interest but didn't convert initially",
      metric: "300% Conversion"
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
                Paid Media Advertising
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Drive instant traffic and maximize ROI with strategic paid advertising campaigns across all major platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="accent" size="lg" asChild>
                  <Link to="/contact">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Free Audit
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-primary-foreground/10 rounded-2xl p-8 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="bg-primary-foreground/20 rounded-lg p-4 flex items-center justify-center">
                    <MousePointer className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <div className="bg-primary-foreground/20 rounded-lg p-4 flex items-center justify-center">
                    <Target className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <div className="bg-primary-foreground/20 rounded-lg p-4 flex items-center justify-center">
                    <BarChart3 className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <div className="bg-primary-foreground/20 rounded-lg p-4 flex items-center justify-center">
                    <Zap className="h-12 w-12 text-primary-foreground" />
                  </div>
                </div>
              </div>
            </div>



            {/* <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="/Images/paid-media.jpg"
                  alt="Paid Media"
                  className="w-full h-full object-cover"
                />
              </div>
            </div> */}


          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="section-padding">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Advertising Platforms We Master</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We create and manage high-performing campaigns across all major advertising platforms to maximize your reach and ROI.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {platforms.map((platform, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-8">
                  <div className="text-primary mb-4">
                    {platform.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{platform.title}</h3>
                  <p className="text-muted-foreground mb-4">{platform.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {platform.features.map((feature, idx) => (
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

      {/* Ad Types Section */}
      <section className="section-padding bg-secondary">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Types of Paid Advertising</h2>
            <p className="text-xl text-muted-foreground">
              Different ad formats for different marketing objectives
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {adTypes.map((type, index) => (
              <Card key={index} className="card-hover text-center">
                <CardContent className="p-8">
                  <div className="text-primary mb-4 flex justify-center">
                    {type.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{type.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{type.description}</p>
                  <div className="text-accent font-semibold">{type.metric}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Paid Media Services</h2>
            <p className="text-xl text-muted-foreground">
              End-to-end advertising solutions that deliver measurable results
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
      <section className="section-padding bg-secondary">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why Paid Advertising Works</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Paid advertising offers unmatched speed and precision in reaching your target audience, delivering immediate results and scalable growth.
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
                    <DollarSign className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">500%+</h3>
                  <p className="text-muted-foreground mb-4">Average return on ad spend (ROAS)</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center">
                      <div className="font-bold text-primary">24hrs</div>
                      <div className="text-muted-foreground">Campaign Launch</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-primary">95%</div>
                      <div className="text-muted-foreground">Success Rate</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="section-padding">
        <div className="container-width text-center">
          <h2 className="text-4xl font-bold mb-8">Maximize Your Advertising ROI</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Our data-driven approach ensures every dollar spent on advertising delivers maximum return on investment.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="card-hover">
              <CardContent className="p-6 text-center">
                <Target className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Targeting</h3>
                <p className="text-muted-foreground">Reach the right audience with precision targeting and demographic filters</p>
              </CardContent>
            </Card>
            <Card className="card-hover">
              <CardContent className="p-6 text-center">
                <BarChart3 className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Tracking</h3>
                <p className="text-muted-foreground">Monitor performance with detailed analytics and conversion tracking</p>
              </CardContent>
            </Card>
            <Card className="card-hover">
              <CardContent className="p-6 text-center">
                <Zap className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Optimization</h3>
                <p className="text-muted-foreground">Continuous optimization to improve performance and reduce costs</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-primary-foreground">
        <div className="container-width text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Scale Your Business?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Launch high-converting paid advertising campaigns that drive immediate results and sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" asChild>
              <Link to="/contact">Launch Campaign</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Free Ad Account Audit
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PaidMedia