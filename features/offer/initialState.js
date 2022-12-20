function initialState() {
  return {
    current: 0,
    steps: [
      {
        title: "Initial Offer",
        name: "initial-offer",
      },
      {
        title: "Confirm Offer",
        name: "confirm-offer",
      },
      {
        title: "Sell Car",
        name: "sell-car",
      },
    ],
    initialOffer: null,
  };
}

export default initialState;
