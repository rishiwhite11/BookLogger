/**
 * Created by maybasu on 10/23/2016.
 */
(function(){
    angular.module('app').value('badgeService',{
        retrieveBadge: retrieveBadge
    });
    function retrieveBadge(minutesRead){
        var badge = null;
        switch(true){
            case (minutesRead>5000):
                badge = 'Book Worm'
                break;
            case (minutesRead>2500 && minutesRead<5000):
                badge = 'Page turner'
                break;
            default :
                badge='Getting started'

        }
        return badge;
    }
}());
