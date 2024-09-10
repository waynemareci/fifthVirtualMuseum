"use client";

import "./styles/mdb.min.css";
import "./styles/snippet.css";

/*
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBCarousel,
  MDBCarouselItem,
  MDBCheckbox,
  MDBCol,
  MDBCollapse,
  MDBInput,
  MDBModal,
  MDBModalBody,
  MDBModalContent,
  MDBModalDialog,
  MDBModalFooter,
  MDBModalHeader,
  MDBModalTitle,
  MDBNavbar,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarNav,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBRipple,
  MDBRow,
  MDBTextArea,
  MDBTypography,
} from "mdb-react-ui-kit";
*/
import { MDBBtn, MDBContainer, MDBFooter, MDBIcon } from "mdb-react-ui-kit";

import { useState, useEffect } from "react";

export default function Home() {
  const [showNavNoToggler, setShowNavNoToggler] = useState(false);
  return (
    <>
      <header>
        {/* Sidenav */}

        <nav
          id="sidenav-4"
          className="sidenav bg-glass opacity-100"
          data-mdb-color="light"
          data-mdb-mode="side"
          data-mdb-slim="true"
          data-mdb-slim-collapsed="true"
          data-mdb-content="#slim-content"
          style={{
            top: "115px",
            width: "70px",
            height: "100vh",
            position: "fixed",
            transition: "0.3s linear",
            transform: "translateX(0%)",
          }}
        >
          <div className="sidenav-item mb-2">
            <a
              id="slim-toggler"
              className="sidenav-link d-flex justify-content-center border-bottom ripple-surface ripple-surface-light"
            >
              <i className="fas fa-chevron-circle-right"></i>
            </a>
          </div>

          <ul className="sidenav-menu">
            <li className="sidenav-item">
              <a className="sidenav-link">
                <i className="fas fa-chart-area fa-fw me-3"></i>
                <span data-mdb-slim="false">Website traffic</span>
              </a>
            </li>
            <li className="sidenav-item">
              <a className="sidenav-link">
                <i className="fas fa-chart-line fa-fw me-3"></i>
                <span data-mdb-slim="false">Analytics</span>
              </a>
            </li>
            <li className="sidenav-item">
              <a className="sidenav-link">
                <i className="fas fa-chart-pie fa-fw me-3"></i>
                <span data-mdb-slim="false">SEO</span>
              </a>
            </li>
            <li className="sidenav-item">
              <a className="sidenav-link">
                <i className="fas fa-money-bill fa-fw me-3"></i>
                <span data-mdb-slim="false">Sales</span>
              </a>
            </li>
            <li className="sidenav-item">
              <a className="sidenav-link">
                <i className="fas fa-users fa-fw me-3"></i>
                <span data-mdb-slim="false">Users</span>
              </a>
            </li>
          </ul>
        </nav>

        <MDBContainer
          style={{ zIndex: "-1", position: "fixed" }}
          fluid
          className="fixed-top mt-4 mb-1"
        >
          <h1 className="display-5 fw-bold text-center">
            Explore The World's Art
          </h1>
        </MDBContainer>
      </header>
      <main style={{ position: "relative", top: "90px" }}>
        <MDBContainer className="container py-4">
          <div className="row g-0 mb-5">
            <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
              {/* Card */}
              <div
                style={{
                  borderColor: "#26395A",
                  borderStyle: "none solid none none",
                  borderWidth: "25px",
                }}
                className="bg-glass shadow-4-strong h-100"
              >
                {/* Card header */}

                <div className="p-4">
                  <div className="row align-items-center">
                    <div className="mb-4 mb-md-0">
                      <p className="display-6 text-center mb-2">
                        Space and Time
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card header */}

                {/* Card body */}
                <div className="p-4">
                  <canvas id="line-chart" height="200px"></canvas>
                </div>
                {/* Card body */}
              </div>
              {/* Card */}
            </div>

            <div className="col-lg-6 mb-4 mb-lg-0">
              {/* Card */}
              <div
                style={{
                  borderColor: "#26395A",
                  borderStyle: "none none none solid",
                  borderWidth: "25px",
                }}
                className="bg-glass shadow-4-strong h-100"
              >
                {/* Card header */}
                <div className="p-4">
                  <div className="row align-items-center">
                    <div className="mb-4 mb-md-0">
                      <p className="display-6 text-center mb-2">Artists</p>
                    </div>
                  </div>
                </div>
                {/* Card header */}

                {/* Card body */}
                <div className="p-4 pb-0">
                  <div className="vector-map" id="my-map"></div>
                </div>
                {/* Card body */}
              </div>
              {/* Card */}
            </div>
          </div>
          <div className="row gx-lg-5 mb-5">
            <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
              {/* Card */}
              <div className="bg-glass shadow-4-strong h-100">
                {/* Card header */}

                <div className="p-4">
                  <div className="row align-items-center">
                    <div className="mb-4 mb-md-0">
                      <p className="display-6 text-center mb-2">Movements</p>
                    </div>
                  </div>
                </div>

                {/* Card header */}

                {/* Card body */}
                <div className="p-4">
                  <canvas id="line-chart" height="200px"></canvas>
                </div>
                {/* Card body */}
              </div>
              {/* Card */}
            </div>

            <div className="col-lg-6 mb-4 mb-lg-0">
              {/* Card */}
              <div className="bg-glass shadow-4-strong h-100">
                {/* Card header */}
                <div className="p-4">
                  <div className="row align-items-center">
                    <div className="mb-4 mb-md-0">
                      <p className="display-6 text-center mb-2">Random</p>
                    </div>
                  </div>
                </div>
                {/* Card header */}

                {/* Card body */}
                <div className="p-4 pb-0">
                  <div className="vector-map" id="my-map"></div>
                </div>
                {/* Card body */}
              </div>
              {/* Card */}
            </div>
          </div>
        </MDBContainer>
      </main>
      <MDBFooter
        style={{ position: "relative", marginTop: "25px" }}
        className="text-center"
      >
        <MDBContainer className="py-4">
          <MDBBtn
            href="#!"
            style={{ backgroundColor: "#3b5998" }}
            floating
            className="m-2"
          >
            <MDBIcon fab icon="facebook-f" />
          </MDBBtn>
          <MDBBtn
            href="#!"
            style={{ backgroundColor: "#55acee" }}
            floating
            className="m-2"
          >
            <MDBIcon fab icon="twitter" />
          </MDBBtn>
          <MDBBtn
            href="#!"
            style={{ backgroundColor: "#dd4b39" }}
            floating
            className="m-2"
          >
            <MDBIcon fab icon="google" />
          </MDBBtn>
          <MDBBtn
            href="#!"
            style={{ backgroundColor: "#ac2bac" }}
            floating
            className="m-2"
          >
            <MDBIcon fab icon="instagram" />
          </MDBBtn>
          <MDBBtn
            href="#!"
            style={{ backgroundColor: "#0082ca" }}
            floating
            className="m-2"
          >
            <MDBIcon fab icon="linkedin-in" />
          </MDBBtn>
          <MDBBtn
            href="#!"
            style={{ backgroundColor: "#222222" }}
            floating
            className="m-2"
          >
            <MDBIcon fab icon="github" />
          </MDBBtn>
        </MDBContainer>
        <div
          className="text-center p-3"
          style={{ backgroundColor: "hsla(218, 62.2%, 35%, 0.2)" }}
        >
          © 2024 Copyright: Wayne Mareci
        </div>
      </MDBFooter>
    </>
  );
}
