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
  MousePointer2,
  AlertCircle
} from "lucide-react"

const PaidMediaNew = () => {
  const problems = [
    "You're spending money on ads but not seeing conversions.",
    "You're unsure which keywords to bid on or who to target.",
    "Your competitors' ads seem to get more clicks and better results.",
    "You're getting website traffic, but it's not the right kind.",
    "The world of ad platforms feels too complex and time-consuming to manage."
  ]

  const benefits = [
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Instant Visibility",
      description: "Get your business in front of customers at the exact moment they are searching for your product or service."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Qualified Traffic",
      description: "We attract high-intent visitors who are most likely to convert, filling your sales funnel with quality leads."
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Measurable ROI",
      description: "We track and report on every aspect of your campaign, so you know exactly how your investment is performing."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Complete Control",
      description: "Our strategies allow you to precisely target your ideal audience by location, demographics, interest, and behavior."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Scalable Growth",
      description: "Our campaigns are designed to be scaled up or down based on your business needs and marketing goals."
    }
  ]

  const process = [
    {
      step: "01",
      title: "Research & Strategy",
      description: "We start with a deep dive into your business, your competitors, and your audience. We then perform extensive keyword research to build a custom ad strategy that targets high-value opportunities."
    },
    {
      step: "02",
      title: "Campaign Creation",
      description: "We craft compelling ad copy, design engaging visuals, and set up your campaigns on the right platforms with precision targeting and optimized bidding strategies."
    },
    {
      step: "03",
      title: "Launch & Management",
      description: "We launch your campaigns and actively monitor their performance. We handle all daily management tasks, including bid adjustments, A/B testing, and budget allocation to ensure maximum efficiency."
    },
    {
      step: "04",
      title: "Optimization & Reporting",
      description: "We don't set it and forget it. We continuously analyze campaign data, make real-time adjustments, and provide transparent reports, ensuring your ad spend is always working to its full potential."
    }
  ]

  const services = [
    {
      icon: <Search className="h-8 w-8" />,
      title: "Google Ads Management",
      description: "We manage both Search and Display campaigns to get your business in front of customers on Google and its network."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Social Media Advertising",
      description: "We create and manage highly targeted ad campaigns on platforms like Facebook, Instagram, LinkedIn, and more."
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "E-commerce Ads",
      description: "We specialize in Google Shopping and other product-focused campaigns to drive sales for your online store."
    },
    {
      icon: <MousePointer2 className="h-8 w-8" />,
      title: "Retargeting Campaigns",
      description: "We bring back high-intent visitors who have previously shown interest in your brand."
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Conversion Tracking",
      description: "We ensure all conversions are accurately tracked and reported, giving you a clear view of your ROI."
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
              <h2 className="text-2xl md:text-3xl mb-6 opacity-90">
                Is Your Ad Spend Driving Real Results?
              </h2>
              <p className="text-lg mb-8 opacity-80">
                You know that paid advertising is a fast track to growth, but are you getting a clear return on your investment? Without an expert hand, ad campaigns can feel like a money pit—burning through your budget without generating qualified leads or sales.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="accent" size="lg" asChild>
                  <Link to="/contact">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>

                <Button variant="outline" size="lg"   className="text-black">
                   <Link to="/contact">Free Consultation</Link>
                </Button>


              </div>
            </div>
            {/* <div className="relative">
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
                    <DollarSign className="h-12 w-12 text-primary-foreground" />
                  </div>
                </div>
              </div>
            </div> */}

              <div className="relative h-[80vh] rounded-2xl overflow-hidden flex justify-center">
              <img
                src="/Images/paid-media-adv_11zon.png"
                alt="Paid Media"
                className="w-[100%] object-cover object-center"
              />
            </div>
            paid-media-adv_11zon





          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="section-padding bg-secondary">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Does this sound familiar?</h2>
            <p className="text-xl text-muted-foreground">
              It's frustrating to invest in paid advertising without a clear ROI. It's time to stop guessing and start getting measurable results from every dollar you spend.
            </p>
          </div>
          <div className="grid md:grid-cols-1 gap-6 max-w-4xl mx-auto">
            {problems.map((problem, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <AlertCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                    <p className="text-lg">{problem}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What You Gain with Visiomatix Media</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              At Visiomatix Media, we transform your ad spend from a cost center into a powerful revenue engine. We believe in building smart, efficient campaigns that deliver instant visibility and long-term growth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 text-primary-foreground">
                    {benefit.icon}
                  </div>
                  <div className="flex items-center mb-3">
                    <CheckCircle className="h-5 w-5 text-accent mr-2" />
                    <h3 className="text-lg font-semibold">{benefit.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-secondary">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How We Work: Our 4-Step Process</h2>
            <p className="text-xl text-muted-foreground">
              Our PPC process is built on a foundation of data, expertise, and a commitment to your success. Here's how we make your ad campaigns work for you:
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {process.map((step, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
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
      <section className="section-padding">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core PPC Services</h2>
            <p className="text-xl text-muted-foreground">
              We specialize in a variety of paid advertising channels to build a complete and powerful strategy for your brand.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-hover text-center">
                <CardContent className="p-8">
                  <div className="text-primary mb-4 flex justify-center">
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

      {/* ROI Section */}
      <section className="section-padding bg-secondary">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Card className="card-hover">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <DollarSign className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-primary">500%+</h3>
                  <p className="text-muted-foreground mb-4">Average return on ad spend (ROAS)</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center">
                      <div className="font-bold text-primary text-xl">24hrs</div>
                      <div className="text-muted-foreground">Campaign Launch</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-primary text-xl">95%</div>
                      <div className="text-muted-foreground">Success Rate</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div>
              <h2 className="text-4xl font-bold mb-6">Maximize Your Advertising ROI</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our data-driven approach ensures every dollar spent on advertising delivers maximum return on investment through precise targeting, continuous optimization, and transparent reporting.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Target className="h-12 w-12 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Targeting</h4>
                  <p className="text-sm text-muted-foreground">Precision audience targeting</p>
                </div>
                <div className="text-center">
                  <BarChart3 className="h-12 w-12 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Tracking</h4>
                  <p className="text-sm text-muted-foreground">Real-time analytics</p>
                </div>
                <div className="text-center">
                  <Zap className="h-12 w-12 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Optimization</h4>
                  <p className="text-sm text-muted-foreground">Continuous improvement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-primary-foreground">
        <div className="container-width text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get a Clear Return on Your Ad Spend?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Investing in PPC is a direct way to drive growth. Our custom strategies are built to provide a clear and measurable return on your investment. Don't let your ad spend go to waste.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
           
             <Button variant="outline" size="lg"   className="text-black">
                   <Link to="/contact"> Contact us today for a free consultation</Link>
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

export default PaidMediaNew