import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import CoursesDatas from './CoursesDatas';
import Product from './Product';
export default function Products() {
    const [Courses, setCourses] = useState(CoursesDatas)
    return (
        <Container className='mt-5'>

            <div style={{ display: "flex", justifyContent: 'space-between' }}>
                {Courses.map(course => (
                    <Product key={course.id} {...course} />
                ))}
            </div>
        </Container>
    );
}

