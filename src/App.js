import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar.js';
import Header from './Components/Header.js';
import Content from './Components/Content.js';
import Member from './Components/Member.js';
import PastMeetups from './Components/PastMeetups.js';
import Axios from 'axios';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      namaApps: 'QTemu',
      menu: [
        {
          id: '1',
          name: 'Create Meetup',
          location: '#'
        },
        {
          id: '2',
          name: 'Explore',
          location: '#'
        }
      ],
      contentHeader: {
          title: 'Hactiv8 Meetup',
          location: '',
          member: '',
          organzer: '',
          linkPage: '#'
      },
      isiContent: [{
          sectionTitle: 'Next Meetup',
          contentTitle: 'Awesome meetup and event',
          contentSubTitle: '25 Januari 2019',
          contentText: [
              'Hello, Javascript & Node.js Ninjas!',
              '-----',
              'See You There!'
            ],
          },
          {
            sectionTitle: 'About Meetup',
            contentTitle: '',
            contentSubTitle: '',
            contentText: [
                'Come and meet other developers interested in Javascript and it\'s library in the Greater Jakarta area.',
                'Twitter',
                '@JakartaJS',
                '#jakartajs'
              ],
            },
      ],
      members: [
        {
          sectionTitle: 'Members',        
          listMember: [{
            avatar: 'https://hacktiv8.com/img/fox.png__vzu2vhp2VRX%2Bewg7J0bPlaAa9e377ae39495073d0e66db163fc8d9b',
            level: 'Organizer',
            name: 'Adhy Wiranata',
            count:'4',
            }, 
          ],               
        },
      ],
      pastmeetups: [
        {
          sectionTitle: 'Past Meetups',
          listMeetUps: [
            {        
              id: '#39',
              eventdate: '27 November 2017',    
              company: 'kumparan',
              count: '139'      
            },
            {        
              id: '#38',
              eventdate: '27 October 2017',    
              company: 'BliBli',
              count: '113'       
            }
            ,
            {        
              id: '#37',
              eventdate: '27 September 2017',    
              company: 'Hacktiv8',
              count: '110'        
            }
          ]
        }          
      ],
      people: [], 
    }
  }
  
  componentDidMount() {
    Axios
    .get("https://swapi.co/api/people/")
    .then(response => {
      
      let contentHeader = Object.assign({}, this.state.contentHeader)
      contentHeader.organzer = response.data.results[0].name
      contentHeader.member = response.data.count      

      let isiContent = Object.assign({}, this.state.isiContent)
      let dataOrang = ''
      let tmpDataOrang = response.data.results      
      tmpDataOrang.map(orang => {
        return (
          dataOrang += ',' + orang.name
        )
      })

      isiContent[0].contentText.push(dataOrang)

      isiContent.contentText = response.data.results[0].name
      // Axios
      // .get(response.data.results.homeworld)
      // .then(responselocation => {
      //   contentHeader.location = responselocation.data.name
      // })

      this.setState({
        people: response.data.results,
        contentHeader,
        isiContent      
      })
    })
  }

  render() {
    let { namaApps, menu, contentHeader, isiContent, members, pastmeetups, people } = this.state

    return (
      <React.Fragment>
        <NavBar namaApps={namaApps} menu={menu}/>
        <Header contentHeader={contentHeader}/>
        <br/>
        <Content isiContent={isiContent[0]}/>
        <br/>
        <Content isiContent={isiContent[1]}/>
        <br/>
        <Member dataMember={members}/>
        <br/>
        <PastMeetups pastmeetups={pastmeetups}/>

        <ul>
              {
                people.map(orang => {
                  return (
                    <li>name: {orang.name}</li>
                  )
                })
              }
            </ul>
      </React.Fragment>
    );
  }
}

export default App;
