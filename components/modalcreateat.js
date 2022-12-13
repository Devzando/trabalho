export default function ModalCreateTask({setOpenModalCreate}) {
    return (
        <div id="bgModal">
            <form id="modalCriarAtividade">
                <div id="headerModal">
                    <h1>Título: </h1>
                    <input type="text" name="titulo" id="titulo" placeholder="Ex.: Atividade 1"/>
                </div>
                <div id="bodyModal">
                    <div id="mainModal">
                        <h2 className="categoria">Categoria: </h2>
                        <input type="text" name="categoria" id="categoria"/>

                            <h2 className="descrição">Descrição </h2>
                            <textarea form="modalCriarAtividade" id="descrição" name="descrição" rows="5" cols="43"></textarea>
                    </div>
                    <div id="mainModal">
                        <h2 className="data1">Data de início: </h2>
                        <input type="date" name="data" id="data"/>

                            <h2 className="datafim">Data de fim: </h2>
                            <input type="date" name="data2" id="data2"/>

                                <div style={{display: "flex"}}>
                                    <div style={{marginRight: 75, marginBottom: 20}}>
                                        <h2 className="inicio">Início:</h2>
                                        <input type="time" name="hora" id="hora"/>
                                    </div>
                                    <div>
                                        <h2 className="fim">Fim:</h2>
                                        <input type="time" name="hora2" id="hora2"/>
                                    </div>
                                </div>

                                <div style={{display: "flex", justifyContent: "space-around"}}>
                                    <input type="submit" value="Finalizar" name="finalizar-criação" className="finalizar" />
                                    <input type="reset" value="Cancelar" name="cancelar-criação" className="cancelar" onclick={setOpenModalCreate} />
                                </div>
                            </div>
                    </div>
            </form>
        </div>
    )
}