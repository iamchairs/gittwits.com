/// <reference path="../../.definitions/angularjs/angular.d.ts"/>

module Feed {
  export function twitDirectiveConfig($state: any) : Object {
    return {
      restrict: 'A',
      scope: {
        twit: '='
      },
      link: link
    };

    function link (scope: any, ele: any) {
      scope.getState = getState;

      var clean = angular.element('<div>'+scope.twit+'</div>').text();
      var twit = formatHashtags(formatUsers(scope.twit));
      ele.html(twit);
    }

    function formatHashtags (twit: string) : string {
      var hashtagRegex = /(#)(\w[\w\d]*)/g
      var hashtagLink = '<a href="/#/feed?s=%23$2">$1$2</a>';

      return twit.replace(hashtagRegex, hashtagLink);
    }

    function formatUsers (twit: string) : string {
      var userRegex = /(@)(\w[\w\d_.]*)/g
      var userLink = '<a href="https://github.com/$2">$1$2</a>';

      return twit.replace(userRegex, userLink);
    }

    function getState (search: string) : string {
      return $state.href('root.feed', {s: search});
    }
  }
}