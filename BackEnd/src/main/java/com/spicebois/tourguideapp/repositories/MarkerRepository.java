package com.spicebois.tourguideapp.repositories;

import com.spicebois.tourguideapp.enums.CategoryType;
import com.spicebois.tourguideapp.models.Marker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MarkerRepository extends JpaRepository<Marker, Long> {
    List<Marker> findByCategoryType(CategoryType categoryType);

    List<Marker> findByUserIgnoreCase(String user);
}
