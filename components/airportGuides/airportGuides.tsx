"use client";
import { useParams } from "next/navigation";

import AthensGuide from "./athensGuide";
import MykonosGuide from "./mykonosGuide";
import SantoriniGuide from "./santoriniGuide";
import AirportFares from "../airportFares/Fares";

export default function TaxiFares() {
  const params: any = useParams();
  const location = params.location.toLowerCase();

  return (
    <>
      {location === "athens" && <AthensGuide />}
      {location === "mykonos" && <MykonosGuide />}
      {location === "santorini" && <SantoriniGuide />}
      {<AirportFares location={location} />}
    </>
  );
}
