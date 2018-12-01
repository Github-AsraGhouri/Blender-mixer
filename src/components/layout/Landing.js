import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Col } from 'react-bootstrap';
import './landing.css'
import img from './mixer.png'
class Landing extends Component {
  // componentDidMount() {
  //   if (this.props.auth.isAuthenticated) {
  //     this.props.history.push('/dashboard');
  //   }
  // }

  render() {
    return (
      <div className="landing">
        <div className="container">
          <div className="row">
            <Col xs={12} md={6}>
              <GridOne />
              <Reviews />
            </Col>
            <Col xs={12} md={6}>
              <GridTwo />
              <MobileReviews />
            </Col>
          </div>
        </div>
      </div>
    );
  }
}

class GridOne extends Component {
  render() {
    return (
      <div className="container">
        <p className="Blender-details">
          Ninja™ Professional Blender
                <br />
          with Single Serve Blending Cups
              </p>
        <div className="mixer-blender">
          <img className="d-block w-100" src={require("./mixer.png")} alt="Second slide" />
        </div>
        <p className="view-larger">
        <img src={require("./plus-zoom.png")} alt="plus-zoom" width="30px;"/>
          view larger
              </p>
        <Crousel />
      </div>
    );
  }
}
class GridTwo extends Component {
  render() {
    return (
      <div className="container">
        <section>
          <p>
            <span className="price">
              $139.99
            </span>
            online price
          </p>
          <div className="benefits">
            <ul className="fa-ul">
              <li><span class="fa-li" ><i class="fa fa-tag"></i></span>spend $50, ship free</li>
              <li><span class="fa-li" ><i class="fa fa-tag"></i></span>$25 gift card with purchase of a select Ninja Blender</li>
            </ul>
          </div>
        </section>
        <section>
          <div className="quantity">
            <span> quantity: </span>
            <span className="round-buttons pull-right">
              <i className="fa fa-minus-circle" aria-hidden="true"></i>
              <span className="increament">1</span>
              <i className="fa fa-plus-circle" aria-hidden="true"></i>
            </span>
          </div>
        </section>
        <section className="container shop-section">
          <div className="row">
            <div className="col-6">
              <button type="button" class="btn btn-secondary btn-lg btn-block" id="pickup-btn">PICK UP IN STORE</button>
              <p className="find-coach"> find in store</p>
            </div>
            <div className="col-6">
              <button type="button" class="btn btn-secondary btn-lg btn-block" id="cart-btn">ADD TO CART</button>
            </div>
          </div>
        </section>
        <section className="return-section">
          <div className="row">
            <span className="return-title col-2">return</span>
            <span className="return-details col-10"> This item must be returned within 30 days of the ship data. See return policy for details.
              Prices, promotions, styles and availibility may vary by store and online.
          </span>
          </div>
          <div className="row policy-details">
            <div className="col-4">
              <button type="button" class="btn btn-secondary btn-lg btn-block" id="get-registry">ADD TO LIST</button>
            </div>
            <div className="col-4">
              <button type="button" class="btn btn-secondary btn-lg btn-block" id="get-registry">ADD TO LIST</button>
            </div>
            <div className="col-4">
              <button type="button" class="btn btn-secondary btn-lg btn-block" id="get-registry">ADD TO LIST</button>
            </div>
          </div>
        </section>
        <section className="product-highlights">
          <div className="row">
            <span className="col-12">
              <h1 className="highlights-heading">products highlights</h1>
            </span>
          </div>
          <ul className="product-list">
            <li>Wattage Output: 1100 watts</li>
            <li>Number of speeds: 3</li>
            <li>Capacity (volume): 72.0 Oz.</li>
            <li>Appliance Capabilities: Blends</li>
            <li>Includes: Travel Lid</li>
            <li>Matrial: Plastic</li>
            <li>Finish: Painted</li>
            <li>Metal Finish: Chrome</li>
            <li>Safety and security Features: Non-slip Base</li>
            <li>Care and Cleaning: Easy-To-Clean, Dishwasher Safe Parts</li>
          </ul>
        </section>
      </div>
    );
  }
}
class Crousel extends Component {
  render() {
    return (
      <div class="container">
      
  </div>

    );
  }
}
class Reviews extends Component {
  render() {
    return (
      //src={require("./mixer.png")} 
      <div className="container d-none d-sm-none d-lg-block d-md-block">
        <div className="row reviews">
          <div className="col-8">
            <span className="overall-rating">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </span>
            <span className="overall"> overall</span>
          </div>
          <div className="view-reviews col-4">
            <span>View all 14 reviews</span>
          </div>
        </div>
        <div className=" container pro-con">
          <div className="row">
            <div className="col-6">
              <h2>PRO</h2>
              <p>most helpful 4-5 start review</p>
            </div>
            <div className="col-6">
              <h2>CON</h2>
              <p>most helpful 1-2 start review</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-6">
              <div class="rating">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <h2>Fantastic Blender</h2>
              <p>This blender works amazingly, and
                blends within seconds. The single serve Cups
                also work really well for smoothies or protien
                shakes!
            </p>
              <p><span className="posted-name">New York</span>
                March 11, 2013
            </p>
            </div>
            <div className="col-6">
              <div class="con-rating">
                <span className="active">★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <h2>Very Unhappy</h2>
              <p>Less than 2 months after purchase it completely
                stopped working. First it wouldn't detect the pitcher
                when trying to blend a significant amount, a couple weeks
                later it wouldn't detect the single serve cup.
             </p>
              <p><span className="posted-name">Eric</span> April 18, 2013</p>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
class MobileReviews extends Component {
  render() {
    return (
      <div className="container d-block d-sm-block d-lg-none d-md-none">
        <div className=" row reviews">
          <span className="ratings col-7">
            <span className="overall-rating">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </span>
            <span className="overall"> overall</span>
          </span>
          <span className="view-reviews col-5">
            View all 14 reviews
            </span>
        </div>
        <div className="container pro-con">
          <div className="row pro-con-row">
            <div className="col-6">
              <h2>PRO</h2>
              <p>most helpful 4-5 start review</p>
            </div>
            <div className="col-6">
              <h2>CON</h2>
              <p>most helpful 1-2 start review</p>
            </div>
          </div>
          <hr />
          <div className="row review-details">
            <div className="col-6">
            <div class="con-rating">
                <span className="active">★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <h2>Fantastic Blender</h2>
              <p>This blender works amazingly, and
                blends within seconds. The single serve Cups
                also work really well for smoothies or protien
                shakes!
            </p>
              <p><span className="posted-name">New York </span> March 11, 2013
            </p>
            </div>
            <div className="col-6">
              <div class="rating">
                <span className="active">☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
              </div>
              <h2>Very Unhappy</h2>
              <p>Less than 2 months after [urchase it completely
                stopped working. First it wouldn't detect the pitcher
                when trying to blend a significant amount, a couple weeks
                later it wouldn't detect the single serve cup.
             </p>
              <p><span className="posted-name">Eric</span> April 18, 2013</p>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
export default connect()(Landing);
