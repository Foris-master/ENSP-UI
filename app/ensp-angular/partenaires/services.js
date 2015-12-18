/**
 * Created by Thedward on 18/12/2015.
 */

/******************************************************************************************************************
 services pour le module Partenaire
 *****************************************************************************************************************/
app_partenaire
    .factory('PartenaireFactory', ['$http','$filter','$q',
    function ($http,$filter,$q) {


        var factory = {
            partenaires: false,
            partenaire: false,
            getPartenaires: function () {
                var deferred = $q.defer();
                //if (factory.partenaires !== false) {
                //    deferred.resolve(factory.partenaires);
                //} else {

                    $http.get("ressources/partenaire.json").success(function(data,status){
                        factory.partenaires = data;

                        deferred.resolve(factory.partenaires);

                    }).error(function(data,status){
                        console.log(status);
                        deferred.reject('Impossible de recuperer les partenaires');
                    });

                //}

                return deferred.promise;

            },
            getPartenaire: function (id) {
                var deffered = $q.defer();
                var partenaires = factory.getPartenaires().then(function(services){
                    deffered.resolve($filter('filter')(factory.partenaires,{idPartenaire:parseInt(id)},true)[0]);
                },function(msg){
                    deffered.reject(msg);
                });
                return deffered.promise;



            },
            getPartenaireObjet: function (obj) {
                console.log(obj)
                var deffered = $q.defer();
                var partenaires = factory.getPartenaires().then(function(services){
                    deffered.resolve($filter('filter')(factory.partenaires,obj,true)[0]);
                },function(msg){
                    deffered.reject(msg);
                });
                return deffered.promise;



            },
            addPartenaire: function (partenaire) {
                var defferd = $q.defer();
                factory.getPartenaires().then(function(res){
                    console.log(factory.partenaires);
                    factory.partenaires.push(partenaire);
                })


                return defferd.promise;
            }
        }

        return factory

    }]);

