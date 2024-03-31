import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Card, Button, Form,  Row, Col } from 'react-bootstrap';

function Jobs({ user }) {
    const navigate = useNavigate();
    const userLoggedIn = sessionStorage.getItem('user');

    if (!userLoggedIn) {
        navigate('/login', { replace: true });
        return null; 
    }
    const jobPosts = [
        {
          id: 1,
          title: 'Full Stack Developer',
          description: 'Join our dynamic team to work on cutting-edge technologies. Develop and maintain sophisticated web applications for our diverse client base.',
          lastUpdated: 'Last updated 2 days ago',
          applyLink: 'https://jobs.careers.microsoft.com/global/en/job/1560310/Software-Engineer-II---Full-Stack',
        },
        {
          id: 2,
          title: 'Digital Marketing Specialist',
          description: 'Elevate our digital marketing strategies to promote our innovative products. Proficiency in SEO, SEM, and social media marketing is highly valued.',
          lastUpdated: 'Last updated 1 day ago',
          applyLink: 'https://boards.greenhouse.io/smartbear/jobs/5927980003?utm_source=ziprecruiter',
        },
        {
          id: 3,
          title: 'UX/UI Designer',
          description: 'Shape engaging user experiences and create visually captivating designs. Work alongside cross-functional teams to turn ideas into reality.',
          lastUpdated: 'Last updated 4 hours ago',
          applyLink: 'https://jobs.smartrecruiters.com/Jobsbridge1/84271085-ui-ux-designer-or-web-designer?utm_source=ziprecruiter',
        },
        {
          id: 4,
          title: 'Data Scientist',
          description: 'Leverage advanced analytics and machine learning to uncover insights from vast data sets. Proficiency with Python and R is a must.',
          lastUpdated: 'Last updated 3 days ago',
          applyLink: 'https://jobs.bilh.org/job/charlestown/data-scientist/169/62209475440?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic',
        },
        {
          id: 5,
          title: 'Customer Support Representative',
          description: 'Deliver unparalleled customer service and support. Exceptional communication skills and a knack for solving problems are key.',
          lastUpdated: 'Last updated 6 hours ago',
          applyLink: 'https://www.tesla.com/careers/search/job/214798?source=LinkedIn',
        },
        {
          id: 6,
          title: 'Project Manager',
          description: 'Guide and coordinate project teams...',
          lastUpdated: 'Last updated 1 hour ago',
          applyLink: 'https://www.gauzy.com/gauzy-careers/co/miami-florida/3C.042/junior-project-manager/all/?src=LinkedIn',
        },
    ];

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState(jobPosts);

    const handleSearch = () => {
        const filteredResults = jobPosts.filter(job =>
            job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(filteredResults);
    };
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2>Job Listings</h2>
            <Row className="justify-content-center">
                <Col md={8} className="d-flex align-items-center">
                    <Form.Control 
                        type="text" 
                        placeholder="Enter keyword to search" 
                        value={searchTerm} 
                        onChange={e => setSearchTerm(e.target.value)} 
                        style={{ width: '250px', marginRight: '10px' }} 
                    />
                    <Button variant="primary" onClick={handleSearch}>Search</Button>
                </Col>
            </Row>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
                {searchResults.map(job => (
                    <div key={job.id} style={{ width: 'calc(33.33% - 20px)', margin: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
                        <Card style={{ height: '100%' }}>
                            <Card.Body>
                                <Card.Title>{job.title}</Card.Title>
                                <Card.Text>{job.description}</Card.Text>
                                <Card.Text>{job.lastUpdated}</Card.Text>
                                <Button variant="primary" href={job.applyLink} target="_blank">Apply Now</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Jobs;
