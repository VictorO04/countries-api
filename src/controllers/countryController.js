import CountryModel from "../models/CountryModel.js";

const serverErrorMessage = (res, error) => {
    console.error(error);

    res.status(500).json({
        message: "Internal server error",
    });
}

export const getCountries = async (req, res) => {
    try {
        const countries = await CountryModel.findAllCountries(req.query);

        res.status(200).json({
            total: countries.length,
            message: countries.length === 0
                ? "No countries found"
                : "Countries retrieved",
            data: countries,
        });
    } catch (error) {
        serverErrorMessage(res, error);
    }
}