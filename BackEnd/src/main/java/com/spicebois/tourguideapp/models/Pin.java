package com.spicebois.tourguideapp.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="pins")
public class Pin {

    @Column(name="name")
    private String name;

    @Column(name="category")
    private String category;

    @Column(name="notes")
    private String notes;

    @Column(name="user")
    private String user;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(mappedBy = "pin")
    @JsonIgnoreProperties({"pin"})
    private List<Location> coordinates;

//    private ArrayList<Routes> tourRoutes;


    public Pin(String name, String category, String notes, String user) {
        this.name = name;
        this.category = category;
        this.notes = notes;
        this.user = user;
        this.coordinates = new ArrayList<>();
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

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
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

    public List<Location> getCoordinates() {
        return coordinates;
    }

    public void setCoordinates(List<Location> coordinates) {
        this.coordinates = coordinates;
    }
}