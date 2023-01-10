enum OrbilaPeriodRelativeToEarth {
    mercury = 0.2408467,
    venus = 0.61519726,
    mars = 1.8808158,
    jupiter = 11.862615,
    saturn = 29.447498,
    uranus = 84.016846,
    neptune = 164.79132,
}

class SpaceAge {
    public seconds: number

    private readonly earthOrbitalPeriod = 31557600

    constructor(seconds: number) {
        this.seconds = seconds
    }

    public onEarth(): number {
        return this.round(this.seconds / this.earthOrbitalPeriod, 2)
    }

    public onMercury(): number {
        return this.ageOn(OrbilaPeriodRelativeToEarth.mercury)
    }

    public onVenus(): number {
        return this.ageOn(OrbilaPeriodRelativeToEarth.venus)
    }

    public onMars(): number {
        return this.ageOn(OrbilaPeriodRelativeToEarth.mars)
    }

    public onJupiter(): number {
        return this.ageOn(OrbilaPeriodRelativeToEarth.jupiter)
    }

    public onSaturn(): number {
        return this.ageOn(OrbilaPeriodRelativeToEarth.saturn)
    }

    public onUranus(): number {
        return this.ageOn(OrbilaPeriodRelativeToEarth.uranus)
    }

    public onNeptune(): number {
        return this.ageOn(OrbilaPeriodRelativeToEarth.neptune)
    }

    private ageOn(orbitalPeriod: OrbilaPeriodRelativeToEarth): number {
        return this.round(this.seconds / this.earthOrbitalPeriod / orbitalPeriod, 2)
    }

    private round(value: number, precission: number): number {
        return Number(Math.round(Number(value + 'e' + precission)) + 'e-' + precission)
    }
}

export default SpaceAge