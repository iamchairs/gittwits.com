module Feed {
  export class FeedController {
    twits: Array<any>;

    constructor(FeedService: any, $stateParams: any) {
      var vm = this;

      this.twits = [];

      FeedService.query($stateParams).then(function(res: any) {
        console.log(res);
        vm.twits.length = 0;

        for(var i = 0; i < res.length; i++) {
          vm.twits.push(res[i]);
        }
      });
    }

    relativeTime(time: Number) : string {
      var diff = new Date().getTime()/1000 - time;
      var english: string;

      if(diff < 60) {
        english = 'seconds';
      } else if (diff < 60*60) {
        english = 'minutes';
      } else if (diff < 60*60*24) {
        english = 'hours';
      } else if (diff < 60*60*24*31) {
        english = 'months';
      } else {
        english = 'years';
      }

      return moment().diff(moment(time*1000), english) + ' ' + english.replace('s', '(s)') + ' ago';
    }
  }
}