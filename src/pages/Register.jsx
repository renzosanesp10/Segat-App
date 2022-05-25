import React from "react";
import "../styles/register.css";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <div className="contenedor">
      <div className="w-25 card">
        <div className="card-header text-center">
          <h2>Registro</h2>
        </div>

        <div className="card-body">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Nombres y Apellidos
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Juan Medina"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput" className="form-label">
              Dni
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="71986383"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput" className="form-label">
              Correo Electronico
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="correo@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput" className="form-label">
              Celular
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="999666999"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="******"
            />
          </div>
          <div className="mb-3 d-flex justify-content-center">
            <button className="btn btn-primary">Registrarse</button>
          </div>
          <div className="card-footer d-flex justify-content-center align-items-center gap-2">
            <p className="m-0">¿Ya tienes una cuenta?</p>
            <Link to="/login">Iniciar Sesion</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
