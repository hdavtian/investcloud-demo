export default function($scope, $stateParams, $state, dataService){

    // set initial view options
    $scope.viewOptions = {
        graphical: true,
        list: false
    };

    $scope.viewOptionsHighlighter = function(){

        let graphicalIcon = $('#graphical-icon');
        let listIcon = $('#list-icon');

        if ($scope.viewOptions.graphical) {
            graphicalIcon.addClass('active');
            listIcon.removeClass('active');
        }

        if ($scope.viewOptions.list) {
            listIcon.addClass('active');
            graphicalIcon.removeClass('active');
        }

    };

    $scope.setViewOptions = function(config){
        $scope.viewOptions.graphical = config.graphical;
        $scope.viewOptions.list = config.list;
        $scope.viewOptionsHighlighter();
        $state.go('about');
    };

    // set default selected person when none provided
    if ($state.params.personName == undefined) {
        $state.go('about.people', {personName: 'john-wise'});
    };

    $scope.peopleListConfig = {
        sortType: 'name',
        sortReverse: false
    };

    $scope.viewOptionsHighlighter();
}