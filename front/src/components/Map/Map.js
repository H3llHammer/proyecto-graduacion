import React from "react";
import "./Map.css";
import axios from "axios";

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mesa: [] };
  }

  componentDidMount() {}

  async getMesa(e, id) {
    e.preventDefault();
    await axios.get(`http://localhost:4000/mesas/120`).then((res) => {
      const mesa = res.data;
      console.log(mesa);
      this.setState({ mesa });
    });
  }

  render() {
    return (
      <div className="main-container">
        <div className="frame-1">Hotel</div>
        <div className="container d-flex">
          <div className="container-column d-flex">
            <div className="container-row">
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                onClick={(e) => {
                  this.getMesa(e, 1);
                }}
              >
                1
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                2
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                3
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                4
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                5
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                6
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                7
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                8
              </div>
            </div>

            <div className="container-row">
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                9
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                10
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                11
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                12
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                13
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                14
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                15
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                16
              </div>
            </div>

            <div className="container-row">
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                17
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                18
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                19
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                20
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                21
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                22
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                23
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                24
              </div>
            </div>
            <div className="container-row">
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                25
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                26
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                27
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                28
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                29
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                30
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                31
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                32
              </div>
            </div>
            <div className="container-row">
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                33
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                34
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                35
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                36
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                37
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                38
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                39
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                40
              </div>
            </div>
            <div className="container-row">
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                41
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                42
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                43
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                44
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                45
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                46
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                47
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                48
              </div>
            </div>
            <div className="container-row">
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                49
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                50
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                51
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                52
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                53
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                54
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                55
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                56
              </div>
            </div>
          </div>

          <div className="container-column">
            <div className="container-row">
              <div className="frame-2">Pista</div>
            </div>

            <div className="container-row">
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                57
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                58
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                59
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                60
              </div>
            </div>

            <div className="container-row">
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                61
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                62
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                63
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                64
              </div>
            </div>
          </div>

          <div className="container-column" id="tables">
            <div className="container-row">
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                65
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                66
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                67
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                68
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                69
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                70
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                71
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                72
              </div>
            </div>

            <div className="container-row">
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                73
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                74
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                75
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                76
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                77
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                78
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                79
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                80
              </div>
            </div>

            <div className="container-row">
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                81
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                82
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                83
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                84
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                85
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                86
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                87
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                88
              </div>
            </div>

            <div className="container-row">
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                89
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                90
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                91
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                92
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                93
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                94
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                95
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                96
              </div>
            </div>

            <div className="container-row">
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                97
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                98
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                99
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                100
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                101
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                102
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                103
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                104
              </div>
            </div>

            <div className="container-row">
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                105
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                106
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                107
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                108
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                109
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                110
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                111
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                112
              </div>
            </div>

            <div className="container-row">
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                113
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                114
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                115
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                116
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                117
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                118
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                119
              </div>
              <div
                className="button btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                120
              </div>
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
                  Mesa {this.state.mesa.map((item, i) => item.id)}
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
                  {this.state.mesa.map((item, i) => item.total)}
                </p>
                <p>
                  Asientos disponibles:{" "}
                  {this.state.mesa.map((item, i) => item.disponibles)}
                </p>
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
}

