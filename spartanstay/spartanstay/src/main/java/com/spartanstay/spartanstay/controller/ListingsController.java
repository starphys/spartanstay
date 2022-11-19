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
                    @RequestParam(required = false) String priceMin, @RequestParam(required = false) String priceMax, 
                    @RequestParam(required = false) String landmark, @RequestParam(required=false) String starRatings)
    {
        String destId;
        if (destination != null) {
            destId = listingService.getLocationID(destination);
        }
        else {
            destId = "1506246";
        }

        String landId;
        if(landmark !=null) {
            landmark = listingService.getLandID(landmark);
            //return listingService.getListingsWithLandmark(destId, checkIn.toString(), checkOut.toString(), "PRICE", "1", landId);
        }

        String amenId;
        if(amenity != null)
        {
            amenity = listingService.getAmenityID(amenity);
            //return listingService.getListingsWithAmenities(destId, checkIn.toString(), checkOut.toString(), order,numAdults, amenId);
        }
                
        String starId;
        if (starRatings !=null) {
            //starId = listingService.getStarRatings(starRatings);
        }
        else{
            //starId = null;
        }

        String results = listingService.getListings(destId, checkIn.toString(), checkOut.toString(), order,numAdults, amenity, priceMin, priceMax, landmark, starRatings);
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
