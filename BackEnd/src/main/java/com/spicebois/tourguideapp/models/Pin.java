package com.spicebois.tourguideapp.models;

import com.spicebois.tourguideapp.enums.CategoryType;

import javax.persistence.*;

@Entity
@Table(name="pins")
public class Pin {

    @Column(name="name")
    private String name;

    @Column(name="category")
    @Enumerated(EnumType.STRING)
//    makes enum compatible with query name thing
    private CategoryType categoryType;

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


    public Pin(String name, CategoryType categoryType, double lat, double lng, String notes, String user) {
        this.name = name;
        this.categoryType = categoryType;
        this.lat = lat;
        this.lng = lng;
        this.notes = notes;
        this.user = user;
    }

//    User may eventually be a class
//    One user to many pins

    public Pin(){

    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public CategoryType getCategoryType() {
        return categoryType;
    }

    public void setCategoryType(CategoryType categoryType) {
        this.categoryType = categoryType;
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
