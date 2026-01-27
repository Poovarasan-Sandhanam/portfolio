import ReactGA from "react-ga4";

const InitializeAnalytics = () => {
    // Replace with your Measurement ID
    // It should look like G-XXXXXXXXXX
    const TRACKING_ID = "G-YOUR-ID-HERE";
    ReactGA.initialize(TRACKING_ID);

    // Send initial pageview
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};

export default InitializeAnalytics;
