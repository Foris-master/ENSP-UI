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
            getArticles: function () {
                var deferred = $q.defer();
                if (factory.articles !== false) {
                    deferred.resolve(factory.articles);
                } else {

                    $http.get("ressources/article.json").success(function(data,status){
                        factory.articles = data;

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
                var articles = factory.getArticles().then(function(services){
                    deffered.resolve($filter('filter')(factory.articles,obj,true));
                },function(msg){
                    deffered.reject(msg);
                });
                return deffered.promise;



            },
            addArticle: function (article) {
                var defferd = $q.defer();
                factory.getArticles().then(function(res){
                  //  console.log(factory.articles);
                    factory.articles.push(article);
                })


                return defferd.promise;
            }
        }

        return factory

    }]);

