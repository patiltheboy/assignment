import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CanvasJSReact from '@canvasjs/react-charts';

const Home = () => {
    const [data, setData] = useState()

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("http://localhost:5050/api/data", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.status === "success") {
                    setData(result.data)
                }
            })
            .catch(error => console.log('error', error));
    }, [])


    // var CanvasJS = CanvasJSReact.CanvasJS;
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;
    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col md="3 mt-4">
                        <div className='shadow text-center p-3 rounded-3'>
                            <h2>{data?.BeiDou_Q}</h2>
                            <p>Messages</p>
                            <h2>{data?.TerminalID}</h2>
                            <p>TerminalID</p>
                            <h2>{data?.TerminalID_To}</h2>
                            <p>TerminalID_To</p>
                        </div>
                    </Col>
                    <Col md="4 mt-4">
                        <div className='shadow text-center p-3 rounded-3'>
                            <CanvasJSChart options={{
                                animationEnabled: true,
                                exportEnabled: true,
                                theme: "dark2", // "light1", "dark1", "dark2"
                                title: {
                                    text: "Trip Expenses"
                                },
                                data: [{
                                    type: "pie",
                                    indexLabel: "{label}: {y}%",
                                    startAngle: -90,
                                    dataPoints: [
                                        { y: 20, label: "Airfare" },
                                        { y: 24, label: "Food & Drinks" },
                                        { y: 20, label: "Accomodation" },
                                        { y: 14, label: "Transportation" },
                                        { y: 12, label: "Activities" },
                                        { y: 10, label: "Misc" }
                                    ]
                                }]
                            }}

                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Home
