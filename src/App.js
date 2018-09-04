import React, { Component } from 'react';
import './App.css';


class App extends Component {
  
  isChecked(name){
    let elements = document.getElementsByName(name);
    for (var i = 0; i < elements.length; i++)
    {
      if (elements[i].checked)
      {
        return elements[i].value;
      }
    }
  }

  mediaHarmonica(event){
    let media = 7/((1/parseInt(event.interest))+(1/parseInt(event.distance))+(1/parseInt(event.talks))+(1/parseInt(event.paid))+(1/parseInt(event.lastMinute))+(1/parseInt(event.duration))+(1/parseInt(event.participant)));
    console.log(media);
    let price = 7000 + 32000/media;
    document.getElementById("finalPrice").textContent = `VALOR: ${price.toFixed(0)}`
    console.log(price);
  }

  calculatePrice(event){
    let price = 0;
    let aux = 0;
    // interesse
    //dificuldade
    let media1 = (parseInt(event.interest) + parseInt(event.interest) + parseInt(event.distance))/3;
    let price1 = 20000/media1;
    price1 = ((price1/100).toFixed(0))*100;
    console.log("1: "+price1);

    //palestras no mes
    let price4 = 0;
    if(event.talks !== "0"){
      price4 = 15000/(parseInt(event.talks));
      price4 = ((price4/100).toFixed(0))*100;
      console.log("4: "+price4);
    }

    //pago
    //ultima hora
    let media2 = (parseInt(event.paid) + parseInt(event.paid) + parseInt(event.lastMinute))/3;
    let price2 = 10000/media2;
    price2 = ((price2/100).toFixed(0))*100;
    console.log("2: "+price2);

    // duração
    //participantes
    let media3 = (parseInt(event.duration) + parseInt(event.duration) + parseInt(event.participant))/3;
    let price3 = 5000/media3;
    price3 = ((price3/100).toFixed(0))*100;
    console.log("3: "+price3);

    price = price1 + price2 + price3 + price4;
    document.getElementById("finalPrice").textContent = `VALOR: ${price.toFixed(0)}`

    console.log("preço final: "+price);
  }

  handleSubmit(){
    let paid = this.isChecked('paid');
    let interest = this.isChecked('interest');
    let lastMinute = this.isChecked('lastMinute');
    let event = {
      participant: document.getElementById("participant").value,
      distance: document.getElementById("distance").value,
      duration: document.getElementById("duration").value,
      talks: document.getElementById("talks").value,
      paid: paid,
      interest: interest,
      lastMinute: lastMinute,
    }
    console.log(event);
    this.calculatePrice(event);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">FORMULÁRIO DE VALORES</h1>
        </header>
          <div className="box">
            <div className="div-table">
              <form>
              <div className="form-group textInput" id="firstInput">
                  <label>NUMERO DE PARTICIPANTES:</label>
                  <select name="participant" id="participant">
                    <option value="0">Escolha uma opção</option>
                    <option value="4">até 30</option>
                    <option value="3">31 a 100</option>
                    <option value="2">101 a 500</option>
                    <option value="1">mais de 500</option>
                  </select>
                </div>
                <div className="form-group checkbox">
                  <label>EVENTO PAGO:</label>
                  <div className="yes-no">
                    <label className="checkbox-label" style={{"paddingLeft":"0px"}}>Sim</label>
                    <input name="paid" id="paid1" type="radio" value="1"></input>
                    <label className="checkbox-label">Não</label>
                    <input name="paid" id="paid2" type="radio" value="4"></input>
                  </div>
                </div>
                <div className="form-group textInput">
                  <label>DIFICULDADE DE DESLOCAMENTO:</label>
                  <select name="distance" id="distance">
                    <option value="0">Escolha uma opção</option>
                    <option value="4">fácil</option>
                    <option value="3">médio</option>
                    <option value="2">difícil</option>
                    <option value="1">muito difícil</option>
                  </select>
                </div>
                <div className="form-group checkbox">
                  <label>INTERESSE:</label>
                  <div className="yes-no">
                    <label className="checkbox-label" style={{"paddingLeft":"0px"}}>Sim</label>
                    <input name="interest" id="interest1" type="radio" value="4"></input>
                    <label className="checkbox-label">Não</label>
                    <input name="interest" id="interest2" type="radio" value="1"></input>
                  </div>
                </div>
                <div className="form-group textInput">
                  <label>DURAÇÃO:</label>
                  <select name="duration" id="duration">
                    <option value="0">Escolha uma opção</option>
                    <option value="4">30 minutos</option>
                    <option value="3">1 hora</option>
                    <option value="2">1 hora e 30 minutos</option>
                    <option value="1">2 horas</option>
                  </select>
                </div>
                <div className="form-group checkbox" >
                  <label>DE ÚLTIMA HORA:</label>
                  <div className="yes-no">
                  <label className="checkbox-label" style={{"paddingLeft":"0px"}}>Sim</label>
                  <input name="lastMinute" id="lastMinute1" type="radio" value="1"></input>
                  <label className="checkbox-label">Não</label>
                  <input name="lastMinute" id="lastMinute2" type="radio" value="4"></input>
                  </div>
                </div>
                <div className="form-group textInput">
                  <label>PALESTRAS NO MÊS:</label>
                  <select name="talks" id="talks">
                    <option value="0">Escolha uma opção</option>
                    <option value="4">1 ou 2</option>
                    <option value="3">3 ou 4</option>
                    <option value="2">5 ou 6</option>
                    <option value="1">mais de 6</option>
                  </select>
                </div>
              </form>
              <div className="submitButton">
                <button className="btn btn-outline-dark" onClick={() => this.handleSubmit()}>CALCULAR</button>
              </div>
            </div>
            <div className="finalText">
            <p id="finalPrice">VALOR:</p>
            </div>
          </div>
        </div>
      );
    }
  }

export default App;