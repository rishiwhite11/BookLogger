(function() {

    var app = angular.module('app', []);
        app.provider('books',function(){
        this.$get = function(){
            var appName = 'Book Logger';
            var appDesc = 'Track your books';
            var version = '1.0';
            if(includeVersionTitle){
                appName+=' '+version;
            }
            return{
                appName: appName,
                appDesc: appDesc
            };
        };
            var includeVersionTitle = false;
            this.setincludeVersionTitle = function(value){
                includeVersionTitle = value;
            };
    });
    app.config(function(booksProvider){
        booksProvider.setincludeVersionTitle(true);
    })

}());