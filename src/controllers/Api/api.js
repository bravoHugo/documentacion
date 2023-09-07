const axios = require("axios");

////Gestión

const getDepartamentos = (req, res) => {
  res.render("pages/Gestion/departamentos.ejs");
}

const getProvincias = (req, res) => {
  res.render("pages/Gestion/provincias.ejs");
}

const getDistritos = (req, res) => {
  res.render("pages/Gestion/distritos.ejs");
}

const getEmpresas = (req, res) => {
  res.render("pages/Gestion/empresas.ejs");
}

const getSucursales = (req, res) => {
  res.render("pages/Gestion/sucursales.ejs");
}

////////Seguridad

const getUsuarios = (req, res) => {
  res.render("pages/Seguridad/usuarios.ejs")
}

const getPerfiles = (req, res) => {
  res.render("pages/Seguridad/perfiles.ejs")
}

/////Compras

const getCompras = (req, res) => {
  res.render("pages/Compras/compras.ejs")
}

const getProveedores = (req, res) => {
  res.render("pages/Compras/proveedores.ejs")
}

const getDetalleCompras = (req, res) => {
  res.render("pages/Compras/detalle_compras.ejs")
}

///Ventas
const getVentas = (req, res) => {
  res.render("pages/Ventas/ventas.ejs")
}

const getCajas = (req, res) => {
  res.render("pages/Ventas/cajas.ejs")
}

const getMesas = (req, res) => {
  res.render("pages/Ventas/mesas.ejs")
}

const getPedidos = (req, res) => {
  res.render("pages/Ventas/pedidos.ejs")
}

const getMenus = (req, res) => {
  res.render("pages/Ventas/menues.ejs")
}

////Almacenes

const getProductos = (req, res) => {
  res.render("pages/Almacenes/productos.ejs")
}

const getCategorias = (req, res) => {
  res.render("pages/Almacenes/categorias.ejs")
}

const getMarcas = (req, res) => {
  res.render("pages/Almacenes/marcas.ejs")
}

const getAlmacenes = (req, res) => {
  res.render("pages/Almacenes/almacenes.ejs")
}

const getDetalleAlmacenes = (req, res) => {
  res.render("pages/Almacenes/detalle_almacenes.ejs")
}

const getDocumentation = (req, res) => {
  res.render("index.ejs")
}

const getCredenciales = (req, res) => {
  res.render("credencialesDocumentation.ejs", {cliente_id:"", llave_secreta:"",message:""})
}

const postCredenciales = async (req, res) => {
  const { nombres, apellidos, correo } = req.body;
  console.log(nombres,apellidos);
  try {
    const data={
      nombres: nombres,
      apellidos: apellidos,
      email: correo,
      estado: 1,
      cliente_id: "",
      llave_secreta:"",
    }
    const response = await axios.post("http://fast.spring.informaticapp.com:9080/token/registros", data);
    const credenciales = response.data;
    const cliente_id = credenciales.cliente_id;
    const llave_secreta = credenciales.llave_secreta;
    res.status(200).json({ cliente_id: cliente_id, llave_secreta: llave_secreta });
  } catch(error) {
    res.render("credencialesDocumentation", { message:error.data });
  }
}

module.exports = {
  postCredenciales,
  getCredenciales,
  getDocumentation,
  getProductos,
  getCategorias,
  getMarcas,
  getAlmacenes,
  getDetalleAlmacenes,
  getUsuarios,
  getVentas,
  getCajas,
  getPedidos,
  getMenus,
  getMesas,
  getPerfiles,
  getCompras,
  getProveedores,
  getDetalleCompras,
  getDepartamentos,
  getProvincias,
  getDistritos,
  getEmpresas,
  getSucursales
}