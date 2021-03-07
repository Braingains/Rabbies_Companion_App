package com.spicebois.tourguideapp.repositories;

import com.spicebois.tourguideapp.enums.CategoryType;
import com.spicebois.tourguideapp.models.Pin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PinRepository extends JpaRepository<Pin, Long> {
    List<Pin> findByCategoryType(CategoryType categoryType);

//    List<Marker> findByUserIgnoreCase(String user);
}
