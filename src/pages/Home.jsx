import Nav from '../components/nav';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div id="page">
      <Nav></Nav>
      <div id="home">
        <h1 id="h1">
          Zach <span style={{ color: '#427fbf' }}>Hamilton</span>
        </h1>
        <h1
          style={{
            color: '#f7fafd',
            textAlign: 'center',
            marginTop: 0,
          }}
        >
          Software Engineer
        </h1>
        <Button variant="contained" onClick={() => navigate('/contact')}>
          Get in Touch
        </Button>
      </div>
    </div>
  );
};

export default Home;
