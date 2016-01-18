/**
 * Created by evari on 17/11/2015.
 */

/******************************************************************************************************************
 services pour le module Article
 *****************************************************************************************************************/
app_article
    .factory('ArticleFactory', ['$http','$filter','$q',
    function ($http,$filter,$q) {


        var factory = {
            articles: false,
            article: false,
            categories:false,
            getCategories:function(){
                var deferred = $q.defer();
                if(factory.categories !== false){
                    
                    deferred.resolve(factory.categories);

                }else{
                   $http.get(host_url+"categorie/").success(function(data,status){
                        factory.categories = data;
                        //console.log(data);

                        deferred.resolve(factory.categories);

                    }).error(function(data,status){
                        console.log(status);
                        deferred.reject('Impossible de recuperer les categories');
                    });

                }

                return deferred.promise;
                

            },
            getArticles: function () {
                var deferred = $q.defer();
                if (factory.articles !== false) {
                    deferred.resolve(factory.articles);
                } else {

                    $http.get(host_url+"article/").success(function(data,status){
                        factory.articles = data;
                        //console.log(data);

                        deferred.resolve(factory.articles);

                    }).error(function(data,status){
                        console.log(status);
                        deferred.reject('Impossible de recuperer les articles');
                    });

                }

                return deferred.promise;

            },
            getArticle: function (obj) {
                var deffered = $q.defer();
                var articles = factory.getArticles().then(function(services){
                    deffered.resolve($filter('filter')(factory.articles,obj,true)[0]);
                },function(msg){
                    deffered.reject(msg);
                });
                return deffered.promise;



            },
            /**
             * Cette fonction permet d'avoir des articles suivant une categorie particuliere
             * @param obj
             * @returns {Function|promise}
             */
            getSpecifiqueArticles: function (obj) {
                var deffered = $q.defer();
                var that =this;
                var rs;
                factory.getCategories().then(function(services){
                    //deffered.resolve($filter('filter')(factory.articles,obj,true)[0]);
                    rs=$filter('filter')(factory.categories,obj,true);
                    $http.get(host_url+"article/?idCategorie="+rs[0].iD).success(function(data,status){
                        //factory.articles = data;

                        deffered.resolve(data);

                    }).error(function(data,status){
                        console.log(status);
                        deffered.reject('Impossible de recuperer les articles');
                    });
                },function(msg){
                    deffered.reject(msg);
                });
             
                
                
//                var articles = factory.getArticles().then(function(services){
//                    deffered.resolve($filter('filter')(factory.articles,obj,true));
//                },function(msg){
//                    deffered.reject(msg);
//                });
                return deffered.promise;



            },
            addArticle: function (article,images) {
                var defferd = $q.defer();
                factory.getArticles().then(function(res){
                  //  console.log(factory.articles);
                factory.articles.push(article);
                
                
                })
                
               
               var fd = new FormData();
               console.log(article);
               angular.forEach(images, function(p){
                
                 fd.append('file',p);

            });
               //fd.append('file',images);
               fd.append('data',angular.toJson(article,true));
            
//                console.log(fd);
//                var request = new XMLHttpRequest();
//                request.open('POST',host_url+'article/');
//                request.send(fd);
               $http.post(host_url+'article/', fd, {
                  transformRequest: angular.identity,
                  headers: {'Content-Type': undefined}
               })
            
               .success(function(){
                   console.log('yes');
               })
            
               .error(function(){
               });
            


                return defferd.promise;
            }
        }

        return factory

    }]);

