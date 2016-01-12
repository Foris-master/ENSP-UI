/**
 * Created by Thedward on 14/12/2015.
 */

/******************************************************************************************************************
 services pour le module Etudiant
 *****************************************************************************************************************/
app_etudiant
    .factory('EtudiantFactory', ['$http','$filter','$q',
    function ($http,$filter,$q) {


        var factory = {
            etudiants: false,
            etudiant: false,
            association:false,
            associations:false,
            getEtudiants: function () {
                var deferred = $q.defer();
                //if (factory.etudiant !== false) {
                //    deferred.resolve(factory.etudiant);
                //} else {

                    $http.get(host_url+"etudiant").success(function(data,status){
                        factory.etudiants = data;
                        console.log(data);
                        deferred.resolve(factory.etudiants);

                    }).error(function(data,status){
                        console.log(status);
                        deferred.reject('Impossible de recuperer les etudiant');
                    });

                //}

                return deferred.promise;

            },
            getEtudiant: function (obj) {
                console.log(obj);
                var deffered = $q.defer();
                var etudiants = factory.getEtudiants().then(function(services){
                    deffered.resolve($filter('filter')(factory.etudiants,obj,true)[0]);
                    console.log($filter('filter')(factory.etudiants,obj))
                    console.log(factory.etudiants);
                    
                },function(msg){
                    deffered.reject(msg);
                });
                return deffered.promise;



            },
            getAssociations: function () {
                var deferred = $q.defer();
                //if (factory.etudiant !== false) {
                //    deferred.resolve(factory.etudiant);
                //} else {

                $http.get(host_url+"association/").success(function(data,status){
                    factory.associations = data;
                    console.log(data);
                    deferred.resolve(factory.associations);

                }).error(function(data,status){
                    console.log(status);
                    deferred.reject('Impossible de recuperer les associations');
                });

                //}

                return deferred.promise;

            },
            getAssociationsEtudiant: function (obj) {
                var deffered = $q.defer();
                var etudiants = factory.getAssociations().then(function(services){
                    deffered.resolve($filter('filter')(factory.associations,obj,true)[0]);
                },function(msg){
                    deffered.reject(msg);
                });
                return deffered.promise;
            },
            getAssociation: function (obj) {
                var deffered = $q.defer();
                var etudiants = factory.getAssociations().then(function(services){
                    deffered.resolve($filter('filter')(factory.associations,obj,true)[0]);
                },function(msg){
                    deffered.reject(msg);
                });
                return deffered.promise;
            },
            addEtudiant: function (etudiant) {
                var defferd = $q.defer();
                factory.getEtudiants().then(function(res){
                    console.log(factory.etudiants);
                    factory.etudiants.push(etudiant);
                });


                return defferd.promise;
            }
        };

        return factory

    }]);

