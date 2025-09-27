
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Link } from "react-router-dom"


import {
  PenTool,
  BookOpen,
  Video,
  FileText,
  Mail,
  FileBarChart,
  CheckCircle,
  ArrowRight,
  Target,
  TrendingUp,
  Users,
  Search,
  MessageSquare,
  BarChart,
  X
} from "lucide-react"

const ContentMarketing = () => {
  const problems = [
    "You're creating content but seeing very few leads or sales from it.",
    "You don't know what topics to write about to attract your target audience.",
    "Your blog posts and articles get very little organic traffic or engagement.",
    "Your content feels generic and doesn't stand out from your competitors.",
    "You can't keep up with a consistent and high-quality content schedule."
  ]

  const benefits = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Thought Leadership",
      description: "We establish your brand as an expert in your industry, earning trust and credibility with your audience."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Qualified Leads",
      description: "We attract prospects who are actively looking for solutions you provide, filling your sales funnel with high-quality leads."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Sustainable SEO Growth",
      description: "High-quality, strategic content is the engine of effective SEO, providing long-term, compounding organic traffic."
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Deeper Audience Connection",
      description: "We craft compelling stories and valuable information that build a loyal community and a lasting relationship with your customers."
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Increased Conversions",
      description: "Our content is expertly crafted to guide visitors through the sales funnel, turning passive interest into real business."
    }
  ]

  const process = [
    {
      step: "01",
      title: "Strategy & Research",
      description: "We start with a deep dive into your business, audience, and SEO keywords. Then, we develop a comprehensive content strategy that aligns with your goals and answers your audience's most pressing questions."
    },
    {
      step: "02",
      title: "Content Planning & Creation",
      description: "We build a strategic editorial calendar and produce a wide range of content, including blog posts, articles, web copy, and more. All content is written with your brand voice and audience in mind."
    },
    {
      step: "03",
      title: "Optimization & Publishing",
      description: "Every piece of content is optimized for search engines and designed for maximum readability. We handle all the details of publishing, ensuring your content is seen by the right people at the right time."
    },
    {
      step: "04",
      title: "Distribution & Analysis",
      description: "We don't just create content; we make sure it gets noticed. We distribute your content across the right channels and continuously analyze its performance, using data to refine our strategy for better results."
    }
  ]

  const services = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Blog Content",
      description: "Authority-building articles and guides that attract organic traffic and establish your brand as an industry leader."
    },
    {
      icon: <PenTool className="h-8 w-8" />,
      title: "Website Copywriting",
      description: "Compelling copy for your service pages, about page, and landing pages that turns visitors into customers."
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Email Marketing",
      description: "Engaging and informative email campaigns that nurture leads and build long-term customer relationships."
    },
    {
      icon: <FileBarChart className="h-8 w-8" />,
      title: "Case Studies & Whitepapers",
      description: "In-depth, persuasive content that builds trust and showcases your expertise."
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: "Visual Content",
      description: "Creative video scripts, infographics, and visuals that engage your audience on any platform."
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
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 opacity-90">
                Tired of Content That Doesn't Convert?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                In today's digital world, content is everywhere, but truly effective content is rare. You may have a blog and a website, but without a clear strategy, your content can feel like noise in a crowded room—failing to attract, engage, and convert your ideal customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="accent" size="lg" asChild>
                  <Link to="/contact">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
               
                {/* <Button variant="accent" size="lg" asChild>
               Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            */}

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
            {/*<div className="relative">
              <div className="aspect-square bg-primary-foreground/10 rounded-2xl p-8 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="bg-primary-foreground/20 rounded-lg p-4 flex items-center justify-center">
                    <PenTool className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <div className="bg-primary-foreground/20 rounded-lg p-4 flex items-center justify-center">
                    <Target className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <div className="bg-primary-foreground/20 rounded-lg p-4 flex items-center justify-center">
                    <TrendingUp className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <div className="bg-primary-foreground/20 rounded-lg p-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-primary-foreground" />
                  </div>
                </div>
               </div>  
               </div> */}
         
         
            {/* <div className="relative h-[75vh] rounded-2xl overflow-hidden flex justify-center">
              <img
                src="/Images/content-marketing.png"
                alt="Paid Media"
                className="w-[80%] object-cover object-center"
              />
            </div> */}


            <div className="relative h-[75vh] rounded-2xl overflow-hidden flex justify-center">
  <img
    src="/Images/content-marketing.png"
    alt="Paid Media"
    className="w-[80%] object-cover object-center -scale-x-100"
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
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {problems.map((problem, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-destructive rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <X className="h-4 w-4 text-destructive-foreground" />
                    </div>
                    <p className="text-lg text-foreground">{problem}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Content marketing can feel like a guessing game. It's time to stop simply creating and start telling a story that builds your business.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-secondary">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What You Gain with Visiomatix Media</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              At Visiomatix Media, we believe every piece of content should have a purpose. We transform your content strategy into a powerful asset that builds authority, drives traffic, and generates revenue.
            </p>
          </div>
          <div className="space-y-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 text-primary-foreground">
                      {benefit.icon}
                    </div>
                    <div>
                      <div className="flex items-center space-x-3 mb-3">
                        <CheckCircle className="h-6 w-6 text-accent" />
                        <h3 className="text-xl font-semibold">{benefit.title}</h3>
                      </div>
                      <p className="text-muted-foreground text-lg">{benefit.description}</p>
                    </div>
                  </div>
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
              Our content marketing process is built to be simple, transparent, and driven by results. Here's how we make your content work for you:
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {process.map((step, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-primary-foreground">{step.step}</span>
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
      <section className="section-padding bg-secondary">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Content Services</h2>
            <p className="text-xl text-muted-foreground">
              We specialize in a variety of content types designed to build your brand and drive conversions.
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
          <h2 className="text-4xl font-bold mb-4">Ready to Tell Your Story and Grow Your Business?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            We believe content marketing is a powerful, long-term investment. Our custom-built strategies are designed to provide a clear and measurable return on your investment.
          </p>
          <p className="text-lg mb-8 opacity-90">
            Don't let your content go to waste. Contact us today for a free consultation and let's discuss how we can build a content strategy that drives real growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" asChild>
              <Link to="/contact">Free Consultation</Link>
            </Button>


            <Button
              variant="outline"
              size="lg"
              className="border-[#1C3458] text-[#1C3458] hover:bg-[#1C3458] hover:text-white"
              asChild
            >
              <Link to="/contact"> View Our Work  </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContentMarketing