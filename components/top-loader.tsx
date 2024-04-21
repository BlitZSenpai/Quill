import NextTopLoader from "nextjs-toploader";

const TopLoader = () => (
  <NextTopLoader
    color="#8b5cf6"
    showSpinner={false}
    initialPosition={0.08}
    crawlSpeed={200}
    height={4}
    crawl={true}
    easing="ease"
    speed={200}
    shadow={false}
  />
);

export default TopLoader;
