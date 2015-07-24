module Header {
  export class HeaderController {
    $state: any;
    searchString: string;

    constructor($state) {
      this.$state = $state;
    }

    search() {
      this.$state.transitionTo('root.feed', {s: this.searchString});
      this.searchString = '';
    }
  }
}