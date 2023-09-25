import React from 'react'
import Image from 'next/image'


const Property = () => {
  return (
    <section className="property" id="property">
        <div className="container">

          <p className="section-subtitle">Properties</p>

          <h2 className="h2 section-title">Featured Listings</h2>

          <ul className="property-list has-scrollbar">

            <li>
              <div className="property-card">

                <figure className="card-banner">

                  <a href="#">
                    <Image width={300} height={300} src="/images/1.jpg" alt="New Apartment Nice View" className="w-100"/>
                  </a>

                  <div className="card-badge green">For Rent</div>

                  <div className="banner-actions">

                    <button className="banner-actions-btn">
                      <ion-icon name="location"></ion-icon>

                      <address>Belmont Gardens, Chicago</address>
                    </button>

                    <button className="banner-actions-btn">
                      <ion-icon name="camera"></ion-icon>

                      <span>4</span>
                    </button>

                    <button className="banner-actions-btn">
                      <ion-icon name="film"></ion-icon>

                      <span>2</span>
                    </button>

                  </div>

                </figure>

                <div className="card-content">

                  <div className="card-price">
                    <strong>$34,900</strong>/Month
                  </div>

                  <h3 className="h3 card-title">
                    <a href="#">New Apartment Nice View</a>
                  </h3>

                  <p className="card-text">
                    Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood
                  </p>

                  <ul className="card-list">

                    <li className="card-item">
                      <strong>3</strong>

                      <ion-icon name="bed-outline"></ion-icon>

                      <span>Bedrooms</span>
                    </li>

                    <li className="card-item">
                      <strong>2</strong>

                      <ion-icon name="man-outline"></ion-icon>

                      <span>Bathrooms</span>
                    </li>

                    <li className="card-item">
                      <strong>3450</strong>

                      <ion-icon name="square-outline"></ion-icon>

                      <span>Square Ft</span>
                    </li>

                  </ul>

                </div>

                

              </div>
            </li>

            <li>
              <div className="property-card">

                <figure className="card-banner">

                  <a href="#">
                    <Image width={300} height={300} src="/images/2.jpg" alt="Modern Apartments" className="w-100"/>
                  </a>

                  <div className="card-badge orange">For Sales</div>

                  <div className="banner-actions">

                    <button className="banner-actions-btn">
                      <ion-icon name="location"></ion-icon>

                      <address>Belmont Gardens, Chicago</address>
                    </button>

                    <button className="banner-actions-btn">
                      <ion-icon name="camera"></ion-icon>

                      <span>4</span>
                    </button>

                    <button className="banner-actions-btn">
                      <ion-icon name="film"></ion-icon>

                      <span>2</span>
                    </button>

                  </div>

                </figure>

                <div className="card-content">

                  <div className="card-price">
                    <strong>$34,900</strong>/Month
                  </div>

                  <h3 className="h3 card-title">
                    <a href="#">Modern Apartments</a>
                  </h3>

                  <p className="card-text">
                    Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood
                  </p>

                  <ul className="card-list">

                    <li className="card-item">
                      <strong>3</strong>

                      <ion-icon name="bed-outline"></ion-icon>

                      <span>Bedrooms</span>
                    </li>

                    <li className="card-item">
                      <strong>2</strong>

                      <ion-icon name="man-outline"></ion-icon>

                      <span>Bathrooms</span>
                    </li>

                    <li className="card-item">
                      <strong>3450</strong>

                      <ion-icon name="square-outline"></ion-icon>

                      <span>Square Ft</span>
                    </li>

                  </ul>

                </div>

                

              </div>
            </li>

            <li>
              <div className="property-card">

                <figure className="card-banner">

                  <a href="#">
                    <Image width={300} height={300} src="/images/3.jpg" alt="Comfortable Apartment" className="w-100"/>
                  </a>

                  <div className="card-badge green">For Rent</div>

                  <div className="banner-actions">

                    <button className="banner-actions-btn">
                      <ion-icon name="location"></ion-icon>

                      <address>Belmont Gardens, Chicago</address>
                    </button>

                    <button className="banner-actions-btn">
                      <ion-icon name="camera"></ion-icon>

                      <span>4</span>
                    </button>

                    <button className="banner-actions-btn">
                      <ion-icon name="film"></ion-icon>

                      <span>2</span>
                    </button>

                  </div>

                </figure>

                <div className="card-content">

                  <div className="card-price">
                    <strong>$34,900</strong>/Month
                  </div>

                  <h3 className="h3 card-title">
                    <a href="#">Comfortable Apartment</a>
                  </h3>

                  <p className="card-text">
                    Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood
                  </p>

                  <ul className="card-list">

                    <li className="card-item">
                      <strong>3</strong>

                      <ion-icon name="bed-outline"></ion-icon>

                      <span>Bedrooms</span>
                    </li>

                    <li className="card-item">
                      <strong>2</strong>

                      <ion-icon name="man-outline"></ion-icon>

                      <span>Bathrooms</span>
                    </li>

                    <li className="card-item">
                      <strong>3450</strong>

                      <ion-icon name="square-outline"></ion-icon>

                      <span>Square Ft</span>
                    </li>

                  </ul>

                </div>

                

              </div>
            </li>

            <li>
              <div className="property-card">

                <figure className="card-banner">

                  <a href="#">
                    <Image width={300} height={300} src="/images/4.jpg" alt="Luxury villa in Rego Park" className="w-100"/>
                  </a>

                  <div className="card-badge green">For Rent</div>

                  <div className="banner-actions">

                    <button className="banner-actions-btn">
                      <ion-icon name="location"></ion-icon>

                      <address>Belmont Gardens, Chicago</address>
                    </button>

                    <button className="banner-actions-btn">
                      <ion-icon name="camera"></ion-icon>

                      <span>4</span>
                    </button>

                    <button className="banner-actions-btn">
                      <ion-icon name="film"></ion-icon>

                      <span>2</span>
                    </button>

                  </div>

                </figure>

                <div className="card-content">

                  <div className="card-price">
                    <strong>$34,900</strong>/Month
                  </div>

                  <h3 className="h3 card-title">
                    <a href="#">Luxury villa in Rego Park</a>
                  </h3>

                  <p className="card-text">
                    Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood
                  </p>

                  <ul className="card-list">

                    <li className="card-item">
                      <strong>3</strong>

                      <ion-icon name="bed-outline"></ion-icon>

                      <span>Bedrooms</span>
                    </li>

                    <li className="card-item">
                      <strong>2</strong>

                      <ion-icon name="man-outline"></ion-icon>

                      <span>Bathrooms</span>
                    </li>

                    <li className="card-item">
                      <strong>3450</strong>

                      <ion-icon name="square-outline"></ion-icon>

                      <span>Square Ft</span>
                    </li>

                  </ul>

                </div>

                

              </div>
            </li>

          </ul>

        </div>
                </section>
  )
}

export default Property

