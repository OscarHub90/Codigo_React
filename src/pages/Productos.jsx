import React from 'react'
import tech_fun_horizontal_white from 'assets/tech_fun_horizontal_white.png';
import user_not_found from 'assets/user_not_found.png';
import {Link} from 'react-router-dom'




const Productos = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark py-0 barColor ">
    <a className="navbar-brand" href="#">
      <img className="ml-4" src={tech_fun_horizontal_white} width="167" height="59" alt="Tech & Fun Logo" loading="lazy"/>
    </a>
    <div className="collapse navbar-collapse justify-content-end navbar-margin" id="navBar">
      <div className="navbar-nav">
        <Link to='/Ventas'>
        <div className="nav-link mx-1" href="../index.html">Ventas</div>
        </Link>
        <div className="nav-link mx-1" href="#">Productos<span className="sr-only">(current)</span></div>
        <Link to='/Users'>
        <div className="nav-link mx-1 active" href="./users.html" id="navLinkUsers">Usuarios</div>
        </Link>  
      </div>
    </div>
  </nav>

  <main className="main mx-4">
    <section>
      <h1 className="title mt-5 mb-3">Productos</h1>

      {/* Search Bar  */}
      <div className="d-flex flex-row justify-content-between">
        <div className="d-flex flex-row">
            <div className="input-group filter mr-2">
                <input type="text" className="form-control filter-input"
                    aria-label="Text input" id="searchBar"/>
               
            </div>
             {/* Button Search */}

             <button type="button" className="btn btn-outline-secondary btn-search" id="btnSearch"><i className="fa fa-search"
              aria-hidden="true"></i></button>

  </div>

        {/* Modal agregar productos */}
      
        
        <div className="col">
            <button type="button" className="btn btn-size float-right btnColor" data-toggle="modal" 
            data-target="#newUserModal" id="addUserBtnModal">Agregar Productos</button>
        </div>    
        
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
                          
        {/* fin modal agregar productos */}

      </div>
      {/* END Search Bar and Filters */}

      {/* ESTO HAY QUE VALIDARLO NO SE ESTÁ USANDO  */}

      <div className="selected-contacts d-flex justify-content-between align-items-center mt-4 mb-1">
        <button type="button" className="btn btn-xsm btn-tag disable contacts-selected d-none"> </button>
        <button type="button" className="btn btn-outline-primary btn-size border-0 delete-contacts d-none"
          data-toggle="modal" data-target="#deleteUserModal"><i className="fa fa-trash" aria-hidden="true"></i>
          Eliminar Usuarios</button>
      </div>

      {/* Users Grid */}

      <table className="table table-borderless table-bordered table-responsive-lg table-hover">
        <thead>
          <tr className="table-bordered">

            <th className="align-middle pl-5" scope="col">Identificador</th>
            <th className="align-middle" scope="col">Descripción</th>
            <th className="align-middle pl-5" scope="col">Valor</th>
            <th className="align-middle" scope="col">Estado</th>
            <th className="align-middle" scope="col">Acciones</th>
          </tr>  
        </thead>

        <tbody className="users-body-table" id="users-body-table">

          <tr>
            <td className="align-middle pl-5">Producto 001</td>
            <td className="align-middle">...</td>
            <td className="align-middle pl-5">35.000 </td>
            <td className="align-middle">Disponible</td>
            <td className="align-middle">
                <button type="button" className="btn btn-lg text-black-50 ml-n3 delete" data-id="${userID}" data-toggle="modal" data-target="#deleteUserModal"><i className="fa fa-trash-alt" aria-hidden="true"></i></button>
                <button type="button" className="btn btn-lg text-black-50 edit" data-id="${userID}" data-toggle="modal" data-target="#editUserModal"><i className="fa fa-pencil-alt" aria-hidden="true"></i></button>
            </td>
          </tr>
          <tr>
            <td className="align-middle pl-5">Producto 002</td>
            <td className="align-middle">...</td>
            <td className="align-middle pl-5">117.500 </td>
            <td className="align-middle">No disponible</td>
            <td className="align-middle">
                <button type="button" className="btn btn-lg text-black-50 ml-n3 delete" data-id="${userID}" data-toggle="modal" data-target="#deleteUserModal"><i className="fa fa-trash-alt" aria-hidden="true"></i></button>
                <button type="button" className="btn btn-lg text-black-50 edit" data-id="${userID}" data-toggle="modal" data-target="#editUserModal"><i className="fa fa-pencil-alt" aria-hidden="true"></i></button>
            </td>
          </tr>
          <tr>
            <td className="align-middle pl-5">Producto 003</td>
            <td className="align-middle">...</td>
            <td className="align-middle pl-5">22.700 </td>
            <td className="align-middle">Disponible</td>
            <td className="align-middle">
                <button type="button" className="btn btn-lg text-black-50 ml-n3 delete" data-id="${userID}" data-toggle="modal" data-target="#deleteUserModal"><i className="fa fa-trash-alt" aria-hidden="true"></i></button>
                <button type="button" className="btn btn-lg text-black-50 edit" data-id="${userID}" data-toggle="modal" data-target="#editUserModal"><i className="fa fa-pencil-alt" aria-hidden="true"></i></button>
            </td>
          </tr>

        </tbody>
      </table>

      {/* END Users Grid */}

    </section>
  </main>

  {/* Delete Users Modal */}

  <div className="modal fade" id="deleteUserModal" tabindex="-1">
    <div className="modal-dialog modal-dialog-centered modal-sm">
      <div className="modal-content">
        <div className="modal-body text-center mt-1">
          <input type="hidden" id="userIDDelete" name="userIDDelete"/>
          <img src={user_not_found} alt="Delete logo"/>
          <p className="pt-4">¿Seguro que deseas eliminar el producto seleccionado?</p>
        </div>
        <div className="modal-footer border-top-0 justify-content-around">
          <button type="button" className="btn btn-success  btn-lg border-0 btnColor"
            data-dismiss="modal">Cancelar</button>
          <button type="button" className="btn btn-success btn-lg btn-danger delete" data-dismiss="modal"
            id="deleteUserBtn">Eliminar</button>
        </div>
      </div>
    </div>
  </div>
  {/* END Delete Users Modal */}

  {/* NEW Users Modal */}
  <div className="modal fade" id="newUserModal" tabindex="-1">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header barColor  new-contact-modal-header">
          <h1 className="title m-0 text-white">Nuevo Producto</h1>
          <button type="button" className="close text-white" data-dismiss="modal">&times;</button>
        </div>
        <div className="modal-body">
          <div id="newUserForm">
            <div className="form-group form-row border py-4 px-2 borders-new-user-modal bg-white">
              <div className="col- position-relative ml-2 mr-3">
              </div>
              <div className="col">
                <label for="newUserName" className="col-form-label col-form-label-sm">Identificador<span
                    className="text-danger">*</span></label>
                <input type="text" className="form-control form-control-sm" id="newUserName" name="newUserName"/>
              </div>
              <div className="col">
                <label for="userLastName" className="col-form-label col-form-label-sm">Descripción<span
                    className="text-danger">*</span></label>
                <input type="text" className="form-control form-control-sm" id="userLastName" name="userLastName"/>
              </div>
              <div className="col">
                <label for="userEmail" className="col-form-label col-form-label-sm">Valor<span
                    className="text-danger">*</span></label>
                <input type="email" className="form-control form-control-sm" id="userEmail" name="userEmail" title="Por favor, especifique una dirección de correo válida." pattern="/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}
                [a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/"/>
              </div>
            </div>

            <div className="form-group form-row border py-4  borders-new-user-modal bg-white">
              <div className="col- position-relative ml-2 mr-3">
              </div>
              <div className="col">
                <label for="userProfile" className="col-form-label col-form-label-sm">Estado<span
                    className="text-danger">*</span></label>
                <select type="text" className="form-control form-control-sm" id="userProfile" name="userProfile">
                  <option selected disabled value="0">Seleccionar estado</option>
                  <option value="Admin">Disponible</option>
                  <option value="Basic">No disponible</option>
                </select>
              </div>
            </div>
            <div className="form-group form-row mt-4 mb-0">
              <label className="col-form-label col-form-label-sm"><span className="text-danger">*</span>Información
                requerida</label>
            </div>
          </div>
        </div>
        <div className="modal-footer border-top-0">
          <button type="button" className="btn btn-success btn-lg border-0 btnColor"
            data-dismiss="modal">Cancelar</button>
          <button type="button" className="btn btn-success btn-lg btnColor create"
            id="createUserBtn">Guardar Producto</button>
        </div>
      </div>
    </div>
  </div>
  {/* END New Users Modal */}


  <div className="error-msg"></div>

  {/* Scripts */}

  {/* jQuery, Popper and Bootstrap JS */}

  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
    integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
    crossorigin="anonymous"/>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
    integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
    crossorigin="anonymous"/>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js"
    integrity="sha384-+YQ4JLhjyBLPDQt//I+STsc9iw4uQqACwlvpslubQzn4u2UU2UFM80nGisd026JF"
    crossorigin="anonymous"/>

  {/* END jQuery, Popper and Bootstrap JS */}

  <script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js"/>

  <script src="https://kit.fontawesome.com/7396023e43.js" crossorigin="anonymous"/>



  {/* END Scripts */}

        </div>
    )
}

export default Productos
