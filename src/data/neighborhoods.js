import nycImg from '../assets/images/neighborhood_nyc.jpg';
import houstonImg from '../assets/images/neighborhood_houston.jpg';
import sandiegoImg from '../assets/images/neighborhood_sandiego.jpg';
import phillyImg from '../assets/images/neighborhood_philly.jpg';
import sfImg from '../assets/images/neighborhood_sf.jpg';

export const neighborhoodsData = [
  {
    id: 1,
    count: '216',
    location: 'New York City, NY',
    image: nycImg,
    row: 1,
    colSpan: 'small',
  },
  {
    id: 2,
    count: '141',
    location: 'Houston, TX',
    image: houstonImg,
    row: 1,
    colSpan: 'small',
  },
  {
    id: 3,
    count: '212',
    location: 'San Diego, CA',
    image: sandiegoImg,
    row: 1,
    colSpan: 'medium',
  },
  {
    id: 4,
    count: '183',
    location: 'Philadelphia, PA',
    image: phillyImg,
    row: 2,
    colSpan: 'medium',
  },
  {
    id: 5,
    count: '112',
    location: 'San Francisco, CA',
    image: sfImg,
    row: 2,
    colSpan: 'large',
  },
];
