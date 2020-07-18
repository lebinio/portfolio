import PropTypes from 'prop-types';
import React from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';

import * as Styled from './style';
import { themes } from '../../utils/themes';

function Portfolio({ theme }) {
  const portfolios = [
    {
      key: 1,
      category: 'eCommerce Website',
      projectName: 'Project Name',
      image: 'images/portfolio/fullsize/1.jpg',
      thumbnail: 'images/portfolio/thumbnails/1.jpg',
    },
    {
      key: 2,
      category: 'Mobile Application',
      projectName: 'Project Name',
      image: 'images/portfolio/fullsize/2.jpg',
      thumbnail: 'images/portfolio/thumbnails/2.jpg',
    },
    {
      key: 3,
      category: 'Administrator Tools',
      projectName: 'Project Name',
      image: 'images/portfolio/fullsize/3.jpg',
      thumbnail: 'images/portfolio/thumbnails/3.jpg',
    },
    {
      key: 4,
      category: 'Automation Tools',
      projectName: 'Project Name',
      image: 'images/portfolio/fullsize/4.jpg',
      thumbnail: 'images/portfolio/thumbnails/4.jpg',
    },
    {
      key: 5,
      category: 'Server Configuration',
      projectName: 'Project Name',
      image: 'images/portfolio/fullsize/5.jpg',
      thumbnail: 'images/portfolio/thumbnails/5.jpg',
    },
    {
      key: 6,
      category: 'Training',
      projectName: 'Project Name',
      image: 'images/portfolio/fullsize/6.jpg',
      thumbnail: 'images/portfolio/thumbnails/6.jpg',
    },
  ];

  return (
    <div id="portfolio">
      <Container fluid className="p-0">
        <Styled.RowNoGutters>
          {portfolios.map((portfolio) => (
            <Styled.ColNoGutters lg={4} sm={6} key={portfolio.key}>
              <Styled.PortfolioBox href={portfolio.image}>
                <img className="img-fluid" src={portfolio.thumbnail} alt={portfolio.projectName} />
                <Styled.PortfolioCaption theme={theme} variant="primary">
                  <Styled.ProjectCategory theme={theme} variant="primary">
                    {portfolio.category}
                  </Styled.ProjectCategory>
                  <Styled.ProjectName theme={theme} variant="primary">
                    {portfolio.projectName}
                  </Styled.ProjectName>
                </Styled.PortfolioCaption>
              </Styled.PortfolioBox>
            </Styled.ColNoGutters>
          ))}
        </Styled.RowNoGutters>
      </Container>
    </div>
  );
}

Portfolio.propTypes = {
  theme: PropTypes.oneOf(Object.keys(themes)),
};

Portfolio.defaultProps = {
  theme: 'metal',
};

const mapStateToProps = (state) => ({
  theme: state.config.theme,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
