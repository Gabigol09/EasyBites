import { v2 as cloudinary } from 'cloudinary';

export const configCloudinary = () => {
  cloudinary.config({
    cloud_name: "djvcrveg8",
    api_key: "136887645377197",
    api_secret: "H1PpUZYBFZICIrNv0NicW0OLX5U",
  });

  return cloudinary;
};
