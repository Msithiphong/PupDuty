import Link from "next/link"
import Image from "next/image"
import { PawPrint, Check, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#232323] text-[#e2b714]">
      <header className="sticky top-0 z-40 w-full border-b border-[#393939] bg-[#232323]/80 backdrop-blur-sm">
        <div className="flex h-16 items-center justify-between p-6 py-4">
          <div className="flex items-center gap-2">
            <PawPrint className="h-8 w-8 text-[#e2b714]" />
            <span className="text-xl font-bold">PupDuty</span>
          </div>

          <nav className="hidden md:flex items-center justify-center gap-6">
            <Link href="#features" className="text-sm font-medium text-[#d1d0c5] hover:text-[#e2b714]">
              Features
            </Link>
            <Link href="#testimonials" className="text-sm font-medium text-[#d1d0c5] hover:text-[#e2b714]">
              Testimonials
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-[#d1d0c5] hover:text-[#e2b714]">
              Pricing
            </Link>
            <Link href="#contact" className="text-sm font-medium text-[#d1d0c5] hover:text-[#e2b714]">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="hidden md:flex border-[#e2b714] text-[#e2b714] hover:bg-[#e2b714] hover:text-[#232323]"
            >
              Log in
            </Button>
            <Button className="hidden md:flex bg-[#e2b714] text-[#232323] hover:bg-[#e2b714]/90">Sign up</Button>
            <Button variant="ghost" size="icon" className="md:hidden text-[#d1d0c5]">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="inline-flex bg-[#e2b714]/10 text-[#e2b714] border-[#e2b714]/20">
                    Never miss a dog duty again
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter text-[#d1d0c5] sm:text-5xl xl:text-6xl/none">
                    Keep Your Pup Happy & Healthy
                  </h1>
                  <p className="max-w-[600px] text-[#d1d0c5]/80 md:text-xl">
                    PupDuty helps you and your roommates track when your dog has been walked, fed, or groomed. No more
                    double-feeding or missed walks!
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-[#e2b714] text-[#232323] hover:bg-[#e2b714]/90">Get Started for Free</Button>
                  <Button
                    variant="outline"
                    className="border-[#e2b714] text-[#e2b714] hover:bg-[#e2b714] hover:text-[#232323]"
                  >
                    See How It Works
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-[350px] md:h-[450px] md:w-[450px]">
                  <Image
                    src="/koda.jpg"
                    alt="Dog with happy owners using PupDuty app"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-[#2a2a2a] flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-[#d1d0c5] sm:text-5xl">
                  Everything Your Dog Needs
                </h2>
                <p className="max-w-[900px] text-[#d1d0c5]/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  PupDuty makes it easy to keep track of your dog's daily needs and share responsibilities with others.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-3 md:gap-12">
              <div className="flex flex-col items-center space-y-4 rounded-lg border border-[#393939] bg-[#232323] p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#e2b714]/10">
                  <PawPrint className="h-8 w-8 text-[#e2b714]" />
                </div>
                <h3 className="text-xl font-bold text-[#d1d0c5]">Track Walks</h3>
                <p className="text-center text-[#d1d0c5]/80">
                  Log walks, track routes, and set reminders so your pup gets the exercise they need.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border border-[#393939] bg-[#232323] p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#e2b714]/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-[#e2b714]"
                  >
                    <path d="M11 17a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"></path>
                    <path d="M12 10a3 3 0 0 0-3 3"></path>
                    <path d="M12 4a8 8 0 0 1 8 8 8 8 0 1 1-16 0 8 8 0 0 1 8-8Z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#d1d0c5]">Feeding Schedule</h3>
                <p className="text-center text-[#d1d0c5]/80">
                  Set feeding times, track portions, and ensure your dog is never over or underfed.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border border-[#393939] bg-[#232323] p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#e2b714]/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-[#e2b714]"
                  >
                    <path d="M7 21h10"></path>
                    <path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"></path>
                    <path d="M12 3a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v1a1 1 0 0 0 1 1Z"></path>
                    <path d="M6.6 4.2a1 1 0 0 0 1.4-1.4l-.7-.7a1 1 0 0 0-1.4 1.4l.7.7Z"></path>
                    <path d="M17.4 4.2l.7-.7a1 1 0 0 0-1.4-1.4l-.7.7a1 1 0 0 0 1.4 1.4Z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#d1d0c5]">Grooming Tracker</h3>
                <p className="text-center text-[#d1d0c5]/80">
                  Keep track of baths, nail trims, and other grooming needs to keep your pup looking their best.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-[#d1d0c5] sm:text-5xl">Loved by Dog Owners</h2>
                <p className="max-w-[900px] text-[#d1d0c5]/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See what our users have to say about how PupDuty has improved their lives and their dogs' lives.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 md:gap-12">
              <Card className="bg-[#2a2a2a] border-[#393939] text-[#d1d0c5]">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-[#e2b714]/10 flex items-center justify-center">
                      <span className="text-[#e2b714] font-bold">JM</span>
                    </div>
                    <div>
                      <CardTitle className="text-[#d1d0c5]">Jessica Miller</CardTitle>
                      <CardDescription className="text-[#d1d0c5]/60">Dog Mom to Max</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[#d1d0c5]/80">
                    "PupDuty has been a game-changer for our household. No more arguing about who fed the dog last or if
                    he's been walked. Everyone stays on the same page!"
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-[#2a2a2a] border-[#393939] text-[#d1d0c5]">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-[#e2b714]/10 flex items-center justify-center">
                      <span className="text-[#e2b714] font-bold">TJ</span>
                    </div>
                    <div>
                      <CardTitle className="text-[#d1d0c5]">Thomas Johnson</CardTitle>
                      <CardDescription className="text-[#d1d0c5]/60">Owner of Bella</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[#d1d0c5]/80">
                    "As roommates with different schedules, we were constantly miscommunicating about our dog's care.
                    PupDuty solved that problem instantly!"
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-[#2a2a2a] border-[#393939] text-[#d1d0c5]">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-[#e2b714]/10 flex items-center justify-center">
                      <span className="text-[#e2b714] font-bold">SP</span>
                    </div>
                    <div>
                      <CardTitle className="text-[#d1d0c5]">Sarah Parker</CardTitle>
                      <CardDescription className="text-[#d1d0c5]/60">Proud owner of Rocky</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[#d1d0c5]/80">
                    "I travel for work, and PupDuty helps me coordinate with my dog sitter. I can check in anytime to
                    see that Rocky is getting his walks and meals."
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-[#2a2a2a] border-[#393939] text-[#d1d0c5]">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-[#e2b714]/10 flex items-center justify-center">
                      <span className="text-[#e2b714] font-bold">DW</span>
                    </div>
                    <div>
                      <CardTitle className="text-[#d1d0c5]">David Wilson</CardTitle>
                      <CardDescription className="text-[#d1d0c5]/60">Dog Dad to Luna</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[#d1d0c5]/80">
                    "The reminders feature is fantastic! I never forget to give Luna her medication or schedule her
                    grooming appointments anymore."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-[#2a2a2a] flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-[#d1d0c5] sm:text-5xl">
                  Simple, Transparent Pricing
                </h2>
                <p className="max-w-[900px] text-[#d1d0c5]/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that's right for you and your furry friend.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3 lg:gap-12">
              <Card className="flex flex-col bg-[#232323] border-[#393939] text-[#d1d0c5]">
                <CardHeader>
                  <CardTitle className="text-[#d1d0c5]">Basic</CardTitle>
                  <CardDescription className="text-[#d1d0c5]/60">For single dog owners</CardDescription>
                  <div className="mt-4 flex items-baseline text-[#d1d0c5]">
                    <span className="text-4xl font-extrabold tracking-tight">$0</span>
                    <span className="ml-1 text-xl font-normal text-[#d1d0c5]/60">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#e2b714]" />
                      <span>Track walks, feeding, and grooming</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#e2b714]" />
                      <span>Basic reminders</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#e2b714]" />
                      <span>Single dog profile</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#e2b714]" />
                      <span>Share with 1 other person</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#e2b714] text-[#232323] hover:bg-[#e2b714]/90">Get Started</Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col relative bg-[#232323] border-[#e2b714] text-[#d1d0c5]">
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-[#e2b714] px-3 py-1 text-xs font-medium text-[#232323]">
                  Most Popular
                </div>
                <CardHeader>
                  <CardTitle className="text-[#d1d0c5]">Pro</CardTitle>
                  <CardDescription className="text-[#d1d0c5]/60">For serious dog parents</CardDescription>
                  <div className="mt-4 flex items-baseline text-[#d1d0c5]">
                    <span className="text-4xl font-extrabold tracking-tight">$9.99</span>
                    <span className="ml-1 text-xl font-normal text-[#d1d0c5]/60">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#e2b714]" />
                      <span>Everything in Basic</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#e2b714]" />
                      <span>Multiple dog profiles (up to 3)</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#e2b714]" />
                      <span>Advanced reminders and notifications</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#e2b714]" />
                      <span>Share with up to 5 people</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#e2b714]" />
                      <span>Health tracking features</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#e2b714] text-[#232323] hover:bg-[#e2b714]/90">Get Started</Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col bg-[#232323] border-[#393939] text-[#d1d0c5]">
                <CardHeader>
                  <CardTitle className="text-[#d1d0c5]">Family</CardTitle>
                  <CardDescription className="text-[#d1d0c5]/60">For multi-dog households</CardDescription>
                  <div className="mt-4 flex items-baseline text-[#d1d0c5]">
                    <span className="text-4xl font-extrabold tracking-tight">$19.99</span>
                    <span className="ml-1 text-xl font-normal text-[#d1d0c5]/60">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#e2b714]" />
                      <span>Everything in Pro</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#e2b714]" />
                      <span>Unlimited dog profiles</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#e2b714]" />
                      <span>Share with unlimited people</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#e2b714]" />
                      <span>Priority customer support</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-[#e2b714]" />
                      <span>Vet appointment scheduling</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#e2b714] text-[#232323] hover:bg-[#e2b714]/90">Get Started</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-[#d1d0c5] sm:text-4xl md:text-5xl">
                  Ready to Make Dog Care Easier?
                </h2>
                <p className="max-w-[900px] text-[#d1d0c5]/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of happy dog owners who have simplified their pet care routine with PupDuty.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-[#e2b714] text-[#232323] hover:bg-[#e2b714]/90">Start Your Free Trial</Button>
                <Button
                  variant="outline"
                  className="border-[#e2b714] text-[#e2b714] hover:bg-[#e2b714] hover:text-[#232323]"
                >
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-[#393939] bg-[#232323] py-6 flex items-center justify-center">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <PawPrint className="h-6 w-6 text-[#e2b714]" />
                <span className="text-lg font-bold text-[#d1d0c5]">PupDuty</span>
              </div>
              <p className="text-sm text-[#d1d0c5]/80">Making dog care coordination simple and stress-free.</p>
              <div className="flex gap-4">
                <Link href="#" className="text-[#d1d0c5]/60 hover:text-[#e2b714]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-[#d1d0c5]/60 hover:text-[#e2b714]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-[#d1d0c5]/60 hover:text-[#e2b714]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[#d1d0c5]">Product</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#features" className="text-[#d1d0c5]/80 hover:text-[#e2b714]">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-[#d1d0c5]/80 hover:text-[#e2b714]">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#d1d0c5]/80 hover:text-[#e2b714]">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#d1d0c5]/80 hover:text-[#e2b714]">
                    Testimonials
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[#d1d0c5]">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-[#d1d0c5]/80 hover:text-[#e2b714]">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#d1d0c5]/80 hover:text-[#e2b714]">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#d1d0c5]/80 hover:text-[#e2b714]">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#d1d0c5]/80 hover:text-[#e2b714]">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[#d1d0c5]">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-[#d1d0c5]/80 hover:text-[#e2b714]">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#d1d0c5]/80 hover:text-[#e2b714]">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#d1d0c5]/80 hover:text-[#e2b714]">
                    Cookies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#d1d0c5]/80 hover:text-[#e2b714]">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-[#393939] pt-8 text-center text-sm text-[#d1d0c5]/60">
            <p>© {new Date().getFullYear()} PupDuty. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

