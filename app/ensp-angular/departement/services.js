/**
 * Created by Thedward on 21/11/2015.
 */

/******************************************************************************************************************
 services pour le module Departement
 *****************************************************************************************************************/
app_departement
    .factory('DepartementFactory', ['$http','$filter','$q',
    function ($http,$filter,$q) {


        var factory = {
            departements: false,
            departement: false,
            getDepartements: function () {
                var deferred = $q.defer();
                //if (factory.departements !== false) {
                //    deferred.resolve(factory.departements);
                //} else {

                    $http.get("ressources/departement.json").success(function(data,status){
                        factory.departements = data;

                        deferred.resolve(factory.departements);

                    }).error(function(data,status){
                        console.log(status);
                        deferred.reject('Impossible de recuperer les departements');
                    });

                //}

                return deferred.promise;

            },
            getDepartement: function (id) {
                var deffered = $q.defer();
                var departements = factory.getDepartements().then(function(services){
                    deffered.resolve($filter('filter')(factory.departements,{idDepartement:parseInt(id)},true)[0]);
                },function(msg){
                    deffered.reject(msg);
                });
                return deffered.promise;



            },
            getDepartementObjet: function (obj) {
                console.log(obj)
                var deffered = $q.defer();
                var departements = factory.getDepartements().then(function(services){
                    deffered.resolve($filter('filter')(factory.departements,obj,true)[0]);
                },function(msg){
                    deffered.reject(msg);
                });
                return deffered.promise;



            },
            addDepartement: function (departement) {
                var defferd = $q.defer();
                factory.getDepartements().then(function(res){
                    console.log(factory.departements);
                    factory.departements.push(departement);
                })


                return defferd.promise;
            }
        }

        return factory

    }]);

