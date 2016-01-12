/**
 * Created by Thedward on 18/12/2015.
 */

/******************************************************************************************************************
 services pour le module Laboratoire
 *****************************************************************************************************************/
app_laboratoire
    .factory('LaboratoireFactory', ['$http','$filter','$q',
    function ($http,$filter,$q) {


        var factory = {
            laboratoires: false,
            laboratoire: false,
            getLaboratoires: function () {
                var deferred = $q.defer();
                //if (factory.laboratoires !== false) {
                //    deferred.resolve(factory.laboratoires);
                //} else {

                    $http.get(host_url+"laboratoire").success(function(data,status){
                        factory.laboratoires = data;

                        deferred.resolve(factory.laboratoires);

                    }).error(function(data,status){
                        console.log(status);
                        deferred.reject('Impossible de recuperer les laboratoires');
                    });

                //}

                return deferred.promise;

            },
            getLaboratoire: function (id) {
                var deffered = $q.defer();
                var laboratoires = factory.getLaboratoires().then(function(services){
                    deffered.resolve($filter('filter')(factory.laboratoires,{idLaboratoire:parseInt(id)},true)[0]);
                },function(msg){
                    deffered.reject(msg);
                });
                return deffered.promise;

            },
            getLaboratoireObjet: function (obj) {
                console.log(obj)
                var deffered = $q.defer();
                var laboratoires = factory.getLaboratoires().then(function(services){
                    deffered.resolve($filter('filter')(factory.laboratoires,obj,true)[0]);
                },function(msg){
                    deffered.reject(msg);
                });
                return deffered.promise;
            },
            addLaboratoire: function (laboratoire) {
                var defferd = $q.defer();
                factory.getLaboratoires().then(function(res){
                    console.log(factory.laboratoires);
                    factory.laboratoires.push(laboratoire);
                })


                return defferd.promise;
            }
        }

        return factory

    }]);

