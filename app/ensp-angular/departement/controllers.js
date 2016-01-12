/**
 * Created by Thedward on 21/11/2015.
 */


/******************************************************************************************************************
 controlleur pour le module Departement
 *****************************************************************************************************************/
app_departement
    .controller('ListeDepartementCtrl', ['$scope','DepartementFactory','$rootScope',
    function($scope,DepartementFactory,$rootScope) {

        console.log($rootScope);
        $scope.host_url=$rootScope.host_url;
        $scope.loadDepartement=function(){
            DepartementFactory.getDepartements().then(
                function(data){
                    
                    $scope.par_page=7;
                    $scope.departements=data;

                    console.log($scope.departements);

                },function(msg){
                    console.log(msg);
                }
            );

        }

        $scope.changementPage=function(){
            $scope.loadDepartement();
        }

        $scope.loadDepartement();
    }])
    .controller('DepartementCtrl', ['$scope','$stateParams','DepartementFactory',
    function($scope,$stateParams,DepartementFactory) {
        //recuperation de la departement
        console.log($stateParams);
        DepartementFactory.getDepartementObjet({sigle:$stateParams.sigle}).then(
                
                function(data){
                $scope.departement=data;
                console.log(data);
                $('#myCarousel').carousel({
                    interval:   7000
                });
                $scope.par_page=6;
                paintGraph(data.statistiques);

            },function(msg){
                console.log(msg);
            }
        );

    }]);


function paintGraph(statistique){
    angular.forEach(statistique, function(s, key) {

        $('#nv'+ s.niveau).highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Niveau '+ s.niveau
            },
            subtitle: {
                text: 'Source: La direction/division statistique'
            },
            xAxis: {
                categories: s.annee
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Nombre d\'élève'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y} élève(s)</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: s.donnees
        });
    }, []);

}
