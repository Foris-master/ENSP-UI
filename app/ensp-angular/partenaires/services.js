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

                    $http.get("ressources/partenaires.json").success(function(data,status){
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

    }])

    .factory('EcoleFactory', ['$http','$filter','$q',
        function ($http,$filter,$q) {


            var factory = {
                ecoles: false,
                ecole: false,
                getEcoles: function () {
                    var deferred = $q.defer();
                    //if (factory.ecoles !== false) {
                    //    deferred.resolve(factory.ecoles);
                    //} else {

                    $http.get("ressources/ecole.json").success(function(data,status){
                        factory.ecoles = data;

                        deferred.resolve(factory.ecoles);

                    }).error(function(data,status){
                        console.log(status);
                        deferred.reject('Impossible de recuperer les ecoles');
                    });

                    //}

                    return deferred.promise;

                },
                getEcole: function (id) {
                    var deffered = $q.defer();
                    var ecoles = factory.getEcoles().then(function(services){
                        deffered.resolve($filter('filter')(factory.ecoles,{idEcole:parseInt(id)},true)[0]);
                    },function(msg){
                        deffered.reject(msg);
                    });
                    return deffered.promise;



                },
                getEcoleObjet: function (obj) {
                    console.log(obj)
                    var deffered = $q.defer();
                    var ecoles = factory.getEcoles().then(function(services){
                        deffered.resolve($filter('filter')(factory.ecoles,obj,true)[0]);
                    },function(msg){
                        deffered.reject(msg);
                    });
                    return deffered.promise;



                },
                addEcole: function (ecole) {
                    var defferd = $q.defer();
                    factory.getEcoles().then(function(res){
                        console.log(factory.ecoles);
                        factory.ecoles.push(ecole);
                    })


                    return defferd.promise;
                }
            }

            return factory

        }]);

