import React from "react";
import axios from "axios";
import styles from "./Host.css";

class Host extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listing_id: 1,
      hostInfo: {}
    };
  }

  componentDidMount() {
    // var randomGenerator = function() {
    //   return Math.ceil(Math.random() * 100);
    // }
    // console.log('randomGenerator--', randomGenerator)
    // var randomNumbers = randomGenerator()
    // console.log(randomNumbers);
    axios
      .get("http://54.152.139.251:3000/api/host", {
        // "http://localhost:3000/api/host"
        params: {
          listing_id: this.state.listing_id
        }
      })
      .then(data => {
        console.log('data--', data.data);
        this.setState({
          hostInfo: data.data
        })
      })
      .catch(err => {
        console.log("axios get failed", err);
      });
  }

  render() {
    return (
      <div className={styles.containerDiv}>
      <div className={styles.hostInfo}>
        <div>
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
          <div className={styles.picture}>
          <img src={this.state.hostInfo.picture}/>
          </div>
          </div>

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
            <div className={styles.normalFont}>{this.state.hostInfo.locationDescription}</div>
          {/* <div>
            <span className={styles.readMore}>Read More about the neighborhood</span>
          </div> */}
          <div className={styles.normalFont}>{this.state.locationDescription}</div>
          <div className={styles.mapLocation}>      
            <iframe className={styles.iframe} src="https://www.google.com/maps/embed?..."></iframe>
          </div>
          <span className={styles.normalFont}>Exact location information is provided after a booking is confirmed.</span>
        </section>
      </div>
      <div className={styles.spacer}>
      </div>
      </div>
    );
  }
}

export default Host;
