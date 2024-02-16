// api.js
import axios from "axios";

export const handleSearchCitymobil = async (
  origin,
  destination,
  setLoading,
  setTaxiPrice
) => {
  setLoading(true);
  try {
    const response = await axios.post(
      "http://localhost:4200/citymobil",
      {
        from: origin,
        to: destination,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setTaxiPrice(response.data.price);
  } catch (error) {
    console.error("Error fetching taxi data:", error);
  }
  setLoading(false);
};
