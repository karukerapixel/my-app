import React from 'react';
import { Link } from 'react-router-dom';
import { ServicesList, ServicesListItem, ServicesWrapper } from './style';
import services from '../../data/services.json'

const Services: React.FC = () => {
  return (
    <ServicesWrapper>
      <ServicesList>
        {services.map((service) => (
          <ServicesListItem style={{ backgroundImage: `url(${service.imgUrl})`}} key={service.id}>
            <Link to={`/services/${service.id}`}>
              <h2>{service.title}</h2>
            </Link>
          </ServicesListItem>
        ))}
      </ServicesList>
    </ServicesWrapper>
  );
};

export default Services;
