export type Country = {
    cca3: String,
    name: CountryName,
    flags: Flag,
    capital: String,
    population: number,
    region?: String,
    subregion?: String,
    area?: number
}

interface CountryName{
    common: String,
    official: String
}

interface Flag{
    png: String,
    svg: String
}