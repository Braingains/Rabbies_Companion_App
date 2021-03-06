package com.spicebois.tourguideapp;

import com.spicebois.tourguideapp.models.Marker;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.jupiter.api.Assertions.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest
class TourguideappApplicationTests {

	@Test
	void contextLoads() {
	}

	@Test
	public void markerHasName(){
		Marker marker2 = new Marker("Fort Augustus Bush", "Toilet", 57.142757, -4.678571, "Good for a piss", "Ewan");
		assertEquals("Fort Augustus Bush", marker2.getName());
	}

}
