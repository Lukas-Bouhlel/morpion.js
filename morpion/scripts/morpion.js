(function ($){
    $.fn.morpion = function(){
        $('#grid').ready(function(){
            let i = 0;
            const cases = document.querySelectorAll('.cell');

            function tour() {
                i++;
                return i % 2 === 0 ? 'O' : 'X';
            }

            function afficherGagnant(gagnant) {
                alert(`${gagnant} a gagné !`);
            }
            // function egaliter(perdant){
            //     alert(`${perdant} egaliter !`);
            // }

            function isGagner() {
            // LGN
                if (cases[0].innerHTML !== '' && cases[0].innerHTML === 
                cases[1].innerHTML && cases[1].innerHTML === cases[2].
                innerHTML) {
                    afficherGagnant(cases[0].innerHTML);
                }
                else if (cases[3].innerHTML !== '' && cases[3].
                innerHTML === cases[4].innerHTML && cases[4].
                innerHTML === cases[5].innerHTML) {
                    afficherGagnant(cases[3].innerHTML);
                } 
                else if (cases[6].innerHTML !== '' && cases[6].
                innerHTML === cases[7].innerHTML && cases[7].
                innerHTML === cases[8].innerHTML) {
                    afficherGagnant(cases[6].innerHTML);
                } 
                // COL
                else if (cases[0].innerHTML !== '' && cases[0].
                innerHTML === cases[3].innerHTML && cases[3].
                innerHTML === cases[6].innerHTML) {
                    afficherGagnant(cases[0].innerHTML);
                } 
                else if (cases[1].innerHTML !== '' && cases[1].
                innerHTML === cases[4].innerHTML && cases[4].
                innerHTML === cases[7].innerHTML) {
                    afficherGagnant(cases[1].innerHTML);
                } 
                else if (cases[2].innerHTML !== '' && cases[2].
                innerHTML === cases[5].innerHTML && cases[5].
                innerHTML === cases[8].innerHTML) {
                    afficherGagnant(cases[2].innerHTML);
                } 
                // DIAG
                else if (cases[0].innerHTML !== '' && cases[0].
                innerHTML === cases[4].innerHTML && cases[4].
                innerHTML === cases[8].innerHTML) {
                    afficherGagnant(cases[0].innerHTML);
                } 
                else if (cases[2].innerHTML !== '' && cases[2].
                innerHTML === cases[4].innerHTML && cases[4].
                innerHTML === cases[6].innerHTML) {
                    afficherGagnant(cases[2].innerHTML);
                } 
                // NULL
                // else if (cases[0].innerHTML !== '' && cases[0].innerHTML !== 
                // cases[1].innerHTML && cases[1].innerHTML !== cases[2].innerHTML &&
                // cases[2].innerHTML !== cases[3].innerHTML && cases[3].innerHTML !== cases[4].innerHTML && cases[4].innerHTML !== 
                // cases[5].innerHTML && cases[5].innerHTML !== cases[6].innerHTML){
                //     egaliter(cases[0].innerHTML);
                // }
            }

            function jouer(){
                if(!this.innerHTML)this.innerHTML = tour();
                isGagner();
            }

            // REJOUER
            $('#replay').click(function(){
                cases.forEach(element => element.innerHTML = '');
            })

            cases.forEach(element => element.addEventListener('click', jouer));
        });     
    }
    $('#grid').morpion();
}(jQuery));