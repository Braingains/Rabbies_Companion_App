package com.spicebois.tourguideapp.repositories;

import com.spicebois.tourguideapp.models.Location;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LocationRepository extends JpaRepository <Location, Long>{
}