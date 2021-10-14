import React from 'react'
import tech_fun_horizontal_white from 'assets/tech_fun_horizontal_white.png';
import {Link} from 'react-router-dom'

function Ventas() {
    return (
        <div classNameName="Appp">
        <nav className="navbar navbar-expand-lg navbar-dark py-0 barColor">
            <a className="navbar-brand" href="#"/>
                <img className="ml-4" src={tech_fun_horizontal_white} width="167" height="59" alt="Tech & Fun Logo" loading="lazy"/>          
                  
        <div className="collapse navbar-collapse justify-content-end navbar-margin" id="navBar">
            <div className="navbar-nav">
                <a className="nav-link mx-1 active" href="#">Ventas<span className="sr-only">(current)</span></a>
                <Link to='/Productos'>
                <div className="nav-link mx-1" href="./views/companies.html">Productos</div>
                </Link>
                <Link to='/Users'>
                <div className="nav-link mx-1 users-tab" href="./views/users.html" id="navLinkUsers">Usuarios</div>
                </Link>
            </div>
        </div>
        </nav>
    

    <main className="main mx-4">
        <section>
            <h1 className="title mt-5 mb-3">Ventas</h1>

            {/* Search Bar and filter */}
            <div className="d-flex flex-row justify-content-between">
                <div className="d-flex flex-row">
                    <div className="input-group filter mr-2">
                        <input type="text" className="form-control filter-input" aria-label="Text input" id="searchBar"/>
                    </div>

                    {/* Button Search */}

                    <button type="button" className="btn btn-outline-secondary btn-search" id="btnSearch"><i className="fa fa-search"
                            aria-hidden="true"></i></button>

                </div>


                {/* New Contact Button */}
                <div className="d-flex flex-row justify-content-end">
                    <button type="button" className="btn btn-size float-right btnColor" data-toggle="modal"
                        data-target="#newContactModal" id="addContactBtn">Agregar Venta</button>
                </div>

                {/* END New Contact Button */}

            </div>

            {/* END Search Bar and Filter */}

            <div className="selected-contacts d-flex justify-content-between align-items-center mt-4 mb-1">
                <button type="button" className="btn btn-xsm btn-tag disable contacts-selected d-none" id="numberSelectedContacts" > </button>
                <button type="button" className="btn btn-outline-primary btn-size border-0 delete-contacts d-none"
                    data-toggle="modal" data-target="#deleteManyContactsModal" id="deleteSelectedContactsBtnModal"><i className="fa fa-trash" aria-hidden="true"></i>
                    Eliminar Venta</button>
            </div>

            {/* Contacts Grid */}

            <table className="table table-borderless table-bordered table-responsive-lg table-hover">
                <thead>
                    <tr className="table-bordered">
                        
                        <th className="align-middle" scope="col">ID Venta</th>
                        <th className="align-middle" scope="col">Producto</th>
                        <th className="align-middle" scope="col">Cantidad</th>
                        <th className="align-middle" scope="col">Precio Unitario</th>
                        <th className="align-middle" scope="col">Valor total</th>
                        <th className="align-middle" scope="col">fecha de venta </th>
                        <th className="align-middle" scope="col">ID Cliente</th>
                        <th className="align-middle" scope="col">Cliente </th>
                        <th className="align-middle" scope="col">Vendedor </th>
                        <th className="align-middle" scope="col">Estado </th>
                        <th className="align-middle text-center" scope="col">Acciones</th>
                    </tr>
                   
                </thead>
                <tbody className="contactsBodyTable" id="contactsBodyTable">
                    <tr className="contact-row">
                        <td className="align-middle text-center">001</td>
                        <td className="align-middle text-center">Producto 001</td>
                        <td className="align-middle text-center"> 2</td>
                        <td className="align-middle text-center">$ 50.000</td>
                        <td className="align-middle text-center">$ 100.000</td>
                        <td className="align-middle text-center">01/02/2021</td>
                        <td className="align-middle text-center">1098665961</td>
                        <td className="align-middle text-center">Fulanito de Tal</td>
                        <td className="align-middle text-center">Marisol Vanegas</td>
                        <td className="align-middle text-center">En proceso</td>
                        <td className="align-middle text-center">
                            <button type="button" className="btn btn-lg text-black-50 deleteContact"  data-id="${contactID}" data-toggle="modal" data-target="#deleteContactModal"><i className="fa fa-trash-alt" aria-hidden="true"></i></button>
                            <button type="button" className="btn btn-lg text-black-50 editContact"  data-id="${contactID}" data-toggle="modal" data-target="#editContactModal"><i className="fa fa-pencil-alt" aria-hidden="true"></i></button>
                        </td>
                    </tr>
                    <tr className="contact-row">
                        <td className="align-middle text-center">002</td>
                        <td className="align-middle text-center">Producto 002</td>
                        <td className="align-middle text-center"> 5</td>
                        <td className="align-middle text-center">$ 40.000</td>
                        <td className="align-middle text-center">$ 200.000</td>
                        <td className="align-middle text-center">01/09/2021</td>
                        <td className="align-middle text-center">1098665581</td>
                        <td className="align-middle text-center">Pepito Perez</td>
                        <td className="align-middle text-center">Diego Parra</td>
                        <td className="align-middle text-center">Cancelada</td>
                        <td className="align-middle text-center">
                            <button type="button" className="btn btn-lg text-black-50 deleteContact"  data-id="${contactID}" data-toggle="modal" data-target="#deleteContactModal"><i className="fa fa-trash-alt" aria-hidden="true"></i></button>
                            <button type="button" className="btn btn-lg text-black-50 editContact"  data-id="${contactID}" data-toggle="modal" data-target="#editContactModal"><i className="fa fa-pencil-alt" aria-hidden="true"></i></button>
                        </td>
                    </tr>

                </tbody>
            </table>

            {/* END Contacts Grid */}

        </section>
    </main>

   

    {/* Delete ONE Contact Modal */}

    <div className="modal fade" id="deleteContactModal" tabindex="-1">
        <div className="modal-dialog modal-dialog-centered modal-sm">
            <div className="modal-content">
                <div className="modal-body text-center mt-1">
                    <img src="./assets/delete_company.png" alt="Delete logo"/>
                    <input type="hidden" id="deleteContactID" name="deleteCompanyID"/>
                    <p className="pt-4">¿Seguro que deseas eliminar la venta?</p>
                </div>
                <div className="modal-footer border-top-0 justify-content-around">
                    <button type="button" className="btn btn-success btn-lg border-0 btnColor"
                        data-dismiss="modal">Cancelar</button>
                    <button type="button" className="btn btn-success btn-lg btn-danger delete"
                        data-dismiss="modal" id="deleteContactModalBtn">Eliminar</button>
                </div>
            </div>
        </div>
    </div>

    {/* END ONE Delete Contacts Modal */}

    
    {/* NEW Contacts Modal */}

    <div className="modal fade" id="newContactModal" tabindex="-1">
        <div className="modal-dialog modal-dialog-centered modal-xl">
            <div className="modal-content">
                <div className="modal-header barColor new-contact-modal-header">
                    <h1 className="title m-0 text-white">Nueva Venta</h1>
                    <button type="button" className="close text-white" data-dismiss="modal">&times;</button>
                </div>
                <div className="modal-body">
                    <div id="new-contact-form">
                        <div className="form-group form-row border py-4 px-2 borders-new-user-modal bg-white">
                            
                            <div className="col">
                                <label for="newContactName" className="col-form-label col-form-label-sm">ID Cliente<span
                                        className="text-danger">*</span></label>
                                <input type="text" className="form-control form-control-sm" id="newContactName" name="newContactName"/>
                            </div>
                            <div className="col">
                                <label for="newContactLastname" className="col-form-label col-form-label-sm">Nombre del Cliente<span
                                        className="text-danger">*</span></label>
                                <input type="text" className="form-control form-control-sm" id="newContactLastname" name="newContactLastname"/>
                            </div>
                            <div className="col">
                                <label for="position" className="col-form-label col-form-label-sm">Fecha de la Venta<span
                                        className="text-danger">*</span></label>
                                <input type="text" className="form-control form-control-sm" id="newContactPosition" name="position"/>
                            </div>
                            
                            
                        </div>
                        <div className="form-group form-row contact-channel-info">
                            <div className="col">
                                <label for="region" className="col-form-label col-form-label-sm">Vendedor<span
                                        className="text-danger">*</span></label>
                                <select className="form-control form-control-sm" name="region" id="newContact_regionSelectID">
                                    <option selected selected disabled value="0">Seleccionar Vendedor</option>
                                    <option value="Marisol Vanegas">Marisol Vanegas</option>
                                    <option value="Diego Parra">Diego Parra</option>

                                </select>
                            </div>
                            <div className="col">
                                <label for="newContactEmail" className="col-form-label col-form-label-sm">Estado de la Venta<span
                                        className="text-danger">*</span></label>
                                        <select className="form-control form-control-sm" name="newContactChannel"
                                        id="newContactChannel">
                                        <option selected disabled value="Seleccionar canal">Seleccionar Estado</option>
                                        <option value="En Proceso">En Proceso</option>
                                        <option value="Entregada">Entregada</option>
                                        <option value="Cancelada">Cancelada</option>
                                        
                                    </select>
                            </div>
                            
                        </div>
                        <div className="form-group form-row ">
                            <div className="col">
                                <label for="newContactChannel" className="col-form-label col-form-label-sm">Producto</label>
                                <select className="form-control form-control-sm" name="newContactChannel"
                                    id="newContactChannel">
                                    <option selected disabled value="Seleccionar canal">Seleccionar Producto</option>
                                    <option value="Producto 001">Producto 001</option>
                                    <option value="Producto 002">Producto 002</option>
                                    <option value="Producto 003">Producto 003</option>
                                    <option value="Producto 004">Producto 004</option>
                                    
                                </select>
                            </div>
                            <div className="col">
                                <label for="newProductPrice" className="col-form-label col-form-label-sm">Precio Unitario<span
                                        className="text-danger">*</span></label>
                                <input type="text" className="form-control form-control-sm" disabled id="newProductPrice" name="newProductPrice"/>
                            </div>
                            <div className="col">
                                <label for="newProductCant" className="col-form-label col-form-label-sm">Cantidad<span
                                    className="text-danger">*</span></label>
                            <input type="text" className="form-control form-control-sm" id="newProductCant" name="newProductCant"/>
                            </div>
                            <div className="col">
                                <label for="newProductSubTotal" className="col-form-label col-form-label-sm">Sub Total<span
                                        className="text-danger">*</span></label>
                                <input type="text" className="form-control form-control-sm" disabled id="newProductSubTotal" name="newProductSubTotal"/>
                            </div>
                           
                            <div className="col">
                                    <button type="button" className="btn btn-secondary text-black btn-sm ml-3 buttonTreeAdd newChanelBtn" id="newContactChannelBtn" > <i className="fas fa-plus"></i> Agregar Producto</button>    
                            </div>
                        </div>
               
                        <div className="form-group form-row mt-4 mb-0">
                            <label className="col-form-label col-form-label-sm"><span
                                    className="text-danger">Valor Total de la Venta: $ </span></label>
                        </div>

                        <div className="form-group form-row mt-4 mb-0">
                            <label className="col-form-label col-form-label-sm"><span
                                    className="text-danger">*</span>Información requerida</label>
                        </div>
                    </div>
                </div>
                <div className="modal-footer border-top-0">
                    <button type="button" className="btn btn-success btn-lg border-0 btnColor"
                        data-dismiss="modal">Cancelar</button>
                    <button type="button" className="btn btn-success btn-lg btnColor create" 
                        id="saveContactModalBtn">Guardar Venta</button>
                </div>
            </div>
        </div>
    </div>

    {/* END New Contacts Modal */}

    {/* Modify Contacts Modal */}

    <div className="modal fade" id="editContactModal" tabindex="-1">
        <div className="modal-dialog modal-dialog-centered modal-xl">
            <div className="modal-content">
                <div className="modal-header barColor new-contact-modal-header">
                    <h1 className="title m-0 text-white">Actualizar Venta</h1>
                    <button type="button" className="close text-white" data-dismiss="modal">&times;</button>
                </div>
                <div className="modal-body">
                    <div id="editContactForm">
                        <div className="form-group form-row border py-4 px-2 borders-new-user-modal bg-white">
         
                            <div className="col">
                                <label for="editContactName" className="col-form-label col-form-label-sm">ID Cliente<span
                                        className="text-danger">*</span></label>
                                <input type="hidden" id="editContactID"/>
                                <input type="text" className="form-control form-control-sm" id="editContactName"
                                    name="editContactName"/>
                            </div>
                            <div className="col">
                                <label for="editContactLastName" className="col-form-label col-form-label-sm">Nombre del Cliente<span
                                        className="text-danger">*</span></label>
                                <input type="text" className="form-control form-control-sm" id="editContactLastName"
                                    name="editContactLastName"/>
                            </div>
                            <div className="col">
                                <label for="editContactPosition" className="col-form-label col-form-label-sm">Fecha de la Venta<span
                                        className="text-danger">*</span></label>
                                <input type="text" className="form-control form-control-sm" id="editContactPosition"
                                    name="editContactPosition"/>
                            </div>
                
                        </div>
                        <div className="form-group form-row contact-channel-info">
                            <div className="col">
                                <label for="editContact_regionSelectID" className="col-form-label col-form-label-sm">Vendedor<span
                                        className="text-danger">*</span></label>
                                <select className="form-control form-control-sm" name="editContact_regionSelectID" id="editContact_regionSelectID">
                                    <option selected selected disabled value="0">Seleccionar Vendedor</option>
                                    <option value="Marisol Vanegas">Marisol Vanegas</option>
                                    <option value="Diego Parra">Diego Parra</option>

                                </select>
                            </div>
                            <div className="col">
                                <label for="editContact_countrySelectID" className="col-form-label col-form-label-sm">Estado de la Venta<span
                                        className="text-danger">*</span></label>
                                <select className="form-control form-control-sm" name="editContact_countrySelectID" id="editContact_countrySelectID">
                                    <option selected selected disabled value="0">Seleccionar Estado</option>
                                    <option value="En Proceso">En Proceso</option>
                                    <option value="Entregada">Entregada</option>
                                    <option value="Cancelada">Cancelada</option>

                                </select>
                            </div>
                        </div>
                        <div className="form-group form-row ">
                            <div className="col">
                                <label for="editContactChannel" className="col-form-label col-form-label-sm">Productos</label>
                                <select className="form-control form-control-sm" name="editContactChannel"
                                    id="editContactChannel">
                                    <option selected disabled value="Seleccionar canal">Seleccionar Producto</option>
                                    <option value="Producto 001">Producto 001</option>
                                    <option value="Producto 002">Producto 002</option>
                                    <option value="Producto 003">Producto 003</option>
                                    <option value="Producto 004">Producto 004</option>
                                   
                                </select>
                            </div>
                            <div className="col">
                                <label for="editProductPrice" className="col-form-label col-form-label-sm">Precio Unitario</label>
                                <input type="text" className="form-control form-control-sm" disabled id="editProductPrice"
                                    name="editProductPrice"/>
                            </div>
                            <div className="col">
                                <label for="editProductCant" className="col-form-label col-form-label-sm">Cantidad</label>
                                    <input type="text" className="form-control form-control-sm" id="editProductCant" name="editProductCant"/>
                            </div>
                            <div className="col">
                                <label for="editProductSubTotal" className="col-form-label col-form-label-sm">Sub Total<span
                                        className="text-danger">*</span></label>
                                <input type="text" className="form-control form-control-sm" disabled id="editProductSubTotal" name="editProductSubTotal"/>
                            </div>
                            <div className="col">
                                <button type="button" className="btn btn-secondary text-black btn-sm ml-3 buttonTreeAdd newChanelBtn" id="editContactNewChannelBtn" > <i className="fas fa-plus"></i> Agregar Producto</button>    
                        </div>
                        </div>
                        <div className="form-group form-row mt-4 mb-0">
                            <label className="col-form-label col-form-label-sm"><span
                                    className="text-danger">Valor Total de la Venta: $ </span></label>
                        </div>
                        <div className="form-group form-row mt-4 mb-0">
                            <label className="col-form-label col-form-label-sm"><span
                                    className="text-danger">*</span>Información requerida</label>
                        </div>
                    </div>
                </div>
                <div className="modal-footer border-top-0">
                    <button type="button" className="btn btn-success  btn-lg border-0 btnColor border-0"
                        data-dismiss="modal">Cancelar</button>
                    <button type="button" className="btn btn-success btn-lg border-0 btnColor update-button"
                         id="editContactModalBtn">Actualizar Venta</button>
                </div>
            </div>
        </div>
    </div>

    {/* END Modify Contacts Modal */}

    <div className="error-msg"></div>

    {/* Scripts */}

    {/* jQuery, Popper and Bootstrap JS */}

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
        integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js"
        integrity="sha384-+YQ4JLhjyBLPDQt//I+STsc9iw4uQqACwlvpslubQzn4u2UU2UFM80nGisd026JF"
        crossorigin="anonymous"></script>

    {/* END jQuery, Popper and Bootstrap JS */}

    <script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js"></script>

    <script src="https://kit.fontawesome.com/7396023e43.js" crossorigin="anonymous"></script>

   

    {/* END Scripts */}

    </div>
    )
}

export default Ventas
