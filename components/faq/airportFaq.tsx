"use client";
import { useParams } from "next/navigation";

import Faq from "@/components/faq/faq";
import AirportAthensFaq from "@/components/faq/airportAthens";
import AirportMykonosFaq from "@/components/faq/airportMykonos";
import AirportSantoriniFaq from "@/components/faq/airportSantorini";

export default function AirportFaq() {
  const params: any = useParams();
  let reviewsComponent = <Faq />;

  if (params.location) {
    const city =
      params.location.charAt(0).toUpperCase() + params.location.slice(1);
    switch (city) {
      case "Athens":
        reviewsComponent = <AirportAthensFaq />;
        break;
      case "Mykonos":
        reviewsComponent = <AirportMykonosFaq />;
        break;
      case "Santorini":
        reviewsComponent = <AirportSantoriniFaq />;
        break;
      default:
        reviewsComponent = <Faq location={params.location} type="airports" />;
        break;
    }
  }

  //FIXME: It seems that FAQ is the same for each page
  // return reviewsComponent;
  return reviewsComponent;
}
