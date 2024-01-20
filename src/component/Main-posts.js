import React, { useState } from "react"
import CoursesDatas from "./CoursesDatas";
import { useParams, Navigate } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
export default function MainPost() {

  const Params = useParams();
  let Data = CoursesDatas.find(data => data.id == Params.courseID)

  console.log(Data);



  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <img src="/logo512.png" alt="" />
        </Col>

        <Col className="mt-5">
          <h1 >{Data.title}</h1>
          <h4 className="mt-5">{Data.description}</ h4>

          <h2 style={{color:"red" , marginTop:55}}>{Data.price}</h2>
        </Col>
      </Row>
    </Container>
  )
}