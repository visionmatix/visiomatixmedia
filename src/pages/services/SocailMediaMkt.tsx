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
  Calendar,
  Search,
  Palette,
  BarChart3,
  Rocket,
  AlertCircle,
  ThumbsDown,
  DollarSign,
  Eye
} from "lucide-react"

const SocailMediaMkt = () => {
  const problems = [
    {
      icon: <ThumbsDown className="h-6 w-6" />,
      text: "You're posting regularly but seeing barely any engagement."
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      text: "You're getting likes, but they're not turning into leads or sales."
    },
    {
      icon: <Target className="h-6 w-6" />,
      text: "You're guessing your way through Ads Manager without a clear audience strategy."
    },
    {
      icon: <Eye className="h-6 w-6" />,
      text: "You're running a great business, but hardly anyone knows it."
    }
  ]

  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "More Leads & Sales",
      description: "We create targeted campaigns that attract qualified prospects and turn followers into customers."
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Stronger Brand Visibility", 
      description: "We build a consistent and professional presence across the right platforms to expand your reach."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Engaged Communities",
      description: "We foster active interactions that build loyalty and trust, transforming your audience into a community."
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Smarter Use of Ad Spend",
      description: "Our data-driven strategies maximize your ROI, ensuring every dollar works harder."
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Fresh, Relevant Content",
      description: "Our team creates brilliant posts, videos, and visuals that capture attention and stand out."
    }
  ]

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description: "We start by understanding your business, target audience, and goals. Then, we create a customized roadmap to align your social media with your brand vision.",
      icon: <Search className="h-8 w-8" />
    },
    {
      number: "02", 
      title: "Content Creation",
      description: "From visuals and videos to captions and stories, our team produces high-quality, engaging content tailored to your audience and platforms.",
      icon: <Palette className="h-8 w-8" />
    },
    {
      number: "03",
      title: "Execution & Engagement", 
      description: "We publish consistently, monitor performance, and actively engage with your community to build relationships and trust.",
      icon: <Rocket className="h-8 w-8" />
    },
    {
      number: "04",
      title: "Optimization & Growth",
      description: "We analyze results, track ROI, and refine strategies to keep improving performance—so your brand doesn't just grow, it thrives.",
      icon: <BarChart3 className="h-8 w-8" />
    }
  ]

  const platforms = [
    {
      name: "Facebook & Meta",
      description: "We leverage powerful analytics to generate leads and drive conversions.",
      color: "bg-blue-600"
    },
    {
      name: "Instagram", 
      description: "We use visual storytelling to build your brand and turn followers into customers.",
      color: "bg-purple-600"
    },
    {
      name: "YouTube",
      description: "We manage short-form and long-form video to capture attention and build lasting relationships.",
      color: "bg-red-600"
    },
    {
      name: "LinkedIn",
      description: "We craft targeted strategies to position your brand as an industry leader and attract high-value prospects.",
      color: "bg-blue-700"
    },
    {
      name: "Pinterest & X",
      description: "We manage niche platforms to drive traffic and build a strong brand voice where your audience hangs out.",
      color: "bg-gray-900"
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
                Social Media Marketing
              </h1>
              <p className="text-xl mb-8 opacity-90">
                It's Time for a Strategy That Delivers Real Growth and ROI
              </p>
              <p className="text-lg mb-8 opacity-80">
                Maybe you've dabbled with boosted posts or thrown some budget at social media ads, but what about the results? Underwhelming. The truth is, building a successful social media presence takes more than a few clicks and catchy captions. It requires a strategic approach.
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

            {/* <div className="relative">
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
            </div> */}

         
            <div className="relative h-[80vh] rounded-2xl overflow-hidden flex justify-center">
              <img
                src="/Images/social-media-marketing_11zon.png"
                alt="Paid Media"
                className="w-[100%] object-cover object-center"
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
              Without a clear strategy, growing your business on social media can be unnecessarily challenging and time-consuming… but it doesn't have to be that way.
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
              At Visiomatix Media, we aim to simplify social for you and make it a powerful, profitable tool for your business. We believe your social media presence should be a core asset, not a source of frustration.
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
              At Visiomatix Media, we keep things simple, transparent, and result-focused. Here's how we take your social media from ordinary to extraordinary:
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

      {/* Platform Services Section */}
      <section className="section-padding bg-secondary">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Platform-Specific Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choosing the right social media channels is the first step toward a successful strategy. We don't believe in a one-size-fits-all approach. We craft a full suite of services designed to deliver real value on the platforms that matter most to your business.
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

      {/* Final CTA Section */}
      <section className="section-padding bg-gradient-primary text-primary-foreground">
        <div className="container-width text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Stop Guessing and Start Growing?</h2>
          <p className="text-xl mb-6 opacity-90 max-w-3xl mx-auto">
            We know that Affordable Digital Marketing is a key concern. Because our services are custom-built, our Social Media Management Costs and Social Media Advertising Costs vary. We focus on delivering maximum ROI for every dollar you spend, ensuring our work is a smart investment in your future.
          </p>
          <p className="text-lg mb-8 opacity-80">
            Let's turn your social media into a growth engine. Book a free consultation today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" asChild>
              <Link to="/contact">Book Free Consultation</Link>
            </Button>
           
             <Button
                  variant="outline"
                  size="lg"
                  className="border-[#1C3458] text-[#1C3458] hover:bg-[#1C3458] hover:text-white"
                  asChild
                >
                  <Link to="/contact">Get Custom Quote</Link>
                </Button>
           Get Custom Quote
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocailMediaMkt;
