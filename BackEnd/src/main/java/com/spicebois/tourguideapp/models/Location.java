package com.spicebois.tourguideapp.models;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "coordinates")
public class Location {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="lat")
    private double lat;

    @Column(name="lng")
    private double lng;

    @ManyToOne
    @JsonIgnoreProperties({"coordinates"})
    @JoinColumn(name= "pin_id", nullable = false)
    private Pin pin;

    public Location(double lat, double lng, Pin pin) {
        this.lat = lat;
        this.lng = lng;
        this.pin = pin;
    }

    public Location(){}

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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Pin getPin() {
        return pin;
    }

    public void setPin(Pin pin) {
        this.pin = pin;
    }
}
