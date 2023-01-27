export default async function handler(req, res) {
  const { latLng } = req.query;
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latLng}&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`
  );
  const jsonData = await response.json();
  res.status(200).json(jsonData);
}
