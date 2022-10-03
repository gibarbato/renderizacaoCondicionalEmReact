import React, {useState} from 'react'


export default function App() {

/* ---------início ---------*/
const [cor, setCor]=useState(1)

const vermelho ={color: '#f00'}
const verde ={color: '#0f0'}
const azul ={color: '#00f'}

const retornaCor=(c)=>{
  if(c==1){
    return vermelho
  }else if(c==2){
    return verde
  }else{
    return azul
  }
}

const mudaCor=()=>{
  setCor(cor + 1)
  if(cor>2){
    setCor(1)
  }
}

setInterval(mudaCor, 5000)
/* ---------fim ---------*/

/* ---------início ---------*/
const [log, setlog]=useState(false)

const msgLogin=()=>{
  return 'Usuário Logado'
}

const msgLoOff=()=>{
  return 'Favor Logar'
}
/* ---------fim ---------*/

/* ---------início ---------*/
const cumprimento=()=>{
  const hora=new Date().getHours()
  if(hora >= 0 && hora < 13) {
    return <p>Bom dia</p>
  } else if(hora >= 13 && hora < 18) {
    return <p>Boa tarde</p>
  } else {
    return <p>Boa noite</p>
  } 
}
/* ---------fim ---------*/
  return (
    <>
      <h1>Renderização condicional em React - HORA</h1>
      {cumprimento()}
      
      <h1>Renderização condicional em React - Login/Logout</h1>
      <p>{log?msgLogin():msgLoOff()}</p>
      <button onClick={()=>setlog(!log)}>{log?'Logoff':'Login'}</button>

      <h1 style={retornaCor(cor)}>Renderização condicional em React - Cor</h1>
      <button onClick={()=>mudaCor()}>Muda Cor</button>


    </>
    );
}
