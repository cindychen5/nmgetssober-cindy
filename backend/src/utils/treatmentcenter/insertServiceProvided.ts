import {ServiceProvided} from "../interfaces/ServiceProvided";
import {connect} from "../database.utils";

export async function insertServiceProvided(serviceProvided: ServiceProvided): Promise<string> {
    try {


        const mysqlConnection = await connect()
        const query: string = "INSERT INTO ServiceProvided (serviceProvidedFacilityCategoryId, serviceProvidedTreatmentCenterId) VALUES (UUID_TO_BIN(:serviceProvidedFacilityCategoryId), UUID_TO_BIN(serviceProvidedTreatmentCenterId))"
        const [rows] = await mysqlConnection.execute(query, serviceProvided)

        return "service provided successfully inserted"
    } catch (error) {
        console.error(error)
        throw error.message
    }
}