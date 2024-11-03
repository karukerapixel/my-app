import React from 'react';
import { Link } from 'react-router-dom';
import { ServicesList, ServicesListItem, ServicesWrapper } from './style';
import { services } from '../../data/services';

const Services: React.FC = () => {
  return (
    <ServicesWrapper>
      <ServicesList>
        {services.map((service, index) => (
          <ServicesListItem style={{ backgroundImage: `url(${service.imgUrl})`}} key={index}>
            <Link to="#">
              <h2>{service.title}</h2>
            </Link>
          </ServicesListItem>
        ))}
      </ServicesList>
    </ServicesWrapper>
  );
};

export default Services;
