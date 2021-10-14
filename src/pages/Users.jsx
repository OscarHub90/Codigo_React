import React from 'react'
import tech_fun_horizontal_white from 'assets/tech_fun_horizontal_white.png';
import user_not_found from 'assets/user_not_found.png';
import frame from 'assets/frame.png';
import avatar_user from 'assets/avatar_user.png';
import {Link} from 'react-router-dom'

const Users = () => {
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
      <Link to='/Productos'>
        <div className="nav-link mx-1" href="./products.htmll">Productos</div>
      </Link>
        <a className="nav-link mx-1 active" href="#" id="navLinkUsers">Usuarios<span className="sr-only">(current)</span></a>
        
      </div>
    </div>
  </nav>

  <main className="main mx-4">
    <section>
      <h1 className="title mt-5 mb-3">Usuarios</h1>

      {/* Search Bar  */}

      <div className="d-flex flex-row justify-content-between " >
        <div className="d-flex flex-row hiddenControl">
          <div className="input-group filter mr-2">
            <input type="text" className="form-control" aria-label="Text input with dropdown button"/>
          </div>

          {/* Button Search */}

          <button type="button" className="btn btn-outline-secondary btn-search"><i className="fa fa-search"
              aria-hidden="true"></i></button>

        </div>

        {/* New User Button */}

        <div className="col">
          <button type="button" className="btn btn-size float-right btnColor" data-toggle="modal" data-target="#newUserModal" id="addUserBtnModal">Agregar
            Usuarios</button>
        </div>

        {/* END New User Button */}

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

            <th className="align-middle pl-5" scope="col">Nombre(s)</th>
            <th className="align-middle" scope="col">Apellido(s)</th>
            <th className="align-middle pl-5" scope="col">Email</th>
            <th className="align-middle" scope="col">Perfil</th>
            <th className="align-middle" scope="col">Estado</th>
            <th className="align-middle" scope="col">Acciones</th>
          </tr>  
        </thead>

        <tbody className="users-body-table" id="users-body-table">

          <tr>
            <td className="align-middle pl-5">Johana</td>
            <td className="align-middle">Ramírez</td>
            <td className="align-middle pl-5">jramirez@techfun.com </td>
            <td className="align-middle">Vendedor</td>
            <td className="align-middle">Pendiente</td>
            <td className="align-middle">
                <button type="button" className="btn btn-lg text-black-50 ml-n3 delete" data-id="${userID}" data-toggle="modal" data-target="#deleteUserModal"><i className="fa fa-trash-alt" aria-hidden="true"></i></button>
                <button type="button" className="btn btn-lg text-black-50 edit" data-id="${userID}" data-toggle="modal" data-target="#editUserModal"><i className="fa fa-pencil-alt" aria-hidden="true"></i></button>
            </td>
          </tr>
          <tr>
            <td className="align-middle pl-5">Oscar</td>
            <td className="align-middle">Clavijo</td>
            <td className="align-middle pl-5">oclavijo@techfun.com </td>
            <td className="align-middle">Administrador</td>
            <td className="align-middle">No Autorizado</td>
            <td className="align-middle">
                <button type="button" className="btn btn-lg text-black-50 ml-n3 delete" data-id="${userID}" data-toggle="modal" data-target="#deleteUserModal"><i className="fa fa-trash-alt" aria-hidden="true"></i></button>
                <button type="button" className="btn btn-lg text-black-50 edit" data-id="${userID}" data-toggle="modal" data-target="#editUserModal"><i className="fa fa-pencil-alt" aria-hidden="true"></i></button>
            </td>
          </tr>
          <tr>
            <td className="align-middle pl-5">Diego</td>
            <td className="align-middle">Parra</td>
            <td className="align-middle pl-5">dparra@techfun.com </td>
            <td className="align-middle">Vendedor</td>
            <td className="align-middle">Autorizado</td>
            <td className="align-middle">
                <button type="button" className="btn btn-lg text-black-50 ml-n3 delete" data-id="${userID}" data-toggle="modal" data-target="#deleteUserModal"><i className="fa fa-trash-alt" aria-hidden="true"></i></button>
                <button type="button" className="btn btn-lg text-black-50 edit" data-id="${userID}" data-toggle="modal" data-target="#editUserModal"><i className="fa fa-pencil-alt" aria-hidden="true"></i></button>
            </td>
          </tr>
          <tr>
            <td className="align-middle pl-5">Marisol</td>
            <td className="align-middle">Vanegas</td>
            <td className="align-middle pl-5">mvanegas@techfun.com</td>
            <td className="align-middle">Administrador</td>
            <td className="align-middle">Autorizado</td>
            <td className="align-middle">
                <button type="button" className="btn btn-lg text-black-50 ml-n3 delete" data-id="${userID}" data-toggle="modal" data-target="#deleteUserModal"><i className="fa fa-trash-alt" aria-hidden="true"></i></button>
                <button type="button" className="btn btn-lg text-black-50 edit" data-id="${userID}" data-toggle="modal" data-target="#editUserModal"><i className="fa fa-pencil-alt" aria-hidden="true"></i></button>
            </td>
          </tr>
            <tr>
            <td className="align-middle pl-5">Diana</td>
            <td className="align-middle">Pineda Prada</td>
            <td className="align-middle pl-5">dprada@techfun.com </td>
            <td className="align-middle">Vendedor</td>
            <td className="align-middle">Autorizado</td>
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
          <p className="pt-4">¿Seguro que deseas eliminar el usuarios seleccionado?</p>
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
          <h1 className="title m-0 text-white">Nueva Venta</h1>
          <button type="button" className="close text-white" data-dismiss="modal">&times;</button>
        </div>
        <div className="modal-body">
          <div id="newUserForm">
            <div className="form-group form-row border py-4 px-2 borders-new-user-modal bg-white">
              <div className="col- position-relative ml-2 mr-3">

                <div className="imgBtnAddPic">
                  {/*
                  <img src="../assets/frame_avatar.png" alt="Agregar Imagen" className="imgBtnAddPic__userImg" />  */}

                  <img src={frame} alt="User Frame" className="imgBtnAddPic__frame" />
                  <img src={avatar_user} alt="User Image" className="imgBtnAddPic__frame--img"
                    id="editUserImage" />

                </div>
              </div>
              <div className="col">
                <label for="newUserName" className="col-form-label col-form-label-sm">Nombre(s)<span
                    className="text-danger">*</span></label>
                <input type="text" className="form-control form-control-sm" id="newUserName" name="newUserName"/>
              </div>
              <div className="col">
                <label for="userLastName" className="col-form-label col-form-label-sm">Apellido<span
                    className="text-danger">*</span></label>
                <input type="text" className="form-control form-control-sm" id="userLastName" name="userLastName"/>
              </div>
              <div className="col">
                <label for="userEmail" className="col-form-label col-form-label-sm">Email<span
                    className="text-danger">*</span></label>
                <input type="email" className="form-control form-control-sm" id="userEmail" name="userEmail" placeholder="chofy@ejemplo.com" title="Por favor, especifique una dirección de correo válida." pattern="/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}
                [a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/"/>
              </div>
            </div>

            <div className="form-group form-row border py-4  borders-new-user-modal bg-white">
              <div className="col- position-relative ml-2 mr-3">

              </div>
              <div className="col">
                <label for="userProfile" className="col-form-label col-form-label-sm">Perfil del Usuario<span
                    className="text-danger">*</span></label>
                <select type="text" className="form-control form-control-sm" id="userProfile" name="userProfile">
                  <option selected disabled value="0">Seleccionar Perfil</option>
                  <option value="Admin">Administrador</option>
                  <option value="Basic">Vendedor</option>
                </select>
              </div>
              <div className="col">
                <label for="newUserPassword" className="col-form-label col-form-label-sm">Password<span
                    className="text-danger">*</span></label>
                <input type="password" className="form-control form-control-sm" id="newUserPassword" name="newUserPassword"/>
              </div>
              <div className="col">
                <label for="newUserPasswordConfirm" className="col-form-label col-form-label-sm">Repetir Password<span
                    className="text-danger">*</span></label>
                <input type="password" className="form-control form-control-sm" id="newUserPasswordConfirm"
                  name="newUserPasswordConfirm"/>
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
            id="createUserBtn">Guardar Usuario</button>
        </div>
      </div>
    </div>
  </div>

  {/* END New Users Modal */}

  {/* Modify Users Modal */}

  <div className="modal fade" id="editUserModal" tabindex="-1">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header new-contact-modal-header barColor">
          <h1 className="title m-0 text-white">Actualizar Usuario</h1>
          <button type="button" className="close text-white" data-dismiss="modal">&times;</button>
        </div>
        <div className="modal-body">
          <div id="editContactForm">
            <div className="form-group form-row border py-4 px-2 borders-new-user-modal bg-white">
              <div className="col- position-relative ml-2 mr-3">

                <div className="imgBtnAddPic">
                  <img src={frame} alt="User Frame" className="imgBtnAddPic__frame" />
                  <img src={avatar_user} alt="User Image" className="imgBtnAddPic__frame--img"
                    id="editUserImage" />
                  <input type="hidden" id="userID" name="userID"/>
                </div>

              </div>
              <div className="col">
                <label for="editUserName" className="col-form-label col-form-label-sm">Nombre(s)</label>
                <input type="text" className="form-control form-control-sm" id="editUserName" name="editUserName"/>
              </div>
              <div className="col">
                <label for="editUserLastName" className="col-form-label col-form-label-sm">Apellido</label>
                <input type="text" className="form-control form-control-sm" id="editUserLastName" name="editUserLastName"/>
              </div>
              <div className="col">
                <label for="editUserEmail" className="col-form-label col-form-label-sm">Email</label>
                <input type="email" className="form-control form-control-sm" id="editUserEmail" name="editUserEmail" placeholder="chofy@ejemplo.com" title="Por favor, especifique una dirección de correo válida." pattern="/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}
                [a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/"/>
              </div>
            </div>

            <div className="form-group form-row border py-4  borders-new-user-modal bg-white">
              <div className="col- position-relative ml-2 mr-3">

              </div>

              <div className="col">
                <label for="editUserProfile" className="col-form-label col-form-label-sm">Perfil del Usuario</label>
                <select type="text" className="form-control form-control-sm" id="editUserProfile" name="editUserProfile">
                  <option selected disabled value="0">Seleccionar Perfil</option>
                  <option value="Admin">Administrador</option>
                  <option value="Basic">Vendedor</option>
                </select>
              </div>
              <div className="col">
                <label for="editUserState" className="col-form-label col-form-label-sm">Estado del Usuario</label>
                <select type="text" className="form-control form-control-sm" id="editUserState" name="editUserState">
                  <option selected disabled value="0">Seleccionar Estado</option>
                  <option value="Enabled">Pendiente</option>
                  <option value="Disabled">Autorizado</option>
                  <option value="Disabled">No Autorizado</option>
                </select>
              </div>
              <div className="col">
                <label for="editUserPassword" className="col-form-label col-form-label-sm">Password</label>
                <input type="password" className="form-control form-control-sm" id="editUserPassword"
                  name="editUserPassword"/>
              </div>

            </div>

          </div>
        </div>
        <div className="modal-footer border-top-0">
          <button type="button" className="btn btn-success  btn-lg border-0 btnColor border-0"
            data-dismiss="modal">Cancelar</button>
          <button type="button" className="btn btn-success btn-lg  create btnColor border-0" id="editUserBtn"
            >Actualizar contacto</button>
        </div>
      </div>
    </div>
  </div>

  {/* END Modify Users Modal */}

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

export default Users
