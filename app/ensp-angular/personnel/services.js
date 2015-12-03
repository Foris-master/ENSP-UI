/**
 * Created by Thedward on 21/11/2015.
 */

/******************************************************************************************************************
 services pour le module Personnel
 *****************************************************************************************************************/
app_personnel
    .factory('PersonnelFactory', function ($http,$filter,$q) {


        var factory = {
            personnels: false,
            personnel: false,
            getPersonnels: function () {
                var deferred = $q.defer();
                //if (factory.personnels !== false) {
                //    deferred.resolve(factory.personnels);
                //} else {

                    $http.get("ressources/personnel.json").success(function(data,status){
                        factory.personnels = data;

                        deferred.resolve(factory.personnels);

                    }).error(function(data,status){
                        console.log(status);
                        deferred.reject('Impossible de recuperer les personnels');
                    });

                //}

                return deferred.promise;

            },
            getPersonnel: function (id) {
                var deffered = $q.defer();
                var personnels = factory.getPersonnels().then(function(services){
                    deffered.resolve($filter('filter')(factory.personnels,{idPersonnel:parseInt(id)},true)[0]);
                },function(msg){
                    deffered.reject(msg);
                });
                return deffered.promise;



            },
            addPersonnel: function (personnel) {
                var defferd = $q.defer();
                factory.getPersonnels().then(function(res){
                    console.log(factory.personnels);
                    factory.personnels.push(personnel);
                })


                return defferd.promise;
            }
        }

        return factory

    });

