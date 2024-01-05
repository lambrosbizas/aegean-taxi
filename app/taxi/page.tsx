//components
import TaxiHeader from "@/components/taxiHeader";
import WaysToRide from "@/components/waysToRide";
import TaxiBookingOptions from "@/components/taxiBookingOptions";
import WhyBook from "@/components/whyBook";
import Locations from "@/components/locations";
import Reviews from "@/components/reviews/reviews";
import SectionSpacer from "@/components/layout/sectionSpacer";

export default function Taxi() {
  return (
    <>
      <TaxiHeader />
      <SectionSpacer mdt={6}>
        <WhyBook />
      </SectionSpacer>
      <TaxiBookingOptions />
      <SectionSpacer xst={6} xsb={6} mdt={6} mdb={6}>
        <WaysToRide />
      </SectionSpacer>
      <Reviews location={"default"} />
      <Locations />
    </>
  );
}
