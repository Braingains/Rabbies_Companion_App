package com.spicebois.tourguideapp.controllers;

import com.spicebois.tourguideapp.models.Pin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.spicebois.tourguideapp.repositories.PinRepository;

import java.util.List;

@RestController
public class PinController {

    @Autowired
    PinRepository pinRepository;

    @GetMapping(value="/pins")
    public ResponseEntity<List<Pin>> getAllPins(){
        return new ResponseEntity<>(pinRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value="/pins/category/{category}")
    public ResponseEntity<List<Pin>> getPinByCategory(@PathVariable String category){
        return new ResponseEntity<>(pinRepository.findByCategory(category), HttpStatus.OK);
    }


//    @GetMapping(value="/markers")
//    public ResponseEntity<List<Marker>> getAllMarkers(
//        //FILTER
//        @RequestParam(name = "category", required = false) CategoryType categoryType,
//        @RequestParam(name = "user", required = false) String user
//        ){
//            if (categoryType != null){
//                return new ResponseEntity(markerRepository.findByCategoryType(categoryType), HttpStatus.OK);
//            }
//            if (user != null){
//                return new ResponseEntity(markerRepository.findByUserIgnoreCase(user), HttpStatus.OK);
//            }
//
//        return new ResponseEntity<>(markerRepository.findAll(), HttpStatus.OK);
//    }

//    @GetMapping(value="markers/category/{id}")
//    public ResponseEntity<List<Marker>> getMarkersByEnum(@PathVariable ("categoryType") CategoryType categoryType){
//        return new ResponseEntity<>(markerRepository.findByCategoryType(categoryType), HttpStatus.OK);
//    }

    @PostMapping(value="/pins")
    public ResponseEntity<Pin> postPin(@RequestBody Pin pin){
        pinRepository.save(pin);
        return new ResponseEntity<>(pin, HttpStatus.CREATED);
    }

    @PatchMapping(value="/pins/{id}")
    public ResponseEntity<Pin> updatePin(@RequestBody Pin pin){
        pinRepository.save(pin);
        return new ResponseEntity<>(pin, HttpStatus.OK);
    }

    @DeleteMapping(value = "/pins/{id}")
    public ResponseEntity<Pin> deletePin(@PathVariable Long id) {
        Pin found = pinRepository.getOne(id);
        pinRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }


}
