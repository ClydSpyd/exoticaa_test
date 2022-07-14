import axios from "axios";
import { ResponseDataModel } from "../models/data.model";

const getAPIUrl = (marketId: string) => `./mocks/mock_${marketId}.json`;
// `https://api-${marketId}.exoticca.com/api/home`;

export const fetchHomeData = async (
  marketId: string
): Promise<ResponseDataModel> => {
  const {
    data: { hero, slides },
  } = await axios.get(getAPIUrl(marketId));
  return { hero, slides };
};
