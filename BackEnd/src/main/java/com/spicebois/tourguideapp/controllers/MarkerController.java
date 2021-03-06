package com.spicebois.tourguideapp.controllers;

import com.spicebois.tourguideapp.models.Marker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.spicebois.tourguideapp.repositories.MarkerRepository;

import java.util.List;

@RestController
public class MarkerController {

    @Autowired
    MarkerRepository markerRepository;

    @GetMapping(value="/markers")
    public ResponseEntity<List<Marker>> getAllMarkers(){
        return new ResponseEntity<>(markerRepository.findAll(), HttpStatus.OK);
    }

}
