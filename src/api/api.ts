export const getPhotos = async (): Promise<any> => {
  const response = await fetch("https://api.slingacademy.com/v1/sample-data/photos?limit=20");
  const data = await response.json();
  return data;
};
