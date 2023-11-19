import Nav from '../components/Nav';
import { useTheme } from '@mui/material/styles';
import EastIcon from '@mui/icons-material/East';

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
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                color: theme.palette.accent.main,
                fontSize: '1.5em',
              }}
            >
              Languages&nbsp;
            </span>
            <p
              style={{
                color: 'white',
              }}
            >
              &nbsp; JavaScript | TypeScript | SQL | Java
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                color: theme.palette.accent.main,
                fontSize: '1.5em',
              }}
            >
              Technologies&nbsp;
            </span>
            <p
              style={{
                color: 'white',
              }}
            >
              &nbsp; React | Node | Express | AWS SDK | PostgreSQL | MongoDB |
              Redux | Git | Jest | HTML | CSS | JWT | Heroku
            </p>
          </div>
        </div>
        <div id="features">
          <div className="feature">
            <div className="featureDiscription">
              <h2
                style={{ color: theme.palette.accent.main, fontSize: '2.5em' }}
              >
                Lambda Peeler
              </h2>
              <p>
                Lambda Peeler is an open-source, web-based dashboard tailored
                for AWS Lambda developers. It is meticulously designed to bridge
                the gap between managing Lambda functions and layers,
                simplifying AWS cloud operations. It enhances developing
                efficiency by allowing engineers to test their layer and
                function compatibilities in bulk. Currently, engineers can only
                test one-by-one or set up a very robust CI/CD pipeline through
                AWS. Our product aims to bridge the gap and give engineers an
                easy-to-use alternative.
              </p>
              <a
                href="https://lambda-peeler.onrender.com/"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '.1em',
                  color: theme.palette.accent.main,
                }}
              >
                Website <EastIcon color={theme.palette.accent.main} />
              </a>
            </div>
            <img id="gif" src="../src/assets/connecting.gif"></img>
          </div>
          <div className="feature">
            <img id="gif" src="../src/assets/library.png"></img>
            <div className="featureDiscription">
              <h2
                style={{ color: theme.palette.accent.main, fontSize: '2.5em' }}
              >
                Shelved
              </h2>
              <p>
                Shevled is a digital library app for avid readers, audiobook
                listeners, and e-book enjoyers. It can be hard to keep track of
                all the books you have read/listened to across multiple
                platforms. Shevled allows you to maintain a library of ALL of
                the books you have enjoyed. It is seamlessly integrated with the
                GoogleBooks API that allows users to view more information about
                each book, such as author, genre, and number of pages.
              </p>
              <a
                href="https://github.com/ZachMHamilton/Library-Project"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '.1em',
                  color: theme.palette.accent.main,
                }}
              >
                Docs <EastIcon color={theme.palette.accent.main} />
              </a>
            </div>
          </div>
          <div className="feature">
            <div className="featureDiscription">
              <h2
                style={{ color: theme.palette.accent.main, fontSize: '2.5em' }}
              >
                Algo Archive
              </h2>
              <p>
                AlgoArchive is a web-based dashboard that allows users to track
                their algorithm practice in preparation for technical
                interviews. Users can save their algo problems with the question
                and their solution, as well as any notes they would like to
                save, such as difficulty, different strategies used, and
              </p>
              <a
                href="https://github.com/danger-noodle-42/algo-archive"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '.1em',
                  color: theme.palette.accent.main,
                }}
              >
                Docs <EastIcon color={theme.palette.accent.main} />
              </a>
            </div>
            <img id="gif" src="../src/assets/algo.png"></img>
          </div>
        </div>
        <p style={{ textAlign: 'center' }}>
          View my full resume{' '}
          <a
            href="https://drive.google.com/file/d/19ZmLDX3Qo5mCAFUohqiXF2_jg_FuQNiv/view?usp=sharing"
            style={{
              color: theme.palette.accent.main,
            }}
          >
            here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Portfolio;
