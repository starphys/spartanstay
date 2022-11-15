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
    String getRooms(@RequestParam("destination") String destination, @RequestParam("checkIn")
                              @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate checkIn, @RequestParam("checkOut")
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate checkOut, @RequestParam(required = false) String landmark){
        String destId;
        if (destination != null) {
            destId = listingService.getLocationID(destination);
        }
        else {
            destId = "1506246";
        }
        String landId;
        if(landmark !=null) {
            landId = listingService.getLandID(landmark);
            return listingService.getListingsWithLandmark(destId, checkIn.toString(), checkOut.toString(), "PRICE", "1", landId);
        }

        return listingService.getListings(destId, checkIn.toString(), checkOut.toString(), "PRICE","1");
    }

    @GetMapping("/details")
    String getDetails(@RequestParam("id") String id, @RequestParam("checkIn")
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate checkIn, @RequestParam("checkOut")
                              @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate checkOut){

        return listingService.getDetails(id, checkIn.toString(), checkOut.toString(),"1");
    }
}
