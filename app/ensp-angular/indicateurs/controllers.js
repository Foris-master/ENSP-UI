/**
 * Created by Thedward on 14/12/2015.
 */


/******************************************************************************************************************
 controlleur pour le module Indicateur
 *****************************************************************************************************************/
app_indicateur
    .controller('ListeIndicateurCtrl', ['$scope','IndicateurFactory',
    function($scope,IndicateurFactory) {


        $scope.loadIndicateur=function(){
            IndicateurFactory.getIndicateurs().then(
                function(data){

                    $scope.totalPages=data.length;
                    $scope.indicateurs=data;

                    console.log($scope.indicateurs);

                },function(msg){
                    console.log(msg);
                }
            );

        }

        $scope.changementPage=function(){
            $scope.loadIndicateur();
        }

        $scope.loadIndicateur();
    }])
    .controller('IndicateurCtrl', ['$scope','$stateParams','IndicateurFactory',
    function($scope,$stateParams,IndicateurFactory) {
        //recuperation de la indicateur
        IndicateurFactory.getIndicateurs().then(
            function(data){
                $scope.indicateur=data;

                angular.forEach(data,function(i,key){
                    if(i.tag=="stat-personnel"){
                        $scope.personnel=i;
                    }
                    else if(i.tag=="stat-etudiant"){
                        $scope.etudiant=i;
                    }
                })
                paintGraphIndicateur(data);

            },function(msg){
                console.log(msg);
            }
        );

    }]);


function paintGraphIndicateur(indicateur){
    angular.forEach(indicateur, function(i, key) {
        $('#'+ i.tag).highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: i.titre
            },
            subtitle: {
                text: 'Source: La direction/division statistique'
            },
            xAxis: {
                categories: i.statistiques.annee
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Nombre de personne'
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
            series: i.statistiques.donnees
        });
    }, []);

}
