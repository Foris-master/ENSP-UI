/**
 * Created by evaris on 17/11/2015.
 */


/******************************************************************************************************************
                        services pour le module accueil
 *****************************************************************************************************************/
app_accueil.factory('AccueilFactory', ['$http','$filter','$q',
    function ($http,$filter,$q) {


        var factory = {
            evenements: false,
            evenement: false,
            getEvenements: function () {
                var deferred = $q.defer();
                if (factory.evenements !== false) {
                    deferred.resolve(factory.evenements);
                } else {

                    $http.get("ressources/agenda.json").success(function(data,status){
                        factory.evenements = data;

                        deferred.resolve(factory.evenements);

                    }).error(function(data,status){
                        console.log(status);
                        deferred.reject('Impossible de recuperer les evenements');
                    });

                }

                return deferred.promise;

            },
            getEvenement: function (obj) {
                var deffered = $q.defer();
                var evenements = factory.getEvenements().then(function(services){
                    deffered.resolve($filter('filter')(factory.evenements,obj,true)[0]);
                },function(msg){
                    deffered.reject(msg);
                });
                return deffered.promise;



            },
            addEvenement: function (evenement) {
                var defferd = $q.defer();
                factory.getEvenements().then(function(res){
                    //  console.log(factory.evenements);
                    factory.evenements.push(evenement);
                })


                return defferd.promise;
            }
        }

        return factory

    }]);