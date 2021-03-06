package com.spicebois.tourguideapp.controllers;

import com.spicebois.tourguideapp.models.Marker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.spicebois.tourguideapp.repositories.MarkerRepository;

import java.util.List;

@RestController
public class MarkerController {

    @Autowired
    MarkerRepository markerRepository;

    @GetMapping(value="/markers")
    public ResponseEntity<List<Marker>> getAllMarkers(
        //FILTER
        @RequestParam(name = "category", required = false) String category
        ){
            if (category != null){
                return new ResponseEntity(markerRepository.findByCategory(category), HttpStatus.OK);
            }

        return new ResponseEntity<>(markerRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value="markers/category/{id}")
    public ResponseEntity<List<Marker>> getMarkersByCategory(@PathVariable String category){
        return new ResponseEntity<>(markerRepository.findByCategory(category), HttpStatus.OK);
    }

    @PostMapping(value="/markers")
    public ResponseEntity<Marker> postMarker(@RequestBody Marker marker){
        markerRepository.save(marker);
        return new ResponseEntity<>(marker, HttpStatus.CREATED);
    }

    @PatchMapping(value="/markers/{id}")
    public ResponseEntity<Marker> updateMarker(@RequestBody Marker marker){
        markerRepository.save(marker);
        return new ResponseEntity<>(marker, HttpStatus.OK);
    }

    @DeleteMapping(value = "/markers/{id}")
    public ResponseEntity<Marker> deleteMarker(@PathVariable Long id) {
        Marker found = markerRepository.getOne(id);
        markerRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }


}
