import axios from "axios";
import { getAPIUrl } from "../config/getAPIUrl";
import { ResponseDataModel } from "../models/data.model";

export const fetchHomeData = async (
  marketId: string
): Promise<ResponseDataModel> => {
  const {
    data: { hero, slides },
  } = await axios.get(getAPIUrl(marketId));
  return { hero, slides };
};
