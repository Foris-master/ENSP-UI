/**
 * Created by evari on 17/11/2015.
 */





/******************************************************************************************************************
 controlleur pour le module actualité
 *****************************************************************************************************************/
app_article
    .controller('ListeArticleCtrl',['$scope','ArticleFactory','$filter','$stateParams',
    function($scope,ArticleFactory,$filter,$stateParams) {
        var cat=$stateParams.categorie;
        if(cat=="palmares"){
            $scope.titre="Nos palamrès";
        }
        else if(cat=="activites"){
            $scope.titre="Activités de recherches";
        }
        $scope.par_page = 15;

        $scope.loadArticle=function(){
            ArticleFactory.getSpecifiqueArticles({categorie:$stateParams.categorie}).then(
                function(data){
                    $scope.actualites=data;
                },function(msg){
                    console.log(msg);
                }
            );

        }

        $scope.changementPage=function(){
            $scope.loadArticle();
        }

        $scope.loadArticle();
    }])
    .controller('ListeActualiteCtrl',['$scope','ArticleFactory','$filter',
        function($scope,ArticleFactory,$filter) {

            $scope.par_page = 15;
            $scope.titre="Actualités";

            $scope.loadActualite=function(){
                ArticleFactory.getSpecifiqueArticles({tag:"actu"}).then(
                    function(data){

                        $scope.actualites=data;

                    },function(msg){
                        console.log(msg);
                    }
                );

            }

            $scope.changementPage=function(){
                $scope.loadActualite();
            }

            $scope.loadActualite();
        }])
    .controller('PresentationCtrl',['$scope','ArticleFactory','$filter',
        function($scope,ArticleFactory,$filter) {
            $scope.titre="Présentation de l'ENSP";

            $scope.loadActualite=function(){
                ArticleFactory.getSpecifiqueArticles({tag:"pres"}).then(
                    function(data){
                        console.log(data);
                        $scope.presentation=data[0];

                    },function(msg){
                        console.log(msg);
                    }
                );

            }

            $scope.changementPage=function(){
                $scope.loadActualite();
            }

            $scope.loadActualite();
        }])
    .controller('ArticleCtrl', ['$scope','$stateParams','ArticleFactory',
    function($scope,$stateParams,ArticleFactory) {
        //recuperation de la article
        ArticleFactory.getArticle({titre:$stateParams.titre}).then(
            function(data){

                $scope.article=data;
                console.log(data);

            },function(msg){
                console.log(msg);
            }
        );

    }])

.controller('FormulaireArticleCtrl', ['$scope','$stateParams','$location','ArticleFactory','$filter',
    function($scope,$stateParams,$location,ArticleFactory,$filter) {
        
    $scope.categories = ArticleFactory.getCategories().then(function(data){
        
        $scope.categories = data;
        
    },function(msg){
                console.err(msg);
            });
    $scope.new_article={};
    
    $scope.new_article.parties=[{soustitre:"",contenue:"",image:""}];
    $scope.addpart = function(){
        $scope.new_article.parties.push({soustitre:"",contenue:"",image:""});
    };
    $scope.removepart = function(pa){
        $scope.new_article.parties.splice($scope.new_article.parties.indexOf(pa), 1);
    };

    //$("#txtEditor").Editor();

    var id=$stateParams.id || null;
    if(id!=null)// Edition d'une publication
    {
        $scope.type="Edition de Concours";
    }
    else // creation d'une publication
    {
        $scope.type="Nouvel Article";
    }
    $scope.save_article = function(){
        var stitre_key="foumfoumspij";
        var contenue_key="famfamspij";
        var images =[];
        var tags = [];
        if($scope.new_article!=false){
            var contenue="";
            var stitre="";
            angular.forEach($scope.new_article.parties, function(p){
                if($scope.new_article.parties.indexOf(p)==0){
                    stitre+=p.soustitre;
                    contenue+=p.contenue;
                }else{
                    stitre+=stitre_key+p.soustitre;
                    contenue+=contenue_key+p.contenue;
                }
                tags.push($scope.new_article.parties.indexOf(p));
                images.push(p.image);

            });
            contenue=stitre+"__sepstitrecontenue__"+contenue;
            var article = {
                titre: $scope.new_article.titre,
                categorie: {iD:$scope.new_article.categorie},
                description:contenue,
                tag:tags,
                

            }
            console.log(article);
            ArticleFactory.addArticle(article,images);
            // $location.path('/liste-publication')
            console.log($scope.new_article);
            console.log(article);

    }else{
            console.log('veullez remplir les champs');
        }

    }
}]);

