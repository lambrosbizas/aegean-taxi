export const locationDetails: any = {
  default: {
    reviews: [
      {
        flag: "french",
        dateName: "Laura - March 2023",
        text: `
Aegean taxi new design
100%
E53

Booking a ride on Milos Island was very easy with the Web-based service provided by Aegean Taxi. The process is simple, and their professional drivers will ensure you have a comfortable and safe ride. They all speak English`,
      },
      {
        flag: "america",
        dateName: "Jo - July 2022",
        text: `We spent a week in Milos and used Aegean for all of our journeys during our stay. All was communicated through WhatsApp, so really easy to communicate. The cars were always clean and the drivers made sure we always felt comfortable on our journeys as the roads are pretty unique in Milos!! The drivers have all the local knowledge so better if in traffic! Definitely recommend!!
`,
      },
      {
        flag: "uk",
        dateName: "Carter - June 2022",
        text: `We have used Aegean Taxi app several times while in Milos. First from the airport, and then all over the island. It was simple, affordable and convenient, with competitive prices and professional drivers. You can be sure that you will always have a pleasant experience.
`,
      },
    ],
  },
  taxi_locations: {
    "milos-taxi-app": {
      location: "milos-taxi-app",
      name: "Milos",
      prices: [
        {
          from: "Milos Airport",
          to: "Plaka",
          cost: "30",
          duration: "20",
          location: "airport",
        },
        {
          from: "Pollonia",
          to: "Agia Kiriaki",
          cost: "60",
          duration: "50",
          location: "city",
        },
        {
          from: "Adamantas",
          to: "Pollonia",
          cost: "25",
          duration: "25",
          location: "port",
        },
        {
          from: "Plaka",
          to: "Adamantas",
          cost: "20",
          duration: "15",
          location: "city",
        },
        {
          from: "Pollonia",
          to: "Milos Airport",
          cost: "35",
          duration: "30",
          location: "airport",
        },
      ],
      reviews: [
        {
          flag: "french",
          dateName: "Laura - March 2023",
          text: `Booking a ride on Milos Island was very easy with the Web-based service provided by Aegean Taxi. The process is simple, and their professional drivers will ensure you have a comfortable and safe ride. They all speak English`,
        },
        {
          flag: "america",
          dateName: "Jo - July 2022",
          text: `We spent a week in Milos and used Aegean for all of our journeys during our stay. All was communicated through WhatsApp, so really easy to communicate. The cars were always clean and the drivers made sure we always felt comfortable on our journeys as the roads are pretty unique in Milos!! The drivers have all the local knowledge so better if in traffic! Definitely recommend!!
`,
        },
        {
          flag: "uk",
          dateName: "Carter - June 2022",
          text: `We have used Aegean Taxi app several times while in Milos. First from the airport, and then all over the island. It was simple, affordable and convenient, with competitive prices and professional drivers. You can be sure that you will always have a pleasant experience.
`,
        },
      ],

      faq: [
        {
          q: `How can i find a taxi or transfer in Milos?
`,
          a: `Apart from the designated taxi stands in the town center, port or airport, the best way is to use a private transfer service. Aegean Taxi offers a great fleet of cars at competitive prices, with english speaking drivers and is available 24/7. You can order a ride from www.aegeantaxi.com using the webapp in 3 simple steps, download the Aegean Taxi app, or simply call the call center on +302152154000
`,
        },
        {
          q: `Is it easy to find a taxi in Milos?
`,
          a: `No. Taxis in Milos can be hard to find, especially in the peak months of July and August. If you want to book your ride in advance or on demand, the best way is to download the Aegean Taxi app or use one of the other 3 methods to book your ride
`,
        },
        {
          q: `Are Milos Taxis and Transfers safe in Milos?`,
          a: `Yes. Milos is a considered to be a safe island with no major incidents ever reported related to taxis or transfers. Aegean Taxi employs only professional english speaking drivers who are pre-screened and trained to offer an excellent service`,
        },
        {
          q: `Are taxis and transfers expensive in Milos?`,
          a: `Taxis in Milos operate with a government mandated taxi meter, however it is possible to negotiate a flat fare with your driver. Private transfer services are available with a minimum €36 fare for half an hour which is the rate for a standard car. Vans tend to charge higher rates`,
        },
        {
          q: `Is Aegean Taxi working in Milos?`,
          a: `Yes. Aegean Taxi is the leading taxi and transfer service in the island of Milos. Tourists can download the Aegean Taxi app from the google or apple stores, register in 3 simple steps and requests rides in Milos. Alternative booking methods include the website using the webapp, telephone booking or whatsapp`,
        },
        {
          q: `Do Taxi drivers speak English in Milos?`,
          a: `Aegean Taxi hires only fluent English speakers so all drivers can speak English. It is a legal requirement for transport companies to obtain proof of English proficiency when hiring drivers. This does not apply to Taxi drivers who do not need to be speaking English to become drivers`,
        },
        {
          q: `Do you have to tip taxis in Milos?`,
          a: `Tips are optional for transport providers in Milos and one should not expect to have to pay anything extra than the pre arranged or metered fare. When extra services are provided by a driver like carrying luggage or stops along the way, then it is customary to reward drivers for the service`,
        },
        {
          q: `Do taxis run all day and night in Milos?`,
          a: `Most taxis operate throughout the day on the island of Milos. Aegean Taxi operates 24/7 and getting a ride is easy at any time using one of the booking methods offered`,
        },
        {
          q: `How can you find a Taxi in Milos AirPort?`,
          a: `Aegean Taxi Operates to and from Milos Airport (MLO). You can arrange a ride in advance or upon arrival using either the Aegean Taxi Milos App, whatsapp, the website or simply call our 24/7 call center to book your ride.`,
        },
        {
          q: `How can you find a Taxi in Milos AirPort?`,
          a: `Aegean Taxi Operates to and from Milos Port. You can arrange a ride in advance or upon arrival using either the Aegean Taxi Milos App, whatsapp, the website or simply call our 24/7 call center to book your ride.`,
        },
      ],
      photo: "./public/assets/taxi-locations/taxi-milos.jpeg",
      slide: {
        name: "Milos",
        photo: "/assets/taxi-locations/taxi-milos.jpeg",
        href: "/taxi/milos-taxi-app/",
      },
      url: "taxi/milos-taxi-app/",
      footer: {
        link: "/taxi/milos-taxi-app/",
        name: "Milos",
      },
      meta: {
        title: "Milos Taxi App | Affordable Taxi rides | Available 24/7",
        description:
          "Book your Milos Taxi via telephone, whatsapp, website. Or download the Aegean Taxi app and request a ride in 2 simple steps.",
      },
    },
  },
  airports: {
    milos: {
      location: "milos",

      meta: {
        title:
          "Aegean Taxi - Reliable and Affordable Milos Airport Transfer Services | Book Your Ride Today",
        description:
          "Book an experienced Milos driver to pick you up. Cheapest prices, great cars, english speaking drivers, 24/7 customer support. Book online, via whatsapp, telephone, or through the App.",
      },
      name: "Milos",
      prices: [
        {
          from: "Milos Airport",
          to: "Plaka",
          cost: "30",
          duration: "20",
          location: "airport",
        },
        {
          from: "Milos Airport",
          to: "Pollonia",
          cost: "35",
          duration: "30",
          location: "port",
        },
        {
          from: "Milos Airport",
          to: "Adamantas",
          cost: "25",
          duration: "15",
          location: "city",
        },
        {
          from: "Milos Airport",
          to: "Trypiti",
          cost: "27",
          duration: "25",
          location: "port",
        },
      ],
      reviews: [
        {
          flag: "german",
          dateName: "Tobias - May 2023",
          text: `Pre-booked via the app two weeks ago to take us from airport to Adamantas. The driver was waiting with my name on his board outside of the arrivals. He kind enough to help us with the luggage. The price was more than fair. Highly recommended!`,
        },
        {
          flag: "belgium",
          dateName: "Adam - April 2022",
          text: `Excellent service, price agreed by WhatsApp which was very convenient. Received numerous texts with up dates on driver, reg of car etc. Very comfortable journey, clean and air-conditioning. Driver Nikos was very helpful with our luggage. Will use again.
`,
        },
        {
          flag: "swiss",
          dateName: "Nikolas - July 2019",
          text: `Amazing experience! I just use their services in Milos and I am very satisfied. Affordable prices, polite driver and I was surprised by the fluency he had with English Language.
`,
        },
      ],

      airport_Guide: {
        title: "Airport services",
        text: `First Aid
                ATMs
                Car Rental
                Internet Access (WiFi)
                Charging mobile devices
                Shops, Restaurant & Cafes`,
        taxi_information: `Fare Structure
Milos taxi fares are closely monitored and regulated by the local authorities, ensuring fairness and transparency in pricing. The fare structure depends on the nature of your journey:

Short Journeys: For brief trips, you'll be charged a fixed minimum fare, making it an affordable choice for quick travels.

Longer Journeys: Extended journeys are calculated using a taximeter, taking into account the distance traveled. The fare structure is as follows:

Base Fare: €3
Daytime Rate (05:00 to 24:00): €0.68 per kilometer
Nighttime Rate (24:00 to 05:00): €1.36 per kilometer
Additional charges may apply for specific services:

Baggage exceeding 10kg: €0.40
Surcharge for pickups from designated locations such as the train station, bus station, and port: €1.07
Waiting time (one hour): €10.85
Hailing Your Milos Taxi
Securing a taxi on Milos Island is a breeze, thanks to various convenient methods. You can easily flag one down on the street, head to a taxi rank, or get in touch with local radio taxi companies. Regardless of your choice, reliable transportation is just a call or a wave away.

Milos Taxi Tips
Keep in mind that nighttime travel comes with a slightly higher per-kilometer rate (€1.36), so consider this when planning your journey.
Milos taxis are equipped to handle standard luggage, but remember that excess weight may result in additional fees.
Be sure to inquire about any potential extra charges for specific services before beginning your trip.
If you choose a taximeter-based fare, ensure the driver resets it to the base fare of €3 at the start of your journey.

Safe and Efficient Travel
Exploring the wonders of Milos Island becomes a seamless experience when you rely on its well-regulated taxi services. Whether you're indulging in a leisurely vacation or have a packed itinerary, Milos taxis offer the ideal blend of convenience and efficiency for your island adventure.
`,
      },

      faq: [
        {
          q: `What happens if my flight is delayed or cancelled?
`,
          a: `We understand that flight delays and cancellations are sometimes unavoidable. If your flight is delayed, we'll monitor your flight status and adjust your pickup time accordingly. If your flight is cancelled, just let us know and we'll reschedule your transfer at no extra charge.
`,
        },
        {
          q: ` Is it possible to book an airport transfer for someone else?
`,
          a: `Yes, you can make a booking on behalf of someone else. When you make your booking, simply enter the passenger's name and contact information. You can also add any special requests or instructions, such as wheelchair accessibility or extra luggage, so that we can provide the best possible service.
`,
        },
        {
          q: ` Is it possible to book an airport transfer for someone else?`,
          a: `Yes, you can make a booking on behalf of someone else. When you make your booking, simply enter the passenger's name and contact information. You can also add any special requests or instructions, such as wheelchair accessibility or extra luggage, so that we can provide the best possible service.`,
        },
        {
          q: `What happens if I need to cancel or change my airport transfer booking?`,
          a: `We understand that travel plans can change, so we offer flexible cancellation and change policies. If you need to cancel your booking, just let us know at least 24 hours in advance and we'll provide a full refund. If you need to change your booking, just contact us and we'll do our best to accommodate your request. Please note that changes may be subject to availability and additional charges may apply if there is a price difference between your original booking and the new booking.
`,
        },
      ],
      photo: "./public/assets/taxi-locations/taxi-milos.jpeg",
      url: "airport-transfers/milos/",
      footer: {
        link: "/airport-transfers/milos/",
        name: "Milos",
      },
    },
  },
};
