package com.spicebois.tourguideapp.components;


import com.spicebois.tourguideapp.enums.CategoryType;
import com.spicebois.tourguideapp.models.Pin;
import com.spicebois.tourguideapp.repositories.PinRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    PinRepository pinRepository;

    public DataLoader(){

    }

    public void run(ApplicationArguments args) {
        Pin edinburghCastle = new Pin("Edinburgh Castle", CategoryType.ATTRACTION, 55.948612, -3.200833, "A big castle", "Ewan");
        pinRepository.save(edinburghCastle);

        Pin stirlingCastle = new Pin("Stirling Castle", CategoryType.ATTRACTION, 56.126909, -3.943278, "Another big castle", "Matt");
        pinRepository.save(stirlingCastle);

        Pin fortAugustusBush = new Pin("Fort Augustus Bush", CategoryType.TOILETS, 57.142757, -4.678571, "Good for a piss", "Ewan");
        pinRepository.save(fortAugustusBush);

        Pin lochLubnaig = new Pin("Loch Lubnaig", CategoryType.PHOTO, 56.277650, -4.283440, "Decey view", "Matt");
        pinRepository.save(lochLubnaig);
    }

}
