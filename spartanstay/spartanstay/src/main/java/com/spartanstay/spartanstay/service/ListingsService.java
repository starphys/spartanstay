package com.spartanstay.spartanstay.service;

public interface ListingsService {
    public String getListings(String destId, String checkIn, String checkOut, String sortOrder, String adults);
    public String getListingsWithLandmark(String destId, String checkIn, String checkOut, String sortOrder, String adults, String landmark);
    public String getLocationID(String destination);
    public String getLandID(String landmark);
    public String getDetails(String id, String checkIn, String checkOut, String adults);
}
