
import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import WaveBorder from '../material-ui/wave.js';

const useStyles = makeStyles((theme) => ({
  waveBorder: {
    paddingTop: theme.spacing(4)
  }
}));


const Header = (props) => {
  const classes = useStyles();

  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">FishBits</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            {/* <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li> */}
            <li className="nav-item">
              <Link to="/create" className="nav-link">New Event</Link>
            </li>
          </ul>
        </div>
      </nav>
      <WaveBorder
        upperColor="#333a3f"
        lowerColor="#FFFFFF"
        className={classes.waveBorder}
        animationNegativeDelay={3}
      />
    </div>
  );
}


export default Header;