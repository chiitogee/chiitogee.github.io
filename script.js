const playButton = document.getElementById('playButton');
const kart = document.getElementById('kart');
const itemBox = document.getElementById('itemBox');

playButton.addEventListener('click', startAnimation);

function startAnimation() {
    playButton.classList.add('hidden');

    itemBox.classList.remove('hidden');

    kart.classList.remove('hidden');
    kart.classList.add('drive');

    // Zeige das Item-Roulette nach der Fahrt
    setTimeout(() => {
        // Box verstecken
        itemBox.classList.add('hidden');

        const roulette = document.getElementById('itemRoulette');
        const strip = document.getElementById('itemStrip');
        roulette.style.display = 'block';

        // Stoppe das Spinnen nach 3 Sekunden
        setTimeout(() => {
            strip.style.animation = 'none'; // Stoppt Animation
            const gutschein = document.getElementById('gutschein');
            gutschein.classList.add('show');
        }, 3000);
    }, 1700); // Wenn Kart an der Box ist
}