import { v2 as claudinary } from "cloudinary";
import { ENV } from "./env";

claudinary.config({
  cloud_name: ENV.CLAUDINARY_NAME,
  api_key: ENV.CLAUDINARY_API,
  api_secret: ENV.CLAUDINARY_SECRET,
});

export default claudinary;
