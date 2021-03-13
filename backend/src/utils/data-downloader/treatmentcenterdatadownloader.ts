//using this file to create data downloader
//axios is from the express spin up

import {treatmentCenterJson} from "../database/treatmentcenterjson"
import {TreatmentCenter} from "../interfaces/TreatmentCenter";
import {ServiceProvided} from "../interfaces/ServiceProvided";
import {insertTreatmentCenter} from "../treatment-center/insertTreatmentCenter";
import {FacilityCategory} from "../interfaces/FacilityCategory";
import {insertFacilityCategory} from "../facility-category/insertFacilityCategory";
import {insertServiceProvided} from "../service-provided/insertServiceProvided";
import {v1 as uuid} from "uuid";
import {selectFacilityCategoryByFacilityCategoryName} from "../facility-category/selectFacilityCategoryByFacilityCategoryName";
const Geocodio = require('geocodio-library-node');


function treatmentcenterdatadownloader(): Promise<any> {
    async function main() {
        try {
            await getTreatmentCenter()
        } catch (error) {
            console.error(error)
        }
    }


    return main()

    async function getTreatmentCenter() {
        try {

            // geocoding

            const geocoder = new Geocodio(process.env.GEOCODE_KEY)

            for (let currentTreatmentCenterCategory of treatmentCenterJson.categories) {
                const facilityCategory: FacilityCategory = {
                    facilityCategoryGroupName: "update later",
                    facilityCategoryId: uuid(),
                    facilityCategoryName: currentTreatmentCenterCategory,
                }
                await insertFacilityCategory(facilityCategory)
            }

            for (let currentTreatmentCenter of treatmentCenterJson.data) {

                const address = currentTreatmentCenter.street1 + ',' + currentTreatmentCenter.street2 + ',' + currentTreatmentCenter.city + ',' + 'NM, ' + currentTreatmentCenter.zipCode;
                const response = await geocoder.geocode(address)
                console.log("geocoderresponse", response.results[0]['location'])
                const treatmentCenter: TreatmentCenter = {
                    treatmentCenterId: uuid(),
                    treatmentCenterName: currentTreatmentCenter.city,
                    treatmentCenterStreet1: currentTreatmentCenter.street1,
                    treatmentCenterStreet2: currentTreatmentCenter.street2,
                    treatmentCenterLat: response.results[0]['location']['lat'],
                    treatmentCenterLong: response.results[0]['location']['lng'],
                    treatmentCenterCity: currentTreatmentCenter.city,
                    treatmentCenterZipCode: currentTreatmentCenter.zipcode,
                    treatmentCenterPhone: currentTreatmentCenter.phone,
                    treatmentCenterWebsite: currentTreatmentCenter.website
                }
                await insertTreatmentCenter(treatmentCenter)
                for (let currentServiceProvided in currentTreatmentCenter) {

                    if (currentServiceProvided === "Detoxification" && currentTreatmentCenter[currentServiceProvided] === 1) {
                        await createServiceProvided(currentServiceProvided, treatmentCenter.treatmentCenterId)
                    }
                    if (currentServiceProvided === "SAMHSA-certifiedOpioidTreatmentProgram" && currentTreatmentCenter[currentServiceProvided] === 1) {
                        await createServiceProvided(currentServiceProvided, treatmentCenter.treatmentCenterId)
                    }

                    if (currentServiceProvided === "HospitalInpatient" && currentTreatmentCenter[currentServiceProvided] === 1) {
                        await createServiceProvided(currentServiceProvided, treatmentCenter.treatmentCenterId)
                    }

                    if (currentServiceProvided === "Residential" && currentTreatmentCenter[currentServiceProvided] === 1) {
                        await createServiceProvided(currentServiceProvided, treatmentCenter.treatmentCenterId)
                    }

                    if (currentServiceProvided === "Outpatient" && currentTreatmentCenter[currentServiceProvided] === 1) {
                        await createServiceProvided(currentServiceProvided, treatmentCenter.treatmentCenterId)
                    }

                    if (currentServiceProvided === "NoPaymentAccepted" && currentTreatmentCenter[currentServiceProvided] === 1) {
                        await createServiceProvided(currentServiceProvided, treatmentCenter.treatmentCenterId)
                    }

                    if (currentServiceProvided === "CashOrSelf-payment" && currentTreatmentCenter[currentServiceProvided] === 1) {
                        await createServiceProvided(currentServiceProvided, treatmentCenter.treatmentCenterId)
                    }

                    if (currentServiceProvided === "Medicaid" && currentTreatmentCenter[currentServiceProvided] === 1) {
                        await createServiceProvided(currentServiceProvided, treatmentCenter.treatmentCenterId)
                    }

                    if (currentServiceProvided === "Medicare" && currentTreatmentCenter[currentServiceProvided] === 1) {
                        await createServiceProvided(currentServiceProvided, treatmentCenter.treatmentCenterId)
                    }

                    if (currentServiceProvided === "StateFinancedInsurance_OtherThanMedicaid" && currentTreatmentCenter[currentServiceProvided] === 1) {
                        await createServiceProvided(currentServiceProvided, treatmentCenter.treatmentCenterId)
                    }

                    if (currentServiceProvided === "PrivateHealthInsurance" && currentTreatmentCenter[currentServiceProvided] === 1) {
                        await createServiceProvided(currentServiceProvided, treatmentCenter.treatmentCenterId)
                    }

                    if (currentServiceProvided === "MilitaryInsurance" && currentTreatmentCenter[currentServiceProvided] === 1) {
                        await createServiceProvided(currentServiceProvided, treatmentCenter.treatmentCenterId)
                    }

                    if (currentServiceProvided === "Veterans" && currentTreatmentCenter[currentServiceProvided] === 1) {
                        await createServiceProvided(currentServiceProvided, treatmentCenter.treatmentCenterId)
                    }

                    if (currentServiceProvided === "ActiveDutyMilitary" && currentTreatmentCenter[currentServiceProvided] === 1) {
                        await createServiceProvided(currentServiceProvided, treatmentCenter.treatmentCenterId)
                    }

                    if (currentServiceProvided === "MilitaryFamilies" && currentTreatmentCenter[currentServiceProvided] === 1) {
                        await createServiceProvided(currentServiceProvided, treatmentCenter.treatmentCenterId)
                    }

                    if (currentServiceProvided === "AdultWomen" && currentTreatmentCenter[currentServiceProvided] === 1) {
                        await createServiceProvided(currentServiceProvided, treatmentCenter.treatmentCenterId)
                    }

                    if (currentServiceProvided === "AdultMen" && currentTreatmentCenter[currentServiceProvided] === 1) {
                        await createServiceProvided(currentServiceProvided, treatmentCenter.treatmentCenterId)
                    }

                    if (currentServiceProvided === "Female" && currentTreatmentCenter[currentServiceProvided] === 1) {
                        await createServiceProvided(currentServiceProvided, treatmentCenter.treatmentCenterId)
                    }

                    if (currentServiceProvided === "Male" && currentTreatmentCenter[currentServiceProvided] === 1) {
                        await createServiceProvided(currentServiceProvided, treatmentCenter.treatmentCenterId)
                    }

                    if (currentServiceProvided === "LesbianGayBisexualTransgender(LGBT)" && currentTreatmentCenter[currentServiceProvided] === 1) {
                        await createServiceProvided(currentServiceProvided, treatmentCenter.treatmentCenterId)
                    }

                    if (currentServiceProvided === "Navajo" && currentTreatmentCenter[currentServiceProvided] === 1) {
                        await createServiceProvided(currentServiceProvided, treatmentCenter.treatmentCenterId)
                    }

                    if (currentServiceProvided === "Spanish" && currentTreatmentCenter[currentServiceProvided] === 1) {
                        await createServiceProvided(currentServiceProvided, treatmentCenter.treatmentCenterId)
                    }
                }
            }
        } catch
            (error) {
            throw new Error(error)
        }
    }

    async function createServiceProvided(serviceProvidedName: string, treatmentCenterId: string) {
        const category = await selectFacilityCategoryByFacilityCategoryName(serviceProvidedName)
        console.log("category", category)
        const serviceProvided: ServiceProvided = {
            serviceProvidedFacilityCategoryId: category.facilityCategoryId,
            serviceProvidedTreatmentCenterId: treatmentCenterId
        }
        await insertServiceProvided(serviceProvided)
    }
}

treatmentcenterdatadownloader().catch(error => {
    console.error(error)
})