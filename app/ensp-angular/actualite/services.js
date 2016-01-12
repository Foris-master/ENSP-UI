/**
 * Created by evari on 17/11/2015.
 */

/******************************************************************************************************************
 services pour le module Actualité
 *****************************************************************************************************************/
app_actualite
    .factory('ActualiteFactory', ['$http','$filter','$q',
    function ($http,$filter,$q) {


        var factory = {
            actualites: false,
            actualite: false,
            getActualites: function () {
                var deferred = $q.defer();//factory.actualites !==
                if ( factory.actualites !==false) {
                    deferred.resolve(factory.actualites);
                } else {

                    $http.get("ressources/actualite.json").success(function(data,status){
                        var stitre_key="foumfoumspij";
                        var contenue_key="famfamspij";
                        var ats= [];
                        angular.forEach(data, function(p){
                            p.parties=[];
                           res= p.description.split(contenue_key);

                            for(r in res){
                                st="";
                                sc="";
                                rs=res[r].split(stitre_key);
                                if(rs.length==1){
                                    sc= rs[0];
                                }else{
                                    st=rs[0];
                                    sc=rs[1];
                                }
                                p.parties.push({
                                    "titre":st,
                                    "contenue":sc,
                                    "image":$filter('filter')(p.images,{tag:r})[0].image
                                });
                            }

                            console.log(p);
                            //images.push({image:p.image});

                        });


                        factory.actualites = data;

                        deferred.resolve(factory.actualites);

                    }).error(function(data,status){
                        console.log(status);
                        deferred.reject('Impossible de recuperer les actualites');
                    });

                }

                return deferred.promise;

            },
            getActualite: function (obj) {
                var deffered = $q.defer();
                var actualites = factory.getActualites().then(function(services){
                    deffered.resolve($filter('filter')(factory.actualites,obj,true)[0]);
                },function(msg){
                    deffered.reject(msg);
                });
                return deffered.promise;



            },
            addActualite: function (actualite) {
                var defferd = $q.defer();
                factory.getActualites().then(function(res){
                  //  console.log(factory.actualites);
                    factory.actualites.push(actualite);
                })


                return defferd.promise;
            }
        }

        return factory

    }]);

