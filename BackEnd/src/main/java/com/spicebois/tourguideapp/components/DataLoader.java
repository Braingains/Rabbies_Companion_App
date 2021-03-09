package com.spicebois.tourguideapp.components;


import com.spicebois.tourguideapp.models.Location;
import com.spicebois.tourguideapp.models.Pin;
import com.spicebois.tourguideapp.repositories.LocationRepository;
import com.spicebois.tourguideapp.repositories.PinRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    LocationRepository locationRepository;

    @Autowired
    PinRepository pinRepository;

    public DataLoader(){

    }

    public void run(ApplicationArguments args) {
        Pin edinburghCastle = new Pin("Edinburgh Castle", "Attraction",  "A big castle", "Ewan");
        pinRepository.save(edinburghCastle);

        Pin stirlingCastle = new Pin("Stirling Castle", "Attraction",  "Another big castle", "Matt");
        pinRepository.save(stirlingCastle);

        Pin fortAugustusBush = new Pin("Fort Augustus Bush", "Attraction",  "Good for a piss", "Ewan");
        pinRepository.save(fortAugustusBush);

        Pin lochLubnaig = new Pin("Loch Lubnaig", "Attraction",  "Decey view", "Matt");
        pinRepository.save(lochLubnaig);

        Location location1 = new Location(55.948612, -3.200833, edinburghCastle);
        locationRepository.save(location1);

        Location location2 = new Location(56.126909, -3.943278, stirlingCastle);
        locationRepository.save(location2);

        Location location3 = new Location(57.142757, -4.678571, fortAugustusBush);
        locationRepository.save(location3);

        Location location4 = new Location(56.277650, -4.283440, lochLubnaig);
        locationRepository.save(location4);
    }

}