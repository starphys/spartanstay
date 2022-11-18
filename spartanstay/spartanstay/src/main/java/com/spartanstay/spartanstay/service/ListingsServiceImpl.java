package com.spartanstay.spartanstay.service;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

import org.json.JSONObject;

public class ListingsServiceImpl implements ListingsService{

    @Override
    public String getListings(String destId, String checkIn, String checkOut, String sortOrder, int adults, 
                              String amenity, String priceMin, String priceMax, String landmark)
    {
        String filters = new String();

        if(amenity != null) {
            filters += "&amenityIds=" + amenity;
        }
        if(priceMin != null) {
            filters += "&priceMin=" + priceMin;
        }
        if(priceMax != null) {
            filters += "&priceMax=" + priceMax;
        }
        if(landmark != null) {
            filters += "&landmarkIds=" + landmark;
        }

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://hotels4.p.rapidapi.com/properties/list?destinationId="+ destId +
                        "&pageNumber=1&pageSize=25" +
                        "&checkIn="+checkIn+
                        "&checkOut="+checkOut+
                        "&adults1=" + adults +
                        "&sortOrder=" + sortOrder +
                        filters +
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

        if(response != null && response.body().charAt(0) == '{') {
            JSONObject json = new JSONObject((response.body()));
            return json.getJSONObject("data").getJSONObject("body")
                    .getJSONObject("searchResults").getJSONArray("results").toString();
        }
        return "{No response from listings search.}";

    }

    @Override
    public String getListingsWithAmenities(String destId, String checkIn, String checkOut, String sortOrder, int adults, String amenity) {
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://hotels4.p.rapidapi.com/properties/list?destinationId="+ destId +
                        "&pageNumber=1&pageSize=25" +
                        "&checkIn="+checkIn+
                        "&checkOut="+checkOut+
                        "&adults1=" + adults +
                        "&sortOrder=" + sortOrder +
                        "&locale=en_US&currency=USD" +
                        "&amenityIds=" + amenity))
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
            JSONObject json = new JSONObject((response.body()));
            return json.getJSONObject("data").getJSONObject("body")
                    .getJSONObject("searchResults").getJSONArray("results").toString();
        }
        return "{No response from listings search.}";

    }

    @Override
    public String getListingsWithLandmark(String destId, String checkIn, String checkOut, String sortOrder, String adults, String landmark) {
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://hotels4.p.rapidapi.com/properties/list?destinationId="+ destId +
                        "&pageNumber=1&pageSize=25" +
                        "&checkIn="+checkIn+
                        "&checkOut="+checkOut+
                        "&adults1=" + adults +
                        "&sortOrder=" + sortOrder +
                        "landmarkIds=" + landmark +
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
            JSONObject json = new JSONObject((response.body()));
            return json.getJSONObject("data").getJSONObject("body")
                    .getJSONObject("searchResults").getJSONArray("results").toString();
        }
        return "{No response from listings search.}";

    }
    @Override
    public String getLocationID(String destination) {
        destination = destination.replaceAll(" ", "%20");
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://hotels4.p.rapidapi.com/locations/v2/search?query=" + destination +
                        "&locale=en_US&currency=USD"))
                .header("X-RapidAPI-Key", Secrets.API_KEY)
                .header("X-RapidAPI-Host", "hotels4.p.rapidapi.com")
                .method("GET", HttpRequest.BodyPublishers.noBody())
                .build();
        HttpResponse<String> response = null;
        try {
            response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());
        } catch (IOException e) {
            e.printStackTrace();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        if(response != null && response.body().charAt(0) == '{') {
            JSONObject json = new JSONObject(response.body());
            return json.getJSONArray("suggestions").getJSONObject(0)
                    .getJSONArray("entities").getJSONObject(0).getString("destinationId");
        }
        return "{No response from location search.}";
    }

    @Override
    public String getAmenityID(String amenity) {
        String toBeReturned = "";
        if(amenity.contains("Pool"))
        {
            toBeReturned = "64";
        }
        else if (amenity.contains("Pet-Friendly"))
        {
            if(toBeReturned.equals(""))
            {
                toBeReturned = "128";
            }
            else toBeReturned += "&2C128";
        } else if (amenity.contains("Non-Smoking")) {
            if (toBeReturned.equals(""))
            {
                toBeReturned = "529";
            }
            else toBeReturned += "&2C529";
        }
        else if(amenity.contains("Spa"))
        {
            if (toBeReturned.equals(""))
            {
                toBeReturned = "539";
            }
            else toBeReturned += "&2C539";
        }
        else if (amenity.contains("Gym"))
        {
            if (toBeReturned.equals(""))
            {
                toBeReturned = "2";
            }
            else toBeReturned += "&2C2";
        } else if (amenity.contains("Free Wi-fi")) {
            if (toBeReturned.equals(""))
            {
                toBeReturned = "527";
            }
            else toBeReturned += "&2C527";
        }
        return toBeReturned;
    }

    @Override
    public String getLandID(String landmark) {
        String toBeReturned ="";
        if(landmark.isEmpty() || landmark == null) {
            return toBeReturned;
        }
        else {
            landmark = landmark.replaceAll(" ", "%20");
            return landmark;
        }
    }

    @Override
    public String getDetails(String id, String checkIn, String checkOut, String adults) {
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://hotels4.p.rapidapi.com/properties/get-details?id="+ id +
                        "&checkIn="+checkIn+
                        "&checkOut="+checkOut+
                        "&adults1=" + adults +
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

        if(response != null && response.body().charAt(0) == '{') {
            return response.body();
        }
        return "{No response from details search.}";


    }
}
