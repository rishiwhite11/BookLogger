/**
 * Created by maybasu on 10/23/2016.
 */
(function(){
    angular.module('app').factory('dataService',['$q', '$timeout','logger',dataService]);
    function dataService($q,$timeout,logger){
        return{
            getAllBooks: getAllBooks,
            getAllReaders: getAllReaders
        };
        function getAllBooks(){
            logger.output('Inside books')
            var booksArray=  [
                {
                    book_id: 1,
                    title: 'Wings of fire',
                    author: 'Kalam',
                    year_published: 1999
                },
                {
                    book_id: 2,
                    title: 'Wings of fire',
                    author: 'Kalam',
                    year_published: 1999
                },
                {
                    book_id: 3,
                    title: 'Wings of fire',
                    author: 'Kalam',
                    year_published: 1999
                },
                {
                    book_id: 4,
                    title: 'Wings of fire',
                    author: 'Kalam',
                    year_published: 1999
                }
            ]
            var deferred = $q.defer();
            $timeout(function () {
                var successful = true;
                if(successful){
                    deferred.notify('Process has just started');
                    deferred.notify('Almost done');
                    deferred.resolve(booksArray);
                }else{
                    deferred.reject('Error retrieving books');
                }
            },1000)
            return deferred.promise;
        }
        function getAllReaders(){
            logger.output('Getting all the readers');
            return[
                {
                    reader_id:1,
                    name:'Mayukh',
                    weeklyReadingGoal: 230,
                    totalMinutesRead:5600
                },
                {
                    reader_id:2,
                    name:'Mayukh',
                    weeklyReadingGoal: 230,
                    totalMinutesRead:5600
                },
                {
                    reader_id:3,
                    name:'Mayukh',
                    weeklyReadingGoal: 230,
                    totalMinutesRead:5600
                },
                {
                    reader_id:4,
                    name:'Mayukh',
                    weeklyReadingGoal: 230,
                    totalMinutesRead:5600
                },
            ]
        }

    }
    dataService.$inject = ['logger'];
}());
