import CountryModel from "../models/CountryModel.js";

const serverErrorMessage = (res, error) => {
    console.error(error);

    res.status(500).json({
        message: 'Internal server error',
    });
}

const validId = (id) => !Number.isNaN(id) && Number.isInteger(id) && id > 0;

export const postCountry = async (req, res) => {
    try {
        
    } catch (error) {
        serverErrorMessage(res, error);
    }
}

export const getCountries = async (req, res) => {
    try {
        const countries = await CountryModel.findAllCountries(req.query);

        res.status(200).json({
            success: true,
            message: countries.length === 0
                ? 'No countries found'
                : 'Countries retrieved',
            data: countries,
        });
    } catch (error) {
        serverErrorMessage(res, error);
    }
}

export const getCountryById = async (req ,res) => {
    try {
        const id = Number(req.params.id);

        if (!validId(id)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid id parameter'
            });
        }

        const country = await CountryModel.findCountryById(id);
        if (!country) {
            return res.status(404).json({
                success: false,
                message: `Country with id ${id} not found`
            });
        }

        res.status(200).json({
            success: true,
            message: `Country with id ${id} found`,
            data: country
        });
    } catch (error) {
        serverErrorMessage(res, error);
    }
}