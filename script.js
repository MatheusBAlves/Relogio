


setInterval( () => {
    const hora = document.getElementById("hora");
    const minutos = document.getElementById("minutos");
    const segundos = document.getElementById("segundos");

    const ampm = document.getElementById("ampm");
    ampm.innerHTML = "";

    const formato = document.getElementById("formato");

    const data = new Date;

    let horaLocal = data.getHours();
    let minutoLocal = data.getMinutes();
    let segundosLocal = data.getSeconds();

    if(!formato.checked){
        if(horaLocal <= 12){
            ampm.innerHTML = "AM";
        }else {
            ampm.innerHTML = "PM";
        }
        horaLocal = horaLocal-12;

    }

    horaLocal = (horaLocal < 10) ? '0' + horaLocal : horaLocal;
    
    minutoLocal = (minutoLocal < 10) ? '0' + minutoLocal : minutoLocal;
    
    segundosLocal = (segundosLocal < 10) ? '0' + segundosLocal : segundosLocal;

    hora.innerHTML = `<p>${horaLocal}</p>`
    minutos.innerHTML = `<p>${minutoLocal}</p>`
    segundos.innerHTML = `<p>${segundosLocal}</p>`
}, 500)
