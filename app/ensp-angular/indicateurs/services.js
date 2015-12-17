/**
 * Created by Thedward on 14/12/2015.
 */

/******************************************************************************************************************
 services pour le module Indicateur
 *****************************************************************************************************************/
app_indicateur
    .factory('IndicateurFactory', ['$http','$filter','$q',
    function ($http,$filter,$q) {


        var factory = {
            indicateurs: false,
            indicateur: false,
            getIndicateurs: function () {
                var deferred = $q.defer();
                //if (factory.indicateurs !== false) {
                //    deferred.resolve(factory.indicateurs);
                //} else {

                    $http.get("ressources/indicateur.json").success(function(data,status){
                        factory.indicateurs = data;

                        deferred.resolve(factory.indicateurs);

                    }).error(function(data,status){
                        console.log(status);
                        deferred.reject('Impossible de recuperer les indicateurs');
                    });

                //}

                return deferred.promise;

            },
            getIndicateur: function (id) {
                var deffered = $q.defer();
                var indicateurs = factory.getIndicateurs().then(function(services){
                    deffered.resolve($filter('filter')(factory.indicateurs,{idIndicateur:parseInt(id)},true)[0]);
                },function(msg){
                    deffered.reject(msg);
                });
                return deffered.promise;



            },
            getIndicateurObjet: function (obj) {
                var deffered = $q.defer();
                var indicateurs = factory.getIndicateurs().then(function(services){
                    deffered.resolve($filter('filter')(factory.indicateurs,obj,true)[0]);
                },function(msg){
                    deffered.reject(msg);
                });
                return deffered.promise;



            },
            addIndicateur: function (indicateur) {
                var defferd = $q.defer();
                factory.getIndicateurs().then(function(res){
                    console.log(factory.indicateurs);
                    factory.indicateurs.push(indicateur);
                })


                return defferd.promise;
            }
        }

        return factory

    }]);

