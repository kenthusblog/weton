new Vue({
    el: '#apps',
    data: {
        waktus: '',
       },
    computed: {
        waktu : function(){
           var date = new Date()
            switch (date.getHours()) {
                case 5: case 6: case 7: case 8: case 9: case 10:
                    return this.waktus = 'Selamat Pagi...awali harimu dengan senyuman'
                    break;
                case 10: case 11: case 12: case 13: case 14:
                    return this.waktus = 'Selamat Siang'
                    break;
                case 15: case 16: case 17: case 18:
                    return this.waktus = 'Selamat Sore'
                    break;
                case 19: case 20: case 21: case 22: case 23: case 24:
                    return this.waktus = 'Selamat Malam...jaga kesehatan, jangan begadang !'
                    break;
                default:
                    return this.waktus = 'ini sudah jam berapa ? jaga kesehatan lah ! jangan begadang'
                    break;
            }
        }

    }
})
