import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Brain, Globe, Heart, Mail, MapPin, Phone, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Tachyon Labs</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="#sakhi" className="text-sm font-medium hover:text-primary">
              Sakhi
            </Link>
            <Link href="#team" className="text-sm font-medium hover:text-primary">
              Team
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild>
              <Link href="https://sakhi-health.com" target="_blank" rel="noopener noreferrer">
                Visit Sakhi
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-teal-50 to-white py-20 md:py-32">
          <div className="container relative z-10">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Innovative GenAI Technologies for Social Good
                </h1>
                <p className="text-xl text-muted-foreground">
                  A team of AI researchers, social scientists, and software engineers designing technologies that make a
                  difference.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link href="https://sakhi-health.com" target="_blank" rel="noopener noreferrer">
                      Explore Sakhi <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="#about">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=800&width=800"
                  alt="AI for Social Good"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">About Tachyon Labs</h2>
              <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
                We're a team of AI researchers, social scientists, and software engineers designing innovative GenAI
                technologies for social good.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardHeader className="space-y-1 flex flex-col items-center text-center">
                  <Brain className="h-12 w-12 text-primary mb-2" />
                  <CardTitle>AI Research</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p>
                    Developing cutting-edge AI models and algorithms that address real-world challenges in healthcare
                    and social sectors.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="space-y-1 flex flex-col items-center text-center">
                  <Users className="h-12 w-12 text-primary mb-2" />
                  <CardTitle>Social Science</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p>
                    Integrating human-centered approaches to ensure our technologies address the needs of diverse
                    communities.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="space-y-1 flex flex-col items-center text-center">
                  <Globe className="h-12 w-12 text-primary mb-2" />
                  <CardTitle>Global Impact</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p>
                    Creating solutions that scale across borders and cultures to maximize positive social impact
                    worldwide.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Sakhi Section */}
        <section id="sakhi" className="py-20 bg-gradient-to-b from-teal-50 to-white">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=1000&width=1000"
                  alt="Sakhi Platform"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  Flagship Product
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Sakhi: Advancing Digital Health Literacy
                </h2>
                <p className="text-lg text-muted-foreground">
                  Sakhi is our innovative platform advancing digital health literacy among mothers in rural India.
                  Through AI-informed, personalized behavioral interventions on WhatsApp, we're improving women's health
                  literacy and outcomes.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Heart className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>MIT and UNICEF-incubated tech venture</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Launched maternal health pilot with 140+ families in Jalgaon, India</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Menstrual health pilot with 200+ families in Dhaka, Bangladesh</span>
                  </li>
                </ul>
                <Button size="lg" className="mt-4" asChild>
                  <Link href="https://sakhi-health.com" target="_blank" rel="noopener noreferrer">
                    Visit Sakhi Platform <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Team</h2>
              <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
                Meet the experts behind Tachyon Labs who are dedicated to creating innovative AI solutions for social
                good.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="overflow-hidden">
                <div className="relative h-[300px] w-full">
                  <Image src="/placeholder.svg?height=600&width=600" alt="Dhara Mungra" fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>Dhara Mungra</CardTitle>
                  <CardDescription>Founder</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Co-founder of SimPPL, leading teams to develop open-access tools to improve trust on the social
                    internet. MS in Data Science from NYU with expertise in machine learning and data analytics.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>dhara.mungra@gmail.com</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>New York, NY</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="relative h-[300px] w-full">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Swapneel Mehta"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Swapneel Mehta</CardTitle>
                  <CardDescription>Research Lead</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Ph.D. in Data Science from NYU with expertise in machine learning, causal inference, and AI for
                    social good. Co-founder and Chief Scientist at Sakhi, developing AI-informed health literacy
                    solutions.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>swapneel@mit.edu</span>
                    </div>
                    <div className="flex items-center">
                      <Globe className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>mehtaver.se</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container">
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to learn more about Sakhi?</h2>
              <p className="text-xl max-w-2xl mx-auto">
                Discover how our AI-powered platform is advancing digital health literacy among mothers in rural India.
              </p>
              <Button size="lg" variant="secondary" className="mt-4" asChild>
                <Link href="https://sakhi-health.com" target="_blank" rel="noopener noreferrer">
                  Visit Sakhi Platform <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="border-t bg-muted/40">
        <div className="container py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Brain className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">Tachyon Labs</span>
              </div>
              <p className="text-muted-foreground">Innovative GenAI technologies for social good.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-muted-foreground hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#sakhi" className="text-muted-foreground hover:text-primary">
                    Sakhi Platform
                  </Link>
                </li>
                <li>
                  <Link href="#team" className="text-muted-foreground hover:text-primary">
                    Our Team
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Products</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://sakhi-health.com"
                    className="text-muted-foreground hover:text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sakhi Health
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Mail className="mr-2 h-5 w-5 text-muted-foreground" />
                  <a href="mailto:contact@tachyonlabs.ai" className="text-muted-foreground hover:text-primary">
                    contact@tachyonlabs.ai
                  </a>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-2 h-5 w-5 text-muted-foreground" />
                  <a href="tel:+19293184487" className="text-muted-foreground hover:text-primary">
                    +1 (929) 318-4487
                  </a>
                </li>
                <li className="flex items-start">
                  <MapPin className="mr-2 h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">New York, NY</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Tachyon Labs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

