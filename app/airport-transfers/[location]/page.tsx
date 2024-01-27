import { Metadata } from "next";

type Props = {
  params: { location: string };
};

//components
import AirportHeader from "@/components/airportHeader";
import WaysToRide from "@/components/waysToRide";
import AirportBookingOptions from "@/components/airportBookingOptions";
import WhyBooAirport from "@/components/whyBookAirport";
import AirportReviews from "@/components/reviews/airportReviews";
import SectionSpacer from "@/components/layout/sectionSpacer";
import AirportFaq from "@/components/faq/airportFaq";
import AirportFares from "@/components/airportFares/airportFares";
import AirportGuides from "@/components/airportGuides/airportGuides";
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

  console.log("locations---generateStaticParams", JSON.stringify(taxi));

  return taxi.map((taxi: any) => ({
    location: taxi.location,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const location = params.location;
  console.log("location", location);
  let title =
    "Aegean Taxi - Reliable and Affordable Athens Airport Transfer Services | Book Your Ride Today";
  let description =
    "The easiest way to book your taxi and transfer in Greece. Book in 2 simple steps. Quality cars, cheapest prices, english speaking drivers";

  if (params.location) {
    const city = params.location.toLowerCase();

    switch (city) {
      case "athens":
        title =
          "Aegean Taxi - Reliable and Affordable Athens Airport Transfer Services | Book Your Ride Today";
        description =
          "Book an experienced Athens driver to pick you up. Cheapest prices, great cars, english speaking drivers, 24/7 customer support. Book online, via whatsapp, telephone, or through the App.";
        break;
      case "mykonos":
        title =
          "Aegean Taxi - Reliable and Affordable Mykonos Airport Transfer Services | Book Your Ride Today";
        description =
          "Book an experienced Mykonos driver to pick you up. Cheapest prices, great cars, english speaking drivers, 24/7 customer support. Book online, via whatsapp, telephone, or through the App.";
        break;
      case "santorini":
        title =
          "Aegean Taxi - Reliable and Affordable Santorini Airport Transfer Services | Book Your Ride Today";
        description =
          "Book an experienced Santorini driver to pick you up. Cheapest prices, great cars, english speaking drivers, 24/7 customer support. Book online, via whatsapp, telephone, or through the App.";
        break;
      default:
        title = locationDetails.airports[location].meta.title;
        description = locationDetails.airports[location].meta.description;
    }
  }

  return {
    title,
    description,
  };
}

export default function Page({ params }: { params: Props }) {
  return (
    <>
      <AirportHeader />
      <SectionSpacer mdt={6}>
        <WhyBooAirport />
      </SectionSpacer>
      <SectionSpacer xst={6} xsb={6} mdt={6} mdb={6}>
        <WaysToRide />
      </SectionSpacer>
      <AirportBookingOptions />
      <AirportFares />
      <SectionSpacer xst={6} xsb={6} mdt={6} mdb={6}>
        <AirportReviews />
      </SectionSpacer>
      <AirportGuides />
      <AirportFaq />
    </>
  );
}
