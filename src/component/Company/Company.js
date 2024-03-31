import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Company() {
    const navigate = useNavigate();
    const userLoggedIn = sessionStorage.getItem('user');

    if (!userLoggedIn) {
        navigate('/login', { replace: true });
        return null; 
    }
    const [companyData, setCompanyData] = useState([]);

    useEffect(() => {
        fetchCompanyData();
    }, []);

    const fetchCompanyData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/company/getAll');
            setCompanyData(response.data);
        } catch (error) {
            console.error('Error fetching company data:', error);
        }
    };

    return (
        <Container>
            <h4 className="mt-5">Companies that post on our website</h4>
            <Row className="mt-3">
                {companyData.map((company, index) => (
                    <Col key={index} sm={4} className="mb-3">
                        <Card>
                            <Card.Img 
                                variant="top" 
                                src={`http://localhost:8080/${company.companyImage}`} 
                                style={{ height: '200px', objectFit: 'cover' }}
                            />
                            <Card.Body>
                                <Card.Title>{company.companyName}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Company;
