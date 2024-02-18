"use client";
import { useParams } from "next/navigation";

import AthensGuide from "./athensGuide";
import MykonosGuide from "./mykonosGuide";
import AirportFares from "../airportFares/Fares";
import SantoriniGuide from "./santoriniGuide";
import AirportGuide from "./airportGuide";

export default function TaxiFares() {
  const params: any = useParams();
  const location = params.location.toLowerCase();
  const defaultList = ["athens", "mykonos", "santorini"];

  return (
    <>
      {location === "athens" && <AthensGuide />}
      {location === "mykonos" && <MykonosGuide />}
      {location === "santorini" && <SantoriniGuide />}
      {!defaultList.includes(location) && <AirportGuide location={location} />}
    </>
  );
}
