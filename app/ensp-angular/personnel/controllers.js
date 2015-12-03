/**
 * Created by Thedward on 27/11/2015.
 */


/******************************************************************************************************************
 controlleur pour le module Personnel
 *****************************************************************************************************************/
app_personnel
    .controller('ListePersonnelCtrl', function($scope,$location,PersonnelFactory,$routeParams,$filter,$compile) {

        var categorie=$routeParams.categorie;
        console.log(categorie)
        $scope.titre="Personnel Enseignant";
        if(categorie=="administratif"){
            $scope.titre="Personnel Administratif";
        }

        if(categorie!="enseignant" && categorie!="administratif"){
            $location.path("/liste-personnel/enseignant");
        }

        $scope.t="<h2>qsdqs</h2>";

        $scope.par_page =15;

        $scope.loadPersonnel=function(){
            PersonnelFactory.getPersonnels().then(
                function(data){

                    $scope.personnels=data;
                    //console.log($scope.personnels);

                },function(msg){
                    console.log(msg);
                }
            );

        }

        $scope.changementPage=function(){
            $scope.loadPersonnel();
        }

        $scope.loadPersonnel();
    })
    .controller('PersonnelCtrl', function($scope,$routeParams,PersonnelFactory) {
        //recuperation de la personnel

        PersonnelFactory.getPersonnel($routeParams.id).then(
            function(data){
                $scope.personnel=data;
                console.log(data.projets);

            },function(msg){
                console.log(msg);
            }
        );

    })


.controller('FormulaireArticleCtrl', function($scope,$routeParams,$location,PersonnelFactory,$filter) {
    $scope.new_article = false;

    $("#txtEditor").Editor();
    var id=$routeParams.id || null;
    if(id!=null)// Edition d'une publication
    {
        $scope.type="Edition de Concours";
    }
    else // creation d'une publication
    {
        $scope.type="Nouvel Article";
    }
    $scope.save_article = function(){

        if($scope.new_article!=false){
            $scope.new_article.contenue=$(".Editor-editor").html();
            PersonnelFactory.addPersonnel($scope.new_article);
            // $location.path('/liste-publication')
            console.log($scope.new_article);
        }else{
            console.log('veullez remplir les champs');
        }

        console.log($scope.new_article);
    }
});

