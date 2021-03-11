package com.spicebois.example.tourcompanion.components;


import com.spicebois.example.tourcompanion.models.Pin;
import com.spicebois.example.tourcompanion.repositories.PinRepository;
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
        Pin edinburghCastle = new Pin("Edinburgh Castle", "Attraction",  "A big castle", "Ewan", 55.948612, -3.200833);
        pinRepository.save(edinburghCastle);

        Pin stirlingCastle = new Pin("Stirling Castle", "Attraction",  "Another big castle", "Bob", 56.126909, -3.943278);
        pinRepository.save(stirlingCastle);

        Pin fortAugustusBush = new Pin("Fort Augustus Bush", "Toilet",  "Good for a piss", "Susan", 57.142757, -4.678571);
        pinRepository.save(fortAugustusBush);

        Pin lochLubnaig = new Pin("Loch Lubnaig", "Photo Op",  "Decey view", "Matt", 56.277650, -4.283440);
        pinRepository.save(lochLubnaig);

        Pin crianlarich = new Pin ("Crianlarich", "Toilet", "Can park on street by visitor centre", "Stevo", 56.3928, -4.6190);
        pinRepository.save(crianlarich);

        Pin greenWelly = new Pin("Green Welly", "Food", "can eat food", "Matt", 56.4381, -4.7119);
        pinRepository.save(greenWelly);

        Pin callanderParking = new Pin("Callander parking", "Parking", "Free parking all day", "Ewan", 56.2453, -4.2174);
        pinRepository.save(callanderParking);

        Pin theBlackMount = new Pin("The Black Mount", "Photo Op", "Large parking area", "Ewan", 56.5675, -4.7424);
        pinRepository.save(theBlackMount);

        Pin glencoe = new Pin("Glencoe", "Photo Op", "Sometimes full in summer, another stop just along the road", "Chris", 56.6697, -5.0113);
        pinRepository.save(glencoe);

        Pin glencoeVisitorCentre = new Pin("Glencoe Visitor Centre", "Food", "Free food for tour guides", "Ewan", 56.6705, -5.0798);
        pinRepository.save(glencoeVisitorCentre);

        Pin speanBridge = new Pin("Spean Bridge", "Parking", "Parking by woolen mill", "Matt", 56.8919, -4.9208);
        pinRepository.save(speanBridge);

        Pin invergarryCastle = new Pin("Invergarry Castle", "Attraction", "Free parking, no loos", "Ewan", 57.0658, -4.7810);
        pinRepository.save(invergarryCastle);

        Pin strathmashie = new Pin("Strathmashie", "Photo Op", "Small parking area", "Bob", 56.9819, -4.3609);
        pinRepository.save(strathmashie);

        Pin blairAthollCastle = new Pin("Blair Atholl Castle", "Attraction", "Castle closed October - February", "Ewan", 56.7669, -3.8437);
        pinRepository.save(blairAthollCastle);
    }

}