/**
 * Created by evari on 17/11/2015.
 */

var mois=["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Decembre"];

/******************************************************************************************************************
 controlleur pour le module header
 *****************************************************************************************************************/
app_header
    .controller('headerCtrl',['$scope','$location',
    function($scope,$location) {
        $scope.recherche=function(mot){
            console.log(mot);
            $location("recherche");
        }

        $scope.dateCourante=new Date();
        //$scope.menu="ecole";

    }]);

/******************************************************************************************************************
 controlleur pour le module accueil
 *****************************************************************************************************************/
app_accueil
    .controller('AccueilCtrl',['$scope','$stateParams','AccueilFactory','$filter',
    function($scope,$stateParams,AccueilFactory,$filter) {
        AccueilFactory.getEvenements().then(function(data){
            agenda(data,$filter);
        })

    }]);

/**
 * Cette fonction a pour role de renvoyer les deux evenements qui vont se realiser dans le mois
 * @param ev liste des evenements
 */
function agenda(ev,$filter){
    var currentMois=new Date().getMonth();
    var currentYear=new Date().getFullYear();
    var t=[];

    var e=$filter('filter')(ev,{mois:mois[currentMois],annee:currentYear},true)
    t.push(e);
    if(e.length==1)// il faut charger un evenement du mois prochain
    {
        if(currentMois==11)// il faut charger un evenement de janvier
        {
            currentYear++;
            currentMois=0;
        }
        else{
            currentMois++;
        }
    }
    e.push($filter('filter')(ev,{mois:mois[currentMois],annee:currentYear},true)[0]);

//TODO Chercher comment faire un orderby avec $filter
    // creation de l'objet du filtre
    console.log($filter('filter')(ev,{mois:mois[currentMois],annee:currentYear},true));
}