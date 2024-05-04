function initMaps() {
  // Initialize the map for Bristol, IL
  const mapChicago = new google.maps.Map(
    document.getElementById("mapBristol"),
    {
      center: { lat: 51.4545, lng: -2.5879 }, // Bristol, IL coordinates
      zoom: 15, // Adjust the initial zoom level as needed
    }
  );

  // Array of coordinates (e.g., [{ lat: 51.4545, lng: -2.5879 }, { lat: 51.4535, lng: -2.5869 }, ...])
  const coordinatesArray = [
    { lat: 51.4545, lng: -2.5879 }, // Example coordinates
    { lat: 51.4535, lng: -2.5869 }, // Example coordinates
    // Add more coordinates as needed
  ];

  // Add markers for each coordinate
  coordinatesArray.forEach((coordinates) => {
    const marker = new google.maps.Marker({
      position: coordinates,
      map: mapBristol,
    });
  });
}
