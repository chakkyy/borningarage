import React, { Component } from "react";
import Player from "../Player/Player";
import "./Car.scss";
import { InfiniteScroll } from "react-simple-infinite-scroll";

class Car extends Component {
  render() {
    let filteredCars;
    if (this.props.searchQuery) {
      filteredCars = this.props.contents.filter((car) => {
        const query = this.props.searchQuery.toLowerCase() || "";
        const make = car.carMake.toLowerCase();
        const model = car.carModel.toLowerCase();
        const trim = car.carTrim.toLowerCase();

        if (
          make.indexOf(query) > -1 ||
          model.indexOf(query) > -1 ||
          trim.indexOf(query) > -1
        ) {
          return true;
        } else {
          return false;
        }
      });
    } else {
      filteredCars = this.props.currentPage;
    }

    return (
      <InfiniteScroll
        throttle={50}
        threshold={50}
        isLoading={this.props.isLoading}
        hasMore={!!this.props.page}
        onLoadMore={this.props.loadMore}
      >
        <div className="carGrid">
          {filteredCars.map((car) => (
            <div
              key={car.carModel}
              className="car"
              id={car.carModel.toLowerCase()}
              style={{ backgroundImage: `url(${car.carImage})` }}
              aria-label={`${car.carMake} ${car.carModel}`}
            >
              <Player streamUrl={car.carSound} preloadType="metadata" />
              <div className="carText">
                <div className="carYear">{car.carYear}</div>
                <a
                  className="carModelLink"
                  href={car.carLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="carMake">{car.carMake}</div>
                  <div className="carModel">{car.carModel}</div>
                  <div className="carTrim">{car.carTrim}</div>
                </a>
              </div>
              <div className="carCredit">
                <a
                  href={car.carSoundCreditLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {car.carSoundCredit}
                </a>
                <a
                  href={car.carImageCreditLink}
                  className="carLink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {car.carImageCredit}
                </a>
              </div>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    );
  }
}

export default Car;
