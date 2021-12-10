// import React, { Component } from 'react';
// import { Container, Card, CardBody } from 'reactstrap';
// import AppleLogo from '../../assets/images/apple.png';
// import MSLogo from '../../assets/images/microsoft.png';

// export default class Invoice extends Component {
//   render() {
//     return (
//       <Container>
//         <Card>
//           <CardBody>
//             <div className="m-b">
//               <div className="pull-left">
//                 <img width="50" alt="" className="invoice-logo" src={AppleLogo} />
//                 <address className="m-t-10">
//                   Apple Enterprise Sales
//                   <br />
//                   (123) 411-4321.
//                   <br />
//                 </address>
//               </div>
//               <div className="pull-right sm-m-t-20">
//                 <h2 className="font-montserrat all-caps hint-text">Invoice</h2>
//               </div>
//               <div className="clearfix" />
//             </div>
//             <div className="p-a">
//               <div className="row">
//                 <div className="col-md-9">
//                   <p className="small no-margin">Invoice to</p>
//                   <h5>James May</h5>
//                   <address>
//                     {' '}
//                     <strong>Vibe Incoperated.</strong>
//                     <br />
//                     vibe.inc
//                     <br />
//                     1600 Amphitheatre Pkwy, Mountain View,
//                     <br />
//                     CA 94043, United States
//                   </address>
//                 </div>
//                 <div className="col-md-3">
//                   <br />
//                   <div>
//                     <div className="pull-left bold all-caps">Invoice No :</div>
//                     <div className="pull-right">0023</div>
//                     <div className="clearfix" />
//                   </div>
//                   <div>
//                     <div className="pull-left font-montserrat bold all-caps">Invoice date :</div>
//                     <div className="pull-right">02/09/19</div>
//                     <div className="clearfix" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="table-responsive m-b">
//               <table className="table m-t-50">
//                 <thead>
//                   <tr>
//                     <th className="">Task Description</th>
//                     <th className="text-center">Rate</th>
//                     <th className="text-center">Hours</th>
//                     <th className="text-right">Total</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td className="">
//                       <p className="text-black">Character Illustration</p>
//                       <p className="small">
//                         Character Design projects from the latest top online portfolios on Behance.
//                       </p>
//                     </td>
//                     <td className="text-center">$65.00</td>
//                     <td className="text-center">84</td>
//                     <td className="text-right">$5,376.00</td>
//                   </tr>
//                   <tr>
//                     <td className="">
//                       <p className="text-black">Cross Heart Charity Branding</p>
//                       <p className="small">
//                         Attempt to attach higher credibility to a new product by associating it with a well established
//                         company name
//                       </p>
//                     </td>
//                     <td className="text-center">$89.00</td>
//                     <td className="text-center">100</td>
//                     <td className="text-right">$8,900.00</td>
//                   </tr>
//                   <tr>
//                     <td className="">
//                       <p className="text-black">iOs App</p>
//                       <p className="small">
//                         A video game franchise Inspired primarily by a sketch of stylized wingless - Including Branding
//                         / Graphics / Motion Picture &amp; Videos
//                       </p>
//                     </td>
//                     <td className="text-center">$100.00</td>
//                     <td className="text-center">500</td>
//                     <td className="text-right">$50,000.00</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//             <div className="m-b">
//               <img width="150" alt="" className="invoice-signature" src={MSLogo} />
//               <p>Designer’s Identity</p>
//             </div>
//             <div className="p-a b-t b-b m-b-lg">
//               <div className="row">
//                 <div className="col-sm-2 clearfix">
//                   <h5 className="font-montserrat all-caps small no-margin hint-text bold">Advance</h5>
//                   <h3 className="no-margin">$21,000.00</h3>
//                 </div>
//                 <div className="col-sm-5 clearfix">
//                   <h5 className="font-montserrat all-caps small no-margin hint-text bold">Discount (10%)</h5>
//                   <h3 className="no-margin">$645.00</h3>
//                 </div>
//                 <div className="col-sm-5 text-right">
//                   <h5 className="all-caps small no-margin hint-text bold">Total</h5>
//                   <h1 className="m-a-none">$64,276.00</h1>
//                 </div>
//               </div>
//             </div>
//             <p className="small hint-text">
//               Services will be invoiced in accordance with the Service Description. You must pay all undisputed invoices
//               in full within 30 days of the invoice date, unless otherwise specified under the Special Terms and
//               Conditions. All payments must reference the invoice number. Unless otherwise specified, all invoices shall
//               be paid in the currency of the invoice
//             </p>
//             <p className="small hint-text">
//               Insight retains the right to decline to extend credit and to require that the applicable purchase price be
//               paid prior to performance of Services based on changes in insight's credit policies or your financial
//               condition and/or payment record. Insight reserves the right to charge interest of 1.5% per month or the
//               maximum allowable by applicable law, whichever is less, for any undisputed past due invoices. You are
//               responsible for all costs of collection, including reasonable attorneys' fees, for any payment default on
//               undisputed invoices. In addition, Insight may terminate all further work if payment is not received in a
//               timely manner.
//             </p>
//           </CardBody>
//         </Card>
//       </Container>
//     );
//   }
// }



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
import { Auth } from 'aws-amplify';
import { Switch } from '../../vibe';
import { Doughnut, Line ,HorizontalBar,Bar} from 'react-chartjs-2';
import { Badge, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

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
    var url="https://g06vvuj2mk.execute-api.us-east-1.amazonaws.com/dev?user=DYDBProjectA-"+this.state.jobname
    // console.log(url)
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
    var url="https://g06vvuj2mk.execute-api.us-east-1.amazonaws.com/dev?user=DYDBProjectB-"+this.state.jobname
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
    await this.getJwtToken()
    var url="https://g06vvuj2mk.execute-api.us-east-1.amazonaws.com/dev?user=DYDBProjectC-"+this.state.jobname
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
    await this.getJwtToken()
    var url="https://g06vvuj2mk.execute-api.us-east-1.amazonaws.com/dev?user=DYDBProject-"+this.state.jobname
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
  option4(){
    this.setState({filter1 : "Project"})
    // this.setState({stats : [{"dpu" : "updating.."}]})
    this.fetchitemAll()
    
    
  }
  async getJwtToken()  {   
    let creds = await Auth.currentSession();
    let idToken=creds.getIdToken()
    let jwtToken_d=idToken.getJwtToken()
    this.setState({jwtT : jwtToken_d})
  }

  async search({target}){
    await this.getJwtToken()
    this.setState({jobname : target.value})
    var url="https://g06vvuj2mk.execute-api.us-east-1.amazonaws.com/dev?user=DYDB"+this.state.filter1+"-"+target.value
    console.log("this--",url)
    const response = await fetch(url, {
      headers: {
        Authorization: this.state.jwtT
      }
    });
    const body = await response.json();
    // console.log(body.total_jobs)
    this.setState({stats :JSON.parse(body)})

  }
  

  async componentDidMount(){
    await this.getJwtToken()
    var url="https://g06vvuj2mk.execute-api.us-east-1.amazonaws.com/dev?user=DYDB" + this.state.filter1+"-"+this.state.jobname
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

    const state = {
      labels: ['Lambda', 'S3', 'DynamoDB', 'Redshift', 'Glue', 'EC2' , 'VPC', 'Cloudwatch'],
      datasets: [
        {
          label: 'Total Cost Incurred in Dollars',
          backgroundColor: chartColors.danger,
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [0.08,1324.75,440.39,18567.67,1675.34,534.90,824.89,64.84],
        }
      ]
  };

    var donutData = { 

      
      labels: [this.state.stats.fail1, this.state.stats.fail2,
       this.state.stats.fail3],
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
          display: true
        },
        tooltips: {
          enabled: false
        }
      }
    
    };
    var line = {
      data: {
        labels: ['Lambda', 'S3', 'DynamoDB', 'Redshift', 'Glue', 'EC2' , 'VPC', 'Cloudwatch'],
        datasets: [
          {
            label: 'Expected Cost',
            data: [0.08,1324.75,440.39,18567.67,1675.34,534.90,824.89,64.84],
            borderColor: 'transparent',
            backgroundColor: chartColors.green,
            pointBackgroundColor: 'rgba(0,0,0,0)',
            pointBorderColor: 'rgba(0,0,0,0)',
            steppedLine: false,
            
            borderWidth: 4,
            fill: true,
          },
          {
            label: 'Actual Cost',
            data: [0.08,120.75,200.39,350.67,800.34,0.90,0.89,0.84],
            borderColor: 'transparent',
            backgroundColor: chartColors.red,
            pointBackgroundColor: 'rgba(0,0,0,0)',
            steppedLine: false,
              
            pointBorderColor: 'rgba(0,0,0,0)',
            borderWidth: 4,
            fill: true,
          }

        ]
      },
      
      options: {
        responsive: true,
        scales: {
          xAxes: [
            {
              display: true,stacked: true,
            }
          ],
          yAxes: [
            {
              display: true,stacked: true,
              ticks: {
                beginAtZero: true,
              }
            }
          ]
        },
        legend: {
          display: true
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

        <UncontrolledDropdown className="pull-right" >
            <DropdownToggle className="pull-right">
              {/* <Avatar size="small"  initials="Guest" /> */}
          Services
        </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem onClick={this.option1}>Lambda</DropdownItem>
              <DropdownItem onClick={this.option2}> S3</DropdownItem>
              <DropdownItem onClick={this.option3} >DynamoDB</DropdownItem>
              <DropdownItem onClick={this.option1}>Redshift</DropdownItem>
              <DropdownItem onClick={this.option2}> Glue</DropdownItem>
              <DropdownItem onClick={this.option3} >EC2</DropdownItem>
              <DropdownItem onClick={this.option2}> Cloudwatch</DropdownItem>
              <DropdownItem onClick={this.option3} >VPC</DropdownItem>
              <DropdownItem onClick={this.option4} >Reset</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          
          <form className="form-inline" className="pull-right">
            <input name="searchBox" onChange={this.search} className="form-control mr-sm-1" type="search" placeholder="Search" aria-label="Search" />
          </form>
          </React.Fragment> 
          
          



        </div>
        <div className="m-b">
          <h2>AWS Cost Analysis!</h2>
          <p className="text-muted">
            Here's how you can optimize your project cost today.
          </p>
        </div>

        <Row>
          <Col md={4} xs={12}>
            <Card>
              <CardHeader>
                Total Services{' '}
                {/* <Button size="sm" className="pull-right">
                  Refresh
                </Button> */}
              </CardHeader>
              <CardBody>
                <h2 className="m-b-20 inline-block">
                  <span>8</span>
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
                Total Cost{' '}
                {/* <Button size="sm" className="pull-right">
                  Refresh
                </Button> */}
              </CardHeader>
              <CardBody>
                <h2 className="m-b-20 inline-block">
                  <span>24907 $</span>
                </h2>{' '}
                <i
                  className="fa fa-caret-down text-danger"
                  aria-hidden="true"
                />
                <Progress value={80} animated color="info" color="info" />
              </CardBody>
            </Card>
          </Col>
          <Col md={4} xs={12}>
            <Card>
              <CardHeader>
                Total Expected cost{' '}
                {/* <Button size="sm" className="pull-right">
                  Refresh
                </Button> */}
              </CardHeader>
              <CardBody>
                <h2 className="m-b-20 inline-block">
                  <span>23432 $</span>
                </h2>{' '}
                <i className="fa fa-caret-up text-danger" aria-hidden="true" />
                <Progress value={60} animated color="warning" color="success" />
              </CardBody>
            </Card>
          </Col>
          <Col md={4} xs={12}>
            <Card>
              <CardHeader>
                Total cost that can be optimized{' '}
                {/* <Button size="sm" className="pull-right">
                  Refresh
                </Button> */}
              </CardHeader>
              <CardBody>
                <h2 className="inline-block">
                  <span>1475 $</span>
                </h2>
                <Progress value={20} animated color="warning" color="danger" />
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
        <Col md={6} md={6}>
            <Card>
              <CardHeader>Average Cost per Services in December,2020</CardHeader>
              <CardBody>
                <Bar 
                  data={state }
                  width={908}
                  height={768}
                  legend={{ display: true }}
                  options={line.options}
                />
              </CardBody>
            </Card>
          </Col>
          <Col md={6} md={6}>
            <Card>
              <CardHeader>Actual vs Expected Cost in December,2020</CardHeader>
              <CardBody>
                <Line
                  data={line.data}
                  width={908}
                  height={768}
                  legend={{ display: false }}
                  options={line.options}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>

        
      </div>
    );
  }
}
