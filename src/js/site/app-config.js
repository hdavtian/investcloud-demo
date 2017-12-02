export default ['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("home");

    $stateProvider

        .state('home', {
            url: "/home",
            templateUrl: './templates/home.html'
        })

        .state('products', {
            url: '/products',
            templateUrl: './templates/products.html',
            controller: ['$scope', function($scope){
                $scope.greeting = "Hello from products"
            }]
        })

        // .state('products', {
        //     name: 'products',
        //     url: '/products',
        //     component: 'productsComponent'
        // })

        .state('products.product1', {
            url: '/product1',
            templateUrl: '/templates/products.product1.html'
        })

        .state('products.product', {
            url: '/:productId',
            views: {
                'productUiView' : {
                    templateUrl: '/templates/product-detail.html',
                    controller: ['$scope', '$stateParams', '$state', function ($scope, $stateParams, $state) {
                        // $scope.$state = $state;

                        // loop through products and choose the product with the given id
                        for (var i=0, l=$scope.products.length; i<l; i++){
                            if ($stateParams.productId == $scope.products[i].id){
                                $scope.product = $scope.products[i];
                                break;
                            }
                        }

                        // $scope.product = $stateParams.productId;
                    }]
                }
            }
        })

        .state('about', {
            url: '/about',
            templateUrl: './templates/about.html'
        })

}]