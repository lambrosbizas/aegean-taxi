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
          q: `Are taxis and Transfers safe in Milos?`,
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

    "tinos-taxi-app": {
      location: "tinos-taxi-app",
      name: "Tinos",
      prices: [
        {
          from: "Tinos Port",
          to: "Pyrgos",
          cost: "55",
          duration: "45",
          location: "port",
        },
        {
          from: "Agios Romanos",
          to: "Tinos port",
          cost: "37",
          duration: "25",
          location: "city",
        },
        {
          from: "Tinos port",
          to: "Volax",
          cost: "45",
          duration: "30",
          location: "port",
        },
        {
          from: "Chora",
          to: "Kolymbithra",
          cost: "65",
          duration: "50",
          location: "city",
        },
        {
          from: "Agios Sostis",
          to: "Tinos port",
          cost: "30",
          duration: "20",
          location: "port",
        },
      ],
      reviews: [
        {
          flag: "america",
          dateName: "Elijah - March 2023",
          text: `Aegean Taxi offers a hassle-free service in Tinos. We booked our taxi rides with just a phone call and their call center confirmed all the details. The drivers were amaizing and with local knowledge.`,
        },
        {
          flag: "spain",
          dateName: "Sergio - July 2022",
          text: `We used Aegean Taxi during our stay in Tinos. Every comunication was via Whatsapp and the best thing was being able to pin our location as there was some points where we were not entirely sure!  All drivers were amazing, very polite, and friendly. Definitely recommend and also make sure you book in advance`,
        },
        {
          flag: "french",
          dateName: "Mike - September 2019",
          text: `Excellent service! We used them on many occasions and they are very professional. The app was very easy to use and very precise with ETA. Would recommend and use it again!`,
        },
      ],

      faq: [
        {
          q: `How can i find a taxi or transfer in Tinos?`,
          a: `Apart from the designated taxi stands in the town center, port or airport, the best way is to use a private transfer service. Aegean Taxi offers a great fleet of cars at competitive prices, with english speaking drivers and is available 24/7. You can order a ride from www.aegeantaxi.com using the webapp in 3 simple steps, download the Aegean Taxi app, or simply call the call center on +302152154000`,
        },
        {
          q: `Is it easy to find a taxi in Tinos?`,
          a: `No. Taxis in Tinos can be hard to find, especially in the peak months of July and August. If you want to book your ride in advance or on demend, the best way is to download the Aegean Taxi app or use one of the other 3 methods to book your ride`,
        },
        {
          q: `Are taxis and Transfers safe in Tinos?`,
          a: `Yes. Tinos is a cosidered to be a safe island with no major incidents ever reported related to taxis or transfers. Aegean Taxi employs only professional english speaking drivers who are pre-screened and trained to offer an excellent service`,
        },
        {
          q: `Are taxis and transfers expensive in Tinos?`,
          a: `Taxis in Tinos operate with a government mandated taxi meter, however it is possible to negotiate a flat fare with your driver. Private transfer services are available with a minimum €36 fare for half an hour which is the rate for a standard car. Vans tend to charge higher rates`,
        },
        {
          q: `Is Aegean Taxi working in Tinos?`,
          a: `Yes. Aegean Taxi is the leading taxi and transfer service in the island of Tinos. Tourists can download the Aegean Taxi app from the google or apple stores, register in 3 simple steps and requests rides in Tinos. Alternative booking methods include the website using the webapp, telephone booking or whatsapp`,
        },
        {
          q: `Do Taxi drivers speak English in Tinos?`,
          a: `Aegean Taxi hires only fluent English speakers so all drivers can speak English. It is a legal requirement for transport companies to obtain proof of English profficiency when hiring drivers. This does not apply to Taxi drivers who do not need to be speaking English to become drivers`,
        },
        {
          q: `Do you have to tip taxis in Tinos?`,
          a: `Tips are optional for transport providers in Tinos and one should not expect to have to pay anything extra than the pre arranged or metered fare. When extra services are provided by a driver like carrying luggage or stops along the way, then it is customary to reward drivers for the service`,
        },
        {
          q: `Do taxis run all day and night in Tinos?`,
          a: `Most taxis operate throughout the day on the island of Tinos. Aegean Taxi operates 24/7 and getting a ride is easy at any time using one of the booking methods offered`,
        },
        {
          q: `How can you find a Taxi in Tinos Port?`,
          a: `Aegean Taxi Operates to and from Tinos Port. You can arrange a ride in advance or upon arrival using either the Aegean Taxi Tinos App, whatsapp, the website or simply call our 24/7 call center to book your ride.`,
        },
      ],
      photo: "./public/assets/taxi-locations/taxi-tinos.jpeg",
      slide: {
        name: "Tinos",
        photo: "/assets/taxi-locations/taxi-tinos.jpeg",
        href: "/taxi/tinos-taxi-app/",
      },
      url: "taxi/tinos-taxi-app/",
      footer: {
        link: "/taxi/tinos-taxi-app/",
        name: "Tinos",
      },
      meta: {
        title: "Tinos Taxi App | Affordable Taxi rides | Available 24/7",
        description:
          "Book your Tinos Taxi via telephone, whatsapp, website. Or download the Aegean Taxi app and request a ride in 2 simple steps.",
      },
    },

    "paros-taxi-app": {
      location: "paros-taxi-app",
      name: "Paros",
      prices: [
        {
          from: "Paros Airport",
          to: "Parikoia",
          cost: "25",
          duration: "15",
          location: "airport",
        },
        {
          from: "Chrisi Akti",
          to: "Paros Airport",
          cost: "35",
          duration: "30",
          location: "city",
        },
        {
          from: "Paros Port",
          to: "Naousa",
          cost: "30",
          duration: "25",
          location: "port",
        },
        {
          from: "Pounta",
          to: "Naousa",
          cost: "40",
          duration: "35",
          location: "city",
        },
        {
          from: "Naousa",
          to: "Paros Airport",
          cost: "50",
          duration: "45",
          location: "airport",
        },
      ],
      reviews: [
        {
          flag: "america",
          dateName: "Joseph - June 2022",
          text: `Me and my girlfriend visited Paros for a week and came across the Aegean Taxi when trying to book a cab online. The driver we had was super friendly and knew the roads well. Prices were good and the service was great with high end Mercedes Cars`,
        },
        {
          flag: "spain",
          dateName: "Costas - August 2020",
          text: `Aegean Taxi is the best option for transportation in Paros island. Reliable, proffesionals and always very polite! I used their service twice in Paros and I was very satisfied. It's more affordable even compared with moving with your own car. Highly reccomended especially for port and airport transfers`,
        },
        {
          flag: "uk",
          dateName: "Kate - September 2021",
          text: `Great service and very easy to use taxi app; most importantly it worked properly  during rush hours. Driver was gentle despite the chaos,opened doors even offered water out of courtesy. On our airport transfer he also carried our bags!`,
        },
      ],

      faq: [
        {
          q: `How can i find a taxi or transfer in Paros?`,
          a: `Apart from the designated taxi stands in the town center, port or airport, the best way is to use a private transfer service. Aegean Taxi offers a great fleet of cars at competitive prices, with english speaking drivers and is available 24/7. You can order a ride from www.aegeantaxi.com using the webapp in 3 simple steps, download the Aegean Taxi app, or simply call the call center on +302152154000`,
        },
        {
          q: `Is it easy to find a taxi in Paros?`,
          a: `No. Taxis in Paros can be hard to find, especially in the peak months of July and August. If you want to book your ride in advance or on demend, the best way is to download the Aegean Taxi app or use one of the other 3 methods to book your ride`,
        },
        {
          q: `Are taxis and Transfers safe in Paros?`,
          a: `Yes. Paros is a cosidered to be a safe island with no major incidents ever reported related to taxis or transfers. Aegean Taxi employs only professional english speaking drivers who are pre-screened and trained to offer an excellent service`,
        },
        {
          q: `Are taxis and transfers expensive in Paros?`,
          a: `Taxis in Paros operate with a government mandated taxi meter, however it is possible to negotiate a flat fare with your driver. Private transfer services are available with a minimum €36 fare for half an hour which is the rate for a standard car. Vans tend to charge higher rates`,
        },
        {
          q: `Is Aegean Taxi working in Paros?`,
          a: `Yes. Aegean Taxi is the leading taxi and transfer service in the island of Paros. Tourists can download the Aegean Taxi app from the google or apple stores, register in 3 simple steps and requests rides in Paros. Alternative booking methods include the website using the webapp, telephone booking or whatsapp`,
        },
        {
          q: `Do Taxi drivers speak English in Paros?`,
          a: `Aegean Taxi hires only fluent English speakers so all drivers can speak English. It is a legal requirement for transport companies to obtain proof of English profficiency when hiring drivers. This does not apply to Taxi drivers who do not need to be speaking English to become drivers`,
        },
        {
          q: `Do you have to tip taxis in Paros?`,
          a: `Tips are optional for transport providers in Paros and one should not expect to have to pay anything extra than the pre arranged or metered fare. When extra services are provided by a driver like carrying luggage or stops along the way, then it is customary to reward drivers for the service`,
        },
        {
          q: `Do taxis run all day and night in Paros?`,
          a: `Most taxis operate throughout the day on the island of Paros. Aegean Taxi operates 24/7 and getting a ride is easy at any time using one of the booking methods offered`,
        },
        {
          q: `How can you find a Taxi in Paros AirPort?`,
          a: `Aegean Taxi Operates to and from Paros Airport (PAS). You can arrange a ride in advance or upon arrival using either the Aegean Taxi Paros App, whatsapp, the website or simply call our 24/7 call center to book your ride.`,
        },
        {
          q: `How can you find a Taxi in Paros Port?`,
          a: `Aegean Taxi Operates to and from Paros Port. You can arrange a ride in advance or upon arrival using either the Aegean Taxi Paros App, whatsapp, the website or simply call our 24/7 call center to book your ride.`,
        },
      ],
      photo: "./public/assets/taxi-locations/taxi-paros.jpeg",
      slide: {
        name: "Paros",
        photo: "/assets/taxi-locations/taxi-paros.jpeg",
        href: "/taxi/paros-taxi-app/",
      },
      url: "taxi/paros-taxi-app/",
      footer: {
        link: "/taxi/paros-taxi-app/",
        name: "Paros",
      },
      meta: {
        title: "Paros Taxi App | Affordable Taxi rides | Available 24/7",
        description:
          "Book your Paros Taxi via telephone, whatsapp, website. Or download the Aegean Taxi app and request a ride in 2 simple steps.",
      },
    },

    "naxos-taxi-app": {
      location: "naxos-taxi-app",
      name: "Naxos",
      prices: [
        {
          from: "Naxos Airport",
          to: "Naxos Town",
          cost: "15",
          duration: "10",
          location: "airport",
        },
        {
          from: "Ag. Anna",
          to: "Naxos Airport",
          cost: "20",
          duration: "15",
          location: "city",
        },
        {
          from: "Naxos Port",
          to: "Apollonas",
          cost: "75",
          duration: "60",
          location: "port",
        },
        {
          from: "Naxos Town",
          to: "Filoti",
          cost: "40",
          duration: "35",
          location: "city",
        },
        {
          from: "Plaka",
          to: "Naxos Airport",
          cost: "30",
          duration: "20",
          location: "airport",
        },
      ],
      reviews: [
        {
          flag: "french",
          dateName: "Oliver - August 2022",
          text: `If i had to describe aegean taxi and their transfer service in one word, it would be “Excellent”. I used their service 4 times while in Naxos. I found them waiting for me at the airport and carried my bags and during my stay they were always on time. The App is very easy to use. I highly recommend it!!!"`,
        },
        {
          flag: "uk",
          dateName: "Maria - June 2021",
          text: `I used their taxi service during my stay in Naxos in June. Booked via whatsapp and also phone, i found them to be reliable and offering a high quality service, took a big headache away and helped me and my family enjoy the island free of transport stress!`,
        },
        {
          flag: "america",
          dateName: "Kristina - September 2018",
          text: `My experience with Aegean Taxi  while in Naxos with my family has been truly wonderful! They are always on time and friendly :) I found myself driving around exhausting so it was relaxing to leave the work to the greek born professionals!`,
        },
      ],

      faq: [
        {
          q: `How can i find a taxi or transfer in Naxos?`,
          a: `Apart from the designated taxi stands in the town center, port or airport, the best way is to use a private transfer service. Aegean Taxi offers a great fleet of cars at competitive prices, with english speaking drivers and is available 24/7. You can order a ride from www.aegeantaxi.com using the webapp in 3 simple steps, download the Aegean Taxi app, or simply call the call center on +302152154000`,
        },
        {
          q: `Is it easy to find a taxi in Naxos?`,
          a: `No. Taxis in Naxos can be hard to find, especially in the peak months of July and August. If you want to book your ride in advance or on demend, the best way is to download the Aegean Taxi app or use one of the other 3 methods to book your ride`,
        },
        {
          q: `Are taxis and Transfers safe in Naxos?`,
          a: `Yes. Naxos is a cosidered to be a safe island with no major incidents ever reported related to taxis or transfers. Aegean Taxi employs only professional english speaking drivers who are pre-screened and trained to offer an excellent service`,
        },
        {
          q: `Are taxis and transfers expensive in Naxos?`,
          a: `Taxis in Naxos operate with a government mandated taxi meter, however it is possible to negotiate a flat fare with your driver. Private transfer services are available with a minimum €36 fare for half an hour which is the rate for a standard car. Vans tend to charge higher rates`,
        },
        {
          q: `Is Aegean Taxi working in Naxos?`,
          a: `Yes. Aegean Taxi is the leading taxi and transfer service in the island of Naxos. Tourists can download the Aegean Taxi app from the google or apple stores, register in 3 simple steps and requests rides in Naxos. Alternative booking methods include the website using the webapp, telephone booking or whatsapp`,
        },
        {
          q: `Do Taxi drivers speak English in Naxos?`,
          a: `Aegean Taxi hires only fluent English speakers so all drivers can speak English. It is a legal requirement for transport companies to obtain proof of English profficiency when hiring drivers. This does not apply to Taxi drivers who do not need to be speaking English to become drivers`,
        },
        {
          q: `Do you have to tip taxis in Naxos?`,
          a: `Tips are optional for transport providers in Naxos and one should not expect to have to pay anything extra than the pre arranged or metered fare. When extra services are provided by a driver like carrying luggage or stops along the way, then it is customary to reward drivers for the service`,
        },
        {
          q: `Do taxis run all day and night in Naxos?`,
          a: `Most taxis operate throughout the day on the island of Naxos. Aegean Taxi operates 24/7 and getting a ride is easy at any time using one of the booking methods offered`,
        },
        {
          q: `How can you find a Taxi in Naxos AirPort?`,
          a: `Aegean Taxi Operates to and from Naxos Airport (JNX). You can arrange a ride in advance or upon arrival using either the Aegean Taxi Naxos App, whatsapp, the website or simply call our 24/7 call center to book your ride.`,
        },
        {
          q: `How can you find a Taxi in Naxos Port?`,
          a: `Aegean Taxi Operates to and from Naxos Port. You can arrange a ride in advance or upon arrival using either the Aegean Taxi Naxos App, whatsapp, the website or simply call our 24/7 call center to book your ride.`,
        },
      ],
      photo: "./public/assets/taxi-locations/taxi-naxos.jpeg",
      slide: {
        name: "Naxos",
        photo: "/assets/taxi-locations/taxi-naxos.jpeg",
        href: "/taxi/naxos-taxi-app/",
      },
      url: "taxi/naxos-taxi-app/",
      footer: {
        link: "/taxi/naxos-taxi-app/",
        name: "Naxos",
      },
      meta: {
        title: "Naxos Taxi App | Affordable Taxi rides | Available 24/7",
        description:
          "Book your Naxos Taxi via telephone, whatsapp, website. Or download the Aegean Taxi app and request a ride in 2 simple steps.",
      },
    },

    "kos-taxi-app": {
      location: "kos-taxi-app",
      name: "Kos",
      prices: [
        {
          from: "Kos Airport",
          to: "Kos Town",
          cost: "40",
          duration: "35",
          location: "airport",
        },
        {
          from: "Marmari",
          to: "Kos Airport",
          cost: "20",
          duration: "15",
          location: "city",
        },
        {
          from: "Kos Port",
          to: "Kardamaina",
          cost: "40",
          duration: "35",
          location: "port",
        },
        {
          from: "Kos Town",
          to: "Psalidi",
          cost: "20",
          duration: "15",
          location: "city",
        },
        {
          from: "Mastihari",
          to: "Kos Airport",
          cost: "15",
          duration: "10",
          location: "airport",
        },
      ],
      reviews: [
        {
          flag: "america",
          dateName: "Francis - April 2023",
          text: `I had a very positive experience with Aegean taxi app in Kos! It was easy to use, the driver arrived on time and was friendly and professional. The cars always clean`,
        },
        {
          flag: "uk",
          dateName: "Taylor - September 2020",
          text: `We were very impressed with Aegean Taxi in all destinations we visited while in Greece. I booked online first and then downloaded their app. The car was clean and comfortable and they were cheaper than everyone else`,
        },
        {
          flag: "french",
          dateName: "Marie - June 2017",
          text: `I booked my first ride with Aegean Taxi via whatsapp in 30 seconds while in Kos. Very friendly driver. Safe, experienced and a very good guide for the island`,
        },
      ],

      faq: [
        {
          q: `How can i find a taxi or transfer in Kos?`,
          a: `Apart from the designated taxi stands in the town center, port or airport, the best way is to use a private transfer service. Aegean Taxi offers a great fleet of cars at competitive prices, with english speaking drivers and is available 24/7. You can order a ride from www.aegeantaxi.com using the webapp in 3 simple steps, download the Aegean Taxi app, or simply call the call center on +302152154000`,
        },
        {
          q: `Is it easy to find a taxi in Kos?`,
          a: `No. Taxis in Kos can be hard to find, especially in the peak months of July and August. If you want to book your ride in advance or on demend, the best way is to download the Aegean Taxi app or use one of the other 3 methods to book your ride`,
        },
        {
          q: `Are Taxis and Transfers safe in Kos?`,
          a: `Yes. Kos is a cosidered to be a safe island with no major incidents ever reported related to taxis or transfers. Aegean Taxi employs only professional english speaking drivers who are pre-screened and trained to offer an excellent service`,
        },
        {
          q: `Are taxis and transfers expensive in Kos?`,
          a: `Taxis in Kos operate with a government mandated taxi meter, however it is possible to negotiate a flat fare with your driver. Private transfer services are available with a minimum €36 fare for half an hour which is the rate for a standard car. Vans tend to charge higher rates`,
        },
        {
          q: `Is Aegean Taxi working in Kos?`,
          a: `Yes. Aegean Taxi is the leading taxi and transfer service in the island of Kos. Tourists can download the Aegean Taxi app from the google or apple stores, register in 3 simple steps and requests rides in Kos. Alternative booking methods include the website using the webapp, telephone booking or whatsapp`,
        },
        {
          q: `Do Taxi drivers speak English in Kos?`,
          a: `Aegean Taxi hires only fluent English speakers so all drivers can speak English. It is a legal requirement for transport companies to obtain proof of English profficiency when hiring drivers. This does not apply to Taxi drivers who do not need to be speaking English to become drivers`,
        },
        {
          q: `Do you have to tip taxis in Kos?`,
          a: `Tips are optional for transport providers in Kos and one should not expect to have to pay anything extra than the pre arranged or metered fare. When extra services are provided by a driver like carrying luggage or stops along the way, then it is customary to reward drivers for the service`,
        },
        {
          q: `Do taxis run all day and night in Kos?`,
          a: `Most taxis operate throughout the day on the island of Kos. Aegean Taxi operates 24/7 and getting a ride is easy at any time using one of the booking methods offered`,
        },
        {
          q: `How can you find a Taxi in Kos AirPort?`,
          a: `Aegean Taxi Operates to and from Kos Airport (KGS). You can arrange a ride in advance or upon arrival using either the Aegean Taxi Kos App, whatsapp, the website or simply call our 24/7 call center to book your ride.`,
        },
        {
          q: `How can you find a Taxi in Kos Port?`,
          a: `Aegean Taxi Operates to and from Kos Port. You can arrange a ride in advance or upon arrival using either the Aegean Taxi Kos App, whatsapp, the website or simply call our 24/7 call center to book your ride.`,
        },
      ],
      photo: "./public/assets/taxi-locations/taxi-kos.jpeg",
      slide: {
        name: "Kos",
        photo: "/assets/taxi-locations/taxi-kos.jpeg",
        href: "/taxi/kos-taxi-app/",
      },
      url: "taxi/kos-taxi-app/",
      footer: {
        link: "/taxi/kos-taxi-app/",
        name: "Kos",
      },
      meta: {
        title: "Kos Taxi App | Affordable Taxi rides | Available 24/7",
        description:
          "Book your Kos Taxi via telephone, whatsapp, website. Or download the Aegean Taxi app and request a ride in 2 simple steps.",
      },
    },

    "heraklion-taxi-app": {
      location: "heraklion-taxi-app",
      name: "Heraklion",
      prices: [
        {
          from: "Heraklion Airport",
          to: "City Center",
          cost: "15",
          duration: "10",
          location: "airport",
        },
        {
          from: "Hersonissos",
          to: "Heraklion Airport",
          cost: "30",
          duration: "20",
          location: "city",
        },
        {
          from: "Heraklion Port",
          to: "Hersonissos",
          cost: "35",
          duration: "30",
          location: "port",
        },
        {
          from: "Hersonissos",
          to: "Knossos",
          cost: "45",
          duration: "40",
          location: "city",
        },
        {
          from: "Faistos",
          to: "City Center",
          cost: "55",
          duration: "55",
          location: "city",
        },
      ],
      reviews: [
        {
          flag: "french",
          dateName: "Laura - March 2023",
          text: `Booking a ride on Heraklion was very easy with the Web-based service provided by Aegean Taxi. The process is simple, and their professional drivers will ensure you have a comfortable and safe ride. They all speak English`,
        },
        {
          flag: "america",
          dateName: "Jo - July 2022",
          text: `We spent a week in Heraklion and used this company for all of our journeys during our stay. All was communicated through WhatsApp, so really easy to send a text to communicate. The cars were always clean and the drivers made sure we always felt comfortable on our journeys as the roads are pretty unique in Heraklion!! They were always cheaper than Uber and the drivers have all the local knowledge so better if in traffic! Definitely recommend!!`,
        },
        {
          flag: "uk",
          dateName: "Carter - June 2022",
          text: `We have used Aegean Taxi app several times on our stay in Heraklion. It was simple, affordable and convenient, with competitive prices and professional drivers. You can be sure that you will always have a pleasant experience.`,
        },
      ],

      faq: [
        {
          q: `How can i find a taxi or transfer in Heraklion?`,
          a: `Apart from the designated taxi stands in the town center, port or airport, the best way is to use a private transfer service. Aegean Taxi offers a great fleet of cars at competitive prices, with english speaking drivers and is available 24/7. You can order a ride from www.aegeantaxi.com using the webapp in 3 simple steps, download the Aegean Taxi app, or simply call the call center on +302152154000`,
        },
        {
          q: `Is it easy to find a taxi in Heraklion?`,
          a: `No. Taxis in Heraklion can be hard to find, especially in the peak months of July and August. If you want to book your ride in advance or on demend, the best way is to download the Aegean Taxi app or use one of the other 3 methods to book your ride`,
        },
        {
          q: `Are taxis and Transfers safe in Heraklion?`,
          a: `Yes. Heraklion is a cosidered to be a safe island with no major incidents ever reported related to taxis or transfers. Aegean Taxi employs only professional english speaking drivers who are pre-screened and trained to offer an excellent service`,
        },
        {
          q: `Are taxis and transfers expensive in Heraklion?`,
          a: `Taxis in Heraklion operate with a government mandated taxi meter, however it is possible to negotiate a flat fare with your driver. Private transfer services are available with a minimum €36 fare for half an hour which is the rate for a standard car. Vans tend to charge higher rates`,
        },
        {
          q: `Is Aegean Taxi working in Heraklion?`,
          a: `Yes. Aegean Taxi is the leading taxi and transfer service in the island of Heraklion. Tourists can download the Aegean Taxi app from the google or apple stores, register in 3 simple steps and requests rides in Heraklion. Alternative booking methods include the website using the webapp, telephone booking or whatsapp`,
        },
        {
          q: `Do Taxi drivers speak English in Heraklion?`,
          a: `Aegean Taxi hires only fluent English speakers so all drivers can speak English. It is a legal requirement for transport companies to obtain proof of English profficiency when hiring drivers. This does not apply to Taxi drivers who do not need to be speaking English to become drivers`,
        },
        {
          q: `Do you have to tip taxis in Heraklion?`,
          a: `Tips are optional for transport providers in Heraklion and one should not expect to have to pay anything extra than the pre arranged or metered fare. When extra services are provided by a driver like carrying luggage or stops along the way, then it is customary to reward drivers for the service`,
        },
        {
          q: `Do taxis run all day and night in Heraklion?`,
          a: `Most taxis operate throughout the day on the island of Heraklion. Aegean Taxi operates 24/7 and getting a ride is easy at any time using one of the booking methods offered`,
        },
        {
          q: `How can you find a Taxi in Heraklion AirPort?`,
          a: `Aegean Taxi Operates to and from Heraklion Airport N. Kazantzakis (HER). You can arrange a ride in advance or upon arrival using either the Aegean Taxi Heraklion App, whatsapp, the website or simply call our 24/7 call center to book your ride.`,
        },
        {
          q: `How can you find a Taxi in Heraklion Port?`,
          a: `Aegean Taxi Operates to and from Heraklion Port. You can arrange a ride in advance or upon arrival using either the Aegean Taxi Heraklion App, whatsapp, the website or simply call our 24/7 call center to book your ride.`,
        },
      ],
      photo: "./public/assets/taxi-locations/taxi-heraklion.jpeg",
      slide: {
        name: "Heraklion",
        photo: "/assets/taxi-locations/taxi-heraklion.jpeg",
        href: "/taxi/heraklion-taxi-app/",
      },
      url: "taxi/heraklion-taxi-app/",
      footer: {
        link: "/taxi/heraklion-taxi-app/",
        name: "Heraklion",
      },
      meta: {
        title: "Heraklion Taxi App | Affordable Taxi rides | Available 24/7",
        description:
          "Book your Heraklion Taxi via telephone, whatsapp, website. Or download the Aegean Taxi app and request a ride in 2 simple steps.",
      },
    },

    "chalkidiki-taxi-app": {
      location: "chalkidiki-taxi-app",
      name: "Chalkidiki",
      prices: [
        {
          from: "Thessaloniki Airport",
          to: "Sani beach",
          cost: "65",
          duration: "55",
          location: "airport",
        },
        {
          from: "Kryopigi",
          to: "Thessaloniki Airport",
          cost: "73",
          duration: "65",
          location: "city",
        },
        {
          from: "Thessaloniki Airport",
          to: "Polychrono",
          cost: "80",
          duration: "75",
          location: "airport",
        },
        {
          from: "Kalithea",
          to: "Sani beach",
          cost: "25",
          duration: "20",
          location: "city",
        },
        {
          from: "Posidi",
          to: "Aigaiopelagitika",
          cost: "15",
          duration: "10",
          location: "city",
        },
      ],
      reviews: [
        {
          flag: "america",
          dateName: "Elijah - March 2023",
          text: `Aegean Taxi offers a hassle-free service in Chalkidiki. We book our rides with just a phone call where confirmed all the details. The drivers were amaizing and with local knowledge.`,
        },
        {
          flag: "spain",
          dateName: "Sergio - July 2022",
          text: `We used Aegean Taxi during our stay in Chalkidiki. Every comunication was via Whatsapp and the best thing was being able to pin our location as there was some points where we were not entirely sure!  All drivers were amazing, very polite, and friendly. Definitely recommend!`,
        },
        {
          flag: "uk",
          dateName: "Mike - September 2019",
          text: `Excellent service! We used them on many occasions and they are very professional. The app was very easy to use and very precise with ETA. Would recommend and use it again!`,
        },
      ],

      faq: [
        {
          q: `How can i find a taxi or transfer in Chalkidiki?`,
          a: `Apart from the designated taxi stands in the town center, port or airport, the best way is to use a private transfer service. Aegean Taxi offers a great fleet of cars at competitive prices, with english speaking drivers and is available 24/7. You can order a ride from www.aegeantaxi.com using the webapp in 3 simple steps, download the Aegean Taxi app, or simply call the call center on +302152154000`,
        },
        {
          q: `Is it easy to find a taxi in Chalkidiki?`,
          a: `No. Taxis in Chalkidiki can be hard to find, especially in the peak months of July and August. If you want to book your ride in advance or on demend, the best way is to download the Aegean Taxi app or use one of the other 3 methods to book your ride`,
        },
        {
          q: `Are taxis and Transfers safe in Chalkidiki?`,
          a: `Yes. Chalkidiki is a cosidered to be a safe island with no major incidents ever reported related to taxis or transfers. Aegean Taxi employs only professional english speaking drivers who are pre-screened and trained to offer an excellent service`,
        },
        {
          q: `Are taxis and transfers expensive in Chalkidiki?`,
          a: `Taxis in Chalkidiki operate with a government mandated taxi meter, however it is possible to negotiate a flat fare with your driver. Private transfer services are available with a minimum €36 fare for half an hour which is the rate for a standard car. Vans tend to charge higher rates`,
        },
        {
          q: `Is Aegean Taxi working in Chalkidiki?`,
          a: `Yes. Aegean Taxi is the leading taxi and transfer service in the island of Chalkidiki. Tourists can download the Aegean Taxi app from the google or apple stores, register in 3 simple steps and requests rides in Chalkidiki. Alternative booking methods include the website using the webapp, telephone booking or whatsapp`,
        },
        {
          q: `Do Taxi drivers speak English in Chalkidiki?`,
          a: `Aegean Taxi hires only fluent English speakers so all drivers can speak English. It is a legal requirement for transport companies to obtain proof of English profficiency when hiring drivers. This does not apply to Taxi drivers who do not need to be speaking English to become drivers`,
        },
        {
          q: `Do you have to tip taxis in Chalkidiki?`,
          a: `Tips are optional for transport providers in Chalkidiki and one should not expect to have to pay anything extra than the pre arranged or metered fare. When extra services are provided by a driver like carrying luggage or stops along the way, then it is customary to reward drivers for the service`,
        },
        {
          q: `Do taxis run all day and night in Chalkidiki?`,
          a: `Most taxis operate throughout the day on the island of Chalkidiki. Aegean Taxi operates 24/7 and getting a ride is easy at any time using one of the booking methods offered`,
        },
        {
          q: `How can you find a Taxi in Chalkidiki AirPort?`,
          a: `Aegean Taxi Operates to and from Thessaloniki International Airport Macedonia (SKG). You can arrange a ride in advance or upon arrival using either the Aegean Taxi Chalkidiki App, whatsapp, the website or simply call our 24/7 call center to book your ride.`,
        },
      ],
      photo: "./public/assets/taxi-locations/taxi-chalkidiki.jpeg",
      slide: {
        name: "Chalkidiki",
        photo: "/assets/taxi-locations/taxi-chalkidiki.jpeg",
        href: "/taxi/chalkidiki-taxi-app/",
      },
      url: "taxi/chalkidiki-taxi-app/",
      footer: {
        link: "/taxi/chalkidiki-taxi-app/",
        name: "Chalkidiki",
      },
      meta: {
        title: "Chalkidiki Taxi App | Affordable Taxi rides | Available 24/7",
        description:
          "Book your Chalkidiki Taxi via telephone, whatsapp, website. Or download the Aegean Taxi app and request a ride in 2 simple steps.",
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
          flag: "uk",
          dateName: "Tobias - May 2023",
          text: `Pre-booked via the app two weeks ago to take us from airport to Adamantas. The driver was waiting with my name on his board outside of the arrivals. He kind enough to help us with the luggage. The price was more than fair. Highly recommended!`,
        },
        {
          flag: "spain",
          dateName: "Adam - April 2022",
          text: `Excellent service, price agreed by WhatsApp which was very convenient. Received numerous texts with up dates on driver, reg of car etc. Very comfortable journey, clean and air-conditioning. Driver Nikos was very helpful with our luggage. Will use again.
`,
        },
        {
          flag: "french",
          dateName: "Nikolas - July 2019",
          text: `Amazing experience! I just use their services in Milos and I am very satisfied. Affordable prices, polite driver and I was surprised by the fluency he had with English Language.
`,
        },
      ],
      slide: {
        name: "Milos",
        photo: "/assets/taxi-locations/taxi-milos.jpeg",
        href: "/airport-transfers/milos/",
      },

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
`, //// add rest locations
        transportation: {
          heading: "Public Transportation Information",
          info: `During the summer season public transportation (bus) is available. The Airport station is about 100m away from the Airport.
`,
          link_title: "More information may be found at the following link:",
          link: "https://milosbuses.com/?lang=en",
        },
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

    paros: {
      location: "paros",

      meta: {
        title:
          "Aegean Taxi - Reliable and Affordable Paros Airport Transfer Services | Book Your Ride Today",
        description:
          "Book an experienced Paros driver to pick you up. Cheapest prices, great cars, english speaking drivers, 24/7 customer support. Book online, via whatsapp, telephone, or through the App.",
      },
      name: "Paros",
      prices: [
        {
          from: "Paros Airport",
          to: "Paroikia",
          cost: "25",
          duration: "15",
          location: "airport",
        },
        {
          from: "Paros Airport",
          to: "Pounta",
          cost: "20",
          duration: "10",
          location: "Airport",
        },
        {
          from: "Paros Airport",
          to: "Naousa",
          cost: "30",
          duration: "25",
          location: "Airport",
        },
        {
          from: "Paros Airport",
          to: "Chrysi akti",
          cost: "34",
          duration: "30",
          location: "Airport",
        },
      ],
      reviews: [
        {
          flag: "america",
          dateName: "James - August 2021",
          text: `Choosing Aegean Taxi was a great decision for my airport transfer. I make the booking with a phonecall, the price was fair, and the service was top-notch.`,
        },
        {
          flag: "spain",
          dateName: "Marco - May 2022",
          text: `Aegean Taxi provided a seamless experience for my airport transfer. Booking online was easy, the car was comfortable, and the driver was professional. Highly recommend!`,
        },
        {
          flag: "uk",
          dateName: "Kate - July 2019",
          text: `Aegean Taxi's app makes booking a breeze, and their professional drivers provide smooth rides to the airport. Competitive pricing and quality service make to recommend them for airport transfers.`,
        },
      ],
      slide: {
        name: "Paros",
        photo: "/assets/taxi-locations/taxi-paros.jpeg",
        href: "/airport-transfers/paros/",
      },
      airport_Guide: {
        title: "Airport services",
        text: `First Aid
                ATMs
                Car Rental
                Internet Access (WiFi)
                Charging mobile devices
                Shops, Restaurant & Cafes`,
        taxi_information: `Fare Structure
Paros taxi fares are closely monitored and regulated by the local authorities, ensuring fairness and transparency in pricing. The fare structure depends on the nature of your journey:

Short Journeys: For brief trips, you'll be charged a fixed minimum fare, making it an affordable choice for quick travels.

Longer Journeys: Extended journeys are calculated using a taximeter, taking into account the distance traveled. The fare structure is as follows:

Base Fare: €3
Daytime Rate (05:00 to 24:00): €0.68 per kilometer
Nighttime Rate (24:00 to 05:00): €1.36 per kilometer
Additional charges may apply for specific services:

Baggage exceeding 10kg: €0.40
Surcharge for pickups from designated locations such as the train station, bus station, and port: €1.07
Waiting time (one hour): €10.85
Hailing Your Paros Taxi
Securing a taxi on Paros Island is a breeze, thanks to various convenient methods. You can easily flag one down on the street, head to a taxi rank, or get in touch with local radio taxi companies. Regardless of your choice, reliable transportation is just a call or a wave away.

Paros Taxi Tips
Keep in mind that nighttime travel comes with a slightly higher per-kilometer rate (€1.36), so consider this when planning your journey.
Paros taxis are equipped to handle standard luggage, but remember that excess weight may result in additional fees.
Be sure to inquire about any potential extra charges for specific services before beginning your trip.
If you choose a taximeter-based fare, ensure the driver resets it to the base fare of €3 at the start of your journey.

Safe and Efficient Travel
Exploring the wonders of Paros Island becomes a seamless experience when you rely on its well-regulated taxi services. Whether you're indulging in a leisurely vacation or have a packed itinerary, Paros taxis offer the ideal blend of convenience and efficiency for your island adventure.
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
          q: ` I have a different question`,
          a: ` Contat us email: contact@aegeantaxi.com Phone: +302152154000 Whatsapp: +306934702974`,
        },
        {
          q: `What happens if I need to cancel or change my airport transfer booking?`,
          a: `We understand that travel plans can change, so we offer flexible cancellation and change policies. If you need to cancel your booking, just let us know at least 24 hours in advance and we'll provide a full refund. If you need to change your booking, just contact us and we'll do our best to accommodate your request. Please note that changes may be subject to availability and additional charges may apply if there is a price difference between your original booking and the new booking.
`,
        },
      ],
      photo: "./public/assets/taxi-locations/taxi-paros.jpeg",
      url: "airport-transfers/Paros/",
      footer: {
        link: "/airport-transfers/paros/",
        name: "Paros",
      },
    },

    naxos: {
      location: "naxos",

      meta: {
        title:
          "Aegean Taxi - Reliable and Affordable Naxos Airport Transfer Services | Book Your Ride Today",
        description:
          "Book an experienced Naxos driver to pick you up. Cheapest prices, great cars, english speaking drivers, 24/7 customer support. Book online, via whatsapp, telephone, or through the App.",
      },
      name: "Naxos",
      prices: [
        {
          from: "Naxos Airport",
          to: "Naxos town",
          cost: "15",
          duration: "10",
          location: "airport",
        },
        {
          from: "Naxos Airport",
          to: "Plaka",
          cost: "30",
          duration: "20",
          location: "Airport",
        },
        {
          from: "Naxos Airport",
          to: "Agia Anna",
          cost: "20",
          duration: "15",
          location: "Airport",
        },
        {
          from: "Naxos Airport",
          to: "Apologias",
          cost: "75",
          duration: "60",
          location: "Airport",
        },
      ],
      reviews: [
        {
          flag: "america",
          dateName: "William - May 2023",
          text: `Aegean Taxi is good value and a reliable service. Our driver Kostas showed up on time and was super helpful and full of useful local knowledge. We will be very happy to use him again on our departure and highly recommend their service.`,
        },
        {
          flag: "french",
          dateName: "Luca - July 2018",
          text: `We booked our transfers from / to Naxos port last summer. The booking process was very simple and on a fare price. The car was clean brand new`,
        },
        {
          flag: "uk",
          dateName: "Edward - August 2022",
          text: `They were incredible. Very fast to respond and easy to book on short notice. Helped us get to the airport and were right on time for both trips. Beautiful cars and lovely drivers. Highly recommend this for easy transfers in Naxos. Thank you!`,
        },
      ],
      slide: {
        name: "Naxos",
        photo: "/assets/taxi-locations/taxi-naxos.jpeg",
        href: "/airport-transfers/naxos/",
      },
      airport_Guide: {
        title: "Airport services",
        text: `First Aid
                ATMs
                Car Rental
                Internet Access (WiFi)
                Charging mobile devices
                Shops, Restaurant & Cafes`,
        taxi_information: `Fare Structure
          Naxos taxi fares are closely monitored and regulated by the local authorities, ensuring fairness and transparency in pricing. The fare structure depends on the nature of your journey:

          Short Journeys: For brief trips, you'll be charged a fixed minimum fare, making it an affordable choice for quick travels.

          Longer Journeys: Extended journeys are calculated using a taximeter, taking into account the distance traveled. The fare structure is as follows:

          Base Fare: €3
          Daytime Rate (05:00 to 24:00): €0.68 per kilometer
          Nighttime Rate (24:00 to 05:00): €1.36 per kilometer
          Additional charges may apply for specific services:

          Baggage exceeding 10kg: €0.40
          Surcharge for pickups from designated locations such as the train station, bus station, and port: €1.07
          Waiting time (one hour): €10.85
          Hailing Your Naxos Taxi
          Securing a taxi on Naxos Island is a breeze, thanks to various convenient methods. You can easily flag one down on the street, head to a taxi rank, or get in touch with local radio taxi companies. Regardless of your choice, reliable transportation is just a call or a wave away.

          Naxos Taxi Tips
          Keep in mind that nighttime travel comes with a slightly higher per-kilometer rate (€1.36), so consider this when planning your journey.
          Naxos taxis are equipped to handle standard luggage, but remember that excess weight may result in additional fees.
          Be sure to inquire about any potential extra charges for specific services before beginning your trip.
          If you choose a taximeter-based fare, ensure the driver resets it to the base fare of €3 at the start of your journey.

          Safe and Efficient Travel
          Exploring the wonders of Naxos Island becomes a seamless experience when you rely on its well-regulated taxi services. Whether you're indulging in a leisurely vacation or have a packed itinerary, Naxos taxis offer the ideal blend of convenience and efficiency for your island adventure.
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
          q: ` I have a different question`,
          a: ` Contat us email: contact@aegeantaxi.com Phone: +302152154000 Whatsapp: +306934702974`,
        },
        {
          q: `What happens if I need to cancel or change my airport transfer booking?`,
          a: `We understand that travel plans can change, so we offer flexible cancellation and change policies. If you need to cancel your booking, just let us know at least 24 hours in advance and we'll provide a full refund. If you need to change your booking, just contact us and we'll do our best to accommodate your request. Please note that changes may be subject to availability and additional charges may apply if there is a price difference between your original booking and the new booking.
`,
        },
      ],
      photo: "./public/assets/taxi-locations/taxi-naxos.jpeg",
      url: "airport-transfers/Naxos/",
      footer: {
        link: "/airport-transfers/naxos/",
        name: "Naxos",
      },
    },

    heraklion: {
      location: "heraklion",
      meta: {
        title:
          "Aegean Taxi - Reliable and Affordable Heraklion Airport Transfer Services | Book Your Ride Today",
        description:
          "Book an experienced Heraklion driver to pick you up. Cheapest prices, great cars, english speaking drivers, 24/7 customer support. Book online, via whatsapp, telephone, or through the App.",
      },
      name: "Heraklion",
      prices: [
        {
          from: "Heraklion Airport",
          to: "Heraklion town",
          cost: "15",
          duration: "20",
          location: "airport",
        },
        {
          from: "Heraklion Airport",
          to: "Hersonisos",
          cost: "30",
          duration: "15",
          location: "Airport",
        },
        {
          from: "Heraklion Airport",
          to: "Port",
          cost: "20",
          duration: "15",
          location: "Airport",
        },
        {
          from: "Heraklion Airport",
          to: "Kokkini Hani ",
          cost: "25 ",
          duration: "20",
          location: "Airport",
        },
      ],
      reviews: [
        {
          flag: "uk",
          dateName: "Oliver - May 2023",
          text: `Aegean Taxi's app makes booking a breeze, and their professional drivers provide smooth rides to the airport. Competitive pricing and quality service make to recommend them for airport transfers.`,
        },
        {
          flag: "spain",
          dateName: "Marco - May 2022",
          text: `Aegean Taxi provided a seamless experience for my airport transfer. Booking online was easy, the car was comfortable, and the driver was professional. Highly recommend!`,
        },
        {
          flag: "america",
          dateName: "James - August 2022",
          text: `Choosing Aegean Taxi was a great decision for my airport transfer. I make the booking with a phonecall, the price was fair, and the service was top-notch.`,
        },
      ],
      slide: {
        name: "Heraklion",
        photo: "/assets/taxi-locations/taxi-heraklion.jpeg",
        href: "/airport-transfers/heraklion/",
      },

      airport_Guide: {
        title: "Airport services",
        text: `First Aid
                ATMs
                Car Rental
                Internet Access (WiFi)
                Charging mobile devices
                Shops, Restaurant & Cafes`,
        taxi_information: `Fare Structure
                Heraklion taxi fares are closely monitored and regulated by the local authorities, ensuring fairness and transparency in pricing. The fare structure depends on the nature of your journey:

                Short Journeys: For brief trips, you'll be charged a fixed minimum fare, making it an affordable choice for quick travels.

                Longer Journeys: Extended journeys are calculated using a taximeter, taking into account the distance traveled. The fare structure is as follows:

                Base Fare: €3
                Daytime Rate (05:00 to 24:00): €0.68 per kilometer
                Nighttime Rate (24:00 to 05:00): €1.36 per kilometer
                Additional charges may apply for specific services:

                Baggage exceeding 10kg: €0.40
                Surcharge for pickups from designated locations such as the train station, bus station, and port: €1.07
                Waiting time (one hour): €10.85
                Hailing Your Heraklion Taxi
                Securing a taxi on Heraklion Island is a breeze, thanks to various convenient methods. You can easily flag one down on the street, head to a taxi rank, or get in touch with local radio taxi companies. Regardless of your choice, reliable transportation is just a call or a wave away.

                Heraklion Taxi Tips
                Keep in mind that nighttime travel comes with a slightly higher per-kilometer rate (€1.36), so consider this when planning your journey.
                Heraklion taxis are equipped to handle standard luggage, but remember that excess weight may result in additional fees.
                Be sure to inquire about any potential extra charges for specific services before beginning your trip.
                If you choose a taximeter-based fare, ensure the driver resets it to the base fare of €3 at the start of your journey.

                Safe and Efficient Travel
                Exploring the wonders of Heraklion Island becomes a seamless experience when you rely on its well-regulated taxi services. Whether you're indulging in a leisurely vacation or have a packed itinerary, Heraklion taxis offer the ideal blend of convenience and efficiency for your island adventure.
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
          q: ` I have a different question`,
          a: ` Contat us email: contact@aegeantaxi.com Phone: +302152154000 Whatsapp: +306934702974`,
        },
        {
          q: `What happens if I need to cancel or change my airport transfer booking?`,
          a: `We understand that travel plans can change, so we offer flexible cancellation and change policies. If you need to cancel your booking, just let us know at least 24 hours in advance and we'll provide a full refund. If you need to change your booking, just contact us and we'll do our best to accommodate your request. Please note that changes may be subject to availability and additional charges may apply if there is a price difference between your original booking and the new booking.
`,
        },
      ],
      photo: "./public/assets/taxi-locations/taxi-heraklion.jpeg",
      url: "airport-transfers/heraklion/",
      footer: {
        link: "/airport-transfers/heraklion/",
        name: "Heraklion",
      },
    },

    rhodes: {
      location: "rhodes",

      meta: {
        title:
          "Aegean Taxi - Reliable and Affordable Rhodes Airport Transfer Services | Book Your Ride Today",
        description:
          "Book an experienced Rhodes driver to pick you up. Cheapest prices, great cars, english speaking drivers, 24/7 customer support. Book online, via whatsapp, telephone, or through the App.",
      },
      name: "Rhodes",
      prices: [
        {
          from: "Rhodes Airport",
          to: "Rhodes town",
          cost: "30",
          duration: "20",
          location: "airport",
        },
        {
          from: "Rhodes Airport",
          to: "Lindos",
          cost: "70",
          duration: "50",
          location: "Airport",
        },
        {
          from: "Rhodes Airport",
          to: "Faliraki",
          cost: "30",
          duration: "20",
          location: "Airport",
        },
        {
          from: "Rhodes Airport",
          to: "Kolympia",
          cost: "40",
          duration: "35",
          location: "Airport",
        },
      ],
      reviews: [
        {
          flag: "america",
          dateName: "William - May 2023",
          text: `Aegean Taxi is good value and a reliable service. Our driver Kostas showed up on time and was super helpful and full of useful local knowledge. We will be very happy to use him again on our departure and highly recommend their service.`,
        },
        {
          flag: "spain",
          dateName: "Luca - July 2022",
          text: `We booked our transfers from / to Rhodes airport last summer. The booking process was very simple and on a fare price. The car was clean brand new`,
        },
        {
          flag: "uk",
          dateName: "Ed - August 2021",
          text: `They were incredible. Very fast to respond and easy to book on short notice. Helped us get to the airport and were right on time for both trips. Beautiful cars and lovely drivers. Highly recommend this for easy transfers in Naxos. Thank you!`,
        },
      ],

      slide: {
        name: "Rhodes",
        photo: "/assets/taxi-locations/taxi-rhodes.jpeg", // photo needed
        href: "/airport-transfers/rhodes/",
      },

      airport_Guide: {
        title: "Airport services",
        text: `First Aid
                ATMs
                Car Rental
                Internet Access (WiFi)
                Charging mobile devices
                Shops, Restaurant & Cafes`,
        taxi_information: `Fare Structure
          Rhodes taxi fares are closely monitored and regulated by the local authorities, ensuring fairness and transparency in pricing. The fare structure depends on the nature of your journey:

          Short Journeys: For brief trips, you'll be charged a fixed minimum fare, making it an affordable choice for quick travels.

          Longer Journeys: Extended journeys are calculated using a taximeter, taking into account the distance traveled. The fare structure is as follows:

          Base Fare: €3
          Daytime Rate (05:00 to 24:00): €0.68 per kilometer
          Nighttime Rate (24:00 to 05:00): €1.36 per kilometer
          Additional charges may apply for specific services:

          Baggage exceeding 10kg: €0.40
          Surcharge for pickups from designated locations such as the train station, bus station, and port: €1.07
          Waiting time (one hour): €10.85
          Hailing Your Rhodes Taxi
          Securing a taxi on Rhodes Island is a breeze, thanks to various convenient methods. You can easily flag one down on the street, head to a taxi rank, or get in touch with local radio taxi companies. Regardless of your choice, reliable transportation is just a call or a wave away.

          Rhodes Taxi Tips
          Keep in mind that nighttime travel comes with a slightly higher per-kilometer rate (€1.36), so consider this when planning your journey.
          Rhodes taxis are equipped to handle standard luggage, but remember that excess weight may result in additional fees.
          Be sure to inquire about any potential extra charges for specific services before beginning your trip.
          If you choose a taximeter-based fare, ensure the driver resets it to the base fare of €3 at the start of your journey.

          Safe and Efficient Travel
          Exploring the wonders of Rhodes Island becomes a seamless experience when you rely on its well-regulated taxi services. Whether you're indulging in a leisurely vacation or have a packed itinerary, Rhodes taxis offer the ideal blend of convenience and efficiency for your island adventure.
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
          q: ` I have a different question`,
          a: ` Contat us email: contact@aegeantaxi.com Phone: +302152154000 Whatsapp: +306934702974`,
        },
        {
          q: `What happens if I need to cancel or change my airport transfer booking?`,
          a: `We understand that travel plans can change, so we offer flexible cancellation and change policies. If you need to cancel your booking, just let us know at least 24 hours in advance and we'll provide a full refund. If you need to change your booking, just contact us and we'll do our best to accommodate your request. Please note that changes may be subject to availability and additional charges may apply if there is a price difference between your original booking and the new booking.
`,
        },
      ],
      photo: "./public/assets/taxi-locations/taxi-rhodes.jpeg",
      url: "airport-transfers/Rhodes/",
      footer: {
        link: "/airport-transfers/rhodes/",
        name: "Rhodes",
      },
    },

    kos: {
      location: "kos",

      meta: {
        title:
          "Aegean Taxi - Reliable and Affordable Kos Airport Transfer Services | Book Your Ride Today",
        description:
          "Book an experienced Kos driver to pick you up. Cheapest prices, great cars, english speaking drivers, 24/7 customer support. Book online, via whatsapp, telephone, or through the App.",
      },
      name: "Kos",
      prices: [
        {
          from: "Kos Airport",
          to: "Kos town",
          cost: "40",
          duration: "35",
          location: "airport",
        },
        {
          from: "Kos Airport",
          to: "Marmari",
          cost: "20",
          duration: "10",
          location: "Airport",
        },
        {
          from: "Kos Airport",
          to: "Mastichari",
          cost: "15",
          duration: "15",
          location: "Airport",
        },
        {
          from: "Kos Airport",
          to: "Psalidi",
          cost: "45",
          duration: "40",
          location: "Airport",
        },
      ],
      reviews: [
        {
          flag: "uk",
          dateName: "Tobias - May 2023",
          text: `Pre-booked via the app two weeks ago to take us from airport to Kos town. The driver was waiting with my name on his board outside of the arrivals. He kind enough to help us with the luggage. The price was more than fair. Highly recommended!`,
        },
        {
          flag: "french",
          dateName: "Adam - April 2022",
          text: `Excellent service, price agreed by WhatsApp which was very convenient. Received numerous texts with up dates on driver, reg of car etc. Very comfortable journey, clean and air-conditioning. Driver Nikos was very helpful with our luggage. Will use again.`,
        },
        {
          flag: "america",
          dateName: "Nicolas - August 2022",
          text: `Amazing experience! I just use their services in Kos and I am very satisfied. Affordable prices, polite driver and I was surprised by the fluency he had with English Language.`,
        },
      ],
      slide: {
        name: "Kos",
        photo: "/assets/taxi-locations/taxi-kos.jpeg",
        href: "/airport-transfers/kos/",
      },

      airport_Guide: {
        title: "Airport services",
        text: `First Aid
                ATMs
                Car Rental
                Internet Access (WiFi)
                Charging mobile devices
                Shops, Restaurant & Cafes`,
        taxi_information: `Fare Structure
          Kos taxi fares are closely monitored and regulated by the local authorities, ensuring fairness and transparency in pricing. The fare structure depends on the nature of your journey:

          Short Journeys: For brief trips, you'll be charged a fixed minimum fare, making it an affordable choice for quick travels.

          Longer Journeys: Extended journeys are calculated using a taximeter, taking into account the distance traveled. The fare structure is as follows:

          Base Fare: €3
          Daytime Rate (05:00 to 24:00): €0.68 per kilometer
          Nighttime Rate (24:00 to 05:00): €1.36 per kilometer
          Additional charges may apply for specific services:

          Baggage exceeding 10kg: €0.40
          Surcharge for pickups from designated locations such as the train station, bus station, and port: €1.07
          Waiting time (one hour): €10.85
          Hailing Your Kos Taxi
          Securing a taxi on Kos Island is a breeze, thanks to various convenient methods. You can easily flag one down on the street, head to a taxi rank, or get in touch with local radio taxi companies. Regardless of your choice, reliable transportation is just a call or a wave away.

          Kos Taxi Tips
          Keep in mind that nighttime travel comes with a slightly higher per-kilometer rate (€1.36), so consider this when planning your journey.
          Kos taxis are equipped to handle standard luggage, but remember that excess weight may result in additional fees.
          Be sure to inquire about any potential extra charges for specific services before beginning your trip.
          If you choose a taximeter-based fare, ensure the driver resets it to the base fare of €3 at the start of your journey.

          Safe and Efficient Travel
          Exploring the wonders of Kos Island becomes a seamless experience when you rely on its well-regulated taxi services. Whether you're indulging in a leisurely vacation or have a packed itinerary, Kos taxis offer the ideal blend of convenience and efficiency for your island adventure.
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
          q: ` I have a different question`,
          a: ` Contat us email: contact@aegeantaxi.com Phone: +302152154000 Whatsapp: +306934702974`,
        },
        {
          q: `What happens if I need to cancel or change my airport transfer booking?`,
          a: `We understand that travel plans can change, so we offer flexible cancellation and change policies. If you need to cancel your booking, just let us know at least 24 hours in advance and we'll provide a full refund. If you need to change your booking, just contact us and we'll do our best to accommodate your request. Please note that changes may be subject to availability and additional charges may apply if there is a price difference between your original booking and the new booking.
`,
        },
      ],
      photo: "./public/assets/taxi-locations/taxi-kos.jpeg",
      url: "airport-transfers/Kos/",
      footer: {
        link: "/airport-transfers/kos/",
        name: "Kos",
      },
    },

    chalkidiki: {
      location: "chalkidiki",

      meta: {
        title:
          "Aegean Taxi - Reliable and Affordable Chalkidiki Airport Transfer Services | Book Your Ride Today",
        description:
          "Book an experienced Chalkidiki driver to pick you up. Cheapest prices, great cars, english speaking drivers, 24/7 customer support. Book online, via whatsapp, telephone, or through the App.",
      },
      name: "Chalkidiki",
      prices: [
        {
          from: "Thessaloniki Airport",
          to: "Sani Beach",
          cost: "65",
          duration: "45",
          location: "airport",
        },
        {
          from: "Thessaloniki Airport",
          to: "Polychrono",
          cost: "80",
          duration: "75",
          location: "Airport",
        },
        {
          from: "Thessaloniki Airport",
          to: "Chaniotis",
          cost: "82",
          duration: "80",
          location: "Airport",
        },
        {
          from: "Thessaloniki Airport",
          to: "Kryopigi",
          cost: "73",
          duration: "65",
          location: "Airport",
        },
      ],
      reviews: [
        {
          flag: "uk",
          dateName: "Edward - May 2022",
          text: `They were incredible. Very fast to respond and easy to book on short notice. Helped us get to the airport and were right on time for both trips. Beautiful cars and lovely drivers. Highly recommend this for easy transfers in Chalkidiki. Thank you!`,
        },
        {
          flag: "spain",
          dateName: "Luca - May 2023",
          text: `We booked our transfers from / to Thessaloniki airport last summer. The booking process was very simple and on a fare price. The car was clean brand new!`,
        },
        {
          flag: "america",
          dateName: "William - August 2022",
          text: `Aegean Taxi is good value and a reliable service. Our driver Kostas showed up on time and was super helpful and full of useful local knowledge. We will be very happy to use him again on our departure and highly recommend their service.`,
        },
      ],
      slide: {
        name: "Chalkidiki",
        photo: "/assets/taxi-locations/taxi-chalkidiki.jpeg",
        href: "/airport-transfers/chalkidiki/",
      },
      airport_Guide: {
        title: "Airport services",
        text: `First Aid
                ATMs
                Car Rental
                Internet Access (WiFi)
                Charging mobile devices
                Shops, Restaurant & Cafes`,
        taxi_information: `Fare Structure
          Chalkidiki taxi fares are closely monitored and regulated by the local authorities, ensuring fairness and transparency in pricing. The fare structure depends on the nature of your journey:

          Short Journeys: For brief trips, you'll be charged a fixed minimum fare, making it an affordable choice for quick travels.

          Longer Journeys: Extended journeys are calculated using a taximeter, taking into account the distance traveled. The fare structure is as follows:

          Base Fare: €3
          Daytime Rate (05:00 to 24:00): €0.68 per kilometer
          Nighttime Rate (24:00 to 05:00): €1.36 per kilometer
          Additional charges may apply for specific services:

          Baggage exceeding 10kg: €0.40
          Surcharge for pickups from designated locations such as the train station, bus station, and port: €1.07
          Waiting time (one hour): €10.85
          Hailing Your Chalkidiki Taxi
          Securing a taxi on Chalkidiki is a breeze, thanks to various convenient methods. You can easily flag one down on the street, head to a taxi rank, or get in touch with local radio taxi companies. Regardless of your choice, reliable transportation is just a call or a wave away.

          Chalkidiki Taxi Tips
          Keep in mind that nighttime travel comes with a slightly higher per-kilometer rate (€1.36), so consider this when planning your journey.
          Chalkidiki taxis are equipped to handle standard luggage, but remember that excess weight may result in additional fees.
          Be sure to inquire about any potential extra charges for specific services before beginning your trip.
          If you choose a taximeter-based fare, ensure the driver resets it to the base fare of €3 at the start of your journey.

          Safe and Efficient Travel
          Exploring the wonders of Chalkidiki becomes a seamless experience when you rely on its well-regulated taxi services. Whether you're indulging in a leisurely vacation or have a packed itinerary, Chalkidiki taxis offer the ideal blend of convenience and efficiency for your adventure.
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
          q: ` I have a different question`,
          a: ` Contat us email: contact@aegeantaxi.com Phone: +302152154000 Whatsapp: +306934702974`,
        },
        {
          q: `What happens if I need to cancel or change my airport transfer booking?`,
          a: `We understand that travel plans can change, so we offer flexible cancellation and change policies. If you need to cancel your booking, just let us know at least 24 hours in advance and we'll provide a full refund. If you need to change your booking, just contact us and we'll do our best to accommodate your request. Please note that changes may be subject to availability and additional charges may apply if there is a price difference between your original booking and the new booking.
`,
        },
      ],
      photo: "./public/assets/taxi-locations/taxi-chalkidiki.jpeg",
      url: "airport-transfers/chalkidiki/",
      footer: {
        link: "/airport-transfers/chalkidiki/",
        name: "Chalkidiki",
      },
    },

    corfu: {
      location: "corfu",

      meta: {
        title:
          "Aegean Taxi - Reliable and Affordable Corfu Airport Transfer Services | Book Your Ride Today",
        description:
          "Book an experienced Corfu driver to pick you up. Cheapest prices, great cars, english speaking drivers, 24/7 customer support. Book online, via whatsapp, telephone, or through the App.",
      },
      name: "Corfu",
      prices: [
        {
          from: "Corfu Airport",
          to: "Corfu town",
          cost: "15",
          duration: "10",
          location: "airport",
        },
        {
          from: "Corfu Airport",
          to: "Corfu Port",
          cost: "15",
          duration: "20",
          location: "Airport",
        },
        {
          from: "Corfu Airport",
          to: "Paliokastritsa",
          cost: "45",
          duration: "35",
          location: "Airport",
        },
        {
          from: "Corfu Airport",
          to: "Limni",
          cost: "27",
          duration: "25",
          location: "Airport",
        },
      ],
      reviews: [
        {
          flag: "america",
          dateName: "James - May 2023",
          text: `Choosing Aegean Taxi was a great decision for my airport transfer. I make the booking with a phonecall, the price was fair, and the service was top-notch.`,
        },
        {
          flag: "spain",
          dateName: "Maco - July 2022",
          text: `Aegean Taxi provided a seamless experience for my airport transfer. Booking online was easy, the car was comfortable, and the driver was professional. Highly recommend!`,
        },
        {
          flag: "uk",
          dateName: "Oliver - August 2021",
          text: `Aegean Taxi's app makes booking a breeze, and their professional drivers provide smooth rides to the airport. Competitive pricing and quality service make to recommend them for airport transfers.`,
        },
      ],
      slide: {
        name: "Corfu",
        photo: "/assets/taxi-locations/taxi-corfu.jpeg", // photo needed
        href: "/airport-transfers/corfu/",
      },
      airport_Guide: {
        title: "Airport services",
        text: `First Aid
                ATMs
                Car Rental
                Internet Access (WiFi)
                Charging mobile devices
                Shops, Restaurant & Cafes`,
        taxi_information: `Fare Structure
          Corfu taxi fares are closely monitored and regulated by the local authorities, ensuring fairness and transparency in pricing. The fare structure depends on the nature of your journey:

          Short Journeys: For brief trips, you'll be charged a fixed minimum fare, making it an affordable choice for quick travels.

          Longer Journeys: Extended journeys are calculated using a taximeter, taking into account the distance traveled. The fare structure is as follows:

          Base Fare: €3
          Daytime Rate (05:00 to 24:00): €0.68 per kilometer
          Nighttime Rate (24:00 to 05:00): €1.36 per kilometer
          Additional charges may apply for specific services:

          Baggage exceeding 10kg: €0.40
          Surcharge for pickups from designated locations such as the train station, bus station, and port: €1.07
          Waiting time (one hour): €10.85
          Hailing Your Corfu Taxi
          Securing a taxi on Corfu Island is a breeze, thanks to various convenient methods. You can easily flag one down on the street, head to a taxi rank, or get in touch with local radio taxi companies. Regardless of your choice, reliable transportation is just a call or a wave away.

          Corfu Taxi Tips
          Keep in mind that nighttime travel comes with a slightly higher per-kilometer rate (€1.36), so consider this when planning your journey.
          Corfu taxis are equipped to handle standard luggage, but remember that excess weight may result in additional fees.
          Be sure to inquire about any potential extra charges for specific services before beginning your trip.
          If you choose a taximeter-based fare, ensure the driver resets it to the base fare of €3 at the start of your journey.

          Safe and Efficient Travel
          Exploring the wonders of Corfu Island becomes a seamless experience when you rely on its well-regulated taxi services. Whether you're indulging in a leisurely vacation or have a packed itinerary, Corfu taxis offer the ideal blend of convenience and efficiency for your island adventure.
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
          q: ` I have a different question`,
          a: ` Contat us email: contact@aegeantaxi.com Phone: +302152154000 Whatsapp: +306934702974`,
        },
        {
          q: `What happens if I need to cancel or change my airport transfer booking?`,
          a: `We understand that travel plans can change, so we offer flexible cancellation and change policies. If you need to cancel your booking, just let us know at least 24 hours in advance and we'll provide a full refund. If you need to change your booking, just contact us and we'll do our best to accommodate your request. Please note that changes may be subject to availability and additional charges may apply if there is a price difference between your original booking and the new booking.
`,
        },
      ],
      photo: "./public/assets/taxi-locations/taxi-corfu.jpeg",
      url: "airport-transfers/corfu/",
      footer: {
        link: "/airport-transfers/corfu/",
        name: "Corfu",
      },
    },
  },
};
