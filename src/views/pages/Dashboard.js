import React, { Component } from 'react';
import reactFeature from '../../assets/images/react-feature.svg';
import sassFeature from '../../assets/images/sass-feature.svg';
import bootstrapFeature from '../../assets/images/bootstrap-feature.svg';
import responsiveFeature from '../../assets/images/responsive-feature.svg';
import { Card, CardBody, Row, Col ,CardHeader,} from 'reactstrap';
import { Doughnut, Line ,HorizontalBar} from 'react-chartjs-2';

class Dashboard extends Component {
  render() {
    const heroStyles = {
      padding: '50px 0 70px'
    };


    const chartColors = {
      red: 'rgb(233, 30, 99)',
      danger: 'rgb(233, 30, 99)',
      dangerTransparent: 'rgba(233, 30, 99, .8)',
      orange: 'rgb(255, 159, 64)',
      yellow: 'rgb(255, 180, 0)',
      green: 'rgb(34, 182, 110)',
      blue: 'rgb(68, 159, 238)',
      primary: 'rgb(68, 159, 238)',
      primaryTransparent: 'rgba(68, 159, 238, .8)',
      purple: 'rgb(153, 102, 255)',
      grey: 'rgb(201, 203, 207)',

      primaryShade1: 'rgb(68, 159, 238)',
      primaryShade2: 'rgb(23, 139, 234)',
      primaryShade3: 'rgb(14, 117, 202)',
      primaryShade4: 'rgb(9, 85, 148)',
      primaryShade5: 'rgb(12, 70, 117)'
    };

    var donutData = { 

      
      labels: ["Amplify","CodeCommit","Lambda", "API Gateway"],
      datasets: [
        {
          data: [30, 67, 103,67],
          backgroundColor: [
            chartColors.red,
            chartColors.purple,
            chartColors.orange,
            chartColors.green

          ],
          hoverBackgroundColor: [
            chartColors.primaryShade4,
            chartColors.primaryShade4,
            chartColors.primaryShade4,
            chartColors.primaryShade4

          ]
        }
      ],
      options: {
        scales: {
          xAxes: [
            {
              display: false
            }
          ],
          yAxes: [
            {
              display: false
            }
          ]
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: false
        }
      }
    };

    const state = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Total cost in dollars',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
  };
  

    return (
      <div>
        <Row>
          <Col md={12}>
            <div className="home-hero" style={heroStyles}>
              <h1>Welcome to Cloud'O'Meter.</h1>
              <p className="text-muted">
                Discover this UI dashboard connected with your AWS account that will help to 
                analyze 
                your next cloud projects.
              </p>
            </div>
          </Col>
        </Row>
        <Row>          
          <Col md={6} md={6}>
            <Card>
              <CardHeader>Service Usage </CardHeader>
              <CardBody>
                <Doughnut
                  data={donutData}
                  width={908}
                  height={768}
                  legend={{ display: true }}
                  options={donutData.options}
                />
              </CardBody>
            </Card>
          </Col>
        {/* </Row>
        <Row>           */}
          <Col md={6} md={6}>
            <Card>
              <CardHeader>Cost</CardHeader>
              <CardBody>
                <HorizontalBar 
                  data={state }
                  width={908}
                  height={768}
                  legend={{ display: true }}
                  // options={donutData.options}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
        
      </div>
    );
  }
}

export default Dashboard;
