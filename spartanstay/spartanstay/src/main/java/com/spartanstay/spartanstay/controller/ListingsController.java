package com.spartanstay.spartanstay.controller;

import com.spartanstay.spartanstay.model.Listing;
import com.spartanstay.spartanstay.service.ListingsServiceImpl;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;

@RestController
@RequestMapping("/listings")
@CrossOrigin
public class ListingsController {

    ListingsServiceImpl listingService = new ListingsServiceImpl();
    @GetMapping("/rooms")
    String getRooms(@RequestParam("destination") String destination, @RequestParam("checkIn")
                    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate checkIn, @RequestParam("checkOut")
                    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate checkOut, @RequestParam("order") String order, 
                    @RequestParam("numAdults") int numAdults, @RequestParam(required = false) String amenity, 
                    @RequestParam(required = false) String priceMin, @RequestParam(required = false) String priceMax)
    {
        String destId;
        if (destination != null) {
            destId = listingService.getLocationID(destination);
        }
        else {
            destId = "1506246";
        }

        String amenId;
        if(amenity != null)
        {
            amenity = listingService.getAmenityID(amenity);
            //return listingService.getListingsWithAmenities(destId, checkIn.toString(), checkOut.toString(), order,numAdults, amenId);
        }

        String results = listingService.getListings(destId, checkIn.toString(), checkOut.toString(), order,numAdults, amenity, priceMin, priceMax);
        System.out.println(results);

        return results;
    }

    @GetMapping("/details")
    String getDetails(@RequestParam("id") String id, @RequestParam("checkIn")
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate checkIn, @RequestParam("checkOut")
                              @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate checkOut){

        return listingService.getDetails(id, checkIn.toString(), checkOut.toString(),"1");
    }
}
