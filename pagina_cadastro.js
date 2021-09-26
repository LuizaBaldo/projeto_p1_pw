function validaCPF(cpf){
  console.log('funcao validacpf')
  if (typeof cpf !== "string") return false
    cpf = cpf.replace(/[\s.-]*/igm, '')
    if (
        !cpf ||
        cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999" 
    ) {
        return false
    }
    var soma = 0
    var resto
    for (var i = 1; i <= 9; i++) 
        soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i)
    resto = (soma * 10) % 11
    if ((resto == 10) || (resto == 11))  resto = 0
    if (resto != parseInt(cpf.substring(9, 10)) ) return false
    soma = 0
    for (var i = 1; i <= 10; i++) 
        soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i)
    resto = (soma * 10) % 11
    if ((resto == 10) || (resto == 11))  resto = 0
    if (resto != parseInt(cpf.substring(10, 11) ) ) return false
    return true
}

function validaEmail(field) {
  usuario = field.value.substring(0, field.value.indexOf("@"));
  dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
  
  if ((usuario.length >=1) &&
      (dominio.length >=3) &&
      (usuario.search("@")==-1) &&
      (dominio.search("@")==-1) &&
      (usuario.search(" ")==-1) &&
      (dominio.search(" ")==-1) &&
      (dominio.search(".")!=-1) &&
      (dominio.indexOf(".") >=1)&&
      (dominio.lastIndexOf(".") < dominio.length - 1)) {
    return true;
  }
  else{
    return false;
  }
}

function validar(){
  if(txtNome.value == '' || txtNome.value.length < 3){
    alert("Preencha com seu nome!");
    txtNome.value = '';
    txtNome.focus();
    return false;
  }
  if(txtSobrenome.value == '' || txtSobrenome.value.length < 3){
    alert("Preencha com seu sobrenome!");
    txtSobrenome.value = '';
    txtSobrenome.focus();
    return false;
  }
  if(txtCPF.value ==  '' || validaCPF(txtCPF.value) == false){
    alert("Preencha com um CPF válido!\nFormato: xxx.xxx.xxx-xx");
    txtCPF.value = '';
    txtCPF.focus();
    return false;
  }
  if(txtEmail.value ==  '' || validaEmail(txtEmail.value) == false){
    alert("Informe um e-mail válido!");
    txtEmail.focus();
    txtEmail.value = "";
    return false;
  }

  console.log('tudo certo')
}