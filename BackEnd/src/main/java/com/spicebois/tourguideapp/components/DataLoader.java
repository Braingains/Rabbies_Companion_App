package com.spicebois.tourguideapp.components;


import com.spicebois.tourguideapp.enums.CategoryType;
import com.spicebois.tourguideapp.models.Marker;
import com.spicebois.tourguideapp.repositories.MarkerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    MarkerRepository markerRepository;

    public DataLoader(){

    }

    public void run(ApplicationArguments args) {
        Marker edinburghCastle = new Marker("Edinburgh Castle", CategoryType.ATTRACTION, 55.948612, -3.200833, "A big castle", "Ewan");
        markerRepository.save(edinburghCastle);

        Marker stirlingCastle = new Marker("Stirling Castle", CategoryType.ATTRACTION, 56.126909, -3.943278, "Another big castle", "Matt");
        markerRepository.save(stirlingCastle);

        Marker fortAugustusBush = new Marker("Fort Augustus Bush", CategoryType.TOILETS, 57.142757, -4.678571, "Good for a piss", "Ewan");
        markerRepository.save(fortAugustusBush);

        Marker lochLubnaig = new Marker("Loch Lubnaig", CategoryType.PHOTO, 56.277650, -4.283440, "Decey view", "Matt");
        markerRepository.save(lochLubnaig);
    }

}
