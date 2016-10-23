(function() {

    angular.module('app')
        .controller('BooksController',['books', 'dataService','logger','badgeService', BooksController]);


    function BooksController(books, dataService,logger,badgeService) {

        var vm = this;
        vm.appName = books.appName;
        dataService.getAllBooks().then(getBooksSuccess, getBooksError,getBooksNotification);
        function getBooksSuccess(books){
            throw 'error in success handler';
            vm.allBooks = books;
        }

        function getBooksError(reason){
            console.log(reason);
        }
        function getBooksNotification(notification){
            console.log('Promise notification '+notification);
        }
        vm.allReaders = dataService.getAllReaders();
        vm.getBadge = badgeService.retrieveBadge;
        logger.output('BookController has been created');
    }


}());