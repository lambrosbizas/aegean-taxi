"use client";
import React, { useState, useEffect, useContext, useRef } from "react";
import { useRouter } from "next/navigation";

// DayJS
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

// MUI
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import CropSquareSharp from "@mui/icons-material/CropSquareSharp";
import Divider from "@mui/material/Divider";
import EventSharpIcon from "@mui/icons-material/EventSharp";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid"; // Grid version 1
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import MyLocationOutlinedIcon from "@mui/icons-material/MyLocationOutlined";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { DigitalClock } from "@mui/x-date-pickers/DigitalClock";

// Styles
import styles from "@/components/requestRideForm/form.module.scss";

// Google Maps
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { greyMap } from "./mapStyles";

// context
import { AppContext } from "@/context/appState";

// hooks
import useStorage from "@/hooks/useStorage";

// components
import PredictionListItem from "@/components/predictions-list";
import CarOptions from "@/components/car-options";
import Driver from "@/components/driver";

// models
import { BookingState } from "@/types/bookingState";

import TAXI from "public/assets/car-top.png";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault("Europe/Athens");

// Google Maps Component
function GoogleMapComponent({
  center,
  currentLocation,
  directions,
  directionsRenderer,
  directionsService,
  geocoderService,
  placesService,
  zoom,
  driverLocation,
  state,
  removeMarkers,
  children,
  ...options
}: {
  center: google.maps.LatLngLiteral;
  currentLocation?: google.maps.LatLngLiteral;
  directions?: any;
  directionsRenderer: any;
  directionsService: any;
  geocoderService: any;
  placesService: any;
  zoom?: number;
  driverLocation?: any;
  state?: any;
  removeMarkers?: boolean;
  children?: any;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [mapWrapper, setMapWrapper] = useState<google.maps.Map>();
  const [markers, setMarkers] = useState<Array<any>>([]);

  const makeMarker = (position: any, icon: any, title: string, map: any) => {
    if (typeof window !== "undefined") {
      return new window.google.maps.Marker({
        position: position,
        map: map,
        icon: icon,
        title: title,
      });
    }
  };

  useEffect(() => {
    console.log("init map");

    if (ref.current && !mapWrapper) {
      if (currentLocation) {
        center = currentLocation;
      }

      const map = new window.google.maps.Map(ref.current, {
        center,
        zoom,
        zoomControl: false,
        disableDefaultUI: true,
        gestureHandling: "none",
        styles: greyMap,
      });

      setMapWrapper(() => map);
      directionsRenderer.setMap(map);
    }

    if (currentLocation) {
      clearMarkers();
      setMarkers([
        makeMarker(
          currentLocation,
          {
            path: "M10.001,6.54c-0.793,0-1.438,0.645-1.438,1.438c0,0.792,0.645,1.435,1.438,1.435c0.791,0,1.435-0.644,1.435-1.435C11.437,7.184,10.792,6.54,10.001,6.54z M10.001,8.454c-0.264,0-0.479-0.213-0.479-0.476c0-0.265,0.215-0.479,0.479-0.479c0.263,0,0.477,0.214,0.477,0.479C10.478,8.241,10.265,8.454,10.001,8.454z, M10,3.021c-2.815,0-5.106,2.291-5.106,5.106c0,0.781,0.188,1.549,0.562,2.282c0.011,0.062,0.036,0.12,0.07,0.174l0.125,0.188c0.074,0.123,0.151,0.242,0.225,0.341l3.727,5.65c0.088,0.135,0.238,0.215,0.399,0.215c0.161,0,0.311-0.08,0.4-0.215l3.752-5.68c0.057-0.08,0.107-0.159,0.153-0.232l0.132-0.199c0.033-0.05,0.054-0.104,0.064-0.159c0.401-0.757,0.605-1.551,0.605-2.366C15.107,5.312,12.815,3.021,10,3.021z M13.596,10.152c-0.017,0.03-0.029,0.062-0.039,0.095l-0.056,0.084c-0.043,0.066-0.085,0.133-0.139,0.211L10,15.629l-3.339-5.061c-0.068-0.095-0.132-0.193-0.203-0.309l-0.051-0.078c-0.009-0.031-0.021-0.061-0.038-0.089C6.026,9.458,5.852,8.796,5.852,8.127c0-2.287,1.861-4.148,4.147-4.148c2.288,0,4.149,1.861,4.149,4.148C14.148,8.823,13.963,9.503,13.596,10.152z",
            fillColor: "#000",
            fillOpacity: 1,
            strokeWeight: 0,
            rotation: 0,
            scale: 2,
            anchor: new window.google.maps.Point(10.5, 18),
          },
          "Current location",
          mapWrapper
        ),
      ]);

      directionsRenderer.setMap(mapWrapper);

      if (mapWrapper) {
        placesService = new google.maps.places.PlacesService(mapWrapper);
      }
    }
  }, [ref, mapWrapper]);

  const clearMarkers = () => {
    // remove previous markers
    if (markers.length) {
      markers.forEach((m) => {
        m.setMap(null);
      });

      setMarkers([]);
    }
  };

  useEffect(() => {
    if (removeMarkers) {
      if (markers.length) {
        markers.forEach((m) => {
          m.setMap(null);
        });

        setMarkers([]);
      }
    }

    return () => {};
  }, [removeMarkers, markers]);

  useEffect(() => {
    console.log("map directions");
    if (directions) {
      directionsRenderer.setDirections(directions);
      let leg = directions.routes[0].legs[0];

      // remove previous markers
      clearMarkers();
      // if (markers.length) {
      //   markers.forEach((m) => {
      //     m.setMap(null);
      //   });

      //   setMarkers([]);
      // }

      let newMarkers = [];
      newMarkers.push(
        makeMarker(
          leg.start_location,
          {
            path: "M10.001,6.54c-0.793,0-1.438,0.645-1.438,1.438c0,0.792,0.645,1.435,1.438,1.435c0.791,0,1.435-0.644,1.435-1.435C11.437,7.184,10.792,6.54,10.001,6.54z M10.001,8.454c-0.264,0-0.479-0.213-0.479-0.476c0-0.265,0.215-0.479,0.479-0.479c0.263,0,0.477,0.214,0.477,0.479C10.478,8.241,10.265,8.454,10.001,8.454z, M10,3.021c-2.815,0-5.106,2.291-5.106,5.106c0,0.781,0.188,1.549,0.562,2.282c0.011,0.062,0.036,0.12,0.07,0.174l0.125,0.188c0.074,0.123,0.151,0.242,0.225,0.341l3.727,5.65c0.088,0.135,0.238,0.215,0.399,0.215c0.161,0,0.311-0.08,0.4-0.215l3.752-5.68c0.057-0.08,0.107-0.159,0.153-0.232l0.132-0.199c0.033-0.05,0.054-0.104,0.064-0.159c0.401-0.757,0.605-1.551,0.605-2.366C15.107,5.312,12.815,3.021,10,3.021z M13.596,10.152c-0.017,0.03-0.029,0.062-0.039,0.095l-0.056,0.084c-0.043,0.066-0.085,0.133-0.139,0.211L10,15.629l-3.339-5.061c-0.068-0.095-0.132-0.193-0.203-0.309l-0.051-0.078c-0.009-0.031-0.021-0.061-0.038-0.089C6.026,9.458,5.852,8.796,5.852,8.127c0-2.287,1.861-4.148,4.147-4.148c2.288,0,4.149,1.861,4.149,4.148C14.148,8.823,13.963,9.503,13.596,10.152z",
            fillColor: "#000",
            fillOpacity: 1,
            strokeWeight: 0,
            rotation: 0,
            scale: 2,
            anchor: new window.google.maps.Point(10.5, 18),
          },
          leg.start_address,
          mapWrapper
        )
      );
      newMarkers.push(
        makeMarker(
          leg.end_location,
          {
            path: "M 16.335938 3.917969 L 13.707031 3.917969 L 13.707031 2.882812 C 13.707031 2.082031 13.058594 1.433594 12.257812 1.433594 L 6.324219 1.433594 L 6.324219 1.113281 C 6.324219 0.5 5.824219 0 5.210938 0 C 4.59375 0 4.097656 0.5 4.097656 1.113281 L 4.097656 17.453125 L 3.488281 17.453125 C 2.78125 17.453125 2.210938 18.023438 2.210938 18.726562 C 2.210938 19.429688 2.78125 20 3.488281 20 L 6.933594 20 C 7.640625 20 8.210938 19.429688 8.210938 18.726562 C 8.210938 18.023438 7.640625 17.453125 6.933594 17.453125 L 6.324219 17.453125 L 6.324219 9.449219 L 11.121094 9.449219 L 11.121094 10.480469 C 11.121094 11.285156 11.769531 11.933594 12.570312 11.933594 L 16.335938 11.933594 C 17.136719 11.933594 17.789062 11.285156 17.789062 10.480469 L 17.789062 5.367188 C 17.789062 4.566406 17.136719 3.917969 16.335938 3.917969 Z M 16.335938 3.917969",
            fillColor: "#000",
            fillOpacity: 1,
            strokeWeight: 0,
            rotation: 0,
            scale: 1.5,
            anchor: new window.google.maps.Point(5.5, 20),
          },
          leg.end_address,
          mapWrapper
        )
      );

      setMarkers(newMarkers);

      directionsRenderer.setOptions({
        polylineOptions: {
          strokeColor: "#222",
        },
      });

      directionsRenderer.setMap(mapWrapper);
    }
  }, [directions]);

  useEffect(() => {
    console.log("driver location map");

    directionsRenderer.setDirections({ routes: [] });
    if (state && state.driverLocation) {
      const reverseGeocoding = async () => {
        const data = await geocoderService
          .geocode({
            location: {
              lat: state.driverLocation.lat,
              lng: state.driverLocation.lng,
            },
          })
          .then((response: any) => {
            if (response.results[0]) {
              directionsRenderer.setDirections({ routes: [] });

              directionsService
                .route({
                  origin: {
                    query: response.results[0].formatted_address,
                  },
                  destination: {
                    query: state.pickUpLocation,
                  },
                  travelMode: google.maps.TravelMode.DRIVING,
                })
                .then((response: any) => {
                  console.log(22222, response);
                  directionsRenderer.setOptions({
                    polylineOptions: {
                      strokeColor: "#222",
                    },
                  });
                  directionsRenderer.setDirections(response);

                  clearMarkers();

                  let newMarkers = [];
                  newMarkers.push(
                    new window.google.maps.Marker({
                      position: {
                        lat: state.driverLocation.lat,
                        lng: state.driverLocation.lng,
                      },
                      map: mapWrapper,
                      icon: TAXI.src,
                      title: "driver location",
                      animation: google.maps.Animation.BOUNCE,
                    })
                  );

                  newMarkers.push(
                    makeMarker(
                      {
                        lat: state.startLocationLat,
                        lng: state.startLocationLng,
                      },
                      {
                        path: "M10.001,6.54c-0.793,0-1.438,0.645-1.438,1.438c0,0.792,0.645,1.435,1.438,1.435c0.791,0,1.435-0.644,1.435-1.435C11.437,7.184,10.792,6.54,10.001,6.54z M10.001,8.454c-0.264,0-0.479-0.213-0.479-0.476c0-0.265,0.215-0.479,0.479-0.479c0.263,0,0.477,0.214,0.477,0.479C10.478,8.241,10.265,8.454,10.001,8.454z, M10,3.021c-2.815,0-5.106,2.291-5.106,5.106c0,0.781,0.188,1.549,0.562,2.282c0.011,0.062,0.036,0.12,0.07,0.174l0.125,0.188c0.074,0.123,0.151,0.242,0.225,0.341l3.727,5.65c0.088,0.135,0.238,0.215,0.399,0.215c0.161,0,0.311-0.08,0.4-0.215l3.752-5.68c0.057-0.08,0.107-0.159,0.153-0.232l0.132-0.199c0.033-0.05,0.054-0.104,0.064-0.159c0.401-0.757,0.605-1.551,0.605-2.366C15.107,5.312,12.815,3.021,10,3.021z M13.596,10.152c-0.017,0.03-0.029,0.062-0.039,0.095l-0.056,0.084c-0.043,0.066-0.085,0.133-0.139,0.211L10,15.629l-3.339-5.061c-0.068-0.095-0.132-0.193-0.203-0.309l-0.051-0.078c-0.009-0.031-0.021-0.061-0.038-0.089C6.026,9.458,5.852,8.796,5.852,8.127c0-2.287,1.861-4.148,4.147-4.148c2.288,0,4.149,1.861,4.149,4.148C14.148,8.823,13.963,9.503,13.596,10.152z",
                        fillColor: "#000",
                        fillOpacity: 1,
                        strokeWeight: 0,
                        rotation: 0,
                        scale: 2,
                        anchor: new window.google.maps.Point(10.5, 18),
                      },
                      state.pickUpLocation,
                      mapWrapper
                    )
                  );

                  setMarkers(newMarkers);

                  directionsRenderer.setMap(mapWrapper);
                });
            }
          })
          .catch((e: any) => console.log("Geocoder failed due to: " + e));
      };

      reverseGeocoding();
    }
  }, [driverLocation]);

  return (
    <>
      <div ref={ref} id="map" />
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // set the map prop on the child component
          return React.cloneElement(child, { ...mapWrapper });
        }
      })}
    </>
  );

  // return <div ref={ref} id="map" />;
}

const render = (status: Status): any => {
  switch (status) {
    case Status.LOADING:
      return <CircularProgress />;
    case Status.FAILURE:
    // return <ErrorComponent />;
    case Status.SUCCESS:
      // return <GoogleMapComponent />;
      return true;
  }
};
// /.Google Maps Component

// Marker
const Marker: React.FC<google.maps.MarkerOptions> = (options) => {
  const [marker, setMarker] = useState<google.maps.Marker>();

  useEffect(() => {
    console.log("markers");
    if (!marker) {
      setMarker(new google.maps.Marker());
    }

    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  useEffect(() => {
    console.log("marker options");
    if (marker) {
      marker.setOptions(options);
    }
  }, [marker, options]);

  return null;
};
// ./Marker

export default function BookOnline() {
  const router = useRouter();

  const { getItem } = useStorage();
  const { setItem } = useStorage();
  const cookieState = getItem("aegean", "local");
  const appContext = useContext(AppContext);
  const contextState: BookingState = appContext.state;

  const [zoom, setZoom] = useState(11); // initial zoom
  const [center, setCenter] = useState<google.maps.LatLngLiteral>({
    lat: 37.4499982,
    lng: 25.333332,
  });

  const [bookingState, setBookingState] = useState<BookingState>();
  const [openDayPicker, setOpenDayPicker] = useState<boolean>(false);
  const [pickUpDate, setPickUpDate] = useState<string>("TODAY");
  const [openTimePicker, setOpenTimePicker] = useState<boolean>(false);
  const [pickUpTime, setPickUpTime] = useState<string>("NOW");

  const [initMap, setInitMap] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(false);
  const [focusLocation, setFocusLocation] = useState<boolean>(false);
  const [focusDestination, setFocusDestination] = useState<boolean>(false);
  const [directionsService, setDirectionsService] = useState<any>();
  const [directionsRenderer, setDirectionsRenderer] = useState<any>();
  const [placesService, setPlacesService] = useState<any>();
  const [geocoderService, setGeocoderService] = useState<any>();
  const [directions, setDirections] = useState<any>();
  const [driverLocation, setDriverLocation] = useState<any>();

  const [pickUpLocation, setPickUpLocation] = useState<any>("");
  const [dropLocation, setDropLocation] = useState<any>("");

  const [autocompleteService, setAutocompleteService] = useState<any>();
  const [predictions, setPredictions] = useState<Array<any>>([]);
  const [locationHandler, setLocationHandler] = useState<string>();
  const [selectedCar, setSelectedCar] = useState<any>();
  const [triggerCalculate, setTriggerCalculate] = useState<boolean>(false);
  const [error, setError] = useState<any>();
  const [showNavigatorButton, setShowNavigatorButton] = useState<boolean>(true);
  const [currentLocationAddress, setCurrentLocationAddress] =
    useState<string>();
  const [currentLocation, setCurrentLocation] =
    useState<google.maps.LatLngLiteral>();
  const [nearbyLocations, setNearbyLocations] = useState<Array<any>>([]);
  const [carCategories, setCarCategories] = useState<Array<any>>([]);
  const [availableCars, setAvailableCars] = useState<Array<any>>([]);
  const [orderDetails, setOrderDetails] = useState<any>();
  const [driverDetails, setDriverDetails] = useState<any>();
  const [driver, setDriver] = useState<any>();
  const [nextButton, setNextButton] = useState<boolean>(false);
  const [selectCarStep, setSelectCarStep] = useState<boolean>(false);
  const [googleIsDefined, setGoogleIsDefined] = useState<boolean>(false);
  const [rideScheduled, setRideScheduled] = useState<boolean>(false);
  const [removeMarkers, setRemoveMarkers] = useState<boolean>(false);

  useEffect(() => {
    console.log("set state");
    if (cookieState) {
      console.log(1, cookieState);
      setBookingState(() => cookieState);
      appContext.updateAppState(cookieState);
    } else if (contextState) {
      console.log(11, contextState);
      setBookingState(() => contextState);
      appContext.updateAppState(contextState);
    }

    return () => {};
  }, []);

  const toggleDrawer = () => () => {
    setOpen(!open);
  };

  const toggleFocusLocation = () => () => {
    setOpenTimePicker(false);
    setFocusLocation(!focusLocation);
    setNearbyLocations([]);
    setCurrentLocationAddress("");
    setError(null);
    toggleDrawer();
  };

  const toggleBlurLocation = () => () => {
    setError(null);
    toggleDrawer();
  };

  const toggleFocusDestination = () => () => {
    setOpenTimePicker(false);
    setFocusDestination(!focusDestination);
    setCurrentLocationAddress("");
    setNearbyLocations([]);
    setError(null);
    toggleDrawer();
  };
  const toggleBlurDestination = () => () => {
    setError(null);
    toggleDrawer();
  };

  const nearbySearchCallback = (results: any, status: any) => {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      setNearbyLocations(results);
    }
  };

  const toggleDeviceNavigator = () => {
    navigator.geolocation.getCurrentPosition(
      async (position: GeolocationPosition) => {
        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setInitMap(true);
        setCurrentLocation(userLocation);

        var request = {
          location: userLocation,
          radius: 50,
        };

        placesService.nearbySearch(request, nearbySearchCallback);

        geocoderService
          .geocode({ location: userLocation })
          .then((response: any) => {
            if (response.results[0]) {
              setCurrentLocationAddress(response.results[0].formatted_address);
            } else {
              setCurrentLocationAddress("unknown");
            }
          })
          .catch((e: any) => console.log("Geocoder failed due to: " + e));
      },
      () => {},
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 1000,
      }
    );
    setShowNavigatorButton(false);
    contextState.showNavigatorButton = false;
    setItem("aegean", contextState, "local");
  };

  const stateManagement = async () => {
    console.log("state managenment");
    //await calculateAndDisplayRoute();

    /* Step 1 - Select route  */
    // if (
    //   !bookingState.directions ||
    //   (bookingState.predictions && bookingState.prediction.length > 0)
    // ) {
    //   console.log("step 1");
    //   await calculateAndDisplayRoute();
    // }

    // /* Step 2 - Select car  */
    // else if (
    //   bookingState.directions &&
    //   (!bookingState.predictions || !bookingState.predictions.length) &&
    //   !bookingState.orderDetails
    // ) {
    //   console.log("step 2");
    //   await calculateAndDisplayRoute();
    //   // clearState();
    // }

    /* Step 3 - Select car  */
    if (
      cookieState &&
      !cookieState.selectedCar &&
      !cookieState.selectedCarConfirmed
    ) {
      console.log("step 3");
      await calculateAndDisplayRoute();
    }
    // userVerified

    /* Step 4 - Search for driver  */
    if (
      cookieState &&
      cookieState.userVerified &&
      cookieState.selectedCar &&
      cookieState.selectedCarConfirmed &&
      // !cookieState.orderDetails &&
      !cookieState.driver
    ) {
      console.log("step 4");
      await calculateAndDisplayRoute();
      setSelectedCar(cookieState.selectedCar);
      setTimeout(async () => {
        console.log("TIME SEARHING");
        if (contextState.orderDetails) {
          getOrderUpdate(cookieState.orderDetails);
        } else {
          await createOrder();
        }
      }, 1500);
    }

    // Step 5
    if (
      cookieState &&
      cookieState.userVerified &&
      cookieState.driver &&
      cookieState.driverDetails
    ) {
      await calculateAndDisplayRoute();
      console.log("step 5");
    }
    console.log("end");
  };

  const updateSession = () => {
    appContext.updateAppState(contextState);
    setItem("aegean", contextState, "local");
  };

  useEffect(() => {
    if (focusDestination || focusLocation) {
      setOpen(true);
      window.setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100);
    }
  }, [focusDestination, focusLocation]);

  // markers
  useEffect(() => {
    console.log("init google map");
    const setMarkers = () => {
      if (!navigator || !navigator.geolocation) {
        setShowNavigatorButton(false);
        contextState.showNavigatorButton = false;
        setItem("aegean", contextState, "local");
      }

      setDirectionsService(() => new window.google.maps.DirectionsService());
      setDirectionsRenderer(
        () =>
          new window.google.maps.DirectionsRenderer({ suppressMarkers: true })
      );

      setAutocompleteService(
        () => new window.google.maps.places.AutocompleteService()
      );

      setPlacesService(
        () =>
          new google.maps.places.PlacesService(document.createElement("div"))
      );

      setGeocoderService(() => new google.maps.Geocoder());

      setInitMap(false);
    };

    if (
      document.readyState === "complete" &&
      googleIsDefined &&
      cookieState &&
      !initMap
    ) {
      setMarkers();
      setSelectedCar(cookieState.selectedCar);
      setPickUpLocation(cookieState.pickUpLocation);
      setDropLocation(cookieState.dropLocation);
      setDirections(cookieState.directions);
      setDriver(cookieState.driver);
      setRideScheduled(cookieState.rideScheduled);
      setDriverDetails(cookieState.driverDetails);
      setOrderDetails(cookieState.orderDetails);
      setShowNavigatorButton(cookieState.showNavigatorButton);
      setNextButton(cookieState.nextButton);

      stateManagement();
    } else if (document.readyState === "complete" && googleIsDefined) {
      setMarkers();
    } else {
      // window.addEventListener("load", setMarkers);
      // return () => document.removeEventListener("load", setMarkers);
    }
  }, [initMap, googleIsDefined]);

  const intitializeMap = (status: string) => {
    if (status === "SUCCESS") {
      setGoogleIsDefined(true);
    }
  };

  useEffect(() => {
    console.log("car categories");
    if (bookingState) {
      fetch(
        `https://carky-api.azurewebsites.net/api/AdminDashboard/Cars/GetAllCarkyCategories`,
        {
          method: "GET",
          headers: new Headers({
            Authorization: `Bearer ${bookingState.apiToken}`,
            "content-type": "application/json",
          }),
        }
      )
        .then((res) => res.json())
        .then(
          (result) => {
            setCarCategories(result);
          },
          (error) => {
            setError(error);
          }
        );
    }
  }, []);

  const validateDateTime = () => {
    let bookLater = false;

    if (pickUpTime === "NOW") {
      setPickUpTimeHandler(dayjs());
    } else {
      // let dateNow = dayjs().add(1, "h");
      // let timeString = pickUpTime.split(":");
      // let futureTime = dayjs()
      //   .set("h", parseInt(timeString[0]))
      //   .set("m", parseInt(timeString[1]));
      // if (pickUpDate === "TODAY" && dateNow.diff(futureTime) <= 3600000) {
      //   setPickUpTimeHandler(dayjs().add(1, "h"));
      //   bookLater = true;
      // }
    }

    if (pickUpDate === "TODAY") {
      setPickUpDateHandler(dayjs());
    } else if (!bookLater) {
      const dateString = dayjs().format("YYYY-MM-DD");
      // console.log(66666, contextState.pickUpDate, dateString);
      if (contextState.pickUpDate !== dateString) {
        bookLater = true;
      }
    }

    return bookLater;
  };

  const gatAvailableRouteCars = async (
    apiToken: string,
    start_location_lat: string,
    start_location_lng: string,
    end_location_lat: string,
    end_location_lng: string
  ) => {
    await validateDateTime();
    let dayjsLocal = dayjs(
      `${contextState.pickUpDate} ${contextState.pickUpTime}`
    );

    fetch(
      // `https://carky-api.azurewebsites.net/api/AdminDashboard/Orders/EstimateOrderInfo?model.pickupLocation.geography.lat=${start_location_lat}&model.pickupLocation.geography.lng=${start_location_lng}&model.dropoffLocation.geography.lat=${end_location_lat}&model.dropoffLocation.geography.lng=${end_location_lng}`,
      `${
        process.env.NEXT_PUBLIC_ONDE_HOSTNAME
      }/dispatch/v1/tariff?origin=${start_location_lat},${start_location_lng}&destination=${end_location_lat},${end_location_lat}&pickupTime=${encodeURIComponent(
        dayjsLocal.toISOString()
      )}&tripDistance=${
        contextState.directions.routes[0].legs[0].distance.value
      }&tripDuration=${
        contextState.directions.routes[0].legs[0].duration.value * 1000
      }`,
      {
        method: "GET",
        headers: new Headers({
          Authorization: `${process.env.NEXT_PUBLIC_ONDE_API_TOKEN}`,
        }),
      }
    )
      .then((res) => res.json())
      .then(
        (result) => {
          let availCars: any = [];

          // for (const tarrif in result.tarrifs) {
          //   let cat = carCategories.find(
          //     (car) => car.Id === result.PricePerCategories[tarrif].Id
          //   );

          //   availCars.push({ ...result.PricePerCategories[tarrif], ...cat });
          // }
          setAvailableCars(result.tariffs);
        },
        (error) => {
          setError(() => "No available route");
          clearDirections();
          // try {
          //   setError(error);
          // } catch (error) {
          //   setError('No available route');
          // }
        }
      );
  };

  const calculateAndDisplayRoute = async () => {
    console.log("calculateAndDisplayRoute");
    if (
      bookingState &&
      directionsService &&
      directionsRenderer &&
      pickUpLocation &&
      dropLocation
    ) {
      await directionsService
        .route({
          origin: {
            query: pickUpLocation,
          },
          destination: {
            query: dropLocation,
          },
          travelMode: google.maps.TravelMode.DRIVING,
        })
        .then((response: any) => {
          setError(null);
          setDirections(response);
          contextState.directions = response;
          contextState.startLocationLat =
            response.routes[0].legs[0].start_location.lat();
          contextState.startLocationLng =
            response.routes[0].legs[0].start_location.lng();
          contextState.endLocationLat =
            response.routes[0].legs[0].end_location.lat();
          contextState.endLocationLng =
            response.routes[0].legs[0].end_location.lng();
          updateSession();
          setItem("aegean", contextState, "local");
          setPredictions([]);
          setOpen(false);
          try {
            // if (bookingState.selectedCar) {
            gatAvailableRouteCars(
              bookingState.apiToken,
              response.routes[0].legs[0].start_location.lat(),
              response.routes[0].legs[0].start_location.lng(),
              response.routes[0].legs[0].end_location.lat(),
              response.routes[0].legs[0].end_location.lng()
            );
            //}
          } catch (error) {
            setError(() => "No available route");
            clearDirections();
          }
        })
        .catch(
          (e: any) => {
            console.log(e);
            setError(e.message.split(":").pop());
            // setOpen(false);
          }
          // window.alert('Directions request failed due to ' + e)
        );
    }
  };

  const displaySuggestions = function (
    predictions: google.maps.places.QueryAutocompletePrediction[] | null,
    status: google.maps.places.PlacesServiceStatus,
    target: string
  ) {
    if (
      (typeof window !== "undefined" &&
        status != window.google.maps.places.PlacesServiceStatus.OK) ||
      !predictions
    ) {
      console.log(status);
      return;
    }

    setPredictions(() => predictions);
  };

  const getSuggestions = (event: any, target: string) => {
    if (nextButton) {
      setNextButton(false);
    }

    if (event.target.value.length) {
      setError(null);
      autocompleteService.getQueryPredictions(
        { input: event.target.value },
        displaySuggestions
      );
    }

    let predictionsLength = predictions.length;
    if (predictionsLength && target === "pickUp") {
      setTriggerCalculate(false);
      // setPickUpLocation(event.target.value);
      setLocationHandler(() => "pickUp");
    } else if (predictionsLength && target === "dropOff") {
      setTriggerCalculate(false);
      // setDropLocation(event.target.value);
      setLocationHandler(() => "dropOff");
    }
  };

  const setPickUpLocationHandler = (value: string) => {
    setRemoveMarkers(() => false);
    contextState.pickUpLocation = value;
    updateSession();
    setPickUpLocation(() => value);
    updateSession();
    setTriggerCalculate(true);
    setNearbyLocations([]);
    setPredictions([]);
  };

  const setDropOffLocationHandler = (value: string) => {
    setRemoveMarkers(() => false);
    contextState.dropLocation = value;
    updateSession();
    setDropLocation(() => value);
    setTriggerCalculate(true);
    setNearbyLocations([]);
    setPredictions([]);
  };

  const setPickUpDateHandler = (value: any) => {
    const dateString = dayjs(value).format("YYYY-MM-DD");
    setPickUpDate(dateString);
    contextState.pickUpDate = dateString;
    updateSession();
  };

  const setPickUpTimeHandler = (value: any) => {
    setOpenTimePicker(false);
    const dateString = dayjs(value).format("HH:mm");

    setPickUpTime(dateString);
    contextState.pickUpTime = dateString;
    updateSession();
  };

  useEffect(() => {
    console.log("calculate route");
    if (triggerCalculate && pickUpLocation && dropLocation) {
      setNextButton(true);
      contextState.nextButton = true;
      setItem("aegean", contextState, "local");
      setSelectCarStep(false);
      calculateAndDisplayRoute();
    }
  }, [pickUpLocation, dropLocation, triggerCalculate]);

  const handleClearPickup = () => {
    setPickUpLocation(() => "");
    contextState.pickUpLocation = "";
    updateSession();
  };

  const handleClearDropOff = () => {
    setDropLocation(() => "");
    contextState.dropLocation = "";
    updateSession();
  };

  const setSelectedCarHandler = (value: any) => {
    setSelectedCar(value);
    contextState.selectedCar = value;
    updateSession();
  };

  const clearDirections = () => {
    setRemoveMarkers(() => true);
    setDirectionsRenderer(() => directionsRenderer.setMap(null));
    setDirectionsRenderer(
      () => new window.google.maps.DirectionsRenderer({ suppressMarkers: true })
    );
    setDirections(() => null);
    setPickUpLocation("");
    setDropLocation("");
    setOpen(true);

    contextState.directions = null;
    contextState.selectedCar = null;
    contextState.pickUpLocation = "";
    contextState.dropLocation = "";
    updateSession();
  };

  const authorizeUser = () => {
    contextState.selectedCarConfirmed = true;
    updateSession();
    setOpen(false);

    if (bookingState && !bookingState.userVerified) {
      router.push("/book-online/verification");
    } else {
      createOrder();
    }
  };

  const createOrder = async () => {
    // new order
    if (contextState && contextState.startLocationLat) {
      contextState.searchingForDriver = true;
      updateSession();
      let orderDetailsRes;
      dayjs.tz.setDefault();
      let dayjsLocal = dayjs(
        `${contextState.pickUpDate} ${contextState.pickUpTime}`
      );
      // console.log(`${contextState.pickUpDate} ${contextState.pickUpTime}`)
      // console.log(dayjsLocal.format())

      try {
        let res = await fetch(
          `${process.env.NEXT_PUBLIC_ONDE_HOSTNAME}/dispatch/v1/order/`,
          {
            method: "POST",
            headers: new Headers({
              Authorization: `${process.env.NEXT_PUBLIC_ONDE_API_TOKEN}`,
            }),
            body: JSON.stringify({
              waypoints: [
                {
                  exactLatLng: {
                    lat: contextState.startLocationLat,
                    lng: contextState.startLocationLng,
                  },
                  // premise: "Google Store",
                  // houseNumber: "22",
                  street: contextState.pickUpLocation,
                  // subLocality: "California",
                  // locality: "California",

                  // city: "Mountain view",
                  // district: "California",
                  // province: "California",
                  // country: "United States",
                  // postalCode: "94043",
                  // countryCode: "US",
                  poiName: contextState.pickUpLocation,
                  placeLatLng: {
                    lat: contextState.startLocationLat,
                    lng: contextState.startLocationLng,
                  },
                },
                {
                  exactLatLng: {
                    lat: contextState.endLocationLat,
                    lng: contextState.endLocationLng,
                  },
                  // premise: "Google Store",
                  // houseNumber: "22",
                  street: contextState.dropLocation,
                  // subLocality: "California",
                  // locality: "California",

                  // city: "Mountain view",
                  // district: "California",
                  // province: "California",
                  // country: "United States",
                  // postalCode: "94043",
                  // countryCode: "US",
                  poiName: contextState.dropLocation,
                  placeLatLng: {
                    lat: contextState.endLocationLat,
                    lng: contextState.endLocationLng,
                  },
                },
              ],
              client: {
                name: `${contextState.firstName} ${contextState.lastName}`,
                phone: contextState.phoneNumber,
              },
              notes: "From Aegean Taxi Web App",
              // pickupTime: encodeURIComponent(dayjsLocal.toISOString()),
              pickupTime: dayjsLocal.format(),
              unitOfLength: "KILOMETER",
              vehicleType: contextState.selectedCar.vehicleType,
              numberOfSeats: contextState.selectedCar.numberOfSeats,
              // paymentMethods: contextState.selectedCar.paymentMethods,
              paymentMethods: ["CASH"],
              prepaid: false,
              tariffId: contextState.selectedCar.tariffId,
            }),
          }
        );

        if (res.ok) {
          orderDetailsRes = await res.json();
          contextState.orderDetails = orderDetailsRes;
          setOrderDetails(orderDetailsRes);
          updateSession();
          setDriver(true);
          getOrderUpdate(orderDetailsRes);
        } else {
          setError("An error has occurred.");
          clearState();
        }
      } catch (error) {
        setError(error);
        clearState();
      }
    }
  };

  let apiTimeout: any;

  const getOrderUpdate = (order: any) => {
    // cancel
    if (contextState.orderDetails) {
      contextState.searchingForDriver = true;
      updateSession();
      fetch(
        `${process.env.NEXT_PUBLIC_ONDE_HOSTNAME}/dispatch/v1/order/${contextState.orderDetails.orderId}/update`,
        {
          method: "GET",
          headers: new Headers({
            Authorization: `${process.env.NEXT_PUBLIC_ONDE_API_TOKEN}`,
          }),
        }
      )
        .then((res) => res.json())
        .then(
          (result) => {
            if (result.status === "SEARCH") {
              clearTimeout(apiTimeout);
              apiTimeout = setTimeout(() => {
                getOrderUpdate(order);
              }, 10000);
            } else {
              clearTimeout(apiTimeout);
              let driverDetails = {
                ...result.driverId,
                ...result.driverLocation,
              };
              contextState.searchingForDriver = false;
              contextState.driver = true;
              contextState.driverDetails = driverDetails;
              setDriverDetails(driverDetails);
              setDriver(true);
              updateSession();
            }
          },
          (error) => {
            setError(error);
            clearState();
          }
        );
    }
  };

  const updateDriverLocationHandler = (carLocation: any) => {
    setDirectionsRenderer(() => directionsRenderer.setMap(null));
    setDirectionsRenderer(
      () => new window.google.maps.DirectionsRenderer({ suppressMarkers: true })
    );
    setDriverLocation(() => carLocation);
  };

  const cancelTripHandler = () => {
    // cancel
    if (orderDetails) {
      fetch(
        `${process.env.NEXT_PUBLIC_ONDE_HOSTNAME}/dispatch/v1/order/${contextState.orderDetails.orderId}/status`,
        {
          method: "PUT",
          headers: new Headers({
            Authorization: `${process.env.NEXT_PUBLIC_ONDE_API_TOKEN}`,
          }),
          body: JSON.stringify({
            status: "CANCELLED_BY_DISPATCH",
          }),
        }
      ).then(
        (res) => clearState(),
        (error) => {
          setError(error);
          clearState();
        }
      );
    }
    clearState();
    setOpen(false);
  };

  const clearState = () => {
    setRemoveMarkers(() => true);
    directionsRenderer.setDirections({ routes: [] });
    // setDirectionsRenderer(
    //   () => new window.google.maps.DirectionsRenderer({ suppressMarkers: true })
    // );
    clearTimeout(apiTimeout);
    setDirections(null);
    setPickUpLocation("");
    setDropLocation("");
    setDriverDetails(null);
    setDriver(false);
    setOrderDetails(null);
    setNextButton(true);
    setSelectCarStep(false);
    setSelectedCar(false);
    setNextButton(false);
    setPickUpDate("TODAY");
    setPickUpTime("NOW");
    setRideScheduled(false);
    setDriverLocation(null);

    contextState.pickUpLocation = "";
    contextState.dropLocation = "";
    contextState.directions = null;
    contextState.selectedCar = null;
    contextState.driver = false;
    contextState.driverDetails = null;
    contextState.orderDetails = null;
    contextState.selectedCar = null;
    contextState.nextButton = false;
    contextState.searchingForDriver = false;
    contextState.selectedCarConfirmed = false;
    contextState.pickUpDate = "TODAY";
    contextState.pickUpTime = "NOW";
    contextState.startLocationLat = null;
    contextState.startLocationLng = null;
    contextState.endLocationLat = null;
    contextState.endLocationLng = null;
    contextState.driverLocation = null;
    setItem("aegean", contextState, "local");
    updateSession();
  };

  const nextButtonHandler = async () => {
    setNextButton(false);
    setSelectCarStep(true);
    await calculateAndDisplayRoute();
    setOpen(true);
  };

  return (
    <Container maxWidth={"lg"} sx={{ mt: 2 }}>
      <Grid container>
        <Grid
          item
          order={{ xs: 2, md: 1 }}
          xs={12}
          md={7}
          sx={{ p: { xs: 0, md: 3 } }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              minHeight: { xs: "104vh", md: "initial" },
              position: {
                xs: `${open ? "absolute" : "relative"}`,
                md: "initial",
              },
              width: { xs: `${open ? "100%" : "initial"}`, md: "initial" },
              zIndex: 99999,
              margin: { xs: "-15px", md: "initial" },
              top: open ? "0" : "0vh",
            }}
          >
            {/* Puller  */}
            <Box
              onClick={toggleDrawer()}
              sx={{
                width: 50,
                height: 4,
                backgroundColor: "#ddd",
                borderRadius: 3,
                position: "absolute",
                top: "10px",
                left: "calc(50% - 25px)",
                display: { xs: "block", md: "none" },
              }}
            ></Box>
            {/* Puller  */}

            {/* FORM */}
            <Paper
              elevation={0}
              sx={{ width: { xs: "100%", md: "60%" }, padding: 2 }}
            >
              {open && (
                <Icon
                  fontSize="large"
                  className={styles.downArrow}
                  sx={{
                    display: { xs: "initial", md: "none" },
                    position: "absolute",
                    top: "5px",
                    right: "5px",
                  }}
                >
                  <KeyboardArrowDownOutlinedIcon onClick={toggleDrawer()} />
                </Icon>
              )}

              {/* Step 1 - Select route  */}
              {/* {(!directions || !selectCarStep || predictions.length > 0) &&
                !orderDetails && ( */}
              {!orderDetails && !contextState.searchingForDriver && (
                <>
                  <Box
                    sx={{
                      display: { xs: "none", md: "flex" },
                      alignItems: { xs: "center", md: "start" },
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      component="span"
                      variant="h5"
                      gutterBottom
                      sx={{
                        fontWeight: 700,
                        m: 0,
                      }}
                    >
                      Select pick up/drop off details
                    </Typography>
                  </Box>

                  {!predictions.length &&
                    showNavigatorButton &&
                    !selectCarStep && (
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "nowrap",
                          mt: 2.5,
                          cursor: "pointer",
                        }}
                        onClick={toggleDeviceNavigator}
                      >
                        <Box sx={{ mr: 1 }}>
                          <MyLocationOutlinedIcon />
                        </Box>
                        <Box>
                          <Typography variant="body2" color="text.primary">
                            Allow location access
                          </Typography>
                          <Typography variant="caption" color="text.primary">
                            For a perfect pick up experience
                          </Typography>
                        </Box>
                      </Box>
                    )}

                  <Box sx={{ position: "relative" }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                        mt: `${open ? "20px" : "initial"}`,
                      }}
                    >
                      <Box
                        mt={2}
                        sx={{ width: "100%" }}
                        className={
                          focusLocation
                            ? styles.onFocusStyles
                            : styles.onBlurStyles
                        }
                      >
                        <FormControl variant="filled" sx={{ width: "100%" }}>
                          <Input
                            id="pickUp"
                            value={pickUpLocation}
                            onChange={(e) => {
                              setPickUpLocation(e.target.value);
                              getSuggestions(e, "pickUp");
                            }}
                            disableUnderline={true}
                            fullWidth={true}
                            aria-describedby="pickUp"
                            inputProps={{
                              "aria-label": "weight",
                            }}
                            autoComplete="off"
                            onFocus={toggleFocusLocation()}
                            onBlur={toggleBlurLocation()}
                            className={styles.inputContainer}
                            placeholder="Add a pick up location"
                            startAdornment={
                              <InputAdornment
                                position="end"
                                className={styles.square}
                              >
                                <CropSquareSharp fontSize="inherit" />
                              </InputAdornment>
                            }
                            endAdornment={
                              <InputAdornment
                                position="end"
                                className={styles.clearButton}
                              >
                                <IconButton
                                  aria-label="clear input"
                                  onClick={handleClearPickup}
                                  edge="end"
                                >
                                  {open && pickUpLocation && (
                                    <CancelOutlinedIcon />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            }
                          />
                        </FormControl>
                      </Box>
                      <Box
                        mt={2}
                        sx={{ width: "100%" }}
                        className={
                          focusDestination
                            ? styles.onFocusStyles
                            : styles.onBlurStyles
                        }
                      >
                        <FormControl variant="filled" sx={{ width: "100%" }}>
                          <Input
                            id="dropOff"
                            value={dropLocation}
                            onChange={(e) => {
                              setDropLocation(e.target.value);
                              getSuggestions(e, "dropOff");
                            }}
                            disableUnderline={true}
                            fullWidth={true}
                            aria-describedby="dropOff"
                            inputProps={{
                              "aria-label": "weight",
                            }}
                            autoComplete="off"
                            onFocus={toggleFocusDestination()}
                            onBlur={toggleBlurDestination()}
                            className={styles.inputContainer}
                            placeholder="Enter your destination"
                            startAdornment={
                              <InputAdornment
                                position="end"
                                className={styles.square}
                              >
                                <CropSquareSharp fontSize="inherit" />
                              </InputAdornment>
                            }
                            endAdornment={
                              <InputAdornment
                                position="end"
                                className={styles.clearButton}
                              >
                                <IconButton
                                  aria-label="clear input"
                                  onClick={handleClearDropOff}
                                  edge="end"
                                >
                                  {open && dropLocation && (
                                    <CancelOutlinedIcon />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            }
                          />
                        </FormControl>
                      </Box>
                      <div className={`${styles.connectionLine} `}></div>
                    </Box>
                  </Box>
                  <Grid container spacing={1} mt={1} sx={{ minHeight: 50 }}>
                    <Grid item xs={6} md={6}>
                      <Box sx={{ position: "relative" }}>
                        <Button
                          startIcon={<EventSharpIcon />}
                          variant="contained"
                          size="large"
                          fullWidth={true}
                          onClick={() => {
                            setOpenTimePicker(false);
                            setOpenDayPicker(true);
                          }}
                          sx={{ position: "absolute", zIndex: 999 }}
                        >
                          {pickUpDate}
                        </Button>

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker
                            label=""
                            open={openDayPicker}
                            disablePast={true}
                            sx={{
                              position: "absolute",
                              zIndex: 0,
                            }}
                            onClose={() => setOpenDayPicker(false)}
                            slotProps={{ textField: { size: "small" } }}
                            onChange={(value: any) =>
                              setPickUpDateHandler(value)
                            }
                          />
                        </LocalizationProvider>
                      </Box>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Box sx={{ position: "relative" }}>
                        <Button
                          variant="contained"
                          color="secondary"
                          endIcon={<AccessTimeIcon />}
                          size="large"
                          fullWidth={true}
                          onClick={() => {
                            setOpenTimePicker(true);
                          }}
                          sx={{ position: "absolute", zIndex: 999 }}
                        >
                          {pickUpTime}
                        </Button>

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          {/* <DesktopTimePicker
                            defaultValue={dayjs()}
                            label=""
                            open={openTimePicker}
                            disablePast={true}
                            sx={{
                              position: "absolute",
                              zIndex: 0,
                            }}
                            onClose={() => setOpenTimePicker(false)}
                            slotProps={{ textField: { size: "small" } }}
                            onChange={(value: any) =>
                              setPickUpTimeHandler(value)
                            }
                          /> */}
                          {openTimePicker && (
                            <DigitalClock
                              defaultValue={dayjs()}
                              // label=""
                              // open={openTimePicker}
                              timeStep={5}
                              disablePast={
                                pickUpDate === "TODAY" ? true : false
                              }
                              skipDisabled={true}
                              sx={{
                                position: "absolute",
                                zIndex: 99999,
                                top: 45,
                                background: "#fafafa",
                              }}
                              // onClose={() => setOpenTimePicker(false)}

                              onChange={(value: any) =>
                                setPickUpTimeHandler(value)
                              }
                            />
                          )}
                        </LocalizationProvider>
                      </Box>
                    </Grid>
                  </Grid>

                  {!error && nextButton && (
                    <Box mt={3}>
                      <Button
                        variant="contained"
                        onClick={nextButtonHandler}
                        size="large"
                        fullWidth={true}
                      >
                        Next
                      </Button>
                    </Box>
                  )}

                  <List
                    sx={{
                      width: "100%",
                      // maxWidth: 360,
                      bgcolor: "background.paper",
                    }}
                  >
                    {currentLocationAddress &&
                      currentLocationAddress != "unknown" && (
                        <>
                          <ListItem
                            alignItems="flex-start"
                            onClick={() =>
                              setPickUpLocationHandler(currentLocationAddress)
                            }
                            key="currentLocation"
                          >
                            <ListItemAvatar>
                              <MyLocationOutlinedIcon />
                            </ListItemAvatar>
                            <ListItemText
                              primary={currentLocationAddress}
                              secondary={
                                <React.Fragment>
                                  <Typography
                                    sx={{ display: "inline" }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                  >
                                    Your current location
                                  </Typography>
                                </React.Fragment>
                              }
                            />
                          </ListItem>
                          <Divider variant="inset" component="li" />
                        </>
                      )}

                    {currentLocationAddress &&
                      currentLocationAddress == "unknown" && (
                        <>
                          <ListItem
                            alignItems="flex-start"
                            key="currentLocations"
                          >
                            <ListItemAvatar>
                              <MyLocationOutlinedIcon />
                            </ListItemAvatar>
                            <ListItemText primary="Unknown address" />
                          </ListItem>
                          <Divider variant="inset" component="li" />
                        </>
                      )}

                    {nearbyLocations.length > 0 &&
                      nearbyLocations.map((location, index) => (
                        <>
                          <ListItem
                            alignItems="flex-start"
                            onClick={() =>
                              setPickUpLocationHandler(location.name)
                            }
                            key={index}
                          >
                            <ListItemAvatar>
                              <LocationOnRoundedIcon />
                            </ListItemAvatar>
                            <ListItemText primary={location.name} />
                          </ListItem>
                          <Divider variant="inset" component="li" />
                        </>
                      ))}

                    {predictions.length > 0 &&
                      !error &&
                      predictions.map((prediction) => (
                        <PredictionListItem
                          key={`${prediction.place_id}-${Math.floor(
                            Math.random() * 1000
                          )}`}
                          description={prediction.description}
                          locationHandler={
                            locationHandler === "pickUp"
                              ? setPickUpLocationHandler
                              : setDropOffLocationHandler
                          }
                        />
                      ))}
                  </List>
                </>
              )}
              {/* ./Step 1  */}

              {/* Step 2 - Select car  */}
              {directions &&
                !predictions.length &&
                !error &&
                !orderDetails &&
                !contextState.searchingForDriver &&
                selectCarStep && (
                  <>
                    <Box mt={0}>
                      {/* <Typography align="center" variant="body1">
                        Select car category
                      </Typography> */}
                      <Typography variant="body2">
                        Estimated journey time:{" "}
                        {directions.routes[0].legs[0].duration.text}
                      </Typography>
                    </Box>

                    <CarOptions
                      cars={availableCars}
                      carSelectHandler={setSelectedCarHandler}
                    />

                    {/* {selectedCar && ( */}
                    <Box mt={3}>
                      <Button
                        variant="contained"
                        onClick={authorizeUser}
                        size="large"
                        fullWidth={true}
                        disabled={!selectedCar}
                        //(
                        //     !selectedCar && contextState.userVerified
                        //   ) ||
                        //   (contextState.selectedCarConfirmed &&
                        //     contextState.userVerified)
                        // }
                      >
                        {selectedCar
                          ? `Confirm ${
                              selectedCar.name
                                ? selectedCar.name
                                : selectedCar.vehicleType
                            }`
                          : `Confirm`}
                      </Button>
                    </Box>

                    {/* <Box mt={3}>
                      <Button
                        color="error"
                        variant="contained"
                        size="large"
                        fullWidth={true}
                        onClick={clearState}
                      >
                        Cancel
                      </Button>
                    </Box> */}
                    {/* )} */}
                  </>
                )}
              {/* ./Step 2  */}

              {/* Step 3 - Search Driver  */}
              {contextState.searchingForDriver && (
                <>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                      height: "40vh",
                      justifyContent: "center",
                    }}
                  >
                    <CircularProgress />
                    Searching for available drivers ...
                    <Box p={2}>
                      <Button
                        color="error"
                        variant="contained"
                        size="large"
                        fullWidth={true}
                        onClick={cancelTripHandler}
                      >
                        Cancel
                      </Button>
                    </Box>
                  </Box>
                </>
              )}
              {/* ./Step 3  */}

              {/* Step 4 - Driver */}
              {driver && driverDetails && !error && (
                <>
                  {/* <Box pt={4} px={3}>
                    <Typography variant="body2">
                      Distance: {directions.routes[0].legs[0].distance.text}
                    </Typography>
                    <Typography variant="body2">
                      Estimated journey time:{' '}
                      {directions.routes[0].legs[0].duration.text}
                    </Typography>
                  </Box> */}
                  <Driver
                    cancelTrip={cancelTripHandler}
                    updateDriverLocationHandler={updateDriverLocationHandler}
                    clearState={clearState}
                    orderDetails={orderDetails}
                  />
                </>
              )}
              {/* ./Step 4 */}

              {/* Scheduled Ride */}
              {rideScheduled && (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    height: "40vh",
                    justifyContent: "center",
                  }}
                >
                  <Typography variant="body1" component={"div"}>
                    Your ride for {contextState.pickUpDate} at{" "}
                    {contextState.pickUpTime}
                  </Typography>
                  <Typography variant="body1" component={"div"}>
                    from {contextState.pickUpLocation} to{" "}
                  </Typography>
                  <Typography variant="body1" component={"div"}>
                    {contextState.dropLocation} is scheduled
                  </Typography>

                  <Box p={2}>
                    <Button
                      color="error"
                      variant="contained"
                      size="large"
                      fullWidth={true}
                      onClick={cancelTripHandler}
                    >
                      Cancel scheduled ride
                    </Button>
                  </Box>
                </Box>
              )}
              {/* ./Scheduled Ride */}

              {error && (
                <Box px={3}>
                  <Alert variant="filled" severity="error">
                    There is an error: {error}
                  </Alert>
                </Box>
              )}
            </Paper>
            {/* /.FORM */}
          </Box>
        </Grid>
        {/* Map */}
        <Grid
          item
          order={{ xs: 1, md: 2 }}
          xs={12}
          md={5}
          sx={{
            backgroundRepeat: "no-repeat",
            minHeight: { xs: 260, md: 626 },
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: { xs: "block", md: "initial" },
              height: { xs: "30vh", md: "100%" },
              left: { xs: "0px", md: "initial" },
              pointerEvents: "auto",
              position: { xs: "fixed", md: "initial" },
              right: { xs: "0px", md: "initial" },
              top: { xs: "80px", md: "initial" },
              zIndex: { xs: 0, md: "initial" },
            }}
          >
            <Wrapper
              apiKey={`${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
              libraries={["places"]}
              render={render}
              callback={intitializeMap}
            >
              {!initMap && (
                <GoogleMapComponent
                  center={center}
                  zoom={zoom}
                  currentLocation={currentLocation}
                  directionsService={directionsService}
                  directionsRenderer={directionsRenderer}
                  placesService={placesService}
                  geocoderService={geocoderService}
                  directions={directions}
                  driverLocation={driverLocation}
                  state={contextState}
                  removeMarkers={removeMarkers}
                />
              )}
            </Wrapper>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
