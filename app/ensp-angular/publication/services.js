/**
 * Created by evari on 17/11/2015.
 */


/******************************************************************************************************************
                        services pour le module publications
 *****************************************************************************************************************/
app_publication
.factory('PublicationFactory', ['$http','$filter','$q',
    function ($http,$filter,$q) {


    var factory = {
        publications: false,
        publication: false,
        getPublications: function () {
            var deferred = $q.defer();
            if (factory.publications !== false) {
                deferred.resolve(factory.publications);
            } else {

                $http.get("ressources/publication.json").success(function(data,status){
                    factory.publications = data;

                    deferred.resolve(factory.publications);

                }).error(function(data,status){
                    console.log(status);
                    deferred.reject('Impossible de recuperer les publications');
                });

            }

            return deferred.promise;

        },
        getPublicationsEtudiant: function (obj) {
            console.log(obj)
            var deffered = $q.defer();
            var publications = factory.getPublications().then(function(services){
                deffered.resolve($filter('filter')(factory.publications,obj,true));
            },function(msg){
                deffered.reject(msg);
            });
            return deffered.promise;
        },
        getPublication: function (obj) {
            var deffered = $q.defer();
            var publications = factory.getPublications().then(function(services){
                deffered.resolve($filter('filter')(factory.publications,obj,true)[0]);
            },function(msg){
                deffered.reject(msg);
            });
            return deffered.promise;



        },
        addPublication: function (publication) {
            var defferd = $q.defer();
            factory.getPublications().then(function(res){
                console.log(factory.publications);
                factory.publications.push(publication);
            })


            return defferd.promise;
        }
    }

    return factory

}]);

