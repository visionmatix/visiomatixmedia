import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Target, Users, Heart, Shield, Lightbulb, Award, Zap } from "lucide-react"

const About = () => {
  const values = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Client Partnership",
      description: "We don't just deliver a service; we become a trusted partner in your journey."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Collaborative Excellence",
      description: "The best work happens when we collaborate as one team with shared purpose."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Integrity & Transparency",
      description: "We build relationships on trust, honesty, and accountability in every interaction."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Sustainable Growth",
      description: "We focus on long-term success for our clients, team, and partners."
    }
  ]

  const teams = [
    {
      name: "Rohit Shinde",
      role: "Founder & CEO, Creative Head",
      image: "/Images/rohit-shinde.jpg"
    },
    {
      name: "Pooja Patil",
      role: "Manager",
      image: "/Images/pooja-patil_11zon.png"

    }
  ]

  const teamDepartments = [
    {
      name: "Our Creative Team",
      role: "Designers bringing brands to life with visuals & storytelling.",
      icon: <Award className="h-12 w-12" />
    },
    {
      name: "Our Marketing Team",
      role: "Experts in SEO, social media, and ads to grow your brand.",
      icon: <Target className="h-12 w-12" />
    },
    {
      name: "Our Tech Team",
      role: "Developers building seamless websites and digital experiences.",
      icon: <Zap className="h-12 w-12" />
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      {/* <section className="section-padding bg-gradient-hero text-primary-foreground"> */}
      {/* <div className="container-width text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">About VisoMatix</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-slide-up">
            Bridging creativity and technology in the digital world
          </p>
        </div> */}
      {/* className="section-padding text-primary-foreground bg-cover bg-center relative h-[70vh]"
  style={{
    backgroundImage: "linear-gradient(rgba(29,52,88,0.6), rgba(29,52,88,0.6)), url('/Images/conatctusBanner.png')",
  }}
      </section> */}


      <section
        className="section-padding text-primary-foreground bg-cover bg-center relative h-[70vh] flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(#2b5173ed, #2b5173c7), url('/Images/aboutus.png')",
        } as React.CSSProperties}
      >
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            About Visiomatix
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-slide-up">
            Bridging creativity and technology in the digital world
          </p>
        </div>
      </section>






      {/* Our Story */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold mb-6" style={{ color: '#1C3458' }}>
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Visiomatix Media was founded with a simple yet powerful idea: to bridge creativity and technology in the digital world. What started as a small creative initiative has grown into a full-scale media and design agency, empowering brands and businesses with innovative solutions.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                From graphic design to digital marketing, branding to web development, we craft experiences that leave a lasting impact. Our journey is driven by passion, innovation, and a commitment to excellence.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-secondary rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">2022</div>
                  <div className="text-sm text-muted-foreground">Founded</div>
                </div>
                <div className="text-center p-6 bg-secondary rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">250+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
              </div>
            </div>

            {/* <div className="relative">
              <div className="aspect-square bg-gradient-primary rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center text-primary-foreground">
                  <Award className="h-20 w-20 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold">Excellence</h3>
                  <p className="opacity-80">Driving Innovation</p>
                </div>
              </div>
            </div> */}



           <div className="text-center px-4">
  <div className="w-full max-w-[40rem] h-[25rem] sm:h-[30rem] md:h-[40rem] rounded-2xl overflow-hidden mx-auto flex items-center justify-center">
    <img
      src="/Images/Ourstorynew.jpg"
      alt="Our Story"
      className="w-full h-full object-contain"
    />
  </div>
</div>




          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-secondary">
        <div className="container-width">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="card-hover">
              <CardContent className="p-8">
                <div className="text-primary mb-4">
                  <Target className="h-12 w-12" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To become a global leader in creative digital solutions by helping brands tell their stories in the most impactful way possible.
                </p>
              </CardContent>
            </Card>
            <Card className="card-hover">
              <CardContent className="p-8">
                <div className="text-primary mb-4">
                  <Zap className="h-12 w-12" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span>Delivering Results: Innovative, high-quality services focused on success.</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span>Building Partnerships: Long-term relationships based on trust & transparency.</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span>Fostering Talent: Empowering the next generation of digital creators.</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-8">
                  <div className="text-primary mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">The Founder's Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Visiomatix Media was founded by <strong>Rohit Shinde</strong>, a passionate graphic designer and entrepreneur from Nashik. With years of experience in digital arts, branding, and creative storytelling, Rohit envisioned building an agency that creates experiences that speak volumes.
              </p>
              <p className="text-muted-foreground mb-6">
                His journey from working as a graphic designer at Shaurya Digital Arts to becoming the Founder & CEO of Visiomatix Media is a story of passion, persistence, and innovation.
              </p>
              <div className="p-6 bg-primary/5 rounded-lg border-l-4 border-primary">
                <p className="italic text-primary">
                  "We believe that great design and strategic thinking can transform any business. Our mission is to help brands connect with their audience in meaningful ways."
                </p>
                <p className="text-sm text-muted-foreground mt-2">- Rohit Shinde, Founder & CEO</p>
              </div>
            </div>
            <div className="text-center">
              <div className="w-64 h-64 mx-auto mb-6 rounded-full overflow-hidden shadow-strong">
                <img
                  src="/Images/rohit-shinde.jpg"
                  alt="Rohit Shinde"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-primary">Rohit Shinde</h3>
              <p className="text-muted-foreground">Founder & CEO, Creative Head</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet the Visionaries Behind VisoMatix Media</h2>
            <p className="text-xl text-muted-foreground">Our talented team of professionals</p>
          </div>

          {/* Leadership Team */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {teams.map((member, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-medium">
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
            ))}
          </div>

          {/* Department Teams */}
          <div className="grid md:grid-cols-3 gap-8">
            {teamDepartments.map((team, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-8 text-center">
                  <div className="text-primary mb-6 flex justify-center">
                    {team.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{team.name}</h3>
                  <p className="text-muted-foreground">{team.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About