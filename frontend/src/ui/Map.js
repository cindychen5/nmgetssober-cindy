import React, {useState} from "react"
import './Map.css'
import ReactMapGL, {Popup} from "react-map-gl";
import {Col, Container, Row} from "react-bootstrap";
import {Pin} from "./Pin";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllActivities} from "../store/activity";
import {ActivityName} from "../activity-name";
import {fetchAllActivityType} from "../store/activityType";
import {SearchBarForm} from "./shared/components/searchBar/SearchBarForm";
import {fetchAllTreatmentCenters} from "../store/treatmentCenter";



export const MapPage = () => {

    const activities = useSelector((state) => state.activity ? state.activity : [])
    const activityTypes = useSelector((state) => state.activityType ? state.activityType : [])
    const treatmentCenters = useSelector((state) => state.treatmentCenter ? state.treatmentCenter : [])

    const dispatch = useDispatch()
    const initialEffects = () => {
        dispatch(fetchAllActivities())
        dispatch(fetchAllActivityType())
        dispatch(fetchAllTreatmentCenters())
    }

    React.useEffect(initialEffects, [dispatch])
    // console.log(activities)

    const [viewport, setViewport] = React.useState({
        latitude: 35.15,
        longitude: -106.65,
        zoom: 9
    });
    const [popupInfo, setPopupInfo] = useState(null);

    return (
        <>

            <Container fluid className= "map-bg my-0">
                <Row className="">
                    <Col className= "my-4">
{/*=======*/}
{/*            <Container>*/}
{/*                <Row className="my-4">*/}
{/*                    <Col md={6}>*/}
{/*>>>>>>> development*/}

                        <SearchBarForm activityTypes={activityTypes}  />

                        <ReactMapGL
                            {...viewport}
                            width="50vw"
                            height="50vh"
                            onViewportChange={(viewport) => setViewport(viewport)}
                            mapStyle="mapbox://styles/mapbox/dark-v9"
                        >

                            {activities.map((activity, index) =>
                                <Pin
                                    activity={activity}
                                    index={index} key={index}
                                    onClick={setPopupInfo}
                                />
                            )}

                            {treatmentCenters.map((treatmentCenter) =>
                            <Pin
                                treatmentCenter={treatmentCenter}
                                key={treatmentCenter.treatmentCenterId}
                                onClick={setPopupInfo}
                            />
                            )}

                            {popupInfo && (
                                <Popup
                                    tipSize={10}
                                    anchor="top"
                                    longitude={popupInfo.activityLong ?? popupInfo.treatmentCenterLong}
                                    latitude={popupInfo.activityLat ?? popupInfo.treatmentCenterLat}
                                    closeOnClick={false}
                                    onClose={setPopupInfo}
                                >
                                    <ActivityName activity={popupInfo}
                                                  // insertActivityResults={insertActivityResults}
                                    />
                                </Popup>
                            )}
                        </ReactMapGL>
                    </Col>

                    <Col>
                        <h1 className= "results">Results</h1>
{/*=======*/}
{/*                    <Col md={6}>*/}

{/*>>>>>>> development*/}
                        {popupInfo && (
                            <>
{/*<<<<<<< HEAD*/}
{/*                                <Container>*/}
{/*                                    <h1>Results</h1>*/}
{/*                                    <p className="my-2 font-weight-bold">{popupInfo.activityGroupName}</p>*/}
{/*                                    <p className="my-0 font-weight-bold">Description:</p>*/}
{/*                                    <p>{popupInfo.activityDescription}</p>*/}
{/*                                    <p className="my-0 font-weight-bold">Address:</p>*/}
{/*                                    <p className="my-0">{popupInfo.activityStreet1}</p>*/}
{/*                                    <p>{popupInfo.activityStreet2}</p>*/}
{/*                                    <p className="my-0 font-weight-bold">When they meet:</p>*/}
{/*                                    <p>{popupInfo.activityTime}</p>*/}
{/*                                    <p className="my-0 font-weight-bold">Website:</p>*/}
{/*                                    /!*<p>{popupInfo.activityWebsite}</p>*!/*/}
{/*                                    <a href={popupInfo.activityWebsite}>{popupInfo.activityWebsite}</a>*/}
{/*                                </Container>*/}
{/*=======*/}
                        <p>{popupInfo.activityGroupName ?? popupInfo.treatmentCenterName}</p>
                        <p>{popupInfo.activityStreet1 ?? popupInfo.treatmentCenterStreet1} {popupInfo.activityStreet2 ?? popupInfo.treatmentCenterStreet2}</p>
                        <p>{popupInfo.activityCity ?? popupInfo.treatmentCenterCity}</p>
                        <p>{popupInfo.activityZipCode ?? popupInfo.treatmentCenterZipCode}</p>
                         <p>{popupInfo.activityDescription}</p>
                        <p>{popupInfo.activityTime ?? popupInfo.treatmentCenterPhone}</p>
                        <p>{popupInfo.activityWebsite ?? popupInfo.treatmentCenterWebsite}</p>
{/*>>>>>>> sprint-4-redux-treatmentcenter*/}
                            </>
                        )}
                    </Col>
                </Row>
            </Container>
        </>
    )
}