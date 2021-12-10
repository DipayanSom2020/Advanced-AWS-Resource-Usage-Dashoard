import React, { Component } from 'react';
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Progress,
  Button
} from 'reactstrap';
// import { Switch } from '../../vibe';
import { Auth } from 'aws-amplify';
import { Doughnut, Line } from 'react-chartjs-2';
import { Badge, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
// import * as AmazonCognitoIdentity from "amazon-cognito-identity-js";


export default class AnalyticsPage extends Component {
  constructor(props) {
    super(props);
    

    this.state = {
      // facebook: true,
      // twitter: false,
      // total_jobs: 120,
      // dpu: 480,
      filter1: "Project",
      jobname : "All",
      stats: [],
      jwtT:"no-Token"
      

    };
    this.option1 = this.option1.bind(this);
    this.option2 = this.option2.bind(this);
    this.option3 = this.option3.bind(this);
    this.option4 = this.option4.bind(this);
    this.search=this.search.bind(this);
    this.getJwtToken=this.getJwtToken.bind(this)

  }

  
  
  async fetchitemFid()
  {
    await this.getJwtToken()
    console.log(url)
    var url="https://g06vvuj2mk.execute-api.us-east-1.amazonaws.com/dev?user=ProjectA-"+this.state.jobname
    console.log(url)
    const response = await fetch(url, {
      headers: {
        Authorization: this.state.jwtT
      }
    });
    const body = await response.json();
    // console.log(body.total_jobs)
    this.setState({stats :JSON.parse(body)})
    console.log(this.state.stats)
    console.log(this.state.stats.dpu)
  }
  option1(){
    this.setState({filter1 : "ProjectA"})
    // this.setState({stats : [{"dpu" : "updating.."}]})
    this.fetchitemFid()
    
    
  }
  getDPU()
  {
    return "100"
  }

  async fetchitemHel()
  {
    await this.getJwtToken()
    // console.log(url)
    var url="https://g06vvuj2mk.execute-api.us-east-1.amazonaws.com/dev?user=ProjectB-"+this.state.jobname
    console.log(url)
    const response = await fetch(url, {
      headers: {
        Authorization: this.state.jwtT
      }
    });
    const body = await response.json();
    // console.log(body.total_jobs)
    this.setState({stats :JSON.parse(body)})
    console.log(this.state.stats)
    console.log(this.state.stats.dpu)
  }
  option2(){
    this.setState({filter1 : "ProjectB"})
    // this.setState({stats : [{"dpu" : "updating.."}]})
    this.fetchitemHel()
    
    
  }

  async fetchitemWel()
  {
    // console.log(url)
    await this.getJwtToken()
    var url="https://g06vvuj2mk.execute-api.us-east-1.amazonaws.com/dev?user=ProjectC-"+this.state.jobname
    console.log(url)
    const response = await fetch(url, {
      headers: {
        Authorization: this.state.jwtT
      }
    });
    const body = await response.json();
    // console.log(body.total_jobs)
    this.setState({stats :JSON.parse(body)})
    console.log(this.state.stats)
    // console.log(this.state.stats.dpu)
  }
  option3(){
    this.setState({filter1 : "ProjectC"})
    // this.setState({stats : [{"dpu" : "updating.."}]})
    this.fetchitemWel()
    
    
  }
  async fetchitemAll()
  {
    // console.log(url)
    await this.getJwtToken()
    var url="https://g06vvuj2mk.execute-api.us-east-1.amazonaws.com/dev?user=Project-"+this.state.jobname
    console.log(url)
    console.log('in here')
    const response =  await fetch(url, {
      headers: {
        Authorization: this.state.jwtT
      }
    });
    const body = await response.json();
    // console.log(body.total_jobs)
    this.setState({stats :JSON.parse(body)})
    console.log(this.state.stats)
    console.log(this.state.stats.dpu)
  }
  option4(){
    this.setState({filter1 : "Project"})
    // this.setState({stats : [{"dpu" : "updating.."}]})
    this.fetchitemAll()
    
    
  }
  async search({target}){
    await this.getJwtToken()
    console.log(target.name, target.value)
    this.setState({jobname : target.value})
    var url="https://g06vvuj2mk.execute-api.us-east-1.amazonaws.com/dev?user="+this.state.filter1+"-"+target.value
    console.log("this--",url)
    const response = await fetch(url, {
      headers: {
        Authorization: this.state.jwtT
      }
    });
    const body = await response.json();
    // console.log(body.total_jobs)
    //  - 
    this.setState({stats :JSON.parse(body)})

  }
  

  async getJwtToken()  {
    Auth.currentSession()
    .then(data => console.log(data))
    .catch(err => console.log(err)); 

    // let jwt= Auth.currentSession();
    console.log('jwt token check 1 ')
    // console.log(jwt)
    // console.log(jwt.idToken)
    // Auth.currentSession().then(res=>{
    //   let accessToken = res.getAccessToken()
    //   let jwt = accessToken.getJwtToken()
    //   //You can print them to see the full objects
    //   console.log(`myAccessToken: ${JSON.stringify(accessToken)}`)
    //   console.log(`myJwt: ${jwt}`)
    // })

    // Auth.currentSession().then(res=>{
    //   var accessToken = res.getIdToken()
    //   var jwt = accessToken.getJwtToken()
    //   //You can print them to see the full objects
    //   console.log(`myIdToken: ${JSON.stringify(accessToken)}`)
    //   console.log(`myJwt: ${jwt}`)
    //   this.setState({jwtT : jwt})

    // })

    let creds = await Auth.currentSession();
    let idToken=creds.getIdToken()
    let jwtToken_d=idToken.getJwtToken()
    this.setState({jwtT : jwtToken_d})
  }

  async componentDidMount(){

    await this.getJwtToken()
    
    // .then(data => this.setState({jwt :data}))
    // .catch(err => console.log(err)); 
    // console.log(this.state.jwt)

    // const poolData = {UserPoolId: "us-east-1_HRoKJsOI6", ClientId: "517mmso7rcgqiugctod7hkti3"};
    // const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

    // // React
    // const cognitoUser = userPool.getCurrentUser();
    //   if (cognitoUser != null) {
    //     cognitoUser.getSession((err, session) => {
    //       if (err) {
    //         console.log(err);
    //       } else if (!session.isValid()) {
    //         console.log("Invalid session.");
    //       } else {
    //         console.log("IdToken: " + session.getIdToken().getJwtToken());
    //       }
    //     });
    //   } else {
    //     console.log("User not found.");
    //   }


    console.log('test')

    console.log(this.state.jwtT)

    var url="https://g06vvuj2mk.execute-api.us-east-1.amazonaws.com/dev?user=" + this.state.filter1+"-"+this.state.jobname
    const response = await fetch(url, {
      headers: {
        Authorization: this.state.jwtT
      }
    });
    console.log('done')
    
    const body = await response.json();
    // console.log(body.total_jobs)
    this.setState({stats :JSON.parse(body)})
    console.log(this.state.stats)
    console.log(this.state.stats.dpu)
  }


  async componentDidUpdate() {
    
  }
  render() {
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

    // if(this.state.stats.fail2 == undefined){
    //   labels: [this.state.stats.fail1, this.state.stats.fail2, this.state.stats.fail3]

    // }

    var donutData = { 

      
      labels: [this.state.stats.fail1, this.state.stats.fail2, this.state.stats.fail3],
      datasets: [
        {
          data: [this.state.stats.fail1_n, this.state.stats.fail2_n, this.state.stats.fail3_n],
          backgroundColor: [
            chartColors.red,
            chartColors.purple,
            chartColors.orange
          ],
          hoverBackgroundColor: [
            chartColors.primaryShade4,
            chartColors.primaryShade4,
            chartColors.primaryShade4
          ]
        }
      ]
    };
    var line = {
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Avgerage DPU Usage per Job',
            data: [this.state.stats.dpu_jan, this.state.stats.dpu_feb
              , this.state.stats.dpu_mar, this.state.stats.dpu_apr,
              this.state.stats.dpu_may, this.state.stats.dpu_jun],
            borderColor: 'transparent',
            backgroundColor: chartColors.primaryTransparent,
            pointBackgroundColor: 'rgba(0,0,0,0)',
            pointBorderColor: 'rgba(0,0,0,0)',
            borderWidth: 4
          }
        ]
      },
      options: {
        scales: {
          xAxes: [
            {
              display: true
            }
          ],
          yAxes: [
            {
              display: true
            }
          ]
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: true
        }
      }
    };
    
    return (

      <div>
        <div>
        <React.Fragment>   
        {/* <Button type="submit" className="d-none d-sm-block" className="pull-right" onClick={handleClick} >
            <i className="fa fa-search" />
        </Button> */}
        <UncontrolledDropdown className="pull-right" >
            <DropdownToggle className="pull-right">
              {/* <Avatar size="small"  initials="Guest" /> */}
          {this.state.filter1}
        </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem onClick={this.option1}>ProjectA</DropdownItem>
              <DropdownItem onClick={this.option2}> ProjectB</DropdownItem>
              <DropdownItem onClick={this.option3} >ProjectC</DropdownItem>
              <DropdownItem onClick={this.option4} >Reset</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          
          <form className="form-inline" className="pull-right">
            <input name="searchBox" onChange={this.search} className="form-control mr-sm-1" type="search" placeholder="Search" aria-label="Search" />
          </form>
          </React.Fragment> 
          
          



        </div>
        <div className="m-b">
          <h2>AWS Glue Customized Dashboard!</h2>
          <p className="text-muted">
            Here's what's going on Glue today.
          </p>
        </div>

        <Row>
          <Col md={4} xs={12}>
            <Card>
              <CardHeader>
                Total Jobs{' '}
                {/* <Button size="sm" className="pull-right">
                  Refresh
                </Button> */}
              </CardHeader>
              <CardBody>
                <h2 className="m-b-20 inline-block">
                  <span>{this.state.stats.total_jobs}</span>
                </h2>{' '}
                <i
                  className="fa fa-caret-down text-danger"
                  aria-hidden="true"
                />
                <Progress value={this.state.stats.total_jobs * 10} animated color="info" color="info" />
              </CardBody>
            </Card>
          </Col>
          <Col md={4} xs={12}>
            <Card>
              <CardHeader>
                Total DPU usage{' '}
                {/* <Button size="sm" className="pull-right">
                  Refresh
                </Button> */}
              </CardHeader>
              <CardBody>
                <h2 className="m-b-20 inline-block">
                  <span>{this.state.stats.dpu}</span>
                </h2>{' '}
                <i
                  className="fa fa-caret-down text-danger"
                  aria-hidden="true"
                />
                <Progress value={this.state.stats.dpu * 1} animated color="info" color="info" />
              </CardBody>
            </Card>
          </Col>
          <Col md={4} xs={12}>
            <Card>
              <CardHeader>
                Averge Runtime{' '}
                {/* <Button size="sm" className="pull-right">
                  Refresh
                </Button> */}
              </CardHeader>
              <CardBody>
                <h2 className="m-b-20 inline-block">
                  <span>{this.state.stats.runtime} mins</span>
                </h2>{' '}
                <i className="fa fa-caret-up text-danger" aria-hidden="true" />
                <Progress value={this.state.stats.runtime * 1} animated color="warning" color="success" />
              </CardBody>
            </Card>
          </Col>
          <Col md={4} xs={12}>
            <Card>
              <CardHeader>
                Job failures{' '}
                {/* <Button size="sm" className="pull-right">
                  Refresh
                </Button> */}
              </CardHeader>
              <CardBody>
                <h2 className="inline-block">
                  <span>{this.state.stats.fails}%</span>
                </h2>
                <Progress value={this.state.stats.fails * 1} animated color="warning" color="danger" />
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md={8} sm={12}>
            <Card>
              <CardHeader>DPU Usage</CardHeader>
              <CardBody>
                <div className="full-bleed">
                  <Line
                    data={line.data}
                    width={2068}
                    height={846}
                    legend={{ display: true }}
                    options={line.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md={4} sm={12}>
            <Card>
              <CardHeader>Job Fails</CardHeader>
              <CardBody>
                <Doughnut
                  data={donutData}
                  width={908}
                  height={768}
                  legend={{ display: true }}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md={8} sm={12}>
            <Card>
              <CardHeader>Miscellaneous</CardHeader>
              <CardBody>
                <Row className="m-b-md">
                  <Col xs={4}>
                    <h5>You'r ip usage is</h5>
                    <div className="h2">4.30%</div>
                    <small className="text-muted">more than last week</small>
                  </Col>
                  <Col xs={4}>
                    <h5>Account Quota</h5>
                    <div className="h2">1000</div>
                    <small className="text-muted">concurrent Job runs </small>
                  </Col>
                  {/* <Col xs={4}>
                    <h5>Pruchased</h5>
                    <div className="h2">10</div>
                    <small className="text-muted">10 Customers</small>
                  </Col> */}
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col md={4} xs={12}>
            <Card>
              <CardHeader></CardHeader>
              <CardBody>
                {/* <Switch
                  enabled={this.state.facebook}
                  toggle={() => {
                    this.setState(prevState => ({ facebook: !prevState.facebook }));
                  }}
                />
                <span className="text-facebook pull-right">
                  <i className="fa fa-facebook" /> Facebook
                </span>
                <hr />
                <Switch
                  enabled={this.state.twitter}
                  toggle={() => {
                    this.setState(prevState => ({ twitter: !prevState.twitter }));
                  }}
                />
                <span className="text-twitter pull-right">
                  <i className="fa fa-twitter" /> Twitter
                </span> */}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
