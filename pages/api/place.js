export default async function handler(req, res) {
  const { input } = req.query;
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&components=country:us&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`
  );
  const jsonData = await response.json();
  res.status(200).json(jsonData);
}
