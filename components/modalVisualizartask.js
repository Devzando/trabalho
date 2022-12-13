import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { useState, useEffect } from 'react'
import ModalEditTask from './modaledit'


export default function ModalVisuTask({ setOpenModalVisu }) {
    const [openModal, setOpenModal] = useState(false)

    return (
        <div id="bgModal">
            <div id="modalVisualizarAtividade">
                <div id="headerModal">
                    <h1>Título:</h1>
                </div>
                <div id="bodyModal">
                    <div id="mainModal">
                        <h2 className="categoria">Categoria: </h2>

                        <h2 className="descrição">Descrição </h2>
                    </div>
                    <div id="mainModal">
                        <h2 className="data1">Data de início: </h2>

                        <h2 className="datafim">Data de fim: </h2>

                        <div style={{ display: 'flex' }}>
                            <div style={{ marginRight: 75, marginBottom: 20 }}>
                                <h2 className="inicio">Início:</h2>
                            </div>
                            <div>
                                <h2 className="fim">Fim:</h2>
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <button className="cancelar" onclick={setOpenModalVisu} />
                            <button className="lixeira" ><i class="bi bi-trash3"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            {openModal && <ModalEditTask setOpenModal={setOpenModal} />}
        </div>

    );
};