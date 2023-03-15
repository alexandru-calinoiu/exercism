module SpaceAge (Planet(..), ageOn) where

type OrbitalPeriod = Float

data Planet = Mercury
            | Venus
            | Earth
            | Mars
            | Jupiter
            | Saturn
            | Uranus
            | Neptune

ageOn :: Planet -> Float -> Float
ageOn p seconds = seconds / period
  where period = orbitalPeriodInSeconds p

orbitalPeriodInSeconds :: Planet -> OrbitalPeriod
orbitalPeriodInSeconds Earth = 365.25 * 24 * 60 * 60
orbitalPeriodInSeconds p = periodInEarthYears p * earthOrbitalPeriod
  where earthOrbitalPeriod = orbitalPeriodInSeconds Earth

periodInEarthYears :: Planet -> OrbitalPeriod
periodInEarthYears Mercury = 0.2408467
periodInEarthYears Venus   = 0.61519726
periodInEarthYears Earth   = 1
periodInEarthYears Mars    = 1.8808158
periodInEarthYears Jupiter = 11.862615
periodInEarthYears Saturn  = 29.447498
periodInEarthYears Uranus  = 84.016846
periodInEarthYears Neptune = 164.79132
