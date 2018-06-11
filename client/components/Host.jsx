import React from "react";
import axios from "axios";
import styles from "./Host.css";

class Host extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listing_id: 2,
      hostInfo: {}
    };
  }

  //random generator for names:
  // const Generator = function(arr){
  //   let random = arr[(Math.random()*arr.length) | 0]
  //   return random
  // }
  // const names = ['Aldo', 'Josh', 'Brent', 'Paolo', 'Peter']
  // Generator(names);


  componentDidMount() {
    // var randomGenerator = function() {
    //   return Math.ceil(Math.random() * 100);
    // }
    // console.log('randomGenerator--', randomGenerator)
    // var randomNumbers = randomGenerator()
    // console.log(randomNumbers);
    axios
      .get("/api/host", {
        params: {
          listing_id: this.state.listing_id
        }
      })
      .then(data => {
        console.log('data--', data.data);
        this.setState({
          hostInfo: data.data
        })
        // console.log('line 16', data.data[0].languages)
        // console.log('response_rate', data.data[0].response_rate);

        // RANDOM GENERATOR - USE THIS!

        // var sentences = ['We live in an incredibly diverse area, which is why we feel so at home here. There are sweet little neighborhood restaurants you can stroll to, as well as a few that are on the top of the list for any foodie. If you are into shopping, This city has fantastic clothing stores -- and the mall is close by as well.', 'Circle x ranch, county line beach, matador beach, zuma as well as many other hikes are all less than 10mn away.', 'This modern retreat/spa is walking distance to the Metro Gold Line (via a secret staircase). You have your own private entrance, and abundant outdoor space. 1 Metro stop to Highland Park/Figueroa shops/restaurants/bars. 9 mins to DTLA, Arts District and Little Tokyo stop. Beautiful view of the historic Southwest Museum, and walkable to the Self Realization Center. You’ll love the privacy, abundant trees, and clean air. Good for couples, solo adventurers, and business travelers who like to relax.', 'The studio is situated the fabulous Silver Lake neighborhood close to Hollywood and downtown Los Angeles. Renowned restaurants, coffee shops, and ample shopping opportunities are easily reached. There are 50 steps up to the front door.']

        // var randomSentenceGenerator = function(arr){
        //   return arr[Math.floor(Math.random() * arr.length)];
        // }
        // var randomGenerator = function(arr) {
        //   return Math.floor(Math.random() * arr.length);
        // }
        // const randomValues = randomGenerator(data.data);
        // this.setState({
        //   name: data.data[randomValues].name,
        //   location: data.data[randomValues].location,
        //   join_date: data.data[randomValues].join_date,
        //   reviews: data.data[randomValues].reviews,
        //   references: data.data[randomValues].references,
        //   description: data.data[randomValues].description,
        //   languages: data.data[randomValues].languages,
        //   response_rate: data.data[randomValues].response_rate,
        //   response_time: data.data[randomValues].response_time,
        //   superHost: data.data[randomValues].superHost,
        //   verified: data.data[randomValues].verified,
        //   listing_id: data.data[randomValues].listing_id,
        //   picture: data.data[randomValues].picture,
        //   locationDescription: randomSentenceGenerator(sentences)
        // });
      })
      .catch(err => {
        console.log("axios get failed", err);
      });
  }

  // changeTitle() {
  //   this.setState({
  //     title: 'Gus is the best'
  //   })
  // }

  render() {
    return (
      <div className={styles.hostInfo}>
        <div>
          <div class="headerLocationReviews">
          <h1 className={styles.name}>Hosted by {this.state.hostInfo.name}</h1>
            <div class="header">
            </div>
            <div class="locationAndJoinDate">
              <li className={styles.location}>{this.state.hostInfo.location}</li>
              <li className={styles.join_date}><span aria-hidden="true"> · </span>{this.state.hostInfo.join_date}</li>
              {/* <li className={styles.join_date}><dot class="fas fa-circle"></dot> {this.state.join_date}</li> */}
              {/* <li><span className={styles.dot}><dot class="fas fa-circle"></dot></span><span className={styles.join_date}>{this.state.join_date}</span></li> */}
            </div>
            <div class="reviewsAndReferences">
              <li className={styles.reviews}>
                <star class="fas fa-star" />
                {this.state.hostInfo.reviews}
              </li>
              <li className={styles.references}>
                <human class="fas fa-male" /> {this.state.hostInfo.references}
              </li>
            </div>
          </div>
          <img class="picture" src={this.state.hostInfo.picture} height="64" width="64"/>

          <div class="description">
            <li className={styles.description}>{this.state.hostInfo.description}</li>
          </div>

          <div class="languagesResponseRateTime">
            <div class="languages">
              <li className={styles.languages_word}>
                Languages: {this.state.hostInfo.hostlanguages_word}
              </li>
              <li className={styles.languages}>{this.state.hostInfo.languages}</li>
            </div>
            <div class="responseRate">
              <li className={styles.response_rate_word}>
                Response rate: {this.state.hostInfo.response_rate_word}
              </li>
              <li className={styles.response_rate}>
                {this.state.hostInfo.response_rate}
              </li>
            </div>
            <div class="responseTime">
              <li className={styles.response_time_word}>Response time: </li>
              <li className={styles.response_time}>
                {this.state.hostInfo.response_time}
              </li>
            </div>
          </div>

          <div className={styles.contactHostDive}>
              <button class="button">Contact host</button>
          </div>
          <hr />

          <div>
            <span className={styles.communication}>Always communicate through Airbnb - </span>
            <span className={styles.protection}>To protect your payment, never transfer money or communicate outside of the Airbnb website or app.</span>
            <span className={styles.learnMore}>Learn more</span>
          </div>
          {/* <li>{this.state.superHost}</li>
            <li>{this.state.verified}</li>
            <li>{this.state.listing_id}</li> */}
        {/* {this.state.languages} */}
        {/* {this.state.response_rate} */}
        {/* <h1 onMouseEnter={this.changeTitle.bind(this)}>{this.state.title}</h1> */}
        </div>

        <hr />
        
        <section>
          <h1 className={styles.bold}>The neighborhood</h1>
            <div className={styles.normalFont}>{this.state.locationDescription}</div>
          {/* <div>
            <span className={styles.readMore}>Read More about the neighborhood</span>
          </div> */}
          <div className={styles.mapLocation}>      
            <iframe src="https://www.google.com/maps/embed?..."></iframe>
          </div>
          <span className={styles.normalFont}>Exact location information is provided after a booking is confirmed.</span>
        </section>
      </div>
    );
  }
}

export default Host;
