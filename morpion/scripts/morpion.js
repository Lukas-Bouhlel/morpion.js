(function ($) {
    $.fn.morpion = function () {
        $('#grid').ready(function () {
            let i = 0;
            let j = 0;
            let k = 0;
            const cases = document.querySelectorAll('.cell');
            const currentPlayer = document.querySelector('#currentPlayer span');
            const playerOne = document.querySelector("#playerOne");
            const playerTwo = document.querySelector("#playerTwo");

            function tour() {
                i++;
                return i % 2 === 0 ? 'X' : 'O';
            }

            function afficherGagnant(gagnant) {
                if (gagnant === "X") {
                    alert(`Joueur 1 à gagné !`);
                } else {
                    alert(`Joueur 2 à gagné !`);
                }
                cases.forEach(element => element.innerHTML = '');
                let player = this.innerHTML = tour();
                if (player === "X") {
                    currentPlayer.innerHTML = "1";
                } else {
                    currentPlayer.innerHTML = "2";
                }
                if(this.innerHTML = tour() === "X") {
                    j++;
                    playerOne.innerHTML = j;
                } else {
                    k++;
                    playerTwo.innerHTML = k;
                }
            }

            function egality() {
                alert(`égaliter`);
                cases.forEach(element => element.innerHTML = '');
            }

            function isGagner() {
                // LGN
                if (cases[0].innerHTML !== '' && cases[0].innerHTML === cases[1].innerHTML && cases[1].innerHTML === cases[2].innerHTML) {
                    afficherGagnant(cases[0].innerHTML);
                }
                else if (cases[3].innerHTML !== '' && cases[3].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[5].innerHTML) {
                    afficherGagnant(cases[3].innerHTML);
                }
                else if (cases[6].innerHTML !== '' && cases[6].innerHTML === cases[7].innerHTML && cases[7].innerHTML === cases[8].innerHTML) {
                    afficherGagnant(cases[6].innerHTML);
                }
                // COL
                else if (cases[0].innerHTML !== '' && cases[0].innerHTML === cases[3].innerHTML && cases[3].innerHTML === cases[6].innerHTML) {
                    afficherGagnant(cases[0].innerHTML);
                }
                else if (cases[1].innerHTML !== '' && cases[1].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[7].innerHTML) {
                    afficherGagnant(cases[1].innerHTML);
                }
                else if (cases[2].innerHTML !== '' && cases[2].innerHTML === cases[5].innerHTML && cases[5].innerHTML === cases[8].innerHTML) {
                    afficherGagnant(cases[2].innerHTML);
                }
                // DIAG
                else if (cases[0].innerHTML !== '' && cases[0].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[8].innerHTML) {
                    afficherGagnant(cases[0].innerHTML);
                }
                else if (cases[2].innerHTML !== '' && cases[2].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[6].innerHTML) {
                    afficherGagnant(cases[2].innerHTML);
                }
                //Egalité
                else if (cases[0].innerHTML !== '' && cases[1].innerHTML !== '' && cases[2].innerHTML !== '' && cases[3].innerHTML !== '' && cases[4].innerHTML !== '' && cases[5].innerHTML !== '' && cases[6].innerHTML !== '' && cases[7].innerHTML !== '' && cases[8].innerHTML !== '') {
                    egality();
                }
            }

            function jouer() {
                if (!this.innerHTML) {
                    let player = this.innerHTML = tour();
                    if (player === "O") {
                        currentPlayer.innerHTML = "1";
                    } else {
                        currentPlayer.innerHTML = "2";
                    }
                } 
                isGagner();
            }

            // REJOUER
            $('#replay').click(function () {
                cases.forEach(element => element.innerHTML = '');
                let replayPlayer = currentPlayer.innerHTML;
                if (replayPlayer === "X") {
                    replayPlayer = "1";
                } else {
                    replayPlayer = "2";
                }
                playerOne.innerHTML = "0";
                playerTwo.innerHTML = "0";
                j = 0;
                k = 0;
            })
            cases.forEach(element => element.addEventListener('click', jouer));
        });
    }
    $('#grid').morpion();
}(jQuery));