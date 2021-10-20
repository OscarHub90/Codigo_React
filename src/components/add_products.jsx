import React from 'react'

const add_products() {
    
    return (
        <div>
            <div className="modal fade" id="editUserModal" tabindex="-1">
            <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
                <div className="modal-header new-contact-modal-header barColor">
                    <h1 className="title m-0 text-white">Actualizar Producto</h1>
                    <button type="button" className="close text-white" data-dismiss="modal">&times;</button>
                </div>
                <div className="modal-body">
                <div id="editContactForm">
                <div className="form-group form-row border py-4 px-2 borders-new-user-modal bg-white">
                    <div className="col">
                    <label for="editUserName" className="col-form-label col-form-label-sm">Identificador</label>
                    <input type="text" className="form-control form-control-sm" id="editUserName" name="editUserName"/>
                    </div>
                    <div className="col">
                    <label for="editUserLastName" className="col-form-label col-form-label-sm">Descripción</label>
                    <input type="text" className="form-control form-control-sm" id="editUserLastName" name="editUserLastName"/>
                    </div>
                    <div className="col">
                    <label for="editUserEmail" className="col-form-label col-form-label-sm">Valor</label>
                    <input type="email" className="form-control form-control-sm" id="editUserEmail" name="editUserEmail" pattern="/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}
                    [a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/"/>
                    </div>
                </div>

                <div className="form-group form-row border py-4  borders-new-user-modal bg-white">
                    <div className="col">
                    <label for="editUserProfile" className="col-form-label col-form-label-sm">Estado del producto</label>
                    <select type="text" className="form-control form-control-sm" id="editUserProfile" name="editUserProfile">
                        <option selected disabled value="0">Seleccionar estado</option>
                        <option value="Admin">Disponible</option>
                        <option value="Basic">No disponible</option>
                    </select>
                    </div>
            </div>
            </div>
            </div>
            </div>
            <div className="modal-footer border-top-0">
                <button type="button" className="btn btn-success  btn-lg border-0 btnColor border-0"
                data-dismiss="modal">Cancelar</button>
                <button type="button" className="btn btn-success btn-lg  create btnColor border-0" id="editUserBtn"
                >Actualizar Producto</button>
            </div>
            
        </div>
        </div>
    
    )
}

export default add_products
