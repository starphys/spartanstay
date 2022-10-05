package com.spartanstay.spartanstay.service;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class ListingsServiceImpl implements ListingsService{

    @Override
    public String getListings(String destId, String checkIn, String checkOut, String sortOrder ) {
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://hotels4.p.rapidapi.com/properties/list?destinationId="+ destId +
                        "&pageNumber=1&pageSize=25" +
                        "&checkIn="+checkIn+
                        "&checkOut="+checkOut+
                        "&adults1=1" +
                        "&sortOrder=" + sortOrder +
                        "&locale=en_US&currency=USD"))
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

        if(response != null) {
            return response.body().toString();
        }
        return "{Response was null}";

    }
}