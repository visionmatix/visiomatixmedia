import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Carousel from "@/components/Carousel"
import { Link } from "react-router-dom"
import { useState } from "react";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import axios from "axios";
import {
  TrendingUp,
  Users,
  PenTool,
  MousePointer,
  Search,
  Globe,
  Star,
  Quote,
  ArrowRight,
  CheckCircle,
  Target,
  Zap,
  Award
} from "lucide-react"
import heroImage from "@/assets/hero-bg.jpg"
// import heroImage from "/Images/homepage.png"
{/* <div
  className="w-full h-[30rem] md:h-[40rem] rounded-2xl bg-cover bg-center mx-auto"
  style={{ backgroundImage: "url('/Images/homepage.png')" }}
></div> */}


const Home = () => {
  const [isSubmitting, setIsSubmitting] = useState(false); // ✅ for button disable

  const services = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Digital Marketing",
      description: "We help businesses grow with targeted marketing strategies.",
      href: "/services/digital-marketing"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Social Media Marketing",
      description: "Engage your audience and boost your brand online.",
      href: "/services/smm"
    },
    {
      icon: <PenTool className="h-8 w-8" />,
      title: "Content Marketing",
      description: "Create powerful content that speaks to your audience.",
      href: "/services/content-marketing"
    },
    {
      icon: <MousePointer className="h-8 w-8" />,
      title: "PPC",
      description: "Drive traffic instantly with our PPC expertise.",
      href: "/services/paid-media"
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "SEO",
      description: "Boost your search visibility and rank higher on Google.",
      href: "/services/seo"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Website Development",
      description: "Get a professional website tailored to your business.",
      href: "/services/website-development"
    }
  ]

  const teamMembers = [
    {
      name: "Rohit Shinde",
      role: "CEO & Founder",
      image: "/Images/rohit-shinde.jpg"
    },
    {
      name: "Pooja Patil",
      role: "Manager",
      image: "/Images/pooja-patil-new.jpg"
    },
    {
      name: "Creative Team",
      role: "Lead Developer",
      image: "/Images/team3.jpg"
    }
  ]

  const testimonials = [
    {
      name: "Avinash",
      role: "Co-founder of XYZ",
      content: "Visiomatix Media has transformed our brand presence! Their innovative digital marketing strategies and technical expertise helped us reach the right audience, boost engagement, and achieve measurable results.",
      rating: 5
    },
    {
      name: "Priya",
      role: "Marketing Director",
      content: "Excellent service and professional team! They delivered beyond our expectations and helped us achieve our marketing goals efficiently.",
      rating: 5
    },
    {
      name: "Rajesh",
      role: "Business Owner",
      content: "Outstanding results! Our website traffic increased by 200% and lead generation improved significantly after working with them.",
      rating: 5
    }
  ]

  const blogPosts = [
    {
      title: "Digital Marketing Trends 2025",
      description: "Stay ahead with the latest digital marketing strategies to grow your business in 2025. Learn how SEO, content, and AI are shaping the industry.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
    },
    {
      title: "Boost Engagement with Social Media",
      description: "Discover tips to increase engagement and build stronger connections with your audience through innovative social media campaigns.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=250&fit=crop"
    },
    {
      title: "Why Branding Matters",
      description: "Learn why branding is essential for long-term success and how to create a strong identity that connects with customers.",
      image: "https://images.unsplash.com/photo-1553830591-42e4fd7035d5?w=400&h=250&fit=crop"
    }
  ]
  const [form, setForm] = useState({
    name: "",
    email: "",
    phoneNo: "",
    serviceInterested: "",
    countryCode:"",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value
    });
  };

  const handleSelectChange = (value: string) => {
    setForm({
      ...form,
      serviceInterested: value
    });
  };


 
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    // Prepare FormData
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("countryCode", form.countryCode);
    formData.append("phoneNo", form.phoneNo);
    formData.append("serviceInterested", form.serviceInterested);
    formData.append("message", form.message);

    const response = await axios.post(
      "http://localhost:8084/api/contact/send",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data", // important
        },
      }
    );

    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Sent Application Successfully!",
    });

    setForm({
      name: "",
      email: "",
      phoneNo: "",
      serviceInterested: "",
      countryCode: "",
      message: "",
    });
  } catch (err) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Error saving contact!",
    });
  } finally {
    setIsSubmitting(false);
  }
};



   
   

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative z-10 text-center text-primary-foreground animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Welcome to Visiomatix Media
            {/* Welcome to <span className="gradient-text">VisoMatix</span> */}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Innovating with Technology for a Smarter Future
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="xl" asChild>
              <Link to="/services/digital-marketing">
                Our Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            {/* <Button variant="outline" size="xl" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/contact">Get Started</Link>
            </Button> */}

            <Button
              variant="outline"
              size="xl"
              className="text-[#141512] border-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <Link to="/contact">Get Started</Link>
            </Button>


          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold mb-6">About Us</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Visiomatix Media, a leading digital agency based in Nashik, Maharashtra, is your key to a stronger brand presence. We blend human-centric thinking with technology to create media strategies that connect with your audience and drive results.
              </p>
              {/* <p className="text-muted-foreground mb-8"> */}
              <p className="text-lg text-muted-foreground mb-6">
                Our team of experts works tirelessly to deliver data-informed solutions that cut through the digital clutter and turn attention into real engagement. We specialize in empowering small and medium-sized businesses across diverse industries.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
              </div>
            </div>
{/*             
            <div className="relative">
              <div className="aspect-square bg-gradient-primary rounded-2xl p-8 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="bg-primary-foreground/20 rounded-lg p-4 flex items-center justify-center">
                    <Target className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <div className="bg-primary-foreground/20 rounded-lg p-4 flex items-center justify-center">
                    <Zap className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <div className="bg-primary-foreground/20 rounded-lg p-4 flex items-center justify-center">
                    <Award className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <div className="bg-primary-foreground/20 rounded-lg p-4 flex items-center justify-center">
                    <CheckCircle className="h-12 w-12 text-primary-foreground" />
                  </div>
                </div>
              </div>
            </div> */}



  <div
  className="w-full" 
  style={{
    height: "70vh", // half the viewport height
    borderRadius: "1rem", // rounded corners
    // backgroundImage: "url('/Images/aboutsectionpage.png')",
    backgroundImage: "url('/Images/about-office.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
></div>





         


          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-width">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We offer comprehensive digital solutions to help your business thrive in the digital landscape
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
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Button variant="ghost" asChild className="p-0">
                    <Link to={service.href} className="text-primary hover:text-accent">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-secondary">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Team Section</h2>
            <p className="text-xl text-muted-foreground">Meet our talented team of professionals</p>
          </div>
          <Carousel autoplay={true} autoplayDelay={4000}>
            {teamMembers.map((member, index) => (
              <div key={index} className="px-4">
                <Card className="card-hover max-w-sm mx-auto">
                  <CardContent className="p-8 text-center">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-muted-foreground">{member.role}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Testimonials</h2>
            <p className="text-xl text-muted-foreground">What our clients say about us</p>
          </div>
          <Carousel autoplay={true} autoplayDelay={5000}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4">
                <Card className="card-hover max-w-2xl mx-auto">
                  <CardContent className="p-8 text-center">
                    <Quote className="h-8 w-8 text-primary mx-auto mb-6" />
                    <p className="text-lg mb-6 italic">"{testimonial.content}"</p>
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-accent fill-accent" />
                      ))}
                    </div>
                    <div>
                      <div className="font-semibold text-primary">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* Blog Section */}
      <section className="section-padding bg-secondary">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Blog</h2>
            <p className="text-xl text-muted-foreground">Latest insights and industry trends</p>
          </div>
          <Carousel autoplay={true} autoplayDelay={6000}>
            {blogPosts.map((post, index) => (
              <div key={index} className="px-4">
                <Card className="card-hover max-w-lg mx-auto">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                    <p className="text-muted-foreground mb-4">{post.description}</p>
                    <Button variant="ghost" className="p-0 text-primary hover:text-accent">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <Globe className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <span>Office No. 03,Om Sai Apartment, Davkhar nagar,Chandawd , Nashik
                    <br /> Chandawd , Nashik
                    – 423101, Maharashtra, India
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <span> +91 8999 101916</span>

                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <PenTool className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <span>info@visiomatixmedia.net</span>
                </div>
              </div>
            </div>
            <Card className="card-hover">
              <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
  {/* Name */}
  <div className="space-y-2">
    <Label htmlFor="name">Name *</Label>
    <Input
      id="name"
      placeholder="Enter your name"
      value={form.name}
      onChange={handleChange}
      required
    />
  </div>

  {/* Email */}
  <div className="space-y-2">
    <Label htmlFor="email">Email *</Label>
    <Input
      id="email"
      type="email"
      placeholder="Enter your email"
      value={form.email}
      onChange={handleChange}
      required
    />
  </div>

  {/* Country Code */}
  <div className="space-y-2">
    <Label htmlFor="countryCode">Country Code *</Label>
    <Select
      value={form.countryCode}
      onValueChange={(value) =>
        setForm((prev) => ({ ...prev, countryCode: value }))
      }
      required
    >
      <SelectTrigger>
        <SelectValue placeholder="-- Select Country Code --" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="+91">+91 India</SelectItem>
        <SelectItem value="+1">+1 USA</SelectItem>
        <SelectItem value="+44">+44 UK</SelectItem>
        <SelectItem value="+61">+61 Australia</SelectItem>
        {/* Add more as needed */}
      </SelectContent>
    </Select>
  </div>

  {/* Phone Number */}
  <div className="space-y-2">
    <Label htmlFor="phoneNo">Phone No *</Label>
    <Input
      id="phoneNo"
      placeholder="Enter your phone number"
      value={form.phoneNo}
      onChange={handleChange}
      required
    />
  </div>

  {/* Services Interested */}
  <div className="space-y-2">
    <Label htmlFor="serviceInterested">Services Interested *</Label>
    <Select
      value={form.serviceInterested}
      onValueChange={(value) =>
        setForm((prev) => ({ ...prev, serviceInterested: value }))
      }
      required
    >
      <SelectTrigger>
        <SelectValue placeholder="-- Select a Service --" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Digital Marketing">Digital Marketing</SelectItem>
        <SelectItem value="SMM">Social Media Marketing</SelectItem>
        <SelectItem value="Content Marketing">Content Marketing</SelectItem>
        <SelectItem value="PPC">PPC</SelectItem>
        <SelectItem value="SEO">SEO</SelectItem>
        <SelectItem value="Web Development">Website Development</SelectItem>
      </SelectContent>
    </Select>
  </div>

  {/* Message */}
  <div className="space-y-2">
    <Label htmlFor="message">Message *</Label>
    <Textarea
      id="message"
      placeholder="Tell us about your project..."
      value={form.message}
      onChange={handleChange}
      required
    />
  </div>

  {/* Submit Button */}
  <Button
    variant="primary"
    size="lg"
    className="w-full flex justify-center items-center"
    type="submit"
    disabled={isSubmitting}
  >
    {isSubmitting ? (
      <>
        <svg
          className="animate-spin h-5 w-5 mr-2 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
          ></path>
        </svg>
        Sending...
      </>
    ) : (
      "Send Message"
    )}
  </Button>
</form>


              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home