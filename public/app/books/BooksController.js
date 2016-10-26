(function() {

    angular.module('app')
        .controller('BooksController',['books', '$q','dataService','logger','badgeService', BooksController]);


    function BooksController(books, dataService,badgeService) {

        //var vm = this;
        //vm.appName = books.appName;
        //var booksPromise = dataService.getAllBooks();
        //var readersPromise = dataService.getAllReaders();
        //$q.all([booksPromise,readersPromise])
        //    .then(getAllDataSuccess)
        //    .catch(getAllDataError);
        //function getAllDataSuccess(dataArray){
        //    vm.allBooks = dataArray[0];
        //    vm.allReaders = dataArray[1];
        //}
        //function getAllDataError(reason){
        //    console.log(reason);
        //}

        //dataService.getAllBooks().then(getBooksSuccess, null, getBooksNotification)
        //    .catch(errorCallback)
        //    .finally(getAllBooksComplete);
        //
        //function getBooksSuccess(books){
        //    //throw 'error is success handler';
        //    vm.allBooks = books;
        //}
        ////function getBooksError(reason){
        ////    console.log(reason);
        ////}
        function errorCallback(message){
            console.log('error message is '+message);
        }
        //}
        //function getBooksNotification(notification){
        //    console.log('Notification is '+notification);
        //}
        //function getAllBooksComplete(){
          //  console.log('Get All books completed');
        //}
        dataService.getAllReaders()
            .then(getAllReadersSuccess)
            .catch(errorCallback)
            .finally(getAllReadersComplete);
        function getAllReadersSuccess(readers){
            vm.allReaders = readers;
        }
        function getAllReadersComplete(){
            console.log('get all readers complete');
        }
        vm.getBadge = badgeService.retrieveBadge;


    }


}());