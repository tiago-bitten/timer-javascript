function relogio() {
    const relogio = document.querySelector('.relogio');

    let timer;
    let second = 0;
    let minute = 0;
    let hour = 0;

    document.addEventListener('click', function (e) {
        const el = e.target;

        if (el.classList.contains('iniciar')) {
            if (relogio.classList.contains('pause')) relogio.classList.remove('pause');
            relogio.classList.add('relogio');
            clearInterval(timer);
            timer = setInterval(function () {
                if (second < 59) {
                    second++;
                    relogio.innerHTML = `${zeroAEsquerda(hour)}:${zeroAEsquerda(minute)}:${zeroAEsquerda(second)}`;

                } else if (minute < 59) {
                    minute++;
                    second = 0;
                    relogio.innerHTML = `${zeroAEsquerda(hour)}:${zeroAEsquerda(minute)}:${zeroAEsquerda(second)}`;

                } else {
                    hour++;
                    minute = 0;
                    second = 0;
                    relogio.innerHTML = `${zeroAEsquerda(hour)}:${zeroAEsquerda(minute)}:${zeroAEsquerda(second)}`;
                }
            }, 1000);
        }

        if (el.classList.contains('pausar')) {
            relogio.classList.remove('relogio')
            relogio.classList.add('pause');
            setTimeout(function () {
                clearInterval(timer);
            }, 0);
        }

        if (el.classList.contains('zerar')) {
            if (relogio.classList.contains('pause')) relogio.classList.remove('pause');
            relogio.classList.add('relogio');
            relogio.innerHTML = '00:00:00';
            second = 0;
            minute = 0;
            hour = 0;
        }
    });

    function zeroAEsquerda(num) {
        return num < 10 ? `0${num}` : num
    }
}

relogio();