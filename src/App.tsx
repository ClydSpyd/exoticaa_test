import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { react_query_config } from "./config/react-query-config";
import { fetchHomeData } from "./services/api.service";
import "./styles/App.scss";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const [selectedMarket, setMarket] = useState("US");

  const { data, error, isLoading, isRefetching, refetch } = useQuery(
    "carouselData",
    () => fetchHomeData(selectedMarket),
    react_query_config
  );

  useEffect(() => {
    refetch();
  }, [selectedMarket, refetch]);

  return (
    <div className="App">
      <Navbar selectedMarket={selectedMarket} setMarket={setMarket} />
      {isLoading || isRefetching ? (
        <p>Loading...</p>
      ) : error ? (
        <p>error</p>
      ) : (
        data && <Home data={data} />
      )}
      <Footer />
    </div>
  );
};
export default App;
