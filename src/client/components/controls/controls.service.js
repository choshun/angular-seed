class ControlsService {
  constructor($http) {
    this.name = 'control service';
    this.$http = $http;
  }

  getName() {
    return this.name;
  }

  getItems(githubUsername) {
    const githubUrl = 'https://api.github.com';
    return this.$http({
      method: 'JSONP',
      url: githubUrl + '/users/' +
      githubUsername + '?callback=JSON_CALLBACK'
    }).success(function(data) {
      // this callback will be called asynchronously
      // when the response is available
      return data.data;
    }).error(function(data, status) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      alert(status);
    });
  }
}

export default ControlsService;