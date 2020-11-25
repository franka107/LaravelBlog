export default {
    data(){
        return {
        }
    },
    methods: {
        async callApi(method, url, dataObj){
            try {
                return await axios({
                    method: method,
                    url: url,
                    data: dataObj
                })
            } catch (e) { 
                return e.response
            }
        },
        i(desc, title = 'Info') {
            this.$Notice.info({
                title,
                desc
            });
        },
        s(desc, title = 'Genial!') {
            this.$Notice.success({
                title,
                desc
            });
        },
        w(desc, title = 'Oops!') {
            this.$Notice.warning({
                title,
                desc
            });
        },
        e(desc, title = 'Hey!') {
            this.$Notice.error({
                title,
                desc
            });
        },
        swr(desc = "Ocurrio un error desconocido, por favor intenta nuevamente", title = 'Hey!') {
            this.$Notice.error({
                title,
                desc
            });
        },

    }
}
