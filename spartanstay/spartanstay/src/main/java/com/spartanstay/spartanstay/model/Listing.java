package com.spartanstay.spartanstay.model;


import java.time.LocalDate;

public class Listing {
    private String destination;
    private LocalDate checkIn;
    private LocalDate checkOut;
    private String order;
    private int numAdults;

    public String getOrder() {
        return order;
    }

    public void setOrder(String order) {
        this.order = order;
    }

    public LocalDate getCheckOut() {
        return checkOut;
    }

    public void setCheckOut(LocalDate checkOut) {
        this.checkOut = checkOut;
    }

    public LocalDate getCheckIn() {
        return checkIn;
    }

    public void setCheckIn(LocalDate checkIn) {
        this.checkIn = checkIn;
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
