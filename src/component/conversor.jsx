import React, {Component} from "react";
import './conversor.css'
import './responsivoConv.css'
const KEY_API = 'd792252e6f7d4e2d3705';

export default class Conversor extends Component{

  constructor(props){
    super(props);

    this.state ={
      moedaA_valor: "",
      moedaB_valor: 0,
    }

    //passando o this para a funcao 'converter'
    this.converter = this.converter.bind(this);

  }

  //Converter o valor da moedaA no valor da MoedaB
  converter(){
    
    let de_para = `${this.props.moedaA}_${this.props.moedaB}`;
    let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=${KEY_API}`
    
    fetch(url)
    .then(res=>{

      return res.json()

    })
    .then(json => {

      let cotacao = json[de_para];
      let moedaB_valor = (parseFloat(this.state.moedaA_valor) * cotacao).toFixed(2)
      this.setState({moedaB_valor})

    })
  }

  render(){
    return(

      <div>

     
      <section className="container_bloco">
        <h2 className="">{this.props.moedaA} para {this.props.moedaB}</h2>
        {/*MoedaA_valor vai receber o valor digitado no input*/}
        <input className="texto" type="text" onChange={(event)=>{this.setState({moedaA_valor: event.target.value})}}/>
        <input className="botao" type="button" value="Enviar" onClick={this.converter}/> 
        <h2>R$ {this.state.moedaB_valor}</h2>
      </section>
      </div>



    )
  }
}
