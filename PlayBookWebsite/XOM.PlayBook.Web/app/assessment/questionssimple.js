app.controller('appCtrl', ['$scope',function ($scope) {
    $scope.categories = ['Continuous Integration','Automated Testing', 'IaC','Continuous Delivery','Continuous Deployment','Continuous Monitoring',];
    $scope.questions = ['question1', 'question2', 'question3']
    $scope.options = ['option1', 'option2', 'option3', 'option4', 'option5'];
}]);

app.directive('repeatDone', function () {
    return function (scope, element, attrs) {
            if (scope.$last) {
                fixAccordion();
            }
    }
});

app.directive('fixElement', function () {
    return function (scope, element, attrs) {
        if (scope.$last) {
            var script = document.createElement('script');
            script.src = "components/exxon/em-unity-1.1.1.min.js";
            document.getElementsByTagName('head')[0].appendChild(script);
        }

    }
});

function fixAccordion() {

    var accordionItem = document.querySelectorAll('.em-js-accordion-item');
    var accordionBtn = document.querySelectorAll('.em-js-accordion-trigger');

    for (i = 0; i < accordionItem.length; i++) {
        accordionItem[i].classList.add('em-is-closed'); /* 1 */
    }

    for (i = 0; i < accordionBtn.length; i++) {
        accordionBtn[i].addEventListener('click', function (e) {
            e.preventDefault();
            var parent = this.parentNode.parentNode;
            var thisHref = this.getAttribute('href');
            var thisHrefSub = this.getAttribute('href').substring(1);

            toggleAccordion(parent);
        });
    }

    function toggleAccordion(el) {

        if (el.classList.contains('em-is-closed')) {
            el.classList.remove('em-is-closed'); /* 2 */
        }
        else {
            el.classList.add('em-is-closed'); /* 2 */
        }
    }

};

function fixElement(){
    // first grab the list of elements that you need to watch - just the elements, we will take care of child elements in the code below
    var elementsToBeClosed = Array.prototype.slice.call(document.querySelectorAll('.em-js-nav-dropdown, .em-js-nav-dropdown-trigger, .em-js-dropdown-check, .em-js-dropdown-trigger:not(.em-js-show-hide-trigger), .em-js-dropdown, .em-js-dropdown-radio, .em-js-dropdown-radio-trigger'));

    // when someone clicks the body, we run this:
    function handleBodyClick(e) {

        // we loop over every element and check...
        var stayOpen = elementsToBeClosed.some(function(el) {

            // ..if it is the actual element
            if (el === e.target) {
                return true;
            }

            // if it's a nested child element of one of the watched
            if (el.contains(e.target)) {
                return true;
            }

            // otherwise we should close them
            return false;
        });

        if(!stayOpen) {

            // var open = document.querySelectorAll('.em-is-active');

            elementsToBeClosed.forEach(function(el) {
                el.classList.remove('em-is-active');
            });
        }
    }
    document.body.addEventListener('click', handleBodyClick);
};


//var app = angular.module('testModule', [])
//    .controller('testController', ['$scope', '$http', function($scope, $http){
//        $http.get('Data/info.json').then(function(data){
//            $scope.data = data;

//            angular.forEach($scope.data, function(value, key){
//                if(value.Password == "thomasTheKing")
//                    console.log("username is thomas");
//            });
//        });

//    });