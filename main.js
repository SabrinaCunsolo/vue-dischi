// Rifate l'esercizio dei dischi nella versione base, cioè fare una chiamata ajax per recuperare una decina di dischi musicali e utilizzando vue, stampare a schermo una card per ogni album.
// L'API da chiamare è: https://flynn.boolean.careers/exercises/api/array/music
// BONUS 1: Creare una select con tutti i generi dei dischi. In base al genere che viene selezionato nella select, vengono visualizzati i cd corrispondenti.
// N.B.: per fare questo punto non è necessario modificare l'array dei dati
// BONUS 2: Ordinare i dischi per anno di uscita.
// Nome repo: vue-dischi

var app = new Vue ({
    el: '#root',
    data: {
        arrayDischi: []
    },

    mounted() {
        var self = this;

        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
        .then(function(risp) {
            self.arrayDischi = cd.data.response;
            console.log(self.arrayDischi);


        });
    }
})
