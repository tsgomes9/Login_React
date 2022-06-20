import './style.css'

export function Home() {
  return (
    <div className = "container">
      <h1>Seja bem-vindo!</h1>
      <input type="text" placeholder="Informe seu código de usuário"/>
      <input type="password" placeholder="Digite sua senha"/>
      <button>Entrar na conta</button>
    </div>
    
  )
}
