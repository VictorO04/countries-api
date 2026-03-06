import prisma from '../utils/prismaClient.js';

export default class CountryModel {
    constructor({ id = null, name, capital, continent, subregion, flagUrl } = {}) {
        this.id = id;
        this.name = name;
        this.capital = capital;
        this.continent = continent;
        this.subregion = subregion;
        this.flagUrl = flagUrl;
    }

    async create() {
        return prisma.country.create({
            data: {
                name: this.name,
                capital: this.capital,
                continent: this.continent,
                subregion: this.subregion,
                flagUrl: this.flagUrl,
            }
        });
    }

    static async findAllCountries(filters = {}) {
        const where = {}

        if (filters.name) where.name = { contains: filters.name, mode: 'insensitive' }
        if (filters.capital) where.capital = { contains: filters.capital, mode: 'insensitive' }
        if (filters.continent) where.continent = filters.continent.toUpperCase();

        return prisma.country.findMany({ where });
    }

    static async findCountryById(id) {
        const data = await prisma.country.findUnique({ where: { id } });

        return data ? new CountryModel(data) : null;
    }
}