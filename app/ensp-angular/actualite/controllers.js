/**
 * Created by evari on 17/11/2015.
 */





/******************************************************************************************************************
 controlleur pour le module actualité
 *****************************************************************************************************************/
app_actualite
    .controller('ListeActualiteCtrl',['$scope','ActualiteFactory','$filter',
    function($scope,ActualiteFactory,$filter) {

        $scope.par_page = 15;


        $scope.loadActualite=function(){
            ActualiteFactory.getActualites().then(
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
    .controller('ActualiteCtrl', ['$scope','$stateParams','ActualiteFactory',
    function($scope,$stateParams,ActualiteFactory) {
        //recuperation de la actualite
        ActualiteFactory.getActualite({id:$stateParams.id}).then(
            function(data){

                $scope.actualite=data;
                console.log(data);

            },function(msg){
                console.log(msg);
            }
        );

    }])

.controller('View2Ctrl', [function() {

    }])
.controller('FormulaireActualiteCtrl', ['$scope','$stateParams','$location','ActualiteFactory','$filter',
    function($scope,$stateParams,$location,ActualiteFactory,$filter) {
    $scope.categories = [{name:'ecole',id:2},{name:'actuatilite',id:3},{name:'labo',id:4}];
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
        var images =[]
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
                images.push({image:p.image});

            });
            contenue=stitre+"__sepstitrecontenue__"+contenue;
            var article = {
                titre: $scope.new_article.titre,
                categorie: $scope.new_article.categorie,
                contenue:contenue,
                images:images

            }
            ActualiteFactory.addActualite(article);
            // $location.path('/liste-publication')
            console.log($scope.new_article);
            console.log(article);

    }else{
            console.log('veullez remplir les champs');
        }

    }
}]);

