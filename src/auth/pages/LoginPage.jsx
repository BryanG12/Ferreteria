import './LoginPage.css'

export const LoginPage = () => {
  return (
    <div className="login-card-container">
      <div className="login-card">
        <div className="login-card-logo">
          <img src='./../../../public/vite.svg' alt="logo" />
        </div>
        <div className="login-card-header">
          <h1 className='font-weight-bold'>Inicio de Sesión</h1>
          <div className='font-weight-bold'>Por favor inicie sesión para usar la plataforma</div>
        </div>
        <form className="login-card-form">
          <div className="form-item">
            <span className="mdi mdi-account form-item-icon"></span>
            <input type="text" className='font-weight-bold' placeholder="Ingrese Usuario" id="emailForm"
            />
          </div>
          <div className="form-item">
            <span className="mdi mdi-key form-item-icon"></span>
            <input type="password" className='font-weight-bold' placeholder="Ingrese Contraseña" id="passwordForm"
            />
          </div>

          <button type="submit" className='btn-dark btn-rounded btn-login '>Inicia Sesión</button>
        </form>
        <div className="login-card-footer font-weight-bold">
          ¿No tiene usuario? <a href="#">Comunicate con el Administrador.</a>
        </div>
      </div>
      <div className="login-card-social">
        <div className='font-weight-bold' >Contacto</div>
        <div className="login-card-social-btns">
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook"
              width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
