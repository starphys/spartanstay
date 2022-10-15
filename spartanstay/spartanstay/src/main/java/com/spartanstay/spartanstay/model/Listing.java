package com.spartanstay.spartanstay.model;


import java.time.LocalDate;

public class Listing {
    private String destination;
    private String checkIn;
    private String checkOut;
    private String order;
    private int numAdults;

    public Listing(String destination, String checkIn, String checkOut, String order, int numAdults) {
        this.destination = destination;
        this.checkIn = checkIn;
        this.checkOut = checkOut;
        this.order = order;
        this.numAdults = numAdults;
    }

    public String getOrder() {
        return order;
    }

    public void setOrder(String order) {
        this.order = order;
    }

    public String getCheckOut() {
        return checkOut;
    }


    public String getCheckIn() {
        return checkIn;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public int getNumAdults() {
        return numAdults;
    }

    public void setNumAdults(int numAdults) {
        this.numAdults = numAdults;
    }


    /*


    int minPrice;
    int maxPrice;
    int guestRatingMin;
    */
}
