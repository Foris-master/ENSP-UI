/**
 * Created by evari on 17/11/2015.
 */

/******************************************************************************************************************
 services pour le module Actualité
 *****************************************************************************************************************/
angular.module('myApp.actualite')
    .factory('ActualiteFactory', function ($http,$filter,$q) {


        var factory = {
            actualites: false,
            actualite: false,
            getActualites: function () {
                var deferred = $q.defer();
                if (factory.actualites !== false) {
                    deferred.resolve(factory.actualites);
                } else {

                    $http.get("ressources/actualite.json").success(function(data,status){
                        factory.actualites = data;

                        deferred.resolve(factory.actualites);

                    }).error(function(data,status){
                        console.log(status);
                        deferred.reject('Impossible de recuperer les actualites');
                    });

                }

                return deferred.promise;

            },
            getActualite: function (id) {
                var deffered = $q.defer();
                var actualites = factory.getActualites().then(function(services){
                    deffered.resolve($filter('filter')(factory.actualites,{idActualite:parseInt(id)},true)[0]);
                },function(msg){
                    deffered.reject(msg);
                });
                return deffered.promise;



            },
            addActualite: function (actualite) {
                var defferd = $q.defer();
                factory.getActualites().then(function(res){
                    console.log(factory.actualites);
                    factory.actualites.push(actualite);
                })


                return defferd.promise;
            }
        }

        return factory

    });

/******************************************************************************************************************
                        services pour le module publications
 *****************************************************************************************************************/
angular.module('myApp.publication')
.factory('PublicationFactory', function ($http,$filter,$q) {


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
        getPublication: function (id) {
            var deffered = $q.defer();
            var publications = factory.getPublications().then(function(services){
                deffered.resolve($filter('filter')(factory.publications,{idPublication:parseInt(id)},true)[0]);
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

});

/******************************************************************************************************************
            services pour le module concours
 *****************************************************************************************************************/

angular.module('myApp.concours')
    .factory('ConcoursFactory', function ($http,$q) {


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
            getPublication: function (id) {
                var deffered = $q.defer();
                var publications = factory.getPublications().then(function(services){
                    deffered.resolve($filter('filter')(factory.publications,{idPublication:parseInt(id)},true)[0]);
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

    });