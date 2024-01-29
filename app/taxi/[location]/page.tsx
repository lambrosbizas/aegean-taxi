import { Metadata } from "next";

type Props = {
  params: { location: string };
};

//components
import TaxiHeader from "@/components/taxiHeader";
import WaysToRide from "@/components/waysToRide";
import TaxiBookingOptions from "@/components/taxiBookingOptions";
import WhyBook from "@/components/whyBook";
import SectionSpacer from "@/components/layout/sectionSpacer";
import TaxiReviews from "@/components/reviews/taxiReviews";
import TaxiFares from "@/components/taxiFares/taxiFares";
import TaxiFindUs from "@/components/findUs/taxiFindUs";
import TaxiFaq from "@/components/faq/taxiFaq";
import { locationDetails } from "@/utils/locationDetails";

export async function generateStaticParams() {
  const locations = Object.values(locationDetails.taxi_locations).map(
    (innerObject: any) => {
      return { location: innerObject.location };
    }
  );
  const taxi = [
    { location: "athens-taxi-app" },
    { location: "mykonos-taxi-app" },
    { location: "santorini-taxi-app" },
    { location: "corfu-taxi-app" },
    { location: "rhodes-taxi-app" },
    ...locations,
  ];

  return taxi.map((taxi: any) => ({
    location: taxi.location,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const location = params.location;
  let title =
    "Taxi App, Affordable Taxi rides in Athens, Mykonos, Santorini | Available 24/7 ";
  let description =
    "The easiest way to book your taxi and transfer in Greece. Book in 2 simple steps. Quality cars, cheapest prices, english speaking drivers";
  const locations = ["athens", "mykonos", "santorini", "corfu", "rhodes"];

  if (params.location) {
    const city = params.location.toLowerCase().replace("-taxi-app", "");

    switch (city) {
      case "athens":
        title = "Athens Taxi App | Affordable Taxi rides | Available 24/7";
        description =
          "Book your Athens Taxi via telephone, whatsapp, website. Or download the Aegean Taxi app and request a ride in 2 simple steps. ";
        break;
      case "mykonos":
        title = "Mykonos Taxi App | Affordable Taxi rides | Available 24/7";
        description =
          "Book your Mykonos Taxi via telephone, whatsapp, website. Or download the Aegean Taxi app and request a ride in 2 simple steps. ";
        break;
      case "santorini":
        title = "Santorini Taxi App | Affordable Taxi rides | Available 24/7";
        description =
          "Book your Santorini Taxi via telephone, whatsapp, website. Or download the Aegean Taxi app and request a ride in 2 simple steps. ";
        break;
      case "corfu":
        title = "Corfu Taxi App | Affordable Taxi rides | Available 24/7";
        description =
          "Book your Corfu Taxi via telephone, whatsapp, website. Or download the Aegean Taxi app and request a ride in 2 simple steps. ";
        break;
      case "rhodes":
        title = "Rhodes Taxi App | Affordable Taxi rides | Available 24/7";
        description =
          "Book your Rhodes Taxi via telephone, whatsapp, website. Or download the Aegean Taxi app and request a ride in 2 simple steps. ";
        break;
      default:
        title = "Rhodes Taxi App | Affordable Taxi rides | Available 24/7";
        description =
          "Book your Rhodes Taxi via telephone, whatsapp, website. Or download the Aegean Taxi app and request a ride in 2 simple steps. ";
        break;
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
      <TaxiHeader />
      <WaysToRide />
      <TaxiBookingOptions />
      <SectionSpacer mdt={6}>
        <WhyBook />
      </SectionSpacer>
      <TaxiReviews />
      <TaxiFindUs />
      <TaxiFares />
      <TaxiFaq />
    </>
  );
}
