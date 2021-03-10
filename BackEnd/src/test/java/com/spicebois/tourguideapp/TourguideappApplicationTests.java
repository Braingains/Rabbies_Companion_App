package com.spicebois.tourguideapp;

import com.spicebois.tourguideapp.models.Pin;
import com.spicebois.tourguideapp.repositories.PinRepository;
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
	PinRepository pinRepository;

	@Test
	void contextLoads() {
	}

	@Test
	public void createPin(){
		Pin pin3 = new Pin("The Golden Jobby", "Attraction", "Somehow makes me miss the old St James centre", "Matt", 5.1, 5.2);
		pinRepository.save(pin3);
	}

	@Test
	public void hasCategory(){
		Pin pin3 = new Pin("The Golden Jobby", "Attraction", "Somehow makes me miss the old St James centre", "Matt", 69.69, 420.420);
		assertEquals("Attraction", pin3.getCategory());
	}

}
