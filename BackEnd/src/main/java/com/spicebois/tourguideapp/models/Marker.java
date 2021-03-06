package com.spicebois.tourguideapp.models;

import javax.persistence.*;

@Entity
@Table(name="markers")
public class Marker {

    @Column(name="name")
    private String name;

    @Column(name="category")
    private String category;

    @Column(name="lat")
    private double lat;

    @Column(name="lng")
    private double lng;

    @Column(name="notes")
    private String notes;

    @Column(name="user")
    private String user;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
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
//    One user to many markers

    public Marker(){

    }

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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
