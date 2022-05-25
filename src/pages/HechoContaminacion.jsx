import React from "react";
import "../styles/HechoContaminacion.css";
import { Link } from "react-router-dom";
import { Navbar } from "../components/navbar";

export const HechoContaminacion = () => {
    return (
        <div className="contenedor">
            <div className="w-25 card">
                <div className="card-header text-center">
                    <h2>Registro de Hecho de Contaminacion</h2>
                </div>

                <div className="card-body">
                    <div className="mb-3">
                        <label htmlFor="exampleFOrmCOntrolInput1" className="form-label">
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
                        <label htmlFor="exampleFOrmCOntrolInput1" className="form-label">
                            Distrito
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Trujillo"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFOrmCOntrolInput1" className="form-label">
                            Sector
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Santa Maria"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFOrmCOntrolInput1" className="form-label">
                            Tipo de Contaminacion
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Sonora"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFOrmCOntrolInput1" className="form-label">
                            Evidencia
                        </label>
                        <input
                            type="file"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Adjunta tu evidencia aqui"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFOrmCOntrolInput1" className="form-label">
                            Descripcion del Hecho de Contaminacion
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Escribir descripcion aqui"
                        />
                    </div>
                    <div className="mb-3 d-flex justify-content-center">
                        <button className="btn btn-primary">Enviar Registro</button>
                        <button className="btn btn-danger" Link to="/login">Cerrar Sesion</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
