import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, Trophy, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ContactCardProps {
  name: string;
  role: string;
  email: string;
  phone: string;
  image: string;
}

const ContactCard = ({ name, role, email, phone, image }: ContactCardProps) => (
  <Card className="bg-gradient-to-br from-yellow-600 to-orange-600 border-none hover:shadow-lg transition-shadow duration-300 flex flex-col items-center gap-y-2">
    <Image
      src={image}
      alt={`${name}'s picture`}
      width={150}
      height={80}
      className="rounded-full mt-4"
    />
    <CardHeader className='items-center'>
      <CardTitle className="text-black font-bold">{name}</CardTitle>
      <p className="text-gray-800 font-medium">{role}</p>
    </CardHeader>
    <CardContent>
      <p className="flex items-center text-black">
        <Mail className="mr-2" size={16} /> {email}
      </p>
      {phone && (
        <p className="flex items-center text-black mt-2">
          <Phone className="mr-2" size={16} /> {phone}
        </p>
      )}
    </CardContent>
  </Card>
);


const HomePage = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <header className="py-20 text-center bg-gradient-to-b from-yellow-500 via-orange-500 to-red-600">
        <Image src="/pradhva-logo.png" alt="Pradhva Logo" width={150} height={150} className="mx-auto mb-8 rounded-full" />
        <h1 className="text-7xl font-bold mb-4 text-black">PRADHVA</h1>
        <p className="text-2xl mb-8 text-black">IIIT Kottayam&apos;s Annual Sports Fest</p>
        <Link href={"/registrations"}>
          <Button type='button' size="lg" className="bg-black text-yellow-500 hover:bg-gray-900 hover:text-yellow-400 transition-all duration-300 shadow-lg font-semibold">
            Register Now
          </Button>
        </Link>
      </header>

      {/* Navigation */}
      <nav className="bg-yellow-500 py-4 sticky top-0 z-10">
        <ul className="flex justify-center space-x-8">
          <li><a href="#about" className="text-black hover:text-white transition-colors font-medium">About</a></li>
          <li><a href="#events" className="text-black hover:text-white transition-colors font-medium">Events</a></li>
          <li><a href="/rules" className="text-black hover:text-white transition-colors font-medium">Rules</a></li>
          {/* <li><a href="#schedule" className="text-black hover:text-white transition-colors font-medium">Schedule</a></li> */}
          <li><a href="#contact" className="text-black hover:text-white transition-colors font-medium">Contact</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {/* About Section */}
        <section id="about" className="mb-20">
          <h2 className="text-5xl font-bold mb-6 text-yellow-500">About Pradhva</h2>
          <p className="text-xl mb-4 text-gray-300">
            Pradhva is IIIT Kottayam&apos;s annual sports fest, where students participate in a wide range of sports events.
            It serves as a platform for showcasing athletic talent and fosters competitive spirit among participants.
          </p>
          <p className="text-xl text-gray-300">
            The event includes multiple games like badminton, football, volleyball, athletics, and many others,
            giving students the opportunity to represent their skills and passion for sports.
          </p>
        </section>

        {/* Event Highlights */}
        <section id="events" className="mb-20">
          <h2 className="text-5xl font-bold mb-10 text-yellow-500">Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-yellow-600 to-orange-600 border-none hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-black font-bold">
                  <Trophy className="mr-2" /> Student Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-black">
                  <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                    <div>
                      <strong className="block text-lg mb-2">TRACK EVENTS</strong>
                      <ul className="list-disc list-inside mb-4">
                        <li>100m</li>
                        <li>200m</li>
                        <li>400m</li>
                        <li>800m</li>
                        <li>1500m</li>
                        <li>4x100m Relay</li>
                        <li>4x400m Relay</li>
                      </ul>
                      <strong className="block text-lg mb-2">INDOOR GAMES</strong>
                      <ul className="list-disc list-inside mb-4">
                        <li>Table Tennis</li>
                        <li>Carroms</li>
                        <li>Chess</li>
                      </ul>
                    </div>

                    {/* Column 2 */}
                    <div>
                      <strong className="block text-lg mb-2">GROUP GAMES</strong>
                      <ul className="list-disc list-inside mb-4">
                        <li>Cricket</li>
                        <li>Football</li>
                        <li>Volleyball</li>
                        <li>Basketball</li>
                      </ul>

                      <strong className="block text-lg mb-2">FIELD EVENTS</strong>
                      <ul className="list-disc list-inside mb-4">
                        <li>Long Jump</li>
                        <li>Discus Throw</li>
                        <li>Shot Put</li>
                        <li>Javelin Throw</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-orange-600 to-red-600 border-none hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-black font-bold">
                  <Users className="mr-2" /> Staff Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-black">
                  <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                    <div>
                      <strong className="block text-lg mb-2">INDOOR GAMES</strong>
                      <ul className="list-disc list-inside mb-4">
                        <li>Table Tennis</li>
                        <li>Carroms</li>
                        <li>Chess</li>
                      </ul>
                      <strong className="block text-lg mb-2">TRACK EVENTS</strong>
                      <ul className="list-disc list-inside mb-4">
                        <li>50m</li>
                      </ul>
                    </div>
                    <div>
                      <strong className="block text-lg mb-2">FIELD EVENTS</strong>
                      <ul className="list-disc list-inside mb-4">
                        <li>Discus Throw</li>
                        <li>Shot Put</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="contact" className="mb-20">
          <h2 className="text-5xl font-bold mb-10 text-yellow-500">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* biome-ignore lint/a11y/useValidAriaRole: <explanation> */}
            <ContactCard
              name="Dr. A Ananth"
              role="Faculty-In-Charge"
              email="ananth@iiitkottayam.ac.in"
              phone=""
              image="/Dr_Ananth_pic_2.jpg"
            />

            {/* biome-ignore lint/a11y/useValidAriaRole: <explanation> */}
            <ContactCard
              name="Ms Priya Mol K"
              role="Physical Education Instructor"
              email="pet@iiitkottayam.ac.in"
              phone=""
              image="/Priya_pic.jpg"
            />
            {/* biome-ignore lint/a11y/useValidAriaRole: <explanation> */}
            <ContactCard
              name="Ram Singh Nayak Tejavath"
              role="Sportec-Club Mentor"
              email="ramsingh22bcd56@iiitkottayam.ac.in"
              phone="9346266283"
              image="/ram_pic_3.jpg" // Update image path
            />
            {/* biome-ignore lint/a11y/useValidAriaRole: <explanation> */}
            <ContactCard
              name="Vyshnavi Reddy Battula"
              role="Sportec-Club Mentor"
              email="vyshnavi22bcs133@iiitkottayam.ac.in"
              phone="6366542233"
              image="/vyshnavi_pic.jpg"
            />
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 p-16 rounded-lg shadow-xl">
          <h2 className="text-5xl font-bold mb-6 text-black">Ready to Participate?</h2>
          <Link href={"/registrations"}>
            <Button size="lg" className="bg-black text-yellow-500 hover:bg-gray-900 hover:text-yellow-400 transition-all duration-300 shadow-lg font-semibold">
              Join Pradhva 2024
            </Button>
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-yellow-500 py-8 text-center text-black mt-20">
        <p>&copy; 2024 Pradhva. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;