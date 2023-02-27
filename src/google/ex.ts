import { fileUpload } from "./lib/storage";
import { getParamsCMD } from "src/utils";

export const ggUpload = async () => {
  const params = getParamsCMD();
  let isPublic = false;
  if (params.public === '1') {
    isPublic = true;
  }
  const result = await fileUpload(params.from, params.to, isPublic);
  console.log(result);
};
