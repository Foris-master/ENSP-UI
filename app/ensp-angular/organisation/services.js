/**
 * Created by Thedward on 08/12/2015.
 */

/******************************************************************************************************************
 services pour le module Organisation
 *****************************************************************************************************************/
app_organisation
    .factory('OrganisationFactory', function ($http,$filter,$q) {


        var factory = {
            organisations: false,
            organisation: false,
            getOrganisations: function () {
                var deferred = $q.defer();
                //if (factory.organisations !== false) {
                //    deferred.resolve(factory.organisations);
                //} else {

                    $http.get("ressources/organisation.json").success(function(data,status){
                        factory.organisations = data;

                        deferred.resolve(factory.organisations);

                    }).error(function(data,status){
                        console.log(status);
                        deferred.reject('Impossible de recuperer les organisations');
                    });

                //}

                return deferred.promise;

            },
            getOrganisation: function (id) {
                var deffered = $q.defer();
                var organisations = factory.getOrganisations().then(function(services){
                    deffered.resolve($filter('filter')(factory.organisations,{idOrganisation:parseInt(id)},true)[0]);
                },function(msg){
                    deffered.reject(msg);
                });
                return deffered.promise;



            },
            getOrganisationObjet: function (obj) {
                console.log(obj)
                var deffered = $q.defer();
                var organisations = factory.getOrganisations().then(function(services){
                    deffered.resolve($filter('filter')(factory.organisations,obj,true)[0]);
                },function(msg){
                    deffered.reject(msg);
                });
                return deffered.promise;



            },
            addOrganisation: function (organisation) {
                var defferd = $q.defer();
                factory.getOrganisations().then(function(res){
                    console.log(factory.organisations);
                    factory.organisations.push(organisation);
                })


                return defferd.promise;
            }
        }

        return factory

    });

