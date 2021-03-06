package com.spicebois.tourguideapp;

import com.spicebois.tourguideapp.models.Marker;
import com.spicebois.tourguideapp.repositories.MarkerRepository;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.jupiter.api.Assertions.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest
class TourguideappApplicationTests {

	@Autowired
	MarkerRepository markerRepository;

	@Test
	void contextLoads() {
	}

	@Test
	public void createMarker(){
		Marker marker = new Marker("Fort Augustus Bush", "Toilet", 57.142757, -4.678571, "Good for a piss", "Ewan");
		markerRepository.save(marker);
	}

}
