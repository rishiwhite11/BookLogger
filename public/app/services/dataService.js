/**
 * Created by maybasu on 10/23/2016.
 */
(function(){
    angular.module('app').factory('dataService',dataService);
    function dataService(logger){
        return{
            getAllBooks: getAllBooks,
            getAllReaders: getAllReaders
        };
        function getAllBooks(){
            logger.output('Inside books')
            return [
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
                },
            ]
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
