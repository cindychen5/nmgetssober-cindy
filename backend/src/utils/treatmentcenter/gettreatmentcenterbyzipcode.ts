import {treatmentcenterjson} from "../database/treatmentcenterjson"
import {connect} from "../database.utils";

export async function insertTreatmentCenter(gettreatmentcenterbyzipcode: treatmentcenterfinal) {

    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "INSERT INTO treatmentcenter(treatmentCenterId, treatmentCenterName, treatmentCenterStreet1, treatmentCenterStreet2, treatmentCenterCity, treatmentCenterZipCode,treatmentCenterPhoneNumber,treatmentCenterWebsite) VALUES(UUID_TO_BIN(UUID()), ) "

        const [rows] = await mySqlConnection.execute(mySqlQuery, treatmentcenterfinal)
        return "________"

    } catch (error) {
        console.log(error)
    }
}

