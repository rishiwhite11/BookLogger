(function() {

    var app = angular.module('app', []);
        app.provider('books',['constants',function(constants){
        this.$get = function(){
            var appName = constants.APP_TITLE
            var appDesc = constants.APP_DESCRIPTION;
            var version = constants.APP_VERSION;
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
    }]);
    app.config(['booksProvider', 'constants','dataServiceProvider',function(booksProvider, constants, dataServiceProvider){
        booksProvider.setincludeVersionTitle(true);
        console.log('title from the services '+constants.APP_DESCRIPTION);
        console.log(dataServiceProvider.$get());
    }])

}());