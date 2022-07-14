import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { react_query_config } from "./config/react-query-config";
import { fetchHomeData } from "./services/api.service";
import "./styles/App.scss";
import Footer from "./components/Footer";
import LoadingPage from "./pages/LoadingPage";

const App: React.FC = () => {
  const [selectedMarket, setMarket] = useState("US");

  const { data, error, refetch } = useQuery(
    "carouselData",
    () => fetchHomeData(selectedMarket),
    react_query_config
  );

  useEffect(() => {
    refetch();
  }, [selectedMarket, refetch]);

  return (
    <div className="appWrapper">
      <Navbar selectedMarket={selectedMarket} setMarket={setMarket} />
      {data ? (
        <Home data={data} />
      ) : (
        <LoadingPage error={false || error?.message} />
      )}
      <Footer />
    </div>
  );
};
export default App;
