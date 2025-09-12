import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Link } from "react-router-dom"
import { 
  Users, 
  Heart, 
  MessageCircle, 
  Share2, 
  TrendingUp, 
  Target,
  CheckCircle,
  ArrowRight,
  Zap,
  Camera,
  Video,
  Calendar
} from "lucide-react"

const SMM = () => {
  const platforms = [
    {
      name: "Facebook",
      description: "Build communities and drive engagement with targeted Facebook campaigns",
      color: "bg-blue-600"
    },
    {
      name: "Instagram", 
      description: "Visual storytelling that captures attention and builds brand loyalty",
      color: "bg-purple-600"
    },
    {
      name: "Twitter/X",
      description: "Real-time engagement and thought leadership in your industry",
      color: "bg-gray-900"
    },
    {
      name: "LinkedIn",
      description: "Professional networking and B2B lead generation strategies",
      color: "bg-blue-700"
    },
    {
      name: "YouTube",
      description: "Video marketing that educates, entertains, and converts",
      color: "bg-red-600"
    },
    {
      name: "TikTok",
      description: "Creative short-form content that goes viral and builds brand awareness",
      color: "bg-black"
    }
  ]

  const services = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Strategy Development",
      description: "Comprehensive social media strategies aligned with your business goals"
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Content Creation",
      description: "Engaging visual content, graphics, and photography that tells your story"
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Content Scheduling",
      description: "Strategic posting schedules to maximize reach and engagement"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community Management",
      description: "Active engagement with your audience and community building"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Analytics & Reporting",
      description: "Detailed performance tracking and insights for optimization"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Paid Social Campaigns",
      description: "Targeted advertising campaigns to boost reach and conversions"
    }
  ]

  const benefits = [
    "Increased brand awareness and recognition",
    "Higher engagement rates and customer loyalty",
    "Improved customer service and communication",
    "Cost-effective marketing with measurable ROI",
    "Better audience insights and market understanding",
    "Enhanced website traffic and lead generation"
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-hero text-primary-foreground">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Social Media Marketing
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Engage your audience and boost your brand online with strategic social media marketing that builds communities and drives results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="accent" size="lg" asChild>
                  <Link to="/contact">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  View Portfolio
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-primary-foreground/10 rounded-2xl p-8 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="bg-primary-foreground/20 rounded-lg p-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <div className="bg-primary-foreground/20 rounded-lg p-4 flex items-center justify-center">
                    <Heart className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <div className="bg-primary-foreground/20 rounded-lg p-4 flex items-center justify-center">
                    <Share2 className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <div className="bg-primary-foreground/20 rounded-lg p-4 flex items-center justify-center">
                    <MessageCircle className="h-12 w-12 text-primary-foreground" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="section-padding">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Platforms We Master</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We create tailored strategies for each platform to maximize your reach and engagement across all social channels.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 ${platform.color} rounded-lg flex items-center justify-center mb-4`}>
                    <Share2 className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{platform.name}</h3>
                  <p className="text-muted-foreground">{platform.description}</p>
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
            <h2 className="text-4xl font-bold mb-4">Our SMM Services</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive social media solutions from strategy to execution
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
              <h2 className="text-4xl font-bold mb-6">Why Social Media Marketing Matters</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Social media is where your customers spend their time. We help you meet them there with engaging content and meaningful interactions.
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
                    <Users className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">300%+</h3>
                  <p className="text-muted-foreground mb-4">Average increase in social engagement</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center">
                      <div className="font-bold text-primary">5K+</div>
                      <div className="text-muted-foreground">Followers Generated</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-primary">250%</div>
                      <div className="text-muted-foreground">Engagement Boost</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="section-padding bg-secondary">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Content We Create</h2>
            <p className="text-xl text-muted-foreground">
              Diverse content formats that engage and convert your audience
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="card-hover text-center">
              <CardContent className="p-6">
                <Camera className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Visual Content</h3>
                <p className="text-muted-foreground text-sm">Eye-catching graphics, photos, and infographics</p>
              </CardContent>
            </Card>
            <Card className="card-hover text-center">
              <CardContent className="p-6">
                <Video className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Video Content</h3>
                <p className="text-muted-foreground text-sm">Engaging videos, reels, and stories</p>
              </CardContent>
            </Card>
            <Card className="card-hover text-center">
              <CardContent className="p-6">
                <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Interactive Posts</h3>
                <p className="text-muted-foreground text-sm">Polls, Q&As, and community engagement</p>
              </CardContent>
            </Card>
            <Card className="card-hover text-center">
              <CardContent className="p-6">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Trending Content</h3>
                <p className="text-muted-foreground text-sm">Timely content that captures current trends</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-primary-foreground">
        <div className="container-width text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Amplify Your Social Presence?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's create a social media strategy that builds communities, drives engagement, and grows your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" asChild>
              <Link to="/contact">Start Your Campaign</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Get Free Audit
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SMM