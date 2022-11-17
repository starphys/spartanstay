package com.spartanstay.spartanstay.service;

public interface ListingsService {
    public String getListings(String destId, String checkIn, String checkOut, String sortOrder, int adults, String amenity, String priceMin, String priceMax);
    public String getListingsWithAmenities(String destId, String checkIn, String checkOut, String sortOrder, int adults, String amenity);
    public String getLocationID(String destination);
    public String getAmenityID(String amenity);
    public String getDetails(String id, String checkIn, String checkOut, String adults);
}
