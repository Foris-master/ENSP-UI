/**
 * Created by evari on 17/11/2015.
 */

/******************************************************************************************************************
 controlleur pour le module concours
 *****************************************************************************************************************/
app_concours
    .controller('FormulaireConcoursNiveau1Ctrl', ['$scope','$stateParams','$location','ConcoursFactory','$filter',
    function($scope,$stateParams,$location,ConcoursFactory,$filter) {
        $scope.new_concours = false;
        
        var action=$stateParams.action;
        var id=$stateParams.id || null;
        
        $scope.niveau="1";

        if(action=="inscription")
        {
            $scope.titre="Inscription au concours niveau 1";
        }
        else
        {
            $scope.titre="Modification des paramètres du candidat ";
        }

        $scope.save_concours = function(){
            if($scope.new_concours!=false){
               // CandidatFactory.addCandidat($scope.new_publication);
               // $location.path('/liste-publication')
                console.log($scope.new_concours);
            }else{
                console.log('veullez remplir les champs');
            }

            console.log($scope.new_publication);
        }
    }])
    .controller('FormulaireConcoursNiveau3Ctrl', ['$scope','$stateParams','$location','ConcoursFactory','$filter',function($scope,$stateParams,$location,ConcoursFactory,$filter) {
        $scope.new_concours = false;

        var action=$stateParams.action;
        var id=$stateParams.id || null;

        $scope.niveau="3";

        if(action=="inscription")
        {
            $scope.titre="Inscription au concours niveau 3";
        }
        else
        {
            $scope.titre="Modification des paramètres du candidat ";
        }

        $scope.save_concours = function(){
            if($scope.new_concours!=false){
                // CandidatFactory.addCandidat($scope.new_publication);
                // $location.path('/liste-publication')
                console.log($scope.new_concours);
            }else{
                console.log('veullez remplir les champs');
            }

            console.log($scope.new_publication);
        }
    }])
    .controller('ConcoursCtrl',['$scope','$stateParams','$location','ConcoursFactory','$filter',
    function($scope,$stateParams,$location,ConcoursFactory,$filter) {
        ConcoursFactory.getConcours().then(function(data){
            $scope.concours=data;
            console.log(data);
        })

        $scope.listePiece=function(concour){
            $scope.pieces= concour.pieces;
            $scope.niveau=concour.niveau;
            $('#detail').trigger('click');
        }
    }])
    .controller('ListeCandidatCtrl',['$scope','$stateParams','ConcoursFactory','$filter', function($scope,$stateParams,ConcoursFactory,$filter) {

        $scope.par_page = 15;
        var nv=$stateParams.niveau;
        var indice=1;
        if(nv!="niveau-3" && nv!="niveau-1"){
            nv="niveau 1";
        }
        if(nv=="niveau-3"){
            indice=3;
        }

        $scope.niveau=indice;

        $scope.loadCandidat=function(indice){

            ConcoursFactory.getCandidats({niveau:indice}).then(
                function(data){
                    //console.log(data);
                    $scope.candidats=data;


                },function(msg){
                    console.log(msg);
                }
            );
        }

        $scope.changementPage=function(){
            $scope.loadCandidat();
        }

        $scope.loadCandidat();

        $scope.Identification=function(candidat){
            $("#identificationModal a.close").trigger('click');
            console.log(candidat);
            ConcoursFactory.IdentificationCandidat(candidat).then(function(data){
                console.log(data);
            })


        }
    }]);


