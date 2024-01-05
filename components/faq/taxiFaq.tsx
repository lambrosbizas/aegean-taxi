"use client";
import { useParams } from "next/navigation";

import Faq from "@/components/faq/faq";
import TaxiAthensFaq from "@/components/faq/taxiAthens";
import TaxiMykonosFaq from "@/components/faq/taxiMykonos";
import TaxiSantoriniFaq from "@/components/faq/taxiSantorini";
import TaxiCorfuFaq from "@/components/faq/taxiCorfu";
import TaxiRhodesFaq from "@/components/faq/taxiRhodes";

export default function TaxiFaq() {
  const params: any = useParams();
  let reviewsComponent = <Faq />;

  if (params.location) {
    const city = (
      params.location.charAt(0).toUpperCase() + params.location.slice(1)
    ).replace("-taxi-app", "");
    switch (city) {
      case "Athens":
        reviewsComponent = <TaxiAthensFaq />;
        break;
      case "Mykonos":
        reviewsComponent = <TaxiMykonosFaq />;
        break;
      case "Santorini":
        reviewsComponent = <TaxiSantoriniFaq />;
        break;
      case "Corfu":
        reviewsComponent = <TaxiCorfuFaq />;
        break;
      case "Rhodes":
        reviewsComponent = <TaxiRhodesFaq />;
        break;
      default:
        reviewsComponent = <Faq location={params.location} />;
        break;
    }
  }

  return reviewsComponent;
}
