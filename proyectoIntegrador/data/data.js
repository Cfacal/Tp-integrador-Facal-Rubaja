const Email = document.getElementById('Email').value;
const usuario = document.getElementById('usuario').value;
const Contraseña = document.getElementById('Contraseña').value;
const Fecha = document.getElementById('Fecha').value;
const Documento = document.getElementById('Documento').value;
const Foto = document.getElementById('Foto').value;


const data = {
    usuario: {
        Email: Email,
        usuario: usuario,
        Contraseña: Contraseña,
        Fecha: Fecha,
        Documento: Documento,
        Foto: Foto
    }
}


data.usuario

export default data;

