import { Calendar, Clock, MapPin, Star } from 'lucide-react';
import Stars from '../HeroSection/Stars';

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Stellar Vision",
      date: "2025-02-15",
      time: "TBD",
      location: "Bennett University ",
      image: "https://i.ibb.co/99KgtCRQ/Screenshot-2025-01-31-223840.png",
      description:"StellarVision invites passionate astronomy enthusiasts to present visionary ideas about the wonders of theoretical physics, cosmology and mechanics.",
      highlighted: true,
      registerLink: "https://unstop.com/events/stellar-vision-uphoria-2025-bennett-university-bu-greater-noida-1367697"
    },
    {
      id: 2,
      title: "Star Gazing Night",
      date: "2024-01-15",
      time: "20:00 - 23:00",
      location: "University Observatory",
      image: "/cool3.png",
      description:
        "Join us for an enchanting evening of stargazing. We'll be observing Jupiter and its moons, along with deep-sky objects visible this season.",
      highlighted: false,
    },
    {
      id: 3,
      title: "Workshop on Astrophotography",
      date: "2024-02-10",
      time: "16:00 - 18:00",
      location: "Physics Laboratory",
      image: "/cool2.png",
      description:
        "Learn the basics of astrophotography, from camera settings to post-processing techniques. Bring your DSLR camera if you have one!",
    },
    {
      id: 4,
      title: "Solar Eclipse Watch Party",
      date: "2024-03-20",
      time: "14:30 - 16:30",
      location: "University Ground",
      image: "/image.png",
      description:
        "Experience the partial solar eclipse with proper safety equipment. Educational session included about the mechanics of eclipses.",
    },
    {
      id: 5,
      title: "Space Exploration Lecture",
      date: "2024-03-25",
      time: "10:00 - 12:00",
      location: "Auditorium",
      image: "/cool1.png",
      description:
        "Dive into the history of space exploration, from the Apollo missions to the latest Mars rovers. A fascinating session for space enthusiasts.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-black pt-24 pb-16 px-4 overflow-hidden text-white">
      <Stars />
      <div className="max-w-7xl mx-auto relative">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Our Events
        </h1>

        <div className="space-y-16">
          {events.map((event, index) => (
            <div
              key={event.id}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col md:flex-row">
                {/* Image Section */}
                <div className="md:w-2/5 relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                  {event.highlighted && (
                    <div className="absolute top-4 left-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <Star className="h-4 w-4" />
                      Featured Event
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="md:w-3/5 p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                    {event.title}
                  </h2>

                  <div className="space-y-3 text-gray-300 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-purple-400" />
                      <span>
                        {new Date(event.date).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-purple-400" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-purple-400" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-8">
                    {event.description}
                  </p>

                  {/* Register Now Button for Stellar Vision */}
                  {event.title === "Stellar Vision" && (
                    <a target='_blank'
                      href={event.registerLink}
                      className="inline-block bg-purple-500 text-white py-2 px-6 rounded-lg hover:bg-purple-400 transition-colors"
                    >
                      Register Now
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
