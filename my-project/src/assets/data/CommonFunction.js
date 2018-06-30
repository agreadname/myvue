exports.install = function (Vue, options) {
    /*** 后台报错提示函数 **/
    Vue.prototype.getXhrState=function(err,status){
        switch (status) {
            case 404:
                err.message = '请求地址不存在(404)';
                break;
            case 408:
                err.message = '请求超时(408)';
                break;
            case 500:
                err.message = '服务器错误(500)';
                break;
            case 502:
                err.message = '网络错误(502)';
                break;
            case 503:
                err.message = '服务不可用(503)';
                break;
            case 504:
                err.message = '网络超时(504)';
                break;
            case 505:
                err.message = 'HTTP版本不受支持(505)';
                break;
        }
        this.loading=false;
        this.$alert(err.message, '错误提示', {
            confirmButtonText: '确定',
            type: 'error',
        }).catch(function(err) {});
    };

}
