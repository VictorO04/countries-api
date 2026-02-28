import prisma from '../utils/prismaClient.js';

export default class CountryModel {
    constructor({ id = null, name, capital, continent, flagUrl } = {}) {
        this.id = id;
        this.name = name;
        this.capital = capital;
        this.continent = continent;
        this.flagUrl = flagUrl;
    }

    static async findAllCountries(filters = {}) {
        const where = {}

        if (filters.name) where.name = { contains: filters.name, mode: 'insensitive' }
        if (filters.capital) where.capital = { contains: filters.capital, mode: 'insensitive' }
        if (filters.continent) where.continent = { contains: filters.continent, mode: 'insensitive' }

        return prisma.country.findMany({ where });
    }
}