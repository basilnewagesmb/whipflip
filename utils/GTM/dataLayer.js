const GTMDataLayer = () => {
    let layer = dataLayer; // Make sure dataLayer is defined
    return {
        quoteCompleted: (data) => {
            const rep = layer.push({
                event: "quoteCompleted",
                eventModel: data,
            });
            console.info({ quoteCompleted: rep });
            return rep;
        },
        offerCompleted: (data) => {
            const rep = layer.push({
                event: "offerCompleted",
                eventModel: data,
            });
            console.info({ offerCompleted: rep });
            return rep;
        },
        appointmentCompleted: (data) => {
            const rep = layer.push({
                event: "appointmentCompleted",
                eventModel: data,
            });
            console.info({ appointmentCompleted: rep });
            return rep;
        },
    };
};

export default GTMDataLayer;
