import { Metadata } from "next";

type Props = {
  params: { location: string };
};

//components
import ToursHeader from "@/components/toursHeader";
import TourBookingOptions from "@/components/tourBookingOptions";
import WhyTours from "@/components/whyTours";
import LocationSelectedTours from "@/components/locationSelectedTours/locationSelectedTours";
import ToursReviews from "@/components/reviews/toursReviews";
import MeetOurDrivers from "@/components/meetOurDrivers/meetOurDrivers";
import ToursTopSights from "@/components/toursTopSights/toursTopSights";
import SectionSpacer from "@/components/layout/sectionSpacer";
import { locationDetails } from "@/utils/locationDetails";

export async function generateStaticParams() {
  const locations = Object.values(locationDetails.airports).map(
    (innerObject: any) => {
      return { location: innerObject.location };
    }
  );
  const taxi = [
    { location: "athens" },
    { location: "mykonos" },
    { location: "santorini" },
    [...locations],
  ];

  return taxi.map((taxi: any) => ({
    location: taxi.location,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const location = params.location;
  let title = "Athens Tours - Book Your Experience with Aegean Taxi";
  let description =
    "Book your Athens tour with Aegean Taxi and explore the best sights and attractions the city has to offer. Our experienced guides and comfortable vehicles will make your tour a memorable experience.";

  if (params.location) {
    const city = params.location.toLowerCase();

    switch (city) {
      case "athens":
        title = "Athens Tours - Book Your Experience with Aegean Taxi";
        description =
          "Book your Athens tour with Aegean Taxi and explore the best sights and attractions the city has to offer. Our experienced guides and comfortable vehicles will make your tour a memorable experience.";
        break;
      case "mykonos":
        title = "Mykonos Tours - Book Your Experience with Aegean Taxi";
        description =
          "Book your Mykonos tour with Aegean Taxi and explore the best sights and attractions the city has to offer. Our experienced guides and comfortable vehicles will make your tour a memorable experience.";
        break;
      case "santorini":
        title = "Santorini Tours - Book Your Experience with Aegean Taxi";
        description =
          "Book your Santorini tour with Aegean Taxi and explore the best sights and attractions the city has to offer. Our experienced guides and comfortable vehicles will make your tour a memorable experience.";
        break;
    }
  }

  return {
    title,
    description,
  };
}

export default function Page({ params }: { params: { location: string } }) {
  return (
    <>
      <ToursHeader />
      <SectionSpacer mdt={6}>
        <LocationSelectedTours />
      </SectionSpacer>
      <TourBookingOptions />
      <SectionSpacer xst={6} xsb={6} mdt={6} mdb={6}>
        <WhyTours />
      </SectionSpacer>
      <ToursReviews />
      <MeetOurDrivers />
      <ToursTopSights />
    </>
  );
}
