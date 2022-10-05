package com.spartanstay.spartanstay.controller;

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
    String getNewYorkListings(@RequestParam("destination") String destination, @RequestParam("checkIn")
                              @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate checkIn, @RequestParam("checkOut")
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate checkOut){
        String destId;
        if (destination != null) {
            //TODO: this needs to be a call to locations search, this won't work right now.
            destId = listingService.getLocationID(destination);
        }
        else {
            destId = "1506246";
        }

        return listingService.getListings(destId, checkIn.toString(), checkOut.toString(), "PRICE");
    }
}
