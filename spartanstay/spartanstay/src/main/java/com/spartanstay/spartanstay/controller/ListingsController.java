package com.spartanstay.spartanstay.controller;

import com.spartanstay.spartanstay.model.Listing;
import com.spartanstay.spartanstay.service.ListingsServiceImpl;
import com.spartanstay.spartanstay.service.Secrets;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;

@RestController
@RequestMapping("/listings")
public class ListingsController {

    ListingsServiceImpl listingService = new ListingsServiceImpl();
    @GetMapping("/rooms")
    String getRooms(@RequestParam("listing") Listing listing){
        return listingService.getListings(listingService.getLocationID(listing.getDestination()),
                listing.getCheckIn().toString(), listing.getCheckOut().toString(), listing.getOrder(),listing.getNumAdults());
    }

    @GetMapping("/details")
    String getDetails(@RequestParam("id") String id, @RequestParam("checkIn")
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate checkIn, @RequestParam("checkOut")
                              @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate checkOut){

        return listingService.getDetails(id, checkIn.toString(), checkOut.toString(),"1");
    }
}
