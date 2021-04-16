import React, { useState } from "react";
import "./Map.css";
import axios from "axios";

export default function Map() {
  
  const [ mesa , setMesa ] = useState([]);
  const [ disp, setDisp ] = useState(0);
  const [ opc, setOpc ] = useState(0);

  async function getMesa(e, id) {
    e.preventDefault();
    await axios.get(`http://localhost:4000/mesas/${id}`).then((res) => {
      const mesa = res.data;
      setDisp(mesa[0].disponibles)
      setMesa(mesa)
    });
  }

  function h(){
    alert(opc);
  }

    return (
      <div className="main-container">
        <div className="frame-1">Hotel Buenavista</div>
        <div className="container d-flex">
          <div className="container-column d-flex">
            <div className="container-row">
              {Array.apply(1, Array(8)).map(function (x, i) {
              return <div
              className="button btn"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              onClick={(e) => {
                getMesa(e, i+1);
              }}>{i+1}</div>})}
            </div>

            <div className="container-row">
            {Array.apply(1, Array(8)).map(function (x, i) {
              return <div
              className="button btn"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              onClick={(e) => {
                getMesa(e, i+9);
              }}>{i+9}</div>})}
            </div>

            <div className="container-row">
            {Array.apply(1, Array(8)).map(function (x, i) {
              return <div
              className="button btn"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              onClick={(e) => {
                getMesa(e, i+17);
              }}>{i+17}</div>})}
            </div>

            <div className="container-row">
            {Array.apply(1, Array(8)).map(function (x, i) {
              return <div
              className="button btn"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              onClick={(e) => {
                getMesa(e, i+25);
              }}>{i+25}</div>})}
            </div>

            <div className="container-row">
            {Array.apply(1, Array(8)).map(function (x, i) {
              return <div
              className="button btn"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              onClick={(e) => {
                getMesa(e, i+33);
              }}>{i+33}</div>})}
            </div>

            <div className="container-row">
            {Array.apply(1, Array(8)).map(function (x, i) {
              return <div
              className="button btn"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              onClick={(e) => {
                getMesa(e, i+41);
              }}>{i+41}</div>})}
            </div>

            <div className="container-row">
            {Array.apply(1, Array(8)).map(function (x, i) {
              return <div
              className="button btn"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              onClick={(e) => {
                getMesa(e, i+49);
              }}>{i+49}</div>})}
            </div>
          </div>

          <div className="container-column">
            <div className="container-row">
              <div className="frame-2">Pista</div>
            </div>

            <div className="container-row">
            {Array.apply(1, Array(4)).map(function (x, i) {
              return <div
              className="button btn"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              onClick={(e) => {
                getMesa(e, i+57);
              }}>{i+57}</div>})}
            </div>

            <div className="container-row">
            {Array.apply(1, Array(4)).map(function (x, i) {
              return <div
              className="button btn"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              onClick={(e) => {
                getMesa(e, i+61);
              }}>{i+61}</div>})}
            </div>

          </div>

          <div className="container-column" id="tables">

            <div className="container-row">
            {Array.apply(1, Array(8)).map(function (x, i) {
              return <div
              className="button btn"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              onClick={(e) => {
                getMesa(e, i+65);
              }}>{i+65}</div>})}
            </div>

            <div className="container-row">

            {Array.apply(1, Array(8)).map(function (x, i) {
              return <div
              className="button btn"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              onClick={(e) => {
                getMesa(e, i+73);
              }}>{i+73}</div>})}
            </div>

            <div className="container-row">
            {Array.apply(1, Array(8)).map(function (x, i) {
              return <div
              className="button btn"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              onClick={(e) => {
                getMesa(e, i+81);
              }}>{i+81}</div>})}
            </div>

            <div className="container-row">
            {Array.apply(1, Array(8)).map(function (x, i) {
              return <div
              className="button btn"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              onClick={(e) => {
                getMesa(e, i+89);
              }}>{i+89}</div>})}
            </div>

            <div className="container-row">
            {Array.apply(1, Array(8)).map(function (x, i) {
              return <div
              className="button btn"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              onClick={(e) => {
                getMesa(e, i+97);
              }}>{i+97}</div>})}
            </div>

            <div className="container-row">
            {Array.apply(1, Array(8)).map(function (x, i) {
              return <div
              className="button btn"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              onClick={(e) => {
                getMesa(e, i+105);
              }}>{i+105}</div>})}
            </div>

            <div className="container-row">
            {Array.apply(1, Array(8)).map(function (x, i) {
              return <div
              className="button btn"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              onClick={(e) => {
                getMesa(e, i+113);
              }}>{i+113}</div>})}
            </div>

          </div>
        </div>
        <div
          class="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">
                  Mesa {mesa.map((item, i) => item.id)}
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <p>
                  Total de asientos:{" "}
                  {mesa.map((item, i) => item.total)}
                </p>
                <p>
                  Asientos disponibles:{" "}
                  {mesa.map((item, i) => item.disponibles)}
                </p>
                <form onSubmit={h}>
                <div class="input-group">
                  <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                  <option selected value={setOpc}>Choose...</option>
                  {Array.apply(0, Array(disp)).map(function (x, i) {
                    return <option value={x} key={i}>{i+1}</option> 
                 })}
                </select>
                <button class="btn btn-outline-secondary" type="submit">Button</button>
              </div>
                </form>

              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancelar
                </button>
                <button type="button" class="btn btn-primary">
                  Reservar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}