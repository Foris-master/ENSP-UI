/**
 * Created by evari on 17/11/2015.
 */

/******************************************************************************************************************
 controlleur pour le module concours
 *****************************************************************************************************************/
app_concours
    .controller('FormulaireConcoursCtrl', function($scope,$routeParams,$location,ConcoursFactory,$filter) {
        $scope.new_concours = false;
        var niveau=$routeParams.niveau;
        var nb=niveau.substring(7);
        var action=$routeParams.action;
        var id=$routeParams.id || null;

        if(nb!=1 && nb!=3)
        {
            $location.path("/concours");
        }
        $scope.niveau=nb;

        if(action=="inscription")
        {
            $scope.titre="Inscription au concours niveau "+nb;
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
    })
    .controller('ConcoursCtrl', function($scope,$routeParams,$location,ConcoursFactory,$filter) {

    })
    .controller('ListeCandidatCtrl', function($scope,$routeParams,ConcoursFactory,$filter) {

        $scope.par_page = 15;
        var nv=$routeParams.niveau;
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
    });


