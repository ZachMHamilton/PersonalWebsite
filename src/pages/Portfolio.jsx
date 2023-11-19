import Nav from '../components/nav';
import { useTheme } from '@mui/material/styles';

const Portfolio = () => {
  const theme = useTheme();
  return (
    <div>
      <Nav></Nav>
      <div id="portfolio">
        <h1
          style={{
            color: 'white',
            borderBottom: `3px solid ${theme.palette.accent.main}`,
          }}
        >
          Portfolio
        </h1>
        <div id="features">
          <h1>Features</h1>
          <div className="feature">
            <div className="featureDiscription">
              <h2 style={{ color: theme.palette.accent.main }}>
                Lambda Peeler
              </h2>
              <p>
                Lambda Peeler is a web-based dashboard tailored for AWS Lambda
                developers. It is meticulously designed to bridge the gap
                between managing Lambda functions and layers, simplifying AWS
                cloud operations. It enhances developing efficiency by allowing
                engineers to test their layer and function compatibilities in
                bulk. Currently, engineers can only test one-by-one or set up a
                very robust CI/CD pipeline through AWS. Our product aims to
                bridge the gap and give engineers an easy-to-use alternative.
              </p>
            </div>
            {/* <img id="gif" src="/assets/connecting.gif"></img> */}
          </div>
          <div className="feature">
            <div className="featureDiscription">
              <h2 style={{ color: theme.palette.accent.main }}>Shelved</h2>
              <p>
                Shevled is a digital library app for avid readers, audiobook
                listeners, and e-book enjoyers. It can be hard to keep track of
                all the books you have read/listened to across multiple
                platforms. Shevled allows you to maintain a library of ALL of
                the books you have enjoyed. It is seamlessly integrated with the
                GoogleBooks API that allows users to view more information about
                each book, such as author, genre, and number of pages.
              </p>
            </div>
            {/* <img id="gif" src="/assets/failing.gif"></img> */}
          </div>
          <div className="feature">
            <div className="featureDiscription">
              <h2 style={{ color: theme.palette.accent.main }}>Algo Archive</h2>
              <p>
                AlgoArchive is a web-based dashboard that allows users to track
                their algorithm practice in preparation for technical
                interviews. Users can save their algo problems with the question
                and their solution, as well as any notes they would like to
                save, such as difficulty, different strategies used, and
              </p>
            </div>
            {/* <img id="gif" src="/assets/removing.gif"></img> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
