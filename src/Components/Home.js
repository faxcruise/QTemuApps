import React from 'react';
import Header from './Header.js';
import Content from './Content.js';
import Member from './Member.js';
import PastMeetups from './PastMeetups.js';
import Axios from 'axios';


class Home extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            contentHeader: {
                title: 'Hactiv8 Meetup',
                location: 'Jakarta',
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
                    'Get ready for our montly meetup JakartaJS! This will be our fifth meetup of 2018!. The meetup format will contain some short stories and trchnical tyalks. If you have a short announcement you\'d like to share with the audience, you may do so during open mic announcements.',
                    'Remember to bring a photo ID to get through building security.',
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
            members: {
                sectionTitle: 'Members',        
                listMember: [{
                avatar: 'https://hacktiv8.com/img/fox.png__vzu2vhp2VRX%2Bewg7J0bPlaAa9e377ae39495073d0e66db163fc8d9b',
                level: 'Organizer',
                name: '',
                count:'4',
                }, 
                ],               
            },
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
            
            //header
            let contentHeader = Object.assign({}, this.state.contentHeader)
            contentHeader.organzer = response.data.results[0].name
            contentHeader.member = response.data.count      

            //content
            let isiContent = Object.assign({}, this.state.isiContent)
            let dataOrang = ''
            let tmpDataOrang = response.data.results      
            tmpDataOrang.map(orang => {
            return (
                dataOrang += ',' + orang.name
            )
            })

            isiContent[0].contentText.push(dataOrang.substring(1))
            isiContent.contentText = response.data.results[0].name  

            //member
            let members = Object.assign({}, this.state.members)
            members.listMember[0].name = response.data.results[3].name

            this.setState({
                people: response.data.results,
                contentHeader,
                isiContent,
                members
            })
        })
    }

    render(){
        let { namaApps, menu, contentHeader, isiContent, members, pastmeetups, people } = this.state
        return (
            <React.Fragment>
                <Header contentHeader={contentHeader}/>
                <br/>
                <Content isiContent={isiContent[0]}/>
                <br/>
                <Content isiContent={isiContent[1]}/>
                <br/>
                <Member dataMember={members}/>
                <br/>
                <PastMeetups pastmeetups={pastmeetups}/>
            </React.Fragment>
        );
    }
}

export default (Home);