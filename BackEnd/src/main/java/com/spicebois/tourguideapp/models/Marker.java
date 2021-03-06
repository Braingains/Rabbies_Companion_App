package com.spicebois.tourguideapp.models;

public class Marker {
    private String name;
    private String category;
    private double lat;
    private double lng;
    private String notes;
    private String user;
//    private ArrayList<Routes> tourRoutes;


    public Marker(String name, String category, double lat, double lng, String notes, String user) {
        this.name = name;
        this.category = category;
        this.lat = lat;
        this.lng = lng;
        this.notes = notes;
        this.user = user;
    }

//    User may eventually be a class

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public double getLat() {
        return lat;
    }

    public void setLat(double lat) {
        this.lat = lat;
    }

    public double getLng() {
        return lng;
    }

    public void setLng(double lng) {
        this.lng = lng;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }
}
