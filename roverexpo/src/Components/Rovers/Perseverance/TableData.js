import React, { useEffect } from "react";
import { connect } from "react-redux";
import Styled from 'styled-components'
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import { perseveranceAction } from "../../../Redux-Store/Actions";

// Table Styling
const MainStyle = Styled.div`
  table {
    width: 100%;
    table-layout: fixed;
  }
  .tbl-content {
    height: 12%;
    overflow-x: auto;
    margin-top: 0px;
    border: 1px solid #F0583A;
    border-top: none;
    border-bottom: none;
    background-color: #2E2F32;
    table {
        overflow-y: scroll;
      }
  }
  td {
    padding: 10px;
    text-align: left;
    vertical-align: middle;
    font-weight: 400;
    font-size: 12px;
    color: #FFFFFF;

    text-transform: uppercase;
  }
  span {
    color: #F0583A;
    text-transform: uppercase;
  }
  th {
    padding: 20px 15px;
    text-align: left;
    font-weight: 500;
    font-size: 12px;
    color: #FFFFFF;
    text-transform: uppercase;
  }
  
  section{
    margin: 5%;
    height: 10%;
  }
  .tdTable {
    overflow-y: scroll;
  }
  h4 {
    font-size: 22px;
    color: #444444;
    text-align: center;
  }
  li {
    padding: 6px;
    color: #4444444;
    list-style-type: none;
  }
  h1 {
    font-size: 30px;
    color: #444444;
    text-transform: uppercase;
    font-weight: 300;
    text-align: center;
    margin-bottom: 3%;
  }
  a {
    text-decoration: none;
    color: #F0583A;
    font-size: 20px;
    font-weight: 200;
  }
  p {
    text-align: center;
  }
`;
const HeaderStyle = Styled.div`

  table {
    width: 100%;
    table-layout: fixed;
  }
  background-color: #F0583A;
`;


const TableData = (props) => {
  useEffect(() => {
    props.perseveranceAction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MainStyle>
      {props.isLoading ? 
        <Backdrop open={true}>
            <CircularProgress color='primary' />
        </Backdrop>
        :
        null}
      <section>
    <div className='Container'>
      <hr></hr>
        <h1>Perseverance Rover Data</h1>
        <p><a href='https://en.wikipedia.org/wiki/Perseverance_(rover)' target='_blank' rel='noreferrer'>Rover Wiki</a></p>
        <p><a href='https://api.nasa.gov/' target='_blank' rel='noreferrer'>API</a></p>
        <div style={{display: 'flex', width: '100%', marginBottom: '4%', marginTop: '4%'}}>
        <div style={{width: '50%', borderRight: '1px solid black'}}>
      <h4>Overview</h4>
      <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '95%'}}>
      <ul style={{}}>
      <li> Welcome to the Perseverance Rover imagery database. The tables below give data about this rover and automatically sort that data based on your filter choice. Your filters are set to two days prior of the current date by default. This is due to the limited database requests and may be changed eventually.</li>
      </ul>
      </div>
      </div>
      <div style={{width: '50%'}}>
      <h4>Table Header Overview</h4>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '75%'}}>
      <ul>
      <li><span>ID</span> - Location of the photo in NASA's database.</li>
      <li>
        <span>Camera</span> - Which camera on the rover was used to capture the photo.
      </li>
      <li>
        <span>Status</span> - Is the rover still scanning mars? This will tell you.
      </li>
      <li>
        <span>Earth Date</span> - When the photo was taken in earth days.
      </li>
      <li>
        <span>Sol</span> - How many martian days the rover has been active.
      </li>
      <li>
        <span>Image</span> - Link to the image that was taken.
      </li>
      </ul>
      </div>
      </div>
      </div>
      <hr></hr>
      <br></br>
      <br></br>
      <br></br>
      
      <HeaderStyle>
      <div class="tbl-header">
          <table cellpadding='0' cellspacing='0' border='0'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Camera</th>
                <th>Status</th>
                <th>Earth Date</th>
                <th>Sol (24 hrs, 39 min, 35 sec)</th>
                <th>Image</th>
              </tr>
            </thead>
          </table>
      </div>
      </HeaderStyle>
      {props.photoData.map((item) => (
        <div class='tbl-content'>
          <table cellpadding='0' cellspacing='0' border='0'>
            <tbody>
              <tr>
                <td>
                  {item.id}
                </td>
                <td>
                  {item.camera.full_name}
                </td>
                <td>
                  <span>{item.rover.status}</span>
                </td>
                <td>
                  {item.earth_date}
                </td>
                <td>
                  {item.sol}
                </td>
                <td>
                  <a href={item.img_src} rel="noreferrer" target="_blank" style={{textTransform: 'initial', fontSize: '1rem'}} >Photo</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
    </section>
    </MainStyle>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    photoData: state.photoData,
  };
};

export default connect(mapStateToProps, { perseveranceAction })(TableData);
