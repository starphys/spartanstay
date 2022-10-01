package com.spartanstay.spartanstay.controller;

import com.spartanstay.spartanstay.service.Secrets;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.LocalDate;
import java.util.Date;

@RestController
@RequestMapping("/listings")
public class ListingsController {
    @GetMapping("/NewYork")
    String getNewYorkListings(@RequestParam("checkIn")
                              @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate checkIn, @RequestParam("checkOut")
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate checkOut){
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://hotels4.p.rapidapi.com/properties/list?destinationId=1506246&pageNumber=1&pageSize=25&checkIn="+checkIn+"&checkOut="+checkOut+"&adults1=1&sortOrder=PRICE&locale=en_US&currency=USD"))
                .header("X-RapidAPI-Key", Secrets.API_KEY)
                .header("X-RapidAPI-Host", "hotels4.p.rapidapi.com")
                .method("GET", HttpRequest.BodyPublishers.noBody())
                .build();
        HttpResponse<String> response = null;
        try {
            response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());
        } catch (IOException e) {
            throw new RuntimeException(e);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
        System.out.println(response.body());

        return null;
    }
}
