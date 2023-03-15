function transformOfferData(response) {
  const stills = [
    {
      title: "Front",
      overlay: `front_${getOverlayType(response.body_type)}.png`,
      blob: null,
    },
    {
      title: "Drivers Side (Front Corner)",
      overlay: `drivers_side_front_corner_${getOverlayType(
        response.body_type
      )}.png`,
      blob: null,
    },
    {
      title: "Drivers Side",
      overlay: `drivers_side_${getOverlayType(response.body_type)}.png`,
      blob: null,
    },
    {
      title: "Drivers Side (Rear Corner)",
      overlay: `drivers_side_rear_corner_${getOverlayType(
        response.body_type
      )}.png`,
      blob: null,
    },
    {
      title: "Rear",
      overlay: `rear_${getOverlayType(response.body_type)}.png`,
      blob: null,
    },
    {
      title: "Passenger Side (Rear Corner)",
      overlay: `passenger_side_rear_corner_${getOverlayType(
        response.body_type
      )}.png`,
      blob: null,
    },
    {
      title: "Passenger Side",
      overlay: `passenger_side_${getOverlayType(response.body_type)}.png`,
      blob: null,
    },
    {
      title: "Passenger Side (Front Corner)",
      overlay: `passenger_side_front_corner_${getOverlayType(
        response.body_type
      )}.png`,
      blob: null,
    },
  ];

  return { ...response, stills };
}

export default transformOfferData;
const getOverlayType = (bodyType) => {
  switch (bodyType) {
    case "Convertible":
    case "Coupe":
    case "Liftback":
    case "Roadster":
    case "Sedan":
      return "sedan";
    case "Cargo Van":
    case "Extended Cargo Van":
    case "Extended Passenger Van":
    case "Passenger Van":
      return "van";
    case "Crew Cab":
    case "Double Cab":
    case "Extended Cab":
    case "Mega Cab":
    case "Quad Cab":
    case "Regular Cab":
      return "truck";
    case "Utility":
    case "Wagon":
    case "Hatchback":
      return "suv";
    default:
      return "sedan";
  }
};
